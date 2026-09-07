# Company Theatre Website — Project Overview

*Last updated: 2026-09-07 5:56 PM EST by Mildred*

## 🎯 Vision
Public website for The Company Theatre showcasing the company's history, productions, and upcoming shows.

## 🏗️ Current State
**Status:** LIVE ✅ — pushed and deployed
**URL:** https://companytheatre.ca
**Coolify UUID:** `vkw0c4wso0g4cg00oo8wok48`
**GitHub:** `philipriccio/company-theatre-website` (public, Coolify deploys `main`; `stable-deploy` mirrored)
**Stack:** Next.js 16 + TypeScript + Tailwind CSS v4

### What's Live
- Homepage with company info
- **Midnight auto-reveal** — March 31 00:00 EDT: homepage flips to show full Jackpot Twins poster, "COMING 2027" overlay (Impact font), red "More Info" button → /jackpot-twins
- `/jackpot-twins` production page: poster, about section, cast grid (3+2 layout), creative team (including Janice Peters Gibson as Producer), ticket CTAs
- Cast bio modals
- Newsletter signup → CT CRM integration
- Production history (13 shows since 2004)
- About page, Contact page
- `/support` page with embedded CanadaHelps form `2896`; **Support** navigation and footer links
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

### Sep 7, 2026 — CanadaHelps Support Page
- Philip approved the direction: add **Support** to the primary navigation and embed a CanadaHelps donation form on a dedicated `/support` page.
- Verified the Company Theatre CanadaHelps charity profile is live at `https://www.canadahelps.org/en/charities/the-company-theatre/`, charity ID `87208`, CRA business number `860308949RR0001`, and accepts one-time, monthly, and securities donations.
- Live donor flow currently offers `1. The Company Theatre` as the default fund plus `2. Diane Mugford and Carl Steiss Legacy Fund`.
- `philip@companytheatre.ca` has a valid CanadaHelps charity account and receives donation/EFT notices. CanadaHelps emails link to the authenticated Donation Forms editor.
- Philip supplied CanadaHelps form `2896`. Implemented locally: dedicated `/support` page, responsive CanadaHelps embed, desktop/mobile **Support** navigation, footer link, sitemap entry, SEO metadata, accessible iframe title, no-JavaScript message, and direct-profile fallback.
- Verification passed: `npx tsc --noEmit`, `npm run build`, static `/support` generation, live CanadaHelps iframe URL, desktop layout at 1440×1000, mobile layout at 390×844, mobile-menu navigation, and client-side embed initialization. The existing `npm run lint` remains blocked by the repository's pre-existing invalid `eslint.config.mjs` syntax.
- Philip confirmed form `2896` should keep both fund choices, with `1. The Company Theatre` as the default.
- Released in `4084acc` with deployment hardening in `090cb23`. The first Coolify run `agmyh2j8i7ndro4o3h0x5i1v` failed after a successful Next build because Nixpacks left a Unix socket in the Nix layer that Docker could not export. Replaced Nixpacks with a multi-stage standalone Next.js Dockerfile and `.dockerignore`; changed only this Coolify app's build pack from `nixpacks` to `dockerfile` (`/Dockerfile`). Corrective deployment `pbjd5oo90trs1ds4ok873r87` finished successfully on image `vkw0c4wso0g4cg00oo8wok48:090cb231a4c78eea5a5a610951567292465d6cea`.
- Live proof passed: `/`, `/support`, and sitemap return 200; desktop and mobile layouts render cleanly; mobile-menu navigation reaches `/support`; iframe points to CanadaHelps form `2896`; `1. The Company Theatre` is selected by default and the Diane Mugford/Carl Steiss Legacy Fund remains available. CanadaHelps emits a benign cross-origin console access warning from inside its own iframe, but the form renders and functions.

## ⚠️ Design Rules
- **Contractual billing (NEVER FORGET):** "David and Hannah Mirvish and The Company Theatre Present" — per Section 4 of Mirvish agreement
- **Tickets messaging:** "Tickets are available now through an Off Mirvish Season Subscription. Or sign up to be the first to know when single tickets go on sale."
- Match existing visual language from poster/artwork
- Impact font for tagline overlay
