/**
 * ZENTRALE DATEI FÜR ALLE UNBESTÄTIGTEN ANGABEN
 * ================================================
 * Alles, was Marija noch bestätigen oder liefern muss, steht hier – als
 * PH('…') = sichtbarer Platzhalter „[[BITTE BESTÄTIGEN: …]]“ auf der Website.
 *
 * So füllen Sie die Seite:
 *   1. Einen PH('…')-Aufruf durch den bestätigten Text ersetzen, z. B.
 *        email: PH('E-Mail-Adresse …')   →   email: 'kontakt@ihre-domain.de'
 *   2. `npm run build` – der Platzhalter verschwindet überall (Seiten, JSON-LD, llms.txt).
 *   3. Vor dem Launch: `grep -r "BITTE BESTÄTIGEN" dist` muss leer sein.
 *
 * Regeln (siehe docs/2026-09-25-website-evaluation.md):
 *   - Keine erfundenen Qualifikationen, Kontaktdaten, Zahlen oder Stimmen.
 *   - Nicht bestätigte Werte erscheinen NIE in strukturierten Daten (JSON-LD) –
 *     dafür sorgt `confirmed()` unten.
 *   - Die Frage-Codes (A1, B7, C1 …) verweisen auf §5.8 der Evaluation.
 */

export const PH_PREFIX = '[[BITTE BESTÄTIGEN:';
export const PH = (note: string) => `${PH_PREFIX} ${note}]]`;
export const isPlaceholder = (v: unknown): boolean =>
  typeof v !== 'string' || v.trim() === '' || v.includes(PH_PREFIX);
/** Gibt den Wert nur zurück, wenn er bestätigt ist (für JSON-LD, mailto:, tel: …). */
export const confirmed = <T extends string>(v: T | undefined): T | undefined =>
  isPlaceholder(v) ? undefined : v;

export const site = {
  /** Marke. Arbeitsname laut Auftrag – Empfehlung der Evaluation §3.4 Nr. 6 / Frage B7:
   *  „Marija Vargas · Verhaltensanalytische Beratung & Supervision“. */
  brand: {
    name: 'Vargas Human Behavior',
    short: 'Vargas',
    status: PH('Arbeitsname „Vargas Human Behavior“ – finalen Markennamen festlegen (B7), Namens- und Domainprüfung'),
    /** Beschreibender Zusatz unter dem Namen im Kopfbereich. */
    descriptor: 'Verhaltensanalytische Beratung & Supervision',
  },

  person: {
    name: 'Marija Vargas',
    legalName: PH('vollständiger Name, wie im Impressum anzugeben'),
    jobTitle: PH('Berufsbezeichnung, exakt wie geführt (z. B. „Board Certified Behavior Analyst“) und Staat der Verleihung (C1/C2)'),
    /** Nur bestätigte Abschlüsse/Zertifikate eintragen – exakter Wortlaut, schriftlich bestätigt (C1). */
    credentials: [
      PH('Abschluss/Zertifizierung 1 – exakter Wortlaut, Institution, Jahr'),
      PH('Abschluss/Zertifizierung 2 – oder Zeile löschen'),
      PH('Anerkennung ausländischer Abschlüsse (ZAB/anabin) – falls relevant (C2)'),
    ],
    memberships: [PH('Mitgliedschaften in Fachverbänden – oder Zeile löschen')],
    languages: PH('Arbeitssprachen, z. B. Deutsch, Englisch, Spanisch (C6)'),
    /** Bestätigte Sprachen als ISO-Liste für JSON-LD, z. B. ['de', 'en']. Leer = nicht ausgeben. */
    languageCodes: [] as string[],
    photo: PH('Porträtfoto (Hochformat, mind. 1200 px) – oder abstrakte Form behalten (C3)'),
    linkedin: PH('LinkedIn-URL (optional)'),
  },

  /** Belege neben den Aussagen (M6). Nur Zahlen veröffentlichen, die Marija freigibt (C4). */
  proof: {
    years: PH('Berufserfahrung, z. B. „über 10 Jahre“ – Zahl und Freigabe (C4)'),
    supervised: PH('Anzahl supervidierter Fachkräfte – oder Punkt löschen (C4)'),
    trainings: PH('Anzahl Fortbildungen/Vorträge – oder Punkt löschen (C4)'),
  },

  /** Stimmen: nur Fachkräfte/Institutionen, mit schriftlicher Freigabe (C5). Leer = Platzhalterhinweis. */
  testimonials: [] as { quote: string; author: string; role: string }[],
  testimonialsNote: PH('2–3 Stimmen von Fachkräften oder Institutionen mit schriftlicher Freigabe – sonst Abschnitt entfernen (C5)'),

  contact: {
    email: PH('E-Mail-Adresse auf eigener Domain (F1)'),
    phone: PH('Telefonnummer – optional (F3)'),
    /** Link zu externem Terminbuchungstool (Phase 2, nur verlinken, nicht einbetten). Leer = aus. */
    bookingUrl: '',
    responseTime: PH('Antwortzeit, z. B. „innerhalb von zwei Werktagen“'),
  },

  offer: {
    region: PH('Ort/Region für Termine vor Ort (E1)'),
    serviceArea: PH('Einsatzgebiet, z. B. „online deutschlandweit, vor Ort in [Region]“ (E1)'),
    /** Bestätigtes Einsatzgebiet für JSON-LD (z. B. 'Deutschland'). Leer = nicht ausgeben. */
    areaServedLd: '',
    homeVisits: PH('Hausbesuche sowie Termine in Kita/Schule möglich? (E2)'),
    ageRange: PH('Altersgruppen, z. B. 0–6, 6–12, 12–18 Jahre (D6)'),
    groups: PH('Begleitete Gruppen, z. B. Autismus, ADHS, geistige Behinderung (D3)'),
    supervisionHours: PH('Anrechenbare Supervisionsstunden (z. B. BACB)? Max. Gruppengröße? (E8)'),
    trainingTopics: [
      'Verhalten verstehen: Was will ein Kind mitteilen?',
      'Respektvolle, verhaltensanalytisch fundierte Praxis im Alltag',
      'Lernumgebungen in Kita und Schule inklusiv gestalten',
    ],
    trainingTopicsNote: PH('3 Themen für den Start auswählen oder ersetzen (E9)'),
    talkExample: '„Was, wenn Verhalten eine Einladung ist?“',
    talkNote: PH('Vortragsthemen und Formate bestätigen; Honorar „auf Anfrage“ (E10)'),
  },

  prices: {
    familyInitial: PH('Preis Erstgespräch Familie, z. B. „ab 180 €“ (E3/E4)'),
    familyInitialFormat: PH('Dauer und Format, z. B. „60–75 Min., online“'),
    freeIntro: PH('Kostenloses 15-Minuten-Kennenlernen anbieten? (E5)'),
    vatNote: PH('Preisangabe inkl. USt. – oder Hinweis auf Umsatzsteuerbefreiung (§ 19 UStG bzw. § 4 UStG) nach Rücksprache mit Steuerberatung (B3, M12)'),
    cancellation: PH('Absagefrist, z. B. 48 Stunden (E11)'),
    jugendamtRates: PH('Abrechnungsmodell für Jugendämter, z. B. Fachleistungsstunde oder Einzelfallvereinbarung (E6)'),
  },

  /** Haltung (§3.4). Nur Punkte veröffentlichen, die Marija tatsächlich so praktiziert (D2).
   *  Nach Bestätigung nicht zutreffende Punkte löschen und `haltungNote` auf '' setzen. */
  haltung: [
    'Ziele vereinbaren wir mit der Familie und, so weit möglich, mit dem Kind selbst.',
    'Die Zustimmung des Kindes zählt: Zeigt es Überforderung, pausieren wir.',
    'Keine strafenden oder aversiven Verfahren, kein Gehorsam um seiner selbst willen.',
    'Kein Ziel, ein Kind „unauffällig“ zu machen. Stimming und autistische Identität werden respektiert.',
    'Im Mittelpunkt stehen Kommunikation, Selbstbestimmung, Teilhabe und Lebensqualität.',
    'Enge Zusammenarbeit mit Logopädie, Ergotherapie, Kita und Schule.',
    'Beobachtungen und Verlaufsdaten teile ich mit der Familie, um zu prüfen, ob die Unterstützung hilft, nicht um Ergebnisse zu versprechen.',
  ],
  haltungNote: PH('Nur die Punkte veröffentlichen, die Marija so praktiziert – übrige löschen (D2)'),

  /** Aussagen, die nur veröffentlicht werden dürfen, wenn sie zutreffen. */
  checks: {
    jugendamtFunding: PH('Nur veröffentlichen, wenn für Marija zutreffend (E6/E7); Formulierung rechtlich prüfen'),
    wording: PH('Bevorzugte Bezeichnung: „autistische Kinder“ / „Kinder im Autismus-Spektrum“? (D3)'),
  },

  /** Rechtliche Angaben für Impressum und Datenschutz (B1–B6, §5 DDG, Art. 13 DSGVO). */
  legal: {
    ownerName: PH('Name der Inhaberin bzw. Firma'),
    legalForm: PH('Rechtsform, z. B. Einzelunternehmen / freiberuflich (B1)'),
    street: PH('Straße und Hausnummer (ladungsfähige Anschrift, B5)'),
    postalCity: PH('PLZ und Ort'),
    country: 'Deutschland',
    vatId: PH('USt-IdNr. nach § 27a UStG – falls vorhanden, sonst Zeile löschen'),
    professionalTitle: PH('Berufsbezeichnung und Staat, in dem sie verliehen wurde – nur falls reglementierter Beruf'),
    supervisoryAuthority: PH('Zuständige Aufsichtsbehörde / Kammer – nur falls zutreffend, sonst löschen'),
    vsbgNote: PH('Hinweis zur Verbraucherstreitbeilegung (§ 36 VSBG) nur so übernehmen, wenn zutreffend – rechtlich prüfen'),
    liabilityInsurance: PH('Berufshaftpflicht: Versicherer, Anschrift, Geltungsbereich – nur falls Angabepflicht (B6)'),
    host: PH('Hosting-Anbieter mit Sitz in der EU, Anschrift; AVV abgeschlossen am …'),
    hostLogRetention: PH('Speicherdauer der Server-Logfiles, z. B. 7 Tage'),
    formProcessor: PH('Wer verarbeitet Formulardaten? z. B. PHP-Mailer auf dem eigenen Host oder EU-Formulardienst mit AVV'),
    mailProvider: PH('E-Mail-Anbieter mit Sitz in der EU (z. B. mailbox.org, IONOS), AVV'),
    dpoNote: PH('Prüfen, ob eine Pflicht zur Benennung einer/eines Datenschutzbeauftragten besteht'),
    healthDataNote: PH('Umgang mit trotzdem übermittelten Gesundheitsdaten (Art. 9 DSGVO) rechtlich klären'),
    inquiryRetention: PH('Löschfrist für Anfragen ohne Auftrag, z. B. 6 Monate'),
    dpAuthority: PH('Zuständige Datenschutz-Aufsichtsbehörde des Bundeslandes'),
    privacyDate: PH('Stand der Datenschutzerklärung (Datum)'),
  },
} as const;

export type Site = typeof site;

/** Anliegen im Kontaktformular – zugleich die KPI-Zählung (Evaluation §5.4). */
export const anliegen = [
  { value: 'familie', label: 'Elternteil / Familie' },
  { value: 'fachkraft', label: 'Fachkraft / Supervision' },
  { value: 'institution', label: 'Jugendamt / Träger / Einrichtung' },
  { value: 'fortbildung', label: 'Fortbildung / Vortrag' },
  { value: 'sonstiges', label: 'Sonstiges' },
] as const;
