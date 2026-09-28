/**
 * Preguntas frecuentes (ES, breve). Native review needed.
 */
import type { FaqItem } from '../types';
import { site } from '../site';

export const faq: FaqItem[] = [
  {
    id: 'que-es-analisis',
    group: 'ABA',
    q: '¿En qué consiste el análisis de conducta y cuánto cuesta la asesoría?',
    a: [
      'El análisis de conducta aplicado estudia cómo se relacionan la conducta y el entorno. No ofrezco horas de terapia, sino asesoría: evaluación, un plan por escrito y coaching para madres y padres. Los honorarios se indican en una propuesta por escrito tras la llamada gratuita de 15 minutos.',
    ],
    link: { label: 'Precios y programas', href: '@pricing' },
  },
  {
    id: 'online-espanol',
    group: 'ABA',
    q: '¿Hay asesoría online en español?',
    a: [`Sí, online en toda Europa. ${site.person.spanishScope} También atiendo en inglés, alemán y croata.`],
  },
  {
    id: 'familias-alemania',
    group: 'ABA',
    q: '¿Hay alguien que asesore a familias en español en Alemania?',
    a: [
      `Sí. Acompaño a familias hispanohablantes online en toda Alemania y de forma presencial en ${site.offer.city}. Soy analista de conducta, no psicóloga ni médica: no hago diagnósticos, pero le ayudo a entender el sistema alemán y a dar los primeros pasos.`,
    ],
  },
  {
    id: 'critica',
    group: 'ABA',
    q: '¿No es polémico el ABA?',
    a: [
      `La crítica a las prácticas antiguas centradas en la obediencia está justificada. Yo trabajo con Practical Functional Assessment (PFA) y Skill-Based Treatment (SBT): primero la seguridad y la confianza, sin castigos, y el niño o la niña puede pedir una pausa en cualquier momento. ${site.haltungNote}`,
    ],
  },
  {
    id: 'bilingue',
    group: 'ABA',
    q: '¿Criar a un niño bilingüe con autismo retrasa el lenguaje?',
    a: [
      'En general, no. Las revisiones de estudios no muestran que los niños con autismo (TEA) bilingües tengan un desarrollo del lenguaje peor que los monolingües. Por eso no se suele recomendar renunciar a la lengua familiar.',
      site.checks.sourcesCheck,
    ],
  },
  {
    id: 'bcba',
    group: 'ABA',
    q: '¿Qué significa «International Behavior Analyst (IBA)»?',
    a: [
      'IBA es una acreditación de la International Behavior Analysis Organization (IBAO) para analistas de conducta, sobre todo fuera de Norteamérica. Un analista de conducta no diagnostica ni ofrece psicoterapia.',
      `Mi titulación: ${site.person.jobTitle}`,
    ],
  },
];

export const commitments = [
  'Los objetivos se acuerdan con la familia y, en lo posible, con el niño o la niña.',
  'Trabajo con asentimiento: si muestra estrés o rechazo, hacemos una pausa.',
  'Sin castigos ni procedimientos aversivos.',
  'Suprimir el stimming no es un objetivo. Respetamos la identidad autista.',
  'Colaboro estrechamente con logopedia, terapia ocupacional, escuela infantil y escuela.',
  'El coaching para madres y padres es el núcleo de mi trabajo.',
  'Comparto abiertamente con la familia los datos de progreso.',
];
