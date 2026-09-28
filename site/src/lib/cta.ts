/** Ziel-Aktionen → Kontaktseite mit vorausgewähltem Anliegen (KPI-Zählung, Evaluation §5.4). */
import type { CtaKind } from '../content/types';
import { pathOrHome, type Locale } from '../i18n/routes';

const anliegen: Record<CtaKind, string | null> = {
  call: 'familie',
  assessment: 'familie',
  supervision: 'fachkraft',
  org: 'institution',
  meeting: 'institution',
  talk: 'fortbildung',
  multilingual: 'sprache',
  question: 'sonstiges',
  pricing: null,
};

export function ctaHref(kind: CtaKind, locale: Locale): string {
  if (kind === 'pricing') return pathOrHome('pricing', locale);
  return `${pathOrHome('contact', locale)}?anliegen=${anliegen[kind]}`;
}
