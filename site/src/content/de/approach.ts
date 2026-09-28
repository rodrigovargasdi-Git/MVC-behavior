/**
 * Fachlicher Ansatz – EINE Stelle für alle PFA/SBT-Formulierungen (Startseite, Haltung, FAQ, Programme).
 * Grundlage: docs/2026-09-28-hanley-pfa-sbt-positioning.md (§2, §3, §7.5, §7.7).
 * Regeln: „arbeitet nach PFA und SBT (entwickelt von Dr. Gregory Hanley und Kolleg:innen)“.
 * Nie „zertifiziert“, „Hanley-Methode“, „FTF-Partnerin“, kein Logo, keine Empfehlung behaupten,
 * keine Studienprozente als Ergebnisversprechen, keine abgelaufenen Leitlinien zitieren.
 */
import { site } from '../site';

export const approach = {
  name: 'PFA & SBT',
  teaser:
    'Bei herausforderndem Verhalten arbeite ich mit **Practical Functional Assessment (PFA)** und **Skill-Based Treatment (SBT)** – einem Vorgehen, das Dr. Gregory Hanley und Kolleg:innen entwickelt und in Fachzeitschriften veröffentlicht haben. Zuerst verstehen wir gemeinsam, was ein Verhalten für Ihr Kind bewirkt. Dann lernt Ihr Kind Schritt für Schritt bessere Wege, genau das zu erreichen.',
  what: [
    '**Practical Functional Assessment (PFA)** beginnt mit einem ausführlichen, offenen Gespräch mit Ihnen: Sie kennen Ihr Kind am besten. Danach folgt oft eine kurze Analyse, fachlich IISCA genannt (interview-informed synthesized contingency analysis). Ehrlich gesagt heißt das: Wir stellen – kurz und unter sicheren Bedingungen – eine Situation nach, die sonst zu schwierigem Verhalten führt, und beenden sie beim ersten Anzeichen von Stress. So wird schnell klar, worum es Ihrem Kind geht.',
    '**Skill-Based Treatment (SBT)** baut darauf auf. Ihr Kind lernt in dieser Reihenfolge: sich mitteilen, mit „Warten“ oder „Nein“ zurechtkommen und bei mehr von dem mitmachen, was der Tag verlangt. Geübt wird nur, solange Ihr Kind *glücklich, entspannt und beteiligt* ist – Pausen sind jederzeit möglich.',
    'Das Vorgehen versteht sich als mitfühlend, traumasensibel und zustimmungsbasiert: Sicherheit, Vertrauen und die Zustimmung Ihres Kindes haben Vorrang. Es verzichtet auf Zwang und darauf, Kinder durch Stress „hindurchzuführen“.',
  ],
  principles: [
    'Sicherheit und Vertrauen zuerst – bevor etwas Neues geübt wird.',
    'Ihr Kind darf jederzeit eine Pause verlangen oder „Nein“ zeigen; das wird respektiert.',
    'Kommunikation kommt vor Kooperation: erst sich mitteilen, dann mitmachen.',
    'Eltern sind von Anfang an beteiligt und üben die Schritte selbst im Alltag.',
    'Ziele sind Fähigkeiten, die Ihrem Kind nützen – nicht Unauffälligkeit.',
  ],
  research: [
    'PFA und SBT sind forschungsbasiert und in Fachzeitschriften veröffentlicht, etwa im *Journal of Applied Behavior Analysis* (Hanley, Jin, Vanselow & Hanratty, 2014; Rajaraman u. a., 2022, zu traumasensibler Anwendung).',
    'Die meisten Studien sind Einzelfallstudien mit kleinen Fallzahlen; große randomisierte Studien gibt es bisher nicht, und über Details der Analyse wird in der Fachwelt diskutiert. Deshalb verspreche ich keine Ergebnisse – wir prüfen gemeinsam, ob der Plan Ihrem Kind hilft.',
  ],
  level: `${site.person.credentials[0].text.de} · ${site.person.credentials[0].verify ?? ''}`,
  disclaimer:
    'PFA und SBT sind fachliche Ansätze. Ihre Nennung bedeutet keine Empfehlung oder Partnerschaft durch Dr. Gregory Hanley oder FTF Behavioral Consulting.',
};
