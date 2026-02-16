# 🎭 Company Theatre - Deployment Options

## Option 1: Quick Public URL (Fastest - 30 seconds)

Run the provided script to get an instant public URL:

```bash
cd /data/.openclaw/workspace/company-theatre
./serve-public.sh
```

This will:
- Start a local server on port 8080
- Create a public URL at: **https://company-theatre.loca.lt**

**Note:** Localtunnel may ask for an IP confirmation on first visit. The IP is shown in the script output.

---

## Option 2: Netlify Drop (Permanent URL - No Signup)

For a permanent URL without keeping a server running:

### Step 1: Download the zip file
```bash
# The zip is already created at:
/data/.openclaw/workspace/company-theatre/company-theatre-netlify.zip
```

### Step 2: Upload to Netlify Drop
1. Go to **https://drop.netlify.com**
2. Drag and drop the `company-theatre-netlify.zip` file
3. Netlify will instantly deploy and give you a permanent URL like `https://random-name.netlify.app`

**That's it!** No signup required. The site will be live in seconds.

---

## Option 3: Manual Python Server

If you just want to serve locally:

```bash
cd /data/.openclaw/workspace/company-theatre/dist
python3 -m http.server 8080
```

Then access at: http://localhost:8080

---

## Files Summary

| File | Purpose |
|------|---------|
| `company-theatre-netlify.zip` | Ready to upload to Netlify Drop |
| `serve-public.sh` | One-command public URL generator |
| `dist/` | Static site files (can be served directly) |

---

## Recommendation

- **For quick testing:** Use Option 1 (serve-public.sh)
- **For a permanent shareable link:** Use Option 2 (Netlify Drop)

Both require zero VPS configuration or port forwarding!
