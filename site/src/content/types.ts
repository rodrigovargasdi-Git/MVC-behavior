/**
 * Typen für die Seiteninhalte. Jede Sprache hat einen eigenen Ordner (src/content/de|en|hr|es),
 * die Seitenvorlage (src/components/sections/*) ist für alle Sprachen gleich.
 *
 * Texte vom Typ `Rich` erlauben: **fett**, *Akzent*, [Link](@seitenschluessel#anker) – siehe src/lib/rich.ts.
 */
import type { PageKey } from '../i18n/routes';
import type { PriceKey } from './site';

export type Rich = string;
export type PhotoKey =
  | 'studio'
  | 'berlin'
  | 'coast'
  | 'officeBeige'
  | 'officeNavy'
  | 'corridorNavy'
  | 'duo'
  | 'duoBeige'
  | 'realSmile'
  | 'realGarden';
/** Ziel-Aktionen (je Sprache beschriftet in ui.cta). */
export type CtaKind = 'call' | 'assessment' | 'supervision' | 'org' | 'meeting' | 'talk' | 'multilingual' | 'question' | 'pricing';
export type Bg = 'paper' | 'sand' | 'sea' | 'lavender' | 'forest' | 'none';
export type ProgramKey =
  | 'fit'
  | 'clarity'
  | 'assessment'
  | 'coaching'
  | 'nights'
  | 'toilet'
  | 'calmDays'
  | 'firstSteps'
  | 'intensive'
  | 'caseLead'
  | 'navigation'
  | 'language'
  | 'supIndividual'
  | 'supGroup'
  | 'caseConsult'
  | 'training'
  | 'talks';

export interface LinkRef { label: string; href: string }

interface Base { id?: string; bg?: Bg; eyebrow?: string; title?: Rich; intro?: Rich }

export interface HeroS extends Base {
  type: 'hero';
  title: Rich;
  lead?: Rich;
  photo?: PhotoKey;
  /** 'home' = großes Porträt, 'page' = Seitenkopf mit optionalem kleinen Bild. */
  variant?: 'home' | 'page';
  primary?: CtaKind;
  secondary?: LinkRef;
  trust?: string;
}
export interface AnswersS extends Base {
  type: 'answers';
  items: { id?: string; q: string; a: Rich[]; list?: Rich[] }[];
}
export interface ListS extends Base { type: 'list'; items: Rich[]; ordered?: boolean; after?: Rich }
export interface CardsS extends Base {
  type: 'cards';
  cols?: 2 | 3 | 4;
  cards: { label?: string; title: Rich; text: Rich; link?: LinkRef; tone?: Bg }[];
  after?: LinkRef[];
}
export interface StepsS extends Base { type: 'steps'; steps: { title: string; text: Rich }[] }
export interface ProgramsS extends Base { type: 'programs'; programs: ProgramKey[]; note?: Rich; compact?: boolean }
export interface PhotoS extends Base {
  type: 'photo';
  photo: PhotoKey;
  body: Rich[];
  links?: LinkRef[];
  reverse?: boolean;
  /** Zusatz-Porträt (z. B. zwei echte Fotos im Abschnitt „Persönlich“). */
  photo2?: PhotoKey;
}
export interface TeamS extends Base {
  type: 'team';
  photo: PhotoKey;
  people: { name: Rich; role: Rich; text: Rich[] }[];
  note?: Rich;
}
export interface FactsS extends Base { type: 'facts'; items: { label: string; value: Rich }[] }
export interface NoteS extends Base { type: 'note'; tone?: 'info' | 'warn' | 'internal'; body: Rich[] }
export interface FaqS extends Base { type: 'faq'; ids?: string[]; group?: string; more?: boolean }
export interface CtaS extends Base { type: 'cta'; title: Rich; text?: Rich; primary: CtaKind; secondary?: LinkRef }
export interface AuthorS extends Base { type: 'author'; updated: string }
export interface RelatedS extends Base { type: 'related'; links: LinkRef[] }
export interface ProseS extends Base { type: 'prose'; body: Rich[]; list?: Rich[]; links?: LinkRef[] }
export interface CommitmentsS extends Base { type: 'commitments'; after?: Rich; link?: LinkRef }
export interface DefsS extends Base { type: 'defs'; items: { dt: string; dd: Rich }[] }
export interface ReviewS extends Base { type: 'review' }

export type Section =
  | HeroS
  | AnswersS
  | ListS
  | CardsS
  | StepsS
  | ProgramsS
  | PhotoS
  | TeamS
  | FactsS
  | NoteS
  | FaqS
  | CtaS
  | AuthorS
  | RelatedS
  | ProseS
  | CommitmentsS
  | DefsS;

export interface PageContent {
  /** <title> ohne Marke, ≤ ~50 Zeichen. */
  title: string;
  /** Meta-Description ≤ 155 Zeichen. */
  description: string;
  /** Kurzname für Brotkrumen und Navigation. */
  crumb: string;
  ogType?: 'website' | 'profile';
  sections: Section[];
  /** Strukturierte Daten: Service-Knoten (+ Offer, sobald Preise bestätigt sind). */
  service?: { name: string; description: string; audience: string; price?: PriceKey };
}

export interface Program {
  name: string;
  /** Für wen (ein Satz). */
  for: Rich;
  includes: Rich[];
  duration: string;
  format: string;
  /** Preis-Schlüssel aus site.prices; 'free' = kostenlos; 'request' = auf Anfrage; 'included' = in anderen Programmen. */
  price: PriceKey | 'free' | 'request' | 'offer';
  /** Optionaler zweiter Preis (z. B. ganztägige Fortbildung). */
  price2?: { key: PriceKey; label: string };
  cta: CtaKind;
  more?: LinkRef;
  flagship?: boolean;
}

export interface FaqItem {
  id: string;
  group: string;
  q: string;
  a: Rich[];
  link?: LinkRef;
}

export interface NavItem { key: PageKey; label?: string; children?: { key: PageKey; label?: string }[] }

export interface Ui {
  skip: string;
  menu: string;
  close: string;
  navLabel: string;
  subnavToggle: string;
  breadcrumbLabel: string;
  home: string;
  langLabel: string;
  langHomeHint: string;
  nav: NavItem[];
  headerCta: string;
  cta: Record<CtaKind, string>;
  /** Hinweis in der Hero-Zeile. */
  trust: string;
  footer: {
    families: string;
    more: string;
    contact: string;
    legal: string;
    disclaimer: string;
    noCookies: string;
    samples: string;
    contactLink: string;
    familyLinks: PageKey[];
    moreLinks: PageKey[];
  };
  photoAlt: Record<PhotoKey, string>;
  programs: {
    for: string;
    includes: string;
    duration: string;
    format: string;
    price: string;
    free: string;
    onRequest: string;
    offer: string;
    flagship: string;
    from: (amount: string) => string;
    perMonth: string;
    perPerson: string;
    plusTravel: string;
    plusVat: string;
    more: string;
  };
  author: { label: string; updated: string; role: Rich; link: string };
  faqMore: string;
  reviewFlag: string;
  numberLocale: string;
}

/** Texte der Kontaktseite und der Danke-Seite (je Sprache in contact.ts). */
export interface ContactStrings {
  title: string;
  description: string;
  crumb: string;
  eyebrow: string;
  h1: Rich;
  lead: Rich;
  directTitle: string;
  area: string;
  noHealthTitle: string;
  noHealth: string;
  nextTitle: string;
  next: string[];
  formTitle: string;
  required: string;
  name: string;
  email: string;
  role: string;
  rolePlaceholder: string;
  roles: Record<'familie' | 'fachkraft' | 'institution' | 'fortbildung' | 'sprache' | 'sonstiges', string>;
  language: string;
  region: string;
  optional: string;
  message: string;
  messageHint: string;
  privacy: Rich;
  submit: string;
  sending: string;
  ok: string;
  err: string;
  errors: { name: string; email: string; role: string; privacy: string };
  honeypot: string;
  fallbackTitle: string;
  fallbackText: string;
  fallbackMail: string;
  fallbackHint: Rich;
  mailSubject: string;
  mailBody: string[];
  booking: string;
  thanks: { title: string; description: string; crumb: string; h1: Rich; lead: Rich; spam: string; back: string };
}
