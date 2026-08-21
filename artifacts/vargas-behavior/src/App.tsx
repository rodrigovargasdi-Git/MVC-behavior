import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Circle,
  Clock3,
  FileText,
  HandHeart,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Mic2,
  MoveRight,
  NotebookPen,
  Phone,
  Scale,
  School,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

type Interest = 'familie' | 'fachkraft' | 'jugendamt' | 'konferenz' | '';

const navItems = [
  ['Arbeitsfelder', 'arbeitsfelder'],
  ['Für wen', 'zielgruppen'],
  ['Jugendämter', 'jugendaemter'],
  ['Über Marija', 'ueber'],
  ['FAQ', 'faq'],
];

const audiences = [
  {
    id: 'familien',
    label: 'Für Familien',
    title: 'Mehr Orientierung. Weniger allein.',
    text: 'Wenn Alltag, Schule oder Diagnostik zur Dauerbaustelle werden, entsteht gemeinsam ein Plan, der zu Ihrem Kind und Ihrem Leben passt.',
    icon: HandHeart,
    color: 'bg-[#e8ddd4]',
    number: '01',
    bullets: ['Fallverständnis & Beobachtung', 'Elterncoaching im Alltag', 'Abstimmung mit dem Umfeld'],
    interest: 'familie' as Interest,
  },
  {
    id: 'fachkraefte',
    label: 'Für Fachkräfte',
    title: 'Supervision, die weiterdenkt.',
    text: 'Für Teams, die fachlich wachsen und dabei ihre Haltung bewahren wollen: klar, reflektiert und nah an echten Fällen.',
    icon: UsersRound,
    color: 'bg-[#dbe5dc]',
    number: '02',
    bullets: ['Fallbesprechungen & Supervision', 'Inhouse-Training', 'Konzept- und Teamtage'],
    interest: 'fachkraft' as Interest,
  },
  {
    id: 'institutionen',
    label: 'Für Institutionen',
    title: 'Ein System, das tragen kann.',
    text: 'Komplexe Unterstützungsarrangements brauchen Übersetzung. Ich verbinde fachliche Tiefe mit umsetzbaren Entscheidungen.',
    icon: Layers3,
    color: 'bg-[#dfddec]',
    number: '03',
    bullets: ['Fallsteuerung & Hilfeplanung', 'Prozess- und Qualitätsberatung', 'Stakeholder-Moderation'],
    interest: 'jugendamt' as Interest,
  },
];

const faqs = [
  ['Was genau macht eine Human-Behavior-Beratung?', 'Ich schaue gemeinsam mit Ihnen auf Verhalten in seinem Kontext: Was versucht ein Kind mitzuteilen? Welche Bedingungen machen Teilhabe leichter? Und wie kann das Umfeld so gestaltet werden, dass Entwicklung wahrscheinlicher wird? Daraus entstehen verständliche Hypothesen und nächste Schritte — keine Patentrezepte.'],
  ['Arbeiten Sie diagnostisch?', 'Nein. Vargas Human Behavior ist ein beratendes, pädagogisch-therapeutisches Angebot und ersetzt weder eine medizinische oder psychologische Diagnostik noch Behandlung. Auf Wunsch unterstütze ich bei der Einordnung vorhandener Berichte und der Koordination mit den zuständigen Stellen.'],
  ['Für welche Regionen ist das Angebot verfügbar?', 'Der Start ist in Deutschland geplant. Gespräche und Supervision können je nach Auftrag remote oder vor Ort stattfinden. Der genaue Radius und Reisekosten werden im Erstgespräch transparent geklärt.'],
  ['Wie läuft ein erstes Gespräch ab?', 'Sie schildern kurz, was gerade schwierig ist und was sich verändern soll. Ich stelle Fragen, ordne ein und sage offen, ob mein Angebot passt. Erst danach entscheiden wir gemeinsam über Umfang, Beteiligte und nächste Schritte.'],
  ['Kann ich über das Jugendamt beauftragen?', 'Ja. Für Jugendämter und Träger biete ich klar umrissene Fachberatung, Fallkonferenzen, Hilfeplan-Begleitung und Konzeptarbeit an. Ein Auftrag wird immer mit Ziel, Rollen, Datenschutz und Berichtswesen schriftlich geklärt.'],
  ['Was kostet eine Zusammenarbeit?', 'Die unten genannten Pakete sind indikativ und dienen der ersten Orientierung. Der finale Umfang hängt von Ziel, Setting, Beteiligten und Vorbereitungszeit ab. Nach dem Kennenlernen erhalten Sie ein transparentes Angebot.'],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function BrandMark() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#183b30] text-[11px] font-bold tracking-[-.08em] text-[#f5f0e7]" aria-hidden="true">
      VH
    </span>
  );
}

function Header({ onContact }: { onContact: (interest?: Interest) => void }) {
  const [open, setOpen] = useState(false);
  const go = (id: string) => { setOpen(false); scrollToId(id); };
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="section-wrap flex h-[82px] items-center justify-between border-b border-[#183b30]/15">
        <button className="flex items-center gap-3 text-left" onClick={() => go('start')} data-testid="button-brand-home" aria-label="Zur Startseite">
          <BrandMark />
          <span className="leading-none"><span className="block text-[13px] font-extrabold tracking-[-.04em]">VARGAS</span><span className="block font-mono-brand text-[8px] tracking-[.18em] text-[#8e493b]">HUMAN BEHAVIOR</span></span>
        </button>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navItems.map(([label, id]) => <button key={id} onClick={() => go(id)} className="text-[12px] font-semibold text-[#183b30]/70 transition-colors hover:text-[#8e493b]" data-testid={`link-nav-${id}`}>{label}</button>)}
        </nav>
        <button onClick={() => onContact()} className="btn-arrow hidden items-center gap-2 rounded-full bg-[#183b30] px-5 py-3 text-[11px] font-bold text-[#f5f0e7] transition-transform hover:-translate-y-0.5 sm:flex" data-testid="button-header-consultation">Erstgespräch anfragen <ArrowUpRight size={14} /></button>
        <button onClick={() => setOpen(!open)} className="rounded-full border border-[#183b30]/20 p-2 lg:hidden" aria-label={open ? 'Menü schließen' : 'Menü öffnen'} data-testid="button-mobile-menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && <div className="section-wrap border-b border-[#183b30]/15 bg-[#f5f0e7] py-4 lg:hidden">
        <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
          {navItems.map(([label, id]) => <button key={id} onClick={() => go(id)} className="flex justify-between border-b border-[#183b30]/10 py-3 text-left text-sm font-semibold" data-testid={`link-mobile-${id}`}>{label}<ArrowUpRight size={16} /></button>)}
          <button onClick={() => { setOpen(false); onContact(); }} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#183b30] py-3 text-xs font-bold text-[#f5f0e7]" data-testid="button-mobile-consultation">Erstgespräch anfragen <ArrowUpRight size={14} /></button>
        </nav>
      </div>}
    </header>
  );
}

function Hero({ onContact }: { onContact: (interest?: Interest) => void }) {
  return (
    <section id="start" className="relative min-h-[760px] overflow-hidden pt-[130px] lg:min-h-[840px] lg:pt-[170px]">
      <div className="section-wrap grid items-center gap-12 lg:grid-cols-[1.03fr_.97fr]">
        <div className="reveal max-w-[690px]">
          <span className="eyebrow">Deutschland · Beratung · Supervision</span>
          <h1 className="display-xl mt-7 text-[#183b30]">Verhalten<br /><em className="text-[#8e493b]">verstehen.</em><br />Möglichkeiten<br />öffnen.</h1>
          <p className="mt-8 max-w-[520px] text-base leading-7 text-[#183b30]/70 sm:text-lg">Human-Behavior-Beratung für Kinder, Familien und die Menschen, die sie begleiten. Fachlich fundiert. Zugewandt. Mit Blick auf das ganze System.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button onClick={() => onContact('familie')} className="btn-arrow flex items-center gap-3 rounded-full bg-[#d96d58] px-6 py-4 text-sm font-bold text-[#fff8ef] shadow-[0_10px_28px_hsl(13_60%_54%_/_0.2)] transition-all hover:-translate-y-1" data-testid="button-hero-family">Gespräch beginnen <MoveRight size={16} /></button>
            <button onClick={() => scrollToId('arbeitsfelder')} className="flex items-center gap-2 rounded-full border border-[#183b30]/25 px-6 py-4 text-sm font-bold text-[#183b30] transition-colors hover:bg-[#183b30]/5" data-testid="button-hero-learn">Arbeitsfelder ansehen <ArrowDownRight size={16} /></button>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs text-[#183b30]/55">
            <ShieldCheck size={17} className="text-[#8e493b]" />
            <span>Vertraulich · transparent · keine Notfallversorgung</span>
          </div>
        </div>
        <div className="reveal reveal-delay-2 relative mx-auto h-[450px] w-full max-w-[520px] lg:h-[575px]">
          <div className="absolute right-0 top-0 h-[85%] w-[82%] rounded-[46%_54%_43%_57%/38%_42%_58%_62%] bg-[#dbe5dc]"></div>
          <div className="absolute bottom-3 left-0 h-[67%] w-[69%] rounded-[55%_45%_61%_39%/53%_44%_56%_47%] bg-[#dfddec]"></div>
          <div className="absolute left-[12%] top-[11%] h-[70%] w-[67%] overflow-hidden rounded-[48%_52%_46%_54%/43%_42%_58%_57%] bg-[#e8ddd4]">
            <svg viewBox="0 0 380 490" className="absolute inset-0 h-full w-full text-[#183b30]" aria-label="Abstrakte lineare Illustration einer Verbindung">
              <path className="line-art" d="M158 420c-8-42-7-73 4-105 9-26 24-42 45-56 28-18 42-43 40-73-3-47-32-75-74-74-38 1-64 25-68 60-3 29 12 53 43 67 31 14 39 40 27 72-13 34-19 67-17 109" />
              <path className="line-art" d="M111 195c-28 12-50 34-64 64-15 31-16 73-4 119M245 191c31 3 58 20 78 50 18 28 25 65 19 112" />
              <path className="line-art" d="M97 315c34 12 77 18 122 15 44-3 79-15 105-34M87 350c43 24 92 34 146 30 36-2 68-11 96-26" />
              <circle cx="174" cy="115" r="4" fill="currentColor" /><circle cx="112" cy="195" r="4" fill="currentColor" /><circle cx="245" cy="191" r="4" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute right-[3%] top-[15%] rounded-2xl bg-[#f5f0e7]/90 px-4 py-3 shadow-[0_12px_30px_hsl(159_28%_18%_/_0.1)] backdrop-blur-sm">
            <div className="mb-1 flex items-center gap-2 font-mono-brand text-[9px] uppercase tracking-[.12em] text-[#8e493b]"><Circle size={7} fill="currentColor" /> Haltung</div>
            <p className="text-xs font-bold text-[#183b30]">Beziehung vor Rezept</p>
          </div>
          <div className="absolute bottom-[9%] right-[1%] max-w-[160px] rounded-2xl bg-[#183b30] p-4 text-[#f5f0e7] shadow-[0_15px_30px_hsl(159_28%_18%_/_0.16)]">
            <p className="font-display text-2xl leading-none">„Es darf<br />leichter<br />werden.“</p>
            <div className="mt-3 font-mono-brand text-[8px] uppercase tracking-[.14em] text-[#d96d58]">Leitgedanke</div>
          </div>
          <div className="absolute bottom-0 left-[14%] font-mono-brand text-[9px] uppercase tracking-[.15em] text-[#183b30]/45 [writing-mode:vertical-rl]">human behavior / systems / care</div>
        </div>
      </div>
      <div className="section-wrap mt-12 grid border-t border-[#183b30]/15 py-7 sm:grid-cols-3">
        {[
          ['01', 'Das Kind im Kontext', 'Nicht isoliert betrachten, sondern eingebettet verstehen.'],
          ['02', 'Klarheit, die trägt', 'Komplexität sortieren. Nächste Schritte sichtbar machen.'],
          ['03', 'Gemeinsam wirksam', 'Eltern, Fachkräfte und Institutionen verbinden.'],
        ].map(([n, title, text]) => <div key={n} className="flex gap-4 border-b border-[#183b30]/12 py-4 last:border-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-0">
          <span className="font-mono-brand text-[10px] text-[#8e493b]">{n}</span><div><h3 className="text-sm font-bold text-[#183b30]">{title}</h3><p className="mt-1 text-xs leading-5 text-[#183b30]/60">{text}</p></div>
        </div>)}
      </div>
    </section>
  );
}

function AudienceCard({ item, onContact }: { item: typeof audiences[number]; onContact: (interest: Interest) => void }) {
  const Icon = item.icon;
  return <article className={`hover-lift group relative overflow-hidden rounded-[28px] ${item.color} p-7 sm:p-9`}>
    <div className="flex items-start justify-between"><span className="font-mono-brand text-[10px] text-[#183b30]/45">{item.number}</span><Icon size={25} strokeWidth={1.4} className="text-[#183b30]/70" /></div>
    <div className="mt-20 max-w-[330px]"><span className="font-mono-brand text-[10px] uppercase tracking-[.1em] text-[#8e493b]">{item.label}</span><h3 className="font-display mt-3 text-4xl leading-none text-[#183b30]">{item.title}</h3><p className="mt-5 text-sm leading-6 text-[#183b30]/68">{item.text}</p></div>
    <ul className="mt-7 space-y-2 border-t border-[#183b30]/12 pt-5">{item.bullets.map(b => <li key={b} className="flex items-center gap-2 text-xs font-semibold text-[#183b30]/75"><Check size={14} className="text-[#8e493b]" />{b}</li>)}</ul>
    <button onClick={() => onContact(item.interest)} className="btn-arrow mt-7 flex items-center gap-2 text-xs font-bold text-[#183b30] underline decoration-[#8e493b]/50 underline-offset-4" data-testid={`button-audience-${item.id}`}>Passenden Weg finden <ArrowUpRight size={14} /></button>
  </article>;
}

function ProcessSection() {
  return <section id="arbeitsweise" className="bg-[#183b30] py-24 text-[#f5f0e7] sm:py-32">
    <div className="section-wrap grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
      <div><span className="eyebrow text-[#d96d58]">Zusammenarbeit · How it works</span><h2 className="display-md mt-7">Ein guter Prozess<br /><em className="text-[#d96d58]">gibt Sicherheit.</em></h2><p className="mt-7 max-w-[350px] text-sm leading-7 text-[#f5f0e7]/65">Sie müssen nicht schon wissen, welche Hilfe Sie brauchen. Dafür ist das Erstgespräch da.</p></div>
      <div className="grid gap-0 sm:grid-cols-3">
        {[
          ['01', 'Ankommen', 'Wir klären, was gerade zählt — und wer gehört werden sollte.'],
          ['02', 'Einordnen', 'Beobachtungen, Beziehungen und Rahmenbedingungen werden zu einem gemeinsamen Bild.'],
          ['03', 'Handeln', 'Sie erhalten konkrete nächste Schritte, Zuständigkeiten und einen realistischen Rhythmus.'],
        ].map(([n, title, text]) => <div key={n} className="border-t border-[#f5f0e7]/20 py-6 sm:mr-6"><span className="font-mono-brand text-[10px] text-[#d96d58]">{n}</span><h3 className="mt-10 font-display text-3xl">{title}</h3><p className="mt-4 text-sm leading-6 text-[#f5f0e7]/65">{text}</p></div>)}
      </div>
    </div>
  </section>;
}

function JugendamtSection({ onContact }: { onContact: (interest: Interest) => void }) {
  return <section id="jugendaemter" className="bg-[#e8ddd4] py-24 sm:py-32">
    <div className="section-wrap grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
      <div className="relative min-h-[390px] overflow-hidden rounded-[32px] bg-[#d96d58] p-7 text-[#183b30]">
        <div className="absolute -right-12 -top-16 h-60 w-60 rounded-full border border-[#183b30]/25"></div><div className="absolute -right-2 top-[-5px] h-40 w-40 rounded-full border border-[#183b30]/20"></div>
        <Scale className="absolute right-8 top-8" size={34} strokeWidth={1.2} />
        <div className="absolute bottom-8 left-8 max-w-[330px]"><span className="font-mono-brand text-[10px] uppercase tracking-[.14em]">Für öffentliche Partner</span><p className="font-display mt-4 text-5xl leading-[.95]">Gute Hilfe<br />braucht ein<br /><em>gemeinsames Bild.</em></p></div>
        <div className="absolute bottom-9 right-8 font-mono-brand text-[9px] uppercase tracking-[.12em] [writing-mode:vertical-rl]">Jugendamt / Träger / Netzwerk</div>
      </div>
      <div><span className="eyebrow text-[#8e493b]">Jugendämter & Institutionen</span><h2 className="display-md mt-6 text-[#183b30]">Komplexe Fälle.<br /><em className="text-[#8e493b]">Klare nächste Schritte.</em></h2><p className="mt-7 max-w-[550px] text-base leading-7 text-[#183b30]/70">Wenn mehrere Systeme beteiligt sind, wird Unterstützung schnell unübersichtlich. Ich schaffe eine fachlich belastbare, nachvollziehbare Grundlage für Entscheidungen — mit dem Kind und seiner Lebenswelt im Mittelpunkt.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {['Fachberatung & Fallsteuerung', 'Moderierte Fallkonferenzen', 'Hilfeplan- und Teilhabebegleitung', 'Konzept- & Qualitätsentwicklung'].map(t => <div key={t} className="flex gap-3 border-t border-[#183b30]/15 pt-3 text-sm font-semibold text-[#183b30]"><Check size={16} className="mt-0.5 shrink-0 text-[#8e493b]" />{t}</div>)}
        </div>
        <button onClick={() => onContact('jugendamt')} className="btn-arrow mt-9 flex items-center gap-3 rounded-full bg-[#183b30] px-6 py-4 text-sm font-bold text-[#f5f0e7] transition-transform hover:-translate-y-1" data-testid="button-jugendamt-contact">Fachgespräch anfragen <MoveRight size={16} /></button>
      </div>
    </div>
  </section>;
}

function AboutSection({ onContact }: { onContact: (interest: Interest) => void }) {
  return <section id="ueber" className="py-24 sm:py-32">
    <div className="section-wrap grid gap-14 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
      <div className="relative mx-auto h-[480px] w-full max-w-[420px]">
        <div className="absolute inset-x-[11%] top-0 h-[88%] rounded-[48%_52%_45%_55%/42%_41%_59%_58%] bg-[#dfddec]"></div>
        <div className="absolute bottom-0 left-0 right-[8%] h-[62%] rounded-[42%_58%_52%_48%/48%_36%_64%_52%] border border-[#183b30]/18"></div>
        <div className="portrait-shape absolute left-[20%] top-[11%] h-[71%] w-[60%] overflow-hidden bg-[#d4b09d]">
          <div className="absolute left-[9%] top-[5%] h-[44%] w-[82%] rounded-[48%_52%_39%_61%/55%_55%_45%_45%] bg-[#183b30]"></div>
          <div className="absolute left-[26%] top-[22%] h-[33%] w-[49%] rounded-[44%_56%_50%_50%] border border-[#183b30]/60"></div>
          <div className="absolute bottom-0 left-[12%] right-[12%] h-[38%] rounded-t-[50%] border-t border-[#183b30]/70"></div>
          <div className="absolute left-[46%] top-[48%] h-1 w-1 rounded-full bg-[#183b30]"></div>
        </div>
        <div className="absolute bottom-6 left-2 rounded-2xl bg-[#f5f0e7] p-4 shadow-[0_12px_30px_hsl(159_28%_18%_/_0.1)]"><p className="font-display text-2xl text-[#183b30]">Marija<br />Vargas</p><p className="mt-2 font-mono-brand text-[8px] uppercase tracking-[.12em] text-[#8e493b]">Founder · Consultant</p></div>
        <div className="absolute right-0 top-16 flex h-20 w-20 items-center justify-center rounded-full border border-[#8e493b]/50 text-center font-mono-brand text-[8px] uppercase leading-4 tracking-[.08em] text-[#8e493b]">care<br />meets<br />clarity</div>
      </div>
      <div>
        <span className="eyebrow">Über Marija · The person behind the practice</span>
        <h2 className="display-md mt-7 text-[#183b30]">Fachlichkeit ist<br />am stärksten, wenn sie<br /><em className="text-[#8e493b]">menschlich bleibt.</em></h2>
        <p className="mt-7 max-w-[550px] text-base leading-7 text-[#183b30]/70">Ich bin Marija Vargas. Meine Arbeit verbindet Human Behavior, angewandte Verhaltensanalyse und systemisches Denken — mit Respekt für die Perspektive jedes Menschen im Raum.</p>
        <p className="mt-4 max-w-[550px] text-base leading-7 text-[#183b30]/70">Mich interessiert nicht nur, <em>was</em> passiert. Mich interessiert, was ein Umfeld möglich macht. Und wie aus vielen guten Absichten ein verlässlicher gemeinsamer Weg wird.</p>
        <div className="mt-8 grid gap-4 border-y border-[#183b30]/15 py-5 sm:grid-cols-2">
          <div><div className="flex items-center gap-2 font-mono-brand text-[9px] uppercase tracking-[.12em] text-[#8e493b]"><NotebookPen size={14} /> Qualifikation</div><p className="mt-2 text-xs leading-5 text-[#183b30]/65">[Exakte Abschlüsse & Zertifizierungen vor Launch ergänzen]</p></div>
          <div><div className="flex items-center gap-2 font-mono-brand text-[9px] uppercase tracking-[.12em] text-[#8e493b]"><Sparkles size={14} /> Arbeitsweise</div><p className="mt-2 text-xs leading-5 text-[#183b30]/65">Neugierig, evidenzorientiert, kultursensibel und immer im Dialog.</p></div>
        </div>
        <button onClick={() => onContact('familie')} className="btn-arrow mt-8 flex items-center gap-2 text-sm font-bold text-[#183b30] underline decoration-[#d96d58] underline-offset-8" data-testid="button-about-contact">Marija kennenlernen <ArrowUpRight size={16} /></button>
      </div>
    </div>
  </section>;
}

function TrainingSection({ onContact }: { onContact: (interest: Interest) => void }) {
  return <section id="training" className="soft-grid py-24 sm:py-32">
    <div className="section-wrap">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="eyebrow">Training & Supervision · For professionals</span><h2 className="display-md mt-6 max-w-[650px] text-[#183b30]">Wissen, das im<br /><em className="text-[#8e493b]">Alltag ankommt.</em></h2></div><p className="max-w-[300px] text-sm leading-6 text-[#183b30]/60">Für Teams und Einzelpersonen, die ihre Praxis schärfen wollen — ohne die Beziehung aus dem Blick zu verlieren.</p></div>
      <div className="mt-14 grid gap-5 lg:grid-cols-[1.18fr_.82fr]">
        <article className="hover-lift relative overflow-hidden rounded-[28px] bg-[#183b30] p-8 text-[#f5f0e7] sm:p-10"><Mic2 className="absolute right-8 top-8 text-[#d96d58]" size={28} strokeWidth={1.3} /><span className="font-mono-brand text-[10px] uppercase tracking-[.12em] text-[#d96d58]">Inhouse · Workshops · Keynotes</span><h3 className="font-display mt-16 max-w-[500px] text-5xl leading-[.96]">Komplexe Inhalte.<br /><em className="text-[#d96d58]">Gute Geschichten.</em></h3><p className="mt-7 max-w-[490px] text-sm leading-6 text-[#f5f0e7]/65">Von „Verhalten verstehen“ bis zur inklusiven Gestaltung von Lernumgebungen: Formate, die Fachlichkeit übersetzen und Teams ins Gespräch bringen.</p><button onClick={() => onContact('konferenz')} className="btn-arrow mt-9 flex items-center gap-2 text-sm font-bold text-[#f5f0e7] underline decoration-[#d96d58] underline-offset-8" data-testid="button-training-inquiry">Format besprechen <MoveRight size={16} /></button></article>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <article className="hover-lift rounded-[28px] bg-[#dfddec] p-7 text-[#183b30]"><div className="flex justify-between"><Clock3 size={23} strokeWidth={1.4} /><span className="font-mono-brand text-[9px] uppercase tracking-[.1em] text-[#8e493b]">laufend</span></div><h3 className="font-display mt-12 text-3xl">Supervision</h3><p className="mt-3 text-sm leading-6 text-[#183b30]/65">Regelmäßige Reflexion, Fallarbeit und ein sicherer Raum für professionelle Entwicklung.</p></article>
          <article className="hover-lift rounded-[28px] bg-[#e8ddd4] p-7 text-[#183b30]"><div className="flex justify-between"><School size={23} strokeWidth={1.4} /><span className="font-mono-brand text-[9px] uppercase tracking-[.1em] text-[#8e493b]">individuell</span></div><h3 className="font-display mt-12 text-3xl">Teamtage</h3><p className="mt-3 text-sm leading-6 text-[#183b30]/65">Gemeinsame Sprache, klare Rollen und konkrete Vereinbarungen für den Montag danach.</p></article>
        </div>
      </div>
    </div>
  </section>;
}

function PackagesSection({ onContact }: { onContact: (interest: Interest) => void }) {
  return <section id="preise" className="py-24 sm:py-32">
    <div className="section-wrap">
      <div className="max-w-[680px]"><span className="eyebrow">Orientierung · Indicative packages</span><h2 className="display-md mt-6 text-[#183b30]">Ein klarer Rahmen,<br /><em className="text-[#8e493b]">kein starres Korsett.</em></h2><p className="mt-6 text-sm leading-6 text-[#183b30]/60">Richtwerte für die Planung. Das finale Angebot entsteht nach dem Erstgespräch und berücksichtigt Setting, Ziel und Vorbereitungsaufwand.</p></div>
      <div className="mt-12 divide-y divide-[#183b30]/15 border-y border-[#183b30]/15">
        {[
          ['Orientierung', 'Erstgespräch & nächste Schritte', 'ab 120 €', '60–75 Min. · online', 'Für einen fokussierten ersten Blick auf Ihre Situation.'],
          ['Begleitung', 'Fallverständnis & Coaching', 'ab 480 €', '3 Termine · inkl. Vor- & Nachbereitung', 'Für Familien, die einen tragfähigen Plan in den Alltag bringen möchten.'],
          ['Team / System', 'Fachberatung & Supervision', 'ab 840 €', '4 Einheiten · individuell', 'Für Teams, Institutionen und öffentliche Auftraggeber.'],
        ].map(([name, title, price, details, text], i) => <div key={name} className="grid gap-4 py-7 md:grid-cols-[.7fr_1.3fr_.55fr] md:items-center"><div><span className="font-mono-brand text-[9px] text-[#8e493b]">0{i + 1}</span><h3 className="mt-2 text-sm font-bold text-[#183b30]">{name}</h3></div><div><p className="font-display text-3xl text-[#183b30]">{title}</p><p className="mt-2 text-xs text-[#183b30]/55">{details} · {text}</p></div><div className="flex items-center justify-between gap-3 md:justify-end"><span className="font-mono-brand text-sm font-bold text-[#8e493b]">{price}</span><button onClick={() => onContact(i === 2 ? 'fachkraft' : 'familie')} className="rounded-full border border-[#183b30]/25 p-2 transition-colors hover:bg-[#dbe5dc]" aria-label={`${name} anfragen`} data-testid={`button-package-${i}`}><ArrowUpRight size={16} /></button></div></div>)}
      </div>
      <p className="mt-5 flex items-start gap-2 text-[11px] leading-5 text-[#183b30]/50"><FileText size={14} className="mt-0.5 shrink-0 text-[#8e493b]" />Alle Preise sind indikative Planungswerte. Umsatzsteuer, Reisekosten und finale Beauftragung werden im Angebot ausgewiesen. [Rechtliche Unternehmensdaten vor Launch ergänzen.]</p>
    </div>
  </section>;
}

function ConferenceSection({ onContact }: { onContact: (interest: Interest) => void }) {
  return <section id="konferenzen" className="bg-[#dbe5dc] py-24 sm:py-28">
    <div className="section-wrap grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
      <div><span className="eyebrow text-[#8e493b]">Konferenzen & Veranstaltungen</span><h2 className="display-md mt-6 text-[#183b30]">Ein Vortrag, der<br /><em className="text-[#8e493b]">etwas in Bewegung bringt.</em></h2><p className="mt-6 max-w-[560px] text-base leading-7 text-[#183b30]/70">Für Kongresse, Fachtage und interne Veranstaltungen: verständliche Impulse über Verhalten, Neurodivergenz und die Systeme, die Kinder unterstützen sollen.</p><div className="mt-8 flex flex-wrap gap-3"><span className="rounded-full border border-[#183b30]/20 px-4 py-2 text-xs font-semibold">Keynote</span><span className="rounded-full border border-[#183b30]/20 px-4 py-2 text-xs font-semibold">Panel & Moderation</span><span className="rounded-full border border-[#183b30]/20 px-4 py-2 text-xs font-semibold">Workshop</span></div><button onClick={() => onContact('konferenz')} className="btn-arrow mt-9 flex items-center gap-3 rounded-full bg-[#8e493b] px-6 py-4 text-sm font-bold text-[#fff8ef] transition-transform hover:-translate-y-1" data-testid="button-conference-book">Verfügbarkeit anfragen <CalendarDays size={16} /></button></div>
      <div className="relative flex min-h-[310px] items-center justify-center overflow-hidden rounded-[30px] bg-[#f5f0e7]"><div className="absolute h-56 w-56 rounded-full border border-[#8e493b]/30"></div><div className="absolute h-40 w-40 rounded-full border border-[#8e493b]/35"></div><div className="relative max-w-[240px] text-center"><MessageCircle className="mx-auto mb-5 text-[#8e493b]" size={30} strokeWidth={1.3} /><p className="font-display text-4xl leading-none text-[#183b30]">„Was, wenn Verhalten eine Einladung ist?“</p><p className="mt-5 font-mono-brand text-[9px] uppercase tracking-[.12em] text-[#8e493b]">Possible keynote theme</p></div></div>
    </div>
  </section>;
}

function FAQSection() {
  const [active, setActive] = useState<number | null>(0);
  return <section id="faq" className="py-24 sm:py-32">
    <div className="section-wrap grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><span className="eyebrow">FAQ · Gut zu wissen</span><h2 className="display-md mt-6 text-[#183b30]">Fragen sind<br /><em className="text-[#8e493b]">willkommen.</em></h2><p className="mt-6 max-w-[290px] text-sm leading-6 text-[#183b30]/60">Noch etwas unklar? Schreiben Sie mir — lieber eine Frage mehr als eine Hürde zu viel.</p></div><div className="border-t border-[#183b30]/20">{faqs.map(([question, answer], i) => <div key={question} className="border-b border-[#183b30]/20"><button onClick={() => setActive(active === i ? null : i)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-bold text-[#183b30]" aria-expanded={active === i} data-testid={`button-faq-${i}`}><span>{question}</span><ChevronDown size={18} className={`shrink-0 text-[#8e493b] transition-transform ${active === i ? 'rotate-180' : ''}`} /></button>{active === i && <p className="faq-answer max-w-[680px] pb-6 pr-8 text-sm leading-6 text-[#183b30]/65">{answer}</p>}</div>)}</div></div>
  </section>;
}

function ContactSection({ interest, setInterest }: { interest: Interest; setInterest: (interest: Interest) => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    if (!name || !email || !email.includes('@')) { setError('Bitte tragen Sie Ihren Namen und eine gültige E-Mail-Adresse ein.'); return; }
    setError(''); setSending(true);
    window.setTimeout(() => { setSending(false); setSubmitted(true); form.reset(); }, 650);
  };
  return <section id="kontakt" className="bg-[#183b30] py-24 text-[#f5f0e7] sm:py-32">
    <div className="section-wrap grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
      <div><span className="eyebrow text-[#d96d58]">Der nächste Schritt · Contact</span><h2 className="display-md mt-7">Lassen Sie uns<br /><em className="text-[#d96d58]">sortieren.</em></h2><p className="mt-7 max-w-[370px] text-sm leading-7 text-[#f5f0e7]/65">Erzählen Sie mir in ein paar Sätzen, worum es geht. Ihre Nachricht wird vertraulich behandelt. Bitte keine sensiblen Gesundheitsdaten über dieses Formular senden.</p><div className="mt-10 space-y-4 border-t border-[#f5f0e7]/20 pt-6"><div className="flex items-center gap-3 text-sm"><Mail size={17} className="text-[#d96d58]" /><span>[E-Mail-Adresse vor Launch ergänzen]</span></div><div className="flex items-center gap-3 text-sm"><Phone size={17} className="text-[#d96d58]" /><span>[Telefonnummer vor Launch ergänzen]</span></div><div className="flex items-center gap-3 text-sm"><Circle size={14} className="text-[#d96d58]" /><span>Deutschland · remote & vor Ort nach Absprache</span></div></div></div>
      <div className="rounded-[28px] bg-[#f5f0e7] p-6 text-[#183b30] sm:p-9">
        {submitted ? <div className="flex min-h-[430px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dbe5dc] text-[#183b30]"><Check size={28} /></div><h3 className="font-display mt-7 text-4xl">Danke für Ihre Nachricht.</h3><p className="mt-4 max-w-[350px] text-sm leading-6 text-[#183b30]/60">Das ist eine Demo-Bestätigung. Vor dem Launch wird die Übermittlung an die finale Kontaktadresse angebunden.</p><button onClick={() => setSubmitted(false)} className="mt-7 text-xs font-bold underline underline-offset-4" data-testid="button-contact-new">Weitere Nachricht senden</button></div> : <form onSubmit={submit} noValidate><div className="mb-7 flex items-center justify-between"><h3 className="font-display text-3xl">Gespräch anfragen</h3><span className="font-mono-brand text-[9px] uppercase tracking-[.1em] text-[#8e493b]">01 / 01</span></div><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-bold">Ihr Name *<input name="name" type="text" placeholder="Vor- und Nachname" className="mt-2 w-full rounded-xl border border-[#183b30]/20 bg-transparent px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-[#183b30]/35 focus:border-[#8e493b]" data-testid="input-contact-name" /></label><label className="text-xs font-bold">E-Mail *<input name="email" type="email" placeholder="name@beispiel.de" className="mt-2 w-full rounded-xl border border-[#183b30]/20 bg-transparent px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-[#183b30]/35 focus:border-[#8e493b]" data-testid="input-contact-email" /></label></div><label className="mt-5 block text-xs font-bold">Ich bin …<select name="interest" value={interest} onChange={e => setInterest(e.target.value as Interest)} className="mt-2 w-full rounded-xl border border-[#183b30]/20 bg-[#f5f0e7] px-4 py-3 text-sm font-normal outline-none focus:border-[#8e493b]" data-testid="select-contact-interest"><option value="">Bitte auswählen</option><option value="familie">Elternteil / Familie</option><option value="fachkraft">Therapeut:in / Fachkraft</option><option value="jugendamt">Jugendamt / Institution</option><option value="konferenz">Konferenz / Veranstalter:in</option></select></label><label className="mt-5 block text-xs font-bold">Worum geht es grob?<textarea name="message" rows={4} placeholder="Bitte keine sensiblen Gesundheitsdaten …" className="mt-2 w-full resize-none rounded-xl border border-[#183b30]/20 bg-transparent px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-[#183b30]/35 focus:border-[#8e493b]" data-testid="textarea-contact-message" /></label>{error && <p className="mt-4 text-xs font-semibold text-[#a94435]" role="alert" data-testid="status-contact-error">{error}</p>}<div className="mt-5 flex items-start gap-2 text-[10px] leading-4 text-[#183b30]/50"><ShieldCheck size={14} className="mt-0.5 shrink-0" />Mit dem Absenden stimmen Sie der Kontaktaufnahme zur Bearbeitung Ihrer Anfrage zu. Details in der Datenschutzerklärung.</div><button type="submit" disabled={sending} className="btn-arrow mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#d96d58] px-6 py-4 text-sm font-bold text-[#fff8ef] transition-all hover:-translate-y-0.5 disabled:opacity-60" data-testid="button-contact-submit">{sending ? 'Wird gesendet …' : 'Anfrage senden'} {!sending && <ArrowUpRight size={16} />}</button></form>}
      </div>
    </div>
  </section>;
}

function Footer() {
  return <footer className="bg-[#183b30] pb-8 text-[#f5f0e7]"><div className="section-wrap border-t border-[#f5f0e7]/20 pt-10"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><div className="flex items-center gap-3"><BrandMark /><div><div className="text-sm font-extrabold">VARGAS</div><div className="font-mono-brand text-[8px] tracking-[.18em] text-[#d96d58]">HUMAN BEHAVIOR</div></div></div><p className="mt-5 max-w-[270px] text-xs leading-5 text-[#f5f0e7]/50">Ein Arbeitsname für eine neue Praxis. Gemeinsam mit Marija wird die finale Marke vor dem Launch festgelegt.</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-xs text-[#f5f0e7]/65"><button onClick={() => scrollToId('kontakt')} className="text-left hover:text-[#d96d58]" data-testid="link-footer-contact">Kontakt</button><button onClick={() => scrollToId('faq')} className="text-left hover:text-[#d96d58]" data-testid="link-footer-faq">FAQ</button><span>[Impressum]</span><span>[Datenschutz]</span><span>[Barrierefreiheit]</span><span>[Cookie-Hinweise]</span></div></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-[#f5f0e7]/15 pt-5 font-mono-brand text-[9px] uppercase tracking-[.12em] text-[#f5f0e7]/35 sm:flex-row"><span>© {new Date().getFullYear()} Vargas Human Behavior · Arbeitsname</span><span>Keine Diagnose · keine Notfallversorgung</span></div></div></footer>;
}

function Home() {
  const [interest, setInterest] = useState<Interest>('');
  useEffect(() => {
    document.title = 'Vargas Human Behavior — Verhalten verstehen. Möglichkeiten öffnen.';
    const description = 'Human-Behavior-Beratung für neurodivergente Kinder, Familien, Fachkräfte und Institutionen in Deutschland.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    [['og:title', document.title], ['og:description', description], ['og:type', 'website']].forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('property', property); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    });
  }, []);
  const contact = (next: Interest = '') => { setInterest(next); window.setTimeout(() => scrollToId('kontakt'), 20); };
  return <div className="site-shell min-h-[100dvh]"><Header onContact={contact} /><main><Hero onContact={contact} /><section id="zielgruppen" className="py-24 sm:py-32"><div className="section-wrap"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><span className="eyebrow">Für wen · Who I work with</span><h2 className="display-md mt-6 text-[#183b30]">Ein Kind.<br /><em className="text-[#8e493b]">Viele Perspektiven.</em></h2></div><div><p className="max-w-[580px] text-lg leading-8 text-[#183b30]/70">Unterstützung wird dann stark, wenn sie nicht an Zuständigkeitsgrenzen endet. Ich arbeite mit den Menschen, die ein Kind kennen, begleiten und Entscheidungen möglich machen.</p></div></div><div id="arbeitsfelder" className="mt-14 grid gap-5 md:grid-cols-3">{audiences.map(item => <AudienceCard key={item.id} item={item} onContact={contact} />)}</div></div></section><ProcessSection /><JugendamtSection onContact={contact} /><AboutSection onContact={contact} /><TrainingSection onContact={contact} /><PackagesSection onContact={contact} /><ConferenceSection onContact={contact} /><FAQSection /><ContactSection interest={interest} setInterest={setInterest} /></main><Footer /></div>;
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;