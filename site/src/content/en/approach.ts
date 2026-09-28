/**
 * Approach – the ONE place for all PFA/SBT wording (home, how I work, FAQ, programs).
 * Source: docs/2026-09-28-hanley-pfa-sbt-positioning.md (§2, §3, §7.5, §7.7).
 * Never "certified", "Hanley method", "FTF partner", no logo, no implied endorsement,
 * no study percentages as promised outcomes, no expired guidelines.
 */
import { site } from '../site';

export const approach = {
  name: 'PFA & SBT',
  teaser:
    'For challenging behavior I use **Practical Functional Assessment (PFA)** and **Skill-Based Treatment (SBT)**, an approach developed by Dr. Gregory Hanley and colleagues and published in peer-reviewed journals. First we understand together what a behavior achieves for your child. Then your child learns, step by step, better ways to get exactly that.',
  what: [
    '**Practical Functional Assessment (PFA)** starts with a detailed, open-ended conversation with you – you know your child best. It is often followed by a short analysis called the IISCA (interview-informed synthesized contingency analysis). To be plain about it: for a few minutes, under safe conditions, we recreate a situation that usually leads to difficult behavior, and we end it at the first sign of distress. That quickly shows what matters to your child.',
    '**Skill-Based Treatment (SBT)** builds on that. Your child learns, in this order: to communicate, to cope with "wait" and "no", and to join in with more of what the day asks. We only teach while your child is *happy, relaxed and engaged* – and breaks are always available.',
    'The approach describes itself as compassionate, trauma-informed and assent-based: safety, trust and your child\'s assent come first, and nobody is "worked through" distress.',
  ],
  principles: [
    'Safety and trust first – before anything new is taught.',
    'Your child can ask for a break or show "no" at any time, and that is respected.',
    'Communication comes before cooperation.',
    'Parents are involved from day one and practice the steps in daily life.',
    'Goals are skills that help your child – not looking "typical".',
  ],
  research: [
    'PFA and SBT are research-based and published in peer-reviewed journals, for example the *Journal of Applied Behavior Analysis* (Hanley, Jin, Vanselow & Hanratty, 2014; Rajaraman et al., 2022, on trauma-informed applications).',
    'Most studies use single-case designs with small numbers of participants; there are no large randomized trials yet, and researchers still debate details of the analysis. That is why I promise no outcomes – we check together whether the plan helps your child.',
  ],
  level: `${site.person.credentials[0].text.en} · ${site.person.credentials[0].verify ?? ''}`,
  disclaimer:
    'PFA and SBT are professional approaches. Naming them does not imply endorsement by, or partnership with, Dr. Gregory Hanley or FTF Behavioral Consulting.',
};
