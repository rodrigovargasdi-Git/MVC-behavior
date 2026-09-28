/**
 * ZENTRALE DATEI FÜR ALLE UNBESTÄTIGTEN ANGABEN (alle Sprachen)
 * =============================================================
 * Alles, was Marija noch bestätigen oder liefern muss, steht hier – als
 * PH('…') = sichtbarer Platzhalter „[[BITTE BESTÄTIGEN: …]]“ auf der Website.
 *
 * So füllen Sie die Seite:
 *   1. Einen PH('…')-Aufruf durch den bestätigten Text ersetzen, z. B.
 *        email: PH('E-Mail-Adresse …')   →   email: 'kontakt@ihre-domain.com'
 *      Bei Angaben mit { de, en, hr, es } jede Sprache ersetzen.
 *   2. `npm run build` – der Platzhalter verschwindet überall (Seiten, JSON-LD, llms.txt).
 *   3. Vor dem Launch: `grep -r "BITTE BESTÄTIGEN" dist` muss leer sein.
 *
 * Regeln (docs/2026-09-25-website-evaluation.md, docs/2026-09-28-competitor-keyword-research.md):
 *   - Keine erfundenen Qualifikationen, Kontaktdaten, Zahlen, Namen oder Stimmen.
 *   - Nicht bestätigte Werte erscheinen NIE in strukturierten Daten (JSON-LD) oder llms.txt –
 *     dafür sorgt `confirmed()` unten.
 *   - Preise sind VORSCHLÄGE aus der Research §7, bis `prices.confirmed = true` gesetzt ist.
 *   - Die Frage-Codes (A1, B7, C1 …) verweisen auf §5.8 der Evaluation, „Q1…Q9“ auf §10 der Research.
 */
import type { Locale } from '../i18n/routes';

export const PH_PREFIX = '[[BITTE BESTÄTIGEN:';
export const PH = (note: string) => `${PH_PREFIX} ${note}]]`;
export const isPlaceholder = (v: unknown): boolean =>
  typeof v !== 'string' || v.trim() === '' || v.includes(PH_PREFIX);
/** Gibt den Wert nur zurück, wenn er bestätigt ist (für JSON-LD, mailto:, tel: …). */
export const confirmed = <T extends string>(v: T | undefined): T | undefined =>
  isPlaceholder(v) ? undefined : v;

type L<T = string> = Record<Locale, T>;

const city = PH('Region für Termine vor Ort (E1)');

export const site = {
  brand: {
    /** Arbeitsname laut Research §3.3 / Q7 (Firma mit benannten Programmen). */
    /** Marke laut Fragebogen (28.09.2026). Alternative Markenoption, nicht verwendet: „VerbaCareEdu“. */
    name: 'Marija Vargas · Behavior Analysis & Consulting',
    short: 'Marija Vargas',
    status: '',
    descriptor: {
      de: 'Verhaltensanalytische Beratung · international',
      en: 'Behavior analysis consultancy · international',
      hr: 'Savjetovanje i analiza ponašanja',
      es: 'Asesoría en análisis de conducta',
    } satisfies L,
  },

  /** false = HR- und ES-Seiten werden gebaut, aber noindex, ohne Sitemap/hreflang und nicht im Sprachumschalter.
   *  Nach Marijas Sprachprüfung auf true setzen. */
  showHrEs: false,

  /** true = die Porträts sind Beispielbilder (teils KI-generiert). Zeigt im Footer einen dezenten Hinweis.
   *  Nach dem echten Fotoshooting (Research §9.2) auf false setzen und Dateien in src/assets/photos/ ersetzen. */
  photosAreSamples: true,

  person: {
    name: 'Marija Vargas',
    legalName: PH('vollständiger Name, wie im Impressum anzugeben'),
    jobTitle: 'International Behavior Analyst (IBA)',
    /** Qualifikationen – Wortlaut nach docs/2026-09-28-hanley-pfa-sbt-positioning.md §7 (Vorlagen 7.1–7.4).
     *  Nur zutreffende Zeilen behalten; nicht zutreffende Einträge komplett löschen (inkl. `note`).
     *  Nie „zertifiziert/certified“ für FTF, nie „Hanley-Methode“, kein FTF-Logo, keine Partnerschaft behaupten.
     *  „Supervisorin/Trainerin für PFA-SBT“ nur, wenn die Stufe 6 ist. Das Credential läuft jährlich ab – Gültigkeit pflegen. */
    credentials: [
      {
        id: 'pfa-sbt',
        text: {
          de: 'Fortbildung in Practical Functional Assessment und Skill-Based Treatment (PFA/SBT) bei FTF Behavioral Consulting, USA – seit 2021',
          en: 'Training in Practical Functional Assessment and Skill-Based Treatment (PFA/SBT) with FTF Behavioral Consulting, USA – since 2021',
          hr: 'Edukacija iz Practical Functional Assessment i Skill-Based Treatment (PFA/SBT), FTF Behavioral Consulting, SAD – od 2021.',
          es: 'Formación en Practical Functional Assessment y Skill-Based Treatment (PFA/SBT) con FTF Behavioral Consulting, EE. UU. – desde 2021',
        } satisfies L,
        /** Stufe noch offen. Nie „zertifiziert“; „Supervision in PFA-SBT“ nur bei Stufe 6. */
        verify: PH('PFA-SBT-Credential: Stufe [4 „Lead“ / 6 „Supervision“] von 7, gültig bis [MM/JJJJ], Link zum FTF Credentialing Directory – nur falls vorhanden'),
      },
      {
        id: 'iba',
        text: {
          de: 'International Behavior Analyst (IBA) – International Behavior Analysis Organization (IBAO)',
          en: 'International Behavior Analyst (IBA) – International Behavior Analysis Organization (IBAO)',
          hr: 'International Behavior Analyst (IBA) – International Behavior Analysis Organization (IBAO)',
          es: 'International Behavior Analyst (IBA) – International Behavior Analysis Organization (IBAO)',
        } satisfies L,
        verify: PH('Registernummer bzw. Link zum IBAO-Register (optional)'),
      },
      {
        id: 'ma',
        text: {
          de: 'MA Child Studies – Linköping University, Schweden (2020)',
          en: 'MA Child Studies – Linköping University, Sweden (2020)',
          hr: 'MA Child Studies – Sveučilište u Linköpingu, Švedska (2020.)',
          es: 'MA Child Studies – Universidad de Linköping, Suecia (2020)',
        } satisfies L,
      },
      {
        id: 'ba',
        text: {
          de: 'BA Neuroscience – Earlham College, USA',
          en: 'BA Neuroscience – Earlham College, USA',
          hr: 'BA Neuroscience – Earlham College, SAD',
          es: 'BA Neuroscience – Earlham College, EE. UU.',
        } satisfies L,
      },
      {
        id: 'recognition',
        text: {
          de: 'Anerkennung des Studienabschlusses in Deutschland: liegt vor',
          en: 'Degree recognized in Germany',
          hr: 'Diploma priznata u Njemačkoj',
          es: 'Título reconocido en Alemania',
        } satisfies L,
        verify: PH('ausstellende Stelle und Art der Anerkennung, z. B. ZAB-Zeugnisbewertung – für den exakten Wortlaut'),
      },
    ] as { id: string; text: L; verify?: string; note?: L }[],
    memberships: [PH('Mitgliedschaften in Fachverbänden – oder Zeile löschen')],
    /** Sprachen laut Auftrag vom 28.09.2026: Kroatisch Muttersprache; Deutsch, Englisch professionell; Spanisch Arbeitsniveau.
     *  Als ISO-Liste für JSON-LD (knowsLanguage / availableLanguage). */
    languageCodes: ['hr', 'de', 'en', 'es'] as string[],
    languages: {
      de: 'Kroatisch (Muttersprache), Deutsch und Englisch (fließend, beruflich), Spanisch (Arbeitsniveau)',
      en: 'Croatian (native), German and English (fluent, professional), Spanish (working level)',
      hr: 'hrvatski (materinski), njemački i engleski (tečno, profesionalno), španjolski (radna razina)',
      es: 'croata (lengua materna), alemán e inglés (nivel profesional), español (nivel de trabajo)',
    } satisfies L,
    spanishScope: PH('Spanisch: vollständige Beratungen auf Spanisch oder nur Erstgespräch? (Q4)'),
    linkedin: PH('LinkedIn-URL (optional)'),
  },

  /** Erfahrung (Positionierung laut Auftrag: ca. 10 Jahre USA + ca. 10 Jahre Deutschland – Zahlen unbestätigt). */
  experience: {
    de: PH('rund 10 Jahre in den USA und rund 10 Jahre in Deutschland – Zahlen bestätigen (C4)'),
    en: PH('about 10 years in the US and about 10 years in Germany – confirm figures (C4)'),
    hr: PH('oko 10 godina u SAD-u i oko 10 godina u Njemačkoj – potvrditi brojke (C4)'),
    es: PH('unos 10 años en EE. UU. y unos 10 años en Alemania – confirmar cifras (C4)'),
  } satisfies L,

  /** Fachlicher Ansatz (PFA & SBT): Texte je Sprache in src/content/<sprache>/approach.ts, Qualifikation in person.credentials. */

  /** Persönlicher Abschnitt auf der Über-Seite („Persönlich / Beyond the work“). Alles unbestätigt.
   *  `motherhood` ist optional: löschen (leerer String ''), wenn Marija das nicht veröffentlichen möchte. */
  personal: {
    /** Beruflicher Werdegang (Über-Seite, Abschnitt „Werdegang“). Arbeitgeber nur mit deren Zustimmung nennen. */
    career: {
      de: PH('Werdegang in 3–4 Sätzen: Studium (Hochschule, Land), Stationen in den USA, seit wann in Deutschland – Arbeitgeber nur mit Zustimmung nennen'),
      en: PH('Career in 3–4 sentences: degree (university, country), roles in the US, in Germany since … – name employers only with their consent'),
      hr: PH('Profesionalni put u 3–4 rečenice: studij, rad u SAD-u, u Njemačkoj od … – poslodavce navesti samo uz njihovu suglasnost'),
      es: PH('Trayectoria en 3–4 frases: estudios, etapas en EE. UU., en Alemania desde … – citar empleadores solo con su consentimiento'),
    } satisfies L,
    path: {
      de: PH('Lebensweg bestätigen: aufgewachsen in Kroatien (Ort?), Studium/Arbeit in den USA (wo, wie lange?), seit … in Deutschland'),
      en: PH('Confirm life path: grew up in Croatia (where?), studied/worked in the US (where, how long?), in Germany since …'),
      hr: PH('Potvrditi životni put: odrasla u Hrvatskoj (gdje?), studij/rad u SAD-u (gdje, koliko dugo?), u Njemačkoj od …'),
      es: PH('Confirmar trayectoria: creció en Croacia (¿dónde?), estudió/trabajó en EE. UU. (¿dónde, cuánto tiempo?), en Alemania desde …'),
    } satisfies L,
    why: {
      de: PH('Warum Marija die Firma gegründet hat – 2–3 Sätze in ihren Worten'),
      en: PH('Why Marija founded the company – 2–3 sentences in her own words'),
      hr: PH('Zašto je Marija osnovala tvrtku – 2–3 rečenice njezinim riječima'),
      es: PH('Por qué Marija fundó la empresa – 2–3 frases con sus propias palabras'),
    } satisfies L,
    motherhood: {
      de: PH('OPTIONAL – löschen, falls nicht gewünscht: „Ich bin selbst Mutter und weiß, wie sich ein voller Familienalltag anfühlt.“'),
      en: PH('OPTIONAL – delete if not wanted: “I am a mother myself and know what a full family day feels like.”'),
      hr: PH('NEOBAVEZNO – obrisati ako nije poželjno: „I sama sam majka i znam kako izgleda pun obiteljski dan.“'),
      es: PH('OPCIONAL – borrar si no se desea: «Yo misma soy madre y sé lo que es un día familiar muy lleno.»'),
    } satisfies L,
  },

  /** Belege neben den Aussagen (M6). Nur Zahlen veröffentlichen, die Marija freigibt (C4). */
  proof: {
    supervised: PH('Anzahl supervidierter Fachkräfte – oder Punkt löschen (C4)'),
    trainings: PH('Anzahl Fortbildungen/Vorträge – oder Punkt löschen (C4)'),
  },

  /** Stimmen: nur Fachkräfte/Institutionen, mit schriftlicher Freigabe (C5). Leer = Abschnitt zeigt Platzhalter. */
  testimonials: [] as { quote: string; author: string; role: string }[],
  testimonialsNote: PH('2–3 Stimmen von Fachkräften oder Institutionen mit schriftlicher Freigabe – sonst Abschnitt entfernen (C5)'),

  contact: {
    email: PH('E-Mail-Adresse auf eigener Domain (F1)'),
    phone: PH('Telefonnummer – optional (F3)'),
    /** Link zu externem Terminbuchungstool (nur verlinken, nicht einbetten). Leer = aus. */
    bookingUrl: '',
    responseTime: {
      de: PH('innerhalb von zwei Werktagen – Antwortzeit bestätigen'),
      en: PH('within two working days – confirm response time'),
      hr: PH('u roku od dva radna dana – potvrditi'),
      es: PH('en un plazo de dos días laborables – confirmar'),
    } satisfies L,
    /** Video-Tool für Online-Termine (EU-Anbieter mit AVV, kein WhatsApp – Research §8). */
    videoTool: PH('Video-Tool für Online-Termine (EU-Anbieter mit AVV)'),
  },

  offer: {
    city,
    serviceArea: {
      de: `Online in Deutschland und international, vor Ort in ${city} – auch als Hausbesuch und in Kita oder Schule`,
      en: `Online in Germany and internationally, in person in ${city} – including home visits and visits to Kita or school`,
      hr: `Online u Njemačkoj i međunarodno, uživo u regiji ${city} – i kućni posjeti te posjeti vrtiću ili školi`,
      es: `Online en Alemania e internacionalmente, presencial en ${city} – también visitas a domicilio y a la escuela`,
    } satisfies L,
    /** Bestätigtes Einsatzgebiet für JSON-LD (z. B. 'Europe'). Leer = nicht ausgeben. */
    areaServedLd: '',
    travel: PH('Reisebereitschaft für Intensivtage: max. Tage pro Monat, Regionen (Q3)'),
    /** Laut Fragebogen: 0–12 Jahre. */
    ageRange: { de: '0–12 Jahre', en: '0–12 years', hr: '0–12 godina', es: '0–12 años' } satisfies L,
    capacity: PH('Nur wenn zutreffend: z. B. „bis zu 4 neue Familien pro Monat“ (Research §7.3)'),
    /** Keine anrechenbaren BACB-Supervisionsstunden (Fragebogen). */
    supervisionHours: '',
    /** Supervision für Fachkräfte nur, wenn eine Qualifikation das trägt; PFA-SBT-Supervision nur mit FTF-Stufe 6. */
    supervisionEligibility: '',
    /** Marktanalyse §3.4: Zentren haben ≥ 1 Jahr Wartezeit. Nur veröffentlichen, wenn Marija die Kapazität bestätigt. */
    startClaim: {
      de: PH('Keine Warteliste – Start innerhalb weniger Wochen (nur wenn Kapazität bestätigt)'),
      en: PH('No waiting list – start within weeks (only if capacity confirmed)'),
      hr: PH('Bez liste čekanja – početak u roku od nekoliko tjedana (samo ako je kapacitet potvrđen)'),
      es: PH('Sin lista de espera – inicio en pocas semanas (solo si se confirma la capacidad)'),
    } satisfies L,
    trainingTopicsNote: PH('3 Fortbildungsthemen für den Start auswählen oder ersetzen (E9)'),
    /** Schlaf- und Essensthemen werden nicht angeboten (Fragebogen). */
    sleepTraining: '',
  },

  /** Partnerlinie Sprache & mehrsprachige Familien (Schwester). Regulatorisch: in Deutschland KEINE
   *  „Logopädie“/„Sprachtherapie“, solange ihre Qualifikation nicht anerkannt ist (Research §3.3 F, §8). */
  /** Partnerlinie mit der Schwester: laut Fragebogen „nicht jetzt“ – derzeit NICHT verwendet (Duo-Fotos bleiben ungenutzt in assets). */
  sister: {
    name: PH('Name der Schwester (Partnerin Sprache)'),
    qualification: PH('Qualifikation der Schwester: exakte Berufsbezeichnung, Land der Zulassung, Anerkennungsstatus in Deutschland (Q6)'),
    languages: PH('Arbeitssprachen der Schwester (Q6)'),
    structure: PH('Eigenes Unternehmen der Schwester oder gemeinsame Firma? Partnerschaft vereinbart? (Q6)'),
  },

  /** Preise: Vorschläge aus Research §7.2. Bis `confirmed: true` erscheinen sie als Platzhalter.
   *  Eine Preisliste in EUR für alle Sprachen. Familien: Endpreise inkl. USt. (PAngV). */
  prices: {
    confirmed: false,
    /** false = keine Preise auf der Website, überall „Honorar auf Anfrage“ (Fragebogen). Vorschläge bleiben hier für später. */
    show: false,
    items: {
      clarity: { from: 240 },
      assessment: { from: 1450 },
      coaching: { from: 1850 },
      focus: { from: 1350 },
      /** PFA-SBT-Programm „Ruhigere Tage“ (8–12 Wochen): Vorschlag aus der Marktanalyse §3.4 Nr. 2. */
      calmDays: { from: 1350 },
      intensive: { from: 4900, plusTravel: true },
      caseLead: { from: 690, perMonth: true },
      supIndividual: { from: 140 },
      supGroup: { from: 65, perPerson: true },
      trainingHalf: { from: 1200, plusTravel: true, b2b: true },
      trainingFull: { from: 1900, plusTravel: true, b2b: true },
    },
    /** Kostenloses 15-Minuten-Kennenlernen (Research §3.3 „Fit call“) – alle CTAs bauen darauf auf. */
    /** Kostenloses 15-Minuten-Kennenlerngespräch – bestätigt, Haupt-CTA. */
    freeCall: '',
    vatNote: PH('Familien: Endpreise inkl. 19 % USt. – oder Hinweis auf Umsatzsteuerbefreiung nach Rücksprache mit Steuerberatung (B3, Research §7.3)'),
    cancellation: PH('Absagefrist, z. B. 48 Stunden (E11)'),
    payment: PH('Zahlung: z. B. 50 % bei Programmstart, Rechnung auf DE/EN (Research §7.3)'),
    reducedPlaces: PH('Optional: „Einige Plätze pro Jahr zu reduziertem Honorar“ – nur wenn gewünscht (Research §7.3)'),
    jugendamtRates: PH('Abrechnungsmodell für Jugendämter, z. B. Fachleistungsstunde oder Einzelfallvereinbarung (E6)'),
  },

  /** Haltungs-Zusagen: Texte je Sprache in src/content/<sprache>/. Nur Punkte veröffentlichen, die Marija so praktiziert (D2). */
  /** Alle 7 Zusagen von Marija bestätigt (Fragebogen). */
  haltungNote: '',

  /** Aussagen, die nur veröffentlicht werden dürfen, wenn sie zutreffen. */
  checks: {
    jugendamtFunding: PH('Nur veröffentlichen, wenn für Marija zutreffend (E6/E7); Formulierung rechtlich prüfen'),
    /** Jugendamt-Seite (nur DE): bleibt noindex und außerhalb der Navigation, bis die arbeitsrechtliche Prüfung erledigt ist. */
    jugendamtPageReleased: false,
    jugendamtRelease: PH('Angebot für Jugendämter/Träger erst nach arbeitsrechtlicher Prüfung veröffentlichen (Q1)'),
    sensitivityRead: PH('Sensitivity-Read dieser Seite durch eine autistische Person vor dem Launch (D5)'),
    sourcesCheck: PH('Quelle vor Veröffentlichung im Wortlaut prüfen und angeben (Übersichtsarbeit, Jahr) – keine abgelaufenen Leitlinien zitieren'),
  },

  /** Rechtliche Angaben für Impressum und Datenschutz (B1–B6, § 5 DDG, Art. 13 DSGVO). */
  legal: {
    ownerName: PH('Name der Inhaberin bzw. Firma'),
    legalForm: PH('Rechtsform, z. B. Einzelunternehmen / freiberuflich / GmbH (B1)'),
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
    translationNote: PH('Übersetzungen der Rechtstexte (EN/HR/ES) anwaltlich prüfen lassen – maßgeblich ist die deutsche Fassung'),
  },
} as const;

export type Site = typeof site;
export type PriceKey = keyof typeof site.prices.items;

/** Anliegen im Kontaktformular – zugleich die KPI-Zählung (Evaluation §5.4). Werte bleiben in allen Sprachen gleich. */
export const anliegenValues = ['familie', 'fachkraft', 'institution', 'fortbildung', 'sprache', 'sonstiges'] as const;
export type Anliegen = (typeof anliegenValues)[number];
