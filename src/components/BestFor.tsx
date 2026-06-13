const needs = [
  'Personal academic attention',
  'Regular correction after tests',
  'Better discipline and study routine',
  'Strong foundation in concepts',
  'Close teacher monitoring',
  'Parent-visible progress',
];

export default function BestFor() {
  return (
    <section
      id="best-for"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-dark-bg"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] max-w-[70vw] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-14 space-y-5">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            Is this the right fit?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
            This Program Is Best For{' '}
            <span className="font-script text-brand-gold italic font-normal">Students Who Need</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
          {needs.map((n) => (
            <div
              key={n}
              className="glass-card rounded-2xl p-4 md:p-5 flex items-center gap-4 hover:border-brand-gold/30 transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <p className="text-white font-semibold text-sm md:text-base leading-snug">{n}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 glass-card rounded-2xl p-6 md:p-8 text-center border border-brand-orange/20">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-serif font-bold leading-snug max-w-3xl mx-auto">
            This is not a mass classroom model. It is designed for students who need{' '}
            <span className="text-brand-gold">focused guidance</span> and{' '}
            <span className="text-brand-gold">consistent correction</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
