# Company Theatre Website — Project Overview

*Last updated: 2026-09-07 8:58 PM EST by Mildred*

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

### Sep 7, 2026 — Jackpot Twins Interim Key Art (Live)
- Philip asked to remove the AI-generated two-women campaign artwork from the Company Theatre site and use a temporary title-only card.
- Generated `public/images/jackpot-twins/title-card.png` at 1536×1024. Philip's second-pass direction is now applied: exact flat Plinko pink `#E8308A`, Plinko blue `#5BB8E8` for `JACKPOT TWINS`, pure white for `A NEW COMEDY BY PHILIP RICCIO`, and `TWINS` optically centred beneath `JACKPOT`; no people or additional imagery. The final raster was flattened to remove generated gradients, shadows, and rough letter edges.
- Updated the homepage announcement, `/jackpot-twins`, current-production data, Open Graph, and Twitter references. Removed the six old poster variants.
- Moved the homepage `Coming 2027` / `More Info` CTA below the image after mobile proof showed the old overlay obscured the new title.
- Philip approved the replacement. Release commit `13a1083` was pushed to `main` and `stable-deploy`; Coolify deployment `gm8j8fe04z30smwaqy3ixxa6` finished successfully on Docker image `vkw0c4wso0g4cg00oo8wok48:13a108380c2c7f24323476490ae8cac483fdba52`.
- Initial live proof passed: `/`, `/jackpot-twins`, and `title-card.png` returned 200; the removed poster URL returned 404 before the search-image cleanup below; rendered markup contained one 1536×1024 title card and no stale poster references; desktop 1440×1000 and mobile 390×844 screenshots showed clean, uncropped art, the separate homepage CTA strip, and no horizontal overflow.
- Search-image cleanup released in `402a6ad` via Coolify deployment `l9bibx6glkhg7xqov6a05jug`. All six retired Jackpot Twins poster URLs now return permanent `308` redirects to `title-card.png`; following each redirect returns the approved PNG with an exact byte-for-byte match to the repository asset. Live page, Open Graph, and Twitter metadata contain only `title-card.png`, and a public search check found no indexed Company Theatre result for the retired `poster-web` paths. Search-engine thumbnail caches remain outside site control and may take time to refresh.

## ⚠️ Design Rules
- **Contractual billing (NEVER FORGET):** "David and Hannah Mirvish and The Company Theatre Present" — per Section 4 of Mirvish agreement
- **Tickets messaging:** "Tickets are available now through an Off Mirvish Season Subscription. Or sign up to be the first to know when single tickets go on sale."
- Interim Jackpot Twins key art is title-only on exact Plinko pink `#E8308A`; do not restore AI-generated people without Philip's direction.
- Impact font for tagline overlay

### Sep 10, 2026 — New Mirvish Title Lockup Release
- Retrieved Otto Pierre's original transparent `jt-2026-logo-NEW.png` from the Mirvish SharePoint link in his email; verified it as a 2405×1518 RGBA image and preserved the untouched source in `projects/jackpot-twins/assets/`.
- Rebuilt `public/images/jackpot-twins/title-card.png` on flat pink `#E8308A`, using Otto's silver-and-gold lockup and retaining the white `A NEW COMEDY BY PHILIP RICCIO` byline.
- Production build passed. Desktop 1440×1000 and mobile 390×844 proof from the standalone production build showed the full title card uncropped with no horizontal overflow.
- Local development remains affected by the repository's known parent-workspace Tailwind resolution issue; the production build is the reliable proof.
- Philip approved the verified local release candidate for production deployment on Sep. 10.
