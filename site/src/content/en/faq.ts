/**
 * FAQ (EN). Answer first (AEO), 40–80 words. No cure or outcome promises.
 * Unconfirmed facts come only from site.ts (placeholders).
 */
import type { FaqItem } from '../types';
import { site } from '../site';
import { approach } from './approach';

const g = {
  aba: 'Behavior analysis, PFA/SBT and my approach',
  families: 'For families',
  expat: 'For international families',
  process: 'Process, cost and scheduling',
  data: 'Data and confidentiality',
  pros: 'For professionals and organizations',
};

export const faq: FaqItem[] = [
  {
    id: 'what-is-behavior-analysis',
    group: g.aba,
    q: 'What is behavior analysis?',
    a: [
      'Applied behavior analysis studies how behavior and environment interact: what happens before a behavior, what happens after it, and what the behavior achieves for the person.',
      'I use this lens following PFA and SBT: we understand what a behavior is for, then build skills – with your child\'s assent as the benchmark.',
    ],
    link: { label: 'How I work', href: '@approach' },
  },
  {
    id: 'criticism',
    group: g.aba,
    q: 'What sets my behavior-analytic work apart from the criticism of ABA?',
    a: [
      'Autistic people and parts of the profession rightly criticize earlier forms of ABA for aiming at compliance and "normal-looking" behavior, sometimes with pressure or punishment, and for teaching children to mask. I take this criticism seriously.',
      'I follow PFA and SBT and hold myself to seven commitments: goals are agreed with the family and, where possible, the child. I work assent-based and pause as soon as a child shows distress. I use no punishment or aversive procedures. Suppressing stimming is not a goal. I work closely with speech therapy, occupational therapy, Kita and school. Parent coaching is the core of my work. Progress data is shared openly with your family.',
    ],
    link: { label: 'How I work', href: '@approach' },
  },
  {
    id: 'pfa-sbt',
    group: g.aba,
    q: 'What are PFA and SBT?',
    a: [
      'PFA stands for Practical Functional Assessment and SBT for Skill-Based Treatment – an approach developed by Dr. Gregory Hanley and colleagues.',
      'A detailed parent interview and a short, safe analysis (the IISCA) clarify what a behavior achieves. Your child then learns to communicate, to cope with "wait" and "no", and to join in – only while relaxed and engaged.',
      `My qualification in this approach: ${approach.level}`,
    ],
  },
  {
    id: 'iba',
    group: g.aba,
    q: 'What does "International Behavior Analyst (IBA)" mean?',
    a: [
      'IBA is a credential of the International Behavior Analysis Organization (IBAO) for behavior analysts, especially outside North America. It requires a degree, supervised practice and an exam, and is maintained through continuing education.',
      'A behavior analyst does not diagnose and does not provide psychotherapy. In Germany the profession is not state-regulated; my credentials are listed with their sources on the About page.',
    ],
    link: { label: 'Credentials and background', href: '@about#credentials' },
  },
  {
    id: 'diagnosis-therapy',
    group: g.aba,
    q: 'Do you diagnose or provide therapy?',
    a: [
      'No. I offer behavior-analytic consultation, coaching, support and supervision. This does not replace a medical or psychological diagnosis or psychotherapy.',
      'I am happy to help you make sense of existing reports and to coordinate with your pediatrician, the SPZ or therapists if you wish.',
    ],
  },
  {
    id: 'which-children',
    group: g.families,
    q: 'Which children and families do you work with?',
    a: [
      `Families of autistic and other neurodivergent children whose behavior is making daily life hard right now – and the people who support these children at Kita, school and in therapy. Age groups: ${site.offer.ageRange.en}.`,
    ],
  },
  {
    id: 'online-languages',
    group: g.families,
    q: 'Is there online parent coaching for autism in English?',
    a: [
      `Yes. I work online in Germany and internationally in English, German, Croatian and Spanish, and in person in ${site.offer.city} – including home visits and visits to Kita or school. For video sessions I use a European provider (${site.contact.videoTool}) – no WhatsApp.`,
    ],
  },
  {
    id: 'bilingual',
    group: g.families,
    q: 'Does raising my autistic child bilingual cause speech delay?',
    a: [
      'Generally, no. Research reviews have not found that bilingual autistic children do worse in language development than monolingual autistic children. Giving up the home language is therefore usually not recommended.',
      site.checks.sourcesCheck,
    ],
    link: { label: 'For multilingual families', href: '@multilingual' },
  },
  {
    id: 'hitting-biting',
    group: g.families,
    q: 'What can I do when my autistic child hits or bites me?',
    a: [
      'Safety first: create distance, move dangerous objects away, speak calmly and briefly. Then look at the function: what happened just before, and what did the behavior achieve? That leads to a plan that shows your child another way. For self-injury, please also involve your doctor.',
    ],
    link: { label: 'More about challenging behavior', href: '@behavior' },
  },
  {
    id: 'toilet',
    group: g.families,
    q: 'How do I toilet-train my autistic child?',
    a: [
      'Rule out constipation and other medical causes with your pediatrician first. Then break the routine into small, predictable steps, adapt the bathroom to your child\'s senses, give your child a simple way to say "I need to go", and celebrate every step. No pressure – if stress shows, go back a step.',
    ],
    link: { label: 'More about toilet training', href: '@toilet' },
  },
  {
    id: 'english-consultant',
    group: g.expat,
    // Add the city to the question once confirmed (E1), e.g. "… in Berlin?" – it is a strong EN search phrase.
    q: 'Is there an English-speaking autism consultant in Germany?',
    a: [
      `Yes. I am a behavior analyst – not a psychologist or physician – offering assessment, a written plan and parent coaching in English, in person in ${site.offer.city} and online across Germany.`,
    ],
    link: { label: 'For expat families', href: '@expat' },
  },
  {
    id: 'behavior-support-english',
    group: g.expat,
    q: 'Can I get behavior analysis support in Germany in English?',
    a: [
      'Publicly funded, behavior-analytic support is rare in Germany and usually offered in German. I offer behavior consultation, assessment and parent coaching in English – following PFA and SBT – as a private service.',
    ],
  },
  {
    id: 'germany-pays',
    group: g.expat,
    q: 'Does Germany pay for autism support?',
    a: [
      'Partly. Speech therapy and occupational therapy can be prescribed through statutory health insurance. Autism-specific support can be funded by the youth welfare office (Jugendamt), e.g. as integration assistance under § 35a SGB VIII – decided case by case. My programs are private; some employers support family consultations, so it is worth asking.',
    ],
  },
  {
    id: 'process',
    group: g.process,
    q: 'How does working together start?',
    a: [
      'With a free 15-minute call. If it fits, we continue with a Clarity Consultation or a full Behavior Assessment & Plan, and then parent coaching or a focus program. You always know in advance what is included and what it costs.',
    ],
  },
  {
    id: 'cost',
    group: g.process,
    q: 'How much does it cost?',
    a: [
      'Fees depend on the program and scope. After the free 15-minute intro call you receive a written proposal with all services and the total fee – with no obligation.',
    ],
    link: { label: 'Programs at a glance', href: '@pricing' },
  },
  {
    id: 'in-person-online',
    group: g.process,
    q: 'Do you work in person or online?',
    a: [`${site.offer.serviceArea.en}. Travel time and costs are agreed transparently in advance.`],
  },
  {
    id: 'waiting',
    group: g.process,
    q: 'How soon can we start?',
    a: [`I reply to enquiries ${site.contact.responseTime.en}. ${site.offer.startClaim.en}`],
  },
  {
    id: 'data',
    group: g.data,
    q: 'How do you handle my child\'s data?',
    a: [
      'Confidentially and sparingly. The contact form deliberately asks for no diagnoses or health information; we discuss those details in person.',
      'Before we start, we agree in writing how reports are shared and how long they are kept. This website uses no cookies and no tracking.',
    ],
    link: { label: 'Privacy policy', href: '@privacy' },
  },
  {
    id: 'supervision-hours',
    group: g.pros,
    q: 'Does your supervision count toward BACB certification?',
    a: ['No. My supervision is professional guidance, case reflection and ethics in practice. I do not provide supervision hours toward BACB certification.'],
  },
  {
    id: 'training-process',
    group: g.pros,
    q: 'How does an in-house training work?',
    a: [
      'We agree on goals, group and typical situations from your setting in advance. The training itself is practical, with examples and exercises, in English, German or Croatian, and everyone receives a handout. I do not need personal case data for it.',
    ],
  },
];

export const commitments = [
  'Goals are agreed with the family and, as far as possible, with the child.',
  'I work assent-based: if your child shows stress or refusal, we pause.',
  'No punishment or aversive procedures, no compliance for its own sake, no "working through" distress.',
  'Suppressing stimming is not a goal. Autistic identity is respected.',
  'Parent coaching is at the heart of my work: you learn the steps yourself and use them in daily life.',
  'Close collaboration with speech therapy, occupational therapy, Kita and school.',
  'I share observations and progress data with you to check that the support helps – not to promise outcomes.',
];
