# Company Theatre Website — Source of Truth

**This folder is the canonical source for the Company Theatre Cloudflare Pages deployment.**

- Source: `/data/.openclaw/workspace/company-theatre/website/`
- Build output (deployed): `/data/.openclaw/workspace/company-theatre/website/dist/`
- Latest known deployment (as of 2026-02-15): https://f7a11f0c.company-theatre.pages.dev/

## Guardrails

1) **Always edit source in this folder** (not older copies under `/projects/`).
2) After changes: **rebuild → verify `dist/` → deploy**.
3) If there’s ever a mismatch between what Philip sees and what’s in the workspace, treat the deployed URL as ground truth and reconcile from here.
