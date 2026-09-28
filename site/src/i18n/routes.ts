/**
 * ROUTEN-REGISTER (eine Quelle für alle Sprachen)
 * ================================================
 * Jede Seite hat einen Schlüssel (`key`) und je Sprache höchstens einen Pfad.
 * Daraus entstehen:
 *   - die Seiten selbst (src/pages/[...slug].astro baut jeden Eintrag mit `view`),
 *   - hreflang-Paare + x-default im <head> und in der Sitemap,
 *   - der Sprachumschalter (gleichwertige Seite, sonst Startseite der Sprache),
 *   - Brotkrumen (über `parent`).
 *
 * Regeln (Research §5.1): hreflang nur zwischen echten Entsprechungen, x-default → EN,
 * Canonical immer auf sich selbst, lokalisierte Slugs.
 */

export const locales = ['de', 'en', 'hr', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';
/** x-default zeigt auf die englische Fassung (Research §5.1), sonst auf die deutsche. */
export const xDefaultLocale: Locale = 'en';

import { site } from '../content/site';

/** Öffentlich sichtbare Sprachen (HR/ES erst nach Freigabe: site.showHrEs). */
export const activeLocales: readonly Locale[] = site.showHrEs ? locales : ['de', 'en'];
export const isActiveLocale = (l: Locale): boolean => activeLocales.includes(l);

export const localeMeta: Record<Locale, { label: string; short: string; og: string; bcp47: string }> = {
  de: { label: 'Deutsch', short: 'DE', og: 'de_DE', bcp47: 'de' },
  en: { label: 'English', short: 'EN', og: 'en_US', bcp47: 'en' },
  hr: { label: 'Hrvatski', short: 'HR', og: 'hr_HR', bcp47: 'hr' },
  es: { label: 'Español', short: 'ES', og: 'es_ES', bcp47: 'es' },
};

/** Welche Vorlage eine Seite rendert. */
export type View = 'sections' | 'contact' | 'thanks' | 'imprint' | 'privacy';

export interface RouteDef {
  paths: Partial<Record<Locale, string>>;
  view: View;
  /** Übergeordnete Seite für Brotkrumen (Start wird automatisch ergänzt). */
  parent?: PageKey;
  /** Nicht indexieren, nicht in Sitemap/llms.txt (z. B. Danke-Seiten). */
  noindex?: boolean;
  /** Sprachen, die (noch) über eine eigene Datei unter src/pages/ gebaut werden statt über [...slug].astro. */
  fileLocales?: readonly Locale[];
}

export const routes = {
  home: { view: 'sections', paths: { de: '/de/', en: '/en/', hr: '/hr/', es: '/es/' } },

  // Familien
  families: { view: 'sections', paths: { de: '/de/familien/', en: '/en/families/', hr: '/hr/obitelji/', es: '/es/familias/' } },
  toilet: { view: 'sections', parent: 'families', paths: { de: '/de/familien/sauber-werden/', en: '/en/families/toilet-training/' } },
  behavior: { view: 'sections', parent: 'families', paths: { de: '/de/familien/herausforderndes-verhalten/', en: '/en/families/challenging-behavior/' } },
  diagnosis: { view: 'sections', parent: 'families', paths: { de: '/de/familien/nach-der-diagnose/', en: '/en/families/after-diagnosis/' } },
  multilingual: { view: 'sections', paths: { de: '/de/mehrsprachige-familien/', en: '/en/multilingual-families/', hr: '/hr/visejezicne-obitelji/', es: '/es/familias-bilingues/' } },
  expat: { view: 'sections', paths: { de: '/de/internationale-familien/', en: '/en/expat-families/' } },

  // Fachkräfte, Organisationen
  professionals: { view: 'sections', paths: { de: '/de/fachkraefte/', en: '/en/professionals/', hr: '/hr/strucnjaci/' } },
  organizations: { view: 'sections', paths: { de: '/de/institutionen/', en: '/en/schools-organizations/' } },
  /** Nur DE, nicht in der Navigation, noindex – wartet auf die arbeitsrechtliche Prüfung (Research §8). */
  jugendamt: { view: 'sections', noindex: true, paths: { de: '/de/jugendaemter/' } },

  // Über, Haltung, Preise, FAQ
  about: { view: 'sections', paths: { de: '/de/ueber-marija/', en: '/en/about/', hr: '/hr/o-meni/', es: '/es/sobre-mi/' } },
  approach: { view: 'sections', parent: 'about', paths: { de: '/de/haltung/', en: '/en/how-i-work/' } },
  pricing: { view: 'sections', paths: { de: '/de/programme/', en: '/en/programs/', hr: '/hr/programi/', es: '/es/programas/' } },
  faq: { view: 'sections', paths: { de: '/de/faq/', en: '/en/faq/' } },

  // Kontakt, Recht
  contact: { view: 'contact', paths: { de: '/de/kontakt/', en: '/en/contact/', hr: '/hr/kontakt/', es: '/es/contacto/' } },
  thanks: { view: 'thanks', parent: 'contact', noindex: true, paths: { de: '/de/kontakt/danke/', en: '/en/contact/thanks/', hr: '/hr/kontakt/hvala/', es: '/es/contacto/gracias/' } },
  imprint: { view: 'imprint', paths: { de: '/de/impressum/', en: '/en/legal-notice/', hr: '/hr/impresum/', es: '/es/aviso-legal/' } },
  privacy: { view: 'privacy', paths: { de: '/de/datenschutz/', en: '/en/privacy/', hr: '/hr/privatnost/', es: '/es/privacidad/' } },
} as const satisfies Record<string, RouteDef>;

export type PageKey = keyof typeof routes;

/** Tolerant gegenüber Schlüsseln, die (noch) keine Seite haben – z. B. Navigationseinträge späterer Stufen. */
const route = (key: string): RouteDef | undefined => (routes as Record<string, RouteDef>)[key];

export const pathFor = (key: string, locale: Locale): string | undefined => route(key)?.paths[locale];

export const hasPage = (key: string, locale: Locale): boolean => Boolean(pathFor(key, locale));

/** Pfad der Seite in `locale` – oder die Startseite dieser Sprache (Sprachumschalter, Links). */
export const pathOrHome = (key: string, locale: Locale): string => pathFor(key, locale) ?? routes.home.paths[locale];

export const isNoindex = (key: string): boolean => Boolean(route(key)?.noindex);

export const parentOf = (key: string): PageKey | undefined => route(key)?.parent;

/** hreflang-Set einer Seite: alle vorhandenen Sprachfassungen + x-default. */
export function alternates(key: string): { hreflang: string; path: string }[] {
  const paths = route(key)?.paths ?? {};
  const list = activeLocales.filter((l) => paths[l]).map((l) => ({ hreflang: localeMeta[l].bcp47, path: paths[l]! }));
  const xd = paths[xDefaultLocale] ?? paths[defaultLocale] ?? list[0]?.path;
  return xd ? [...list, { hreflang: 'x-default', path: xd }] : list;
}

/** Alle Seiten als Liste (für getStaticPaths, Sitemap, llms.txt). */
export interface PageEntry { key: PageKey; locale: Locale; path: string; view: View; noindex: boolean; file: boolean }
export function allPages(): PageEntry[] {
  const out: PageEntry[] = [];
  for (const key of Object.keys(routes) as PageKey[]) {
    const r = route(key)!;
    for (const l of locales) {
      const p = r.paths[l];
      if (p) out.push({ key, locale: l, path: p, view: r.view, noindex: Boolean(r.noindex) || !isActiveLocale(l), file: Boolean(r.fileLocales?.includes(l)) });
    }
  }
  return out;
}

/** Findet Schlüssel + Sprache zu einem Pfad (z. B. für die Sitemap). */
export function lookup(pathname: string): PageEntry | undefined {
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return allPages().find((x) => x.path === p);
}

/** Sprache aus einem Pfad (/en/… → en). */
export const localeFromPath = (pathname: string): Locale =>
  (locales.find((l) => pathname === `/${l}/` || pathname.startsWith(`/${l}/`)) ?? defaultLocale);
