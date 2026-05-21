const milestones = [
  { year: '2017', title: 'THE SK LEARNINGS founded',          body: 'Started in Madurai with a single belief — small batches beat mass coaching.' },
  { year: '2019', title: 'First NEET microbatch',             body: '7 students, 4 placed in Govt. MBBS — proof that the model works.' },
  { year: '2021', title: 'Best NEET conversion to date',      body: '15 of 18 students placed (83%) — the year that cemented our process.' },
  { year: '2025', title: '24 Govt. MBBS + NIITians & IIITians',body: '2025 batch: 24 of 35 NEET placements plus 4 IIT/IIIT selections.' },
  { year: '2026', title: '23 of 28 to JEE Advanced',          body: 'JEE batch breakthrough — 17 students above 90th percentile.' },
];

const principles = [
  {
    label: 'Mission',
    title: 'Turn every microbatch student into a Govt. MBBS or top-engineering qualifier',
    body: 'Through one-on-one academic planning — not mass coaching. Every student is diagnosed, tracked, and corrected by name.',
    accent: 'from-brand-orange to-amber-400',
  },
  {
    label: 'Vision',
    title: 'India’s most disciplined small-batch coaching ecosystem',
    body: 'Built from Bethaniyapuram, Madurai outward — proving that focused regional programs can outperform big-city giants.',
    accent: 'from-brand-gold to-yellow-300',
  },
  {
    label: 'Values',
    title: 'Individual attention. Truth in numbers. Accountability per student.',
    body: 'No inflated batch sizes. No vanity claims. The results table is the only marketing we trust.',
    accent: 'from-amber-500 to-orange-400',
  },
];

const differentiators = [
  { title: '10 Students per Class',           body: 'Not 50. Not 200. Every face is seen, every doubt is heard.' },
  { title: 'One-on-One Academic Diagnosis',   body: 'Before day one — we map your current level and design your plan around it.' },
  { title: 'Error Tracking System',           body: 'Every wrong answer is logged, classified, and revisited until corrected.' },
  { title: 'Real NEET Simulation Monthly',    body: 'First Sunday of every month — full paper, in actual college and school exam centers.' },
  { title: 'Boards + Competitive in One',     body: 'No double schedules — board syllabus runs inside the competitive prep flow.' },
  { title: 'Faculty Who Know Your Last Test', body: 'Teachers walk in knowing what each student got wrong yesterday.' },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] max-w-[80vw] max-h-[80vw] md:max-w-none md:max-h-none bg-brand-orange/5 blur-[120px] rounded-full hidden sm:block" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* Left Side: Visual */}
        <div className="relative order-2 lg:order-1 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto w-full">
          <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] rounded-full animate-pulse hidden sm:block" />

          <div className="relative glass-card aspect-square rounded-2xl md:rounded-3xl overflow-hidden border-white/10 shadow-2xl">
            <img
              src="/about.png"
              alt="Medical Preparation"
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Floating Quote */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-8 md:left-8 md:right-8 p-3 sm:p-4 md:p-6 glass-card bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl border-white/10">
              <p className="text-white font-serif italic text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed">
                "Our mission is to turn every medical aspirant's dream into a stethoscope reality."
              </p>
              <div className="mt-2 sm:mt-3 md:mt-4 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-orange flex items-center justify-center font-black text-white text-xs sm:text-sm shrink-0">SK</div>
                <div className="min-w-0">
                  <p className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest truncate">The SK Team</p>
                  <p className="text-white/40 text-[8px] sm:text-[10px] truncate">Academic Excellence Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 order-1 lg:order-2">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
            <p className="text-brand-orange text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">Our Legacy</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black text-white leading-[0.95] tracking-tight">
              Empowering Future <span className="font-script text-brand-gold italic font-normal block mt-2">Doctors</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transforming academic potential into professional excellence since 2017.
            </p>
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Founded with a vision to democratize elite NEET coaching, THE SK LEARNINGS combines traditional academic rigor with state-of-the-art AI technology. We don't just teach subjects; we build the foundational logic required to excel in India's most competitive medical entrance exam.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6 md:gap-x-8 md:gap-y-8 max-w-md mx-auto lg:mx-0">
            {[
              { value: '10k+', label: 'Successful Aspirants' },
              { value: '98%', label: 'Success Rate' },
              { value: '50+', label: 'Expert Faculty' },
              { value: '24/7', label: 'AI Support' }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1 sm:gap-2 group">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent group-hover:from-brand-gold group-hover:to-brand-orange transition-all duration-500">
                  {stat.value}
                </h4>
                <p className="text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-widest leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 sm:pt-6 flex justify-center lg:justify-start">
            <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/5 border border-white/10 text-white text-[10px] sm:text-xs font-black rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap">
              Learn More About <span className="hidden sm:inline">Our Methodology</span><span className="sm:hidden">SK Methodology</span>
            </button>
          </div>
        </div>

      </div>

      {/* Our Story + Milestones */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 md:gap-12 items-start">
          {/* Story narrative */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
              Our Story
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white leading-tight">
              Small batches.{' '}
              <span className="font-script text-brand-gold italic font-normal">Big seats.</span>
            </h3>
            <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
              <p>
                Founded in Madurai in 2017, THE SK LEARNINGS began with one stubborn belief — disciplined small-batch coaching, not crowded auditoriums, is how students actually reach Government Medical Colleges and top engineering campuses.
              </p>
              <p>
                Our first NEET microbatch in 2019 had seven students. Four of them earned Govt. MBBS seats. The model held. By 2025 we had placed 24 of 35 students in Government Medical Colleges and added four NIITians & IIITians the same year. In 2026, 23 of our 28 JEE students cleared JEE Advanced.
              </p>
              <p>
                We don't run mega-classes. We run microbatches of <span className="text-brand-gold font-bold">10</span> — each student diagnosed, planned for, tested, corrected, and walked into the exam hall by name.
              </p>
            </div>
          </div>

          {/* Milestones timeline */}
          <div className="lg:col-span-2 space-y-3 relative">
            <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em] mb-2">
              Milestones
            </p>
            <ol className="relative border-l border-white/10 pl-5 space-y-5">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[26px] top-1 w-3 h-3 rounded-full bg-gradient-to-br from-brand-orange to-brand-gold ring-4 ring-black" />
                  <p className="text-brand-gold text-xs font-black tabular-nums tracking-widest">{m.year}</p>
                  <p className="text-white font-bold text-sm md:text-base mt-0.5 leading-snug">{m.title}</p>
                  <p className="text-white/55 text-xs md:text-sm mt-1 leading-relaxed">{m.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28 relative z-10">
        <div className="text-center mb-10 md:mb-12 space-y-2">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            What we stand for
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Mission. Vision. Values.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {principles.map((p) => (
            <article
              key={p.label}
              className="relative glass-card rounded-3xl p-6 md:p-7 overflow-hidden group hover:border-brand-gold/40 transition-colors"
            >
              <div className={`absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br ${p.accent} opacity-15 blur-3xl rounded-full pointer-events-none group-hover:opacity-25 transition-opacity`} />
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-orange">
                {p.label}
              </p>
              <h4 className="mt-4 text-lg md:text-xl font-bold text-white leading-snug">
                {p.title}
              </h4>
              <p className="mt-3 text-white/60 text-sm leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>

      {/* What sets us apart */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28 relative z-10">
        <div className="text-center mb-10 md:mb-12 space-y-2">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            The SK difference
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white">What sets us apart</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className="glass-card rounded-2xl p-5 md:p-6 hover:border-brand-gold/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-sm font-black text-slate-900 shrink-0 shadow-md">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="space-y-1">
                  <h4 className="text-base md:text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                    {d.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">{d.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="max-w-5xl mx-auto mt-20 md:mt-28 relative z-10">
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            Leadership
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white">The hand on every microbatch</h3>
        </div>

        <article className="glass-card rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left relative overflow-hidden group hover:border-brand-gold/30 transition-colors">
          <div className="absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br from-brand-orange to-brand-gold opacity-15 blur-3xl rounded-full pointer-events-none" />

          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-4xl md:text-5xl font-black text-slate-900 shrink-0 shadow-xl">
            SK
          </div>

          <div className="flex-grow space-y-2 min-w-0">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange">
              Head, Competitive Exams
            </p>
            <h4 className="text-2xl md:text-3xl font-bold text-white">Mr. Saravanakkumar</h4>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
              Leads every NEET and JEE microbatch with one promise — no student leaves a chapter with an uncorrected error. Builds the personalised study plan that turns enrolled students into Govt. MBBS seats and JEE Advanced selections.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
              {['NEET', 'JEE Main', 'JEE Advanced', 'IISER', 'Boards'].map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded-lg px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Visit us / Contact strip */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28 relative z-10">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          <div className="glass-card rounded-2xl p-5 md:p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Visit us</p>
            <p className="mt-3 text-white font-bold text-base md:text-lg">Bethaniyapuram, Madurai</p>
            <p className="text-white/55 text-sm mt-1">Tamil Nadu, India</p>
          </div>
          <div className="glass-card rounded-2xl p-5 md:p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Admission Enquiry</p>
            <p className="mt-3 text-white font-bold text-base md:text-lg tabular-nums">90956 36001</p>
            <p className="text-white/55 text-sm mt-1 tabular-nums">95666 06555</p>
          </div>
          <div className="glass-card rounded-2xl p-5 md:p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Online</p>
            <p className="mt-3 text-white font-bold text-base md:text-lg break-all">www.thesklearnings.com</p>
            <p className="text-white/55 text-sm mt-1">Trust us to Triumph</p>
          </div>
        </div>

        <div className="mt-6 glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 md:gap-8 text-center md:text-left">
          <div className="grow">
            <p className="text-white text-lg md:text-xl font-bold leading-snug">
              See if a microbatch seat is the right fit for your child.
            </p>
            <p className="text-white/60 text-sm mt-1">
              One short call with our admissions team — no obligation.
            </p>
          </div>
          <a
            href="https://wa.me/919095636001?text=Hi%20THE%20SK%20LEARNINGS,%20I'd%20like%20to%20learn%20more%20about%20the%20microbatch%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-brand-orange text-white text-xs font-black rounded-full uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-orange/20 shrink-0"
          >
            Talk to Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
