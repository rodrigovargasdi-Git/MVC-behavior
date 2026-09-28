# Competitor & keyword research → content strategy (Marija Vargas behaviour consultancy)

**Date:** 2026-09-28
**Lenses:** seo-content-strategist (03) + business-strategist (12). Skills used: competitor-profiling, seo-geo, ai-seo, de-website-legal.
**Builds on:** `docs/2026-09-25-website-evaluation.md` (§3.4 ABA positioning, §5.8 questions) and the v2 Astro site (`site/src/content/site.ts`, `faq.ts`).

**Method and limits**
- About 15 page fetches and 17 web searches (28.09.2026). Competitor facts are **paraphrased** from their public pages. Nothing is copied. Rows marked *(snippet)* come from search-result summaries only.
- Keyword evidence comes from **Google autocomplete** (about 70 seed terms across google.de, .hr, .es and .com.mx on 28.09.2026), from competitors' wording and from inference. **No paid tool was used, so every volume is a qualitative estimate, not a measurement.** Validate the top 30 terms in Google Search Console after launch, or with a keyword tool if one becomes available.
- Facts about Marija are **still unconfirmed** (credentials, city, the level of her Spanish, her sister's qualification). They are marked **[confirm]**. This is not legal or tax advice. Items marked **(lawyer)** or **(Steuerberater)** need a professional to check them.

---

## 1. Executive summary

- **Positioning:** *"A senior, internationally trained behaviour-analysis consultancy for families and the professionals around them: 20 years across the US and Germany, four languages, online across Europe and in person in [Berlin – confirm]."* The premium lies in the **senior-led programmes with written deliverables**. She does not sell therapy hours and does not compete on hourly rates.
- **Differentiators:**
  1. **Two systems, 20 years.** She was trained in the US and has practised for about 10 years in Germany **[confirm]**. She can bridge BCBA-style practice with German Kita, school and Jugendhilfe settings.
  2. **Four languages, including native Croatian.** None of the German competitors found offers Croatian. English and Spanish exist only at 3–4 solo BCBAs.
  3. **Consultancy model.** Assessment, then a plan, then coaching of the adults (parents, Schulbegleitung, teams), including on-site "Home Intensives" anywhere in Europe.
  4. **Behaviour and language under one roof**, through a partner line with her sister on multilingual development. This is subject to German regulation (§8).
  5. **Openly modern, assent-based ABA.** Her site answers the "aba therapie kritik" searches directly instead of avoiding them.
- **Biggest risk: she is employed by Der Steg (Berlin autism therapy centre).** Clear side-activity and non-compete rules before launch, and do not solicit Der Steg's families or reuse its materials (§8).

---

## 2. Competitors

### 2.1 Competitor table (16, including the Der Steg benchmark)

| # | Provider (URL) | Country · type | Lang. | Services (short) | Audiences | Prices public? | Positioning · strength | Weakness |
|---|---|---|---|---|---|---|---|---|
| 0 | **Der Steg – AutismusTherapieZentrum** (dersteg.de/unser-angebot/autismus-therapie-zentrum/) **Marija's employer, benchmark only** | DE, Berlin · centre of a larger Träger, 3 sites | DE | Individual autism-specific Förderung, social-skills groups, Kita/school consultation; ABA/VB, PECS, RDI, TEACCH; VB-MAPP | Children aged 2–18 with an autism diagnosis, and their families and institutions | No (funded by the Jugendamt, usually as Hilfe zur Erziehung per their page) | Relationship-oriented, interdisciplinary, 10+ years, 3 BCBA/IBA staff, named contacts | Monolingual, no alt texts, institutional feel |
| 1 | Therapiezentrum Glückspilze (glueckspilze-berlin.de) *(snippet)* | DE, Berlin · centre | DE | ABA/VB, VB-MAPP / Essential for Living assessments, team training, written reports for authorities, monthly BC(a)BA consultation | Families, therapists, funders | No | BCBA-supervised quality | Page returned HTTP 500 on fetch |
| 2 | Early Learning – Autismustherapie Berlin (autismustherapie-berlin.de/en/) | DE, Berlin · small / solo | DE, EN | Home-based intervention, parent coaching, Kita/school, supervision for RBT/IBT and BCBA/IBA candidates | Families (incl. English-speaking), practitioners | No | Neurodiversity-affirming | Lead's credentials unclear, cartoon/stock imagery, no prices |
| 3 | Knospe-ABA (knospe-aba.com) | DE · company + Lerncenter GmbH (2023) | DE, EN | Webinars, **3-day home consultations**, follow-up days, parent and staff coaching, remote support between visits | Families, teachers, therapists | No (funded via Eingliederungshilfe) | "First BCBA in Germany" (since 2004), US-trained founder | Waitlist, limited regions, repetitive content |
| 4 | ABA-Intervention (aba-intervention.de) | DE · 2 psychologists, both BCBA | DE | ABA/VB consultation and Förderung | Families | No | Says most funding applications succeed | No prices, little process detail |
| 5 | ABA Autismus Therapie Düsseldorf GmbH (aba-duesseldorf.de) *(snippet)* | DE · company, Düsseldorf / Munich / Frankfurt | DE, EN | Team of behaviour analysts and co-therapists | Families | Not seen | US BCBA lead, multi-city | – |
| 6 | Autismusinsel (autismusinsel.de) | DE · small practice (not ABA) | DE | Autism counselling, coaching, therapy, expert consultations, webinars | Families, educators, employers | **Yes** (§7) | Transparent price list, reduced rates | Low price level, no ABA |
| 7 | Frankfurt Behavior (frankfurtbehavior.de) | DE, Frankfurt/Bavaria · solo BCBA | EN, ES | Home/school/community ABA, school consultation, behaviour support plans, verbal behaviour | English-speaking families, including the US military community | No | Bilingual/multicultural education background, Teachers College / CABAS training | No fees and no funding info |
| 8 | Developing Behavior (developingbehavior.com) | DE, Stuttgart + online EU · solo | EN | Autism/ABA services for English speakers, plus organisational behaviour consulting | Expats, organisations | Separate page | International, OBM angle | Credentials not shown, jargon, two unrelated offers mixed |
| 9 | Avanti BC / ABA Croatia (abacroatia.com) | HR, Rovinj · NGO (udruga) | HR, EN | ABA therapy, **own therapist certification (SABT®, course €150)**, supervision, online training | Trainee therapists, families | Partly | BCBA-led (25 years), the training hub in Croatia | NGO price level, dated design |
| 10 | Udruga Autizam 365 (udrugaautizam365.hr) | HR, Split · NGO | HR | ABA, speech therapy, counselling, inclusion programmes | Children and adults with autism, families | No | Community support | ABA page still shows placeholder text |
| 11 | Abaterapia (abaterapia.com) | ES, Madrid (Tres Cantos) · authorised health centre | ES, EN | ABA at the centre, at home and online; parent training; **early intervention incl. sleep, feeding, toilet training**; school consultation; courses; supervision | Autistic children (TEA), Down syndrome, ADHD | No | BCBA-led, "contemporary, natural" ABA | Clinical imagery with children |
| 12 | ABA Euskadi (abaeuskadi.com) *(snippet)* | ES, Basque Country · small team | ES | Home-based ABA, BCBA supervision plus RBT | Families | No | Home model | Regional |
| 13 | Helen Fiteni, BCBA (helenfitenibcba.com) | US, Los Angeles · solo premium | EN | School/community consultation, parent coaching, direct work, **"concierge" navigation** of services, funding and IEPs | Families (toddlers to adults), schools | **Yes: $225/h, 5/10/15-hour packages** | 20+ years, licence numbers shown, free 15-min call | Local, generic web design |
| 14 | Brian Conners, PhD, BCBA (brianconnersbcba.com) | US, New Jersey · solo consultancy | EN | FBA and behaviour plans, staff training, parent training, IEP advocacy, expert testimony, programme evaluation | Schools, agencies, clinics, families | No (free call for organisations) | Authority through PhD and continuing-education provider status | Thin site |
| 15 | All Behaviour Consultancy (allbehaviourconsultancy.com) | UK, London · small company | EN | FBA, positive behaviour support, school consultation, parent training (incl. online), home/school intervention | Families, schools, local authorities; UK-wide and international online | No | "Trauma-informed, person-centred", UK + BCBA + IBAO credentials | No prices |

Also seen: **RethinkCare** sells BCBA parenting consultations **as an employer benefit, with interpreters in 180+ languages**. This proves a B2B2C channel (employers and relocation firms) that suits expat families. **ASAP ABA** (California) offers "parent-led ABA for global families" through telehealth with a sliding scale.

### 2.2 Profiles of the most relevant

**Der Steg – AutismusTherapieZentrum (benchmark; learn from it, never copy)**
- Structure: individual Förderung in rooms at three Berlin sites, weekly social-skills groups (small groups, about a year long, two staff), and consultation for Kitas and schools. Ages 2–18, with a diagnosis required.
- Method mix named openly (ABA/VB alongside PECS, RDI, TEACCH, Theory-of-Mind training), with VB-MAPP for assessment. This eclectic framing reassures Jugendämter.
- Funding: families apply to the Jugendamt. Their page says cover is usually granted as **Hilfe zur Erziehung**, not only as §35a. Marija's Jugendamt copy should therefore say "e.g. Eingliederungshilfe (§35a SGB VIII) or Hilfe zur Erziehung – the Jugendamt decides".
- Tone: warm, professional, explains terms for parents. Trust comes from years of operation, BCBA/IBA staff, named team leads with direct contacts, and local network membership.
- Imagery: **real photos of rooms and materials, no identifiable children**, documentary style, warm neutrals. No alt texts.
- **Takeaway for Marija:** her site should differ in *kind*. Der Steg is a funded centre offering hours of Förderung. Marija's company is private, senior-led, multilingual and consultancy-shaped. Differing in kind reduces the overlap but does not remove the legal question (§8).

**Knospe-ABA (the German precedent for her model)**
- A US-trained BCBA founder built a 20-year practice on **multi-day home consultations, parent and staff coaching, and remote support between visits**. It is mostly funded through Eingliederungshilfe.
- It proves that the "consultant flies in, trains the adults, follows up remotely" model works in Germany.
- Its weaknesses leave room for Marija: a waitlist, limited regions, no public prices and a dated web presence. Her premium version is the **Home Intensive** (§3.3).

**Frankfurt Behavior / Early Learning / Developing Behavior (English-speaking solo BCBAs)**
- These are the closest competitors for expat families.
- Each has one strength: bilingual education (EN/ES), a neurodiversity-affirming stance, or OBM.
- All three have the same gaps: **no prices, no funding explainer for foreigners, and no problem-based pages** (sleep, toilet training, meltdowns). Two of them show thin credentials.
- Marija wins here with visible credentials, four languages, clear packages and an English guide to the German system.

**Helen Fiteni, BCBA (US premium solo benchmark)**
- Shows how a solo BCBA sells premium:
  - a **published hourly rate plus prepaid hour packages** with a small discount;
  - a **free 15-minute call**;
  - "concierge" help with funding and school plans;
  - licence numbers and 20+ years stated up front.
- Marija should borrow the mechanics (packages, free fit call, visible proof, navigation service). She should not borrow the hourly framing (§7).

### 2.3 What the market leaves open (her white space)
1. **Languages.** No German provider found offers Croatian. Spanish appears only at one solo BCBA. Croatian/BCS-speaking families form a large community in Germany (Croatian citizens alone ≈ 0.4 m per Destatis; verify the current figure).
2. **Transparent prices.** Only 2 of the 16 publish prices. Clear "ab" packages build trust and signal confidence.
3. **Problem-based entry pages.** German ABA sites are organised by method ("ABA/VB"), while parents search by problem ("kind wird nicht sauber", "autistisches kind schläft nicht"). Abaterapia (ES) is the only one to name sleep and toilet training.
4. **The ABA criticism is left unanswered.** "aba therapie kritik" and "aba autismus kritik" are **top autocomplete suggestions**, and almost no provider addresses them.
5. **The German system explained in English.** Autocomplete shows "germany autism benefits", "germany autism diagnosis", "germany autism support" and even "germany autism immigration", yet no provider explains Eingliederungshilfe in English.
6. **Croatia.** Behaviour analysts there are trained abroad, and the field is NGO-led and low-priced (e.g. a €150 therapist course). The opportunity is **B2B supervision and training plus diaspora families online**, not domestic private therapy.
7. **Quality.** Competitors show placeholder text, missing alt texts and jargon. A fast, accessible, multilingual site is already a differentiator.

---

## 3. Services matrix and recommended portfolio

### 3.1 Services matrix
✓ = core fit · ◐ = possible with conditions · ✗ = not recommended

| Service | Seen at | Marija | Sister | Note |
|---|---|---|---|---|
| Intake / first consultation | all | ✓ | ✓ | Free 15-min fit call before the paid consultation |
| Functional behaviour assessment (FBA) | Knospe, Glückspilze, Conners, All Behaviour | ✓ | ✗ | Core of the premium programmes |
| Skills assessment (VB-MAPP, ABLLS, AFLS, EFL) | Der Steg, Glückspilze, Knospe | ✓ **[confirm training]** | ✗ | – |
| Behaviour support plan / Förderplan | most | ✓ | ✗ | A written deliverable is key to the premium |
| Parent training / coaching | nearly all | ✓ | ◐ | Sister: language-focused parent guidance |
| Home-programme design and supervision (family-hired tutors, Schulbegleitung) | Knospe, ABA Euskadi, Glückspilze | ✓ | ✗ | Monthly retainer |
| Direct 1:1 intervention hours | Der Steg, Early Learning, Frankfurt, Abaterapia | ✗ | ✗ | Not her premium model, and it overlaps most with her employer |
| Social-skills groups | Der Steg, ASAP (PEERS®) | ◐ later | ✗ | Needs premises and a co-lead |
| Kita/school consultation | Der Steg, Early Learning, Frankfurt, All Behaviour, Fiteni | ✓ | ◐ | Include international schools |
| Early years / first steps after diagnosis | Abaterapia, Early Learning, ASAP | ✓ (parent-mediated) | ✓ | – |
| Challenging behaviour (meltdowns, aggression, self-injury) | most | ✓ | ✗ | Self-injury: coordinate with the physician |
| **Sleep problems** | Abaterapia | ✓ focus programme | ✗ | Paediatric check first (medical causes) |
| **Toilet training** | Abaterapia; "autism consultant potty training" appears in autocomplete | ✓ focus programme | ✗ | Rule out constipation/medical causes with the paediatrician |
| Feeding / picky eating | Abaterapia | ◐ only with specific training **[confirm]** | ◐ | Medical clearance required; mention cautiously |
| Communication / verbal behaviour / AAC (PECS) | Der Steg, Glückspilze, Frankfurt, Knospe | ✓ | ✓ | The joint behaviour + language offer |
| **Speech & language therapy (Logopädie)** | Autizam 365, Abaterapia, IEP Consulting | ✗ | ✓ in HR / ◐ in DE | Regulated profession in Germany (§8) |
| **Bilingual / multilingual language development** | none (Frankfurt mentions a bilingual background) | ◐ (behaviour side) | ✓ core | Largest white space |
| Staff training / in-house Fortbildung | Der Steg, Knospe, Conners, Abaterapia | ✓ | ◐ | – |
| RBT/IBT/QBA/IBA/BCBA supervision | Early Learning, Avanti, Abaterapia, ASAP | ✓ if eligible **[confirm]** | ✗ | Since 2023 the BACB no longer takes new applicants living outside the US/Canada (plus a few named countries), so European candidates pursue IBA (IBAO) or QBA (QABA). This creates supervision demand in DE, HR and ES. |
| Therapist certification course | Avanti (SABT®), ABA España | ◐ phase 3 | ✗ | Scalable content product |
| Parent webinars / workshops | Knospe, Autismusinsel (€29–49), Sport4Autism (HR) | ✓ | ✓ | Lead generation, 4 languages |
| Keynotes and conference talks | Conners, Marija's plan | ✓ | ◐ | – |
| Concierge / system navigation | Fiteni, RethinkCare | ✓ premium | ◐ | For expats: diagnosis routes, Eingliederungshilfe, schools. Information and help with documents only, no individual legal advice (RDG) **(lawyer)** |
| Telehealth / online | Knospe, Abaterapia, All Behaviour, Autismusinsel, ASAP | ✓ | ✓ | Europe-wide |
| Jugendamt-funded Förderung | Der Steg, Knospe, ABA-Intervention | ◐ later | ✗ | Public rates, and a conflict with her employer |
| Written reports / Stellungnahmen | Glückspilze, Conners | ✓ | ◐ | For schools, funders and doctors |
| Multi-day on-site intensives | Knospe (3-day home consultations) | ✓ premium flagship | ◐ joint | – |

### 3.2 Segment priority (business-strategist view)

| Segment | Willingness to pay | Fit | Reach | Priority |
|---|---|---|---|---|
| English-speaking expat families (DE/EU) | High (private pay, sometimes employer support) | Very high | Google EN, expat groups, international schools, relocation firms | **1** |
| German private-pay families | Medium–high | High | Google DE, paediatricians/SPZ, parent groups | **1** (after the employment check) |
| Croatian/BCS-speaking families in D-A-CH | Medium | Very high (unique) | Google HR, Croatian Catholic missions and associations, Facebook groups | **2** |
| International schools and bilingual Kitas | High (B2B) | High | Direct outreach, LinkedIn | **2** |
| Professionals (supervision) in DE/HR/ES | Medium | High | LinkedIn, ABA associations | **2** |
| Jugendämter / Träger | Public rates | Medium, with conflict risk | Referral | 3 |
| Spanish-speaking families (DE + online) | Varies | Medium (her Spanish is working level) | Google ES, expat groups | 3 |
| Families in Croatia | Low price level (speech therapy there ≈ €30–50/h) | Medium | – | 3 (B2B training is more promising) |

### 3.3 Recommended portfolio: "Marija Vargas Behavior Consultancy"
Frame it as a company with named programmes, fixed scopes and written deliverables. Prices are in §7.

**A. Private Family Programmes** (primary goal: family bookings)
1. **Fit call.** Free, 15 min, video, in any of the 4 languages.
2. **Clarity Consultation.** 90 min plus a 2-page written summary with next steps. This is the entry product.
3. **Behaviour Assessment & Plan.** Intake, 2 observations (at home, in the Kita, or by video), data review, a written support plan and a handover session.
4. **Parent Coaching Program.** 8 or 12 weeks of sessions, plan updates and written check-ins with a stated response time.
5. **Focus Programs** (6 weeks each):
   - **Calmer Nights** (sleep);
   - **Toilet Training**;
   - **Calm Days** (challenging behaviour, 8–12 weeks);
   - **First Steps after Diagnosis**.
6. **Home Intensive (flagship).** 2–3 days on site anywhere in Europe, working with the family, the Schulbegleitung and the school, followed by 6 weeks of remote follow-up.
7. **Ongoing Case Leadership.** A monthly retainer covering supervision of the home programme and coordination with school, Kita and therapists.
8. **Add-on: Expat Navigation.** Orientation in the German system (diagnosis pathway, Eingliederungshilfe, Kita/school, Schulbegleitung). Information and help with documents only (RDG).

**B. Professionals:** individual and group supervision, case consultation, mentoring for new behaviour analysts, and certification-relevant supervision only if eligible. Offered in DE/EN/HR (ES later).

**C. Schools, Kitas and organisations:** case consultation, in-house training, team coaching, and behaviour-support concepts. International schools are the premium B2B niche.

**D. Jugendämter and Träger (phase 2, after the employment question):** Fachberatung, contribution to Hilfeplan talks, and written Stellungnahmen.

**E. Speaking and workshops:** keynotes, plus parent webinars in 4 languages.

**F. Partner line "Language & Multilingual Families" (with her sister, a separate professional)**
- Joint behaviour + language consultation for bilingual families, a family language plan, parent workshops, and cooperation with local Logopädie practices.
- **Regulatory caveat (§8):** in Germany, the diagnosis and treatment of speech or language disorders is Heilkunde. "Logopädin/Logopädie" is a protected title. Until her qualification is recognised in Germany, the German site describes only non-therapeutic guidance ("Beratung zur mehrsprachigen Sprachentwicklung"), never "Logopädie" or "Sprachtherapie". Her Croatian-licensed work stays her own business under her own licence. Cross-border online treatment needs a check **(lawyer)**.

### 3.4 Cheapest test (before building everything)
- Launch **DE + EN in full, with HR + ES as short pages**. The contact form already counts inquiries per segment; add **"language"** as a field.
- Pass/fail after 90 days:
  - **≥ 3 qualified non-German inquiries** means HR/ES get full versions;
  - **fewer than 1** means ES stays short.
- In parallel, hold 5 short interviews with expat or Croatian-speaking parents in Marija's network about price reaction to the "ab" packages. **If more than half of fit calls drop at the price, revisit §7.**

---

## 4. Keywords per language

**Legend**
- **Vol.** (estimated, not measured): ↑ broad · → mid · ↓ niche.
- **Prio:** H/M/L = fit × intent × chance to rank.
- **Evidence:** AC = seen in Google autocomplete on 28.09.2026 · COMP = used by competitors · INF = inferred.
- **Intent:** I = informational · C = commercial · L = local · N = navigational · B2B.

### 4.1 German (google.de)

| Keyword / cluster | Intent | Vol. | Prio | Evid. | Target page |
|---|---|---|---|---|---|
| aba therapie berlin · aba therapie autismus in der nähe | C/L | → | **H** | AC | /de/ |
| autismus beratung berlin · autismus beratung für eltern · autismus elternberatung | C/L | → | **H** | AC | /de/familien/ |
| autismus beratung online · elterncoaching online | C | → | **H** | AC | /de/familien/ |
| autismus elterntraining · elterncoaching autismus · elterntraining autismus | C | → | **H** | AC | /de/familien/elterncoaching/ |
| aba therapie kritik · aba autismus kritik | I | → | **H** (trust) | AC | /de/haltung/ |
| aba therapie · aba autismus · aba autismus therapie | I/C | ↑ | M (competitive) | AC | /de/haltung/, /de/ |
| autistisches kind schläft nicht · … nachts nicht · … nicht alleine · autismus schlafprobleme kinder | I | → | **H** | AC | /de/familien/schlaf/ |
| kind wird nicht sauber · kind 4/5 jahre nicht sauber · kind will nicht sauber werden | I | ↑ | **H** | AC | /de/familien/sauber-werden/ |
| autistisches kind beruhigen · herausforderndes verhalten bei kindern | I | → | **H** | AC | /de/familien/herausforderndes-verhalten/ |
| was tun wenn mein kind mich schlägt / beißt / nicht hört · wutanfälle kind 4 jahre | I | ↑ | M (broad parenting) | AC | /de/familien/herausforderndes-verhalten/ |
| herausforderndes verhalten kita | I/B2B | → | M | AC | /de/institutionen/ |
| autistisches kind spricht nicht · autismus kind 3 jahre · autistisches kind im kindergarten | I | → | M | AC | /de/familien/nach-der-diagnose/ |
| autismus eltern überfordert | I (emotional) | → | M | AC | /de/familien/ (empathy block) |
| autismus therapie kostenübernahme · kostenträger | I/C | → | M | AC | /de/jugendaemter/, FAQ |
| eingliederungshilfe autismus beantragen · … kinder · … schule · … berlin · autismustherapie 35a sgb viii | I | → | M | AC | /de/jugendaemter/ (phase 2: guide) |
| zweisprachige erziehung kind spricht nur eine sprache · verzögerte sprachentwicklung zweisprachigkeit · autismus zweisprachigkeit | I | → | **H** (white space) | AC | /de/mehrsprachige-familien/ |
| logopädie zweisprachigkeit · logopädie bei zweisprachigen kindern | C | ↓ | M (regulated, partner) | AC | /de/mehrsprachige-familien/ |
| supervision aba · aba supervision | C/B2B | ↓ | M | AC | /de/fachkraefte/ |
| aba autismus fortbildung · fortbildung autismus fachkräfte | B2B | ↓ | M | AC/INF | /de/institutionen/ |
| fachberatung autismus jugendhilfe | B2B | ↓ | L–M | INF | /de/jugendaemter/ |
| bcba deutschland · bcba berlin | N | ↓ | L | AC | /de/ueber-marija/ |
| autismus essensverweigerung · autismus essen kinder | I | → | L (only if trained) | AC | FAQ |

**Avoid as target terms:**
- "Verhaltensanalyse" on its own: autocomplete shows psychotherapy intent (SORKC, DBT templates).
- "Verhaltenstherapie Kind": psychotherapy, which requires an Approbation.
- "Autismus heilen", and "Autismus Therapie" as the offer name. "Therapie" may appear only when explaining what people search for (§8).

### 4.2 English (searchers in Germany/EU)

| Keyword / cluster | Intent | Vol. | Prio | Evid. | Target page |
|---|---|---|---|---|---|
| aba therapy germany · aba therapist germany · autism therapy germany | C | → | **H** | AC | /en/ |
| aba therapy berlin (germany) · berlin autism center | C/L | ↓ | **H** | AC | /en/ |
| germany autism support · germany autism benefits · germany autism diagnosis | I | → | **H** | AC | /en/expat-families/ |
| english speaking child psychologist berlin → capture as "English-speaking autism & behavior consultant Berlin" | C/L | ↓ | **H** | AC/INF | /en/ (be clear she is not a psychologist) |
| autistic child not sleeping (at night) · autistic toddler not sleeping | I | ↑ | **H** | AC | /en/families/sleep/ |
| toilet training autism · toilet training autistic child · autism consultant potty training | I/C | ↑ | **H** | AC | /en/families/toilet-training/ |
| autism parent training program online · online aba parent training · what is aba parent training | C | → | **H** | AC | /en/families/parent-coaching/ |
| bilingual toddler speech delay · does bilingualism cause speech delay | I | ↑ | **H** | AC | /en/multilingual-families/ |
| english speaking speech therapist (berlin / near me) | C/L | → | M (partner, regulated) | AC | /en/multilingual-families/ |
| is aba harmful · aba criticism · neurodiversity-affirming aba | I | → | **H** (trust) | INF | /en/how-i-work/ |
| autism consultant (near me) · behavior consultant vs bcba | C/I | → | M | AC | /en/, FAQ |
| IBA / QBA / BCBA supervision online Europe | B2B | ↓ | M | INF | /en/professionals/ |
| international school behavior support · SEN consultant international school | B2B | ↓ | M | INF | /en/schools-organizations/ |
| bcba germany | N | ↓ | L (mostly job searches) | AC | /en/about/ |

### 4.3 Croatian (google.hr; also reaches BCS diaspora)

| Keyword / cluster | Intent | Vol. | Prio | Evid. | Target page |
|---|---|---|---|---|---|
| aba terapija · autizam aba terapija | I/C | → | **H** | AC | /hr/ |
| aba terapija cijena · … iskustva · … forum | C | ↓ | M | AC | /hr/cijene/, FAQ |
| poremećaj iz spektra autizma od čega početi | I | ↓ | **H** (perfect entry query) | AC | /hr/obitelji/ (H2 "Od čega početi?") |
| autizam kod djece (simptomi, kako prepoznati, od 2/3 godine) | I | ↑ | M (diagnosis intent: she does not diagnose) | AC | /hr/obitelji/ |
| dijete ne spava po noći · dijete ne spava cijelu noć | I | → | **H** | AC | /hr/obitelji/spavanje/ |
| odvikavanje od pelena (kada, iskustva, u 3 dana) + autizam | I | → | **H** | AC | /hr/obitelji/odvikavanje-od-pelena/ |
| dijete ne govori sa 2/3 godine · dijete ne govori i ne surađuje | I | → | M–H | AC | /hr/visejezicne-obitelji/ |
| primijenjena analiza ponašanja · funkcionalna analiza ponašanja · bihevioralna terapija autizam | I | ↓ | M | AC | /hr/kako-radim/, /hr/strucnjaci/ |
| aba terapija edukacija · supervizija ABA | B2B | ↓ | M | AC/INF | /hr/strucnjaci/ |
| logoped privatno · logoped cijena · logopedske vježbe za razvoj govora | C | → | M (partner) | AC | /hr/visejezicne-obitelji/ |
| savjetovanje na hrvatskom u Njemačkoj · hrvatski psiholog / logoped Berlin · München | C/L | ↓ | **H** (unique) | INF | /hr/ |
| dvojezično dijete · dvojezičnost | I | ↓ | M | INF (no autocomplete) | /hr/visejezicne-obitelji/ |
| aba terapija zagreb / split | L | ↓ | L (she is not there in person) | AC | – |

Notes:
- Autocomplete also shows Serbian/Bosnian variants (dece, Beograd, Tuzla). Croatian (ijekavian) content will reach BCS-speaking diaspora families too. Do not build separate SR/BS pages.
- Use "djeca iz spektra autizma" or "djeca s poremećajem iz spektra autizma (PSA)". Use the formal "Vi".

### 4.4 Spanish (google.es, plus google.com.mx for LatAm)

| Keyword / cluster | Intent | Vol. | Prio | Evid. | Target page |
|---|---|---|---|---|---|
| terapia aba · terapia aba autismo | I/C | ↑ | **H** | AC | /es/ |
| terapia aba online · terapia aba en casa · en qué consiste | C/I | → | **H** | AC | /es/familias/ |
| terapia aba precio | C | ↓ | M | AC | /es/precios/ |
| niño autista no duerme · qué hacer cuando un niño autista no duerme | I | → | **H** | AC | /es/familias/ (#sueno) |
| control de esfínteres autismo · … niños con autismo | I | → | **H** | AC | /es/familias/ (#esfinteres) |
| mi hijo autista me pega / es agresivo / grita mucho / no me hace caso · rabietas autismo | I | → | M–H | AC | /es/familias/ (#conducta) |
| escuela para padres autismo | C | ↓ | M | AC | /es/familias/ |
| analista de conducta certificado bcba · analista de conducta aba | N/I | ↓ | M | AC | /es/sobre-mi/ |
| familias hispanohablantes Alemania · psicóloga / terapeuta que hable español en Berlín | C/L | ↓ | **H** (niche) | INF | /es/ (clarify profession) |
| bilingüismo y autismo · niño bilingüe no habla | I | ↓ | M | INF | /es/familias-bilingues/ |
| logopeda online niños | C | → | L (only if her sister works in Spanish) | AC | – |
| terapia aba cdmx / como aplicar (LatAm) | L/I | ↓ | L (online only) | AC | – |

Notes:
- Use "niños con autismo (TEA)". Recommend **usted**: it is premium and safe for LatAm.
- Spanish pages need a native proofread, because Marija's Spanish is at working level **[confirm]**.

### 4.5 AI-assistant and voice questions (for FAQ, H2s and answer blocks)
Answer each in 40–60 words, answer first, as a question-style H2 on the matching page.

**DE**
- Was kann ich tun, wenn mein autistisches Kind nachts nicht schläft?
- Mein Kind ist 4 und noch nicht sauber – ist das bei Autismus normal, und wer hilft?
- Was ist ABA, und warum wird ABA kritisiert?
- Wer bezahlt Autismus-Förderung, und wie beantrage ich Eingliederungshilfe nach § 35a SGB VIII?
- Gibt es ABA-Beratung online auf Deutsch oder Englisch?
- Was tun, wenn mein autistisches Kind mich schlägt oder beißt?
- Wie beruhige ich mein Kind bei einem Meltdown?
- Schadet Zweisprachigkeit der Sprachentwicklung bei Autismus?
- Mein Kind spricht mit 3 noch nicht – was sind die nächsten Schritte?
- Was macht eine Verhaltensanalytikerin (BCBA)?
- Was kostet eine private Autismus-Beratung?

**EN**
- Is there an English-speaking autism consultant in Berlin?
- Can I get ABA in Germany in English?
- How do expat families get autism support in Germany, and does Germany pay for it?
- My autistic toddler won't sleep – what can I do?
- How do I toilet-train my autistic child?
- Does raising my autistic child bilingual cause speech delay?
- What does a BCBA do, and how is it different from a therapist?
- Is ABA harmful? What does modern ABA look like?
- Online parent coaching for autism in Europe?
- Behavior support for an international school?

**HR**
- Što učiniti ako dijete iz spektra autizma ne spava po noći?
- Kako odviknuti dijete s autizmom od pelena?
- Moje dijete ne govori s 3 godine – kome se obratiti?
- Što je ABA terapija i koliko košta?
- Postoji li savjetovanje na hrvatskom u Njemačkoj?
- Poremećaj iz spektra autizma – od čega početi?
- Je li dvojezičnost štetna za dijete s autizmom?
- Kako smiriti dijete kad ima napadaj bijesa?
- Tko je analitičar ponašanja (BCBA)?
- Supervizija za ABA terapeute na hrvatskom?

**ES**
- ¿Qué hago si mi hijo autista no duerme?
- ¿Cómo enseñar a ir al baño a un niño con autismo?
- Mi hijo autista me pega, ¿qué puedo hacer?
- ¿En qué consiste la terapia ABA y cuánto cuesta?
- ¿Hay terapia ABA online en español?
- ¿Hay alguien que asesore a familias en español en Alemania?
- ¿Criar a un niño bilingüe con autismo retrasa el lenguaje?
- ¿Qué es un analista de conducta certificado (BCBA)?

### 4.6 Addendum (28.09.2026): PFA/SBT keywords (DE/EN)
Method-gap terms (no competitor names them – see `2026-09-28-market-benchmark-matrix.md`). Use only in line with her confirmed FTF level (`2026-09-28-hanley-pfa-sbt-positioning.md` §7).

| Keyword / cluster | Lang | Intent | Prio | Target page |
|---|---|---|---|---|
| practical functional assessment · skill based treatment · PFA SBT | DE/EN | I/C | **H** | /de/haltung/, /en/how-i-work/ |
| IISCA · interview-informed synthesized contingency analysis | DE/EN | I (professionals) | M | /de/haltung/, /de/fachkraefte/ |
| hanley aba training · skill based treatment dr hanley (as source, never as brand) | EN | I | M | /en/how-i-work/ |
| mitfühlende / traumasensible / zustimmungsbasierte Verhaltensanalyse · compassionate, trauma-informed, assent-based behavior analysis | DE/EN | I | M | /de/haltung/, /en/how-i-work/ |
| herausforderndes verhalten autismus PFA · challenging behavior PFA SBT | DE/EN | I/C | M | /de/familien/herausforderndes-verhalten/, /en/families/challenging-behavior/ |

Note (Marija's questionnaire): the site now uses "Verhaltensanalyse / behavior analysis" instead of "ABA" in titles and headings; "aba therapie kritik" is answered in one FAQ entry only. Sleep and feeding topics are not offered.

---

## 5. Recommended multilingual site architecture

### 5.1 Principles
- **One domain, language subfolders:** `/de/`, `/en/`, `/hr/`, `/es/`.
  - A brand `.com` suits the international positioning. Redirect the `.de` to it, or the other way round, and check availability.
  - `/` redirects (301) to `/de/`. Do not redirect automatically by IP or browser language. Every page has a visible switcher (DE · EN · HR · ES) that links to the equivalent page, or to that language's home if there is no equivalent.
- **hreflang:**
  - Only between true equivalents; every language lists itself and its siblings.
  - `x-default` → `/en/`.
  - Self-referencing canonical per page, never canonical across languages.
  - Include the hreflang pairs in `sitemap.xml`.
- **Localised slugs.** Write the copy for each market rather than translating it literally. Use `<html lang>` per language (`de`, `en`, `hr`, `es`).
- **Spelling.** Pick one English variant. Recommendation: US spelling ("Behavior"), which matches the BCBA credential vocabulary. Google treats both spellings as equivalent.
- **JSON-LD per page:**
  - `ProfessionalService` with `availableLanguage` [de, en, hr, es] and `areaServed`;
  - `Person` with `knowsLanguage` and `hasCredential` (confirmed facts only);
  - `Service` + `Offer` (`priceSpecification.minPrice`) on programme pages;
  - `FAQPage` and `BreadcrumbList`.
- **`llms.txt`:** one at the root, covering all four languages, with a "key facts" block (credentials, languages, area served, "from" prices).
- **Legal pages:**
  - `/de/impressum/` and `/de/datenschutz/` are binding.
  - EN, HR and ES carry translations marked "courtesy translation; the German version is binding" **(lawyer)**.
  - A guide or blog section adds the §18(2) MStV "responsible person" to the Impressum.
- **Migration of the v2 site.** It is pre-launch, so no redirects are needed. Move the pages under `/de/`:
  - `/leistungen/familien/` → `/de/familien/`
  - `/leistungen/fachkraefte/` → `/de/fachkraefte/`
  - split `/leistungen/institutionen-jugendaemter/` into `/de/institutionen/` + `/de/jugendaemter/`
  - split `/fortbildung-supervision/` into `/de/fachkraefte/` (supervision), `/de/institutionen/` (training) and `/de/vortraege/`
  - drop `/leistungen/` in favour of `/de/preise/` as the overview of all offers.

### 5.2 Page list, URLs and translation depth
F = full localisation · S = short version (40–60 %: hero, key sections, CTA) · – = none

| # | Page | DE | EN | HR | ES |
|---|---|---|---|---|---|
| 1 | Home | F `/de/` | F `/en/` | F `/hr/` | S `/es/` |
| 2 | Families (hub) | F `/de/familien/` | F `/en/families/` | F `/hr/obitelji/` (covers pages 3, 4 and 7 as sections) | S `/es/familias/` (covers 3–8 as sections) |
| 3 | Behaviour assessment & plan | F `/de/familien/verhaltensanalyse-foerderplan/` | F `/en/families/behavior-assessment/` | – (in hub) | – |
| 4 | Parent coaching program | F `/de/familien/elterncoaching/` | F `/en/families/parent-coaching/` | – (in hub) | – |
| 5 | Sleep | F `/de/familien/schlaf/` | F `/en/families/sleep/` | F `/hr/obitelji/spavanje/` | – (section) |
| 6 | Toilet training | F `/de/familien/sauber-werden/` | F `/en/families/toilet-training/` | F `/hr/obitelji/odvikavanje-od-pelena/` | – (section) |
| 7 | Challenging behaviour | F `/de/familien/herausforderndes-verhalten/` | F `/en/families/challenging-behavior/` | – (section) | – (section) |
| 8 | After the diagnosis / early years | F `/de/familien/nach-der-diagnose/` | F `/en/families/after-diagnosis/` | – (hub H2 "Od čega početi?") | – |
| 9 | Multilingual families (+ language partner) | F `/de/mehrsprachige-familien/` | F `/en/multilingual-families/` | F `/hr/visejezicne-obitelji/` | S `/es/familias-bilingues/` |
| 10 | Expat / international families in Germany | S `/de/internationale-familien/` | **F** `/en/expat-families/` | S (diaspora angle, inside `/hr/visejezicne-obitelji/`) | – (in `/es/`) |
| 11 | Professionals: supervision | F `/de/fachkraefte/` | F `/en/professionals/` | F `/hr/strucnjaci/` | – (phase 2) |
| 12 | Schools, Kitas & organisations (+ training) | F `/de/institutionen/` | F `/en/schools-organizations/` | S (inside `/hr/strucnjaci/`) | – |
| 13 | Jugendämter & Träger | F `/de/jugendaemter/` | – (explained on page 10) | – | – |
| 14 | Speaking & workshops | F `/de/vortraege/` | F `/en/speaking/` | S (inside `/hr/strucnjaci/`) | – |
| 15 | About Marija (+ partner profile) | F `/de/ueber-marija/` | F `/en/about/` | F `/hr/o-meni/` | S `/es/sobre-mi/` |
| 16 | How I work / ABA criticism | F `/de/haltung/` | F `/en/how-i-work/` | S `/hr/kako-radim/` | – (section in `/es/sobre-mi/`) |
| 17 | Prices & packages | F `/de/preise/` | F `/en/pricing/` | F `/hr/cijene/` | S `/es/precios/` |
| 18 | FAQ | F `/de/faq/` | F `/en/faq/` | S `/hr/cesta-pitanja/` | – (FAQ block on `/es/`) |
| 19 | Contact / booking | F `/de/kontakt/` | F `/en/contact/` | F `/hr/kontakt/` | F `/es/contacto/` |
| 20 | Legal | binding `/de/impressum/`, `/de/datenschutz/` | `/en/legal-notice/`, `/en/privacy/` | `/hr/impresum/`, `/hr/privatnost/` | `/es/aviso-legal/`, `/es/privacidad/` |
| Phase 2 | Guides (answer hubs) | `/de/ratgeber/eingliederungshilfe-autismus/`, `/de/ratgeber/zweisprachigkeit-autismus/` | `/en/guides/autism-support-germany/`, `/en/guides/bilingualism-autism/` | `/hr/vodici/…` | – |

**Totals:** DE 19 pages · EN 19 · HR 11 · ES 7, plus legal pages. Each problem page (sleep, toilet training, challenging behaviour) **answers the question first, then offers the programme**. On a site this small that avoids thin separate "blog vs. service" pages.

**Navigation (all languages):**
- Families ▾ (programs + focus topics)
- Professionals
- Schools & Organizations (DE adds Jugendämter)
- Speaking
- About ▾ (How I work)
- Prices
- **[Book a free 15-min call]**

### 5.3 Off-site presence (AEO: assistants cite where you appear)
- **LinkedIn articles** in EN and DE, one per problem page, with the keyword in the first words.
- **Google Business Profile** as a Berlin service-area business (if she has an address she can publish).
- Credential registries: BACB / IBAO / QABA **[confirm]**. ABA Deutschland e.V. membership **[verify the association]**.
- International-school SEN networks; expat parent groups (Berlin, Munich, Frankfurt, Stuttgart; the US military communities around Ramstein, Wiesbaden and Stuttgart).
- Croatian missions and associations in Germany; Spanish-speaking parent groups.
- 2–3 **short YouTube explainers with transcripts** (sleep, toilet training, bilingualism). The seo-geo skill notes YouTube mentions correlate most strongly with AI citations.
- Expat and parenting podcasts.

---

## 6. Content briefs per page
Rules for all pages:
- One H1 with offer + audience + place.
- Question-style H2s, each answered in the first 40–60 words.
- One primary CTA per section.
- A "last updated" date and an author box with credentials on problem pages.
- Cite sources: AWMF S3 guideline 028-047 (2021; **expired 03/2026**, don't cite as current, check for the successor), and peer-reviewed reviews on sleep and bilingualism in autism. **Check the exact wording before quoting.**
- Language guide from the evaluation §3.4: identity-first or "im Spektrum"; no "Heilung", "Defizite" or "normal".
- CTA labels: free call → DE "Kostenloses Kennenlernen buchen" · EN "Book a free 15-min call" · HR "Dogovorite besplatan uvodni razgovor" · ES "Reserve una llamada gratuita de 15 minutos".

**1. Home** (`/de/`, `/en/`, `/hr/`, `/es/`)
- **Intent:** "Is this the right senior person for my family?"
- **H1:**
  - DE "ABA-Beratung für Familien autistischer Kinder – in Berlin, online und in vier Sprachen"
  - EN "Behavior consultancy for families of autistic children – in Berlin, online and in four languages"
  - HR "Savjetovanje i analiza ponašanja za obitelji djece iz spektra autizma – na hrvatskom, u Njemačkoj i online"
  - ES "Asesoría en análisis de conducta (ABA) para familias de niños con autismo – en español, desde Alemania y online"
- **H2s:**
  - "Womit ich Familien helfe" (4 entry tiles: sleep, toilet training, challenging behaviour, after the diagnosis)
  - "So läuft die Zusammenarbeit" (3 steps: free call, assessment and plan, coaching)
  - "Für Fachkräfte, Schulen und Jugendämter"
  - "Wer ich bin" (proof strip: 20 years in the US and Germany, credential, 4 languages)
- **Key messages:** senior-led; a written plan instead of open-ended hours; respectful, assent-based; online across Europe plus Berlin in person.
- **Keywords:** DE aba therapie berlin, autismus beratung berlin · EN aba therapy germany · HR aba terapija · ES terapia aba.
- **CTA:** free call (primary); "Programme & Preise" (secondary).

**2. Families hub**
- **Intent:** "What exactly do you offer families, and how?"
- **H1:**
  - DE "Beratung für Familien autistischer Kinder: verstehen, planen, begleiten"
  - EN "Support for families of autistic children: assessment, a clear plan, coaching"
  - HR "Podrška obiteljima djece iz spektra autizma – online i u Njemačkoj"
  - ES "Asesoría ABA para familias: sueño, control de esfínteres y conductas desafiantes"
- **H2s:** "Vielleicht kennen Sie das" (a problem list that includes "Autismus: Eltern überfordert") · "Programme im Überblick" (Clarity → Assessment → Coaching → Intensive) · "Online oder vor Ort?" · "Was kostet das?" (link to prices).
- **HR hub adds:** "Od čega početi?" and short sections on assessment, coaching and izazovno ponašanje.
- **Keywords:** autismus elternberatung, autismus beratung online · autism parent coaching · savjetovanje roditelja · escuela para padres autismo.
- **CTA:** free call.

**3. Behaviour assessment & plan**
- **H1:** DE "Verhaltensanalyse und Förderplan: verstehen, was hinter dem Verhalten steckt" / EN "Behavior assessment and support plan".
- **H2s:** "Was ist eine funktionale Verhaltensanalyse?" (definition block) · "Was Sie bekommen" (deliverables list) · "Ablauf in 3–4 Wochen" · "Für wen es passt, und für wen nicht" (no diagnosis, no emergencies).
- **Messages:** you receive a written plan that the whole team (school, Schulbegleitung, therapists) can use.
- **Keywords:** funktionale verhaltensanalyse kind · FBA · behavior assessment autism.
- **CTA:** "Assessment anfragen". **Schema:** Service + Offer.

**4. Parent coaching program**
- **H1:** DE "Elterncoaching bei Autismus – 8- oder 12-Wochen-Programm, online oder vor Ort" / EN "Parent coaching for autism – an 8- or 12-week program".
- **H2s:** "Was ist ABA-Elterncoaching?" · "Was sich im Alltag ändern kann" (no promises, only examples of goals) · "Wie ein Coaching-Termin abläuft" · "Kosten und Rahmen".
- **Keywords:** autismus elterntraining, elterncoaching autismus/online · online aba parent training, what is aba parent training.
- **CTA:** free call.

**5. Sleep** (DE, EN, HR; ES as a section)
- **H1:**
  - DE "Ihr autistisches Kind schläft nicht? Begleitung für ruhigere Nächte"
  - EN "Autistic child not sleeping? A plan for calmer nights"
  - HR "Dijete iz spektra autizma ne spava po noći? Plan za mirnije noći"
  - ES "Mi hijo autista no duerme: ¿qué puedo hacer?"
- **H2s:**
  - "Warum schlafen viele autistische Kinder schlecht?" (answer block with a cited prevalence range)
  - "Was Sie heute Abend ausprobieren können" (3–5 safe, general tips)
  - "Wann zuerst zum Kinderarzt?" (medical red flags)
  - "Das 6-Wochen-Programm »Ruhigere Nächte«"
- **Keywords:** see §4 (schläft nicht / nachts nicht / nicht alleine; dijete ne spava po noći; niño autista no duerme).
- **CTA:** free call. **Schema:** Service + FAQPage.

**6. Toilet training**
- **H1:**
  - DE "Ihr Kind wird nicht sauber? Toilettentraining bei Autismus"
  - EN "Toilet training for autistic children"
  - HR "Odvikavanje od pelena kod djece iz spektra autizma"
  - ES "Control de esfínteres en niños con autismo"
- **H2s:** "Ab wann ist »nicht sauber« ein Thema?" · "Typische Hürden bei Autismus" (sensory, routines, communication) · "Erst medizinisch abklären" (constipation etc.) · "Das 6-Wochen-Programm".
- **Keywords:** kind wird nicht sauber, kind 4 jahre nicht sauber · toilet training autism, autism consultant potty training · odvikavanje od pelena · control de esfínteres autismo.
- **CTA:** free call.

**7. Challenging behaviour**
- **H1:** DE "Herausforderndes Verhalten verstehen – und den Alltag gemeinsam verändern" / EN "Challenging behavior: understand it, then change the day together".
- **H2s:**
  - "Was tun, wenn mein Kind mich schlägt oder beißt?" (safety first, then function)
  - "Verhalten ist Kommunikation"
  - "Meltdown oder Wutanfall?"
  - "Programm »Ruhigere Tage«"
- **Keywords:** autistisches kind beruhigen, herausforderndes verhalten bei kindern, was tun wenn mein kind mich schlägt · mi hijo autista me pega, rabietas autismo.
- **CTA:** free call. **Note:** self-injury → coordinate with the physician. Add a crisis line: "no emergency care" plus where to go.

**8. After the diagnosis / early years**
- **H1:** DE "Autismus-Diagnose – und jetzt? Erste Schritte für Ihre Familie" / EN "Just got an autism diagnosis? First steps for your family".
- **H2s:** "Die ersten 90 Tage: was wirklich zählt" · "Welche Hilfen gibt es in Deutschland?" (overview + link to Jugendamt/expat page) · "Mein Kind spricht noch nicht – was jetzt?" · "Programm »Erste Schritte«".
- **Keywords:** autismus kind 3 jahre, autistisches kind spricht nicht · poremećaj iz spektra autizma od čega početi.
- **CTA:** free call.

**9. Multilingual families (+ language partner)**
- **H1:**
  - DE "Mehrsprachige Familien: Sprache und Verhalten zusammen denken"
  - EN "Bilingual and multilingual children: language and behavior together"
  - HR "Dvojezična i višejezična djeca: jezik i ponašanje zajedno"
  - ES "Familias bilingües: lenguaje y conducta de la mano"
- **H2s:**
  - "Schadet Zweisprachigkeit bei Autismus?" (answer block; research generally finds no harm; cite a review)
  - "Kind spricht nur eine Sprache – was tun?"
  - "Unser gemeinsames Angebot" (Marija + sister: roles clearly separated)
  - "Wann zur Logopädie?" (referral to recognised practices)
- **Messages:** keep the home language; the family gets a language plan; behaviour and language are looked at together.
- **Regulatory copy rule:** in DE, do not describe the sister's work as "Logopädie" or "Sprachtherapie" until she is recognised (§8).
- **Keywords:** zweisprachige erziehung kind spricht nur eine sprache, logopädie zweisprachigkeit · bilingual toddler speech delay · dijete ne govori · bilingüismo y autismo.
- **CTA:** "Mehrsprachigkeits-Beratung anfragen".

**10. Expat / international families (EN-first)**
- **H1:** EN "Autism support in Germany for international families – in English" / DE (short) "Internationale Familien in Deutschland".
- **H2s:**
  - "How do I get an autism diagnosis in Germany?" (SPZ, Kinder- und Jugendpsychiatrie; waiting times)
  - "Does Germany pay for autism support?" (Eingliederungshilfe/Jugendamt in plain English; no promises; eligibility depends on the case)
  - "Kita, school and Schulbegleitung explained"
  - "How I help: Expat Navigation + programs in your language"
- **Keywords:** germany autism support/benefits/diagnosis, aba therapy germany, English-speaking autism consultant Berlin.
- **CTA:** free call. **Rule:** information only, no individual legal advice (RDG).

**11. Professionals: supervision**
- **H1:** DE "Supervision und Fallberatung in Angewandter Verhaltensanalyse (ABA)" / EN "ABA supervision and case consultation – in English, German and Croatian" / HR "Supervizija i edukacija iz primijenjene analize ponašanja".
- **H2s:** "Für wen" (RBT/IBT, QBA/IBA candidates, BCBAs, Schulbegleitungen, teams) · "Formate" (individual, group, case review) · "Sind die Stunden anrechenbar?" (only what is true) · "Ethik und Haltung in der Supervision".
- **Keywords:** supervision aba · IBA/QBA supervision online · supervizija ABA, aba terapija edukacija.
- **CTA:** "Supervision anfragen".

**12. Schools, Kitas & organisations**
- **H1:** DE "Beratung und Fortbildung für Kitas, Schulen und Träger" / EN "Behavior consultation and training for international schools, Kitas and organizations".
- **H2s:** "Fallberatung im Team" · "Inhouse-Fortbildungen" (3 launch topics) · "Für internationale Schulen" (EN) · "Ablauf und Konditionen".
- **Keywords:** herausforderndes verhalten kita, fortbildung autismus fachkräfte · international school behavior support.
- **CTA:** "Fortbildung anfragen".

**13. Jugendämter & Träger (DE only)**
- **H1:** "Autismusspezifische Fachberatung für Jugendämter und Träger".
- **H2s:**
  - "Leistungen" (Fachberatung, Mitwirkung an Hilfeplangesprächen, Stellungnahmen)
  - "Finanzierung" (e.g. §35a SGB VIII or Hilfe zur Erziehung: "im Einzelfall, Entscheidung beim Jugendamt")
  - "Qualifikation und Qualitätssicherung"
  - "Datenschutz und Berichtswesen"
  - plus a 1-page capability PDF.
- **Keywords:** autismustherapie 35a sgb viii, eingliederungshilfe autismus, fachberatung autismus jugendhilfe.
- **CTA:** "Fachgespräch vereinbaren". **Publish only after the employment check (§8).**

**14. Speaking & workshops**
- **H1:** DE "Vorträge und Workshops zu Verhalten, Autismus und Mehrsprachigkeit" / EN "Talks and workshops on behavior, autism and multilingual families".
- **H2s:** "Themen" · "Formate und Sprachen" · "Referenzen" (only confirmed) · "Anfrage".
- **Keywords:** referentin autismus fachtag, vortrag neurodiversität.
- **CTA:** "Verfügbarkeit anfragen".

**15. About Marija (+ partner profile)**
- **H1:** DE "Marija Vargas – Verhaltensanalytikerin mit Erfahrung aus den USA und Deutschland" / EN "About Marija Vargas – behavior analyst, 20 years across the US and Germany" **[confirm figures and title]**.
- **H2s:** "Werdegang" (US education and practice → Germany) · "Qualifikationen" (exact wording, awarding body and country, registry link) · "Sprachen" (native HR; DE/EN professional; ES working level) · "Partnerin für Sprache: [sister's name]" (her own qualification and scope).
- **Rule:** mention her employer only with the employer's consent. **Schema:** Person.
- **CTA:** free call.

**16. How I work / ABA criticism**
- **H1:** DE "Wie ich arbeite – und was ich zur Kritik an ABA sage" / EN "How I work – and my answer to the criticism of ABA" / HR "Kako radim – s poštovanjem prema djetetu".
- **H2s:** "Ist ABA umstritten?" (acknowledge the criticism honestly) · "Meine Grundsätze" (only the D2 commitments Marija ticks) · "Was ich nicht tue" · "Fragen Sie mich".
- **Keywords:** aba therapie kritik, aba autismus kritik · is aba harmful · neurodiversity-affirming aba.
- **CTA:** free call. A sensitivity read of this page by an autistic adult is recommended.

**17. Prices & packages** (§7 gives the content)
- **H1:** DE "Preise und Programme" / EN "Pricing and programs" / HR "Cijene i paketi" / ES "Precios y paquetes".
- **H2s:** "Für Familien" · "Für Fachkräfte" · "Für Organisationen" · "Gut zu wissen" (VAT, travel, cancellation, payment).
- **Keywords:** aba therapie kosten, terapia aba precio, aba terapija cijena.
- **CTA:** free call. **Schema:** Offer.

**18. FAQ**
- **H1:** "Häufige Fragen" / "Frequently asked questions".
- Grouped by audience. Merge the §4.5 questions with the existing `faq.ts`.

**19. Contact**
- **H1:** DE "Kontakt und kostenloses Kennenlernen" / EN "Contact and free 15-min call".
- **Form fields:** role, **preferred language**, region, optional message. Keep the "no health data in the form" note (evaluation M10).

---

## 7. Pricing presentation (premium)

### 7.1 Market anchors seen

| Anchor | Price | Source |
|---|---|---|
| Ambulatory Jugendhilfe **Fachleistungsstunde** (example: Fürth) | €95.80/h | Fürth city council (search result) |
| Autismusinsel (private, not ABA) | Initial €110 / 60 min; follow-up and coaching €90 / 50 min; written summary +€20–50; expert consultation €225 / 90 min; webinars €29–49; reduced rates for low income; Kleinunternehmer (no VAT) | autismusinsel.de |
| Helen Fiteni, BCBA (Los Angeles, premium solo) | $225/h; 5 h $1,100 · 10 h $2,150 · 15 h $3,150; free 15-min call | helenfitenibcba.com |
| Croatia: speech therapy (private) | ≈ €30–50/h; e.g. 45 min €35, 10 sessions €300; parent counselling ≈ €40/h | Croatian price lists via search summary (verify) |
| Croatia: ABA therapist course (Avanti SABT®) | €150 | abacroatia.com |
| Knospe-ABA, Der Steg, ABA-Intervention, Glückspilze, Frankfurt Behavior, Abaterapia | **No public prices** (mostly publicly funded) | their sites |
| Current v2 draft | Placeholder (v1 had "ab 120 €", which the evaluation called too low; it recommended €150–200) | evaluation M12/E4 |

### 7.2 Model: packages, not hours
- **Families see packages, never an hourly rate.** An hourly rate invites comparison with the ≈ €90–100 Jugendamt hour and with Autismusinsel's €90. A package is compared with the **outcome and the deliverables**: written plan, number of sessions, response time and duration.
- **Professionals see hourly supervision.** That is the professional norm and easy to compare.
- **Organisations see half-day and full-day rates.**
- **Jugendämter get a separate rate model** (Fachleistungsstunde by agreement), not shown on the price page.
- The proposed "ab" prices below imply **≈ €150–170 per hour of senior time**. That is about 1.6–1.8× the public anchor and below the US premium solo rate. It is clearly premium in Germany but defensible for a senior consultant. **This is a proposal. The price level is Marija's commercial decision.**

| Program | Scope | Proposed "ab" price (families: incl. VAT) |
|---|---|---|
| Fit call | 15 min, video | free |
| Clarity Consultation | 90 min + 2-page written summary | **ab 240 €** |
| Behavior Assessment & Plan | Intake, 2 observations, data review, written plan, handover session | **ab 1.450 €** |
| Parent Coaching Program | 8 weeks (12-week option) incl. plan updates and written check-ins | **ab 1.850 €** |
| Focus Program: Calmer Nights / Toilet Training | 6 weeks | **ab 1.350 €** |
| Home Intensive (flagship) | 2–3 days on site (D-A-CH/EU) + 6 weeks remote | **ab 4.900 € + travel** |
| Ongoing Case Leadership | Monthly: 3 sessions + team/school coordination | **ab 690 €/month** |
| Individual supervision | 60 min | ab 140 € |
| Group supervision (3–6 people) | 90 min | ab 65 € per person |
| In-house training | Half day / full day | ab 1.200 € / ab 1.900 € + travel (B2B, plus VAT) |
| Keynote | 45–60 min | on request (internal floor ≈ 1.500 €) |
| Jugendamt / Träger | Fachleistungsstunde / individual agreement | not published |

### 7.3 Presentation rules
- Each package card shows: who it is for, what is included, duration, languages, online or on site, "ab" price, and the CTA.
- Order the cards from entry to flagship. Mark the Parent Coaching Program as "most chosen" **only once that is true**.
- **PAngV:** consumers see total prices "inkl. 19 % USt." For VAT exemptions, ask a Steuerberater (**Steuerberater**; see the next point).
- **Kleinunternehmer rules since 2025:** ≤ €25,000 turnover in the previous year and ≤ €100,000 in the current year. The premium packages will likely exceed this, so plan with VAT.
- **Clients abroad:** the rules for where a service is taxed differ for private clients outside the EU and in HR/ES. Check with a **Steuerberater**.
- **One price list in EUR for all languages**, which keeps the premium consistent. Exception: group trainings in Croatia or Spain may be priced per participant.
- **Terms:** travel costs stated as a rule (e.g. from 50 km, or flat rates per region). Cancellation within 48 h. Programmes are 50 % payable upfront, with invoices in DE/EN.
- **Optional social line:** "A small number of reduced-fee places each year" (both Autismusinsel and Conners do something similar). Do not show a sliding scale publicly.
- **No discount badges and no countdowns.** Use scarcity only if it is true (e.g. "up to 4 new families per month").

---

## 8. Regulatory notes for claims in Germany (short, practical; **lawyer** to confirm)

| Topic | What applies | Safe practice |
|---|---|---|
| **Current employment at Der Steg** | During employment, German case law generally bars competing activity even without a written clause (the BAG applies the principle of § 60 HGB to all employees). Side jobs may need approval under the contract. A post-employment non-compete binds only with compensation (§ 74 HGB). | **Before launch:** check her contract and get written approval for the side activity **(lawyer, Arbeitsrecht)**. Do not solicit or contact Der Steg families or colleagues. Do not use Der Steg materials, texts, photos, forms or programme names. Name Der Steg on the site only with its consent. Until this is resolved: no Jugendamt page, no Berlin 1:1 Förderung. |
| **ABA controversy** | Autistic self-advocates criticise compliance training and masking. "aba therapie kritik" is a top autocomplete term. | Name ABA openly, state concrete commitments, and answer the criticism on page 16. German reference: AWMF S3 guideline 028-047, Part 2 (2021), **expired 03/2026**; cite only as historical or use its successor. |
| **"Therapie" / "Therapeutin"** | Heilkunde requires an Approbation or a Heilpraktiker permission (HeilprG § 1). "Psychotherapeut/in" is protected (PsychThG). "Therapeutin" alone is not protected, but it suggests Heilkunde and can mislead (UWG § 5). | Describe her own work as Beratung, Förderung, Begleitung, Coaching, Supervision. Use "ABA-Therapie" only as a search term in explanatory text. State "keine Diagnostik, keine Psychotherapie". |
| **Titles and credentials** | Hold them before using them. Foreign academic degrees are used in their original form with the awarding institution. BCBA® etc. per the BACB/IBAO/QABA rules. "Verhaltensanalytikerin" is not protected but must be true. | Use the exact wording, the country and body, and a registry link. No "Dr." or "Psychologin" unless held. |
| **Health advertising (HWG) and UWG** | Advertising for treating illnesses: no efficacy or healing promises, no success rates, no fear appeals, no misleading testimonials. Before/after depictions are risky. | Give goals and examples, not outcomes. Use testimonials only from professionals or institutions, with written consent. Never show children as proof. Words like "evidenzbasiert" or "einzigartig" need substantiation. |
| **Logopädie (sister)** | Protected title and profession (LogopG). Speech therapy is Heilkunde. Statutory health-insurance billing needs a Zulassung under § 124 SGB V. Private direct access: a sectoral Heilpraktiker permission for state-recognised Logopäden (BVerwG 10.10.2019, 3 C 8.17, as cited by the providers found; verify). A Croatian (EU) qualification needs **Anerkennung** by the Land authority, usually with German-language proof. Clinical linguists (BKL) have their own route to Zulassung (verify). | Until she is recognised: offer only non-therapeutic parent guidance on multilingual development, workshops and joint consultations **without diagnosing or treating** speech or language disorders in Germany. Refer to recognised practices. Do not use "Logopädie", "Logopädin" or "Sprachtherapie" for her on the German site. Treating clients in Germany online under her Croatian licence needs a check **(lawyer)**. |
| **Jugendamt funding** | Case-by-case (§ 35a SGB VIII, or Hilfe zur Erziehung per Der Steg's page). Hilfeplanung is the Jugendamt's role. | Use "im Einzelfall möglich; die Entscheidung trifft das Jugendamt". Never promise funding. "Mitwirkung an Hilfeplangesprächen", not "Fallsteuerung". |
| **Navigation / concierge** | Individual legal assessment of claims can be a legal service (RDG). | Offer general information plus help with documents. Refer legal disputes (Widerspruch) to lawyers or counselling services. |
| **Data and images** | Children's health data (Art. 9 DSGVO). Photos of people need consent (KUG § 22 + DSGVO): for children, both parents. The EU AI Act transparency duties for synthetic images apply from Aug 2026. | Minimal form. Use an EU video tool with an AVV, no WhatsApp. **No identifiable children on the site.** Do not present AI-generated people as clients; label realistic AI images of people, or better, generate none (§9). |

---

## 9. Imagery

### 9.1 What works in this field (learned from Der Steg and the competitors)
- **Der Steg** shows real rooms and materials in documentary photos with warm neutrals, and **no identifiable children**. That is trustworthy and safe but institutional. It has no alt texts.
- **Stock photos of children at therapy tables** (Abaterapia, ASAP) read as clinical, and they reinforce the "compliance drill" stereotype of ABA.
- **Cartoon or clip-art illustrations** (Early Learning) look cheap. **Corporate "growth arrows over a globe"** (Developing Behavior) looks generic.
- The **premium US solo** (Fiteni) shows a real, warm portrait plus visible credentials.
- **Marija's lane:** an **editorial, calm, international** look.
  - A real portrait of Marija as the anchor.
  - Adults at work (coaching, supervision, training).
  - Hands, materials and spaces rather than children.
  - Colour-graded to the site palette (ivory, forest, terracotta, lavender, sea-glass).

**Avoid:**
- identifiable children, including "anonymised" children seen from behind in recognisable settings;
- children in distress or meltdowns;
- puzzle-piece symbols (rejected by many autistic people);
- "light it up blue" imagery;
- white coats and clinic aesthetics;
- flash-card drills at a table;
- sad-child-in-a-corner stock;
- before/after images;
- AI-generated faces presented as real clients.

**Technical:**
- Alt text in each language.
- Descriptive, localised file names.
- AVIF/WebP, with at least 2400 px source files.
- A 1200×630 `og:image` per language, with the claim set as live text on a clean photo.
- Model releases for every adult who appears.

### 9.2 Shot list for a real photo session (half day, one location plus one outdoor spot)
1. **Hero portrait**, landscape 16:9, with space for text on one side. Natural light, Marija looking toward the camera, calm and confident. Forest or terracotta top against an ivory wall.
2. Hero portrait, **vertical 4:5** (mobile hero, LinkedIn, speaker bio).
3. **Headshot square** (Google Business Profile, directories, press).
4. **Desk / online consultation:** laptop with a blurred video call, notebook, tea. She is listening, not posing.
5. **Coaching conversation:** Marija with one adult (a model, not a real client) at a kitchen table, seen over the parent's shoulder so the parent's face is not visible.
6. **Hands and materials:** placing picture cards on a visual schedule; an AAC tablet; a timer; a sensory item.
7. **Data made human:** a hand-drawn progress graph in a notebook with no names, next to a pen.
8. **Training / keynote:** Marija at a flip chart or screen in front of a small group of adults seen from behind (colleagues who have signed releases).
9. **Supervision:** two professionals reviewing a plan together (both adults with releases).
10. **An empty playroom corner or children's bedroom at dusk:** for the sleep and "after diagnosis" pages, with no people.
11. **City and international:** Marija walking in Berlin (U-Bahn, tram, or an Altbau entrance), for the "international, based in Berlin" story.
12. **With her sister:** two professionals side by side, for the partner page (only once the partnership is agreed).
13. **Details:** books in four languages on a shelf (real books), a passport-style travel detail for the "Home Intensive" page.

### 9.3 Image-generation prompts (sample visuals in her style; no people's faces, no children)
Use them for moodboards and placeholders, or for final non-person images. Check the tool's commercial-use terms. Keep the style suffix consistent.

**Style suffix:** *"editorial interior photography, soft natural window light, muted palette of ivory, deep forest green, terracotta, soft lavender and sea-glass, calm premium magazine aesthetic, shallow depth of field, 35mm, no text, no logos"*

**Negative prompt:** *"children's faces, identifiable people, puzzle pieces, blue ribbons, medical equipment, white coats, clutter, neon colors, text, watermark"*

1. **Hero background (16:9):** "A calm, sunlit consultation room in a Berlin Altbau apartment: tall windows, ivory walls, a forest-green velvet armchair, an oak table with a closed linen notebook and a small stack of books, a terracotta ceramic vase with dried grasses" + style suffix.
2. **Visual schedule (4:3):** "Close-up of an adult's hands placing simple laminated picture cards onto a linen visual-schedule board on a light oak table, wooden toys softly out of focus in the background" + style suffix.
3. **Parent coaching (3:2):** "Two adults talking at a kitchen table, photographed from behind one person's shoulder so no faces are visible, cups of tea, an open notebook with handwritten notes, warm late-afternoon light, respectful and unhurried mood" + style suffix.
4. **Online consultation (16:9):** "A minimalist desk with an open laptop showing an out-of-focus video call, a headset, a notebook and a glass of water, plants on the windowsill, European city rooftops blurred outside" + style suffix.
5. **Calmer nights (4:5):** "A child's bedroom at dusk with nobody in it: a neatly made bed with soft linen, a small warm night lamp, a simple picture-card bedtime routine strip on the wall, curtains half drawn" + style suffix.
6. **Multilingual families (3:2):** "A wooden shelf with children's picture books in several languages (spines without legible text), a small globe, wooden letter blocks, a soft lavender cushion" + style suffix.
7. **Training / keynote (16:9):** "A bright seminar room seen from the back row: about ten adults from behind, a facilitator's silhouette beside a screen showing a simple, abstract line graph, daylight" + style suffix.
8. **Brand texture (for section backgrounds and the og:image base, 3:2):** "Abstract layered paper-cut organic shapes in ivory, forest green, terracotta, lavender and sea-glass, soft shadows, tactile, calm, lots of negative space" (no photo suffix).

---

## 10. Open questions (yes/no where possible; they extend evaluation §5.8)
1. **Der Steg contract:** does it allow a side business? Has written approval been obtained? (a blocker)
2. Credentials: active BCBA (number)? IBA/QBA? Exact US degrees? Eligible to supervise toward IBA/QBA/BCBA hours?
3. Base city Berlin, and in-person radius? Willing to travel for Home Intensives (max days per month)?
4. Spanish: full sessions in Spanish, or intake only?
5. Specific training in sleep, toilet training or feeding interventions?
6. Sister: exact qualification (logoped or linguist), licensing country, German recognition status, languages, and a separate business or a joint company?
7. Brand and domain: "Marija Vargas Behavior Consultancy" + `.com`? US spelling OK?
8. Approve the proposed "ab" prices (entry €240, programmes from €1,350, Intensive from €4,900)? Kleinunternehmer or VAT?
9. Launch scope: DE + EN full, HR + ES short (recommended)?

---

## Sources (fetched or searched 28.09.2026)
- Der Steg AutismusTherapieZentrum – https://www.dersteg.de/unser-angebot/autismus-therapie-zentrum/
- Glückspilze – https://www.glueckspilze-berlin.de/therapieansatz-aba-vb/ (snippet; the fetch returned HTTP 500)
- Early Learning – https://autismustherapie-berlin.de/en/
- Knospe-ABA – https://www.knospe-aba.com/
- ABA-Intervention – https://www.aba-intervention.de/
- ABA Autismus Therapie Düsseldorf – http://www.aba-duesseldorf.de/English/About-Us/ (snippet)
- Autismusinsel prices – https://autismusinsel.de/preise-autismusinsel/
- Frankfurt Behavior – https://www.frankfurtbehavior.de/bcba
- Developing Behavior – https://developingbehavior.com/
- Avanti BC / ABA Croatia – https://abacroatia.com/hr/education/
- Udruga Autizam 365 – https://www.udrugaautizam365.hr/services/aba-therapy/
- Plavo Svjetlo – https://plavosvjetlo.hr/aba-terapija-plavo-svjetlo-split/ (not reachable)
- Abaterapia – https://abaterapia.com/terapia-autismo-aba/
- ABA Euskadi – https://abaeuskadi.com/aba-terapia (snippet)
- Helen Fiteni, BCBA – https://www.helenfitenibcba.com/
- Brian Conners, BCBA – https://www.brianconnersbcba.com/consulting.html
- All Behaviour Consultancy – https://www.allbehaviourconsultancy.com/
- ASAP ABA – https://asapaba.com/international-parent-led-aba-therapy/
- RethinkCare – https://www.rethinkcare.com/features/parenting-consultations/
- Fürth Fachleistungsstunde – https://stadtrat.fuerth.de/vo0050.asp?__kvonr=64648
- Croatian price lists – https://www.imaginarius.hr/logoped-cijena · https://www.raspetljanaprica.hr/cjenik/ (via search summary)
- BACB 2023 international changes – https://www.bacb.com/faqs-about-the-2023-international-changes/
- LogopG – https://www.gesetze-im-internet.de/logopg/ · § 124 SGB V – https://www.gesetze-im-internet.de/sgb_5/__124.html · dbl Zulassung – https://www.dbl-ev.de/beruf-recht/zulassung/
- Sectoral Heilpraktiker Logopädie – https://heilpraktikerverband.de/aktuelles/aktuelle-meldungen/425-recht-sektorale-heilpraktikererlaubnis-fuer-ergotherapeuten-und-logopaeden
- Recognition of foreign Logopäden – https://verwaltung.bund.de/leistungsverzeichnis/de/leistung/99150022001000
- AWMF S3 guideline 028-047 Part 2 – https://register.awmf.org/assets/guidelines/028-047l_S3_Autismus-Spektrum-Stoerungen-Kindes-Jugend-Erwachsenenalter-Therapie_2021-04_1.pdf
- Eingliederungshilfe / cost coverage – https://www.autismus.de/autismus/autismustherapie/kostenuebernahme.html
- Google autocomplete (suggestqueries, client=firefox; hl/gl de-de, en-de, hr-hr, es-es, es-mx). The raw output was kept in the session scratchpad, not in the repo.
