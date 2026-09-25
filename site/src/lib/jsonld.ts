import { site, confirmed, isPlaceholder } from '../content/site';

const clean = <T>(o: T): T => JSON.parse(JSON.stringify(o)); // entfernt undefined-Felder

/** Organisation + Person. Nicht bestätigte Angaben werden bewusst weggelassen. */
export function orgGraph(siteUrl: URL) {
  const base = siteUrl.href.replace(/\/$/, '');
  const orgId = `${base}/#organisation`;
  const personId = `${base}/ueber-marija/#person`;
  const credentials = site.person.credentials.filter((c) => !isPlaceholder(c));
  const street = confirmed(site.legal.street);
  const postalCity = confirmed(site.legal.postalCity);

  const org = {
    '@type': 'ProfessionalService',
    '@id': orgId,
    name: site.brand.name,
    description:
      'Verhaltensanalytische Beratung (Angewandte Verhaltensanalyse, ABA) für Familien autistischer und neurodivergenter Kinder, Supervision und Fortbildung für Fachkräfte sowie Fachberatung für Jugendämter und Träger.',
    url: `${base}/`,
    email: confirmed(site.contact.email),
    telephone: confirmed(site.contact.phone),
    areaServed: confirmed(site.offer.areaServedLd),
    availableLanguage: site.person.languageCodes.length ? site.person.languageCodes : undefined,
    address:
      street && postalCity
        ? { '@type': 'PostalAddress', streetAddress: street, addressLocality: postalCity, addressCountry: 'DE' }
        : undefined,
    founder: { '@id': personId },
    knowsAbout: ['Angewandte Verhaltensanalyse', 'Applied Behavior Analysis', 'Autismus', 'Supervision', 'Elternberatung'],
  };

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: site.person.name,
    jobTitle: confirmed(site.person.jobTitle),
    worksFor: { '@id': orgId },
    url: `${base}/ueber-marija/`,
    sameAs: confirmed(site.person.linkedin) ? [site.person.linkedin] : undefined,
    hasCredential: credentials.length
      ? credentials.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c }))
      : undefined,
  };

  return clean([org, person]);
}

export function breadcrumbLd(siteUrl: URL, items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.href, siteUrl).href,
    })),
  };
}

export function serviceLd(siteUrl: URL, name: string, description: string, audience: string, path: string) {
  const base = siteUrl.href.replace(/\/$/, '');
  return clean({
    '@type': 'Service',
    name,
    description,
    url: new URL(path, siteUrl).href,
    provider: { '@id': `${base}/#organisation` },
    audience: { '@type': 'Audience', audienceType: audience },
    areaServed: confirmed(site.offer.areaServedLd),
  });
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
