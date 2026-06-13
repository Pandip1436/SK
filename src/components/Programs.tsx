type Program = {
  tag: string;
  title: string;
  body: string;
  level: string;
  focus: string[];
  accent: string;
  enquiry: string;
};

const programs: Program[] = [
  {
    tag: 'Repeater Track',
    title: 'NEET Repeater Program',
    body: 'For students who need disciplined one-year preparation with test-based correction and personal monitoring.',
    level: 'One-Year Intensive',
    focus: ['Daily testing', 'Error correction', 'Personal monitoring'],
    accent: 'from-brand-orange to-amber-400',
    enquiry: "Hi THE SK LEARNINGS, I'd like details about the NEET Repeater Program.",
  },
  {
    tag: 'Integrated Track',
    title: '11th–12th NEET Integrated Program',
    body: 'For students who want board preparation and NEET preparation to move together in a structured way.',
    level: 'Class XI – XII',
    focus: ['Boards + NEET together', 'Structured timetable', 'Continuous testing'],
    accent: 'from-brand-gold to-yellow-300',
    enquiry: "Hi THE SK LEARNINGS, I'd like details about the 11th–12th NEET Integrated Program.",
  },
  {
    tag: 'Engineering Track',
    title: 'JEE Integrated Program',
    body: 'For engineering aspirants who need concept clarity, numerical practice, and regular performance tracking.',
    level: 'Class XI – XII',
    focus: ['Concept clarity', 'Numerical practice', 'Performance tracking'],
    accent: 'from-amber-500 to-orange-400',
    enquiry: "Hi THE SK LEARNINGS, I'd like details about the JEE Integrated Program.",
  },
  {
    tag: 'Foundation Track',
    title: '9th–10th Foundation Program',
    body: 'For students who need early conceptual strength in Science and Mathematics before entering competitive preparation.',
    level: 'Class IX – X',
    focus: ['Strong basics', 'Science & Maths', 'Exam readiness'],
    accent: 'from-orange-500 to-amber-300',
    enquiry: "Hi THE SK LEARNINGS, I'd like details about the 9th–10th Foundation Program.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-dark-bg">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] max-w-[80vw] bg-brand-gold/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-5 relative z-10">
        <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
          What we offer
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
          Programs We <span className="font-script text-brand-gold italic font-normal">Offer</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Every program runs on the same microbatch model — small batches, personal attention, and continuous
          academic correction. Choose the track that fits your child's stage.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 md:gap-6 relative z-10">
        {programs.map((p) => (
          <article
            key={p.title}
            className="relative glass-card rounded-3xl p-6 md:p-8 overflow-hidden group hover:border-brand-gold/40 transition-colors flex flex-col"
          >
            <div className={`absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br ${p.accent} opacity-15 blur-3xl rounded-full pointer-events-none group-hover:opacity-25 transition-opacity`} />

            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange/90 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-3 py-1">
                {p.tag}
              </span>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                {p.level}
              </span>
            </div>

            <h3 className="mt-5 text-2xl md:text-3xl font-bold text-white leading-tight">
              {p.title}
            </h3>
            <p className="mt-3 text-white/65 text-sm md:text-base leading-relaxed grow">{p.body}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.focus.map((f) => (
                <span
                  key={f}
                  className="text-xs font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded-lg px-2.5 py-1"
                >
                  {f}
                </span>
              ))}
            </div>

            <a
              href={`https://wa.me/919095636001?text=${encodeURIComponent(p.enquiry)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-brand-gold/40 text-white text-xs font-black uppercase tracking-[0.2em] transition-all"
            >
              Enquire About This Program
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
