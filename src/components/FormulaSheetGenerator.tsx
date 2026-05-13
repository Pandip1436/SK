import { useEffect, useState } from 'react';

type Sheet = {
  subject: string;
  chapter: string;
  exam: string;
  accent: string;
  themeRing: string;
  pillTint: string;
  items: { label: string; expr: string }[];
};

const sheets: Sheet[] = [
  {
    subject: 'Physics',
    chapter: 'Rotational Motion',
    exam: 'NEET / JEE',
    accent: 'from-blue-500 to-indigo-500',
    pillTint: 'bg-blue-500',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.55)]',
    items: [
      { label: 'Moment of Inertia',     expr: 'I = Σ mᵢrᵢ²' },
      { label: 'Angular Momentum',      expr: 'L = I ω' },
      { label: 'Rotational KE',         expr: 'K = ½ I ω²' },
      { label: 'Torque',                expr: 'τ = I α = r × F' },
      { label: 'Parallel-Axis Theorem', expr: 'I = I꜀ + Md²' },
      { label: 'Rolling KE',            expr: 'K = ½ Mv² + ½ I ω²' },
      { label: 'Power (rotational)',    expr: 'P = τ ω' },
      { label: 'Angular Impulse',       expr: 'J = τ Δt = ΔL' },
    ],
  },
  {
    subject: 'Chemistry',
    chapter: 'Aldehydes & Ketones',
    exam: 'NEET',
    accent: 'from-fuchsia-500 to-pink-500',
    pillTint: 'bg-fuchsia-500',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.55)]',
    items: [
      { label: 'Aldol Condensation',    expr: '2 R-CHO →OH⁻→ β-hydroxy aldehyde' },
      { label: 'Cannizzaro',            expr: '2 HCHO →NaOH→ CH₃OH + HCOO⁻' },
      { label: 'Clemmensen Reduction',  expr: 'R-CO-R → R-CH₂-R  (Zn-Hg / HCl)' },
      { label: 'Wolff-Kishner',         expr: 'R-CO-R → R-CH₂-R  (NH₂NH₂ / KOH)' },
      { label: 'Tollens Test',          expr: 'R-CHO + Ag(NH₃)₂⁺ → silver mirror' },
      { label: 'Fehling Test',          expr: 'R-CHO + Cu²⁺ → Cu₂O ↓ (red)' },
      { label: 'Haloform Reaction',     expr: 'CH₃-CO-R + X₂/OH⁻ → CHX₃ + RCOO⁻' },
      { label: 'HCN Addition',          expr: 'R-CHO + HCN → R-CH(OH)-CN' },
    ],
  },
  {
    subject: 'Biology',
    chapter: 'Genetics & Heredity',
    exam: 'NEET',
    accent: 'from-emerald-500 to-teal-500',
    pillTint: 'bg-emerald-500',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.55)]',
    items: [
      { label: "Mendel's Law I",        expr: 'Law of Segregation — 3 : 1 in F₂' },
      { label: "Mendel's Law II",       expr: 'Independent Assortment — 9 : 3 : 3 : 1' },
      { label: 'Test Cross',            expr: 'F₁ × homozygous recessive → 1 : 1' },
      { label: 'Incomplete Dominance',  expr: 'F₂ ratio = 1 : 2 : 1' },
      { label: 'Co-dominance',          expr: 'IᴬIᴮ — AB blood group' },
      { label: 'Hardy-Weinberg',        expr: 'p² + 2pq + q² = 1' },
      { label: 'Linkage Map Distance',  expr: '1 map unit = 1 % recombination' },
      { label: 'Sex Ratio (XY)',        expr: 'XX : XY = 1 : 1' },
    ],
  },
  {
    subject: 'Quick Revision',
    chapter: 'Top 8 Cross-Subject',
    exam: 'JEE / NEET',
    accent: 'from-brand-orange to-amber-400',
    pillTint: 'bg-amber-500',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(255,106,0,0.55)]',
    items: [
      { label: 'Lens Formula',          expr: '1/v − 1/u = 1/f' },
      { label: 'Photoelectric',         expr: 'hν = φ + ½ mv²' },
      { label: 'Equilibrium Constant',  expr: 'Kₑq = [Products] / [Reactants]' },
      { label: 'Nernst Equation',       expr: 'E = E° − (0.059/n) log Q' },
      { label: 'Avogadro Number',       expr: 'Nₐ = 6.022 × 10²³ mol⁻¹' },
      { label: 'Respiratory Quotient',  expr: 'RQ = CO₂ produced / O₂ used' },
      { label: 'Cardiac Output',        expr: 'CO = SV × HR' },
      { label: 'Photosynthesis',        expr: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂' },
    ],
  },
];

const features = [
  {
    title: 'Chapter-Wise Selection',
    description: 'Pick any combination of NEET or JEE chapters across Physics, Chemistry, Biology and Maths.',
  },
  {
    title: 'Single-Page Density',
    description: 'Hand-curated by SK faculty — only the formulas and named reactions that have actually been tested.',
  },
  {
    title: 'Print-Ready PDF',
    description: 'A4-sized, exam-night optimised layout. Print it, paste it on your study desk, revise in 10 minutes.',
  },
  {
    title: 'Free with Your Number',
    description: 'Drop your WhatsApp number once — the sheet is delivered instantly and you get new ones each week.',
  },
];

export default function FormulaSheetGenerator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % sheets.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const sheet = sheets[active];

  return (
    <section id="formula-sheets" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Side: Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Instant Revision <span className="font-script text-brand-gold italic font-normal block mt-2">Formula Sheets</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              The night before the exam, you do not want a textbook — you want one page. Pick the chapters you are revising and we generate a printable cheat sheet of every formula, reaction and equation worth knowing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="space-y-2 group">
                <h4 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                  {f.title}
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* Chapter selector pills (lives in the content column, controls the doc on the right) */}
          <div className="flex items-center gap-2 flex-wrap pt-2">
            {sheets.map((s, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={s.chapter}
                  onClick={() => setActive(idx)}
                  className={`relative shrink-0 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 overflow-hidden transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                  )}
                  <span className={`w-1.5 h-1.5 rounded-full ${s.pillTint}`} />
                  {s.subject}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Paper / PDF Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Ambient halos */}
          <div className="absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          <div className="relative w-full max-w-md">
            {/* Paper stack — back sheets to suggest "more pages available" */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-2xl bg-white/5 border border-white/10" />
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-1 rounded-2xl bg-white/10 border border-white/10" />

            {/* Premium gradient frame */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

            <div className={`relative aspect-[3/4] rounded-2xl p-[2px] shadow-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${sheet.themeRing}`}>
              <div className="relative w-full h-full bg-white rounded-[0.95rem] overflow-hidden flex flex-col">

                {/* Document Header — accent strip + branding */}
                <div className={`relative h-16 bg-gradient-to-r ${sheet.accent} px-5 flex items-center justify-between text-white`}>
                  {/* faint diagonal grid texture */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 14px)',
                  }} />
                  <div className="relative flex items-center gap-2">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center text-[10px] font-black backdrop-blur">SK</div>
                    <div className="leading-tight">
                      <p className="text-[8px] font-bold uppercase tracking-widest text-white/70">SK Learnings &middot; Formula Sheet</p>
                      <p key={`title-${active}`} className="text-sm font-black animate-fade-slide">{sheet.chapter}</p>
                    </div>
                  </div>
                  <div className="relative text-right leading-tight">
                    <p className="text-[7px] font-bold uppercase tracking-widest text-white/70">For</p>
                    <p className="text-[10px] font-black">{sheet.exam}</p>
                  </div>
                </div>

                {/* Document Body — formulas */}
                <div className="relative flex-1 px-5 py-4 overflow-hidden">
                  {/* paper grid texture */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage:
                      'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }} />

                  {/* watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-slate-100 text-5xl font-serif font-black rotate-[-20deg] select-none">SK</span>
                  </div>

                  <div key={`body-${active}`} className="relative space-y-2 animate-fade-slide">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{sheet.subject}</p>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{sheet.items.length} formulas</p>
                    </div>
                    {sheet.items.map((it, i) => (
                      <div key={i} className="flex items-start gap-2.5 py-1 border-b border-slate-50">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full ${sheet.pillTint} shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[8.5px] font-black text-slate-800 leading-tight">{it.label}</p>
                          <p className="text-[9px] font-mono text-slate-600 leading-tight mt-0.5 break-words">{it.expr}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Document Footer */}
                <div className="px-5 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[8px] font-bold text-slate-400">
                  <span>thesklearnings.pages.dev</span>
                  <span>Page 1 of 1</span>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="hidden md:block absolute -right-4 top-1/3 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
            <div className="hidden md:block absolute -left-4 top-2/3 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '2s' }} />

            {/* Floating "Download Gate" badge — communicates the lead-magnet mechanic */}
            <div className="absolute -bottom-6 -left-2 md:-left-6 px-4 py-2.5 bg-black border border-white/10 rounded-2xl shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">Delivered on</p>
                  <p className="text-xs text-white font-black">WhatsApp &middot; Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
