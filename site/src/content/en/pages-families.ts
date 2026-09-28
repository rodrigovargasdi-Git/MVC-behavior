/**
 * EN – Families: hub, topic pages (toilet training, challenging behavior, after the diagnosis),
 * multilingual and expat families. Briefs: research §6 no. 2–10. US spelling ("behavior").
 * Rules: answer first, no cure or outcome promises, no speech therapy offered.
 */
import type { PageContent } from '../types';
import type { PageKey } from '../../i18n/routes';
import { site } from '../site';

const updated = '2026-09-28';
const s = site;

export const familyPages: Partial<Record<PageKey, PageContent>> = {
  families: {
    title: 'Autism parent coaching & support – online and in person',
    description:
      'Support for families of autistic children: behavior assessment, a written plan and parent coaching – online across Europe and in person, in four languages.',
    crumb: 'Families',
    service: {
      name: 'Programs for families of autistic children',
      description: 'Behavior assessment following PFA, a written support plan, parent coaching and focus programs for families of autistic children.',
      audience: 'Parents and families of autistic children',
      price: 'clarity',
    },
    sections: [
      {
        type: 'hero',
        eyebrow: 'For families',
        title: 'Support for families of autistic children: *assessment, a clear plan, coaching*',
        lead: 'When behavior shapes your whole day, you do not need blame. You need someone who looks closely with you – and a plan that fits your child and your life.',
        photo: 'officeBeige',
        primary: 'call',
        secondary: { label: 'Programs & fees', href: '@pricing' },
      },
      {
        type: 'list',
        eyebrow: 'When I can help',
        title: 'Does this sound *familiar?*',
        items: [
          'Communication that is frustrating for everyone – and little contact with other children.',
          'Meltdowns, hitting or biting – and the question of what your child is trying to tell you.',
          'A preschool- or school-age child who is still in diapers.',
          'A new diagnosis, lots of advice – but no plan.',
          'Many people involved – Kita, school, therapists, authorities – and nobody pulling it all together.',
          'Feeling overwhelmed as a parent. That is not failure; it is a sign that you deserve support.',
        ],
      },
      {
        type: 'cards',
        bg: 'paper',
        eyebrow: 'Topics',
        title: 'How I help *families*',
        cols: 3,
        cards: [
          { label: 'Communication', title: 'Communicating & playing together', text: 'When your child finds it hard to communicate or to connect with other children.', link: { label: 'About communication', href: '@families#communication' }, tone: 'sea' },
          { label: 'Toilet training', title: 'No-pressure toilet training', text: 'When your child is 4, 5 or 6 and still in diapers, or avoids the toilet.', link: { label: 'About toilet training', href: '@toilet' }, tone: 'sand' },
          { label: 'Challenging behavior', title: 'Calm days', text: 'Understanding meltdowns, hitting or biting – and building safe alternatives.', link: { label: 'About challenging behavior', href: '@behavior' }, tone: 'lavender' },
          { label: 'After the diagnosis', title: 'First steps', text: 'Orientation for the first weeks: what matters now, and what can wait?', link: { label: 'About first steps', href: '@diagnosis' }, tone: 'sand' },
          { label: 'Multilingual families', title: 'Language and behavior', text: 'For families who speak several languages – behavior and communication in every family language.', link: { label: 'For multilingual families', href: '@multilingual' }, tone: 'lavender' },
          { label: 'Expat families', title: 'New to Germany', text: 'Understand the German system – in English, Croatian, Spanish or German.', link: { label: 'For expat families', href: '@expat' }, tone: 'sea' },
        ],
      },
      {
        type: 'programs',
        eyebrow: 'Programs',
        title: 'Programs at a *glance*',
        intro: 'From a first consultation to an on-site intensive: every program has a fixed scope and written deliverables. You receive the fee as a written proposal after the free intro call.',
        programs: ['clarity', 'assessment', 'coaching', 'intensive'],
        note: 'Also available: [focus programs for toilet training, challenging behavior and the time after a diagnosis](@pricing#focus-programs), and ongoing case leadership with supervision of your home program.',
      },
      {
        type: 'answers',
        bg: 'paper',
        eyebrow: 'Good to know',
        title: 'How I work *with families*',
        items: [
          {
            id: 'assessment',
            q: 'What is a functional behavior assessment?',
            a: [
              'A functional behavior assessment (FBA) clarifies when a behavior happens, what comes before it and what it achieves for your child – for example quiet, closeness, getting something or escaping a demand. I follow the Practical Functional Assessment (PFA) approach: first an in-depth conversation with you, then a short, safe observation.',
              'What you receive:',
            ],
            list: [
              'A written support plan in plain language',
              'Concrete steps for home, Kita, school and your child\'s school aide',
              'A handover session – with your child\'s whole team if you wish',
              'Honesty about what I do not do: no diagnosis, no emergency care',
            ],
          },
          {
            id: 'parent-coaching',
            q: 'What is parent coaching?',
            a: [
              'In parent coaching you learn to use the steps from the plan yourself, in daily life. We practice with real situations – mornings, getting dressed, transitions, playtime – review together and adjust the plan. The program runs for 8 or 12 weeks, online or in person, with written check-ins between sessions.',
              'Examples of goals families set: a calmer start to the day, fewer meltdowns at transitions, more ways for your child to say "break" or "help". I cannot promise outcomes – but we check together whether the plan helps.',
            ],
          },
          {
            id: 'communication',
            q: 'How do you support communication and social skills?',
            a: [
              'We look at how your child already communicates – words, gestures, pictures or a talker – and build on it: asking for things, asking for help or a break, taking turns, playing together. We practice in real everyday situations, at home, at Kita or with siblings.',
            ],
          },
          {
            id: 'kita-school',
            q: 'Do you also visit Kita or school?',
            a: [
              'Yes. If you wish, I observe at Kita or school, advise the team and align the support plan with educators, teachers and your child\'s school aide – so everyone works in the same direction. [More for schools and Kitas](@organizations)',
            ],
          },
          {
            id: 'online-in-person',
            q: 'Online or in person?',
            a: [
              `Both. Parent coaching and plan reviews work very well online. Observations and Home Intensives can take place at your home, Kita or school. ${s.offer.serviceArea.en}.`,
            ],
          },
          {
            id: 'cost',
            q: 'What does it cost?',
            a: ['Fees depend on the program and scope. After the free 15-minute intro call you receive a written proposal. [Programs at a glance](@pricing)'],
          },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'Process',
        title: 'How we *work together*',
        intro: 'You do not need to know yet what kind of help you need. That is what the first call is for.',
        steps: [
          { title: 'Free call', text: '15 minutes by video: we find out whether and how I can help.' },
          { title: 'Assessment & plan', text: 'I work out what is behind the behavior, and you receive a written plan.' },
          { title: 'Coaching', text: 'We put the plan into practice together and adapt it to your daily life.' },
        ],
      },
      { type: 'faq', eyebrow: 'Questions from parents', title: 'Good to *know*', ids: ['which-children', 'process', 'germany-pays', 'data'] },
      {
        type: 'cta',
        title: 'The first step: *a conversation.*',
        text: 'Tell me briefly who you are and which language you prefer. We will talk about your child in person.',
        primary: 'call',
        secondary: { label: 'Programs & fees', href: '@pricing' },
      },
    ],
  },

  toilet: {
    title: 'Toilet training for autistic children',
    description:
      'Toilet training autism: typical hurdles, what to check with your pediatrician first, and the 6-week "Toilet Training" program – online or in person, in English.',
    crumb: 'Toilet training',
    service: { name: 'Focus Program "Toilet Training"', description: 'Six-week toilet training support for autistic children.', audience: 'Parents of autistic children', price: 'focus' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Families · Toilet training',
        title: 'Toilet training for *autistic children*',
        lead: 'Many autistic children take longer to use the toilet – and many parents only hear "it will come". If your child is 4, 5 or 6 and still in diapers, there are good, low-stress ways forward.',
        primary: 'call',
      },
      {
        type: 'answers',
        items: [
          {
            q: 'When does "not toilet-trained" become a concern?',
            a: [
              'Most children become dry during the day between two and four; the range is wide, and autistic children often take longer. It becomes a topic when your child shows no daytime progress at around four, strongly avoids the toilet, or Kita or school start to push.',
            ],
          },
          {
            q: 'What are typical hurdles in autism?',
            a: ['It is rarely "not wanting to". More often it is:'],
            list: [
              '**Sensory:** the flush, a cold seat, smells, unfamiliar bathrooms',
              '**Routines:** the diaper is familiar, change is hard work',
              '**Communication:** no simple way yet to show "I need to go"',
              '**Body signals:** bladder and bowel signals are hard to notice',
              '**Fear:** of falling in, the hole or the water',
            ],
          },
          {
            q: 'What should be checked medically first?',
            a: [
              'Constipation is common in autistic children and a frequent reason why toilet training does not work. Ask your pediatrician to check for constipation, urinary tract infections or other medical causes first.',
            ],
          },
          {
            q: 'How does toilet training without pressure work?',
            a: [
              'We break the routine into small steps, make it predictable – for example with picture cards – adapt the bathroom to your child\'s senses and celebrate every step. If your child shows stress, we go back a step. If you wish, we involve Kita or school so everyone does the same.',
            ],
          },
        ],
      },
      {
        type: 'programs',
        bg: 'paper',
        eyebrow: 'Program',
        title: 'The 6-week program *"Toilet Training"*',
        programs: ['toilet'],
      },
      { type: 'author', updated },
      {
        type: 'related',
        eyebrow: 'Read on',
        title: 'Related *topics*',
        links: [
          { label: 'After the diagnosis: first steps', href: '@diagnosis' },
          { label: 'All programs for families', href: '@families' },
        ],
      },
      { type: 'cta', title: 'Step by step, *without pressure.*', text: 'In the free call we find out whether the program suits your child.', primary: 'call' },
    ],
  },

  behavior: {
    title: 'Challenging behavior: understand it, then change the day',
    description:
      'Autistic child hitting, biting or having meltdowns? Safety first, behavior as communication, meltdown vs tantrum – and the PFA-SBT program "Calm Days".',
    crumb: 'Challenging behavior',
    service: { name: 'PFA-SBT Program "Calm Days"', description: 'Support with challenging behavior following Practical Functional Assessment and Skill-Based Treatment.', audience: 'Parents of autistic children', price: 'calmDays' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Families · Challenging behavior',
        title: 'Challenging behavior: understand it, *then change the day together*',
        lead: 'Meltdowns, hitting, biting, running off or self-injury: there is almost always a reason behind challenging behavior. Once we understand it, your child can learn another, safer way.',
        primary: 'call',
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'No emergency care',
        body: [
          'If your child or others are in immediate danger, call **112** (the emergency number across the EU). Out-of-hours doctor in Germany: **116 117**. For self-injury I always coordinate with your child\'s doctor.',
        ],
      },
      {
        type: 'answers',
        items: [
          {
            q: 'What should I do when my child hits or bites me?',
            a: [
              'Safety first – for your child, for you and for siblings: create distance, move dangerous objects away, speak calmly and briefly. Punishment does not help in that moment. Afterwards we look at the function together: what happened just before, and what did the behavior achieve? That leads to a plan for another, safe way to communicate.',
            ],
          },
          {
            q: 'Why is behavior communication?',
            a: [
              'Every behavior serves a purpose. It can mean "this is too much", "I want that", "help me" or "I need a break". With PFA we find out what it means for your child. With SBT your child learns to say the same thing in an easier way – and to cope better with "wait" and "no".',
            ],
          },
          {
            q: 'Meltdown or tantrum – what is the difference?',
            a: [
              'A tantrum is often goal-directed and ends when the goal is reached or given up. A meltdown is an overload response: the nervous system is overwhelmed and your child cannot do otherwise in that moment. Both deserve understanding – but they need different responses.',
            ],
          },
          {
            q: 'How can I calm my child during a meltdown?',
            a: ['In the moment, these usually help:'],
            list: [
              'Reduce input: light, noise, onlookers',
              'Say little – no questions, no demands',
              'Offer safety and closeness, without forcing it',
              'Afterwards: quiet, water, no debrief in the moment',
              'Later, note down what happened before – it helps the assessment',
            ],
          },
        ],
      },
      {
        type: 'programs',
        bg: 'paper',
        eyebrow: 'Programs',
        title: 'Program *"Calm Days"*',
        intro: 'For most families it starts with an assessment. If daily life is very strained, the "Calm Days" program supports you over 8 to 12 weeks.',
        programs: ['calmDays', 'assessment'],
      },
      { type: 'faq', eyebrow: 'Questions', title: 'Good to *know*', ids: ['pfa-sbt', 'what-is-behavior-analysis', 'diagnosis-therapy'] },
      { type: 'author', updated },
      {
        type: 'related',
        eyebrow: 'Read on',
        title: 'Related *topics*',
        links: [
          { label: 'How I work: PFA & SBT', href: '@approach' },
          { label: 'Support for schools and Kitas', href: '@organizations' },
        ],
      },
      { type: 'cta', title: 'Calmer days start with *understanding.*', text: 'In the free call we find out what your family needs now.', primary: 'call' },
    ],
  },

  diagnosis: {
    title: 'Just got an autism diagnosis? First steps',
    description:
      'Your child just got an autism diagnosis? What matters in the first 90 days, what support exists in Germany, and what to do if your child is not talking yet.',
    crumb: 'After the diagnosis',
    service: { name: 'Focus Program "First Steps"', description: 'Six weeks of orientation for families after an autism diagnosis.', audience: 'Parents of autistic children', price: 'focus' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Families · After the diagnosis',
        title: 'Just got an autism diagnosis? *First steps for your family*',
        lead: 'The diagnosis is here, and with it many questions, forms and well-meant advice. You do not have to solve everything at once. This is what really matters in the first weeks.',
        primary: 'call',
      },
      {
        type: 'answers',
        items: [
          {
            q: 'The first 90 days: what really matters?',
            a: ['Not everything is equally urgent. These steps help bring order:'],
            list: [
              'Breathe: the diagnosis does not change your child – it changes your understanding.',
              'Read the report calmly and note questions for the follow-up appointment.',
              'Strengthen a way of communicating that works now – words, gestures, pictures or a talker.',
              'Create a simple, predictable daily routine.',
              'Sort support and applications: what is urgent, what can wait?',
              'Get support for yourself: other parents, advice, respite.',
            ],
          },
          {
            q: 'What support is there in Germany?',
            a: [
              'Depending on age and situation, options include early intervention (Frühförderung), extra support at Kita, a school aide (Schulbegleitung), prescribed speech and occupational therapy, and autism-specific support funded through integration assistance (Eingliederungshilfe, § 35a SGB VIII). What fits and who pays is decided case by case.',
              '[New to Germany? Here is the system explained in English.](@expat)',
            ],
          },
          {
            q: 'My child is not talking yet – what now?',
            a: [
              'Many autistic children talk later or differently. What matters is that your child already has a way to communicate – gestures, picture cards, signs or a speech-generating device. According to current knowledge, these aids do not hold back speech. A speech and language assessment at a recognized practice is worthwhile; I am happy to coordinate with them.',
            ],
          },
        ],
      },
      {
        type: 'programs',
        bg: 'paper',
        eyebrow: 'Programs',
        title: 'Program *"First Steps"*',
        intro: 'Six weeks to sort, plan and take the first practical steps. If you first need an expert view, start with the Clarity Consultation.',
        programs: ['firstSteps', 'clarity'],
      },
      { type: 'author', updated },
      {
        type: 'related',
        eyebrow: 'Read on',
        title: 'Related *topics*',
        links: [
          { label: 'Multilingual families: language and behavior', href: '@multilingual' },
          { label: 'Autism support in Germany for expat families', href: '@expat' },
          { label: 'All programs for families', href: '@families' },
        ],
      },
      { type: 'cta', title: 'You do not have to *sort this out alone.*', text: 'In the free call we find the right first step for your family.', primary: 'call' },
    ],
  },

  multilingual: {
    title: 'Bilingual autistic children: language & behavior',
    description:
      'Bilingual toddler with a speech delay? Does bilingualism harm autistic children? Guidance on multilingual development and behavior – together, in four languages.',
    crumb: 'Multilingual families',
    service: { name: 'Multilingual Family Consultation', description: 'Joint guidance on behavior and multilingual development, including a family language plan.', audience: 'Multilingual families of autistic children' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Multilingual families',
        title: 'Bilingual and multilingual children: *language and behavior together*',
        lead: 'Croatian at home, German at Kita, English with friends? Growing up with several languages is a gift – and it raises many questions for autistic children. I speak Croatian, German, English and Spanish myself and look at your child\'s behavior and communication in every family language.',
        photo: 'coast',
        primary: 'multilingual',
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Does bilingualism cause speech delay in autistic children?',
            a: [
              'Generally, no. Research reviews have not found that bilingual autistic children do worse in language development than monolingual autistic children. Giving up the home language, on the other hand, can weaken the bond with grandparents, culture and emotions.',
              s.checks.sourcesCheck,
            ],
          },
          {
            q: 'My child only speaks one language – what should we do?',
            a: [
              'That is common and not a reason to worry on its own: children use the language that pays off most in daily life. A family language plan helps: who speaks which language, when, and where does each language get enough room? What matters is that your child always has at least one way to communicate.',
            ],
          },
          {
            q: 'When should we see a speech therapist?',
            a: [
              'If you are worried about language development, have it assessed by a doctor and a recognized speech and language therapy practice. Diagnosing or treating speech and language disorders is not part of my service. I advise on behavior and communication in multilingual daily life and am happy to work with your practice.',
            ],
          },
        ],
      },
      { type: 'programs', bg: 'paper', eyebrow: 'Service', title: 'Multilingual Family *Consultation*', programs: ['language'] },
      { type: 'faq', eyebrow: 'Questions', title: 'Good to *know*', ids: ['bilingual', 'online-languages'] },
      { type: 'cta', title: 'Every language *counts.*', text: 'Tell me which languages your family speaks. I will get back to you with a suggestion.', primary: 'multilingual' },
    ],
  },

  expat: {
    title: 'Autism support in Germany for expat families',
    description:
      'Autism support in Germany in English: how diagnosis works, what Germany pays for, Kita, school and school aides explained – plus programs in your language.',
    crumb: 'Expat families',
    service: { name: 'Expat Navigation', description: 'Orientation in the German autism support system for international families, in English, Croatian, Spanish or German.', audience: 'International and expat families in Germany' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Expat & international families',
        title: 'Autism support in Germany for international families – *in English*',
        lead: 'Moving to Germany with an autistic child – or getting a diagnosis here – means learning a new system in a new language. I help international families understand it, and I support your child and family in English, Croatian, Spanish or German.',
        photo: 'berlin',
        primary: 'call',
        secondary: { label: 'Programs & fees', href: '@pricing' },
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Is there an English-speaking autism consultant in Germany?',
            a: [
              `Yes. I am a behavior analyst – not a psychologist or physician – and I offer assessment, written plans and parent coaching in English: in person in ${s.offer.city} and online across Germany and Europe. I also work in German, Croatian and Spanish.`,
            ],
          },
          {
            q: 'How do I get an autism diagnosis in Germany?',
            a: [
              'Usually the first step is your pediatrician (Kinderarzt). The diagnostic assessment itself is typically done at a social pediatric center (SPZ, Sozialpädiatrisches Zentrum) or a child and adolescent psychiatry service (Kinder- und Jugendpsychiatrie). Waiting times can be long, so ask early and bring any previous reports, ideally translated. I do not diagnose, but I help you plan the route and use the waiting time well.',
            ],
          },
          {
            q: 'Does Germany pay for autism support?',
            a: [
              'Partly, and it depends on your situation. Speech therapy (Logopädie) and occupational therapy (Ergotherapie) can be prescribed through statutory health insurance. Autism-specific support can be funded by the youth welfare office (Jugendamt) as integration assistance (Eingliederungshilfe, § 35a SGB VIII) – decided case by case, with no guarantee. Private insurance varies. My programs are private services; some employers support family consultations, so it is worth asking HR.',
            ],
          },
          {
            q: 'How do Kita, school and school aides work?',
            a: [
              'Children with extra support needs can get additional help at Kita (daycare) and a school aide (Schulbegleitung) at school. How to apply depends on the federal state and the municipality – usually via the Jugendamt or the social welfare office. International schools have their own learning support policies, and it pays to talk to them before enrolment.',
            ],
          },
          {
            q: 'Can I get behavior analysis support in Germany in English?',
            a: [
              'Publicly funded, behavior-analytic support is rare in Germany and usually offered in German. I provide behavior consultation, assessment and parent coaching in English – following Practical Functional Assessment and Skill-Based Treatment – as a private service.',
            ],
          },
        ],
      },
      {
        type: 'defs',
        bg: 'paper',
        eyebrow: 'Glossary',
        title: 'German terms *you will hear*',
        items: [
          { dt: 'Kinderarzt', dd: 'Pediatrician – usually your first point of contact.' },
          { dt: 'SPZ', dd: 'Sozialpädiatrisches Zentrum – a social pediatric center where autism is often diagnosed.' },
          { dt: 'Jugendamt', dd: 'Youth welfare office – decides on integration assistance for children.' },
          { dt: 'Eingliederungshilfe (§ 35a SGB VIII)', dd: 'Integration assistance – can fund autism-specific support, case by case.' },
          { dt: 'Schulbegleitung', dd: 'School aide who supports your child in class.' },
          { dt: 'Logopädie / Ergotherapie', dd: 'Speech therapy / occupational therapy – available on prescription.' },
          { dt: 'Kita', dd: 'Daycare and preschool for children up to school age.' },
        ],
      },
      { type: 'note', body: ['I provide general information and help with paperwork – **not legal advice**. For appeals or legal questions, I refer you to counselling services or lawyers.'] },
      {
        type: 'programs',
        eyebrow: 'How I help',
        title: 'Expat Navigation *+ programs in your language*',
        intro: 'Navigation can be added to any program. Many international families start with a Clarity Consultation; families who want fast progress choose a Home Intensive.',
        programs: ['navigation', 'clarity', 'intensive'],
      },
      { type: 'faq', bg: 'paper', eyebrow: 'Questions', title: 'Questions from *international families*', ids: ['english-consultant', 'behavior-support-english', 'germany-pays', 'online-languages'] },
      { type: 'cta', title: 'Settle in – *in the system, too.*', text: 'In the free call we talk in your language about what your family needs.', primary: 'call' },
    ],
  },
};
