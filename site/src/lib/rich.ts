/**
 * Mini-Auszeichnung für Inhalte (alle Sprachen):
 *   **fett**   *kursiv/Akzent*   [Linktext](@schluessel#anker)   [Linktext](/pfad/)   [Linktext](https://…)
 * `@schluessel` wird über das Routen-Register zur Seite in der aktuellen Sprache aufgelöst
 * (fehlt sie dort, zur Startseite der Sprache). Platzhalter „[[BITTE BESTÄTIGEN: …]]“ werden
 * sichtbar markiert. Alles andere wird HTML-escaped – Inhalte können kein HTML einschleusen.
 */
import { PH_PREFIX } from '../content/site';
import { pathOrHome, type Locale, type PageKey, routes } from '../i18n/routes';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const PH_RE = new RegExp(`${escapeRe(escapeHtml(PH_PREFIX))}.*?\\]\\]`, 'g');
const PH_RAW_RE = new RegExp(`${escapeRe(PH_PREFIX)}.*?\\]\\]`, 'g');

/** Löst `@key#hash` bzw. normale Pfade auf. */
export function resolveHref(href: string, locale: Locale): string {
  if (!href.startsWith('@')) return href;
  const [keyPart, hash] = href.slice(1).split('#');
  const [key, query] = keyPart.split('?');
  if (!(key in routes)) throw new Error(`Unbekannter Seitenschlüssel in Link: ${href}`);
  return `${pathOrHome(key as PageKey, locale)}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
}

/** Inline-Auszeichnung → sicheres HTML. */
export function rich(text: string, locale: Locale): string {
  const placeholders: string[] = [];
  let s = escapeHtml(text).replace(PH_RE, (m) => {
    placeholders.push(`<mark class="ph">${m}</mark>`);
    return `\u0000${placeholders.length - 1}\u0000`;
  });
  s = s
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label: string, href: string) => {
      const h = resolveHref(href.replace(/&amp;/g, '&'), locale);
      const ext = /^https?:\/\//.test(h);
      return `<a href="${escapeHtml(h)}"${ext ? ' rel="noopener"' : ''}>${label}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>');
  return s.replace(/\u0000(\d+)\u0000/g, (_m, i: string) => placeholders[Number(i)]);
}

/** Klartext ohne Auszeichnung und ohne Platzhalter (für <title>, meta, alt, JSON-LD). */
export function plain(text: string): string {
  return text
    .replace(PH_RAW_RE, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([.,;:!?])/g, '$1')
    .replace(/\(\s*\)/g, '')
    .trim();
}

export const hasPlaceholder = (text: string) => text.includes(PH_PREFIX);
