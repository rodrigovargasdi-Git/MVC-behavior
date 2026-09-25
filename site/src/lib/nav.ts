export const leistungen = [
  { href: '/leistungen/familien/', label: 'Familien', long: 'Für Familien' },
  { href: '/leistungen/fachkraefte/', label: 'Fachkräfte', long: 'Für Fachkräfte' },
  { href: '/leistungen/institutionen-jugendaemter/', label: 'Institutionen & Jugendämter', long: 'Für Institutionen & Jugendämter' },
] as const;

export const mainNav = [
  { href: '/leistungen/', label: 'Leistungen', children: leistungen },
  { href: '/fortbildung-supervision/', label: 'Fortbildung & Supervision' },
  { href: '/ueber-marija/', label: 'Über Marija' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/kontakt/', label: 'Kontakt' },
] as const;

export const legalNav = [
  { href: '/impressum/', label: 'Impressum' },
  { href: '/datenschutz/', label: 'Datenschutz' },
] as const;

/** Kontakt-Links mit vorausgewähltem Anliegen (eine CTA-Bezeichnung je Zielgruppe, m9). */
export const cta = {
  familie: { href: '/kontakt/?anliegen=familie', label: 'Erstgespräch anfragen' },
  fachkraft: { href: '/kontakt/?anliegen=fachkraft', label: 'Supervision anfragen' },
  institution: { href: '/kontakt/?anliegen=institution', label: 'Fachgespräch vereinbaren' },
  fortbildung: { href: '/kontakt/?anliegen=fortbildung', label: 'Verfügbarkeit anfragen' },
} as const;
