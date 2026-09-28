/**
 * HR – kratka verzija (7 stranica + pravne). Formalno „Vi“, ijekavica, „djeca iz spektra autizma“.
 * Native review by Marija needed (data-review="translation"). Kanali: hrvatske misije, udruge, dopunske škole –
 * ne SEO (tržišna analiza §3.4). Research §5.2 / §6.
 */
import type { PageContent } from '../types';
import type { PageKey } from '../../i18n/routes';
import { site } from '../site';
import { contact } from './contact';

const s = site;
const approachHr =
  'Radim prema pristupu **Practical Functional Assessment (PFA)** i **Skill-Based Treatment (SBT)**, koji su razvili dr. Gregory Hanley i suradnici i objavili u stručnim časopisima – s naglaskom na sigurnost, povjerenje i pristanak djeteta. Najprije zajedno razumijemo što neko ponašanje djetetu donosi. Zatim dijete korak po korak uči bolje načine da to postigne: komunicirati, nositi se s „čekaj“ i „ne“ te sudjelovati.';
const cred = (id: string) => {
  const c = s.person.credentials.find((x) => x.id === id);
  return c ? `${c.text.hr}${c.verify ? ` · ${c.verify}` : ''}${c.note ? ` – ${c.note.hr}` : ''}` : '';
};

export const pages: Partial<Record<PageKey, PageContent>> = {
  home: {
    title: 'Savjetovanje i analiza ponašanja za obitelji',
    description:
      'Savjetovanje i analiza ponašanja za obitelji djece iz spektra autizma – na hrvatskom, u Njemačkoj i online. Jasni programi s pisanim planom.',
    crumb: 'Početna',
    sections: [
      {
        type: 'hero',
        variant: 'home',
        photo: 'studio',
        eyebrow: 'Primijenjena analiza ponašanja · PFA & SBT',
        title: 'Savjetovanje i analiza ponašanja za obitelji djece iz spektra autizma – *na hrvatskom, u Njemačkoj i online*',
        lead: 'Ja sam Marija Vargas. Hrvatski mi je materinski jezik, a iskustvo sam stekla u SAD-u i Njemačkoj. Obiteljima, stručnjacima i ustanovama nudim jasne programe s pisanim planom – umjesto neograničenih sati terapije.',
        primary: 'call',
        secondary: { label: 'Programi i cijene', href: '@pricing' },
      },
      {
        type: 'facts',
        items: [
          { label: 'Iskustvo', value: s.experience.hr },
          { label: 'Pristup', value: 'PFA & SBT' },
          { label: 'Jezici', value: 'hrvatski · njemački · engleski · španjolski' },
          { label: 'Početak', value: s.offer.startClaim.hr },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Za obitelji',
        title: 'U čemu mogu *pomoći*',
        cols: 3,
        cards: [
          { label: 'Prvi koraci', title: 'Od čega početi?', text: 'Dijagnoza je tu – što je sada važno, a što može pričekati?', link: { label: 'Saznajte više', href: '@families#od-cega-poceti' }, tone: 'sand' },
          { label: 'Pelene', title: 'Bez pelena, bez pritiska', text: 'Kada dijete u vrtićkoj ili školskoj dobi još nosi pelene.', link: { label: 'Saznajte više', href: '@families#pelene' }, tone: 'sea' },
          { label: 'Više jezika', title: 'Dvojezična djeca', text: 'Hrvatski kod kuće, njemački u vrtiću? Jezik i ponašanje zajedno.', link: { label: 'Saznajte više', href: '@multilingual' }, tone: 'lavender' },
        ],
      },
      {
        type: 'prose',
        bg: 'paper',
        eyebrow: 'Kako radim',
        title: 'S poštovanjem *prema djetetu*',
        body: [approachHr, `Kvalifikacije: ${cred('iba')}; ${cred('pfa-sbt')}`],
        links: [{ label: 'O meni i mom pristupu', href: '@about#kako-radim' }],
      },
      {
        type: 'cards',
        bg: 'paper',
        eyebrow: 'Za stručnjake',
        title: 'Supervizija *i edukacija*',
        cols: 2,
        cards: [
          { title: 'Supervizija na hrvatskom', text: 'Za stručnjake u analizi ponašanja u Hrvatskoj, Njemačkoj i dijaspori – online.', link: { label: 'Za stručnjake', href: '@professionals' }, tone: 'sea' },
          { title: 'Edukacije i predavanja', text: 'Za vrtiće, škole i udruge – na hrvatskom, engleskom ili njemačkom.', link: { label: 'Saznajte više', href: '@professionals#edukacije' }, tone: 'lavender' },
        ],
      },
      { type: 'faq', eyebrow: 'Česta pitanja', title: 'Pitanja su *dobrodošla*', ids: ['hrvatski-njemacka', 'sto-je-analiza', 'dijagnoza'], more: false },
      { type: 'cta', title: 'Razgovarajmo – *na hrvatskom.*', text: 'U besplatnom razgovoru od 15 minuta razjasnit ćemo mogu li i kako pomoći.', primary: 'call' },
    ],
  },

  families: {
    title: 'Podrška obiteljima djece iz spektra autizma',
    description:
      'Podrška obiteljima djece iz spektra autizma – online i u Njemačkoj: od čega početi, spavanje, odvikavanje od pelena, izazovno ponašanje, coaching za roditelje.',
    crumb: 'Obitelji',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Za obitelji',
        title: 'Podrška obiteljima djece iz spektra autizma – *online i u Njemačkoj*',
        lead: 'Kada ponašanje obilježi cijeli dan, ne trebate krivca, nego nekoga tko će s Vama pažljivo pogledati situaciju – i plan koji odgovara Vašem djetetu i Vašem životu.',
        photo: 'officeBeige',
        primary: 'call',
      },
      {
        type: 'answers',
        items: [
          {
            id: 'od-cega-poceti',
            q: 'Poremećaj iz spektra autizma – od čega početi?',
            a: ['Nije sve jednako hitno. Ovi koraci pomažu unijeti red:'],
            list: [
              'Duboko udahnite: dijagnoza ne mijenja Vaše dijete, nego Vaše razumijevanje.',
              'Ojačajte način komunikacije koji već funkcionira – riječi, geste, slike ili uređaj.',
              'Uvedite jednostavnu, predvidljivu dnevnu rutinu.',
              'Razvrstajte pomoć i zahtjeve: što je hitno, a što može pričekati?',
              'Potražite podršku i za sebe.',
            ],
          },
          {
            id: 'pelene',
            q: 'Kako odviknuti dijete s autizmom od pelena?',
            a: [
              'Najprije neka pedijatar provjeri postoji li zatvor ili drugi tjelesni uzrok – to je čest razlog zastoja. Zatim put do zahoda dijelimo u male, predvidljive korake (npr. sa slikovnim karticama), prilagođavamo kupaonicu osjetilima djeteta i slavimo svaki napredak. Bez pritiska: ako se pojavi stres, vraćamo se korak unatrag.',
            ],
          },
          {
            id: 'izazovno-ponasanje',
            q: 'Kako smiriti dijete kad ima napadaj bijesa?',
            a: [
              'U trenutku: sigurnost na prvom mjestu, manje podražaja, malo riječi, bez zahtjeva. Kasnije gledamo funkciju ponašanja: što mu je prethodilo i što je dijete time postiglo? Prema pristupu PFA i SBT dijete zatim uči lakše načine da kaže isto – i da se nosi s „čekaj“ i „ne“. U hitnom slučaju nazovite 112.',
            ],
          },
        ],
      },
      {
        type: 'programs',
        bg: 'paper',
        eyebrow: 'Programi',
        title: 'Programi *ukratko*',
        intro: 'Svaki program ima jasan opseg, pisane rezultate i početnu cijenu koju znate unaprijed.',
        programs: ['clarity', 'assessment', 'coaching', 'toilet', 'calmDays'],
      },
      { type: 'faq', eyebrow: 'Pitanja', title: 'Dobro je *znati*', ids: ['dijagnoza', 'podaci', 'hrvatski-njemacka'], more: false },
      { type: 'cta', title: 'Prvi korak: *razgovor.*', text: 'Napišite mi ukratko tko ste i gdje živite. O djetetu ćemo razgovarati osobno.', primary: 'call' },
    ],
  },

  multilingual: {
    title: 'Dvojezična i višejezična djeca: jezik i ponašanje',
    description:
      'Dvojezično dijete iz spektra autizma? Je li dvojezičnost štetna, što ako dijete ne govori – savjetovanje za hrvatske obitelji u Njemačkoj i dijaspori.',
    crumb: 'Višejezične obitelji',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Višejezične obitelji',
        title: 'Dvojezična i višejezična djeca: *jezik i ponašanje zajedno*',
        lead: 'Hrvatski kod kuće, njemački u vrtiću, engleski s prijateljima? Višejezičnost je dar – ali kod djece iz spektra autizma otvara mnoga pitanja. Govorim hrvatski, njemački, engleski i španjolski i promatram ponašanje i komunikaciju djeteta na svakom obiteljskom jeziku.',
        photo: 'coast',
        primary: 'multilingual',
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Je li dvojezičnost štetna za dijete s autizmom?',
            a: [
              'U pravilu nije. Pregledni radovi ne pokazuju da dvojezična djeca iz spektra autizma zaostaju u razvoju jezika za jednojezičnom djecom iz spektra. Odustajanje od hrvatskog kod kuće može pak oslabiti vezu s bakama i djedovima, kulturom i osjećajima.',
              s.checks.sourcesCheck,
            ],
          },
          {
            q: 'Moje dijete ne govori s 3 godine – kome se obratiti?',
            a: [
              'Obratite se pedijatru i logopedu za procjenu. Važno je da dijete već sada ima način da se izrazi – gestama, slikama ili uređajem; takva pomagala prema današnjim saznanjima ne koče govor. Savjetujem o ponašanju i komunikaciji u višejezičnoj svakodnevici i rado surađujem s Vašim logopedom.',
            ],
          },
          {
            q: 'Hrvatska obitelj u Njemačkoj – kako se snaći u sustavu?',
            a: [
              'Dijagnostiku u Njemačkoj obično započinje pedijatar (Kinderarzt), a provodi je socijalnopedijatrijski centar (SPZ) ili dječja psihijatrija. Podršku u vrtiću i školi te Eingliederungshilfe odobrava Jugendamt, uvijek pojedinačno. Pomažem Vam razumjeti sustav – na hrvatskom. To su opće informacije, ne pravni savjet.',
            ],
          },
        ],
      },
      { type: 'programs', eyebrow: 'Ponuda', title: 'Savjetovanje za *višejezične obitelji*', programs: ['language'] },
      { type: 'cta', title: 'Svaki jezik *je važan.*', text: 'Napišite mi koje jezike govorite kod kuće. Javit ću se s prijedlogom.', primary: 'multilingual' },
    ],
  },

  professionals: {
    title: 'Supervizija i edukacija iz analize ponašanja',
    description:
      'Supervizija i edukacija iz primijenjene analize ponašanja na hrvatskom – za stručnjake, vrtiće, škole i udruge. Online i uživo.',
    crumb: 'Stručnjaci',
    service: { name: 'Supervizija i edukacija', description: 'Individualna i grupna supervizija te edukacije iz primijenjene analize ponašanja.', audience: 'Stručnjaci i ustanove', price: 'supIndividual' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Za stručnjake',
        title: 'Supervizija i edukacija iz *primijenjene analize ponašanja*',
        lead: 'Za stručnjake i timove u Hrvatskoj, Njemačkoj i dijaspori koji žele stručno rasti i zadržati svoj stav – etično, praktično i na hrvatskom.',
        photo: 'corridorNavy',
        primary: 'supervision',
      },
      {
        type: 'list',
        eyebrow: 'Za koga',
        title: 'Kada slučajevi postanu *složeni*',
        items: [
          'Stručnjaci u analizi ponašanja u edukaciji i praksi',
          'Edukacijski rehabilitatori, logopedi i odgojitelji',
          'Asistenti u nastavi i timovi u udrugama',
        ],
      },
      { type: 'programs', bg: 'paper', eyebrow: 'Oblici', title: 'Supervizija', programs: ['supIndividual', 'supGroup'] },
      {
        type: 'answers',
        items: [
          {
            q: 'Čemu služi supervizija?',
            a: ['Supervizija služi stručnoj podršci, refleksiji slučajeva i etici u praksi – pojedinačno ili u stalnoj grupi. Sate supervizije za BACB certifikaciju ne nudim.'],
          },
        ],
      },
      { type: 'programs', id: 'edukacije', eyebrow: 'Za ustanove', title: 'Edukacije *i predavanja*', intro: 'Teme: razumjeti ponašanje, izazovno ponašanje u vrtiću i školi, višejezična djeca iz spektra, uvod u PFA i SBT.', programs: ['training'], note: s.offer.trainingTopicsNote },
      { type: 'faq', eyebrow: 'Pitanja', title: 'Dobro je *znati*', ids: ['supervizija', 'dijagnoza'], more: false },
      { type: 'cta', title: 'Razmišljajmo *zajedno.*', text: 'Napišite mi ukratko u kojoj ulozi radite i što tražite – bez osobnih podataka o klijentima.', primary: 'supervision' },
    ],
  },

  about: {
    title: 'O meni: Marija Vargas',
    description:
      'Marija Vargas: analitičarka ponašanja s iskustvom iz SAD-a i Njemačke, PFA & SBT, hrvatski kao materinski jezik. Kvalifikacije, pristup i tim.',
    crumb: 'O meni',
    ogType: 'profile',
    sections: [
      {
        type: 'hero',
        eyebrow: 'O meni',
        title: 'Marija Vargas – analiza ponašanja s iskustvom iz *SAD-a i Njemačke*',
        lead: 'Osnovala sam svoju savjetodavnu tvrtku kako bih obiteljima, stručnjacima i ustanovama pružila iskusnu, osobnu i višejezičnu podršku – s jasnim programima i pisanim planovima.',
        photo: 'berlin',
        primary: 'call',
      },
      {
        type: 'defs',
        id: 'kvalifikacije',
        eyebrow: 'Kvalifikacije',
        title: 'Provjerljivo, *s izvorom*',
        items: [
          { dt: 'Iskustvo', dd: s.experience.hr },
          { dt: 'Analiza ponašanja', dd: cred('iba') },
          { dt: 'PFA & SBT', dd: cred('pfa-sbt') },
          { dt: 'Magisterij', dd: cred('ma') },
          { dt: 'Preddiplomski studij', dd: cred('ba') },
          { dt: 'Priznavanje', dd: cred('recognition') },
          { dt: 'Jezici', dd: s.person.languages.hr },
        ],
      },
      {
        type: 'prose',
        id: 'kako-radim',
        bg: 'paper',
        eyebrow: 'Kako radim',
        title: 'S poštovanjem *prema djetetu*',
        intro: 'Kritika starijih praksi usmjerenih na poslušnost i „neprimjetnost“ opravdana je. Zato otvoreno kažem kako radim.',
        body: [approachHr],
      },
      { type: 'commitments', eyebrow: 'Moja načela', title: 'Po čemu me *možete prepoznati*' },
      {
        type: 'photo',
        id: 'osobno',
        bg: 'paper',
        photo: 'realSmile',
        photo2: 'realGarden',
        eyebrow: 'Osobno',
        title: 'Više od *posla*',
        body: [
          'Hrvatska, SAD, Njemačka: iz vlastitog iskustva znam kako je stići u novu zemlju, novi sustav i novi jezik.',
          s.personal.path.hr,
          s.personal.why.hr,
          s.personal.motherhood.hr,
        ],
      },
      { type: 'cta', title: 'Upoznajmo *se.*', text: '15 minuta, besplatno, na hrvatskom.', primary: 'call' },
    ],
  },

  pricing: {
    title: 'Programi i honorar',
    description: 'Programi za obitelji i stručnjake: procjena i plan podrške, coaching za roditelje, supervizija – honorar na upit.',
    crumb: 'Programi',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Programi',
        title: 'Programi *i honorar*',
        lead: `Jasni programi umjesto neograničenih sati: unaprijed znate što je uključeno i koliko traje. Honorar dobivate kao pisanu ponudu nakon besplatnog uvodnog razgovora. ${s.offer.startClaim.hr}`,
        primary: 'call',
      },
      { type: 'programs', eyebrow: 'Za obitelji', title: 'Programi za *obitelji*', programs: ['fit', 'clarity', 'assessment', 'coaching', 'intensive'] },
      { type: 'programs', bg: 'paper', eyebrow: 'Fokus-programi', title: 'Za jednu *konkretnu temu*', programs: ['toilet', 'calmDays'] },
      { type: 'programs', eyebrow: 'Za stručnjake i ustanove', title: 'Supervizija *i edukacija*', programs: ['supIndividual', 'supGroup', 'training'] },
      {
        type: 'defs',
        bg: 'paper',
        eyebrow: 'Dobro je znati',
        title: 'Uvjeti',
        items: [
          { dt: 'Uvodni razgovor', dd: `15 minuta videopozivom, besplatno. ${s.prices.freeCall}` },
          { dt: 'Putni troškovi', dd: 'Za termine uživo izvan mog mjesta i za Home Intensive obračunavam putne troškove – navedeno u ponudi unaprijed.' },
          { dt: 'Otkazivanje', dd: s.prices.cancellation },
          { dt: 'Plaćanje', dd: s.prices.payment },
        ],
      },
      { type: 'cta', title: 'Niste sigurni koji program *odgovara?*', text: 'Za to služi besplatan uvodni razgovor.', primary: 'call' },
    ],
  },

  contact: { title: contact.title, description: contact.description, crumb: contact.crumb, sections: [] },
  thanks: { title: contact.thanks.title, description: contact.thanks.description, crumb: contact.thanks.crumb, sections: [] },
  imprint: { title: 'Impresum', description: `Impresum – ${s.brand.name}. Prijevod; pravno je obvezujuća njemačka verzija.`, crumb: 'Impresum', sections: [] },
  privacy: { title: 'Izjava o privatnosti', description: 'Bez kolačića, bez praćenja, bez trećih strana. Prijevod; pravno je obvezujuća njemačka verzija.', crumb: 'Privatnost', sections: [] },
};
