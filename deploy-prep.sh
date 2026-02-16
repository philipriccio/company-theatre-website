#!/bin/bash
# Quick deploy prep script for Cloudflare Pages

echo "🎭 Company Theatre - Cloudflare Pages Deploy Prep"
echo "=================================================="

# Navigate to project directory
cd "$(dirname "$0")"

# Extract the dist archive
echo "📦 Extracting deployment archive..."
tar -xzf company-theatre-dist.tar.gz

echo ""
echo "✅ Ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Go to https://pages.cloudflare.com/"
echo "2. Create new project → Upload assets"
echo "3. Drag and drop the contents of: $(pwd)/dist/"
echo ""
echo "📁 Files to upload:"
ls -la dist/
