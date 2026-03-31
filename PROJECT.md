# Company Theatre Website — Project Overview

*Last updated: 2026-03-30 9:50 PM EST by Mildred*

## 🎯 Vision
Public website for The Company Theatre showcasing the company's history, productions, and upcoming shows.

## 🏗️ Current State
**Status:** LIVE ✅ — pushed and deployed
**URL:** https://companytheatre.ca
**Coolify UUID:** `vkw0c4wso0g4cg00oo8wok48`
**GitHub:** `philipriccio/company-theatre-website` (public, `stable-deploy` branch)
**Stack:** Next.js 16 + TypeScript + Tailwind CSS v4

### What's Live
- Homepage with company info
- **Midnight auto-reveal** — March 31 00:00 EDT: homepage flips to show full Jackpot Twins poster, "COMING 2027" overlay (Impact font), red "More Info" button → /jackpot-twins
- `/jackpot-twins` production page: poster, about section, cast grid (3+2 layout), creative team (including Janice Peters Gibson as Producer), ticket CTAs
- Cast bio modals
- Newsletter signup → CT CRM integration
- Production history (13 shows since 2004)
- About page, Contact page
- All images optimized (50-90% reductions)
- Preview URL: `https://companytheatre.ca?reveal`

### Known Issues
- [ ] Full responsive audit not done (Philip requested before March 31)

## 📜 History

### Feb 17, 2026 — Initial Build
Next.js site with Company Theatre branding, production history.

### Feb 26, 2026 — Quote Formatting Fix
Fixed responsive text wrapping in AnimatedQuotes component.

### Mar 30, 2026 — Jackpot Twins Launch Prep
- Pushed all pending commits and deployed
- Midnight auto-reveal timing fixed (EDT not EST)
- Cast grid layout: 3+2 for 5 cast members
- Janice Peters Gibson added as Producer
- Image optimization pass

## ⚠️ Design Rules
- **Contractual billing (NEVER FORGET):** "David and Hannah Mirvish and The Company Theatre Present" — per Section 4 of Mirvish agreement
- **Tickets messaging:** "Tickets are available now through an Off Mirvish Season Subscription. Or sign up to be the first to know when single tickets go on sale."
- Match existing visual language from poster/artwork
- Impact font for tagline overlay
