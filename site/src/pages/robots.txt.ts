import type { APIRoute } from 'astro';

// PUBLIC_NOINDEX=true (Vorschau/Test-Deployment) sperrt die Indexierung komplett.
export const GET: APIRoute = ({ site }) => {
  const noindex = import.meta.env.PUBLIC_NOINDEX === 'true';
  const sitemap = new URL('/sitemap-index.xml', site).href;
  const body = noindex
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
