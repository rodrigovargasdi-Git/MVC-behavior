/**
 * DE – Seiteninhalte (Start, Fachkräfte, Institutionen, Jugendämter, Über mich, Haltung, Preise, FAQ).
 * Familien-Seiten: ./pages-families.ts. Briefs: docs/2026-09-28-competitor-keyword-research.md §6.
 */
import type { PageContent } from '../types';
import type { PageKey } from '../../i18n/routes';
import { site } from '../site';
import { approach } from './approach';
import { familyPages } from './pages-families';
import { contact } from './contact';

const s = site;
const cred = (id: string) => {
  const c = s.person.credentials.find((x) => x.id === id);
  return c ? `${c.text.de}${c.verify ? ` · ${c.verify}` : ''}${c.note ? ` – ${c.note.de}` : ''}` : '';
};

export const pages: Partial<Record<PageKey, PageContent>> = {
  home: {
    // Stadt erst nach Bestätigung (E1) in Titel/Description aufnehmen, z. B. „… – Berlin, online, 4 Sprachen“.
    title: 'Verhaltensanalytische Beratung für Familien',
    description:
      'Verhaltensanalytische Beratung für Familien autistischer Kinder nach PFA & SBT: feste Programme mit schriftlichem Plan – vor Ort, online in Europa und in vier Sprachen.',
    crumb: 'Start',
    sections: [
      {
        type: 'hero',
        variant: 'home',
        photo: 'studio',
        eyebrow: 'Angewandte Verhaltensanalyse · PFA & SBT · international',
        title: 'Verhaltensanalytische Beratung für Familien autistischer Kinder – *vor Ort, online und in vier Sprachen*',
        lead: 'Ich bin Marija Vargas. Mit meiner Beratungsfirma begleite ich Familien, Fachkräfte und Schulen: persönlich, erfahren und mit einem schriftlichen Plan statt offener Therapiestunden. Respektvoll, zustimmungsbasiert und nach dem Ansatz von PFA und SBT.',
        primary: 'call',
        secondary: { label: 'Programme & Honorar', href: '@pricing' },
      },
      {
        type: 'facts',
        items: [
          { label: 'Erfahrung', value: s.experience.de },
          { label: 'Ansatz', value: 'Practical Functional Assessment (PFA) & Skill-Based Treatment (SBT)' },
          { label: 'Sprachen', value: 'Kroatisch · Deutsch · Englisch · Spanisch' },
          { label: 'Start', value: s.offer.startClaim.de },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Für Familien',
        title: 'Womit ich Familien *helfe*',
        intro: 'Eltern suchen selten nach Methoden, sondern nach Antworten auf ganz konkrete Fragen. Hier sind die häufigsten.',
        cols: 4,
        cards: [
          { label: 'Kommunikation', title: 'Sich mitteilen', text: 'Ihr Kind kann sich schwer mitteilen oder findet wenig Kontakt zu anderen Kindern.', link: { label: 'Mehr erfahren', href: '@families#kommunikation' }, tone: 'sea' },
          { label: 'Sauber werden', title: 'Ohne Druck zur Toilette', text: 'Ihr Kind ist 4, 5 oder 6 und trägt noch Windeln.', link: { label: 'Mehr erfahren', href: '@toilet' }, tone: 'sand' },
          { label: 'Verhalten', title: 'Ruhigere Tage', text: 'Wutausbrüche, Meltdowns, Schlagen oder Beißen verstehen und verändern.', link: { label: 'Mehr erfahren', href: '@behavior' }, tone: 'lavender' },
          { label: 'Diagnose', title: 'Erste Schritte', text: 'Die Diagnose ist da – was ist jetzt wichtig, was kann warten?', link: { label: 'Mehr erfahren', href: '@diagnosis' }, tone: 'sand' },
        ],
        after: [
          { label: 'Mehrsprachige Familien', href: '@multilingual' },
          { label: 'Internationale Familien in Deutschland', href: '@expat' },
          { label: 'Alle Angebote für Familien', href: '@families' },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'Zusammenarbeit',
        title: 'So läuft die *Zusammenarbeit*',
        intro: 'Feste Programme, schriftliche Ergebnisse und Preise, die Sie vorher kennen.',
        steps: [
          { title: 'Kennenlernen', text: 'Kostenlos, 15 Minuten per Video – auf Deutsch, Englisch, Kroatisch oder Spanisch.' },
          { title: 'Analyse & Plan', text: 'Ich verstehe mit Ihnen, was hinter dem Verhalten steckt. Sie erhalten einen schriftlichen Plan.' },
          { title: 'Coaching', text: 'Wir setzen den Plan im Alltag um – online, zu Hause oder als Home Intensive vor Ort.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'Mein Ansatz',
        title: 'Verhaltensanalyse, *mitfühlend und zustimmungsbasiert*',
        body: [approach.teaser],
        list: approach.principles,
        links: [
          { label: 'Wie ich arbeite', href: '@approach' },
        ],
      },
      {
        type: 'photo',
        bg: 'paper',
        photo: 'officeNavy',
        eyebrow: 'Wer ich bin',
        title: 'Zwei Systeme, *vier Sprachen*',
        body: [
          `Ich bin Marija Vargas, Verhaltensanalytikerin mit Erfahrung aus den USA und Deutschland (${s.experience.de}). Kroatisch ist meine Muttersprache; ich berate außerdem auf Deutsch, Englisch und Spanisch.`,
          'Ich bin International Behavior Analyst (IBA), habe einen MA in Child Studies (Linköping University, Schweden) und einen BA in Neuroscience (Earlham College, USA) und bilde mich seit 2021 in PFA und SBT bei FTF Behavioral Consulting fort.',
        ],
        links: [
          { label: 'Über Marija', href: '@about' },
          { label: 'Mehrsprachige Familien', href: '@multilingual' },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Für Fachkräfte und Organisationen',
        title: 'Für Fachkräfte, *Kitas und Schulen*',
        cols: 2,
        cards: [
          { label: 'Fachkräfte', title: 'Supervision & Fallberatung', text: 'Supervision, Teamfortbildungen, offene Workshops und Vorträge – auf Deutsch, Englisch oder Kroatisch.', link: { label: 'Für Fachkräfte', href: '@professionals' }, tone: 'sea' },
          { label: 'Kitas, Schulen & Träger', title: 'Beratung, Fortbildung & Vorträge', text: 'Fallberatung im Team, Inhouse-Fortbildungen und Workshops – auch für internationale Schulen.', link: { label: 'Für Kitas und Schulen', href: '@organizations' }, tone: 'lavender' },
        ],
      },
      { type: 'faq', bg: 'sea', eyebrow: 'Häufige Fragen', title: 'Fragen sind *willkommen*', ids: ['welche-kinder', 'kosten', 'online-sprachen', 'diagnose-therapie'] },
      {
        type: 'cta',
        title: 'Lassen Sie uns *sortieren.*',
        text: 'Im kostenlosen Kennenlernen klären wir in 15 Minuten, ob und wie ich helfen kann – in der Sprache, in der Sie sich am wohlsten fühlen.',
        primary: 'call',
        secondary: { label: 'Programme & Honorar', href: '@pricing' },
      },
    ],
  },

  ...familyPages,

  professionals: {
    title: 'Supervision & Fallberatung für Fachkräfte',
    description:
      'Supervision, Fallberatung, Teamfortbildungen und offene Workshops in Verhaltensanalyse – ethisch, praxisnah, auf Deutsch, Englisch oder Kroatisch.',
    crumb: 'Fachkräfte',
    service: { name: 'Supervision und Fallberatung für Fachkräfte', description: 'Einzel- und Gruppensupervision, Fallberatung und Mentoring in Angewandter Verhaltensanalyse.', audience: 'Fachkräfte und Teams', price: 'supIndividual' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Für Fachkräfte',
        title: 'Supervision und Fallberatung in *Verhaltensanalyse*',
        lead: 'Für Fachkräfte und Teams, die fachlich wachsen und dabei ihre Haltung bewahren wollen: praxisnah, ethisch und mit Blick auf Assent und Lebensqualität – auf Deutsch, Englisch oder Kroatisch.',
        photo: 'corridorNavy',
        primary: 'supervision',
      },
      {
        type: 'list',
        eyebrow: 'Für wen',
        title: 'Wenn Fälle *komplex* werden',
        items: [
          'Fachkräfte der Verhaltensanalyse in Ausbildung und Praxis',
          'Heilpädagogische und pädagogische Fachkräfte in Frühförderung, Kita und Schule',
          'Schulbegleitungen und Integrationshilfen',
          'Teams in der Kinder- und Jugendhilfe und in der Eingliederungshilfe, Träger und Jugendämter (Fallberatung)',
        ],
        after: s.checks.jugendamtRelease,
      },
      { type: 'programs', bg: 'paper', eyebrow: 'Formate', title: 'Supervision, *die weiterdenkt*', programs: ['supIndividual', 'supGroup', 'caseConsult', 'training', 'talks'] },
      {
        type: 'answers',
        items: [
          {
            q: 'Wofür ist die Supervision gedacht?',
            a: [
              'Für fachliche Begleitung, Fallreflexion und Ethik in Ihrer täglichen Arbeit – einzeln oder in einer festen Gruppe. Anrechenbare Supervisionsstunden für eine BACB-Zertifizierung biete ich nicht an.',
            ],
          },
          {
            q: 'Welche Rolle spielen Ethik und Haltung in der Supervision?',
            a: [
              'Eine große. Gute Supervision ist mehr als Technik: Wir sprechen über Assent, Würde und die Frage, wem ein Ziel nützt. Auf Wunsch gebe ich Ihnen einen Praxiseinblick in Practical Functional Assessment (PFA) und Skill-Based Treatment (SBT).',
              `Meine Qualifikation in PFA und SBT: ${approach.level}`,
            ],
          },
        ],
      },
      { type: 'faq', eyebrow: 'Fragen', title: 'Gut zu *wissen*', ids: ['supervisionsstunden', 'pfa-sbt', 'was-ist-verhaltensanalyse'] },
      { type: 'cta', title: 'Gemeinsam *weiterdenken.*', text: 'Schreiben Sie mir kurz, in welcher Rolle Sie arbeiten und was Sie suchen – ohne personenbezogene Falldaten.', primary: 'supervision' },
    ],
  },

  organizations: {
    title: 'Beratung & Fortbildung für Kitas und Schulen',
    description:
      'Fallberatung, Inhouse-Fortbildungen und Vorträge zu herausforderndem Verhalten, Autismus und Mehrsprachigkeit – für Kitas, Schulen, internationale Schulen und Träger.',
    crumb: 'Kitas, Schulen & Träger',
    service: { name: 'Beratung und Fortbildung für Kitas, Schulen und Träger', description: 'Fallberatung im Team, Inhouse-Fortbildungen, Vorträge und Workshops.', audience: 'Kitas, Schulen, internationale Schulen und Träger', price: 'trainingHalf' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Kitas, Schulen & Organisationen',
        title: 'Beratung und Fortbildung für *Kitas, Schulen und Träger*',
        lead: 'Wenn ein Kind die Gruppe herausfordert, braucht das Team keine Schuldfrage, sondern ein gemeinsames Bild und klare nächste Schritte. Ich berate und schule Teams – auch an internationalen Schulen, auf Deutsch, Englisch oder Kroatisch.',
        photo: 'officeNavy',
        primary: 'org',
      },
      {
        type: 'cards',
        eyebrow: 'Leistungen',
        title: 'Komplexe Situationen. *Klare nächste Schritte.*',
        cols: 2,
        cards: [
          { title: 'Fallberatung im Team', text: 'Wir schauen gemeinsam auf eine konkrete Situation: Was passiert, was braucht das Kind, was braucht das Team? Personenbezogene Daten brauche ich dafür vorab nicht.', tone: 'sand' },
          { title: 'Inhouse-Fortbildungen', text: 'Praxisnahe Fortbildungen zu herausforderndem Verhalten, Autismus und Mehrsprachigkeit – mit Beispielen aus Ihrem Alltag.', tone: 'sea' },
          { title: 'Für internationale Schulen', text: 'Beratung zu Verhaltensunterstützung, Förderplänen und Zusammenarbeit mit Familien – auf Englisch, mit Erfahrung aus dem US-System.', tone: 'lavender' },
          { title: 'Vorträge & Workshops', text: 'Keynotes und Workshops für Fachtage, Konferenzen und Elternabende – auf Deutsch, Englisch oder Kroatisch.', tone: 'sand' },
        ],
      },
      {
        type: 'list',
        bg: 'paper',
        eyebrow: 'Themen',
        title: 'Fortbildungsthemen *für den Start*',
        items: [
          'Verhalten verstehen: Was will ein Kind mitteilen?',
          'Herausforderndes Verhalten in der Kita: sicher reagieren, klug vorbeugen',
          'Mehrsprachige Kinder im Spektrum: Sprache und Verhalten zusammen denken',
          'Einführung und Praxiseinblick: PFA und SBT – mitfühlend und zustimmungsbasiert arbeiten',
        ],
        after: s.offer.trainingTopicsNote,
      },
      { type: 'programs', eyebrow: 'Formate', title: 'Formate und *Konditionen*', programs: ['training', 'talks'] },
      {
        type: 'defs',
        bg: 'paper',
        eyebrow: 'Ablauf',
        title: 'Klar vereinbart, *bevor es losgeht*',
        items: [
          { dt: 'Auftragsklärung', dd: 'Ziel, Gruppe, Umfang und Datenschutz halten wir vorab schriftlich fest.' },
          { dt: 'Sprachen', dd: 'Deutsch, Englisch, Kroatisch' },
          { dt: 'Ort', dd: 'Vor Ort bei Ihnen oder online. Reisekosten stehen vorab im Angebot.' },
          { dt: 'Referenzen', dd: s.testimonialsNote },
        ],
      },
      { type: 'faq', eyebrow: 'Fragen', title: 'Gut zu *wissen*', ids: ['fortbildung-ablauf', 'pfa-sbt', 'daten'] },
      { type: 'cta', title: 'Ein gemeinsames Bild für *gute Hilfe.*', text: 'Beschreiben Sie kurz Ihre Einrichtung und Ihr Anliegen, ohne personenbezogene Falldaten.', primary: 'org', secondary: { label: 'Vortrag anfragen', href: '@contact?anliegen=fortbildung' } },
    ],
  },

  jugendamt: {
    title: 'Fachberatung Autismus für Jugendämter',
    description: 'Autismusspezifische Fachberatung für Jugendämter und Träger: Einzelfallberatung, Mitwirkung an Hilfeplangesprächen, schriftliche Stellungnahmen.',
    crumb: 'Jugendämter & Träger',
    sections: [
      {
        type: 'note',
        tone: 'internal',
        title: 'Interner Hinweis – Seite nicht veröffentlicht',
        body: [
          'Diese Seite ist nicht verlinkt, nicht in der Navigation, nicht in der Sitemap und auf „noindex“ gesetzt. Sie wird erst nach der Prüfung des Arbeitsvertrags und der Nebentätigkeit freigegeben (Research §8, Frage Q1).',
          s.checks.jugendamtFunding,
        ],
      },
      {
        type: 'hero',
        eyebrow: 'Jugendämter & Träger',
        title: 'Autismusspezifische Fachberatung für *Jugendämter und Träger*',
        lead: 'Wenn mehrere Systeme beteiligt sind, wird Hilfe schnell unübersichtlich. Ich trage zu einer fachlich belastbaren, nachvollziehbaren Grundlage für Ihre Entscheidungen bei – mit dem Kind und seiner Lebenswelt im Mittelpunkt.',
        primary: 'meeting',
      },
      {
        type: 'cards',
        eyebrow: 'Leistungen',
        title: 'Fachlich fundiert, *klar dokumentiert*',
        cols: 2,
        cards: [
          { title: 'Fachberatung im Einzelfall', text: 'Verhaltensanalytische Einschätzung einer konkreten Situation – nachvollziehbar dokumentiert und in verständlicher Sprache.', tone: 'lavender' },
          { title: 'Mitwirkung an Hilfeplangesprächen', text: 'Fachliche Beratung zur Hilfeplanung, nach Absprache mit Familie und Jugendamt. Die Entscheidung bleibt beim Jugendamt.', tone: 'sand' },
          { title: 'Schriftliche Stellungnahmen', text: 'Für Jugendamt, Schule oder Ärzt:innen – sachlich, verständlich und datensparsam.', tone: 'sea' },
          { title: 'Konzept- und Qualitätsentwicklung', text: 'Für Träger, die autismusspezifische Förderung fachlich und ethisch weiterentwickeln möchten.', tone: 'lavender' },
        ],
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Wie wird die Förderung finanziert?',
            a: [
              'Autismusspezifische Förderung kann im Einzelfall zum Beispiel als Eingliederungshilfe nach § 35a SGB VIII oder als Hilfe zur Erziehung finanziert werden. Die Entscheidung trifft das Jugendamt; eine Kostenübernahme kann ich nicht zusagen.',
            ],
          },
        ],
      },
      {
        type: 'defs',
        bg: 'paper',
        eyebrow: 'Rahmen',
        title: 'Qualifikation, Datenschutz *und Berichtswesen*',
        items: [
          { dt: 'Qualifikation', dd: `${s.person.jobTitle} · [Qualifikationen](@about#qualifikation)` },
          { dt: 'Datenschutz', dd: 'Auftragsverarbeitung nach DSGVO, Datensparsamkeit, vereinbarte Löschfristen.' },
          { dt: 'Berichtswesen', dd: 'Verständliche schriftliche Berichte im vereinbarten Rhythmus.' },
          { dt: 'Abrechnung', dd: s.prices.jugendamtRates },
          { dt: 'Kurzprofil', dd: s.checks.jugendamtFunding },
        ],
      },
      { type: 'cta', title: 'Ein Fachgespräch *vereinbaren.*', text: 'Bitte ohne personenbezogene Falldaten. Details klären wir im Gespräch.', primary: 'meeting' },
    ],
  },

  about: {
    title: 'Über Marija Vargas: Qualifikation & Werdegang',
    description:
      'Marija Vargas: International Behavior Analyst (IBA), MA Child Studies, Fortbildung in PFA & SBT, vier Sprachen. Werdegang, Qualifikationen und Haltung.',
    crumb: 'Über mich',
    ogType: 'profile',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Über mich',
        title: 'Marija Vargas – Verhaltensanalytikerin mit Erfahrung aus *den USA und Deutschland*',
        lead: 'Ich habe meine Beratungsfirma gegründet, um Familien, Fachkräften und Schulen eine erfahrene, persönliche und mehrsprachige Begleitung zu bieten – mit festen Programmen und schriftlichen Plänen.',
        photo: 'berlin',
        primary: 'call',
      },
      {
        type: 'facts',
        items: [
          { label: 'Erfahrung', value: s.experience.de },
          { label: 'Qualifikation', value: 'International Behavior Analyst (IBA)' },
          { label: 'Sprachen', value: s.person.languages.de },
          { label: 'Arbeitsweise', value: s.offer.serviceArea.de },
        ],
      },
      {
        type: 'prose',
        id: 'werdegang',
        eyebrow: 'Werdegang',
        title: 'Zwei Systeme, *eine Haltung*',
        body: [
          s.personal.career.de,
          'Beide Systeme zu kennen, hilft mir täglich: Ich verbinde verhaltensanalytische Praxis, wie sie in den USA etabliert ist, mit dem deutschen Alltag aus Kita, Schule und Jugendhilfe – und erkläre das eine im anderen.',
        ],
      },
      {
        type: 'defs',
        id: 'qualifikation',
        bg: 'paper',
        eyebrow: 'Qualifikationen',
        title: 'Nachprüfbar, *mit Quelle*',
        intro: 'Jede Qualifikation mit ausstellender Stelle, Jahr und – wo möglich – Link zum öffentlichen Register.',
        items: [
          { dt: 'Verhaltensanalyse', dd: cred('iba') },
          { dt: 'PFA & SBT', dd: cred('pfa-sbt') },
          { dt: 'Master', dd: cred('ma') },
          { dt: 'Bachelor', dd: cred('ba') },
          { dt: 'Anerkennung', dd: cred('recognition') },
          { dt: 'Keine Approbation', dd: 'Ich bin keine Psychotherapeutin und biete keine Therapie im Sinne der Heilkunde an, sondern Beratung, Coaching und Supervision.' },
          { dt: 'Mitgliedschaften', dd: s.person.memberships[0] },
          { dt: 'Sprachen', dd: `${s.person.languages.de}. ${s.person.spanishScope}` },
        ],
      },
      {
        type: 'photo',
        id: 'persoenlich',
        photo: 'realSmile',
        photo2: 'realGarden',
        eyebrow: 'Persönlich',
        title: 'Mehr als *die Arbeit*',
        body: [
          'Kroatien, die USA, Deutschland: Ich weiß aus eigener Erfahrung, wie es ist, in einem neuen Land, einem neuen System und einer neuen Sprache anzukommen.',
          s.personal.path.de,
          s.personal.why.de,
          s.personal.motherhood.de,
        ],
      },
      { type: 'prose', bg: 'sea', eyebrow: 'Stimmen', title: 'Aus der *Zusammenarbeit*', body: [s.testimonialsNote] },
      { type: 'cta', title: 'Lernen wir uns *kennen.*', text: '15 Minuten, kostenlos, in Ihrer Sprache.', primary: 'call', secondary: { label: 'Wie ich arbeite', href: '@approach' } },
    ],
  },

  approach: {
    title: 'Wie ich arbeite: PFA & SBT',
    description:
      'Wie ich nach Practical Functional Assessment (PFA) und Skill-Based Treatment (SBT) arbeite: mitfühlend, traumasensibel, zustimmungsbasiert – meine Grundsätze und was ich nicht tue.',
    crumb: 'Wie ich arbeite',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Wie ich arbeite',
        title: 'Wie ich arbeite – *mitfühlend und zustimmungsbasiert*',
        lead: 'Verhaltensanalyse, wie ich sie verstehe, beginnt mit Sicherheit und Vertrauen. Hier steht offen, wie ich arbeite, woran Sie das erkennen und was ich nicht tue.',
        primary: 'call',
      },
      {
        type: 'prose',
        id: 'pfa-sbt',
        bg: 'paper',
        eyebrow: 'Mein Ansatz',
        title: 'Practical Functional Assessment *& Skill-Based Treatment*',
        body: [...approach.what, `Meine Qualifikation: ${approach.level}`],
        list: approach.principles,
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Was zeigt die Forschung – und was nicht?',
            a: [...approach.research, s.checks.sourcesCheck],
          },
        ],
      },
      { type: 'commitments', eyebrow: 'Meine Grundsätze', title: 'Woran Sie meine Arbeit *messen können*', link: { label: 'Kritik an meinem Fachgebiet – meine Antwort', href: '@faq#kritik' } },
      {
        type: 'list',
        bg: 'paper',
        eyebrow: 'Grenzen',
        title: 'Was ich *nicht* tue',
        items: [
          'Keine Diagnosen und keine Psychotherapie.',
          'Keine strafenden oder aversiven Verfahren, kein Festhalten, um eine Aufgabe zu erzwingen.',
          'Kein Training, das auf Gehorsam oder „Unauffälligkeit“ zielt. Harmloses Stimming und Blickkontakt sind keine Ziele.',
          'Keine Erfolgs- oder Heilversprechen.',
          'Keine Vorher-nachher-Geschichten über Kinder – auch nicht anonymisiert.',
        ],
        after: approach.disclaimer,
      },
      { type: 'note', tone: 'internal', body: [s.checks.sensitivityRead] },
      { type: 'faq', eyebrow: 'Fragen Sie mich', title: 'Offene *Fragen*', ids: ['was-ist-verhaltensanalyse', 'pfa-sbt', 'diagnose-therapie', 'iba'] },
      { type: 'cta', title: 'Fragen Sie mich *ganz konkret.*', text: 'Im kostenlosen Kennenlernen können Sie mich alles fragen – auch, was ich in einer bestimmten Situation nicht tun würde.', primary: 'call' },
    ],
  },

  pricing: {
    title: 'Programme & Honorar',
    description:
      'Programme für Familien, Fachkräfte und Organisationen: Verhaltensanalyse & Förderplan, Elterncoaching, Fallbegleitung, Supervision – Honorar auf Anfrage.',
    crumb: 'Programme',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Programme',
        title: 'Programme *und Honorar*',
        lead: `Feste Programme mit klarem Umfang statt offener Stundenkonten: Sie wissen vorher, was enthalten ist und wie lange es dauert. Das Honorar erhalten Sie nach dem kostenlosen 15-minütigen Kennenlerngespräch als schriftliches Angebot. ${s.offer.startClaim.de}`,
        primary: 'call',
      },
      {
        type: 'programs',
        id: 'programme-familien',
        eyebrow: 'Für Familien',
        title: 'Programme für *Familien*',
        intro: 'Vom kostenlosen Kennenlernen bis zum Home Intensive – geordnet vom Einstieg bis zum Flaggschiff.',
        programs: ['fit', 'clarity', 'assessment', 'coaching', 'intensive', 'caseLead'],
      },
      {
        type: 'programs',
        id: 'fokusprogramme',
        bg: 'paper',
        eyebrow: 'Fokusprogramme',
        title: 'Für ein *konkretes Thema*',
        programs: ['toilet', 'calmDays', 'firstSteps'],
      },
      { type: 'programs', eyebrow: 'Zusatzangebote', title: 'Orientierung *und Sprache*', programs: ['navigation', 'language'] },
      { type: 'programs', bg: 'paper', id: 'fachkraefte', eyebrow: 'Für Fachkräfte', title: 'Supervision *und Fallberatung*', programs: ['supIndividual', 'supGroup', 'caseConsult'] },
      { type: 'programs', id: 'organisationen', eyebrow: 'Für Organisationen', title: 'Fortbildung *und Vorträge*', programs: ['training', 'talks'] },
      {
        type: 'defs',
        bg: 'paper',
        eyebrow: 'Gut zu wissen',
        title: 'Rahmen *und Bedingungen*',
        items: [
          { dt: 'Kennenlernen', dd: `15 Minuten per Video, kostenlos. ${s.prices.freeCall}` },
          { dt: 'Reisekosten', dd: 'Für Hausbesuche und Termine in Kita oder Schule weise ich Reisekosten vorab im Angebot aus.' },
          { dt: 'Absagen', dd: s.prices.cancellation },
          { dt: 'Zahlung', dd: s.prices.payment },
          { dt: 'Spanisch', dd: s.person.spanishScope },
        ],
      },
      { type: 'faq', eyebrow: 'Fragen', title: 'Fragen zum *Honorar*', ids: ['kosten', 'jugendamt-kosten', 'ablauf'] },
      { type: 'cta', title: 'Unsicher, welches Programm *passt?*', text: 'Dafür ist das kostenlose Kennenlernen da: 15 Minuten, danach wissen Sie es.', primary: 'call' },
    ],
  },

  faq: {
    title: 'Häufige Fragen: Verhaltensanalyse, Ablauf, Honorar',
    description:
      'Antworten zu Verhaltensanalyse, PFA und SBT, Sauberwerden, herausforderndem Verhalten, Mehrsprachigkeit, Ablauf, Honorar, Jugendamt und Datenschutz.',
    crumb: 'Häufige Fragen',
    sections: [
      {
        type: 'hero',
        eyebrow: 'FAQ',
        title: 'Häufige *Fragen*',
        lead: 'Noch etwas unklar? Schreiben Sie mir gern – lieber eine Frage mehr als eine Hürde zu viel.',
      },
      { type: 'faq', title: 'Verhaltensanalyse, PFA/SBT *und Haltung*', group: 'Verhaltensanalyse, PFA/SBT und Haltung', more: false },
      { type: 'faq', bg: 'paper', title: 'Für *Familien*', group: 'Für Familien', more: false },
      { type: 'faq', title: 'Ablauf, Kosten *und Termine*', group: 'Ablauf, Kosten und Termine', more: false },
      { type: 'faq', bg: 'paper', title: 'Daten und *Vertraulichkeit*', group: 'Daten und Vertraulichkeit', more: false },
      { type: 'faq', title: 'Für Fachkräfte *und Organisationen*', group: 'Für Fachkräfte und Organisationen', more: false },
      { type: 'cta', title: 'Ihre Frage war *nicht dabei?*', text: 'Schreiben Sie mir. Ich antworte persönlich.', primary: 'question', secondary: { label: 'Kostenloses Kennenlernen', href: '@contact?anliegen=familie' } },
    ],
  },
  // Kontakt und Recht: Vorlagen in src/components/views/ – hier nur Titel, Beschreibung, Brotkrume.
  contact: { title: contact.title, description: contact.description, crumb: contact.crumb, sections: [] },
  thanks: { title: contact.thanks.title, description: contact.thanks.description, crumb: contact.thanks.crumb, sections: [] },
  imprint: { title: 'Impressum', description: `Impressum von ${site.brand.name}: Anbieterkennzeichnung nach § 5 DDG.`, crumb: 'Impressum', sections: [] },
  privacy: {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung: keine Cookies, kein Tracking, keine Drittanbieter. Informationen zu Hosting, Kontaktanfragen und Ihren Rechten.',
    crumb: 'Datenschutz',
    sections: [],
  },
};
