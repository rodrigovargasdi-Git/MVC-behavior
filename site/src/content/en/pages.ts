/**
 * EN – page content (home, professionals, schools & organizations, about, how I work, pricing, FAQ).
 * Family pages: ./pages-families.ts. Briefs: docs/2026-09-28-competitor-keyword-research.md §6.
 */
import type { PageContent } from '../types';
import type { PageKey } from '../../i18n/routes';
import { site } from '../site';
import { approach } from './approach';
import { familyPages } from './pages-families';
import { contact } from './contact';

const s = site;
const cred = (id: string) => {
  const c = s.person.credentials.find((x) => x.id === id);
  return c ? `${c.text.en}${c.verify ? ` · ${c.verify}` : ''}${c.note ? ` – ${c.note.en}` : ''}` : '';
};

export const pages: Partial<Record<PageKey, PageContent>> = {
  home: {
    title: 'Behavior analysis consultancy in Germany – in English',
    description:
      'Behavior consultancy for families of autistic children, following PFA & SBT: fixed programs with a written plan – in person in Germany, online across Europe, in four languages.',
    crumb: 'Home',
    sections: [
      {
        type: 'hero',
        variant: 'home',
        photo: 'studio',
        eyebrow: 'Applied behavior analysis · PFA & SBT · international',
        title: 'Behavior consultancy for families of autistic children – *in person, online and in four languages*',
        lead: 'I am Marija Vargas. My consultancy supports families, professionals and schools: senior-led, personal, and with a written plan instead of open-ended therapy hours. Respectful, assent-based and following Practical Functional Assessment and Skill-Based Treatment.',
        primary: 'call',
        secondary: { label: 'Programs & fees', href: '@pricing' },
      },
      {
        type: 'facts',
        items: [
          { label: 'Experience', value: s.experience.en },
          { label: 'Approach', value: 'Practical Functional Assessment (PFA) & Skill-Based Treatment (SBT)' },
          { label: 'Languages', value: 'English · German · Croatian · Spanish' },
          { label: 'Start', value: s.offer.startClaim.en },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'For families',
        title: 'How I help *families*',
        intro: 'Parents rarely search for methods. They search for answers to very concrete questions. These are the most common ones.',
        cols: 4,
        cards: [
          { label: 'Communication', title: 'Communicating', text: 'Your child finds it hard to communicate or to connect with other children.', link: { label: 'Learn more', href: '@families#communication' }, tone: 'sea' },
          { label: 'Toilet training', title: 'No-pressure toilet training', text: 'Your child is 4, 5 or 6 and still in diapers.', link: { label: 'Learn more', href: '@toilet' }, tone: 'sand' },
          { label: 'Behavior', title: 'Calm days', text: 'Understand and change meltdowns, hitting or biting.', link: { label: 'Learn more', href: '@behavior' }, tone: 'lavender' },
          { label: 'Diagnosis', title: 'First steps', text: 'The diagnosis is here – what matters now, and what can wait?', link: { label: 'Learn more', href: '@diagnosis' }, tone: 'sand' },
        ],
        after: [
          { label: 'Autism support in Germany for expat families', href: '@expat' },
          { label: 'Multilingual families', href: '@multilingual' },
          { label: 'All programs for families', href: '@families' },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'Working together',
        title: 'How we *work together*',
        intro: 'Fixed programs, written deliverables and prices you know in advance.',
        steps: [
          { title: 'Free call', text: '15 minutes by video – in English, German, Croatian or Spanish.' },
          { title: 'Assessment & plan', text: 'We work out what is behind the behavior. You receive a written plan.' },
          { title: 'Coaching', text: 'We put the plan into practice – online, at home, or on site as a Home Intensive.' },
        ],
      },
      {
        type: 'prose',
        eyebrow: 'My approach',
        title: 'Behavior analysis, *compassionate and assent-based*',
        body: [approach.teaser],
        list: approach.principles,
        links: [{ label: 'How I work', href: '@approach' }],
      },
      {
        type: 'photo',
        bg: 'paper',
        photo: 'officeNavy',
        eyebrow: 'Who I am',
        title: 'Two systems, *four languages*',
        body: [
          `I am Marija Vargas, a behavior analyst with experience across the US and Germany (${s.experience.en}). Croatian is my native language; I also consult in English, German and Spanish.`,
          'I am an International Behavior Analyst (IBA), hold an MA in Child Studies (Linköping University, Sweden) and a BA in Neuroscience (Earlham College, USA), and have trained in PFA and SBT with FTF Behavioral Consulting since 2021.',
        ],
        links: [
          { label: 'About Marija', href: '@about' },
          { label: 'Multilingual families', href: '@multilingual' },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'For professionals and organizations',
        title: 'For professionals, *schools and Kitas*',
        cols: 2,
        cards: [
          { label: 'Professionals', title: 'Supervision & case consultation', text: 'Supervision, team training, open workshops and talks – in English, German or Croatian.', link: { label: 'For professionals', href: '@professionals' }, tone: 'sea' },
          { label: 'Schools & organizations', title: 'Consultation, training & talks', text: 'Team case consultation, in-house training and workshops – including for international schools.', link: { label: 'For schools & organizations', href: '@organizations' }, tone: 'lavender' },
        ],
      },
      { type: 'faq', bg: 'sea', eyebrow: 'FAQ', title: 'Questions are *welcome*', ids: ['english-consultant', 'which-children', 'cost', 'diagnosis-therapy'] },
      {
        type: 'cta',
        title: 'Let us *sort things out.*',
        text: 'In a free 15-minute call we find out whether and how I can help – in the language you are most comfortable with.',
        primary: 'call',
        secondary: { label: 'Programs & fees', href: '@pricing' },
      },
    ],
  },

  ...familyPages,

  professionals: {
    title: 'Supervision & case consultation for professionals',
    description:
      'Supervision, case consultation, team training and open workshops in behavior analysis – ethical, practical, assent-focused – in English, German or Croatian.',
    crumb: 'Professionals',
    service: { name: 'Supervision and case consultation for professionals', description: 'Individual and group supervision, case consultation and mentoring in applied behavior analysis.', audience: 'Professionals and teams', price: 'supIndividual' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'For professionals',
        title: 'Supervision and case consultation in behavior analysis – *in English, German and Croatian*',
        lead: 'For professionals and teams who want to grow clinically and keep their values: practical, ethical and focused on assent and quality of life.',
        photo: 'corridorNavy',
        primary: 'supervision',
      },
      {
        type: 'list',
        eyebrow: 'Who it is for',
        title: 'When cases get *complex*',
        items: [
          'Behavior analysts in training and practice',
          'Special education and early intervention staff, Kita and school teams',
          'School aides and inclusion assistants',
          'Teams in youth welfare and disability services, providers and youth welfare offices (case consultation)',
        ],
        after: s.checks.jugendamtRelease,
      },
      { type: 'programs', bg: 'paper', eyebrow: 'Formats', title: 'Supervision that *thinks further*', programs: ['supIndividual', 'supGroup', 'caseConsult', 'training', 'talks'] },
      {
        type: 'answers',
        items: [
          {
            q: 'What is the supervision for?',
            a: [
              'For professional guidance, case reflection and ethics in your daily work – individually or in a fixed group. I do not provide supervision hours toward BACB certification.',
            ],
          },
          {
            q: 'What role do ethics and values play in supervision?',
            a: [
              'A central one. Good supervision is more than technique: we talk about assent, dignity and who a goal really serves. On request I give you case-based insight into Practical Functional Assessment (PFA) and Skill-Based Treatment (SBT).',
              `My PFA-SBT qualification: ${approach.level}`,
            ],
          },
        ],
      },
      { type: 'faq', eyebrow: 'Questions', title: 'Good to *know*', ids: ['supervision-hours', 'pfa-sbt', 'what-is-behavior-analysis'] },
      { type: 'cta', title: 'Let us think *further together.*', text: 'Tell me briefly about your role and what you are looking for – without personal case data.', primary: 'supervision' },
    ],
  },

  organizations: {
    title: 'Behavior support for international schools & Kitas',
    description:
      'Behavior consultation, in-house training and talks on challenging behavior, autism and multilingual children – for international schools, Kitas and organizations.',
    crumb: 'Schools & organizations',
    service: { name: 'Consultation and training for schools, Kitas and organizations', description: 'Team case consultation, in-house training, talks and workshops.', audience: 'International schools, Kitas and organizations', price: 'trainingHalf' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Schools, Kitas & organizations',
        title: 'Behavior consultation and training for *international schools, Kitas and organizations*',
        lead: 'When a child challenges the group, a team does not need blame. It needs a shared picture and clear next steps. I consult and train teams – including international schools – in English, German or Croatian.',
        photo: 'officeNavy',
        primary: 'org',
      },
      {
        type: 'cards',
        eyebrow: 'Services',
        title: 'Complex situations. *Clear next steps.*',
        cols: 2,
        cards: [
          { title: 'Team case consultation', text: 'We look at one concrete situation together: what happens, what does the child need, what does the team need? No personal data needed in advance.', tone: 'sand' },
          { title: 'In-house training', text: 'Practical training on challenging behavior, autism and multilingual children – with examples from your setting.', tone: 'sea' },
          { title: 'For international schools', text: 'Behavior support, learning support plans and working with families – in English, with experience of the US system.', tone: 'lavender' },
          { title: 'Talks & workshops', text: 'Keynotes and workshops for conferences, professional days and parent evenings – in English, German or Croatian.', tone: 'sand' },
        ],
      },
      {
        type: 'list',
        bg: 'paper',
        eyebrow: 'Topics',
        title: 'Training topics *to start with*',
        items: [
          'Understanding behavior: what is a child trying to tell us?',
          'Challenging behavior at Kita and school: respond safely, prevent wisely',
          'Multilingual children on the spectrum: language and behavior together',
          'Introduction and case-based insight: PFA and SBT – compassionate, assent-based practice',
        ],
        after: s.offer.trainingTopicsNote,
      },
      { type: 'programs', eyebrow: 'Formats', title: 'Formats and *terms*', programs: ['training', 'talks'] },
      {
        type: 'defs',
        bg: 'paper',
        eyebrow: 'Process',
        title: 'Agreed clearly, *before we start*',
        items: [
          { dt: 'Scope', dd: 'Goals, group, scope and data protection are agreed in writing in advance.' },
          { dt: 'Languages', dd: 'English, German, Croatian' },
          { dt: 'Location', dd: 'On site or online. Travel costs are shown in the proposal.' },
          { dt: 'References', dd: s.testimonialsNote },
        ],
      },
      { type: 'faq', eyebrow: 'Questions', title: 'Good to *know*', ids: ['training-process', 'pfa-sbt', 'data'] },
      { type: 'cta', title: 'A shared picture for *good support.*', text: 'Tell me briefly about your school or organization and your question – without personal case data.', primary: 'org', secondary: { label: 'Ask about a talk', href: '@contact?anliegen=fortbildung' } },
    ],
  },

  about: {
    title: 'About Marija Vargas – credentials & background',
    description:
      'Marija Vargas: International Behavior Analyst (IBA), MA Child Studies, training in PFA & SBT, four languages. Background, credentials and values.',
    crumb: 'About',
    ogType: 'profile',
    sections: [
      {
        type: 'hero',
        eyebrow: 'About',
        title: 'About Marija Vargas – behavior analyst with experience across *the US and Germany*',
        lead: 'I founded my consultancy to give families, professionals and schools experienced, personal and multilingual support – with fixed programs and written plans.',
        photo: 'berlin',
        primary: 'call',
      },
      {
        type: 'facts',
        items: [
          { label: 'Experience', value: s.experience.en },
          { label: 'Credential', value: 'International Behavior Analyst (IBA)' },
          { label: 'Languages', value: s.person.languages.en },
          { label: 'Where', value: s.offer.serviceArea.en },
        ],
      },
      {
        type: 'prose',
        id: 'background',
        eyebrow: 'Background',
        title: 'Two systems, *one set of values*',
        body: [
          s.personal.career.en,
          'Knowing both systems helps me every day: I bring behavior-analytic practice as it is established in the US into German daily life – Kita, school and youth services – and I can explain each system in terms of the other.',
        ],
      },
      {
        type: 'defs',
        id: 'credentials',
        bg: 'paper',
        eyebrow: 'Credentials',
        title: 'Verifiable, *with a source*',
        intro: 'Each credential with its issuing body, year and – where possible – a link to the public register.',
        items: [
          { dt: 'Behavior analysis', dd: cred('iba') },
          { dt: 'PFA & SBT', dd: cred('pfa-sbt') },
          { dt: 'Master', dd: cred('ma') },
          { dt: 'Bachelor', dd: cred('ba') },
          { dt: 'Recognition', dd: cred('recognition') },
          { dt: 'Not a therapist', dd: 'I am not a licensed psychotherapist and do not provide therapy in the medical sense – I offer consultation, coaching and supervision.' },
          { dt: 'Memberships', dd: s.person.memberships[0] },
          { dt: 'Languages', dd: `${s.person.languages.en}. ${s.person.spanishScope}` },
        ],
      },
      {
        type: 'photo',
        id: 'beyond-the-work',
        photo: 'realSmile',
        photo2: 'realGarden',
        eyebrow: 'Beyond the work',
        title: 'More than *the job*',
        body: [
          'Croatia, the US, Germany: I know from my own life what it is like to arrive in a new country, a new system and a new language.',
          s.personal.path.en,
          s.personal.why.en,
          s.personal.motherhood.en,
        ],
      },
      { type: 'prose', bg: 'sea', eyebrow: 'Testimonials', title: 'From *our work together*', body: [s.testimonialsNote] },
      { type: 'cta', title: 'Let us *get to know each other.*', text: '15 minutes, free, in your language.', primary: 'call', secondary: { label: 'How I work', href: '@approach' } },
    ],
  },

  approach: {
    title: 'How I work: PFA & SBT',
    description:
      'How I work with Practical Functional Assessment (PFA) and Skill-Based Treatment (SBT): compassionate, trauma-informed, assent-based – my principles and what I never do.',
    crumb: 'How I work',
    sections: [
      {
        type: 'hero',
        eyebrow: 'How I work',
        title: 'How I work – *compassionate and assent-based*',
        lead: 'Behavior analysis, as I understand it, starts with safety and trust. Here is openly how I work, how you can tell, and what I never do.',
        primary: 'call',
      },
      {
        type: 'prose',
        id: 'pfa-sbt',
        bg: 'paper',
        eyebrow: 'My approach',
        title: 'Practical Functional Assessment *& Skill-Based Treatment*',
        body: [...approach.what, `My qualification: ${approach.level}`],
        list: approach.principles,
      },
      {
        type: 'answers',
        items: [{ q: 'What does research show – and what does it not?', a: [...approach.research, s.checks.sourcesCheck] }],
      },
      { type: 'commitments', eyebrow: 'My principles', title: 'How you can *hold me to it*', link: { label: 'Criticism of my field – my answer', href: '@faq#criticism' } },
      {
        type: 'list',
        bg: 'paper',
        eyebrow: 'Limits',
        title: 'What I *never* do',
        items: [
          'No diagnosis and no psychotherapy.',
          'No punishment or aversive procedures, no physical prompting through refusal.',
          'No training aimed at compliance or looking "typical". Harmless stimming and eye contact are not goals.',
          'No promises of success or cure.',
          'No before-and-after stories about children – not even anonymized.',
        ],
        after: approach.disclaimer,
      },
      { type: 'note', tone: 'internal', body: [s.checks.sensitivityRead] },
      { type: 'faq', eyebrow: 'Ask me', title: 'Open *questions*', ids: ['what-is-behavior-analysis', 'pfa-sbt', 'diagnosis-therapy', 'iba'] },
      { type: 'cta', title: 'Ask me *anything.*', text: 'In the free call you can ask me anything – including what I would never do in a particular situation.', primary: 'call' },
    ],
  },

  pricing: {
    title: 'Programs & fees',
    description:
      'Programs for families, professionals and organizations: Behavior Assessment & Plan, parent coaching, case leadership, supervision – fees on request.',
    crumb: 'Programs',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Programs',
        title: 'Programs *and fees*',
        lead: `Fixed programs with a clear scope instead of open-ended hours: you know in advance what is included and how long it takes. You receive the fee as a written proposal after the free 15-minute intro call. ${s.offer.startClaim.en}`,
        primary: 'call',
      },
      {
        type: 'programs',
        id: 'family-programs',
        eyebrow: 'For families',
        title: 'Programs for *families*',
        intro: 'From the free call to the Home Intensive – ordered from first step to flagship.',
        programs: ['fit', 'clarity', 'assessment', 'coaching', 'intensive', 'caseLead'],
      },
      { type: 'programs', id: 'focus-programs', bg: 'paper', eyebrow: 'Focus programs', title: 'For one *specific topic*', programs: ['toilet', 'calmDays', 'firstSteps'] },
      { type: 'programs', eyebrow: 'Add-ons', title: 'Navigation *and language*', programs: ['navigation', 'language'] },
      { type: 'programs', id: 'professionals', bg: 'paper', eyebrow: 'For professionals', title: 'Supervision *and consultation*', programs: ['supIndividual', 'supGroup', 'caseConsult'] },
      { type: 'programs', id: 'organizations', eyebrow: 'For organizations', title: 'Training *and talks*', programs: ['training', 'talks'] },
      {
        type: 'defs',
        bg: 'paper',
        eyebrow: 'Good to know',
        title: 'Terms *and conditions*',
        items: [
          { dt: 'Free call', dd: `15 minutes by video, free of charge. ${s.prices.freeCall}` },
          { dt: 'Travel', dd: 'For home visits and visits to Kita or school, travel costs are shown in the proposal in advance.' },
          { dt: 'Cancellation', dd: s.prices.cancellation },
          { dt: 'Payment', dd: s.prices.payment },
          { dt: 'Spanish', dd: s.person.spanishScope },
        ],
      },
      { type: 'faq', eyebrow: 'Questions', title: 'Questions about *fees*', ids: ['cost', 'germany-pays', 'process'] },
      { type: 'cta', title: 'Not sure which program *fits?*', text: 'That is what the free call is for: 15 minutes, and you will know.', primary: 'call' },
    ],
  },

  faq: {
    title: 'FAQ: behavior analysis, process and support in Germany',
    description:
      'Answers about behavior analysis, PFA and SBT, toilet training, challenging behavior, bilingualism, autism support in Germany, fees and data protection.',
    crumb: 'FAQ',
    sections: [
      { type: 'hero', eyebrow: 'FAQ', title: 'Frequently asked *questions*', lead: 'Still unsure about something? Just write to me – better one question too many than one hurdle too many.' },
      { type: 'faq', title: 'Behavior analysis, PFA/SBT *and my approach*', group: 'Behavior analysis, PFA/SBT and my approach', more: false },
      { type: 'faq', bg: 'paper', title: 'For *families*', group: 'For families', more: false },
      { type: 'faq', title: 'For *international families*', group: 'For international families', more: false },
      { type: 'faq', bg: 'paper', title: 'Process, cost *and scheduling*', group: 'Process, cost and scheduling', more: false },
      { type: 'faq', title: 'Data and *confidentiality*', group: 'Data and confidentiality', more: false },
      { type: 'faq', bg: 'paper', title: 'For professionals *and organizations*', group: 'For professionals and organizations', more: false },
      { type: 'cta', title: 'Your question was *not there?*', text: 'Write to me. I reply personally.', primary: 'question', secondary: { label: 'Free 15-min call', href: '@contact?anliegen=familie' } },
    ],
  },

  // Contact and legal: templates in src/components/views/ – only title, description and breadcrumb here.
  contact: { title: contact.title, description: contact.description, crumb: contact.crumb, sections: [] },
  thanks: { title: contact.thanks.title, description: contact.thanks.description, crumb: contact.thanks.crumb, sections: [] },
  imprint: { title: 'Legal notice', description: `Legal notice (Impressum) of ${site.brand.name} – courtesy translation; the German version is binding.`, crumb: 'Legal notice', sections: [] },
  privacy: {
    title: 'Privacy policy',
    description: 'Privacy policy: no cookies, no tracking, no third parties. Hosting, enquiries and your rights – courtesy translation; the German version is binding.',
    crumb: 'Privacy',
    sections: [],
  },
};
