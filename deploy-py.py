#!/usr/bin/env python3
import json
import hashlib
import os
import requests
import tempfile

DEPLOY_DIR = '/data/.openclaw/workspace/company-theatre/deploy-files/dist'
ACCOUNT_ID = 'bc527351dc5cb54ff2ed1e5e897de3cf'
PROJECT_NAME = 'company-theatre'
API_TOKEN = 'qE6jKL31uVa2lfPn6RYDbBdM4BjHoXlr0vdeyfBm'

# Build manifest
print("🔍 Building manifest...")
manifest = {}
for root, dirs, files in os.walk(DEPLOY_DIR):
    for file in files:
        full_path = os.path.join(root, file)
        rel_path = '/' + os.path.relpath(full_path, DEPLOY_DIR).replace(os.sep, '/')
        with open(full_path, 'rb') as f:
            content = f.read()
            hash_val = hashlib.sha256(content).hexdigest()
        manifest[rel_path] = {'hash': hash_val, 'size': len(content)}

print(f'📦 Built manifest with {len(manifest)} files')

# Save manifest to temp file
with tempfile.NamedTemporaryFile(mode='w', suffix='.json', delete=False) as f:
    json.dump(manifest, f)
    manifest_path = f.name

print(f'💾 Manifest saved to {manifest_path}')

# Create deployment
print("🚀 Creating deployment...")
url = f'https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/pages/projects/{PROJECT_NAME}/deployments'
headers = {'Authorization': f'Bearer {API_TOKEN}'}

with open(manifest_path, 'rb') as f:
    files = {'manifest': ('manifest.json', f, 'application/json')}
    resp = requests.post(url, headers=headers, files=files)

print(f'Response status: {resp.status_code}')
print(f'Response: {resp.text}')

if resp.status_code == 200:
    data = resp.json()
    if data.get('success'):
        print("✅ Deployment created successfully!")
        deployment = data.get('result', {})
        print(f"🆔 Deployment ID: {deployment.get('id')}")
        print(f"🔗 URL: {deployment.get('url', 'Pending...')}")
    else:
        print("❌ API returned error:", data.get('errors'))
else:
    print("❌ HTTP error:", resp.status_code)
