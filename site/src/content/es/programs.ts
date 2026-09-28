/**
 * Programas (ES). Mismos precios en euros que en todos los idiomas (site.ts → prices; propuestas hasta confirmar).
 * Native review needed (Marija's Spanish is working level – research §4.4).
 */
import type { Program, ProgramKey } from '../types';
import { site } from '../site';

const lang = 'español, inglés, alemán, croata';

export const programs: Partial<Record<ProgramKey, Program>> = {
  fit: {
    name: 'Llamada gratuita de 15 minutos',
    for: 'Para comprobar si mi enfoque encaja con su situación.',
    includes: ['Breve videollamada', 'Una valoración honesta de si puedo ayudar y cómo', 'Recomendación del siguiente paso'],
    duration: '15 minutos',
    format: `Vídeo · ${lang}`,
    price: 'free',
    cta: 'call',
  },
  clarity: {
    name: 'Consulta de orientación',
    for: 'Para familias que necesitan una opinión experta y un siguiente paso claro.',
    includes: ['Conversación en profundidad sobre su hijo o hija, el día a día y sus objetivos', 'Primera valoración desde el análisis de conducta', 'Resumen por escrito (2 páginas) con pasos concretos'],
    duration: '90 minutos + resumen',
    format: `Online o presencial · ${lang}`,
    price: 'clarity',
    cta: 'call',
  },
  assessment: {
    name: 'Evaluación de conducta y plan de apoyo',
    for: 'Para entender qué hay detrás de una conducta, con un plan que todo el entorno pueda usar.',
    includes: ['Entrevista inicial según el enfoque PFA', 'Dos observaciones: en casa, en la escuela infantil o por vídeo', 'Plan de apoyo por escrito para familia y escuela', 'Sesión de entrega del plan'],
    duration: '3–4 semanas',
    format: `Online y/o presencial · ${lang}`,
    price: 'assessment',
    cta: 'assessment',
  },
  coaching: {
    name: 'Programa de coaching para madres y padres',
    for: 'Para aplicar el plan en el día a día, paso a paso y con acompañamiento.',
    includes: ['Sesiones regulares (online o presenciales)', 'Ajuste continuo del plan', `Seguimiento por escrito entre sesiones, respuesta ${site.contact.responseTime.es}`],
    duration: '8 semanas (opción de 12)',
    format: `Online o presencial · ${lang}`,
    price: 'coaching',
    cta: 'call',
  },
  toilet: {
    name: 'Programa «Control de esfínteres»',
    for: 'Para familias cuyo hijo o hija en edad escolar sigue usando pañal o evita el baño.',
    includes: ['Valoración de comunicación, rutinas y sensibilidad sensorial', 'Plan paso a paso para casa y escuela', 'Acompañamiento semanal', 'Revisión pediátrica previa (p. ej. estreñimiento)'],
    duration: '6 semanas',
    format: `Online o presencial · ${lang}`,
    price: 'focus',
    cta: 'call',
  },
  calmDays: {
    name: 'Programa PFA-SBT «Días más tranquilos»',
    for: 'Para familias con rabietas, crisis, golpes o mordiscos en el día a día.',
    includes: ['Evaluación según el enfoque PFA', 'Plan para más seguridad y calma', 'Aprendizaje de comunicación y de tolerancia al «no» (SBT)', 'Acompañamiento regular'],
    duration: '8–12 semanas',
    format: `Online y presencial · ${lang}`,
    price: 'calmDays',
    cta: 'call',
  },
  intensive: {
    name: 'Home Intensive – intensivo en casa',
    for: 'Para avanzar de forma rápida y a fondo, con todas las personas que acompañan al niño o la niña.',
    includes: [`2–3 días en su casa – ${site.offer.travel}`, 'Trabajo con la familia y la escuela', 'Evaluación y plan por escrito', '6 semanas de seguimiento online'],
    duration: '2–3 días + 6 semanas',
    format: `Presencial en su casa + online · ${lang}`,
    price: 'intensive',
    cta: 'call',
    flagship: true,
  },
  language: {
    name: 'Asesoría para familias bilingües',
    for: 'Para familias que hablan varias lenguas y quieren mirar juntas la conducta y la comunicación de su hijo o hija.',
    includes: ['Plan lingüístico familiar', 'Ideas para la comunicación diaria – en cada lengua de la familia', 'Derivación a logopedia reconocida si hace falta'],
    duration: 'según acuerdo',
    format: `Online o presencial · ${lang}`,
    price: 'request',
    cta: 'multilingual',
  },
};
