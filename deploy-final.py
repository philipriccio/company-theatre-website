#!/usr/bin/env python3
import json
import hashlib
import os
import tempfile
import urllib.request
import urllib.parse

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

# Create multipart form data manually
boundary = '----WebKitFormBoundary' + os.urandom(16).hex()

with open(manifest_path, 'rb') as f:
    manifest_content = f.read()

body = (
    b'--' + boundary.encode() + b'\r\n'
    b'Content-Disposition: form-data; name="manifest"; filename="manifest.json"\r\n'
    b'Content-Type: application/json\r\n\r\n'
    + manifest_content + b'\r\n'
    b'--' + boundary.encode() + b'--\r\n'
)

# Create deployment
print("🚀 Creating deployment...")
url = f'https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/pages/projects/{PROJECT_NAME}/deployments'

req = urllib.request.Request(
    url,
    data=body,
    headers={
        'Authorization': f'Bearer {API_TOKEN}',
        'Content-Type': f'multipart/form-data; boundary={boundary}'
    },
    method='POST'
)

try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode())
        print(f"✅ Deployment created successfully!")
        deployment = data.get('result', {})
        print(f"🆔 Deployment ID: {deployment.get('id')}")
        print(f"🔗 URL: {deployment.get('url', 'Pending...')}")
        
        # Save deployment info for upload
        with open('/tmp/deployment.json', 'w') as f:
            json.dump(deployment, f)
        print("💾 Deployment info saved to /tmp/deployment.json")
except urllib.error.HTTPError as e:
    print(f"❌ HTTP error: {e.code}")
    print(f"Response: {e.read().decode()}")
except Exception as e:
    print(f"❌ Error: {e}")
