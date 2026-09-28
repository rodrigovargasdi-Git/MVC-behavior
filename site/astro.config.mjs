// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { locales, lookup, alternates } from './src/i18n/routes.ts';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// PLATZHALTER: finale Domain eintragen (oder in .env bzw. beim Build SITE_URL=https://www.ihre-domain.com setzen).
// Die Endung .example ist reserviert und kann nie live gehen – so fällt eine vergessene Domain sofort auf.
const SITE_URL = (process.env.SITE_URL || env.SITE_URL || 'https://vargas-behavior.example').replace(/\/$/, '');

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },

  // Sprachen als Unterordner /de/ /en/ /hr/ /es/ (Research §5.1).
  // „/“ → /de/: statisch über public/index.html (sofortige Weiterleitung) und als echte 301 über public/.htaccess.
  i18n: {
    locales: [...locales],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },

  integrations: [
    sitemap({
      // Nur indexierbare Seiten aus dem Routen-Register (keine Danke-Seiten, keine noindex-Seiten, keine Weiterleitung).
      filter: (page) => {
        const hit = lookup(new URL(page).pathname);
        return Boolean(hit) && !hit.noindex;
      },
      // hreflang-Paare (inkl. x-default) je URL – nur echte Entsprechungen.
      serialize: (item) => {
        const hit = lookup(new URL(item.url).pathname);
        if (!hit) return item;
        return { ...item, links: alternates(hit.key).map((a) => ({ url: `${SITE_URL}${a.path}`, lang: a.hreflang })) };
      },
      // Eine Sitemap je Sprache: sitemap-de-0.xml, sitemap-en-0.xml … plus sitemap-index.xml.
      chunks: Object.fromEntries(
        locales.map((l) => [l, (item) => (new URL(item.url).pathname.startsWith(`/${l}/`) ? item : undefined)]),
      ),
    }),
  ],
});
