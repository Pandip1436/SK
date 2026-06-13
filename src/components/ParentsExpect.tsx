const monitored = [
  'Attendance and discipline',
  'Chapter-wise understanding',
  'Test performance',
  'Repeated mistakes',
  'Revision habits',
  'Academic confidence',
  'Progress over time',
];

export default function ParentsExpect() {
  return (
    <section
      id="parents-expect"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-dark-bg"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] max-w-[70vw] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-14 items-center relative z-10">
        {/* Left: narrative */}
        <div className="space-y-5">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            For parents
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
            What Parents Can{' '}
            <span className="font-script text-brand-gold italic font-normal">Expect</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            When a student joins THE SK LEARNINGS, parents can expect a focused academic environment where the
            student's preparation is regularly observed and corrected.
          </p>
          <p className="text-white/55 text-sm md:text-base leading-relaxed">
            Parents are not only looking for classes. They are looking for monitoring, responsibility, and
            improvement — and that is exactly what our system is built to provide.
          </p>
        </div>

        {/* Right: what we monitor */}
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-5">
            We monitor
          </p>
          <ul className="space-y-3">
            {monitored.map((m) => (
              <li key={m} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-white/85 font-semibold text-sm md:text-base">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
