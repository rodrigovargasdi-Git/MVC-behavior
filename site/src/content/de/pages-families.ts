/**
 * DE – Familien: Übersicht, Themenseiten (Sauber werden, herausforderndes Verhalten,
 * nach der Diagnose), mehrsprachige und internationale Familien. Briefs: Research §6 Nr. 2–10.
 * Regeln: Antwort zuerst, keine Heil- oder Erfolgsversprechen, „Therapie“ nur als Suchbegriff,
 * für die Schwester in DE nie „Logopädie“/„Sprachtherapie“.
 */
import type { PageContent } from '../types';
import type { PageKey } from '../../i18n/routes';
import { site } from '../site';

const updated = '2026-09-28';
const s = site;

export const familyPages: Partial<Record<PageKey, PageContent>> = {
  families: {
    title: 'Autismus-Beratung für Eltern – online & vor Ort',
    description:
      'Beratung für Familien autistischer Kinder: Verhaltensanalyse, schriftlicher Förderplan und Elterncoaching – online in Europa und vor Ort, in vier Sprachen.',
    crumb: 'Familien',
    service: {
      name: 'Beratung und Programme für Familien autistischer Kinder',
      description: 'Verhaltensanalyse nach dem PFA-Ansatz, schriftlicher Förderplan, Elterncoaching und Fokusprogramme für Familien autistischer Kinder.',
      audience: 'Eltern und Familien autistischer Kinder',
      price: 'clarity',
    },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Für Familien',
        title: 'Beratung für Familien autistischer Kinder: *verstehen, planen, begleiten*',
        lead: 'Wenn Verhalten den Alltag bestimmt, brauchen Sie keine Schuldzuweisung, sondern jemanden, der mit Ihnen genau hinschaut – und einen Plan, der zu Ihrem Kind und Ihrem Leben passt.',
        photo: 'officeBeige',
        primary: 'call',
        secondary: { label: 'Programme & Honorar', href: '@pricing' },
      },
      {
        type: 'list',
        eyebrow: 'Wann ich unterstützen kann',
        title: 'Vielleicht kennen *Sie das.*',
        items: [
          'Kommunikation, die für alle frustrierend ist – und wenig Kontakt zu anderen Kindern.',
          'Wutausbrüche, Schlagen oder Beißen – und die Frage, was Ihr Kind damit mitteilen will.',
          'Ein Kind im Kita- oder Schulalter, das noch Windeln trägt.',
          'Eine frische Diagnose, viele Ratschläge – aber kein Plan.',
          'Viele Beteiligte – Kita, Schule, Therapien, Ämter – und niemand, der das Bild zusammenführt.',
          'Das Gefühl, als Eltern überfordert zu sein. Das ist kein Versagen, sondern ein Zeichen, dass Sie Unterstützung verdienen.',
        ],
      },
      {
        type: 'cards',
        bg: 'paper',
        eyebrow: 'Themen',
        title: 'Womit ich Familien *helfe*',
        cols: 3,
        cards: [
          { label: 'Kommunikation', title: 'Sich mitteilen, mitspielen', text: 'Wenn Ihr Kind sich schwer mitteilen kann oder wenig Kontakt zu anderen Kindern findet.', link: { label: 'Mehr zu Kommunikation', href: '@families#kommunikation' }, tone: 'sea' },
          { label: 'Sauber werden', title: 'Ohne Druck zur Toilette', text: 'Wenn Ihr Kind mit 4, 5 oder 6 Jahren noch Windeln trägt oder die Toilette meidet.', link: { label: 'Zum Thema Sauberwerden', href: '@toilet' }, tone: 'sand' },
          { label: 'Herausforderndes Verhalten', title: 'Ruhigere Tage', text: 'Wutausbrüche, Meltdowns, Schlagen oder Beißen verstehen – und sichere Alternativen aufbauen.', link: { label: 'Zu herausforderndem Verhalten', href: '@behavior' }, tone: 'lavender' },
          { label: 'Nach der Diagnose', title: 'Erste Schritte', text: 'Orientierung für die ersten Wochen: Was ist jetzt wichtig, was kann warten?', link: { label: 'Zu den ersten Schritten', href: '@diagnosis' }, tone: 'sand' },
          { label: 'Mehrsprachigkeit', title: 'Sprache und Verhalten', text: 'Für Familien, in denen mehrere Sprachen gesprochen werden – Verhalten und Kommunikation in jeder Familiensprache.', link: { label: 'Für mehrsprachige Familien', href: '@multilingual' }, tone: 'lavender' },
          { label: 'Internationale Familien', title: 'Neu in Deutschland', text: 'Orientierung im deutschen System – auf Englisch, Kroatisch, Spanisch oder Deutsch.', link: { label: 'Für internationale Familien', href: '@expat' }, tone: 'sea' },
        ],
      },
      {
        type: 'programs',
        eyebrow: 'Programme',
        title: 'Programme im *Überblick*',
        intro: 'Vom Einstieg bis zum Intensivprogramm: Jedes Programm hat einen festen Umfang und schriftliche Ergebnisse. Das Honorar erhalten Sie nach dem kostenlosen Kennenlerngespräch als Angebot.',
        programs: ['clarity', 'assessment', 'coaching', 'intensive'],
        note: 'Außerdem: [Fokusprogramme für Sauberwerden, herausforderndes Verhalten und die Zeit nach der Diagnose](@pricing#fokusprogramme) sowie laufende Fallbegleitung mit Supervision Ihres häuslichen Programms.',
      },
      {
        type: 'answers',
        bg: 'paper',
        eyebrow: 'Gut zu wissen',
        title: 'Wie ich mit Familien *arbeite*',
        items: [
          {
            id: 'verhaltensanalyse',
            q: 'Was ist eine funktionale Verhaltensanalyse?',
            a: [
              'Eine funktionale Verhaltensanalyse klärt, wann ein Verhalten auftritt, was ihm vorausgeht und was es für Ihr Kind bewirkt – zum Beispiel Ruhe, Nähe, etwas Bestimmtes zu bekommen oder einer Anforderung zu entgehen. Ich arbeite dabei nach dem Ansatz von Practical Functional Assessment (PFA): erst ein ausführliches Gespräch mit Ihnen, dann eine kurze, sichere Beobachtung.',
              'Was Sie bekommen:',
            ],
            list: [
              'Einen schriftlichen Förderplan in verständlicher Sprache',
              'Konkrete Schritte für zu Hause, Kita, Schule und Schulbegleitung',
              'Ein Übergabegespräch – auf Wunsch mit dem ganzen Team Ihres Kindes',
              'Ehrlichkeit darüber, wofür ich nicht zuständig bin: keine Diagnose, keine Notfallversorgung',
            ],
          },
          {
            id: 'elterncoaching',
            q: 'Was ist Elterncoaching?',
            a: [
              'Im Elterncoaching lernen Sie, die Schritte aus dem Förderplan selbst im Alltag umzusetzen. Wir üben an echten Situationen – Morgenroutine, Anziehen, Übergänge, Spielzeit –, werten gemeinsam aus und passen den Plan an. Das Programm läuft 8 oder 12 Wochen, online oder vor Ort, mit schriftlichen Check-ins zwischen den Terminen.',
              'Beispiele für Ziele, die Familien sich setzen: ein ruhigerer Start in den Tag, weniger Eskalationen bei Übergängen, mehr Möglichkeiten für Ihr Kind, „Pause“ oder „Hilfe“ zu sagen. Versprechen kann ich Ergebnisse nicht – aber wir prüfen gemeinsam, ob der Plan hilft.',
            ],
          },
          {
            id: 'kommunikation',
            q: 'Wie unterstützen Sie Kommunikation und soziale Fähigkeiten?',
            a: [
              'Wir schauen, wie Ihr Kind sich heute schon mitteilt – mit Worten, Gesten, Bildern oder einem Talker – und bauen darauf auf: Wünsche äußern, um Hilfe oder eine Pause bitten, abwechseln, gemeinsam spielen. Geübt wird in echten Alltagssituationen, zu Hause, in der Kita oder mit Geschwistern.',
            ],
          },
          {
            id: 'kita-schule',
            q: 'Kommen Sie auch in Kita oder Schule?',
            a: [
              'Ja. Auf Wunsch beobachte ich in Kita oder Schule, berate das Team und stimme den Förderplan mit Erzieher:innen, Lehrkräften und der Schulbegleitung ab – damit alle in dieselbe Richtung arbeiten. [Mehr für Kitas und Schulen](@organizations)',
            ],
          },
          {
            id: 'online-vor-ort',
            q: 'Online oder vor Ort?',
            a: [
              `Beides. Elterncoaching und Planbesprechungen funktionieren online sehr gut. Beobachtungen und Home Intensives finden auf Wunsch bei Ihnen zu Hause, in der Kita oder Schule statt. ${s.offer.serviceArea.de}.`,
            ],
          },
          {
            id: 'kosten',
            q: 'Was kostet das?',
            a: ['Das Honorar richtet sich nach Programm und Umfang. Nach dem kostenlosen 15-minütigen Kennenlerngespräch erhalten Sie ein schriftliches Angebot. [Programme im Überblick](@pricing)'],
          },
        ],
      },
      {
        type: 'steps',
        eyebrow: 'Ablauf',
        title: 'So läuft die *Zusammenarbeit*',
        intro: 'Sie müssen noch nicht wissen, welche Hilfe Sie brauchen. Dafür ist das Kennenlernen da.',
        steps: [
          { title: 'Kennenlernen', text: 'Kostenlos, 15 Minuten per Video: Wir klären, ob und wie ich helfen kann.' },
          { title: 'Analyse & Plan', text: 'Ich verstehe, was hinter dem Verhalten steckt, und Sie erhalten einen schriftlichen Plan.' },
          { title: 'Begleitung', text: 'Im Coaching setzen wir den Plan gemeinsam um und passen ihn an Ihren Alltag an.' },
        ],
      },
      { type: 'faq', eyebrow: 'Fragen von Eltern', title: 'Gut zu *wissen*', ids: ['welche-kinder', 'ablauf', 'jugendamt-kosten', 'daten'] },
      {
        type: 'cta',
        title: 'Der erste Schritt: *ein Gespräch.*',
        text: 'Schreiben Sie mir kurz, wer Sie sind und in welcher Sprache Sie sprechen möchten. Details zu Ihrem Kind besprechen wir im Gespräch.',
        primary: 'call',
        secondary: { label: 'Programme & Honorar', href: '@pricing' },
      },
    ],
  },

  toilet: {
    title: 'Kind wird nicht sauber – Toilettentraining bei Autismus',
    description:
      'Ihr Kind ist 4, 5 oder 6 und wird nicht sauber? Typische Hürden bei Autismus, was zuerst ärztlich zu klären ist, und das 6-Wochen-Programm „Sauber werden“.',
    crumb: 'Sauber werden',
    service: { name: 'Fokusprogramm „Sauber werden“', description: 'Sechswöchige Begleitung beim Toilettentraining autistischer Kinder.', audience: 'Eltern autistischer Kinder', price: 'focus' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Familien · Sauber werden',
        title: 'Ihr Kind wird nicht sauber? *Toilettentraining bei Autismus*',
        lead: 'Viele autistische Kinder brauchen länger, bis sie die Toilette nutzen – und viele Eltern hören nur „Das kommt schon“. Wenn Ihr Kind mit 4, 5 oder 6 Jahren noch Windeln trägt, gibt es gute, stressarme Wege.',
        primary: 'call',
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Ab wann ist „nicht sauber“ ein Thema?',
            a: [
              'Die meisten Kinder werden zwischen zwei und vier Jahren tagsüber sauber; die Spanne ist groß, und bei autistischen Kindern dauert es oft länger. Ein Thema wird es, wenn Ihr Kind mit etwa vier Jahren tagsüber keine Fortschritte zeigt, die Toilette stark meidet oder Kita und Schule Druck machen.',
            ],
          },
          {
            q: 'Welche Hürden sind bei Autismus typisch?',
            a: ['Selten ist es „Unwille“. Häufiger stecken dahinter:'],
            list: [
              '**Sinneswahrnehmung:** das Geräusch der Spülung, ein kalter Sitz, Gerüche, fremde Toiletten',
              '**Routinen:** Die Windel ist vertraut, Veränderung ist anstrengend',
              '**Kommunikation:** Es fehlt ein einfacher Weg, zu zeigen „Ich muss“',
              '**Körpersignale:** Blase und Darm werden schwer wahrgenommen',
              '**Angst:** vor dem Hinfallen, dem Loch oder dem Wasser',
            ],
          },
          {
            q: 'Was sollte zuerst ärztlich abgeklärt werden?',
            a: [
              'Verstopfung ist bei autistischen Kindern häufig und ein häufiger Grund, warum Toilettentraining nicht klappt. Lassen Sie deshalb zuerst kinderärztlich untersuchen, ob Verstopfung, Harnwegsinfekte oder andere körperliche Ursachen eine Rolle spielen.',
            ],
          },
          {
            q: 'Wie funktioniert Toilettentraining ohne Druck?',
            a: [
              'Wir zerlegen den Weg zur Toilette in kleine Schritte, machen ihn vorhersehbar – etwa mit Bildkarten –, passen die Umgebung an die Sinne Ihres Kindes an und feiern jeden Fortschritt. Zeigt Ihr Kind Stress, gehen wir einen Schritt zurück. Kita oder Schule beziehen wir auf Wunsch ein, damit alle gleich vorgehen.',
            ],
          },
        ],
      },
      {
        type: 'programs',
        bg: 'paper',
        eyebrow: 'Programm',
        title: 'Das 6-Wochen-Programm *„Sauber werden“*',
        programs: ['toilet'],
      },
      { type: 'author', updated },
      {
        type: 'related',
        eyebrow: 'Weiterlesen',
        title: 'Verwandte *Themen*',
        links: [
          { label: 'Nach der Diagnose: erste Schritte', href: '@diagnosis' },
          { label: 'Alle Angebote für Familien', href: '@families' },
        ],
      },
      { type: 'cta', title: 'Schritt für Schritt, *ohne Druck.*', text: 'Im kostenlosen Kennenlernen klären wir, ob das Programm „Sauber werden“ zu Ihrem Kind passt.', primary: 'call' },
    ],
  },

  behavior: {
    title: 'Herausforderndes Verhalten bei Kindern verstehen',
    description:
      'Ihr autistisches Kind schlägt, beißt oder hat Meltdowns? Sicherheit zuerst, Verhalten als Kommunikation verstehen – und das Programm „Ruhigere Tage“.',
    crumb: 'Herausforderndes Verhalten',
    service: { name: 'Fokusprogramm „Ruhigere Tage“', description: 'Begleitung bei herausforderndem Verhalten nach dem Ansatz von PFA und SBT.', audience: 'Eltern autistischer Kinder', price: 'calmDays' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Familien · Herausforderndes Verhalten',
        title: 'Herausforderndes Verhalten verstehen – *und den Alltag gemeinsam verändern*',
        lead: 'Wutausbrüche, Schlagen, Beißen, Weglaufen oder Selbstverletzung: Hinter herausforderndem Verhalten steckt fast immer ein Grund. Wenn wir ihn verstehen, kann Ihr Kind einen anderen, sicheren Weg lernen.',
        primary: 'call',
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Keine Notfallversorgung',
        body: [
          'Wenn Ihr Kind oder andere in akuter Gefahr sind, rufen Sie den Notruf **112**. Ärztlicher Bereitschaftsdienst: **116 117**. Bei Selbstverletzung stimme ich mich immer mit der behandelnden Ärztin oder dem behandelnden Arzt ab.',
        ],
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Was tun, wenn mein Kind mich schlägt oder beißt?',
            a: [
              'Zuerst Sicherheit – für Ihr Kind, für Sie und für Geschwister: Abstand schaffen, Gefährliches wegräumen, ruhig und knapp sprechen. Strafen hilft in diesem Moment nicht. Danach schauen wir gemeinsam auf die Funktion: Was ging voraus, was hat das Verhalten bewirkt? Daraus entsteht ein Plan für eine andere, sichere Form der Kommunikation.',
            ],
          },
          {
            q: 'Warum ist Verhalten Kommunikation?',
            a: [
              'Jedes Verhalten erfüllt einen Zweck. Es kann heißen: „Das ist mir zu viel“, „Ich will das haben“, „Hilf mir“ oder „Ich brauche eine Pause“. Nach dem Ansatz von PFA finden wir heraus, was es für Ihr Kind bedeutet. Mit SBT lernt Ihr Kind, dasselbe auf einem leichteren Weg zu sagen – und mit Warten oder einem „Nein“ besser zurechtzukommen.',
            ],
          },
          {
            q: 'Meltdown oder Wutanfall – was ist der Unterschied?',
            a: [
              'Ein Wutanfall ist oft auf ein Ziel gerichtet und endet, wenn das Ziel erreicht oder aufgegeben ist. Ein Meltdown ist eine Überlastungsreaktion: Das Nervensystem ist überfordert, Ihr Kind kann in dem Moment nicht anders. Beides verdient Verständnis – aber beides braucht unterschiedliche Antworten.',
            ],
          },
          {
            q: 'Wie beruhige ich mein Kind bei einem Meltdown?',
            a: ['In der akuten Situation helfen meist:'],
            list: [
              'Reize reduzieren: Licht, Lärm, Zuschauer',
              'Wenig sprechen, keine Fragen und keine Forderungen',
              'Sicherheit geben – Nähe anbieten, nicht aufdrängen',
              'Danach: Ruhe, Wasser, kein Nachbesprechen im Moment',
              'Später in Ruhe notieren, was davor war – das hilft der Analyse',
            ],
          },
        ],
      },
      {
        type: 'programs',
        bg: 'paper',
        eyebrow: 'Programme',
        title: 'Programm *„Ruhigere Tage“*',
        intro: 'Für die meisten Familien beginnt es mit einer Verhaltensanalyse. Ist der Alltag stark belastet, begleitet Sie das Programm „Ruhigere Tage“ über 8 bis 12 Wochen.',
        programs: ['calmDays', 'assessment'],
      },
      { type: 'faq', eyebrow: 'Fragen', title: 'Gut zu *wissen*', ids: ['pfa-sbt', 'was-ist-verhaltensanalyse', 'diagnose-therapie'] },
      { type: 'author', updated },
      {
        type: 'related',
        eyebrow: 'Weiterlesen',
        title: 'Verwandte *Themen*',
        links: [
          { label: 'Wie ich arbeite: PFA & SBT', href: '@approach' },
          { label: 'Beratung für Kitas und Schulen', href: '@organizations' },
        ],
      },
      { type: 'cta', title: 'Mehr Ruhe beginnt mit *Verstehen.*', text: 'Im kostenlosen Kennenlernen klären wir, was Ihre Familie jetzt braucht.', primary: 'call' },
    ],
  },

  diagnosis: {
    title: 'Autismus-Diagnose – und jetzt? Erste Schritte',
    description:
      'Gerade die Autismus-Diagnose erhalten? Was in den ersten 90 Tagen zählt, welche Hilfen es in Deutschland gibt, und was tun, wenn Ihr Kind noch nicht spricht.',
    crumb: 'Nach der Diagnose',
    service: { name: 'Fokusprogramm „Erste Schritte“', description: 'Sechswöchige Orientierung für Familien nach einer Autismus-Diagnose.', audience: 'Eltern autistischer Kinder', price: 'focus' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Familien · Nach der Diagnose',
        title: 'Autismus-Diagnose – und jetzt? *Erste Schritte für Ihre Familie*',
        lead: 'Die Diagnose ist da, und mit ihr viele Fragen, Formulare und gut gemeinte Ratschläge. Sie müssen nicht alles auf einmal lösen. Hier steht, was in den ersten Wochen wirklich zählt.',
        primary: 'call',
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Die ersten 90 Tage: Was zählt wirklich?',
            a: ['Nicht alles ist gleich dringend. Diese Schritte helfen, Ordnung zu schaffen:'],
            list: [
              'Durchatmen: Die Diagnose verändert nicht Ihr Kind, sondern Ihr Verständnis.',
              'Den Befund in Ruhe lesen und Fragen für das Nachgespräch notieren.',
              'Eine Form der Kommunikation stärken, die jetzt funktioniert – Worte, Gesten, Bilder oder ein Talker.',
              'Einen einfachen, vorhersehbaren Tagesablauf schaffen.',
              'Hilfen und Anträge sortieren: Was ist jetzt wichtig, was kann warten?',
              'Sich selbst Unterstützung holen: Austausch mit anderen Eltern, Beratung, Entlastung.',
            ],
          },
          {
            q: 'Welche Hilfen gibt es in Deutschland?',
            a: [
              'Je nach Alter und Situation kommen zum Beispiel Frühförderung, zusätzliche Unterstützung in der Kita, Schulbegleitung, Logopädie und Ergotherapie auf Rezept sowie autismusspezifische Förderung über die Eingliederungshilfe (§ 35a SGB VIII) infrage. Welche Hilfe passt und wer sie bezahlt, wird im Einzelfall entschieden.',
              '[Für internationale Familien erkläre ich das System auch auf Englisch.](@expat)',
            ],
          },
          {
            q: 'Mein Kind spricht noch nicht – was jetzt?',
            a: [
              'Viele autistische Kinder sprechen später oder anders. Wichtig ist, dass Ihr Kind schon jetzt einen Weg hat, sich mitzuteilen – mit Gesten, Bildkarten, Gebärden oder einem Sprachausgabegerät. Solche Hilfen bremsen das Sprechen nach heutigem Wissensstand nicht. Eine logopädische Abklärung in einer anerkannten Praxis ist sinnvoll; ich stimme mich gern mit ihr ab.',
            ],
          },
        ],
      },
      {
        type: 'programs',
        bg: 'paper',
        eyebrow: 'Programme',
        title: 'Programm *„Erste Schritte“*',
        intro: 'Sechs Wochen, in denen wir sortieren, planen und die ersten alltagsnahen Schritte gehen. Wer zuerst nur eine Einschätzung braucht, beginnt mit dem Klarheitsgespräch.',
        programs: ['firstSteps', 'clarity'],
      },
      { type: 'author', updated },
      {
        type: 'related',
        eyebrow: 'Weiterlesen',
        title: 'Verwandte *Themen*',
        links: [
          { label: 'Mehrsprachige Familien: Sprache und Verhalten', href: '@multilingual' },
          { label: 'Internationale Familien in Deutschland', href: '@expat' },
          { label: 'Alle Angebote für Familien', href: '@families' },
        ],
      },
      { type: 'cta', title: 'Sie müssen das *nicht allein sortieren.*', text: 'Im kostenlosen Kennenlernen klären wir, welcher erste Schritt für Ihre Familie passt.', primary: 'call' },
    ],
  },

  multilingual: {
    title: 'Mehrsprachige Familien: Sprache & Verhalten',
    description:
      'Zweisprachige Erziehung und Autismus: Schadet Mehrsprachigkeit? Was tun, wenn Ihr Kind nur eine Sprache spricht? Beratung zu Sprache und Verhalten.',
    crumb: 'Mehrsprachige Familien',
    service: { name: 'Beratung für mehrsprachige Familien', description: 'Gemeinsame Beratung zu Verhalten und mehrsprachiger Entwicklung, mit Familien-Sprachplan.', audience: 'Mehrsprachige Familien autistischer Kinder' },
    sections: [
      {
        type: 'hero',
        eyebrow: 'Mehrsprachige Familien',
        title: 'Mehrsprachige Familien: *Sprache und Verhalten zusammen denken*',
        lead: 'Kroatisch zu Hause, Deutsch in der Kita, Englisch im Freundeskreis? Mehrsprachigkeit ist ein Geschenk – und wirft bei autistischen Kindern viele Fragen auf. Ich spreche selbst Kroatisch, Deutsch, Englisch und Spanisch und betrachte Verhalten und Kommunikation Ihres Kindes in jeder Familiensprache.',
        photo: 'coast',
        primary: 'multilingual',
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Schadet Zweisprachigkeit bei Autismus?',
            a: [
              'In der Regel nicht. Übersichtsarbeiten finden bei mehrsprachig aufwachsenden autistischen Kindern im Allgemeinen keine zusätzlichen Nachteile in der Sprachentwicklung gegenüber einsprachigen autistischen Kindern. Die Familiensprache aufzugeben, kann dagegen die Verbindung zu Großeltern, Kultur und Gefühlen schwächen.',
              s.checks.sourcesCheck,
            ],
          },
          {
            q: 'Mein Kind spricht nur eine Sprache – was tun?',
            a: [
              'Das ist häufig und für sich allein kein Grund zur Sorge: Kinder nutzen die Sprache, die sich im Alltag am meisten lohnt. Ein Familien-Sprachplan hilft: Wer spricht wann welche Sprache, und wo bekommt jede Sprache genug Raum? Wichtig ist, dass Ihr Kind in jeder Situation mindestens einen Weg hat, sich mitzuteilen.',
            ],
          },
          {
            q: 'Wann sollte ich eine logopädische Praxis aufsuchen?',
            a: [
              'Wenn Sie sich Sorgen um die Sprachentwicklung machen, lassen Sie sie ärztlich und logopädisch abklären – in einer anerkannten Praxis. Eine Sprachentwicklungsstörung zu diagnostizieren oder zu behandeln, gehört nicht zu meinem Angebot. Ich berate zu Verhalten und Kommunikation im mehrsprachigen Alltag und arbeite gern mit Ihrer Praxis zusammen.',
            ],
          },
        ],
      },
      { type: 'programs', bg: 'paper', eyebrow: 'Angebot', title: 'Beratung für *mehrsprachige Familien*', programs: ['language'] },
      { type: 'faq', eyebrow: 'Fragen', title: 'Gut zu *wissen*', ids: ['zweisprachigkeit', 'online-sprachen'] },
      { type: 'cta', title: 'Jede Sprache *zählt.*', text: 'Schreiben Sie mir, welche Sprachen in Ihrer Familie gesprochen werden. Ich melde mich mit einem Vorschlag.', primary: 'multilingual' },
    ],
  },

  expat: {
    title: 'Internationale Familien in Deutschland',
    description:
      'Neu in Deutschland mit einem autistischen Kind? Orientierung zu Diagnose, Kostenübernahme, Kita und Schule – auf Englisch, Kroatisch, Spanisch oder Deutsch.',
    crumb: 'Internationale Familien',
    sections: [
      {
        type: 'hero',
        eyebrow: 'Internationale Familien',
        title: 'Internationale Familien in Deutschland: *Unterstützung in Ihrer Sprache*',
        lead: 'Neu in Deutschland und ein Kind im Autismus-Spektrum? Ich helfe Ihnen, das deutsche System zu verstehen, und begleite Sie auf Englisch, Kroatisch, Spanisch oder Deutsch.',
        photo: 'berlin',
        primary: 'call',
        secondary: { label: 'Ausführlich auf Englisch', href: '/en/expat-families/' },
      },
      {
        type: 'answers',
        items: [
          {
            q: 'Wie bekomme ich in Deutschland eine Autismus-Diagnose?',
            a: [
              'Erste Anlaufstelle ist meist die Kinderarztpraxis. Die Diagnostik selbst findet in der Regel in einem Sozialpädiatrischen Zentrum (SPZ) oder in einer Kinder- und Jugendpsychiatrie statt; die Wartezeiten können lang sein. Ich stelle keine Diagnosen, helfe aber, den Weg zu planen und die Zeit bis dahin gut zu nutzen.',
            ],
          },
          {
            q: 'Wer bezahlt Unterstützung?',
            a: [
              'Autismusspezifische Förderung kann über das Jugendamt finanziert werden, etwa als Eingliederungshilfe nach § 35a SGB VIII – die Entscheidung fällt im Einzelfall. Logopädie und Ergotherapie gibt es auf ärztliche Verordnung. Meine Programme sind private Leistungen.',
            ],
          },
          {
            q: 'Wie funktionieren Kita, Schule und Schulbegleitung?',
            a: [
              'Kinder mit besonderem Unterstützungsbedarf können in der Kita zusätzliche Hilfen und in der Schule eine Schulbegleitung bekommen. Wie das beantragt wird, unterscheidet sich je nach Bundesland und Kommune – hier hilft ein Überblick, bevor Sie Anträge stellen.',
            ],
          },
        ],
      },
      { type: 'note', body: ['Ich gebe allgemeine Informationen und helfe bei Unterlagen – **keine Rechtsberatung**. Bei Widersprüchen oder rechtlichen Fragen verweise ich an Beratungsstellen oder Anwält:innen.'] },
      { type: 'programs', bg: 'paper', eyebrow: 'Angebot', title: 'Orientierung im *deutschen System*', programs: ['navigation'] },
      { type: 'cta', title: 'Ankommen – *auch im System.*', text: 'Im kostenlosen Kennenlernen sprechen wir in Ihrer Sprache darüber, was Ihre Familie braucht.', primary: 'call' },
    ],
  },
};
