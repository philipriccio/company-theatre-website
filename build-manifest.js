const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DEPLOY_DIR = '/data/.openclaw/workspace/company-theatre/deploy-files/dist';

// Get hash of file content
function getFileHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

// Recursively get all files
async function getAllFiles(dir, baseDir = dir) {
  const files = [];
  const entries = await fs.promises.readdir(dir);
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stats = await fs.promises.stat(fullPath);
    
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

async function main() {
  const files = await getAllFiles(DEPLOY_DIR);
  const manifest = {};
  
  for (const file of files) {
    const content = await fs.promises.readFile(file.fullPath);
    const hash = getFileHash(content);
    // Ensure path starts with /
    const key = '/' + file.path.replace(/\\/g, '/');
    
    manifest[key] = {
      hash: hash,
      size: file.size
    };
  }
  
  console.log(JSON.stringify({ manifest }, null, 2));
}

main();
