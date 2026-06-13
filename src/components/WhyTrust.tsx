const points = [
  {
    title: 'Individual Care Environment',
    body: 'Students are not treated as roll numbers.',
  },
  {
    title: 'Microbatch Monitoring',
    body: 'Teachers can observe learning gaps faster.',
  },
  {
    title: 'Test and Error-Analysis Culture',
    body: 'Performance is improved through correction, not just motivation.',
  },
  {
    title: 'Board + Competitive Balance',
    body: 'Students are guided for school performance and entrance preparation.',
  },
  {
    title: 'Director-Led Academic Supervision',
    body: 'Academic progress is personally reviewed.',
  },
];

export default function WhyTrust() {
  return (
    <section
      id="why-trust"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-black"
    >
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] max-w-[80vw] bg-brand-orange/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-5 relative z-10">
        <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
          Built on trust
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
          Why Parents Trust{' '}
          <span className="font-script text-brand-gold italic font-normal">THE SK LEARNINGS</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Parents trust systems more than claims. Here is what makes ours different.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 relative z-10">
        {points.map((p, i) => (
          <article
            key={p.title}
            className="glass-card rounded-2xl p-6 md:p-7 hover:border-brand-gold/40 transition-colors group"
          >
            <div className="text-3xl md:text-4xl font-black text-brand-gold/30 tabular-nums leading-none mb-4">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
              {p.title}
            </h3>
            <p className="mt-2 text-white/60 text-sm md:text-[15px] leading-relaxed">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
