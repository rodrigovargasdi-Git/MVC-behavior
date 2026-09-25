# Website v2 – Marija Vargas (Astro, statisch)

Deutschsprachige, statische Website auf Basis der Evaluation `../docs/2026-09-25-website-evaluation.md`.
Kein Server, keine Datenbank, keine Cookies, keine Drittanbieter-Requests. Die Schriften sind selbst gehostet (@fontsource).

## Lokal starten

Voraussetzung: Node.js ≥ 22.12 (npm, nicht pnpm).

```bash
cd site
npm install
npm run dev       # Entwicklung: http://localhost:4321
npm run build     # erzeugt site/dist/ (reines HTML/CSS, etwa 0,6 MB)
npm run preview   # prüft den Build lokal
```

## Platzhalter füllen (eine Datei)

Alle unbestätigten Angaben stehen in **`src/content/site.ts`**. Jede davon ist ein `PH('…')`-Aufruf und erscheint auf der Seite gelb markiert als `[[BITTE BESTÄTIGEN: …]]`. Dazu gehören Marke, Qualifikationen, Kontakt, Region, Preise, Foto, Stimmen, Haltungs-Zusagen und die Daten für Impressum und Datenschutz. Die Frage-Codes (B7, C1, E4 …) verweisen auf §5.8 der Evaluation.

- Einen `PH('…')`-Aufruf durch den bestätigten Text ersetzen und neu bauen.
- Nicht zutreffende Punkte löschen, zum Beispiel einzelne Haltungs-Zusagen oder `haltungNote: ''`.
- Nicht bestätigte Werte gelangen nie in JSON-LD oder `llms.txt`, und ihre Links (mailto/tel) bleiben aus.
- Die Texte der Seiten liegen in `src/pages/*.astro`, die FAQ in `src/content/faq.ts`.
- Die Domain wird in `astro.config.mjs` oder per `SITE_URL` in `.env` gesetzt. Der Platzhalter `https://vargas-behavior.example` funktioniert absichtlich nie.
- `public/og-image.png` ist ein generiertes Vorschaubild (1200×630). Durch ein finales Motiv ersetzen.

**Vor dem Launch** muss dieser Befehl leer bleiben: `grep -r "BITTE BESTÄTIGEN" dist`. Impressum und Datenschutz müssen außerdem rechtlich geprüft sein.

## Kontaktformular

`.env.example` nach `.env` kopieren. Werte in `PUBLIC_*` werden **beim Build** fest eingebaut.

- Ist `PUBLIC_FORM_ENDPOINT` leer, zeigt `/kontakt/` kein Formular, sondern einen E-Mail-Hinweis. Die Seite täuscht keinen Versand vor.
- Ist `PUBLIC_FORM_ENDPOINT` gesetzt, sendet das Formular per POST die Felder `name`, `email`, `anliegen`, `region`, `nachricht`, `datenschutz` und das Honeypot-Feld `website` (muss leer sein).
  - Mit JavaScript zeigt die Seite „angekommen“ nur bei HTTP 2xx, sonst eine Fehlermeldung. Liegt der Endpunkt auf einer anderen Domain, muss er CORS erlauben.
  - Ohne JavaScript leitet der Endpunkt nach Erfolg auf `/kontakt/danke/` weiter (303).
- Empfohlen (Evaluation §4): ein kleiner PHP-Mailer auf demselben EU-Host oder ein EU-Formulardienst mit AVV. Er prüft die Eingaben serverseitig, verwirft Anfragen mit ausgefülltem Honeypot und speichert nichts in einer eigenen Datenbank.
- `PUBLIC_NOINDEX=true` sperrt die Indexierung (robots.txt und Meta-Tag). Das gilt für Test-Deployments mit Platzhaltern.

## Deployment (beliebiger statischer EU-Host)

1. `SITE_URL` und gegebenenfalls `PUBLIC_FORM_ENDPOINT` setzen, dann `npm run build` ausführen.
2. Den **Inhalt** von `site/dist/` per SFTP/FTP oder Git-Deploy in das Web-Root laden, zum Beispiel bei Hetzner, IONOS, All-Inkl, netcup oder Uberspace. Mit dem Host einen AVV abschließen und HTTPS aktivieren.
3. `404.html` als Fehlerseite eintragen. Bei Apache: `ErrorDocument 404 /404.html` in `.htaccess`.
4. Die Sitemap `https://<domain>/sitemap-index.xml` in der Google Search Console einreichen.
5. Keine Skripte, Karten, Videos oder Buchungs-Widgets einbetten, nur verlinken. Sonst müssen Datenschutz und Consent angepasst werden.

## Umgesetzt (Kurzfassung)

- **Seiten:** Start, Leistungen mit Familien, Fachkräften und Institutionen & Jugendämtern, Fortbildung & Supervision, Über Marija, FAQ, Kontakt (+ Danke), Impressum, Datenschutz und eine deutsche 404-Seite.
- **SEO/AEO:** Titel und Description je Seite, Canonical, Open Graph, JSON-LD (ProfessionalService, Person, Service, BreadcrumbList, FAQPage), `sitemap-index.xml`, `robots.txt` und `llms.txt`.
- **Barrierefreiheit:** `lang="de"`, kein Zoom-Verbot, Skip-Link, sichtbarer Fokus, Menü mit Escape-Taste, Mindestgröße 12 px, Tap-Ziele ab 24 px und reduzierte Bewegung. Alle Texte erreichen mindestens 4,96:1 (WCAG AA). Gemessen wurde bei 1366 und 375 px.
- **Farben:**
  - Primärbutton Terrakotta `#8e493b` mit `#fff8ef` (6,3:1).
  - Koralle `#d96d58` nur noch als Deko.
  - Auf Dunkelgrün `#f2a591` (6,2:1).
