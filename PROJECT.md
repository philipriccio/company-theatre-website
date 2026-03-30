# Company Theatre Website — Project Overview

## 🎯 Vision
Public website for The Company Theatre showcasing the company's history, productions, and upcoming shows. Primary purpose: announce and promote Jackpot Twins (Philip's play, co-production with Mirvish).

## 👤 For Whom
The Company Theatre's public audience — theatregoers, press, industry professionals.

## 🏗️ Current State (Mar 29, 2026)
**Status:** Philip-reviewed, NOT yet pushed/deployed. 4+ commits ahead of origin.
**Repo:** https://github.com/philipriccio/company-theatre-website
**Local:** `/workspace/projects/company-theatre-website/`

### What's Built
- Homepage with company info + midnight auto-reveal (March 31 00:00 EST)
- Homepage reveal: full poster, "COMING 2027" overlay (Impact font), red "More Info" button → /jackpot-twins
- /jackpot-twins production page: poster, about, cast/creatives tabs, ticket CTAs
- Production history (13 shows since 2004)
- About page, Contact page
- CRM signup modal integration
- Responsive design

### Pending
- [ ] **Full responsive audit** — all device sizes before Tuesday March 31 (Philip requested)
- [ ] Push to origin + deploy via Coolify
- [ ] Final content review pass

## 📜 History

### Feb 17, 2026 — Initial Build
- Created Next.js site with Company Theatre branding
- Production history imported
- Basic pages built

### Feb 26, 2026 — Quote Formatting Fix
- Fixed responsive text wrapping issues in AnimatedQuotes component
- Changed from letter-by-letter animation to word-by-word animation
- Quotes now display correctly at all screen sizes (mobile, tablet, desktop)
- Words wrap at word boundaries instead of breaking mid-word

## 🔧 Technical Stack
- **Framework:** Next.js 16 + TypeScript + Tailwind CSS v4
- **Hosting:** TBD (likely DigitalOcean via Coolify)

## ⚠️ Critical Constraints
1. **March 31, 2026 deadline** — Jackpot Twins announcement
2. **Confidential until launch** — Jackpot Twins details are embargoed until March 31
3. **Must match Company Theatre brand** — Professional, sophisticated aesthetic

## 🚫 What NOT to Do
- Don't publish Jackpot Twins details before March 31
- Don't launch site without Philip's final approval

---
*Last updated: 2026-02-21 by Mildred*
