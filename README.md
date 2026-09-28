# Marija Vargas — Behavior Consultancy website

Website for Marija Vargas's consultancy (brand: **Marija Vargas · Behavior Analysis & Consulting**). She is an International Behavior Analyst (IBA) working with PFA & SBT, for families, professionals, schools and institutions, in DE, EN, HR (and ES).

| Path | What |
|---|---|
| [`site/`](site/README.md) | **v3**: static multilingual Astro site (DE + EN public, HR + ES built but hidden). This is the live code. |
| [`docs/2026-09-25-website-evaluation.md`](docs/2026-09-25-website-evaluation.md) | Agent-team evaluation of v1: findings, stack decision, draft brief, **questions for Marija (§5.8)** |
| [`docs/2026-08-replit-prompt-history.md`](docs/2026-08-replit-prompt-history.md) | How v1 was created in Replit + Replit's launch checklist |
| tag `v0.1-replit-draft` | v1 (Replit React monorepo), archived. Restore with `git checkout v0.1-replit-draft` |

## Status (2026-09-28)
- ✅ **v3.0.0**: multilingual (DE + EN public; HR + ES built, hidden until Marija's review), premium positioning, PFA/SBT approach, Marija's answers applied (`docs/decisions.md`), 55 pages, no cookies, no third-party requests.
- ⛔ **Launch blocker:** written approval of the side activity from her current employer (D4).
- ⏳ **Waiting on Marija:** the conversation in `docs/questionnaire/conversation-guide.md` (her story, her approach in her own words, region, FTF level) → fills the remaining `[[BITTE BESTÄTIGEN]]` placeholders.
- ⏳ **Waiting on Rodrigo:** Steuerberater (legal form, Kleinunternehmer), liability insurance, name + domain, Impressum data, EU host + form endpoint, real photo shoot.
- 📚 Research: competitors + keywords, market matrix (21 providers, demand), directories & listing plan, Hanley PFA/SBT positioning (all in `docs/`).

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
