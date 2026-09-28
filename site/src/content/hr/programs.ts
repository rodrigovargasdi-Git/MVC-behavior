/**
 * Programi (HR). Iste cijene u eurima kao na svim jezicima (site.ts → prices; prijedlozi dok nisu potvrđeni).
 * Native review by Marija needed.
 */
import type { Program, ProgramKey } from '../types';
import { site } from '../site';

const lang = 'hrvatski, njemački, engleski, španjolski';

export const programs: Partial<Record<ProgramKey, Program>> = {
  fit: {
    name: 'Besplatan uvodni razgovor',
    for: 'Za sve koji žele provjeriti odgovara li moj pristup njihovoj situaciji.',
    includes: ['Kratak videorazgovor', 'Iskrena procjena mogu li i kako pomoći', 'Preporuka za sljedeći korak'],
    duration: '15 minuta',
    format: `Video · ${lang}`,
    price: 'free',
    cta: 'call',
  },
  clarity: {
    name: 'Stručno savjetovanje (Clarity Consultation)',
    for: 'Za obitelji kojima treba stručan pogled i jedan jasan sljedeći korak.',
    includes: ['Detaljan razgovor o Vašem djetetu, svakodnevici i ciljevima', 'Prva procjena iz perspektive analize ponašanja', 'Pisani sažetak (2 stranice) s konkretnim koracima'],
    duration: '90 minuta + sažetak',
    format: `Online ili uživo · ${lang}`,
    price: 'clarity',
    cta: 'call',
  },
  assessment: {
    name: 'Procjena ponašanja i plan podrške',
    for: 'Za obitelji koje žele razumjeti što stoji iza određenog ponašanja – uz plan koji svi mogu koristiti.',
    includes: [
      'Detaljan uvodni razgovor prema pristupu PFA',
      'Dva promatranja: kod kuće, u vrtiću ili putem videa',
      'Pisani plan podrške za obitelj, vrtić, školu i asistenta u nastavi',
      'Razgovor o planu, po želji s cijelim timom',
    ],
    duration: '3–4 tjedna',
    format: `Online i/ili uživo · ${lang}`,
    price: 'assessment',
    cta: 'assessment',
  },
  coaching: {
    name: 'Program coachinga za roditelje',
    for: 'Za roditelje koji žele korak po korak uvoditi promjene u svakodnevicu, uz stručnu podršku.',
    includes: ['Redoviti termini (online ili uživo)', 'Stalna prilagodba plana', `Pisane provjere između termina, odgovor ${site.contact.responseTime.hr}`],
    duration: '8 tjedana (opcija 12 tjedana)',
    format: `Online ili uživo · ${lang}`,
    price: 'coaching',
    cta: 'call',
  },
  toilet: {
    name: 'Fokus-program „Bez pelena“',
    for: 'Za obitelji čije dijete u vrtićkoj ili školskoj dobi još nosi pelene ili izbjegava zahod.',
    includes: ['Procjena spremnosti (komunikacija, rutine, osjetila)', 'Plan korak po korak za dom, vrtić ili školu', 'Tjedna podrška', 'Prethodno liječnička provjera (npr. zatvor)'],
    duration: '6 tjedana',
    format: `Online ili uživo · ${lang}`,
    price: 'focus',
    cta: 'call',
  },
  calmDays: {
    name: 'PFA-SBT program „Mirniji dani“',
    for: 'Za obitelji čiju svakodnevicu obilježavaju napadaji bijesa, udaranje, grizenje ili drugo izazovno ponašanje.',
    includes: ['Procjena prema pristupu PFA', 'Plan za više sigurnosti i mira', 'Učenje komunikacije i nošenja s „ne“ (SBT)', 'Redovita podrška, po želji s vrtićem ili školom'],
    duration: '8–12 tjedana',
    format: `Online i uživo · ${lang}`,
    price: 'calmDays',
    cta: 'call',
  },
  intensive: {
    name: 'Home Intensive – intenzivni dani kod kuće',
    for: 'Za obitelji koje žele brz i temeljit napredak – zajedno sa svima koji prate dijete.',
    includes: [`2–3 dana kod Vas kod kuće – ${site.offer.travel}`, 'Rad s obitelji, asistentom, vrtićem ili školom', 'Procjena i pisani plan', '6 tjedana online praćenja'],
    duration: '2–3 dana + 6 tjedana',
    format: `Uživo kod Vas + online · ${lang}`,
    price: 'intensive',
    cta: 'call',
    flagship: true,
  },
  language: {
    name: 'Savjetovanje za višejezične obitelji',
    for: 'Za obitelji koje govore više jezika i žele zajedno sagledati ponašanje i komunikaciju djeteta.',
    includes: ['Obiteljski jezični plan', 'Ideje za svakodnevnu komunikaciju – na svakom obiteljskom jeziku', 'Po potrebi preporuka priznate logopedske prakse'],
    duration: 'po dogovoru',
    format: `Online ili uživo · ${lang}`,
    price: 'request',
    cta: 'multilingual',
  },
  supIndividual: {
    name: 'Individualna supervizija',
    for: 'Za stručnjake koji žele redovito promišljati o svojim slučajevima i ulozi.',
    includes: ['Rasprava o slučajevima uz podatke i videozapise (uz zaštitu podataka)', 'Etika, pristanak i stav u praksi', 'Na zahtjev: uvid u PFA i SBT na primjerima'],
    duration: '60 minuta',
    format: 'Online · hrvatski, engleski, njemački',
    price: 'supIndividual',
    cta: 'supervision',
  },
  supGroup: {
    name: 'Grupna supervizija',
    for: 'Za 3–6 stručnjaka koji žele učiti jedni od drugih.',
    includes: ['Rad na slučajevima u maloj grupi', 'Stalna grupa i ritam', 'Na hrvatskom, engleskom ili njemačkom'],
    duration: '90 minuta',
    format: 'Online · hrvatski, engleski, njemački',
    price: 'supGroup',
    cta: 'supervision',
  },
  training: {
    name: 'Edukacije za ustanove',
    for: 'Za vrtiće, škole, udruge i organizacije – u Hrvatskoj, Njemačkoj i online.',
    includes: ['Teme i primjeri iz Vaše prakse', 'Praktično, s vježbama', 'Na hrvatskom, engleskom ili njemačkom'],
    duration: 'pola dana ili cijeli dan',
    format: 'Uživo ili online',
    price: 'trainingHalf',
    price2: { key: 'trainingFull', label: 'Cijeli dan' },
    cta: 'org',
  },
};
