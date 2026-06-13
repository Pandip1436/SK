// ─────────────────────────────────────────────────────────────────────────
// PLACEHOLDER PARENT FEEDBACK — replace each entry below with real quotes.
// Keep the same shape: { quote, name, detail }. Nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      'For the first time, a teacher could tell me exactly which chapters my son was weak in and what was being done about it. The small batch makes all the difference.',
    name: 'Parent of a NEET student',
    detail: 'Madurai',
  },
  {
    quote:
      'What I valued most was the regular updates. After every test we knew where she stood, instead of waiting for results to be a surprise.',
    name: 'Parent of an 11th–12th student',
    detail: 'Madurai',
  },
  {
    quote:
      'My daughter became far more disciplined here. The daily testing and correction built a study routine she never had before.',
    name: 'Parent of a JEE aspirant',
    detail: 'Madurai',
  },
  {
    quote:
      'The teachers actually know my child by name and track his mistakes. It never felt like he was just one face in a crowded classroom.',
    name: 'Parent of a Foundation student',
    detail: 'Madurai',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-dark-bg"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] max-w-[90vw] bg-brand-gold/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-5 relative z-10">
        <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
          Parent feedback
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
          What Parents <span className="font-script text-brand-gold italic font-normal">Say</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          The feedback we value most is simple — that their child is finally being noticed, monitored, and improved.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 md:gap-5 relative z-10">
        {testimonials.map((t) => (
          <article
            key={t.name + t.quote.slice(0, 12)}
            className="glass-card rounded-2xl p-6 md:p-8 hover:border-brand-gold/30 transition-colors flex flex-col"
          >
            <svg className="w-8 h-8 text-brand-gold/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            <p className="text-white/85 text-base md:text-lg leading-relaxed italic font-serif grow">
              "{t.quote}"
            </p>
            <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-sm font-black text-slate-900 shrink-0">
                SK
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm font-bold leading-tight">{t.name}</p>
                <p className="text-white/40 text-xs">{t.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
