/** Preisanzeige je Sprache. Unbestätigte Preise erscheinen als sichtbarer Platzhalter (Vorschlag, Research §7.2). */
import { site, PH, type PriceKey } from '../content/site';
import type { Ui } from '../content/types';

export function formatPrice(key: PriceKey, ui: Ui): string {
  const p = site.prices.items[key] as { from: number; perMonth?: boolean; perPerson?: boolean; plusTravel?: boolean; b2b?: boolean; derived?: boolean };
  const nf = new Intl.NumberFormat(ui.numberLocale, { maximumFractionDigits: 0 });
  let s = ui.programs.from(nf.format(p.from));
  if (p.perMonth) s += ` ${ui.programs.perMonth}`;
  if (p.perPerson) s += ` ${ui.programs.perPerson}`;
  const extras = [p.b2b ? ui.programs.plusVat : '', p.plusTravel ? ui.programs.plusTravel : ''].filter(Boolean).join(' ');
  if (!site.prices.confirmed) return PH(`${s} – ${p.derived ? 'abgeleiteter Vorschlag (analog Elterncoaching)' : 'Vorschlag'}, Preis bestätigen (E4, Research §7)`) + (extras ? ` ${extras}` : '');
  return extras ? `${s} ${extras}` : s;
}

export function priceText(price: PriceKey | 'free' | 'request' | 'offer', ui: Ui): string {
  if (price === 'free') return ui.programs.free;
  if (!site.prices.show) return ui.programs.onRequest;
  if (price === 'request') return ui.programs.onRequest;
  if (price === 'offer') return ui.programs.offer;
  return formatPrice(price, ui);
}
