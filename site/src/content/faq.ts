/**
 * FAQ-Texte. Unbestätigte Angaben kommen ausschließlich aus site.ts (Platzhalter).
 * Antworten sind „answer-first“ formuliert (AEO). Sprachregeln laut Evaluation §3.4 Nr. 4:
 * keine Heilversprechen, keine Erfolgsquoten, kein „wissenschaftlich bewiesen“.
 */
import { site, isPlaceholder } from './site';

export type FaqTag = 'familie' | 'fachkraft' | 'institution' | 'start';
export interface Faq {
  id: string;
  q: string;
  a: string[];
  group: 'ABA und Haltung' | 'Ablauf, Kosten und Termine' | 'Daten und Vertraulichkeit' | 'Für Fachkräfte und Institutionen';
  tags: FaqTag[];
  link?: { href: string; label: string };
}

const s = site;

export const faqs: Faq[] = [
  {
    id: 'was-ist-aba',
    group: 'ABA und Haltung',
    tags: ['familie', 'fachkraft'],
    q: 'Was ist Angewandte Verhaltensanalyse (ABA)?',
    a: [
      'Angewandte Verhaltensanalyse (englisch Applied Behavior Analysis, ABA) ist ein Fachgebiet, das untersucht, wie Verhalten und Umgebung zusammenhängen: Was passiert vor einem Verhalten, was danach, und welche Funktion hat es für die Person?',
      'In meiner Arbeit nutze ich diesen Blick, um gemeinsam mit Ihnen zu verstehen, was ein Verhalten für Ihr Kind bedeutet, und um den Alltag so zu gestalten, dass Kommunikation, Selbstständigkeit und Teilhabe leichter werden.',
    ],
  },
  {
    id: 'ist-aba-umstritten',
    group: 'ABA und Haltung',
    tags: ['familie', 'fachkraft', 'institution', 'start'],
    q: 'Ist ABA nicht umstritten?',
    a: [
      'Ja, und diese Kritik nehme ich ernst. Autistische Menschen und Teile der Fachwelt kritisieren, dass ABA lange auf Anpassung und unauffälliges Verhalten zielte, teils mit Druck oder aversiven Methoden, und dass Kinder dabei lernten, sich zu verstellen.',
      'Meine Arbeit richtet sich an anderen Zielen aus: Kommunikation, Selbstbestimmung, Teilhabe und Lebensqualität. Ziele vereinbaren wir gemeinsam, Ihr Kind wird so weit wie möglich einbezogen, und zeigt es Überforderung, pausieren wir. Strafende Verfahren setze ich nicht ein, und Stimming muss nicht „weg“.',
      `Fragen Sie mich im Erstgespräch gern ganz konkret, wie ich arbeite. ${s.haltungNote}`,
    ],
    link: { href: '/ueber-marija/#haltung', label: 'Meine Haltung im Detail' },
  },
  {
    id: 'diagnose-therapie',
    group: 'ABA und Haltung',
    tags: ['familie', 'start'],
    q: 'Stellen Sie Diagnosen oder bieten Sie Therapie an?',
    a: [
      'Nein. Ich biete pädagogische, verhaltensanalytische Beratung, Begleitung und Supervision an. Das ersetzt keine ärztliche oder psychologische Diagnostik und keine Psychotherapie.',
      'Gern helfe ich, vorhandene Berichte einzuordnen, und stimme mich mit behandelnden Stellen ab, wenn Sie das möchten.',
    ],
  },
  {
    id: 'welche-kinder',
    group: 'ABA und Haltung',
    tags: ['familie'],
    q: 'Mit welchen Kindern und Familien arbeiten Sie?',
    a: [
      'Ich begleite Familien autistischer Kinder und anderer neurodivergenter Kinder, deren Verhalten den Alltag gerade schwer macht, und die Menschen, die diese Kinder in Kita, Schule und Therapie begleiten.',
      `Altersgruppen: ${s.offer.ageRange}. Schwerpunkte: ${s.offer.groups}.`,
    ],
  },
  {
    id: 'erstgespraech',
    group: 'Ablauf, Kosten und Termine',
    tags: ['familie', 'start'],
    q: 'Wie läuft ein Erstgespräch ab?',
    a: [
      'Sie schildern kurz, was gerade schwierig ist und was sich verändern soll. Ich stelle Fragen, ordne ein und sage offen, ob mein Angebot passt. Erst danach entscheiden wir gemeinsam über Umfang, Beteiligte und nächste Schritte.',
      'Details zur Gesundheit oder Diagnose Ihres Kindes besprechen wir erst im Gespräch, nicht vorab über das Kontaktformular.',
    ],
  },
  {
    id: 'kosten',
    group: 'Ablauf, Kosten und Termine',
    tags: ['familie'],
    q: 'Was kostet die Beratung?',
    a: [
      `Das Erstgespräch für Familien kostet ${s.prices.familyInitial} (${s.prices.familyInitialFormat}). Alle weiteren Leistungen erhalten Sie nach dem Erstgespräch als schriftliches Angebot mit Umfang und Gesamtpreis.`,
      s.prices.vatNote,
    ],
  },
  {
    id: 'jugendamt-kosten',
    group: 'Ablauf, Kosten und Termine',
    tags: ['familie', 'institution'],
    q: 'Übernimmt das Jugendamt die Kosten?',
    a: [
      'Eine Finanzierung über das Jugendamt, zum Beispiel als Eingliederungshilfe nach § 35a SGB VIII, ist im Einzelfall möglich. Die Entscheidung trifft das Jugendamt. Ich unterstütze Sie gern bei den Unterlagen, kann eine Kostenübernahme aber nicht zusagen.',
      s.checks.jugendamtFunding,
    ],
  },
  {
    id: 'vor-ort-online',
    group: 'Ablauf, Kosten und Termine',
    tags: ['familie', 'fachkraft', 'institution'],
    q: 'Arbeiten Sie vor Ort oder online?',
    a: [
      `Einsatzgebiet: ${s.offer.serviceArea}. Hausbesuche und Termine in Kita oder Schule: ${s.offer.homeVisits}.`,
      'Reisezeit und Fahrtkosten kläre ich vorab transparent mit Ihnen.',
    ],
  },
  {
    id: 'termine',
    group: 'Ablauf, Kosten und Termine',
    tags: ['familie'],
    q: 'Wie schnell bekomme ich einen Termin?',
    a: [
      `Auf Anfragen antworte ich ${s.contact.responseTime}. Wann ein Erstgespräch möglich ist, hängt von meinen freien Kapazitäten ab; das sage ich Ihnen in meiner Antwort offen.`,
    ],
  },
  {
    id: 'daten',
    group: 'Daten und Vertraulichkeit',
    tags: ['familie', 'institution', 'start'],
    q: 'Wie gehen Sie mit den Daten meines Kindes um?',
    a: [
      'Vertraulich und sparsam. Über das Kontaktformular frage ich bewusst keine Diagnosen oder Gesundheitsangaben ab; solche Details besprechen wir erst im Gespräch.',
      'Wie wir Berichte und Unterlagen austauschen und wie lange sie aufbewahrt werden, halten wir vor Beginn der Zusammenarbeit schriftlich fest. Diese Website setzt keine Cookies und kein Tracking ein.',
    ],
    link: { href: '/datenschutz/', label: 'Zur Datenschutzerklärung' },
  },
  {
    id: 'supervisionsstunden',
    group: 'Für Fachkräfte und Institutionen',
    tags: ['fachkraft'],
    q: 'Wird die Supervision für eine Zertifizierung angerechnet?',
    a: [
      `Ob und in welchem Umfang Supervisionsstunden angerechnet werden können, kläre ich vor Beginn mit Ihnen. ${s.offer.supervisionHours}`,
    ],
  },
  {
    id: 'beauftragung-institution',
    group: 'Für Fachkräfte und Institutionen',
    tags: ['institution'],
    q: 'Wie läuft eine Beauftragung durch Jugendamt oder Träger ab?',
    a: [
      'Jeder Auftrag wird vorab schriftlich geklärt: Ziel, Rollen, Umfang, Datenschutz und Berichtswesen. Die Hilfeplanung bleibt beim Jugendamt; ich bringe meine fachliche Einschätzung ein und wirke an Hilfeplan- und Fallgesprächen mit.',
      `Abrechnung: ${s.prices.jugendamtRates}.`,
    ],
  },
];

export const faqGroups = [...new Set(faqs.map((f) => f.group))];
export const faqsFor = (tag: FaqTag) => faqs.filter((f) => f.tags.includes(tag));

/** Für FAQPage-JSON-LD: nur vollständig bestätigte Antworten. */
export const confirmedFaqs = () => faqs.filter((f) => !f.a.some((p) => isPlaceholder(p) && p.trim() !== ''));
