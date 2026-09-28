// Erzeugt die Social-Vorschaubilder (1200×630) je Sprache: public/og/og-<sprache>.png
// Aufruf (im Ordner site/): node scripts/make-og.mjs
// Nur Text und Markenfarben – kein Porträt, solange die Fotos Beispielbilder sind.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const brand = 'Marija Vargas · Behavior Analysis &amp; Consulting';
const t = {
  de: { eyebrow: 'VERHALTENSANALYTISCHE BERATUNG · PFA &amp; SBT', l1: 'Verhalten verstehen.', l2: 'Möglichkeiten öffnen.', sub: ['Programme für Familien autistischer Kinder –', 'online in Europa, in vier Sprachen'] },
  en: { eyebrow: 'BEHAVIOR ANALYSIS CONSULTANCY · PFA &amp; SBT', l1: 'Understand behavior.', l2: 'Open up possibilities.', sub: ['Programs for families of autistic children –', 'online across Europe, in four languages'] },
  hr: { eyebrow: 'SAVJETOVANJE I ANALIZA PONAŠANJA · PFA &amp; SBT', l1: 'Razumjeti ponašanje.', l2: 'Otvoriti mogućnosti.', sub: ['Programi za obitelji djece iz spektra autizma –', 'online i na hrvatskom'] },
  es: { eyebrow: 'ASESORÍA EN ANÁLISIS DE CONDUCTA · PFA &amp; SBT', l1: 'Entender la conducta.', l2: 'Abrir posibilidades.', sub: ['Programas para familias de niños con autismo –', 'online y en español'] },
};

mkdirSync('public/og', { recursive: true });
for (const [l, x] of Object.entries(t)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f7f3ec"/>
  <rect x="880" y="0" width="320" height="630" fill="#183b30"/>
  <path d="M960 0 a160 160 0 0 1 160 160 V630 H960 Z" fill="#dfe8e1" opacity="0.14"/>
  <g transform="translate(990 250) scale(3)"><circle cx="20" cy="20" r="20" fill="#f7f3ec"/><path d="M12 13.5l8 14 8-14" fill="none" stroke="#183b30" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="29" cy="28" r="3.2" fill="#c9785f"/></g>
  <text x="80" y="110" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="3" fill="#8b4739">${x.eyebrow}</text>
  <text x="80" y="230" font-family="Georgia, 'Times New Roman', serif" font-size="74" fill="#183b30">${x.l1}</text>
  <text x="80" y="320" font-family="Georgia, 'Times New Roman', serif" font-size="74" font-style="italic" fill="#8b4739">${x.l2}</text>
  <text x="80" y="410" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#42584f">${x.sub[0]}</text>
  <text x="80" y="452" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#42584f">${x.sub[1]}</text>
  <line x1="80" y1="520" x2="140" y2="520" stroke="#8b4739" stroke-width="2"/>
  <text x="160" y="529" font-family="Georgia, 'Times New Roman', serif" font-size="28" fill="#183b30">${brand}</text>
</svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`public/og/og-${l}.png`);
  console.log(`public/og/og-${l}.png`);
}
