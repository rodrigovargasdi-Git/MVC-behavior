/**
 * FAQ (DE). Antworten „answer-first“ (AEO), 40–80 Wörter. Keine Heilversprechen, keine Erfolgsquoten.
 * Unbestätigte Angaben kommen ausschließlich aus site.ts (Platzhalter).
 */
import type { FaqItem } from '../types';
import { site } from '../site';
import { approach } from './approach';

const g = {
  aba: 'Verhaltensanalyse, PFA/SBT und Haltung',
  families: 'Für Familien',
  process: 'Ablauf, Kosten und Termine',
  data: 'Daten und Vertraulichkeit',
  pros: 'Für Fachkräfte und Organisationen',
};

export const faq: FaqItem[] = [
  {
    id: 'was-ist-verhaltensanalyse',
    group: g.aba,
    q: 'Was ist Verhaltensanalyse?',
    a: [
      'Die Angewandte Verhaltensanalyse untersucht, wie Verhalten und Umgebung zusammenhängen: Was passiert davor, was danach, und welche Funktion hat ein Verhalten für die Person?',
      'Ich nutze diesen Blick nach dem Ansatz von PFA und SBT: Wir verstehen, wofür ein Verhalten gut ist, und bauen dann Fähigkeiten auf – mit der Zustimmung Ihres Kindes als Maßstab.',
    ],
    link: { label: 'Wie ich arbeite', href: '@approach' },
  },
  {
    id: 'kritik',
    group: g.aba,
    q: 'Was unterscheidet meine verhaltensanalytische Arbeit von der Kritik an ABA?',
    a: [
      'Autistische Menschen und Teile der Fachwelt kritisieren an früheren Formen von ABA zu Recht, dass sie auf Anpassung und Gehorsam zielten, teils mit Druck oder Strafen, und dass Kinder lernten, sich zu verstellen. Diese Kritik nehme ich ernst.',
      'Ich arbeite nach dem Ansatz von PFA und SBT und halte mich an sieben Zusagen: Ziele vereinbare ich mit der Familie und, so weit möglich, mit dem Kind. Ich arbeite zustimmungsbasiert und pausiere, sobald ein Kind Stress zeigt. Ich setze keine strafenden oder aversiven Verfahren ein. Stimming zu unterdrücken ist kein Ziel. Ich arbeite eng mit Logopädie, Ergotherapie, Kita und Schule zusammen. Elterncoaching ist der Kern meiner Arbeit. Verlaufsdaten teile ich offen mit Ihrer Familie.',
    ],
    link: { label: 'Wie ich arbeite', href: '@approach' },
  },
  {
    id: 'pfa-sbt',
    group: g.aba,
    q: 'Was bedeuten PFA und SBT?',
    a: [
      'PFA steht für Practical Functional Assessment, SBT für Skill-Based Treatment – ein Ansatz, der von Dr. Gregory Hanley und Kolleg:innen entwickelt wurde.',
      'Zuerst wird in einem ausführlichen Elterngespräch und einer kurzen, sicheren Beobachtung (IISCA) geklärt, wofür ein Verhalten gut ist. Danach lernt das Kind Kommunikation, Umgang mit Warten oder „Nein“ und Mitmachen – nur, solange es entspannt und beteiligt ist.',
      `Meine Qualifikation in diesem Ansatz: ${approach.level}`,
    ],
  },
  {
    id: 'iba',
    group: g.aba,
    q: 'Was bedeutet „International Behavior Analyst (IBA)“?',
    a: [
      'IBA ist ein Qualifikationsnachweis der International Behavior Analysis Organization (IBAO) für Verhaltensanalytiker:innen, vor allem außerhalb Nordamerikas. Er setzt ein Studium, supervidierte Praxis und eine Prüfung voraus und wird durch regelmäßige Fortbildung aufrechterhalten.',
      'Eine Verhaltensanalytikerin stellt keine Diagnosen und bietet keine Psychotherapie an. In Deutschland ist der Beruf nicht staatlich geregelt; meine Qualifikationen finden Sie mit Quelle auf der Über-mich-Seite.',
    ],
    link: { label: 'Qualifikation und Werdegang', href: '@about#qualifikation' },
  },
  {
    id: 'diagnose-therapie',
    group: g.aba,
    q: 'Stellen Sie Diagnosen oder bieten Sie Therapie an?',
    a: [
      'Nein. Ich biete verhaltensanalytische Beratung, Coaching, Begleitung und Supervision an. Das ersetzt keine ärztliche oder psychologische Diagnostik und keine Psychotherapie.',
      'Gern helfe ich, vorhandene Berichte einzuordnen, und stimme mich mit Kinderärztin, SPZ oder Therapeut:innen ab, wenn Sie das möchten.',
    ],
  },
  {
    id: 'welche-kinder',
    group: g.families,
    q: 'Mit welchen Kindern und Familien arbeiten Sie?',
    a: [
      `Ich begleite Familien autistischer Kinder und anderer neurodivergenter Kinder, deren Verhalten den Alltag gerade schwer macht – und die Menschen, die diese Kinder in Kita, Schule und Therapie begleiten. Altersgruppen: ${site.offer.ageRange.de}.`,
    ],
  },
  {
    id: 'online-sprachen',
    group: g.families,
    q: 'Gibt es verhaltensanalytische Beratung online auf Deutsch oder Englisch?',
    a: [
      `Ja. Ich berate online in Deutschland und international – auf Deutsch, Englisch, Kroatisch und Spanisch. Vor Ort arbeite ich in ${site.offer.city}, auch bei Ihnen zu Hause oder in Kita und Schule. Für Online-Termine nutze ich einen europäischen Videodienst (${site.contact.videoTool}), kein WhatsApp.`,
    ],
  },
  {
    id: 'zweisprachigkeit',
    group: g.families,
    q: 'Schadet Zweisprachigkeit der Sprachentwicklung bei Autismus?',
    a: [
      'Nach heutigem Forschungsstand in der Regel nicht. Studien finden bei mehrsprachig aufwachsenden autistischen Kindern im Allgemeinen keine zusätzlichen Nachteile gegenüber einsprachigen Kindern. Die Familiensprache aufzugeben, wird deshalb meist nicht empfohlen.',
      site.checks.sourcesCheck,
    ],
    link: { label: 'Mehr für mehrsprachige Familien', href: '@multilingual' },
  },
  {
    id: 'schlagen-beissen',
    group: g.families,
    q: 'Was tun, wenn mein autistisches Kind mich schlägt oder beißt?',
    a: [
      'Zuerst Sicherheit: Abstand schaffen, gefährliche Gegenstände wegräumen, ruhig und knapp sprechen. Danach lohnt der Blick auf die Funktion: Was ging voraus, was hat das Verhalten bewirkt? Daraus entsteht ein Plan, der Ihrem Kind einen anderen Weg zeigt. Bei Selbstverletzung bitte zusätzlich ärztlich abklären lassen.',
    ],
    link: { label: 'Mehr zu herausforderndem Verhalten', href: '@behavior' },
  },
  {
    id: 'nicht-sauber',
    group: g.families,
    q: 'Mein Kind ist 4 und noch nicht sauber – ist das bei Autismus normal?',
    a: [
      'Das kommt häufig vor. Viele autistische Kinder werden später sauber, oft wegen Kommunikation, Routinen oder Sinneswahrnehmung. Lassen Sie zuerst kinderärztlich abklären, ob z. B. Verstopfung eine Rolle spielt. Danach hilft ein kleinschrittiger, stressarmer Plan.',
    ],
    link: { label: 'Mehr zum Sauberwerden', href: '@toilet' },
  },
  {
    id: 'ablauf',
    group: g.process,
    q: 'Wie läuft die Zusammenarbeit ab?',
    a: [
      'Wir beginnen mit einem kostenlosen Kennenlernen (15 Minuten). Passt es, folgt ein Klarheitsgespräch oder direkt eine Verhaltensanalyse mit schriftlichem Plan. Danach begleite ich Sie im Elterncoaching oder in einem Fokusprogramm. Sie wissen vorher immer, was enthalten ist und was es kostet.',
    ],
  },
  {
    id: 'kosten',
    group: g.process,
    q: 'Was kostet die Beratung?',
    a: [
      'Das Honorar richtet sich nach Programm und Umfang. Nach dem kostenlosen 15-minütigen Kennenlerngespräch erhalten Sie ein schriftliches Angebot mit allen Leistungen und dem Gesamthonorar – ohne Verpflichtung.',
    ],
    link: { label: 'Programme im Überblick', href: '@pricing' },
  },
  {
    id: 'jugendamt-kosten',
    group: g.process,
    q: 'Übernimmt das Jugendamt die Kosten?',
    a: [
      'Eine Finanzierung über das Jugendamt, zum Beispiel als Eingliederungshilfe nach § 35a SGB VIII oder als Hilfe zur Erziehung, ist im Einzelfall möglich. Die Entscheidung trifft das Jugendamt. Ich kann eine Kostenübernahme nicht zusagen.',
      site.checks.jugendamtFunding,
    ],
  },
  {
    id: 'vor-ort-online',
    group: g.process,
    q: 'Arbeiten Sie vor Ort oder online?',
    a: [`${site.offer.serviceArea.de}. Reisezeit und Fahrtkosten kläre ich vorab transparent mit Ihnen.`],
  },
  {
    id: 'termine',
    group: g.process,
    q: 'Wie schnell bekomme ich einen Termin?',
    a: [
      `Auf Anfragen antworte ich ${site.contact.responseTime.de}. Wann ein Programm starten kann, hängt von meinen freien Plätzen ab; das sage ich Ihnen in meiner Antwort offen.`,
    ],
  },
  {
    id: 'daten',
    group: g.data,
    q: 'Wie gehen Sie mit den Daten meines Kindes um?',
    a: [
      'Vertraulich und sparsam. Über das Kontaktformular frage ich bewusst keine Diagnosen oder Gesundheitsangaben ab; solche Details besprechen wir erst im Gespräch.',
      'Wie wir Berichte und Unterlagen austauschen und wie lange sie aufbewahrt werden, halten wir vor Beginn schriftlich fest. Diese Website setzt keine Cookies und kein Tracking ein.',
    ],
    link: { label: 'Zur Datenschutzerklärung', href: '@privacy' },
  },
  {
    id: 'supervisionsstunden',
    group: g.pros,
    q: 'Wird die Supervision für eine Zertifizierung angerechnet?',
    a: ['Nein. Meine Supervision ist fachliche Begleitung, Fallreflexion und Ethik in der Praxis. Anrechenbare Supervisionsstunden für eine BACB-Zertifizierung biete ich nicht an.'],
  },
  {
    id: 'fortbildung-ablauf',
    group: g.pros,
    q: 'Wie läuft eine Inhouse-Fortbildung ab?',
    a: [
      'Wir klären vorab Ziel, Gruppe und typische Situationen aus Ihrem Alltag. Die Fortbildung selbst ist praxisnah, mit Beispielen und Übungen, auf Deutsch, Englisch oder Kroatisch. Danach erhalten alle ein Handout. Personenbezogene Falldaten brauche ich dafür nicht.',
    ],
  },
];

export const commitments = [
  'Ziele vereinbaren wir mit der Familie und, so weit möglich, mit dem Kind selbst.',
  'Ich arbeite zustimmungsbasiert: Zeigt Ihr Kind Stress oder Ablehnung, pausieren wir.',
  'Keine strafenden oder aversiven Verfahren, kein Gehorsam um seiner selbst willen, kein „Aussitzen“.',
  'Stimming zu unterdrücken ist kein Ziel. Autistische Identität wird respektiert.',
  'Elterncoaching ist der Kern meiner Arbeit: Sie lernen die Schritte selbst und setzen sie im Alltag um.',
  'Enge Zusammenarbeit mit Logopädie, Ergotherapie, Kita und Schule.',
  'Beobachtungen und Verlaufsdaten teile ich mit Ihnen, um zu prüfen, ob die Unterstützung hilft – nicht, um Ergebnisse zu versprechen.',
];
