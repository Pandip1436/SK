import { useEffect, useState } from 'react';

const profiles = [
  {
    name: 'Arjun K.',
    target: 'NEET 2026',
    daysLeft: 215,
    focus: 'Organic Chemistry',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]',
    schedule: [
      { time: '06:00', subject: 'Chemistry', topic: 'Aldehydes & Ketones', duration: 90, priority: true, status: 'now' as const },
      { time: '08:00', subject: 'Physics', topic: 'Wave Optics', duration: 75, priority: false, status: 'next' as const },
      { time: '10:00', subject: 'Botany', topic: 'Plant Anatomy', duration: 60, priority: false, status: 'upcoming' as const },
      { time: '14:00', subject: 'Mock', topic: 'Chemistry Sectional', duration: 45, priority: false, status: 'upcoming' as const },
      { time: '18:00', subject: 'Revision', topic: 'Flashcard Recap', duration: 30, priority: false, status: 'upcoming' as const },
    ],
  },
  {
    name: 'Priya R.',
    target: 'JEE Main 2026',
    daysLeft: 142,
    focus: 'Mechanics',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]',
    schedule: [
      { time: '05:30', subject: 'Physics', topic: 'Rotational Motion', duration: 120, priority: true, status: 'now' as const },
      { time: '08:00', subject: 'Maths', topic: 'Definite Integrals', duration: 90, priority: false, status: 'next' as const },
      { time: '10:30', subject: 'Chemistry', topic: 'Coordination Compounds', duration: 60, priority: false, status: 'upcoming' as const },
      { time: '15:00', subject: 'Mock', topic: 'Physics Sectional', duration: 60, priority: false, status: 'upcoming' as const },
      { time: '19:00', subject: 'Revision', topic: 'Mechanics PYQs', duration: 45, priority: false, status: 'upcoming' as const },
    ],
  },
  {
    name: 'Karthik M.',
    target: 'NEET 2026',
    daysLeft: 89,
    focus: 'Genetics',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]',
    schedule: [
      { time: '06:00', subject: 'Zoology', topic: 'Genetics & Heredity', duration: 120, priority: true, status: 'now' as const },
      { time: '08:30', subject: 'Physics', topic: 'Thermodynamics', duration: 60, priority: false, status: 'next' as const },
      { time: '10:30', subject: 'Chemistry', topic: 'p-Block Elements', duration: 75, priority: false, status: 'upcoming' as const },
      { time: '14:00', subject: 'Mock', topic: 'Full NEET (180Q)', duration: 180, priority: true, status: 'upcoming' as const },
      { time: '19:00', subject: 'Revision', topic: 'Mistakes Analysis', duration: 45, priority: false, status: 'upcoming' as const },
    ],
  },
  {
    name: 'Divya S.',
    target: 'JEE Advanced',
    daysLeft: 60,
    focus: 'Inorganic Chem',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]',
    schedule: [
      { time: '05:00', subject: 'Chemistry', topic: 'd-Block Elements', duration: 120, priority: true, status: 'now' as const },
      { time: '08:00', subject: 'Maths', topic: 'Conic Sections', duration: 90, priority: false, status: 'next' as const },
      { time: '10:30', subject: 'Physics', topic: 'Electromagnetism', duration: 90, priority: false, status: 'upcoming' as const },
      { time: '14:30', subject: 'Mock', topic: 'JEE Adv Paper 1', duration: 180, priority: true, status: 'upcoming' as const },
      { time: '20:00', subject: 'Revision', topic: 'NCERT Inorganic', duration: 60, priority: false, status: 'upcoming' as const },
    ],
  },
];

const subjectStyles: Record<string, { dot: string; tint: string; letter: string }> = {
  Physics:   { dot: 'bg-blue-500',     tint: 'bg-blue-50',     letter: 'P' },
  Chemistry: { dot: 'bg-fuchsia-500',  tint: 'bg-fuchsia-50',  letter: 'C' },
  Botany:    { dot: 'bg-emerald-500',  tint: 'bg-emerald-50',  letter: 'B' },
  Zoology:   { dot: 'bg-amber-500',    tint: 'bg-amber-50',    letter: 'Z' },
  Maths:     { dot: 'bg-indigo-500',   tint: 'bg-indigo-50',   letter: 'M' },
  Mock:      { dot: 'bg-red-500',      tint: 'bg-red-50',      letter: 'T' },
  Revision:  { dot: 'bg-slate-500',    tint: 'bg-slate-100',   letter: 'R' },
};

const features = [
  {
    title: 'Adaptive Scheduling',
    description: "Daily plan rebuilt from your exam date, school hours and weak chapters — not a one-size-fits-all timetable.",
  },
  {
    title: 'Weakness-First Priority',
    description: 'Topics you score lowest in get the morning slots when focus is highest. Strong areas slide to revision blocks.',
  },
  {
    title: 'Auto-Recalibration',
    description: 'After every mock test, the planner re-weights the week — dropping topics you have mastered, adding ones you missed.',
  },
  {
    title: 'WhatsApp Nudges',
    description: 'A gentle ping on your phone at the start of every block, with the exact chapter and resource link to open.',
  },
];

export default function StudyPlanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % profiles.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const profile = profiles[active];

  return (
    <section id="study-planner" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Side: Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Personalized <span className="font-script text-brand-gold italic font-normal block mt-2">Study Planner</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Tell us your target exam and weak chapters. SK Intelligence builds a day-by-day schedule that adapts as you learn — putting your hardest topics where your focus is sharpest.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="space-y-2 group">
                <h4 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                  {f.title}
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Ambient halos */}
          <div className="absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          <div className="relative w-full max-w-sm">
            {/* Premium gradient border frame */}
            <div className="absolute -inset-[2px] rounded-[2.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

            <div className={`relative aspect-[9/16] rounded-[2.5rem] p-[2px] shadow-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${profile.themeRing}`}>
              <div className="relative w-full h-full bg-[#0F1115] rounded-[2.45rem] p-3 overflow-hidden">
                <div className="absolute inset-2 bg-white rounded-[1.8rem] flex flex-col overflow-hidden shadow-inner">

                  {/* Phone Status Bar */}
                  <div className="px-5 pt-3 pb-1 flex items-center justify-between text-[9px] font-black text-slate-700">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span className="w-3 h-1.5 rounded-sm bg-slate-700" />
                      <span className="w-1 h-1 rounded-full bg-slate-700" />
                      <span className="w-3 h-2 rounded-sm border border-slate-700" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-5 pt-2 pb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-brand-orange rounded-lg flex items-center justify-center text-[9px] text-white font-black">SK</div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[10px] font-black text-slate-800">Study Planner</span>
                        <span className="text-[8px] font-bold text-slate-400">Today &middot; Wed</span>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">AI</span>
                  </div>

                  {/* Student Profile Card */}
                  <div key={`profile-${active}`} className="mx-4 mb-3 p-3 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white animate-fade-slide">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-[10px] font-black">{profile.name}</p>
                        <p className="text-[8px] font-bold text-white/50 uppercase tracking-widest">{profile.target}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black leading-none text-brand-gold">{profile.daysLeft}</p>
                        <p className="text-[7px] font-bold text-white/40 uppercase tracking-widest">days left</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                      <span className="text-[8px] font-bold text-white/70 uppercase tracking-widest">Focus: <span className="text-white">{profile.focus}</span></span>
                    </div>
                  </div>

                  {/* Profile selector pills */}
                  <div className="flex items-center gap-1.5 px-4 pb-2 overflow-x-auto">
                    {profiles.map((p, idx) => {
                      const isActive = idx === active;
                      return (
                        <button
                          key={p.name}
                          onClick={() => setActive(idx)}
                          className={`relative shrink-0 px-2 py-1 rounded-full text-[7px] font-black uppercase tracking-widest overflow-hidden transition-all duration-500 ${
                            isActive
                              ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                              : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                          )}
                          {p.name.split(' ')[0]}
                        </button>
                      );
                    })}
                  </div>

                  {/* Schedule Timeline */}
                  <div className="flex-1 px-4 pb-3 overflow-hidden relative">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2">Today's Plan</p>
                    <div key={`sched-${active}`} className="space-y-1.5 animate-fade-slide">
                      {profile.schedule.map((block, i) => {
                        const s = subjectStyles[block.subject];
                        const isNow = block.status === 'now';
                        return (
                          <div
                            key={i}
                            className={`relative flex items-center gap-2 p-2 rounded-xl border transition-all ${
                              isNow
                                ? `${s.tint} border-slate-200 shadow-sm`
                                : 'bg-white border-slate-100'
                            }`}
                          >
                            <div className={`w-7 h-7 rounded-lg ${s.dot} flex items-center justify-center text-[9px] font-black text-white shrink-0`}>
                              {s.letter}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <p className="text-[9px] font-black text-slate-800 truncate">{block.topic}</p>
                                {block.priority && (
                                  <span className="px-1 py-px rounded text-[6px] font-black uppercase tracking-wider bg-red-100 text-red-600 shrink-0">Priority</span>
                                )}
                              </div>
                              <p className="text-[8px] font-bold text-slate-400">{block.time} &middot; {block.duration} min</p>
                            </div>
                            {isNow && (
                              <span className="flex items-center gap-1 text-[7px] font-black uppercase tracking-widest text-red-500 shrink-0">
                                <span className="relative flex w-1.5 h-1.5">
                                  <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                                  <span className="relative w-1.5 h-1.5 rounded-full bg-red-500" />
                                </span>
                                Now
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Decorative gradient */}
                  <div className="h-2 bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange" />
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="hidden md:block absolute -right-4 top-1/3 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
            <div className="hidden md:block absolute -left-4 top-2/3 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '2s' }} />
            <div className="hidden md:block absolute -left-6 bottom-1/4 w-3 h-3 rounded-full bg-brand-gold/60 animate-float" style={{ animationDelay: '1s' }} />

            {/* Floating "Recalibrated" badge */}
            <div className="absolute -bottom-6 -left-2 md:-left-6 px-4 py-2.5 bg-black border border-white/10 rounded-2xl shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">Auto-recalibrated</p>
                  <p className="text-xs text-white font-black">After Last Mock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
