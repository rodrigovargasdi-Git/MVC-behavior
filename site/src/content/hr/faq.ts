/**
 * Česta pitanja (HR, kratko). Native review by Marija needed.
 */
import type { FaqItem } from '../types';
import { site } from '../site';

export const faq: FaqItem[] = [
  {
    id: 'od-cega-poceti',
    group: 'Obitelji',
    q: 'Poremećaj iz spektra autizma – od čega početi?',
    a: [
      'Najprije duboko udahnite: dijagnoza ne mijenja Vaše dijete, nego Vaše razumijevanje. Zatim ojačajte način komunikacije koji već funkcionira, uvedite jednostavnu i predvidljivu dnevnu rutinu te razvrstajte što je hitno, a što može pričekati. U tome Vam mogu pomoći.',
    ],
    link: { label: 'Podrška obiteljima', href: '@families#od-cega-poceti' },
  },
  {
    id: 'sto-je-analiza',
    group: 'ABA i pristup',
    q: 'Što je analiza ponašanja i koliko košta savjetovanje?',
    a: [
      'Primijenjena analiza ponašanja proučava kako ponašanje i okolina utječu jedno na drugo. Ne nudim sate terapije, nego savjetovanje: procjenu, pisani plan i coaching za roditelje. Honorar je na upit – nakon besplatnog uvodnog razgovora od 15 minuta dobit ćete pisanu ponudu.',
    ],
    link: { label: 'Cijene i programi', href: '@pricing' },
  },
  {
    id: 'kritika',
    group: 'ABA i pristup',
    q: 'Nije li ABA sporna?',
    a: [
      `Kritika starijih ABA praksi usmjerenih na poslušnost opravdana je. Ja radim prema pristupu Practical Functional Assessment (PFA) i Skill-Based Treatment (SBT): sigurnost i povjerenje na prvom mjestu, bez kažnjavanja, a dijete uvijek može tražiti pauzu. ${site.haltungNote}`,
    ],
  },
  {
    id: 'hrvatski-njemacka',
    group: 'Obitelji',
    q: 'Postoji li savjetovanje na hrvatskom u Njemačkoj?',
    a: [
      `Da. Hrvatski mi je materinski jezik. Savjetujem online u cijeloj Njemačkoj, Austriji i Švicarskoj, a uživo u ${site.offer.city}. Pomažem i u snalaženju u njemačkom sustavu – vrtić, škola, Jugendamt.`,
    ],
  },
  {
    id: 'dvojezicnost',
    group: 'Obitelji',
    q: 'Je li dvojezičnost štetna za dijete s autizmom?',
    a: [
      'U pravilu nije. Pregledni radovi ne pokazuju da dvojezična djeca iz spektra autizma zaostaju u razvoju jezika za jednojezičnom djecom iz spektra. Odustajanje od hrvatskog kod kuće stoga se obično ne preporučuje.',
      site.checks.sourcesCheck,
    ],
    link: { label: 'Višejezične obitelji', href: '@multilingual' },
  },
  {
    id: 'dijagnoza',
    group: 'ABA i pristup',
    q: 'Postavljate li dijagnoze?',
    a: ['Ne. Nudim savjetovanje, coaching i superviziju – bez dijagnostike, psihoterapije i hitne pomoći. Rado Vam pomognem razumjeti postojeće nalaze.'],
  },
  {
    id: 'supervizija',
    group: 'Stručnjaci',
    q: 'Postoji li supervizija na hrvatskom?',
    a: ['Da, online, na hrvatskom, engleskom ili njemačkom – kao stručna podrška i refleksija. Sate supervizije za BACB certifikaciju ne nudim.'],
  },
  {
    id: 'podaci',
    group: 'Obitelji',
    q: 'Kako postupate s podacima mog djeteta?',
    a: ['Povjerljivo i štedljivo. Kontaktni obrazac namjerno ne traži dijagnoze ni zdravstvene podatke – o tome razgovaramo osobno. Ova stranica ne koristi kolačiće ni praćenje.'],
    link: { label: 'Privatnost', href: '@privacy' },
  },
];

export const commitments = [
  'Ciljeve dogovaramo s obitelji i, koliko je moguće, s djetetom.',
  'Radim na temelju pristanka: ako dijete pokaže stres ili odbijanje, pravimo pauzu.',
  'Bez kažnjavanja i averzivnih postupaka.',
  'Cilj nije suzbiti stimming. Poštujemo autistični identitet.',
  'Blisko surađujem s logopedima, radnim terapeutima, vrtićem i školom.',
  'Coaching za roditelje srž je mog rada.',
  'Podatke o napretku otvoreno dijelim s obitelji.',
];
