import { useEffect, useState } from 'react';

type Lecture = {
  subject: string;
  topic: string;
  teacher: string;
  duration: string;
  views: string;
  date: string;
  themeRing: string;
  pillTint: string;
  accent: string;
  progressPct: number;
  chapters: { time: string; title: string; current?: boolean }[];
};

const lectures: Lecture[] = [
  {
    subject: 'Physics',
    topic: 'Rotational Motion — Full Concept',
    teacher: 'Mr. Saravanan K.',
    duration: '1h 12m',
    views: '8,420',
    date: '3 days ago',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.55)]',
    pillTint: 'bg-blue-500',
    accent: 'from-blue-500 to-indigo-500',
    progressPct: 22,
    chapters: [
      { time: '00:00', title: 'Why rotation is different' },
      { time: '08:42', title: 'Moment of inertia derivation', current: true },
      { time: '21:18', title: 'Parallel & perpendicular axis' },
      { time: '35:50', title: 'PYQ: NEET 2024 Q14' },
      { time: '52:30', title: 'Rolling without slipping' },
      { time: '1:04:10', title: 'Quick recap' },
    ],
  },
  {
    subject: 'Chemistry',
    topic: 'Aldehydes & Ketones — Reaction Map',
    teacher: 'Dr. Priya Ramesh',
    duration: '58m',
    views: '6,210',
    date: '5 days ago',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.55)]',
    pillTint: 'bg-fuchsia-500',
    accent: 'from-fuchsia-500 to-pink-500',
    progressPct: 32,
    chapters: [
      { time: '00:00', title: 'Aldehyde vs ketone — the difference' },
      { time: '06:30', title: 'Aldol condensation', current: true },
      { time: '18:00', title: 'Cannizzaro reaction' },
      { time: '27:45', title: 'Clemmensen & Wolff-Kishner' },
      { time: '39:10', title: 'Tollens & Fehling tests' },
      { time: '50:20', title: 'JEE Main 2023 walk-through' },
    ],
  },
  {
    subject: 'Biology',
    topic: 'Genetics & Heredity — Mendel to HW',
    teacher: 'Ms. Lakshmi B.',
    duration: '1h 05m',
    views: '9,114',
    date: '1 week ago',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.55)]',
    pillTint: 'bg-emerald-500',
    accent: 'from-emerald-500 to-teal-500',
    progressPct: 28,
    chapters: [
      { time: '00:00', title: 'Why Mendel picked peas' },
      { time: '11:20', title: 'Law of segregation', current: true },
      { time: '24:00', title: 'Dihybrid cross 9:3:3:1' },
      { time: '36:30', title: 'Incomplete & co-dominance' },
      { time: '48:15', title: 'Hardy-Weinberg equilibrium' },
      { time: '58:00', title: 'NEET 2024 mistake patterns' },
    ],
  },
  {
    subject: 'Maths',
    topic: 'Integration — Substitution & By Parts',
    teacher: 'Mr. Vignesh A.',
    duration: '1h 30m',
    views: '5,890',
    date: '2 weeks ago',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(99,102,241,0.55)]',
    pillTint: 'bg-indigo-500',
    accent: 'from-indigo-500 to-violet-500',
    progressPct: 18,
    chapters: [
      { time: '00:00', title: 'Why integration matters in JEE' },
      { time: '09:30', title: 'u-substitution method', current: true },
      { time: '24:18', title: 'Trig substitutions' },
      { time: '41:50', title: 'Integration by parts — ILATE' },
      { time: '1:02:00', title: 'Definite integrals: tricks' },
      { time: '1:18:30', title: 'JEE Advanced PYQs' },
    ],
  },
];

const features = [
  {
    title: 'Searchable Archive',
    description: 'Type any concept — "Aldol", "Bohr model", "Hardy-Weinberg" — and jump straight to the lecture and the minute it was taught.',
  },
  {
    title: 'Chapter Timestamps',
    description: 'Every lecture comes with hand-tagged chapter markers so you never scrub through a one-hour video to find the bit you need.',
  },
  {
    title: 'Speed & Subtitle Control',
    description: 'Watch at 1.5x with pitch correction. Subtitles in Tamil and English so language is never the bottleneck.',
  },
  {
    title: 'Download for Offline',
    description: 'Save lectures to your phone for long commutes and exam-eve revision sessions without internet.',
  },
];

export default function ClassRecordingVault() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % lectures.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const lecture = lectures[active];

  return (
    <section id="class-vault" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Side: Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Missed a Class? <span className="font-script text-brand-gold italic font-normal block mt-2">No Problem.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Every live class is recorded, tagged with chapter timestamps and dropped into a searchable vault. Late joiners catch up at their own pace. Repeat learners replay the parts that mattered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="space-y-2 group">
                <h4 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                  {f.title}
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Desktop Player Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Ambient halos */}
          <div className="absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          <div className="relative w-full max-w-lg">
            {/* Premium gradient border frame */}
            <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

            <div className={`relative aspect-[16/11] rounded-xl p-[2px] shadow-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${lecture.themeRing}`}>
              <div className="relative w-full h-full bg-[#1A1A1A] rounded-[0.65rem] border border-white/10 overflow-hidden">

                {/* Window Header */}
                <div className="h-10 bg-[#252525] border-b border-white/5 flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">SK-CLASS-VAULT</div>
                    <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">2,400+ CLASSES</span>
                  </div>
                  <div className="w-10" />
                </div>

                <div className="absolute inset-x-0 bottom-0 top-10 bg-[#0F1115] flex flex-col">
                  {/* Search bar */}
                  <div className="px-4 py-2.5 border-b border-white/5 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                    </svg>
                    <span className="text-[9px] font-bold text-white/40">Search 2,400+ classes — "{lecture.topic.split(' — ')[0]}"</span>
                    <span className="ml-auto px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-white/5 text-white/40">⌘K</span>
                  </div>

                  {/* Main: Player + Chapters */}
                  <div className="flex-1 grid grid-cols-5 gap-0 overflow-hidden">
                    {/* Left 3/5 — Video player */}
                    <div className="col-span-3 flex flex-col">
                      {/* Video area */}
                      <div key={`vid-${active}`} className={`relative aspect-video bg-gradient-to-br ${lecture.accent} flex items-center justify-center overflow-hidden animate-fade-slide`}>
                        {/* faint diagonal pattern */}
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 18px)',
                        }} />
                        {/* watermark "SK" */}
                        <span className="absolute top-2 left-3 text-white/30 text-[8px] font-black uppercase tracking-widest">SK Learnings</span>
                        {/* Play button */}
                        <div className="relative w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-2xl">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        {/* Live tag */}
                        <span className="absolute top-2 right-3 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-black/40 text-white backdrop-blur">{lecture.duration}</span>
                      </div>

                      {/* Progress bar with chapter markers */}
                      <div className="relative h-1.5 bg-white/5">
                        <div className={`absolute inset-y-0 left-0 bg-gradient-to-r ${lecture.accent}`} style={{ width: `${lecture.progressPct}%` }} />
                        {[0, 12, 28, 48, 70, 88].map((pos, i) => (
                          <span key={i} className="absolute top-0 bottom-0 w-px bg-black/40" style={{ left: `${pos}%` }} />
                        ))}
                        <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-lg" style={{ left: `calc(${lecture.progressPct}% - 5px)` }} />
                      </div>

                      {/* Video meta */}
                      <div key={`meta-${active}`} className="px-4 py-3 space-y-2 animate-fade-slide">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${lecture.pillTint}`} />
                          <span className="text-[8px] font-black text-white/50 uppercase tracking-widest">{lecture.subject}</span>
                        </div>
                        <p className="text-[11px] font-black text-white leading-snug">{lecture.topic}</p>
                        <div className="flex items-center gap-3 text-[8px] text-white/40 font-bold">
                          <span>{lecture.teacher}</span>
                          <span>&middot;</span>
                          <span>{lecture.views} views</span>
                          <span>&middot;</span>
                          <span>{lecture.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right 2/5 — Chapter list */}
                    <div className="col-span-2 border-l border-white/5 flex flex-col">
                      <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between">
                        <p className="text-[8px] font-black text-white/40 uppercase tracking-widest">Chapters</p>
                        <p className="text-[8px] font-black text-white/40">{lecture.chapters.length}</p>
                      </div>
                      <div key={`chap-${active}`} className="flex-1 overflow-y-auto px-2 py-1 space-y-0.5 animate-fade-slide">
                        {lecture.chapters.map((c, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 p-1.5 rounded-md transition-colors ${
                              c.current ? 'bg-white/10' : 'hover:bg-white/5'
                            }`}
                          >
                            <span className={`text-[8px] font-mono font-bold tabular-nums shrink-0 ${c.current ? 'text-brand-gold' : 'text-white/40'}`}>{c.time}</span>
                            <div className="flex-1 min-w-0">
                              <p className={`text-[8.5px] font-bold leading-snug ${c.current ? 'text-white' : 'text-white/60'}`}>{c.title}</p>
                              {c.current && (
                                <p className="text-[7px] font-black text-brand-gold uppercase tracking-widest mt-0.5">Now Playing</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom — lecture selector pills */}
                  <div className="flex items-center gap-1.5 px-3 py-2 border-t border-white/5 overflow-x-auto bg-black/40">
                    {lectures.map((l, idx) => {
                      const isActive = idx === active;
                      return (
                        <button
                          key={l.topic}
                          onClick={() => setActive(idx)}
                          className={`relative shrink-0 px-2 py-1 rounded-full text-[7px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                            isActive
                              ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                              : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                          )}
                          <span className={`w-1.5 h-1.5 rounded-full ${l.pillTint}`} />
                          {l.subject}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
            <div className="hidden md:block absolute -left-4 top-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '2s' }} />

            {/* Floating "Watched" badge */}
            <div className="absolute -bottom-6 -left-2 md:-left-6 px-4 py-2.5 bg-black border border-white/10 rounded-2xl shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">Library</p>
                  <p className="text-xs text-white font-black">2,400+ Classes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
