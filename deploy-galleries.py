#!/usr/bin/env python3
"""
Deploy the build from dist/ to Cloudflare Pages
"""
import json
import hashlib
import os
import urllib.request
import urllib.error
from pathlib import Path
import ssl

# Build directory with updated galleries
DEPLOY_DIR = Path('/data/.openclaw/workspace/company-theatre/dist')
ACCOUNT_ID = 'bc527351dc5cb54ff2ed1e5e897de3cf'
PROJECT_NAME = 'company-theatre'
API_TOKEN = 'qE6jKL31uVa2lfPn6RYDbBdM4BjHoXlr0vdeyfBm'

def get_file_hash(content):
    return hashlib.sha256(content).hexdigest()

# Build manifest
print("🔍 Building manifest from build directory...")
print(f"   Source: {DEPLOY_DIR}")
manifest = {}
file_count = 0
for filepath in DEPLOY_DIR.rglob("*"):
    if filepath.is_file():
        relative_path = "/" + str(filepath.relative_to(DEPLOY_DIR)).replace("\\", "/")
        content = filepath.read_bytes()
        manifest[relative_path] = {
            "hash": get_file_hash(content),
            "size": len(content)
        }
        file_count += 1

print(f'📦 Built manifest with {file_count} files')

# Create deployment - send manifest directly in body as application/json
print("🚀 Creating deployment...")
url = f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/pages/projects/{PROJECT_NAME}/deployments"

# Build request body with manifest key
body = json.dumps({"manifest": manifest}).encode()
print(f"📊 Body size: {len(body)} bytes")

headers = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Content-Type": "application/json",
    "Content-Length": str(len(body))
}

req = urllib.request.Request(url, data=body, headers=headers, method='POST')

ctx = ssl.create_default_context()
try:
    with urllib.request.urlopen(req, context=ctx, timeout=120) as response:
        result = json.loads(response.read().decode())
        print(f"\n✅ Deployment created successfully!")
        
        deployment = result.get('result', {})
        deployment_id = deployment.get('id', 'unknown')
        preview_url = deployment.get('url', '')
        
        print(f"🆔 Deployment ID: {deployment_id}")
        print(f"🌐 Preview URL: {preview_url}")
        
        # Save upload data for file uploads
        with open('/data/.openclaw/workspace/company-theatre/upload_data.json', 'w') as f:
            json.dump(deployment, f, indent=2)
        print("💾 Upload data saved to upload_data.json")
        
except urllib.error.HTTPError as e:
    print(f"\n❌ HTTP Error {e.code}:")
    error_body = e.read().decode()
    print(error_body)
    
    # Try to parse and display nicely
    try:
        error_json = json.loads(error_body)
        print("\nParsed error:")
        print(json.dumps(error_json, indent=2))
    except:
        pass
        
except Exception as e:
    print(f"\n❌ Error: {e}")
    import traceback
    traceback.print_exc()
