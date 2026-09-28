/**
 * Inhalte je Sprache. Jede Sprache liegt in einem eigenen Ordner:
 *   src/content/de/  src/content/en/  src/content/hr/  src/content/es/
 * mit ui.ts (Oberflächentexte), Seiteninhalten, Programmen, FAQ und Rechtstexten.
 */
import type { Locale, PageKey } from '../i18n/routes';
import type { ContactStrings, FaqItem, PageContent, Program, ProgramKey, Ui } from './types';
import * as de from './de/index';
import * as en from './en/index';
import * as hr from './hr/index';
import * as es from './es/index';

export interface LocaleContent {
  ui: Ui;
  pages: Partial<Record<PageKey, PageContent>>;
  programs: Partial<Record<ProgramKey, Program>>;
  faq: FaqItem[];
  commitments: string[];
  contact: ContactStrings;
  /** true = Übersetzung, die Marija muttersprachlich prüfen muss (data-review="translation"). */
  needsReview: boolean;
}

export const content: Record<Locale, LocaleContent> = {
  de: de as unknown as LocaleContent,
  en: en as unknown as LocaleContent,
  hr: hr as unknown as LocaleContent,
  es: es as unknown as LocaleContent,
};

export const pageContent = (locale: Locale, key: PageKey): PageContent | undefined => content[locale].pages[key];

/** Kurzname einer Seite in einer Sprache (Navigation, Brotkrumen). */
export const crumbOf = (locale: Locale, key: string): string | undefined =>
  (content[locale].pages as Record<string, PageContent | undefined>)[key]?.crumb;
