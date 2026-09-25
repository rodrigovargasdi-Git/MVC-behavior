import { PH_PREFIX } from '../content/site';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Findet „[[BITTE BESTÄTIGEN: …]]“ – auch wenn der Hinweis selbst „[Region]“ o. Ä. enthält. */
const PH_RE = new RegExp(`${escapeRe(PH_PREFIX)}.*?\\]\\]`, 'g');

/** Escaped HTML; jeder Platzhalter wird sichtbar markiert. */
export function phHtml(text: string): string {
  return escapeHtml(text).replace(PH_RE, (m) => `<mark class="ph">${m}</mark>`);
}

/** Text ohne Platzhalter (für <title>, meta description, JSON-LD, alt …). */
export function stripPh(text: string): string {
  return text.replace(PH_RE, '').replace(/\s{2,}/g, ' ').replace(/\s+([.,;:])/g, '$1').trim();
}
