// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// PLATZHALTER: finale Domain eintragen (oder in .env bzw. beim Build SITE_URL=https://www.ihre-domain.de setzen).
// Die Endung .example ist reserviert und kann nie live gehen – so fällt eine vergessene Domain sofort auf.
const SITE_URL = process.env.SITE_URL || env.SITE_URL || 'https://vargas-behavior.example';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Danke-Seite und 404 gehören nicht in die Sitemap.
      filter: (page) => !page.includes('/kontakt/danke/') && !page.includes('/404'),
    }),
  ],
});
