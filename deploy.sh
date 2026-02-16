#!/usr/bin/env bash
set -e

ACCOUNT_ID="bc527351dc5cb54ff2ed1e5e897de3cf"
PROJECT_NAME="company-theatre"
API_TOKEN="7D7lC3eHwt8uduZ5rrhAFOMsuZDQeqzoy1_dRtcz"
DEPLOY_DIR="/data/.openclaw/workspace/company-theatre/deploy-files/dist"

echo "Creating deployment..."

# Create deployment and get upload URLs
RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${PROJECT_NAME}/deployments" \
  -H "Authorization: Bearer ${API_TOKEN}" \
  -H "Content-Type: multipart/form-data" \
  -F "manifest=@/data/.openclaw/workspace/company-theatre/manifest.json;type=application/json")

echo "Response: $RESPONSE"
