#!/bin/bash
# Company Theatre - Quick Server + Public URL
# Usage: ./serve-public.sh

echo "🎭 Starting Company Theatre server..."

# Kill any existing Python server on port 8080
pkill -f "python3 -m http.server 8080" 2>/dev/null

# Start static file server
cd /data/.openclaw/workspace/company-theatre/dist
python3 -m http.server 8080 > /tmp/theatre-server.log 2>&1 &
SERVER_PID=$!
sleep 2

# Verify server is running
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/ | grep -q "200"; then
    echo "✅ Local server running on http://localhost:8080"
else
    echo "❌ Failed to start local server"
    exit 1
fi

# Start localtunnel for public access
echo "🌐 Creating public URL..."
npx localtunnel --port 8080 --subdomain company-theatre &
TUNNEL_PID=$!
sleep 5

echo ""
echo "=========================================="
echo "🎭 Company Theatre is live!"
echo "=========================================="
echo "Public URL: https://company-theatre.loca.lt"
echo "Local URL:  http://localhost:8080"
echo ""
echo "To stop: kill $SERVER_PID $TUNNEL_PID"
echo "=========================================="

# Keep script running
wait
