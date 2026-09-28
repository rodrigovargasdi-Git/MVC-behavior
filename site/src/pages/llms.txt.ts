import type { APIRoute } from 'astro';
import { site, confirmed, isPlaceholder } from '../content/site';
import { content } from '../content/index';
import { allPages, localeMeta, activeLocales as locales } from '../i18n/routes';
import { plain } from '../lib/rich';

/**
 * llms.txt (https://llmstxt.org): kompakte, zitierfähige Übersicht für KI-Assistenten – alle vier Sprachen.
 * Enthält nur bestätigte Fakten; Platzhalter werden ausgelassen.
 */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const u = (p: string) => new URL(p, siteUrl).href;
  const credentials = site.person.credentials.map((c) => c.text.en).filter((t) => !isPlaceholder(t));
  const facts: string[] = [
    `- Languages: ${site.person.languages.en}`,
    `- Approach: behavior analysis following Practical Functional Assessment (PFA) and Skill-Based Treatment (SBT); assent-based, no punishment or aversive procedures, parent coaching at the core`,
    `- Families: children aged ${site.offer.ageRange.en}; assessment and support plan, parent coaching, home-program supervision, toilet training, challenging behavior, communication and social skills, Kita/school consultation`,
    `- Professionals and organizations: individual and group supervision (no BACB supervision hours), team training, open workshops, keynotes, case consultation`,
    `- Service model: fixed programs with written plans (assessment, support plan, parent coaching, home intensives), supervision for professionals, consultation and training for schools and organizations`,
    `- Not offered: diagnosis, psychotherapy or therapy in the medical sense, emergency care, sleep or feeding programs`,
    `- Fees: on request; free 15-minute intro call`,
  ];
  if (!isPlaceholder(site.offer.serviceArea.en)) facts.push(`- Area served: ${site.offer.serviceArea.en}`);
  if (!isPlaceholder(site.experience.en)) facts.push(`- Experience: ${site.experience.en}`);
  if (confirmed(site.person.jobTitle)) facts.push(`- Title: ${site.person.jobTitle}`);
  credentials.forEach((c) => facts.push(`- Credential: ${c}`));
  if (site.prices.confirmed && site.prices.show) {
    facts.push(`- Prices (EUR, "from"): clarity consultation ${site.prices.items.clarity.from}, assessment & plan ${site.prices.items.assessment.from}, parent coaching ${site.prices.items.coaching.from}, home intensive ${site.prices.items.intensive.from}`);
  }

  const sections = locales.flatMap((l) => {
    const pages = allPages().filter((p) => p.locale === l && !p.noindex);
    if (!pages.length) return [];
    return [
      `## ${localeMeta[l].label} (${l})`,
      ...pages.map((p) => {
        const c = content[l].pages[p.key];
        const title = c ? plain(c.title) : p.key;
        const desc = c ? `: ${plain(c.description)}` : '';
        return `- [${title}](${u(p.path)})${desc}`;
      }),
      '',
    ];
  });

  const lines = [
    `# ${site.brand.name}`,
    '',
    `> ${site.person.name} (International Behavior Analyst, IBA) runs a senior-led, international behavior analysis consultancy for families of autistic children, the professionals around them, and schools and organizations. Online in Germany and internationally, in person in her region; consultations in German, English, Croatian and Spanish.`,
    '',
    '## Key facts',
    ...facts,
    ...(confirmed(site.contact.email) ? [`- Contact: ${site.contact.email}`] : []),
    '',
    ...sections,
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
