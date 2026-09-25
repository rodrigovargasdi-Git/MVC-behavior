# Website evaluation: Marija Vargas consultancy draft (Replit build)

**Date:** 2026-09-25
**Reviewed by:** agent team lenses: project-manager (01), seo-content-strategist (03), ux-ui-designer (04), compliance-reviewer (09), qa-reviewer (10). Playbook: `skills-library/playbooks/website-launch.md`.
**Object:** `artifacts/vargas-behavior/` (React 19 + Vite 7 + Tailwind 4, single page `src/App.tsx`, `index.html`, `src/index.css`). The rest of the monorepo (`api-server`, `lib/*`, `mockup-sandbox`) was checked only to judge the stack.

**Method and scope**
- Static review of all site source files, plus the Replit story and launch checklist (`Prompt history.txt`).
- The existing build (`dist/public`) was served locally and opened at 1440, 1280, 375 and 360 px. Contrast, heading tree, tap targets, overflow and focus were measured with scripts in the rendered page.
- Not done: no `pnpm install`, no rebuild, no Lighthouse run. The contact form cannot be tested end to end because it has no backend. Screenshots below the fold failed in the preview pane, so the design judgement for lower sections comes from source plus DOM measurements.
- Not legal advice. Items marked **(lawyer)** need a German lawyer or Datenschutz professional.

---

## 1. Verdict

1. **Not launchable.** It is a polished-looking one-page prototype. It has a fake contact form, no Impressum or privacy policy, placeholders and internal notes visible to visitors, and Google Fonts loaded from Google without consent.
2. **Blockers:** (a) no working conversion path, (b) missing legal pages (§5 DDG, Art. 13 DSGVO), (c) third-party font loading, (d) placeholders and missing proof (credentials, experience, photo), (e) no agreed goal, name or ABA positioning to write final copy against.
3. **Path:** keep the visual direction and most of the German tone. Answer the Phase-0 questions (§5). Then rebuild as a small, prerendered, multi-page static site on an EU host with an EU form endpoint. This is about 2–4 build days once Marija's content exists.

---

## 2. Scorecard

| Lens | Score (1–5) | Reason |
|---|---|---|
| Goal clarity | **2** | Five audiences (families, professionals, institutions, Jugendämter, conference organisers) sit on one page with eight different CTA labels. There is no primary goal and no KPI, and the premium-family and public-sector pitches compete. |
| Messaging / copy | **3** | Warm, respectful German with no cure or guarantee claims, and good disclaimers. But the headline is abstract. The words "Autismus" and "ABA" never appear. Her strongest proof (10+ years, supervising therapists) is absent. English and German are mixed in labels. |
| SEO / AEO | **1** | Client-rendered SPA with an empty HTML body. Static meta still says "built on Replit". `lang="en"`. One URL for every intent, 0 `<a>` links, and collapsed FAQ answers are not in the DOM. No JSON-LD, canonical, sitemap or og:image. |
| Visual design / AI-slop | **3** | The palette and serif display type are distinctive and suit the brand. But decoration is stacked in layers (noise overlay, blobs, grid, vertical mono labels, floating chips, a stamp, 01/02/03 numbering everywhere), and the CSS "pseudo-portrait" reads as a placeholder. |
| Accessibility | **2** | 49 text elements fail WCAG AA contrast, including both primary CTAs (3.17:1). There is 8–11 px type, a wrong page language, `maximum-scale=1`, no skip link and weak input focus. Positives: labels wrap inputs, `aria-expanded` on the FAQ, and `prefers-reduced-motion` is respected. |
| Compliance DE | **1** | No Impressum or Datenschutz (they are non-clickable `[brackets]`). Google Fonts load without consent. A "consent" sentence on a form that sends nothing. De-facto collection of children's health data. Ambiguous VAT on prices. "therapeutisch" wording. |
| Technical / stack | **2** | It typechecks and renders without horizontal scroll. But it ships a monorepo (Express, Postgres, Drizzle, Orval) that does nothing (the only API route is `/healthz`), 357 KB JS plus 101 KB CSS for a static page, a Vite config that fails without Replit env vars, and English 404 and error pages. |

**Replit's handover versus reality** (`Prompt history.txt:60–83`):

| Replit claimed | Reality |
|---|---|
| "SEO metadata and Open Graph tags" | Static tags are Replit defaults. Real tags are only injected by JS. |
| "Impressum, Datenschutz placeholders" | Plain text spans: no link, no page, no route. |
| "Accessible responsive layout" | 49 contrast failures, wrong `lang`, zoom restricted, H1 clipped at 360 px. |
| "Contact … flow with validation" | Validation exists. Submission is a `setTimeout`, and nothing is sent. |

---

## 3. Findings

Ranked blocker / major / minor. Every line reference is to `artifacts/vargas-behavior/` unless another path is given.

### 3.1 Blockers

| # | Finding | Evidence | Fix |
|---|---|---|---|
| **B1** | **The contact form sends nothing.** The only conversion on the site is a demo. | `src/App.tsx:308–317` (`window.setTimeout(… setSubmitted(true) …)`, no request). The success text says "Das ist eine Demo-Bestätigung" (`App.tsx:322`). | Wire the form to an EU endpoint (see §4: a PHP mailer on the EU host, or an EU form service with an AVV). Add server-side validation, a honeypot, and an auto-reply stating the expected response time. Test a real submission from mobile and desktop. Fallback for day 1: a `mailto:` plus a booking link-out. |
| **B2** | **No Impressum and no privacy policy.** | Footer renders `[Impressum]`, `[Datenschutz]`, `[Barrierefreiheit]` and `[Cookie-Hinweise]` as plain `<span>`s (`App.tsx:329`). Only the `/` route exists (`App.tsx:351`). The form says "Details in der Datenschutzerklärung" with no link (`App.tsx:322`). | Create `/impressum` (§5 DDG: name, address, email and phone, legal form, USt-IdNr. if any, professional title and where it was awarded) and `/datenschutz` (Art. 13 DSGVO: controller, host, mail and form processors, purposes, legal bases, retention, rights). Link both from every page footer and from the form. A generator plus a lawyer's check is sufficient **(lawyer)**. Data items: Replit checklist §12 (labelled "2." at `Prompt history.txt:507–548`). |
| **B3** | **Google Fonts load from Google servers without consent.** This transmits visitor IPs to Google, the pattern behind LG München I, 20.01.2022, 3 O 17493/20 and the 2022 Abmahn wave. | `index.html:16–18` (Inter, which is **not used anywhere**), and `src/index.css:1` (`@import` of DM Serif Display, Manrope and Space Mono). | Self-host the three used families as woff2 files (e.g. via `@fontsource/*` or downloaded files), and delete the Inter link and both `preconnect`s. After this, the site sets no cookies and no third-party requests, so **no consent banner is needed** (TDDDG §25). Keep it that way: link out to booking, video and maps; do not embed them. |
| **B4** | **Placeholders and internal notes are visible to visitors.** | Qualifications `[Exakte Abschlüsse & Zertifizierungen vor Launch ergänzen]` (`App.tsx:248`). `[Rechtliche Unternehmensdaten vor Launch ergänzen.]` (`:283`). `[E-Mail-Adresse …]` and `[Telefonnummer …]` (`:320`). Footer: "Ein Arbeitsname für eine neue Praxis. Gemeinsam mit Marija wird die finale Marke vor dem Launch festgelegt." and "· Arbeitsname" (`:329`). "Possible keynote theme" (`:292`). "Der Start ist in Deutschland geplant" (`:85`). | Replace with facts Marija confirms in writing, collected via the Replit template (`Prompt history.txt:634–675`). Delete any element whose fact is not confirmed rather than keeping a placeholder. |
| **B5** | **No agreed goal, name or positioning.** The final copy, domain, Impressum and pricing all depend on these decisions. | No brief exists. The site is built for five audiences at once. The brand is marked as a working name. ABA is not addressed (see §3.4). | Run Phase 0: agree the brief in §5 with Marija, including one primary goal, one KPI, the name and the ABA stance. |

### 3.2 Major

| # | Finding | Evidence | Fix |
|---|---|---|---|
| **M1** | **Content is invisible without JavaScript.** AI crawlers (GPTBot, ClaudeBot, PerplexityBot) generally do not run JS, so the site cannot be cited by assistants. Google indexes it late. The hero text renders only after a 357 KB bundle, which hurts LCP. | `index.html:21` has an empty `<div id="root">`. All copy is in `App.tsx`. | Prerender to static HTML per page. This is the main reason for the stack change in §4. |
| **M2** | **Static meta tags are Replit defaults.** LinkedIn, WhatsApp and Slack previews and non-JS crawlers see "Vargas Human Behavior — built on Replit. Update this description to reflect the app." | `index.html:6–14`. The JS override in `App.tsx:334–345` does not reach them. `twitter:card=summary_large_image` has no `og:image`. There is no `og:url` or canonical. | Set per-page static `<title>` (≤ 60 chars) and meta description (≤ 155), a 1200×630 `og:image`, `og:url` and a self-referencing canonical. |
| **M3** | **Wrong document language.** Screen readers read the German text with English pronunciation (WCAG 3.1.1), and search engines get a mixed signal. | `index.html:2` has `lang="en"`. | Set `lang="de"`. Mark English fragments with `lang="en"`, or remove them (m3). |
| **M4** | **One URL for five intents, and no links at all.** Navigation is `<button>` + `scrollIntoView`. The page has **0 `<a>` elements**, so there are no shareable section URLs, no internal links and nothing for a sitemap. | `App.tsx:38–44`, `105`, `113–114`, `123`, `329`. | Move to a multi-page IA with real `<a href>` (keyword map in §5, "Scope"). This also shortens pages: the current single page is about 8,500 px tall on desktop and **about 14,400 px on mobile (about 18 screens)**. |
| **M5** | **Keyword gap.** "Autismus" and "ABA" appear **nowhere**. "Angewandte Verhaltensanalyse" appears once (`App.tsx:245`). The lead term "Human-Behavior-Beratung" (`App.tsx:138, 336`) is neither a German search term nor a recognised profession. | grep over `App.tsx`. | Name the offer in the words buyers use: H1 = offer + audience + region. Build a keyword map per page (§5) and validate it with a keyword tool before writing. |
| **M6** | **No proof on the page.** "10+ Jahre" is never stated. There are no credentials, photo, memberships, numbers, testimonials or case vignettes. The About "portrait" is CSS shapes (`App.tsx:233–238`). | `App.tsx:227–255` and the whole page. | Add the real facts: years, number of therapists supervised and trainings given, languages, credentials with exact wording, a real portrait. Put the proof next to the claim it supports (hero and About). Testimonials: professionals and institutions first; anonymised parents only with written consent (Replit §14). |
| **M7** | **Contrast failures (WCAG 1.4.3), measured in the rendered build: 49 text nodes.** Worst: both primary CTAs "Gespräch beginnen" and "Anfrage senden", `#fff8ef` on `#d96d58`, at **3.17:1**. Eyebrows (`--accent` `#d96d58` on ivory) 2.9–3.5:1. Body text at `/55–/65` opacity 3.2–4.1:1. Footer legal line **2.68:1** at 9 px. Form privacy note **2.74:1** at 10 px. | CTAs `App.tsx:140, 322`. Eyebrow `index.css:146`. Muted text e.g. `App.tsx:176, 187, 264–265, 281, 283, 329`. | Remove-first, within the existing palette: use the existing terracotta `#8e493b` for the primary CTA fill (6.3:1 with `#fff8ef`) or text colour, and keep coral `#d96d58` only for decoration. Set a minimum text opacity of `/75` on ivory. Use `#8e493b` for eyebrows on light backgrounds (5.85:1). Re-measure after the change. |
| **M8** | **Tiny type.** 39 text elements are under 11 px, down to 8 px (mono labels, brand sub-line, "Founder · Consultant", legal footer). | `App.tsx:111, 160, 165, 167, 215, 239–240, 329`. | Minimum 12 px for anything meant to be read. Delete purely decorative labels (see m4). |
| **M9** | **Zoom restricted** (WCAG 1.4.4). Lighthouse flags this too. | `index.html:5` has `maximum-scale=1`. | Remove `maximum-scale=1`. |
| **M10** | **Forms and health data.** The free-text field "Worum geht es grob?" invites parents to describe a child's diagnosis and behaviour, which is special-category health data under Art. 9 DSGVO. The placeholder "Bitte keine sensiblen Gesundheitsdaten" is not a control. The sentence "Mit dem Absenden stimmen Sie der Kontaktaufnahme … zu" frames consent as the legal basis and links nothing. | `App.tsx:320, 322`. | Legal basis for the inquiry: Art. 6(1)(b). Keep the form minimal: name, email, role (select), region, optional short message. Either add an explicit, unticked Art. 9(2)(a) consent checkbox for the free text, or move details to the first call. Add the privacy link, a retention period (e.g. delete non-converted inquiries after 6 months), TLS, and an EU processor with an AVV **(lawyer)**. |
| **M11** | **Legally risky service wording.** "pädagogisch-**therapeutisches** Angebot" (`App.tsx:84`) can imply Heilkunde (HeilprG) and pulls the advertising into HWG rules. "Fachberatung & **Fallsteuerung**" and "**Hilfeplan**- und Teilhabebegleitung" (`:219`, `:77`): Hilfeplanung (§36 SGB VIII) and case steering are the Jugendamt's own statutory role, so a vendor claiming them reads as overreach to Jugendamt staff. "Kann ich über das Jugendamt beauftragen? — **Ja.**" (`:87`) promises a funding route the Jugendamt decides case by case (e.g. Eingliederungshilfe §35a SGB VIII). | Lines cited. | Prefer "pädagogische / verhaltensanalytische Beratung und Förderung" unless she holds Approbation or a Heilpraktiker permission. Rephrase to "fachliche Beratung **zur** Hilfeplanung", "Mitwirkung an Hilfeplan- und Fallgesprächen". FAQ: "Eine Finanzierung über das Jugendamt, z. B. als Eingliederungshilfe nach § 35a SGB VIII, ist im Einzelfall möglich; die Entscheidung trifft das Jugendamt. Ich unterstütze bei den Unterlagen." Publish this only if it is true for her (question E6/E7). **(lawyer)** |
| **M12** | **Pricing undercuts the premium positioning and is ambiguous on VAT.** "ab 120 €" for the initial session sits below Replit's own suggested range of €150–250 (`Prompt history.txt:329`). "Umsatzsteuer … werden im Angebot ausgewiesen" (`App.tsx:283`) leaves consumer prices without a stated total, but PAngV §3 requires consumer prices to be total prices incl. VAT. | `App.tsx:278–283`. | Decide the pricing policy (questions E3–E4). State "inkl. USt." or the exemption basis (§19 UStG Kleinunternehmer, or possibly §4 Nr. 14 / Nr. 25 UStG; ask a Steuerberater). |
| **M13** | **ABA stance is avoided rather than handled.** | See §3.4. | See §3.4. |
| **M14** | **No persistent navigation or CTA after the first screen.** The header is `absolute`, not sticky, and the page is 18 screens long on mobile. | `App.tsx:107`. | Use a compact sticky header with one CTA, or a bottom CTA bar on mobile. The multi-page IA (M4) also shortens each page. |

### 3.3 Minor

| # | Finding | Evidence | Fix |
|---|---|---|---|
| m1 | The H1 is clipped on small phones: "Möglichkeiten" ends at 377 px on a 375 viewport and 363 px on 360. `overflow:hidden` cuts the last letter. | `src/index.css:176` (`clamp(3.5rem, 17vw, 5.5rem)` + `-0.045em` tracking). | Lower the minimum to about 2.75rem, or use `Möglich&shy;keiten`. |
| m2 | English boilerplate 404 and error pages ("404 Page Not Found", "Did you forget to add the page to the router?", "Something went wrong"). | `src/pages/not-found.tsx:12,17`; `src/components/error-boundary.tsx:38–60`. | Build a German, branded 404 with links to the main pages. |
| m3 | English and German mixed in labels: "Who I work with", "How it works", "The person behind the practice", "For professionals", "Indicative packages", "Contact", "Founder · Consultant", "care meets clarity", "human behavior / systems / care". | `App.tsx:167, 196, 239–240, 243, 260, 275, 292, 320, 347`. | German only at launch. Add a proper EN version with `hreflang` later if needed (question C6). |
| m4 | **Decorative stacking (AI-slop pattern).** Several layers do the same "texture" job: a fixed noise overlay at `z-index:50` over the whole page, header included; a radial gradient; the soft grid; three blob layers; two floating chips in the hero ("Haltung / Beziehung vor Rezept", "Leitgedanke"); vertical mono captions; a "care meets clarity" stamp; and 01/02/03 numbering in four sections where only the process steps are an actual sequence. | `index.css:128–140, 167–170`; `App.tsx:148–167, 172–176, 186, 215, 240, 281`. | Removal test: keep the blobs, the serif and the process numbering. Remove the noise overlay, soft grid, vertical captions, stamp, hero chips and non-sequence numbers. Nothing informational is lost. |
| m5 | The CSS pseudo-portrait of Marija reads as a placeholder face. | `App.tsx:233–238`. | Use a real photo (question C3), or keep only the abstract shape without a "face". |
| m6 | Weak focus indication. Inputs use `outline-none` and change only the colour of a 1 px border. Buttons rely on the thin browser default ring. | `App.tsx:322` (inputs), all buttons. | Add a global `:focus-visible` ring (2 px, `#8e493b`, 2 px offset). |
| m7 | No skip link, and `<main>` has no id (WCAG 2.4.1). | `App.tsx:347`. | Add a "Zum Inhalt springen" skip link to `#inhalt`. |
| m8 | Text-link targets are 16–20 px tall ("Passenden Weg finden", "Marija kennenlernen", footer links), below WCAG 2.5.8's 24×24 minimum. | Measured at 360 px. `App.tsx:189, 251, 262, 329`. | Add vertical padding (`py-2`). |
| m9 | Eight CTA labels for one action: "Erstgespräch anfragen", "Gespräch beginnen", "Passenden Weg finden", "Fachgespräch anfragen", "Marija kennenlernen", "Format besprechen", "Verfügbarkeit anfragen", "Anfrage senden". | `App.tsx:116, 140, 189, 221, 251, 262, 291, 322`. | Use one label per audience: families "Erstgespräch anfragen", professionals "Supervision anfragen", Jugendamt "Fachgespräch vereinbaren", organisers "Verfügbarkeit anfragen". |
| m10 | Offers are repeated across sections. Supervision appears in the audience card, Training and the "Team / System" package. Jugendamt appears in a card, its own section and a package. Keynotes appear in Training and in Conferences. | `App.tsx:46–80, 208–295`. | Consolidate as part of the multi-page IA. |
| m11 | `robots.txt` has no sitemap line. There is no `sitemap.xml` and no `llms.txt`. | `public/robots.txt`. | Generate them at build time (Astro does this with one integration). |
| m12 | Unused providers and dependencies: React Query, Tooltip and Toaster providers, about 50 shadcn components, recharts, embla, react-day-picker and others. The Vite config throws without `PORT`/`BASE_PATH`. | `App.tsx:2–5, 360`; `package.json`; `vite.config.ts:8–29`. | Moot after the static rebuild (§4). |
| m13 | Footer items `[Barrierefreiheit]` and `[Cookie-Hinweise]`. | `App.tsx:329`. | After B3 there are no cookies, so drop the cookie page and state "keine Cookies" in the Datenschutz. A BFSG accessibility statement is likely not required (the micro-enterprise exemption for services, §3 Abs. 3 BFSG) **(lawyer)**. Still build to WCAG 2.2 AA. |

**What is good and should be kept:**
- The palette (ivory, forest, terracotta, lavender, sea-glass) and the serif display type give a calm, non-clinical, non-corporate feel.
- No invented credentials, testimonials or numbers.
- Clear disclaimers ("keine Diagnose · keine Notfallversorgung", `App.tsx:84, 145, 329`).
- Relational, non-blaming tone ("Was versucht ein Kind mitzuteilen?", "keine Patentrezepte").
- The 3-step process section.
- Labels wrap inputs, error messages use `role="alert"`, and reduced motion is honoured (`index.css:178–181`).
- No horizontal scroll at 360–1440 px.

### 3.4 ABA positioning in Germany: assessment and recommendation

**How the draft handles it now.** It avoids the issue by omission. ABA is not named. "Angewandte Verhaltensanalyse" appears once, in the About text (`App.tsx:245`). Autism is not named. "neurodivergent" appears only in the meta description and "Neurodivergenz" once (`:291`). The vocabulary is affirming ("Beziehung vor Rezept", "Teilhabe", "Verhalten … mitteilen", "Haltung"), and there are **no cure, guarantee, success-rate or "scientifically proven" claims**, which is good. Replit's own suggested topic "Ethical and respectful ABA-informed practice" (`Prompt history.txt:424`) never reached the page.

**Why omission is the wrong choice:**
- Parents who pay privately often search "ABA" by name, and ABA is rarely funded, so they are the most likely buyers.
- Jugendämter fund "autismusspezifische Förderung" and ask about the method.
- Autistic self-advocates, and parts of the German autism community, criticise ABA for compliance training, masking and its historic use of aversives. They will find her ABA background on LinkedIn anyway, and a site that hides it looks evasive to them.
- The German reference to cite is the AWMF S3 guideline on autism therapy (Teil 2 Therapie, 2021, Reg.-Nr. 028-047), which discusses behaviour-based interventions. Check its exact wording before quoting it on the site.

**Recommendation: name it, frame it, bound it.**
1. **Name it.** Write "Angewandte Verhaltensanalyse (ABA)" openly on the families, professionals and Jugendamt pages and in About, together with her exact credentials. Transparency is the trust signal, and it is needed for search.
2. **Frame it.** Add a short "Wie ich arbeite / Haltung" block of concrete commitments. **Publish only those Marija actually practises** (question D2):
   - goals agreed with the family and, as far as possible, with the child;
   - the child's assent is respected, and sessions pause when the child signals distress;
   - no aversive or punishment-based procedures, and no compliance for its own sake;
   - no goal of making a child "unauffällig"; stimming and autistic identity are respected;
   - focus on communication, self-determination, participation (Teilhabe) and quality of life;
   - collaboration with speech therapy, OT, school and Kita;
   - progress data shared with the family to check that support helps, not to promise outcomes.
3. **Bound it.** Add an honest FAQ, "Ist ABA nicht umstritten?", of 80–120 words. It should acknowledge the criticism, explain how her practice differs and invite questions. Rules for the whole site:
   - no efficacy promises, success rates or "wissenschaftlich bewiesen";
   - no before/after stories about children (HWG §11 plus child privacy).
4. **Language guide.**
   - Prefer "autistische Kinder" / "Kinder im Autismus-Spektrum"; many German self-advocates prefer identity-first language. Confirm with Marija (D3).
   - Use "Autismus-Spektrum-Störung" / F84 only in funding contexts (the Jugendamt page).
   - Use "herausforderndes Verhalten" and "Verhalten als Kommunikation".
   - Avoid "leidet an", "Defizite beheben", "Problemverhalten abstellen/eliminieren", "normal", "Heilung", "Therapieerfolg".
5. **Sensitivity read.** Pay an autistic adult consultant for a review of the final copy before launch (D5). It is a small cost and a strong signal if it is mentioned.
6. **Brand.** "Human Behavior" is a vague Anglicism for German families and authorities. Recommended option: Marija's name plus a German descriptor, e.g. "Marija Vargas · Verhaltensanalytische Beratung & Supervision". This keeps ABA explicit in the copy without making it the brand (B7).

---

## 4. Stack recommendation

**Recommendation: simplify.** Drop the Replit monorepo and rebuild the site as a static, prerendered **Astro** site (Tailwind kept, content in Markdown), hosted by an **EU-based host**. The contact form goes to an EU endpoint, and booking is a **link-out**, not an embed.

**Why the monorepo adds nothing today**
- The "backend" is one `/api/healthz` route (`artifacts/api-server/src/routes/health.ts`) and an empty Drizzle schema (`lib/db/src/schema/index.ts` exports nothing). The OpenAPI spec only describes health.
- The website itself is already configured as `serve = "static"` (`artifacts/vargas-behavior/.replit-artifact/artifact.toml`).
- All the Express, Postgres, Drizzle, Orval and pnpm-workspace machinery is maintenance with no function.

| Criterion | A. Keep Replit monorepo | B. Vite SPA alone on a static host | **C. Astro static + EU host (recommended)** |
|---|---|---|---|
| Running cost (approx., verify current prices) | Replit paid plan about US$20–25/month plus usage, so about €250–300/yr | €2–10/month host | €2–10/month host (e.g. Hetzner, IONOS, All-Inkl, netcup, Uberspace; bunny.net for CDN) + .de domain about €10/yr, so **about €35–130/yr** |
| EU hosting / DSGVO | US provider. Needs a DPA and a US-transfer basis (check DPF). The publishing-region choice is permanent (`Prompt history.txt:683–685`). | Any EU host | Any EU host with a standard AVV. Only server logs hold personal data, so the Datenschutzerklärung stays short. |
| SEO / AEO | Client-rendered (M1) | Client-rendered unless a prerender plugin is added | Static HTML per page, zero JS by default, FAQ via `<details>`, JSON-LD per page, sitemap generated |
| Performance | 357 KB JS + 101 KB CSS | Same | About 10–30 KB JS (mobile menu only), self-hosted fonts |
| Maintenance | About 70 dependencies, Node server, DB, Replit env vars, lock-in | About 60 dependencies, still React | About 5 dependencies. Node only at build time. No server to patch. Markdown content Rodrigo (or Marija, with a git CMS) can edit. |
| Port effort | – | Small | About 1–2 days: the Tailwind classes, palette and copy port almost 1:1. React is optional (islands). |

**Supporting services (all without a consent banner)**
- **Form:**
  - Option 1, recommended when the host runs PHP: a 40-line PHP handler on the same host that mails Marija. No extra processor.
  - Option 2: an EU form service (e.g. Tally, Belgium). Verify EU storage and the AVV.
  - **Do not store inquiries in a self-built database.** Children's health data would trigger Art. 9 + Art. 32 duties and possibly a DPIA (Art. 35).
- **Mailbox:** use her own domain at an EU provider (e.g. mailbox.org, IONOS, Hetzner). Do not use WhatsApp for client communication.
- **Booking (phase 2):** link out to an EU-hosted scheduler (e.g. zeeg, Germany; or Cal.com with EU data residency; verify both). Linking out instead of embedding avoids the consent requirement.
- **Trainings and conferences with paid registration (phase 2):** pretix (German, open source) or Stripe Payment Links. Still no own backend.
- **Analytics (optional, phase 2):** cookieless Plausible (EU) or self-hosted Matomo without cookies. At launch, count inquiries by the form's "Ich bin …" field. That is enough for the KPI.

**When to revisit.** A client portal, document exchange with families, or online payment for services would justify a backend. Even then, use a specialised, DSGVO-ready practice or portal tool rather than custom Postgres.

---

## 5. Draft Phase-0 brief (`docs/01-brief.md` format)

> **Status: DRAFT, pending Marija's answers (§5.8).** Exit gate (playbook Phase 0): one primary goal and one KPI with a target and a date, agreed by Marija.
> **Data collection is not repeated here.** Bio, photos, contact, legal data, service details and training details come from the Replit checklist and its fill-in template (`Prompt history.txt:117–709`, template at `:634–675`). The questions below cover only the **decisions** that the checklist leaves open.

### 5.1 Goal
- **Primary goal (proposed):** *book calls*: qualified requests for a paid Erstgespräch from **families**.
  - Rationale: the website is the main acquisition channel only for families (search and AI assistants). Jugendämter, Träger and professionals mostly arrive by referral or LinkedIn and use the site to **verify** her.
- **Secondary goals (ranked, proposed):**
  1. supervision and training inquiries from professionals and Träger;
  2. Jugendamt / Eingliederungshilfe inquiries (the site as a capability statement);
  3. conference and speaker requests;
  4. authority (FAQ and About content that can be quoted).

### 5.2 Audience
| Segment | Arrives from | Already knows | Needs from the site |
|---|---|---|---|
| Families (incl. private-pay, affluent) | Google / AI assistant search, paediatrician / SPZ / Kita referral, parent groups | The diagnosis, often "ABA" | Is she qualified, how does she work (ethics), where and when, cost, discretion |
| Professionals (therapists, ABA teams) | LinkedIn, Marija's network | Her name | Supervision format, credentials, dates, price |
| Träger, schools, Kitas | Referral, LinkedIn | Little | In-house training topics, formats, day rates |
| Jugendämter (Eingliederungshilfe §35a SGB VIII) | Referral, a family's application, her outreach | The funding logic | Qualifications, method, region, availability, rate model (Fachleistungsstunde / Einzelfall), reporting, data protection, a downloadable 1-page capability sheet |
| Conference organisers | Search, referral | Topic | Topics, formats, languages, fee on request, a short video |

### 5.3 Offer
- **Known:** 10+ years of experience; senior human-behaviour / ABA consultant; works with non-neurotypical children; trains and supervises therapists; based in Germany.
- **Draft service lines** (from the site, to be confirmed via Replit §5–§8):
  - families: Erstgespräch, observation and context analysis, parent coaching, coordination with school and therapy;
  - professionals: individual and group supervision, case consultation, in-house training;
  - Jugendamt / Träger: Fachberatung, case conferences, contribution to Hilfeplan talks, concept and quality work;
  - events: keynote, workshop, panel.
- **Unknown (blocking):** exact credentials, location and radius, languages, legal form and VAT status, whether Jugendamt funding is realistic, prices.
- **Value proposition (draft, for Marija to edit):** "Ich begleite Familien autistischer und neurodivergenter Kinder und die Fachkräfte und Ämter um sie herum dabei, Verhalten zu verstehen und im Alltag tragfähige Wege zu finden: verhaltensanalytisch fundiert, respektvoll und mit über zehn Jahren Erfahrung."
- **Three proof points needed:** (1) years and number of families / therapists / trainings; (2) exact credentials plus memberships; (3) two or three testimonials from professionals or institutions.
- **Objections, which become the FAQ:**
  - "Ist ABA nicht umstritten?"
  - "Was kostet es / zahlt das Jugendamt?"
  - "Arbeiten Sie auch bei uns vor Ort?"
  - "Stellen Sie Diagnosen?"
  - "Wie schnell haben Sie Termine?"
  - "Wie gehen Sie mit den Daten meines Kindes um?"

### 5.4 KPI (proposal)
- **≥ 6 qualified inquiries per month** (all segments, of which **≥ 3 from families**) **by 31 March 2027**.
- Counted from the form's segment field, with no analytics at launch.
- Adjust the target to Marija's real capacity (question A3).

### 5.5 Scope
**In (launch):** the pages below, with a real form, legal pages, JSON-LD, sitemap, `llms.txt`, a German 404, and WCAG 2.2 AA contrast, focus and target sizes.

| URL | Primary intent | Candidate queries (hypotheses; validate with a keyword tool) | CTA |
|---|---|---|---|
| `/` | "Can she help my child / us?" | Autismus Beratung Eltern [Region], ABA Beratung [Stadt] | Erstgespräch anfragen |
| `/familien` | Family service details, cost | Autismus Elternberatung, ABA Elterntraining, herausforderndes Verhalten Kind Beratung | Erstgespräch anfragen |
| `/fachkraefte` | Supervision + training | ABA Supervision, Supervision Autismustherapie, Fortbildung Autismus Fachkräfte | Supervision anfragen |
| `/jugendaemter` | Capability, funding route | autismusspezifische Förderung §35a [Stadt], Fachberatung Autismus Jugendhilfe | Fachgespräch vereinbaren + PDF capability sheet |
| `/vortraege` | Speaker booking | Referentin Autismus Fachtag, Vortrag Neurodiversität | Verfügbarkeit anfragen |
| `/ueber-marija` | E-E-A-T, credentials, Haltung | Marija Vargas ABA | Erstgespräch anfragen |
| `/faq` (or per page) | Answer-first Q&A incl. ABA question | Was ist ABA, ABA Kritik | – |
| `/kontakt`, `/impressum`, `/datenschutz` | Contact and legal | – | – |

JSON-LD per page: `ProfessionalService` (areaServed, availableLanguage), `Person` (founder, `hasCredential` only with confirmed credentials), `Service` per offer page, `BreadcrumbList`. FAQ markup is for AEO semantics only, since FAQ rich results are no longer shown (per the `seo-page` skill).

**Out (phase 2 or later):**
- embedded calendar (link-out only);
- online payments and event ticketing;
- blog (which would add §18 MStV duties);
- English version;
- newsletter (needs double opt-in);
- analytics;
- client portal.

### 5.6 Risks
1. **ABA controversy:** reputational risk with the autistic community and some professionals. Mitigation in §3.4.
2. **Professional and advertising law:** "Therapie" wording (HeilprG), health advertising (HWG), use of titles and foreign degrees **(lawyer)**.
3. **Children's health data:** in the form and in her practice overall (record keeping, email, Art. 30 register, TOMs). The practice-side DSGVO work is outside website scope but must exist before client work starts.
4. **Jugendamt funding** usually needs an agreement (e.g. §77 SGB VIII) or case-by-case approval. The site must not promise funding.
5. **Pricing and VAT status** unclear (PAngV, §19 / §4 UStG). Needs a Steuerberater.
6. **Employment conflict:** if Marija is still employed in ABA, check side-activity and non-compete clauses and client-poaching rules before launch.
7. **Name / trademark / domain** conflicts (Replit §1, §10).
8. **Photos and testimonials involving children:** consent, dignity, HWG §11.

### 5.7 Next steps (playbook phases)
Phase 0 (this brief, answers) → Phase 2 (keyword map and final German copy per page, ABA "Haltung" text, FAQ) → Phase 3 (keep the style; apply the removals from m4 and the contrast fixes from M7) → Phase 5 (Astro build) → Phase 7 (`docs/compliance.md`, legal texts) → Phase 8 (QA in a browser: form end to end, 360/375/1440 px, contrast, Lighthouse mobile) → Phase 9 (launch; count inquiries). Log decisions in `docs/decisions.md`.

### 5.8 Questions for Marija
Answer with the letter or yes/no. ★ = recommendation.

**A. Goal and priorities**
- A1. The ONE thing the website must produce in the first 6 months:
  - (a) Erstgespräch requests from families ★
  - (b) supervision / training bookings
  - (c) Jugendamt / Träger assignments
  - (d) speaking engagements
- A2. Rank the other three from 1 to 3.
- A3. How many new inquiries per month can you handle? ≤ 4 / 5–10 ★ / > 10
- A4. Target launch: within 4 weeks / within 8 weeks ★ / no fixed date
- A5. Are you currently employed in ABA? yes / no. If yes: have you checked your contract for side-activity and non-compete clauses? yes / no (★ check before launch)

**B. Identity and legal basics** (feeds the Impressum; data per Replit §12)
- B1. Legal form: Einzelunternehmen / freiberuflich ★ / UG / GmbH / undecided
- B2. Registered with the Finanzamt as freiberuflich or gewerblich? yes / no / don't know (★ ask a Steuerberater)
- B3. Kleinunternehmerregelung (§19 UStG)? yes / no / don't know
- B4. Do you hold an Approbation or a Heilpraktiker permission (Psychotherapie)? yes / no. If no, the site avoids "Therapie" for your own services ★.
- B5. Impressum address: office / coworking or virtual office ★ / home address (it will be public)
- B6. Berufshaftpflicht in place? yes / no (★ needed for institutional and Jugendamt work)
- B7. Brand:
  - (a) "Marija Vargas · Verhaltensanalytische Beratung & Supervision" ★
  - (b) "Vargas Human Behavior"
  - (c) other: ____
  - Name and domain checks per Replit §1 and §10.

**C. Proof** (data per Replit §2, §3, §14)
- C1. Credentials to show (tick): BCBA / BCaBA / IBA / university degree(s) / other. Exact wording to be sent in writing.
- C2. Is a foreign degree recognised in Germany (ZAB / anabin)? yes / no / not relevant
- C3. A real photo of you on the site? yes ★ / no, keep abstract
- C4. Can we publish numbers? years ★ / therapists supervised ★ / trainings given ★ / families supported. Tick the true ones and give the figures.
- C5. Testimonials at launch: professionals and institutions only ★ / also anonymous parents (with written consent) / none
- C6. Languages you work in: DE / EN / ES / other. English site at launch? no ★ / yes

**D. ABA positioning** (see §3.4)
- D1. Name ABA explicitly on the site? yes ★ / only "Verhaltensanalyse" / no
- D2. Tick the commitments that are **true** for your practice; only ticked ones are published:
  - goals agreed with family and child
  - assent-based / pause on distress
  - no aversive or punishment procedures
  - no aim to suppress stimming
  - collaboration with speech therapy, OT and school
  - parent coaching as a core part
  - progress data shared with the family
- D3. Wording: "autistische Kinder / Kinder im Autismus-Spektrum" ★ / "neurodivergente Kinder" only / your preference: ____. Which groups do you support: autism / ADHD / intellectual disability / other?
- D4. Include the FAQ "Ist ABA nicht umstritten?" yes ★ / no
- D5. Pay an autistic adult for a sensitivity read of the copy (small fee)? yes ★ / no
- D6. Age range: 0–6 / 6–12 / 12–18 / young adults (tick)

**E. Services, formats, prices** (details per Replit §4–§8)
- E1. Service area: online Germany-wide + in person in [region] ★ / in person only / online only. Region or city: ____
- E2. Home visits? yes / no. School or Kita visits? yes / no
- E3. Prices on the site:
  - (a) "ab" price for the family Erstgespräch only, everything else on request ★
  - (b) all packages public (as now)
  - (c) no prices
- E4. Family Erstgespräch price: €120 (as now) / €150–200 ★ / > €200. This is your commercial call; €120 undercuts a premium positioning.
- E5. Free 15-minute Kennenlerngespräch before the paid Erstgespräch? yes ★ / no
- E6. Jugendamt: you have / you want ★ / you don't want an agreement with a Jugendamt or Träger; or you prefer case-by-case (Einzelfall) only.
- E7. Have families already been funded for your work via §35a SGB VIII? yes / no. If no, the site says "im Einzelfall möglich", with no promise ★.
- E8. Supervision that counts toward certification hours (e.g. BACB)? yes / no. Group size max: ____
- E9. Trainings at launch: in-house only ★ / also open dates with registration. Pick 3 launch topics from Replit §8.
- E10. Conference fee shown on the site? no, "auf Anfrage" ★ / yes
- E11. Cancellation policy: 24 h / 48 h ★ / other

**F. Contact, tools, data** (per Replit §9, §11, §15)
- F1. Contact at launch: form + email ★ / form + booking link / booking link only
- F2. Booking tool at launch: none ★ / zeeg / Cal.com / other
- F3. Phone number on the site: yes / no (either works; a phone number lowers the barrier for parents but brings unscreened calls)
- F4. WhatsApp with clients: no ★ / yes
- F5. Analytics at launch: none ★ / cookieless (Plausible EU or self-hosted Matomo)
- F6. After launch, who edits the site: Rodrigo ★ / Marija herself (needs a simple CMS)
- F7. Hosting: static site on an EU host ★ / stay on Replit

**G. Legal review**
- G1. Legal texts: generator + a lawyer's check of claims (HeilprG / HWG / §35a wording) ★ / lawyer drafts everything / generator only
- G2. Budget for the lawyer and Steuerberater check: ≤ €300 / €300–800 ★ / more
