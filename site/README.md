# Website v3 – Marija Vargas · Behavior Analysis & Consulting (Astro, statisch, mehrsprachig)

Statische, mehrsprachige Website auf Basis von `../docs/2026-09-28-competitor-keyword-research.md`, `../docs/2026-09-28-hanley-pfa-sbt-positioning.md`, `../docs/2026-09-28-market-benchmark-matrix.md` und Marijas Fragebogen-Antworten (28.09.2026).
Kein Server, keine Datenbank, keine Cookies, keine Drittanbieter-Requests. Schriften und Bilder sind selbst gehostet.

## Lokal starten

Voraussetzung: Node.js ≥ 22.12 (npm).

```bash
cd site
npm install
npm run dev       # http://localhost:4321  → leitet auf /de/ weiter
npm run build     # erzeugt site/dist/
npm run preview   # prüft den Build lokal
node scripts/make-og.mjs   # Social-Vorschaubilder public/og/og-<sprache>.png neu erzeugen
```

## Sprachen und Seiten

| Sprache | Status | Seiten |
|---|---|---|
| **DE** `/de/` | öffentlich, vollständig | Start, Familien (+ Sauber werden, Herausforderndes Verhalten, Nach der Diagnose), Mehrsprachige Familien, Internationale Familien, Fachkräfte, Kitas & Schulen, Über mich, Wie ich arbeite, Programme & Honorar, FAQ, Kontakt (+ Danke), Impressum, Datenschutz – **17 Seiten** + Danke. Dazu `/de/jugendaemter/` (nur DE, **noindex, nicht verlinkt**, wartet auf die arbeitsrechtliche Prüfung). |
| **EN** `/en/` | öffentlich, vollständig | dieselben 16 Seiten + Danke (Expat-Seite ausführlich; Rechtstexte als „courtesy translation“) |
| **HR** `/hr/` | gebaut, **versteckt** | Početna, Obitelji, Višejezične obitelji, Stručnjaci, O meni, Programi, Kontakt (+ Hvala), Impresum, Privatnost |
| **ES** `/es/` | gebaut, **versteckt** | Inicio, Familias, Familias bilingües, Sobre mí, Programas, Contacto (+ Gracias), Aviso legal, Privacidad |

- **`site.showHrEs = false`** (in `src/content/site.ts`): HR/ES-Seiten werden gebaut, sind aber `noindex`, fehlen in Sitemap, hreflang und Sprachumschalter. Nach Marijas Sprachprüfung auf `true` setzen.
- `/` leitet auf `/de/` weiter (`public/index.html` sofort, `public/.htaccess` als echte 301 bei Apache).
- Nicht angeboten (Fragebogen): **Schlafprobleme, Essen/Fütterung** – dazu gibt es keine Seiten. Keine Partnerlinie mit der Schwester („nicht jetzt“); Duo-Fotos liegen ungenutzt in `src/assets/photos/`.

### Native review by Marija needed (HR/ES)
Jede HR/ES-Seite trägt `data-review="translation"` auf `<main>`. Zu prüfen: `src/content/hr/*` (Kroatisch, formelles „Vi“) und `src/content/es/*` (Spanisch, „usted“), plus die HR/ES-Zweige in `src/components/views/ImprintView.astro` und `PrivacyView.astro`.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `src/i18n/routes.ts` | **Routen-Register**: eine Zeile je Seite mit Pfaden je Sprache → Seiten, hreflang (+ x-default = EN), Sprachumschalter (gleiche Seite, sonst Startseite der Sprache), Brotkrumen, Sitemap |
| `src/pages/[...slug].astro` | baut alle Seiten aus dem Register |
| `src/content/site.ts` | **alle unbestätigten Angaben** (`PH('…')`) + Schalter (`showHrEs`, `photosAreSamples`, `prices.show`) |
| `src/content/<de\|en\|hr\|es>/` | Texte je Sprache: `ui.ts`, `pages*.ts`, `programs.ts`, `faq.ts` (+ Grundsätze), `contact.ts`, `approach.ts` (PFA/SBT-Formulierungen an **einer** Stelle) |
| `src/components/sections/` | Abschnitts-Vorlagen (Hero, Antworten, Karten, Programme, Foto, FAQ, CTA …) für alle Sprachen |
| `src/components/views/` | Kontakt, Danke, Impressum, Datenschutz |
| `astro.config.mjs` | i18n (`prefixDefaultLocale: true`), Sitemap je Sprache mit hreflang-Paaren |

Mini-Auszeichnung in Texten: `**fett**`, `*Akzent*`, `[Link](@seitenschluessel#anker)` – `@key` wird zur Seite in der aktuellen Sprache.

## Platzhalter füllen

Jeder `PH('…')`-Aufruf in `src/content/site.ts` erscheint gelb als `[[BITTE BESTÄTIGEN: …]]` und nie in JSON-LD oder `llms.txt`. Stand: ca. 100 Markierungen je Sprache (viele davon im Impressum/Datenschutz). Offen sind u. a.:
- Region für Termine vor Ort (E1), Erfahrungsjahre USA/DE (C4), Werdegang, persönlicher Abschnitt (Mutterschaft optional, löschbar), Stimmen (C5).
- PFA-SBT-**Credential-Stufe** (4 oder 6), Gültigkeit, FTF-Directory-Link; IBAO-Registerlink; Stelle der Anerkennung (ZAB?).
- Kontakt (E-Mail, Telefon), Antwortzeit, Video-Tool, Reisebereitschaft, „Keine Warteliste“ (nur wenn Kapazität bestätigt).
- Absagefrist, Zahlungsbedingungen, Spanisch-Umfang (Q4), Fortbildungsthemen (E9).
- Rechtliches: Inhaberin, Rechtsform, Anschrift, USt-IdNr., Hosting, Formularverarbeitung, Aufsichtsbehörde …; anwaltliche Prüfung der Übersetzungen.
- Freigabe des Angebots für Jugendämter/Träger erst nach arbeitsrechtlicher Prüfung (Q1).

**Bestätigt und veröffentlicht** (Fragebogen): IBA (IBAO); MA Child Studies, Linköping University (Schweden) 2020; BA Neuroscience, Earlham College (USA); FTF-Fortbildung PFA/SBT seit 2021; Anerkennung des Abschlusses in Deutschland; Altersgruppe 0–12; alle 7 Haltungs-Zusagen; Sprachen HR/DE/EN/ES; Marke „Marija Vargas · Behavior Analysis & Consulting“ (Alternative „VerbaCareEdu“ nur als Kommentar).

**Vor dem Launch** muss leer bleiben: `grep -r "BITTE BESTÄTIGEN" dist`.

## Inhaltliche Regeln (bitte beibehalten)

- **Keine Preise.** `prices.show = false` → überall „Honorar auf Anfrage / Fees on request“; CTA ist das kostenlose 15-Minuten-Kennenlerngespräch. Die Preisvorschläge (Research §7) bleiben in `site.ts` für später.
- **„Verhaltensanalyse / behavior analysis“ statt „ABA“** in Titeln, Überschriften, Navigation, Meta und Hero. „ABA“ steht nur in **einer** FAQ-Antwort („Was unterscheidet meine verhaltensanalytische Arbeit von der Kritik an ABA?“) auf `/de/faq/` bzw. `/en/faq/`.
- Keine Approbation → das eigene Angebot nie „Therapie“ nennen. Keine Diagnostik, keine Notfallversorgung.
- PFA/SBT: „entwickelt von Dr. Gregory Hanley und Kolleg:innen“; nie „zertifiziert“, „Hanley-Methode“, „FTF-Partnerin“, kein Logo, kein Foto mit ihm. Keine BACB-Supervisionsstunden.
- Der frühere Arbeitgeber wird nirgends genannt. Keine Kinderfotos, kein Eventfoto (Nr. 14).
- Stadt erst nach Bestätigung in Titel/Meta aufnehmen (Kommentare in `de/pages.ts`, `en/faq.ts`).

## Fotos

`src/assets/photos/` über `astro:assets` (AVIF/WebP + JPG, Breiten 320–1200 px, feste Maße, lazy außer im Hero). Porträts sind **Beispielbilder, teils KI-generiert** → `photosAreSamples: true` zeigt im Footer „Beispielbilder“. Nach dem echten Shooting (Research §9.2) Dateien gleichen Namens ersetzen und den Schalter auf `false` setzen. Alt-Texte je Sprache in `src/content/<sprache>/ui.ts`.

## Farben & Kontrast (WCAG 2.2 AA, gemessen)

Elfenbein `#f7f3ec`, Papier `#fcfaf6`, Sand `#ede4d8`, Seeglas `#dfe8e1`, Lavendel `#e6e3ef`, Waldgrün `#183b30`, Terrakotta `#8b4739`. Kleinster Textkontrast **5,19 : 1** (Fehlertext auf Lavendel); Fließtext 6,1–11,8 : 1; Primärbutton 6,5 : 1; auf Waldgrün ≥ 6,3 : 1. Geprüft ohne horizontales Scrollen bei 375 px und 1366 px.

## Kontaktformular

`.env.example` nach `.env` kopieren; `PUBLIC_*` wird beim Build eingebaut. Ohne `PUBLIC_FORM_ENDPOINT` zeigt `/de/kontakt/` einen ehrlichen E-Mail-Hinweis. Felder: `name`, `email`, `anliegen`, `sprache`, `region`, `nachricht`, `datenschutz`, technisch `seite`, `danke`, Honeypot `website`. Keine Gesundheitsdaten im Formular.

## Deployment (EU-Host)

1. `SITE_URL` (und ggf. `PUBLIC_FORM_ENDPOINT`) setzen, `npm run build`.
2. Inhalt von `dist/` hochladen; AVV mit dem Host; HTTPS.
3. `/` → `/de/` als 301 und `404.html` als Fehlerseite (Apache: `public/.htaccess`).
4. `sitemap-index.xml` (Sitemaps je Sprache) in der Search Console einreichen.
5. Keine Skripte, Karten, Videos oder Buchungs-Widgets einbetten – nur verlinken.
