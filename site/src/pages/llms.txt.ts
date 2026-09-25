import type { APIRoute } from 'astro';
import { site, confirmed, isPlaceholder } from '../content/site';
import { faqs } from '../content/faq';
import { leistungen } from '../lib/nav';

/**
 * llms.txt (https://llmstxt.org): kompakte, zitierfähige Übersicht für KI-Assistenten.
 * Enthält nur bestätigte Fakten – Platzhalter werden ausgelassen.
 */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const u = (p: string) => new URL(p, siteUrl).href;
  const facts = [
    ['Einsatzgebiet', site.offer.serviceArea],
    ['Arbeitssprachen', site.person.languages],
    ['Berufsbezeichnung', site.person.jobTitle],
    ['Erfahrung', site.proof.years],
  ].filter(([, v]) => !isPlaceholder(v));
  const credentials = site.person.credentials.filter((c) => !isPlaceholder(c));
  const faqLinks = faqs.map((f) => `- [${f.q}](${u(`/faq/#${f.id}`)})`);

  const lines = [
    `# ${site.brand.name}`,
    '',
    `> ${site.person.name} bietet verhaltensanalytische Beratung auf Grundlage der Angewandten Verhaltensanalyse (ABA) für Familien autistischer und neurodivergenter Kinder, Supervision und Fallberatung für Fachkräfte, Fachberatung für Jugendämter und Träger sowie Fortbildungen und Vorträge. Keine Diagnostik, keine Psychotherapie, keine Notfallversorgung.`,
    '',
    'Haltung: Ziele werden mit Familie und Kind vereinbart; Schwerpunkt auf Kommunikation, Selbstbestimmung, Teilhabe und Lebensqualität; keine Heil- oder Erfolgsversprechen.',
    '',
    ...(facts.length || credentials.length
      ? ['## Fakten', ...facts.map(([k, v]) => `- ${k}: ${v}`), ...credentials.map((c) => `- Qualifikation: ${c}`), '']
      : []),
    '## Leistungen',
    ...leistungen.map((l) => `- [${l.long}](${u(l.href)})`),
    `- [Fortbildung & Supervision](${u('/fortbildung-supervision/')}): Inhouse-Fortbildungen, Teamtage, Teamsupervision, Vorträge`,
    '',
    '## Über',
    `- [Über ${site.person.name}](${u('/ueber-marija/')}): Qualifikation, Erfahrung, Haltung`,
    '',
    '## Häufige Fragen',
    ...faqLinks,
    '',
    '## Kontakt und Rechtliches',
    `- [Kontakt](${u('/kontakt/')})`,
    ...(confirmed(site.contact.email) ? [`- E-Mail: ${site.contact.email}`] : []),
    `- [Impressum](${u('/impressum/')})`,
    `- [Datenschutz](${u('/datenschutz/')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
