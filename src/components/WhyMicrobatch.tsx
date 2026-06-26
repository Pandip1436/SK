const cards = [
  {
    title: 'Small Batch Attention',
    body: 'Every student is visible to the teacher.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    ),
  },
  {
    title: 'Individual Error Tracking',
    body: 'Mistakes are identified, recorded, and corrected.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Daily Academic Monitoring',
    body: 'Preparation is measured through tests, not assumptions.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    ),
  },
  {
    title: 'Parent Communication',
    body: 'Parents receive clear updates about progress and discipline.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    ),
  },
];

export default function WhyMicrobatch() {
  return (
    <section
      id="why-microbatch"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-black"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] max-w-[90vw] bg-brand-orange/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-5 relative z-10">
        <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
          The microbatch difference
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
          Why Microbatch Learning{' '}
          <span className="font-script text-brand-gold italic font-normal">Works Better</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Large classrooms often make it difficult to track every student's understanding, mistakes,
          discipline, and test improvement. At THE SK LEARNINGS, microbatch learning lets teachers observe
          each student closely, identify weak areas faster, and give focused academic correction.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative z-10">
        {cards.map((c) => (
          <article
            key={c.title}
            className="glass-card rounded-2xl p-6 md:p-7 hover:border-brand-gold/40 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center shadow-lg mb-5">
              <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                {c.icon}
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
              {c.title}
            </h3>
            <p className="mt-2 text-white/60 text-sm md:text-[15px] leading-relaxed">{c.body}</p>
          </article>
        ))}
      </div>

      {/* Super 40 Microbatch Poster Showcase */}
      <div className="max-w-4xl mx-auto mt-12 md:mt-16 relative z-10">
        <div className="relative group">
          {/* Ambient halos */}
          <div className="absolute -top-10 -left-10 w-56 md:w-72 h-56 md:h-72 bg-brand-orange/20 blur-[100px] rounded-full pointer-events-none animate-pulse" />
          <div
            className="absolute -bottom-10 -right-10 w-56 md:w-72 h-56 md:h-72 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none animate-pulse"
            style={{ animationDelay: '1.2s' }}
          />

          {/* Gradient border halo */}
          <div className="absolute -inset-[2px] rounded-[1.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px] group-hover:opacity-100 transition-opacity" />

          {/* Image container */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
            <img
              src="/super40-neet-repeater.png"
              alt="THE SK LEARNINGS Super 40 Microbatch for NEET Repeater — Admissions Open"
              loading="lazy"
              className="w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 rounded-3xl pointer-events-none" />

            {/* Top-right badge */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-brand-gold/30 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold shadow-lg">
              Super 40 Batch
            </div>
          </div>

          {/* Floating accents */}
          <div className="hidden md:block absolute -top-3 -right-3 w-5 h-5 bg-brand-gold rotate-45 shadow-lg shadow-brand-gold/40 animate-float" />
          <div
            className="hidden md:block absolute -bottom-3 -left-3 w-3.5 h-3.5 bg-brand-orange rounded-full shadow-lg shadow-brand-orange/40 animate-float"
            style={{ animationDelay: '1.8s' }}
          />
        </div>
      </div>
    </section>
  );
}
