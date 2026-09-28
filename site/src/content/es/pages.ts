/**
 * ES – versión breve (6 páginas + legales). Trato de «usted», «niños con autismo (TEA)».
 * Native review needed (data-review="translation"). Canales: comunidades hispanohablantes, no SEO
 * (análisis de mercado §3.4). Research §5.2 / §6.
 */
import type { PageContent } from '../types';
import type { PageKey } from '../../i18n/routes';
import { site } from '../site';
import { contact } from './contact';

const s = site;
const approachEs =
  'Trabajo con **Practical Functional Assessment (PFA)** y **Skill-Based Treatment (SBT)**, un enfoque desarrollado por el Dr. Gregory Hanley y colaboradores y publicado en revistas científicas, centrado en la seguridad, la confianza y el asentimiento del niño o la niña. Primero entendemos juntos qué consigue una conducta. Después, su hijo o hija aprende paso a paso formas más fáciles de conseguir lo mismo: comunicarse, tolerar «espera» y «no», y participar.';
const cred = (id: string) => {
  const c = s.person.credentials.find((x) => x.id === id);
  return c ? `${c.text.es}${c.verify ? ` · ${c.verify}` : ''}${c.note ? ` – ${c.note.es}` : ''}` : '';
};

export const pages: Partial<Record<PageKey, PageContent>> = {
  home: {
    title: 'Análisis de conducta para familias de niños con autismo',
    description:
      'Asesoría en análisis de conducta para familias de niños con autismo (TEA): desde Alemania y online. Programas claros con plan por escrito.',
    crumb: 'Inicio',
    sections: [
      {
        type: 'hero',
        variant: 'home',
        photo: 'studio',
        eyebrow: 'Análisis de conducta aplicado · PFA & SBT',
        title: 'Asesoría en análisis de conducta para familias de niños con autismo – *desde Alemania y online*',
        lead: 'Soy Marija Vargas, analista de conducta con experiencia en EE. UU. y Alemania. Ofrezco programas claros con un plan por escrito, en lugar de horas de terapia sin fin – con respeto y según el enfoque PFA y SBT.',
        primary: 'call',
        secondary: { label: 'Programas', href: '@pricing' },
      },
      {
        type: 'facts',
        items: [
          { label: 'Experiencia', value: s.experience.es },
          { label: 'Enfoque', value: 'PFA & SBT' },
          { label: 'Idiomas', value: 'español · inglés · alemán · croata' },
          { label: 'Inicio', value: s.offer.startClaim.es },
        ],
      },
      {
        type: 'cards',
        eyebrow: 'Para familias',
        title: 'En qué puedo *ayudar*',
        cols: 3,
        cards: [
          { label: 'Control de esfínteres', title: 'Sin pañal, sin presión', text: 'Cuando a los 4, 5 o 6 años todavía usa pañal.', link: { label: 'Más información', href: '@families#esfinteres' }, tone: 'sand' },
          { label: 'Conducta', title: 'Días más tranquilos', text: 'Rabietas, golpes o crisis: entender y cambiar.', link: { label: 'Más información', href: '@families#conducta' }, tone: 'lavender' },
        ],
        after: [{ label: 'Familias bilingües', href: '@multilingual' }],
      },
      {
        type: 'prose',
        bg: 'paper',
        eyebrow: 'Cómo trabajo',
        title: 'Con respeto *hacia el niño*',
        body: [approachEs],
        links: [{ label: 'Sobre mí y mi enfoque', href: '@about#como-trabajo' }],
      },
      { type: 'faq', eyebrow: 'Preguntas frecuentes', title: 'Preguntas *bienvenidas*', ids: ['familias-alemania', 'online-espanol', 'que-es-analisis', 'bcba'], more: false },
      { type: 'cta', title: 'Hablemos – *en su idioma.*', text: 'En una llamada gratuita de 15 minutos vemos si puedo ayudar y cómo.', primary: 'call' },
    ],
  },

  families: {
    title: 'Asesoría para familias: esfínteres y conducta',
    description:
      'Asesoría para familias de niños con autismo (TEA): control de esfínteres, rabietas y conductas desafiantes – online y en Alemania.',
    crumb: 'Familias',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Para familias',
        title: 'Asesoría para familias: *control de esfínteres y conductas desafiantes*',
        lead: 'Cuando la conducta marca todo el día, no necesita culpables, sino a alguien que mire con usted con calma, y un plan que encaje con su hijo o hija y con su vida.',
        photo: 'officeBeige',
        primary: 'call',
      },
      {
        type: 'answers',
        items: [
          {
            id: 'esfinteres',
            q: '¿Cómo enseñar a ir al baño a un niño con autismo?',
            a: [
              'Primero, que el pediatra revise si hay estreñimiento u otra causa médica: es un motivo frecuente de bloqueo. Luego dividimos el camino al baño en pasos pequeños y previsibles (por ejemplo, con pictogramas), adaptamos el baño a sus sentidos y celebramos cada avance. Sin presión: si aparece estrés, retrocedemos un paso.',
            ],
          },
          {
            id: 'conducta',
            q: 'Mi hijo autista me pega, ¿qué puedo hacer?',
            a: [
              'Primero la seguridad: tome distancia, aparte objetos peligrosos y hable con calma y pocas palabras. Castigar no ayuda en ese momento. Después miramos la función: ¿qué pasó justo antes y qué consiguió con esa conducta? Con PFA y SBT su hijo o hija aprende una forma más fácil y segura de decir lo mismo. En caso de emergencia, llame al 112.',
            ],
          },
        ],
      },
      {
        type: 'programs',
        bg: 'paper',
        eyebrow: 'Programas',
        title: 'Programas *en resumen*',
        intro: 'Cada programa tiene un alcance fijo, resultados por escrito y un precio «desde» que conoce de antemano.',
        programs: ['clarity', 'assessment', 'coaching', 'toilet', 'calmDays'],
      },
      { type: 'cta', title: 'El primer paso: *una conversación.*', text: 'Cuénteme brevemente quién es y dónde vive. Los detalles los hablamos en persona.', primary: 'call' },
    ],
  },

  multilingual: {
    title: 'Familias bilingües: lenguaje y conducta',
    description: '¿Niño bilingüe con autismo que no habla? Bilingüismo y autismo: qué dice la investigación y cómo acompañamos a familias bilingües en Alemania.',
    crumb: 'Familias bilingües',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Familias bilingües',
        title: 'Familias bilingües: *lenguaje y conducta de la mano*',
        lead: '¿Español en casa y alemán en la escuela infantil? Crecer con varias lenguas es un regalo, y en niños con autismo plantea muchas preguntas. Hablo croata, alemán, inglés y español y miro la conducta y la comunicación en cada lengua de la familia.',
        photo: 'coast',
        primary: 'multilingual',
      },
      {
        type: 'answers',
        items: [
          {
            q: '¿El bilingüismo perjudica a un niño con autismo?',
            a: [
              'En general, no. Las revisiones de estudios no muestran que los niños con autismo bilingües tengan un desarrollo del lenguaje peor que los monolingües. Renunciar a la lengua familiar, en cambio, puede debilitar el vínculo con la familia y la cultura.',
              s.checks.sourcesCheck,
            ],
          },
          {
            q: 'Mi hijo bilingüe no habla, ¿qué hago?',
            a: [
              'Consulte con el pediatra y con logopedia para una valoración. Lo importante es que ya tenga una forma de comunicarse: gestos, pictogramas o un dispositivo; según lo que se sabe hoy, estas ayudas no frenan el habla. Asesoro sobre conducta y comunicación en el día a día multilingüe.',
            ],
          },
        ],
      },
      { type: 'programs', eyebrow: 'Servicio', title: 'Asesoría para *familias bilingües*', programs: ['language'] },
      { type: 'cta', title: 'Cada lengua *cuenta.*', text: 'Cuéntenos qué idiomas se hablan en su familia.', primary: 'multilingual' },
    ],
  },

  about: {
    title: 'Sobre mí: Marija Vargas',
    description: 'Marija Vargas: analista de conducta con experiencia en EE. UU. y Alemania, enfoque PFA & SBT, cuatro idiomas. Cualificaciones y cómo trabajo.',
    crumb: 'Sobre mí',
    ogType: 'profile',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Sobre mí',
        title: 'Marija Vargas – análisis de conducta con experiencia en *EE. UU. y Alemania*',
        lead: 'Fundé mi empresa de asesoría para ofrecer a familias, profesionales y escuelas un acompañamiento experto, cercano y multilingüe, con programas claros y planes por escrito.',
        photo: 'berlin',
        primary: 'call',
      },
      {
        type: 'defs',
        eyebrow: 'Cualificaciones',
        title: 'Verificables, *con fuente*',
        items: [
          { dt: 'Experiencia', dd: s.experience.es },
          { dt: 'Análisis de conducta', dd: cred('iba') },
          { dt: 'PFA & SBT', dd: cred('pfa-sbt') },
          { dt: 'Máster', dd: cred('ma') },
          { dt: 'Grado', dd: cred('ba') },
          { dt: 'Reconocimiento', dd: cred('recognition') },
          { dt: 'Idiomas', dd: `${s.person.languages.es}. ${s.person.spanishScope}` },
        ],
      },
      {
        type: 'prose',
        id: 'como-trabajo',
        bg: 'paper',
        eyebrow: 'Cómo trabajo',
        title: 'Con respeto, *sin obediencia forzada*',
        intro: 'La crítica a las prácticas antiguas centradas en la obediencia y en «que no se note» está justificada. Por eso digo abiertamente cómo trabajo.',
        body: [approachEs],
      },
      { type: 'commitments', eyebrow: 'Mis principios', title: 'En qué puede *reconocerlo*' },
      {
        type: 'photo',
        bg: 'paper',
        photo: 'realSmile',
        photo2: 'realGarden',
        eyebrow: 'Personal',
        title: 'Más allá *del trabajo*',
        body: [
          'Croacia, EE. UU., Alemania: sé por experiencia propia lo que es llegar a un país, un sistema y un idioma nuevos.',
          s.personal.path.es,
          s.personal.why.es,
          s.personal.motherhood.es,
        ],
      },
      { type: 'cta', title: 'Conozcámonos.', text: '15 minutos, gratis, en su idioma.', primary: 'call' },
    ],
  },

  pricing: {
    title: 'Programas y honorarios',
    description: 'Programas para familias: evaluación y plan de apoyo, coaching para madres y padres – honorarios a consultar.',
    crumb: 'Programas',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Programas',
        title: 'Programas *y honorarios*',
        lead: `Programas con un alcance claro, en lugar de horas sin fin: sabe de antemano qué incluye y cuánto dura. Recibe los honorarios en una propuesta por escrito tras la llamada gratuita. ${s.offer.startClaim.es}`,
        primary: 'call',
      },
      { type: 'programs', eyebrow: 'Para familias', title: 'Programas para *familias*', programs: ['fit', 'clarity', 'assessment', 'coaching', 'intensive'] },
      { type: 'programs', bg: 'paper', eyebrow: 'Programas específicos', title: 'Para un *tema concreto*', programs: ['toilet', 'calmDays'] },
      {
        type: 'defs',
        eyebrow: 'Bueno saber',
        title: 'Condiciones',
        items: [
          { dt: 'Llamada inicial', dd: `15 minutos por vídeo, gratuita. ${s.prices.freeCall}` },
          { dt: 'Desplazamientos', dd: 'Para sesiones presenciales fuera de mi ciudad y para el Home Intensive se cobran gastos de viaje, indicados de antemano en la propuesta.' },
          { dt: 'Cancelación', dd: s.prices.cancellation },
          { dt: 'Pago', dd: s.prices.payment },
        ],
      },
      { type: 'cta', title: '¿No sabe qué programa *encaja?*', text: 'Para eso está la llamada gratuita.', primary: 'call' },
    ],
  },

  contact: { title: contact.title, description: contact.description, crumb: contact.crumb, sections: [] },
  thanks: { title: contact.thanks.title, description: contact.thanks.description, crumb: contact.thanks.crumb, sections: [] },
  imprint: { title: 'Aviso legal', description: `Aviso legal de ${s.brand.name}. Traducción de cortesía; la versión alemana es la vinculante.`, crumb: 'Aviso legal', sections: [] },
  privacy: { title: 'Política de privacidad', description: 'Sin cookies, sin seguimiento, sin terceros. Traducción de cortesía; la versión alemana es la vinculante.', crumb: 'Privacidad', sections: [] },
};
