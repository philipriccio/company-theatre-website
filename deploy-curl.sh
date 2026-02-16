#!/bin/bash
set -e

ACCOUNT_ID="bc527351dc5cb54ff2ed1e5e897de3cf"
PROJECT_NAME="company-theatre"
API_TOKEN="qE6jKL31uVa2lfPn6RYDbBdM4BjHoXlr0vdeyfBm"
DEPLOY_DIR="/data/.openclaw/workspace/company-theatre/deploy-files/dist"

echo "🔍 Creating manifest..."

# Create manifest JSON
cd "$DEPLOY_DIR"
MANIFEST="{"
FIRST=true

for file in $(find . -type f | sed 's|^\./||'); do
  HASH=$(sha256sum "$file" | cut -d' ' -f1)
  SIZE=$(stat -c%s "$file")
  
  if [ "$FIRST" = true ]; then
    FIRST=false
  else
    MANIFEST+=","
  fi
  
  # Properly escape the path for JSON
  ESCAPED_PATH=$(echo "/$file" | sed 's/\\/\\\\/g; s/"/\\"/g')
  MANIFEST+="\"$ESCAPED_PATH\":{\"hash\":\"$HASH\",\"size\":$SIZE}"
done

MANIFEST+="}"

echo "📦 Manifest created, calling Cloudflare API..."

# Create deployment using curl with multipart/form-data
RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/deployments" \
  -H "Authorization: Bearer ${API_TOKEN}" \
  -F "manifest=@-;type=application/json" <<< "$MANIFEST")

echo "Response: $RESPONSE"

# Check if successful
if echo "$RESPONSE" | grep -q '"success":true'; then
  echo "✅ Deployment created successfully!"
  DEPLOYMENT_ID=$(echo "$RESPONSE" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
  echo "🆔 Deployment ID: $DEPLOYMENT_ID"
else
  echo "❌ Deployment failed"
  exit 1
fi
