const features = [
  { title: 'CBT Practice', body: 'Hands-on training on a real computer-based test interface.' },
  { title: 'Real Exam Feel', body: 'Timed papers and navigation that mirror the actual exam.' },
  { title: 'Error Analysis', body: 'Every attempt is reviewed so mistakes are caught and corrected.' },
  { title: 'Individual Care', body: 'Performance is tracked and guided for each student personally.' },
];

export default function CBTPractice() {
  return (
    <section
      id="cbt"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-dark-bg"
    >
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] max-w-[80vw] bg-brand-gold/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14 space-y-5 relative z-10">
        <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
          Competitive exam discipline
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
          Train With Real{' '}
          <span className="font-script text-brand-gold italic font-normal">Exam Discipline</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          As entrance exams move from OMR to computer-based tests, students practise on a real CBT interface — timed
          mocks, detailed analysis, and individual correction, so exam day brings no surprises.
        </p>
      </div>

      {/* Infographic banner */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative glass-card rounded-2xl md:rounded-3xl overflow-hidden border-white/10 shadow-2xl group">
          <img
            src="/CBT.png"
            alt="Master CBT practice before the real exam at THE SK LEARNINGS — CBT practice, real exam feel, error analysis, and individual care"
            loading="lazy"
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>
      </div>

      {/* Feature cards */}
      <div className="max-w-5xl mx-auto mt-8 md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10">
        {features.map((f) => (
          <div key={f.title} className="glass-card rounded-2xl p-5 hover:border-brand-gold/30 transition-colors">
            <h3 className="text-base md:text-lg font-bold text-white leading-snug">{f.title}</h3>
            <p className="mt-1.5 text-white/60 text-sm leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-8 md:mt-10 text-center relative z-10">
        <a
          href="#counselling"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-gold text-white text-xs sm:text-sm font-black rounded-full uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-transform shadow-lg shadow-brand-orange/20"
        >
          Book Your Slot Now →
        </a>
      </div>
    </section>
  );
}
