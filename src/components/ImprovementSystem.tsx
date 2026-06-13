const steps = [
  { label: 'Teach', body: 'Concepts taught clearly in a small, focused batch.' },
  { label: 'Test', body: 'Regular tests measure what was actually understood.' },
  { label: 'Analyse', body: 'Every answer sheet is reviewed for patterns and gaps.' },
  { label: 'Correct', body: 'Weak areas and careless mistakes are corrected one-on-one.' },
  { label: 'Retest', body: 'The same topics are tested again to confirm improvement.' },
  { label: 'Track Progress', body: 'Improvement is recorded and shared over time.' },
];

const monitored = [
  'Learning gaps',
  'Careless mistakes',
  'Weak chapters',
  'Test behaviour',
  'Revision discipline',
];

export default function ImprovementSystem() {
  return (
    <section
      id="improvement"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-black"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] max-w-[90vw] bg-brand-orange/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-5 relative z-10">
        <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
          A continuous cycle
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
          Our Student{' '}
          <span className="font-script text-brand-gold italic font-normal">Improvement System</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          We do not stop with teaching. Every student goes through a continuous improvement cycle where learning
          gaps, careless mistakes, weak chapters, test behaviour, and revision discipline are monitored.
        </p>
      </div>

      {/* Flow */}
      <div className="max-w-6xl mx-auto relative z-10">
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-3">
          {steps.map((s, i) => (
            <li key={s.label} className="relative">
              <div className="glass-card rounded-2xl p-5 h-full hover:border-brand-gold/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-sm font-black text-slate-900 shrink-0 shadow-md">
                    {i + 1}
                  </span>
                  <h3 className="text-base lg:text-[15px] font-bold text-white leading-tight">{s.label}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              </div>
              {/* connector arrow */}
              {i < steps.length - 1 && (
                <span className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-brand-gold/60 text-lg font-black">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* Loop note + what we monitor */}
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <div className="glass-card rounded-2xl p-6 flex items-center gap-4 border border-brand-orange/20">
            <span className="text-3xl shrink-0">↻</span>
            <p className="text-white/80 text-sm md:text-base leading-snug">
              The cycle repeats until the student is genuinely improving — not just moving on.
            </p>
          </div>
          <div className="md:col-span-2 glass-card rounded-2xl p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-3">What we monitor</p>
            <div className="flex flex-wrap gap-2">
              {monitored.map((m) => (
                <span
                  key={m}
                  className="text-xs md:text-sm font-bold text-white/80 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
