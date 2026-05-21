type Program = {
  title: string;
  audience: string;
  grade: string;
  tag: string;
  accent: string;
  duration: string;
  subjects: string[];
  targets: string[];
  outcomes: string[];
};

const programs: Program[] = [
  {
    title: 'NEET & JEE Integrated Microbatch Program',
    audience: 'For Grade XI & XII Students',
    grade: 'Class XI – XII',
    tag: 'Integrated Track',
    accent: 'from-brand-orange to-amber-400',
    duration: '2-Year Integrated',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    targets: ['NEET-UG', 'JEE Main', 'JEE Advanced', 'CBSE / State Boards'],
    outcomes: [
      'Govt. MBBS seat readiness with full PCB syllabus mastery.',
      'JEE Main + Advanced practice with weekly mock papers.',
      'Boards covered alongside competitive prep — one timetable.',
    ],
  },
  {
    title: 'Foundations for NEET / JEE & IISER',
    audience: 'For Grade IX & X Students',
    grade: 'Class IX – X',
    tag: 'Foundation Track',
    accent: 'from-brand-gold to-yellow-300',
    duration: '2-Year Foundation',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    targets: ['NEET Foundation', 'JEE Foundation', 'IISER / Olympiads', 'School Boards'],
    outcomes: [
      'Strong conceptual base for Class XI competitive jump.',
      'IISER & Olympiad-ready problem-solving habits.',
      'Above-grade-level board scores from day one.',
    ],
  },
];

const features = [
  {
    title: '10 Students Per Class',
    body: 'Microbatches built for focused attention and complete concept clarity — no student gets lost in the crowd.',
  },
  {
    title: 'Individual Academic Analysis',
    body: 'Every study plan is shaped by a one-on-one academic diagnosis of the student’s current level.',
  },
  {
    title: 'Personalised Intensive Training',
    body: 'Training that targets each student’s specific learning gaps and competitive exam readiness.',
  },
  {
    title: 'Advanced Assessment System',
    body: 'Consistent error analysis and tracking, so weak areas are caught and corrected before exam day.',
  },
  {
    title: 'Real NEET Simulation Exams',
    body: 'Every first Sunday of the month, students sit a real NEET simulation in actual college and school exam centers.',
  },
  {
    title: 'Boards + Competitive in One',
    body: 'Board syllabus and competitive exam preparation handled together inside one structured system.',
  },
];

const dayRoutine = [
  { time: 'Morning',     stage: 'Concept Class',       desc: 'Live, board-driven concept teaching by subject experts.' },
  { time: 'Mid-Morning', stage: 'Practice & Problems', desc: 'Guided problem-solving in NEET / JEE pattern.' },
  { time: 'Afternoon',   stage: 'Doubt Clearing',      desc: 'Open floor — every question gets answered before moving on.' },
  { time: 'Evening',     stage: 'Daily Test',          desc: 'Chapter-wise quiz covering what was taught that day.' },
  { time: 'Late Evening',stage: 'Error Review',        desc: 'Faculty walk-through of common mistakes from the daily test.' },
  { time: 'Night',       stage: 'Self-Study Plan',     desc: 'Personalised home practice list — tracked the next morning.' },
];

const assessment = [
  {
    title: 'Daily Chapter Tests',
    body: 'Short, sharp quizzes after every concept class to lock in retention.',
  },
  {
    title: 'Weekly Cumulative Test',
    body: 'Mixed-chapter practice papers in NEET / JEE pattern, every weekend.',
  },
  {
    title: 'Monthly NEET Simulation',
    body: 'First Sunday of every month — full NEET paper in real college & school exam centers.',
  },
  {
    title: 'Error Tracking System',
    body: 'Every wrong answer is logged, classified, and revisited until corrected — no leakage of weak areas.',
  },
];

const admission = [
  { step: '01', title: 'Enquiry Call',        body: 'Quick chat with our admissions team to understand goals and grade.' },
  { step: '02', title: 'Academic Diagnosis',  body: 'A one-on-one academic assessment to map current level and gaps.' },
  { step: '03', title: 'Personalised Plan',   body: 'A study plan + batch recommendation tailored to the student.' },
  { step: '04', title: 'Batch Allocation',    body: 'Seat confirmed in a 10-student microbatch — classes begin.' },
];

const brochureCallouts = [
  { value: '10',     title: 'Students per class',                 body: 'Microbatches sized for true individual attention.' },
  { value: '24/35',  title: 'Govt. MBBS placements in 2025',      body: 'NEET-UG result from our 2025 batch.' },
  { value: '23/28',  title: 'Selected for JEE Advanced 2026',     body: 'Engineering ambition meets microbatch discipline.' },
  { value: '1st Sun', title: 'Real NEET simulation, every month', body: 'Held in actual college and school exam centers.' },
];

export default function MicrobatchSystem() {
  return (
    <section
      id="microbatch"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-dark-bg"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] max-w-[90vw] bg-brand-orange/5 blur-[200px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16 space-y-5 relative z-10">
        <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
          Medical &amp; Engineering Foundations
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05] tracking-tight max-w-4xl mx-auto text-balance">
          A Structured{' '}
          <span className="font-script text-brand-gold italic font-normal">Microbatch</span>{' '}
          Learning System
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg font-medium">
          Trust us to Triumph — small batches, individual study plans, and real exam simulation built into one disciplined system.
        </p>
      </div>

      {/* Expanded program cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 md:gap-6 relative z-10">
        {programs.map((p) => (
          <article
            key={p.title}
            className="relative glass-card rounded-3xl p-6 md:p-8 overflow-hidden group hover:border-brand-gold/40 transition-colors"
          >
            <div className={`absolute -top-24 -right-24 w-56 h-56 bg-gradient-to-br ${p.accent} opacity-20 blur-3xl rounded-full pointer-events-none group-hover:opacity-30 transition-opacity`} />

            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange/90 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-3 py-1">
                {p.tag}
              </span>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                {p.duration}
              </span>
            </div>

            <h3 className="mt-5 text-2xl md:text-3xl font-bold text-white leading-tight">
              {p.title}
            </h3>

            <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${p.accent} text-slate-900 text-xs md:text-sm font-black uppercase tracking-wider shadow-lg`}>
              {p.audience}
            </div>

            {/* Subjects */}
            <div className="mt-6 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Subjects</p>
              <div className="flex flex-wrap gap-1.5">
                {p.subjects.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-bold text-white/80 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Target exams */}
            <div className="mt-5 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Target Exams</p>
              <div className="flex flex-wrap gap-1.5">
                {p.targets.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 rounded-lg px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="mt-5 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40">What students achieve</p>
              <ul className="space-y-1.5">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-white/70 leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* Brochure Showcase — Premium Display */}
      <div className="max-w-6xl mx-auto mt-14 md:mt-20 relative z-10">
        <div className="text-center mb-8 md:mb-12 space-y-2">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            The complete picture
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Everything, in one printable page
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            The official microbatch brochure — programs, features, and our latest results, all in one place.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 items-center">
          {/* Image with premium framing */}
          <div className="lg:col-span-3 relative group">
            {/* Ambient halos */}
            <div className="absolute -top-12 -left-12 w-64 md:w-80 h-64 md:h-80 bg-brand-orange/25 blur-[120px] rounded-full pointer-events-none animate-pulse" />
            <div
              className="absolute -bottom-12 -right-12 w-64 md:w-80 h-64 md:h-80 bg-brand-gold/15 blur-[120px] rounded-full pointer-events-none animate-pulse"
              style={{ animationDelay: '1.2s' }}
            />

            {/* Gradient border halo */}
            <div className="absolute -inset-[2px] rounded-[1.6rem] bg-gradient-to-br from-brand-gold/70 via-brand-orange/50 to-brand-gold/70 opacity-90 blur-[4px] group-hover:opacity-100 transition-opacity" />

            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
              <img
                src="/details.jpeg"
                alt="THE SK LEARNINGS Microbatch System — full brochure"
                loading="lazy"
                className="w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Subtle top vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15 rounded-3xl pointer-events-none" />

              {/* Top-right badge */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-brand-gold/30 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold shadow-lg">
                Official Brochure
              </div>

              {/* Bottom caption strip */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent rounded-b-3xl pointer-events-none">
                <p className="text-white text-xs md:text-sm font-bold tracking-tight">
                  Medical &amp; Engineering Foundations
                </p>
                <p className="text-white/60 text-[10px] md:text-xs">
                  A Structured Microbatch Learning System &nbsp;•&nbsp; Madurai
                </p>
              </div>
            </div>

            {/* Floating decorative accents */}
            <div className="hidden md:block absolute -top-3 -right-3 w-6 h-6 bg-brand-gold rotate-45 shadow-lg shadow-brand-gold/40 animate-float" />
            <div
              className="hidden md:block absolute -bottom-3 -left-3 w-4 h-4 bg-brand-orange rounded-full shadow-lg shadow-brand-orange/40 animate-float"
              style={{ animationDelay: '1.8s' }}
            />
            <div
              className="hidden lg:block absolute top-1/3 -left-5 w-3 h-3 rounded-full bg-brand-gold/60 animate-float"
              style={{ animationDelay: '0.8s' }}
            />
          </div>

          {/* Right callouts */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            {brochureCallouts.map((c) => (
              <div
                key={c.title}
                className="glass-card rounded-2xl p-4 md:p-5 group hover:border-brand-gold/30 transition-colors flex items-start gap-4"
              >
                <div className="text-2xl md:text-3xl font-black text-brand-gold tabular-nums leading-none shrink-0 min-w-[3.5rem] text-right">
                  {c.value}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <p className="text-white font-bold text-sm md:text-base leading-snug">{c.title}</p>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}

            {/* CTA — view full brochure */}
            <a
              href="/details.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-xl border border-brand-gold/30 bg-brand-gold/5 hover:bg-brand-gold/10 hover:border-brand-gold/50 text-brand-gold text-xs font-black uppercase tracking-[0.25em] transition-all"
            >
              View Full Brochure
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Six pillars / feature grid */}
      <div className="max-w-6xl mx-auto mt-14 md:mt-20 relative z-10">
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            Six pillars
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            What every microbatch student gets
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-5 md:p-6 hover:border-brand-gold/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-sm font-black text-slate-900 shrink-0 shadow-md">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base md:text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                    {f.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Routine Timeline */}
      <div className="max-w-6xl mx-auto mt-14 md:mt-20 relative z-10">
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            Inside the day
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            How a microbatch day actually works
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Concept → Practice → Doubt → Test → Review. Every day. That's the rhythm that makes the difference.
          </p>
        </div>

        <ol className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {dayRoutine.map((d, i) => (
            <li
              key={d.stage}
              className="glass-card rounded-2xl p-5 md:p-6 hover:border-brand-orange/30 transition-colors relative"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  {d.time}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1.5">{d.stage}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{d.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Assessment & Simulation */}
      <div className="max-w-6xl mx-auto mt-14 md:mt-20 relative z-10">
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            Assessment system
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Tested constantly. Corrected before exam day.
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {assessment.map((a) => (
            <div
              key={a.title}
              className="glass-card rounded-2xl p-5 md:p-6 hover:border-brand-gold/30 transition-colors"
            >
              <h4 className="text-base md:text-lg font-bold text-white mb-2">{a.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>

        {/* Simulation callout */}
        <div className="mt-6 glass-card rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-5 border border-brand-orange/20">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-2xl font-black text-slate-900 shrink-0 shadow-lg">
            1st
          </div>
          <div className="text-center md:text-left">
            <p className="text-white text-lg md:text-xl font-bold leading-snug">
              First Sunday of every month — real NEET simulation exam.
            </p>
            <p className="text-white/60 text-sm mt-1">
              Held inside actual college and school exam centers so students walk into NEET day with zero surprise.
            </p>
          </div>
        </div>
      </div>

      {/* Admission Flow */}
      <div className="max-w-6xl mx-auto mt-14 md:mt-20 relative z-10">
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            How to join
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Admission in 4 simple steps
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {admission.map((a) => (
            <div
              key={a.step}
              className="glass-card rounded-2xl p-5 md:p-6 hover:border-brand-gold/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-black text-brand-gold/80 tabular-nums leading-none">
                {a.step}
              </div>
              <h4 className="mt-3 text-base md:text-lg font-bold text-white">{a.title}</h4>
              <p className="mt-1.5 text-white/60 text-sm leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-16 relative z-10">
        <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 md:gap-8 text-center md:text-left">
          <div className="grow">
            <p className="text-white text-lg md:text-xl font-bold leading-snug">
              Ready for a microbatch seat? Talk to our admissions team.
            </p>
            <p className="text-white/60 text-sm mt-1">
              Bethaniyapuram, Madurai &nbsp;•&nbsp; 90956 36001 / 95666 06555
            </p>
          </div>
          <a
            href="https://wa.me/919095636001?text=Hi%20THE%20SK%20LEARNINGS,%20I'd%20like%20admission%20details%20for%20the%20microbatch%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-brand-orange text-white text-xs font-black rounded-full uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-orange/20 shrink-0"
          >
            Admission Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
