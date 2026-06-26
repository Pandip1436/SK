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
    title: 'Monthly NEET & JEE CBT Simulation',
    body: 'First Sunday of every month — real NEET (pen-and-paper) & JEE (CBT) simulation exams in actual exam centers.',
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
  { value: '1st Sun', title: 'Real NEET & JEE CBT simulation, every month', body: 'Held in actual college and school exam centers.' },
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

      {/* Brochure Showcase — Premium Display */}
      <div className="max-w-6xl mx-auto relative z-10">
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
              First Sunday of every month — real NEET &amp; JEE CBT simulation exams.
            </p>
            <p className="text-white/60 text-sm mt-1">
              Held inside actual college and school exam centers so students walk into NEET/JEE day with zero surprise.
            </p>
          </div>
        </div>
      </div>

      {/* Microbatch Video Showcase */}
      <div className="max-w-5xl mx-auto mt-14 md:mt-20 relative z-10">
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            See it in action
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Inside a <span className="font-script text-brand-gold italic font-normal">Microbatch</span> Classroom
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Watch how our structured microbatch system works — small batches, focused teaching, and individual attention in every session.
          </p>
        </div>

        <div className="relative group">
          {/* Ambient halos */}
          <div className="absolute -top-10 -left-10 w-56 md:w-72 h-56 md:h-72 bg-brand-orange/15 blur-[100px] rounded-full pointer-events-none animate-pulse" />
          <div
            className="absolute -bottom-10 -right-10 w-56 md:w-72 h-56 md:h-72 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />

          {/* Gradient border halo */}
          <div className="absolute -inset-[2px] rounded-[1.6rem] bg-gradient-to-br from-brand-gold/50 via-brand-orange/30 to-brand-gold/50 opacity-70 blur-[3px] group-hover:opacity-100 transition-opacity duration-500" />

          {/* Video container */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <video
              src="/microvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-3xl"
            />

            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/10 rounded-3xl pointer-events-none" />

            {/* Top-right badge */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-brand-gold/30 text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold shadow-lg flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Microbatch Live
            </div>
          </div>

          {/* Floating accents */}
          <div className="hidden md:block absolute -top-3 -right-3 w-5 h-5 bg-brand-gold rotate-45 shadow-lg shadow-brand-gold/40 animate-float" />
          <div
            className="hidden md:block absolute -bottom-3 -left-3 w-3.5 h-3.5 bg-brand-orange rounded-full shadow-lg shadow-brand-orange/40 animate-float"
            style={{ animationDelay: '2s' }}
          />
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
