# 🎭 Company Theatre - Cloudflare Pages Deployment

## Deployment Package Ready! 📦

**Archive:** `company-theatre-dist.tar.gz` (located in `/data/.openclaw/workspace/company-theatre/`)

This contains the fully built static site ready for deployment.

---

## 🚀 Deployment Options

### Option 1: Cloudflare Dashboard (Easiest - Recommended)

**Step 1: Extract the Archive**
```bash
cd /data/.openclaw/workspace/company-theatre/
tar -xzf company-theatre-dist.tar.gz
```

**Step 2: Deploy via Cloudflare Dashboard**

1. Visit https://pages.cloudflare.com/
2. Sign in to your Cloudflare account
3. Click **"Create a project"**
4. Select **"Upload assets"** option (not Git integration)
5. **Project name:** `company-theatre`
6. Drag and drop the **contents of the `dist/` folder** (not the folder itself) into the upload area:
   - `index.html`
   - `404.html`
   - `_next/` folder
   - `images/` folder
   - All `.svg` files

**Step 3: Wait for deployment**
- Cloudflare will upload and deploy your site
- You'll get a URL like: `https://company-theatre.pages.dev`

**Step 4: Add Custom Domain (test.companytheatre.ca)**
1. Go to your project's **"Custom domains"** tab
2. Click **"Set up a custom domain"**
3. Enter: `test.companytheatre.ca`
4. Cloudflare will verify DNS settings
5. Follow the SSL/TLS certificate provisioning steps

---

### Option 2: Wrangler CLI (Requires API Token)

If you want automated deployments later:

**Step 1: Create API Token**
1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **"Create Token"**
3. Use the **"Cloudflare Pages"** template or create custom with:
   - Zone:Read (for your domain)
   - Page:Edit (for Pages deployments)
4. Copy the token

**Step 2: Deploy**
```bash
# Set the token
export CLOUDFLARE_API_TOKEN="your-token-here"

# Deploy
cd /data/.openclaw/workspace/company-theatre/
npx wrangler pages deploy dist --project-name="company-theatre"
```

---

## 📁 What's in the Dist Folder

```
dist/
├── index.html          # Homepage
├── 404.html            # Error page
├── _next/              # Next.js assets (JS, CSS)
├── images/             # Image assets
└── *.svg               # Icon assets
```

This is a **static export** of the Next.js site - no server required!

---

## ✅ Expected Result

- **Cloudflare URL:** `https://company-theatre.pages.dev`
- **Custom Domain:** `https://test.companytheatre.ca`
- **Benefits:**
  - 🌍 Global CDN (200+ locations)
  - 🆓 Free hosting
  - 🔒 Automatic SSL/HTTPS
  - 🚀 Fast edge caching
  - ♾️ Unlimited bandwidth

---

## 🔄 Future Updates

To update the site after making changes:

```bash
cd /data/.openclaw/workspace/company-theatre/

# Rebuild the site
npm run build

# Create new deployment package
tar -czf company-theatre-dist.tar.gz dist/

# Then repeat the upload process via Cloudflare dashboard
```

---

## 🆘 Troubleshooting

**Issue:** Custom domain not working
- Ensure `test.companytheatre.ca` DNS is managed by Cloudflare
- Check that the orange cloud is enabled in DNS settings

**Issue:** Assets not loading
- Make sure you're uploading the **contents** of `dist/`, not the folder itself
- The `_next/` folder must be included

**Issue:** 404 errors
- The `index.html` should be at the root of the upload

---

**Archive ready at:** `/data/.openclaw/workspace/company-theatre/company-theatre-dist.tar.gz`

**Archive size:** Check with `ls -lh company-theatre-dist.tar.gz`
