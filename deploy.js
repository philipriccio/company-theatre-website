#!/usr/bin/env node
/**
 * Cloudflare Pages Direct Upload Script
 * Creates file manifest and uploads to Cloudflare Pages
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const ACCOUNT_ID = 'bc527351dc5cb54ff2ed1e5e897de3cf';
const PROJECT_NAME = 'company-theatre';
const API_TOKEN = 'qE6jKL31uVa2lfPn6RYDbBdM4BjHoXlr0vdeyfBm';
const DEPLOY_DIR = '/data/.openclaw/workspace/company-theatre/dist';

// Get hash of file content
function getFileHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

// Recursively get all files
async function getAllFiles(dir, baseDir = dir) {
  const files = [];
  const entries = await readdir(dir);
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stats = await stat(fullPath);
    
    if (stats.isDirectory()) {
      const subFiles = await getAllFiles(fullPath, baseDir);
      files.push(...subFiles);
    } else {
      const relativePath = path.relative(baseDir, fullPath);
      files.push({
        path: relativePath,
        fullPath: fullPath,
        size: stats.size
      });
    }
  }
  
  return files;
}

// Make HTTPS request
function makeRequest(url, method = 'GET', headers = {}, body = null) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: headers
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed, headers: res.headers });
        } catch {
          resolve({ status: res.statusCode, data: data, headers: res.headers });
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

// Upload file to presigned URL
async function uploadFile(url, content, contentType) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname + urlObj.search,
      method: 'PUT',
      headers: {
        'Content-Type': contentType || 'application/octet-stream',
        'Content-Length': content.length
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ success: true });
        } else {
          reject(new Error(`Upload failed: ${res.statusCode} - ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(content);
    req.end();
  });
}

async function deploy() {
  console.log('🔍 Scanning files...');
  const files = await getAllFiles(DEPLOY_DIR);
  console.log(`Found ${files.length} files`);

  // Build manifest
  console.log('📦 Building manifest...');
  const manifest = {};
  
  for (const file of files) {
    const content = await readFile(file.fullPath);
    const hash = getFileHash(content);
    const key = '/' + file.path.replace(/\\/g, '/'); // Normalize path with leading slash
    
    manifest[key] = {
      hash: hash,
      size: file.size
    };
  }

  // Create deployment
  console.log('🚀 Creating deployment...');
  const createUrl = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/deployments`;
  
  const createResponse = await makeRequest(
    createUrl,
    'POST',
    {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    JSON.stringify({ manifest: manifest })
  );

  console.log('Create response:', JSON.stringify(createResponse.data, null, 2));

  if (!createResponse.data.success) {
    console.error('❌ Failed to create deployment:', createResponse.data.errors);
    process.exit(1);
  }

  const deployment = createResponse.data.result;
  const uploadUrls = deployment.upload_urls || [];
  
  console.log(`📤 Uploading ${uploadUrls.length} files...`);

  // Upload files
  let uploaded = 0;
  for (const uploadInfo of uploadUrls) {
    const filePath = uploadInfo.key.startsWith('/') ? uploadInfo.key.slice(1) : uploadInfo.key;
    const fullPath = path.join(DEPLOY_DIR, filePath);
    
    try {
      const content = await readFile(fullPath);
      // Detect content type
      const ext = path.extname(filePath).toLowerCase();
      const contentTypeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon',
        '.txt': 'text/plain'
      };
      const contentType = contentTypeMap[ext] || 'application/octet-stream';
      
      await uploadFile(uploadInfo.url, content, contentType);
      uploaded++;
      if (uploaded % 10 === 0) {
        console.log(`  Uploaded ${uploaded}/${uploadUrls.length}...`);
      }
    } catch (err) {
      console.error(`  ❌ Failed to upload ${filePath}:`, err.message);
    }
  }

  console.log(`✅ Uploaded ${uploaded}/${uploadUrls.length} files`);

  // Finalize deployment (if needed)
  // Cloudflare Pages direct upload typically doesn't need explicit finalization
  // The deployment becomes active once files are uploaded

  console.log('\n🎉 Deployment complete!');
  console.log(`🔗 URL: https://${PROJECT_NAME}.pages.dev`);
  console.log(`🆔 Deployment ID: ${deployment.id}`);
  
  return deployment;
}

deploy().catch(err => {
  console.error('❌ Deployment failed:', err);
  process.exit(1);
});
