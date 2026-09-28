/**
 * Strukturierte Daten (JSON-LD) je Seite und Sprache.
 * Nicht bestätigte Angaben (Platzhalter) werden bewusst weggelassen.
 */
import { site, confirmed, isPlaceholder, type PriceKey } from '../content/site';
import { locales, localeMeta, pathFor, type Locale } from '../i18n/routes';
import { plain } from './rich';

const clean = <T>(o: T): T => JSON.parse(JSON.stringify(o)); // entfernt undefined-Felder

const orgDescription: Record<Locale, string> = {
  de: 'Verhaltensanalytische Beratung nach dem Ansatz von Practical Functional Assessment (PFA) und Skill-Based Treatment (SBT): Programme für Familien autistischer Kinder, Supervision für Fachkräfte, Beratung und Fortbildung für Kitas, Schulen und Organisationen – online und vor Ort, in vier Sprachen.',
  en: 'Behavior analysis consultancy following the Practical Functional Assessment (PFA) and Skill-Based Treatment (SBT) approach: programs for families of autistic children, supervision for professionals, consultation and training for schools and organizations – online and in person, in four languages.',
  hr: 'Savjetovanje i analiza ponašanja prema pristupu Practical Functional Assessment (PFA) i Skill-Based Treatment (SBT): programi za obitelji djece iz spektra autizma, supervizija za stručnjake – online i uživo, na četiri jezika.',
  es: 'Asesoría en análisis de conducta según el enfoque Practical Functional Assessment (PFA) y Skill-Based Treatment (SBT): programas para familias de niños con autismo (TEA), online y presencial, en cuatro idiomas.',
};

const baseOf = (siteUrl: URL) => siteUrl.href.replace(/\/$/, '');

export function siteGraph(siteUrl: URL, locale: Locale) {
  const base = baseOf(siteUrl);
  const orgId = `${base}/#organization`;
  const personId = `${base}/#person`;
  const credentials = site.person.credentials.map((c) => c.text[locale]).filter((t) => !isPlaceholder(t));
  const street = confirmed(site.legal.street);
  const postalCity = confirmed(site.legal.postalCity);
  const about = pathFor('about', locale) ?? pathFor('about', 'de');

  const website = {
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    name: site.brand.name,
    url: `${base}/`,
    inLanguage: locales.map((l) => localeMeta[l].bcp47),
    publisher: { '@id': orgId },
  };

  const org = {
    '@type': 'ProfessionalService',
    '@id': orgId,
    name: site.brand.name,
    description: orgDescription[locale],
    url: `${base}${pathFor('home', locale)}`,
    email: confirmed(site.contact.email),
    telephone: confirmed(site.contact.phone),
    areaServed: confirmed(site.offer.areaServedLd),
    availableLanguage: site.person.languageCodes.length ? site.person.languageCodes : undefined,
    address:
      street && postalCity
        ? { '@type': 'PostalAddress', streetAddress: street, addressLocality: postalCity, addressCountry: 'DE' }
        : undefined,
    founder: { '@id': personId },
    knowsAbout: [
      'Applied Behavior Analysis',
      'Practical Functional Assessment',
      'Skill-Based Treatment',
      'Autism',
      'Parent coaching',
      'Supervision',
      'Multilingual families',
    ],
  };

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: site.person.name,
    jobTitle: confirmed(site.person.jobTitle),
    worksFor: { '@id': orgId },
    url: about ? `${base}${about}` : undefined,
    knowsLanguage: site.person.languageCodes.length ? site.person.languageCodes : undefined,
    sameAs: confirmed(site.person.linkedin) ? [site.person.linkedin] : undefined,
    hasCredential: credentials.length
      ? credentials.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c }))
      : undefined,
  };

  return clean([website, org, person]);
}

export function webPageLd(siteUrl: URL, locale: Locale, url: string, title: string, description: string, type = 'WebPage') {
  const base = baseOf(siteUrl);
  return clean({
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: plain(title),
    description: plain(description),
    inLanguage: localeMeta[locale].bcp47,
    isPartOf: { '@id': `${base}/#website` },
    about: { '@id': `${base}/#organization` },
  });
}

export function breadcrumbLd(siteUrl: URL, items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: plain(it.name),
      item: new URL(it.href, siteUrl).href,
    })),
  };
}

export function serviceLd(
  siteUrl: URL,
  locale: Locale,
  url: string,
  s: { name: string; description: string; audience: string; price?: PriceKey },
) {
  const base = baseOf(siteUrl);
  const p = s.price ? site.prices.items[s.price] : undefined;
  return clean({
    '@type': 'Service',
    name: plain(s.name),
    description: plain(s.description),
    url,
    inLanguage: localeMeta[locale].bcp47,
    provider: { '@id': `${base}/#organization` },
    audience: { '@type': 'Audience', audienceType: plain(s.audience) },
    areaServed: confirmed(site.offer.areaServedLd),
    availableLanguage: site.person.languageCodes,
    // Offer nur mit bestätigten Preisen (Research §5.1: priceSpecification.minPrice).
    offers:
      p && site.prices.confirmed
        ? {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            priceSpecification: { '@type': 'PriceSpecification', minPrice: p.from, priceCurrency: 'EUR' },
          }
        : undefined,
  });
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: plain(f.q),
      acceptedAnswer: { '@type': 'Answer', text: plain(f.a) },
    })),
  };
}
