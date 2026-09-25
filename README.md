# Marija Vargas — Behavior Consultancy website

Website for Marija Vargas's consultancy (working brand: **Vargas Human Behavior**). She is a senior human-behaviour / ABA consultant for families, professionals, institutions and Jugendämter in Germany.

| Path | What |
|---|---|
| [`site/`](site/README.md) | **v2**: static German Astro site (13 pages). This is the live code. |
| [`docs/2026-09-25-website-evaluation.md`](docs/2026-09-25-website-evaluation.md) | Agent-team evaluation of v1: findings, stack decision, draft brief, **questions for Marija (§5.8)** |
| [`docs/2026-08-replit-prompt-history.md`](docs/2026-08-replit-prompt-history.md) | How v1 was created in Replit + Replit's launch checklist |
| tag `v0.1-replit-draft` | v1 (Replit React monorepo), archived. Restore with `git checkout v0.1-replit-draft` |

## Status (2026-09-25)
- ✅ v2 built: no cookies, no third-party requests, self-hosted fonts, legal page templates, AA contrast, JSON-LD, sitemap, `llms.txt`.
- ⏳ **Waiting on Marija:** about 50 `[[BITTE BESTÄTIGEN]]` facts in `site/src/content/site.ts` (name, credentials, contact, region, prices, Impressum/Datenschutz data, ABA commitments). The questions are in the evaluation §5.8.
- ⏳ Decisions: domain (.de), EU static host, form backend (PHP mailer on the host or an EU form service), legal review of Impressum/Datenschutz.

## Run
```bash
cd site
npm install
npm run dev     # http://localhost:4321
npm run build   # static output in site/dist
```

## Launch checklist
1. Marija answers §5.8 → fill `site/src/content/site.ts`.
2. `grep -r "BITTE BESTÄTIGEN" site/dist` returns nothing.
3. Legal review of Impressum and Datenschutz.
4. Register the domain, choose an EU host, set `SITE_URL` and `PUBLIC_FORM_ENDPOINT`, deploy `site/dist`.
5. Send a real test enquiry and check all pages on a phone.
