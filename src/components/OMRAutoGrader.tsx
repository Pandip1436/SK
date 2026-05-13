import { useEffect, useState } from 'react';

type Result = {
  student: string;
  exam: string;
  examId: string;
  scannedAgo: string;
  score: number;
  total: number;
  percentile: number;
  rank?: string;
  themeRing: string;
  scoreAccent: string;
  pillTint: string;
  sections: { name: string; correct: number; wrong: number; total: number }[];
  heatmap: { chapter: string; accuracy: number }[]; // 0-100
};

const results: Result[] = [
  {
    student: 'Karthik V.',
    exam: 'NEET Mock #12',
    examId: 'NEET 2026',
    scannedAgo: 'Scanned 32 sec ago',
    score: 642,
    total: 720,
    percentile: 99.4,
    rank: 'Predicted AIR ~2,400',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]',
    scoreAccent: 'from-emerald-500 to-teal-500',
    pillTint: 'bg-emerald-500',
    sections: [
      { name: 'Biology',   correct: 87, wrong: 3,  total: 90 },
      { name: 'Physics',   correct: 39, wrong: 6,  total: 45 },
      { name: 'Chemistry', correct: 34, wrong: 8,  total: 45 },
    ],
    heatmap: [
      { chapter: 'Cell Bio',    accuracy: 100 },
      { chapter: 'Genetics',    accuracy: 92  },
      { chapter: 'Plant Phys',  accuracy: 88  },
      { chapter: 'Mechanics',   accuracy: 84  },
      { chapter: 'Optics',      accuracy: 78  },
      { chapter: 'Thermo',      accuracy: 71  },
      { chapter: 'Organic',     accuracy: 62  },
      { chapter: 'p-Block',     accuracy: 55  },
    ],
  },
  {
    student: 'Priya R.',
    exam: 'NEET Mock #08',
    examId: 'NEET 2026',
    scannedAgo: 'Scanned 1 min ago',
    score: 538,
    total: 720,
    percentile: 95.1,
    rank: 'Predicted AIR ~18,200',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]',
    scoreAccent: 'from-blue-500 to-indigo-500',
    pillTint: 'bg-blue-500',
    sections: [
      { name: 'Biology',   correct: 72, wrong: 12, total: 90 },
      { name: 'Physics',   correct: 30, wrong: 13, total: 45 },
      { name: 'Chemistry', correct: 32, wrong: 10, total: 45 },
    ],
    heatmap: [
      { chapter: 'Cell Bio',    accuracy: 85  },
      { chapter: 'Genetics',    accuracy: 70  },
      { chapter: 'Plant Phys',  accuracy: 80  },
      { chapter: 'Mechanics',   accuracy: 55  },
      { chapter: 'Optics',      accuracy: 60  },
      { chapter: 'Thermo',      accuracy: 50  },
      { chapter: 'Organic',     accuracy: 68  },
      { chapter: 'p-Block',     accuracy: 75  },
    ],
  },
  {
    student: 'Senthil K.',
    exam: 'JEE Main — Sectional',
    examId: 'JEE 2026',
    scannedAgo: 'Scanned 12 sec ago',
    score: 198,
    total: 300,
    percentile: 87.6,
    rank: 'Percentile 87.6',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(99,102,241,0.6)]',
    scoreAccent: 'from-indigo-500 to-violet-500',
    pillTint: 'bg-indigo-500',
    sections: [
      { name: 'Physics',   correct: 18, wrong: 4, total: 25 },
      { name: 'Chemistry', correct: 21, wrong: 2, total: 25 },
      { name: 'Maths',     correct: 16, wrong: 6, total: 25 },
    ],
    heatmap: [
      { chapter: 'Kinematics',  accuracy: 88  },
      { chapter: 'Rotation',    accuracy: 55  },
      { chapter: 'Modern Phy',  accuracy: 70  },
      { chapter: 'Coord Comp',  accuracy: 92  },
      { chapter: 'Organic',     accuracy: 85  },
      { chapter: 'Inorganic',   accuracy: 78  },
      { chapter: 'Calculus',    accuracy: 60  },
      { chapter: 'Coord Geo',   accuracy: 48  },
    ],
  },
  {
    student: 'Divya S.',
    exam: 'JEE Advanced P1',
    examId: 'JEE Adv 2026',
    scannedAgo: 'Scanned 8 sec ago',
    score: 124,
    total: 180,
    percentile: 96.3,
    rank: 'Predicted AIR ~3,200',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]',
    scoreAccent: 'from-fuchsia-500 to-pink-500',
    pillTint: 'bg-fuchsia-500',
    sections: [
      { name: 'Physics',   correct: 14, wrong: 3, total: 18 },
      { name: 'Chemistry', correct: 13, wrong: 4, total: 18 },
      { name: 'Maths',     correct: 12, wrong: 4, total: 18 },
    ],
    heatmap: [
      { chapter: 'EM Waves',    accuracy: 90  },
      { chapter: 'Optics',      accuracy: 82  },
      { chapter: 'Thermo',      accuracy: 65  },
      { chapter: 'd-Block',     accuracy: 88  },
      { chapter: 'Polymers',    accuracy: 50  },
      { chapter: 'Aldehydes',   accuracy: 75  },
      { chapter: 'Vectors',     accuracy: 70  },
      { chapter: 'Probability', accuracy: 58  },
    ],
  },
];

const features = [
  {
    title: 'One-Tap Scanning',
    description: 'Point your phone at the OMR sheet — auto-detects edges, corrects skew and reads every bubble in under five seconds.',
  },
  {
    title: 'Section Breakdown',
    description: 'Biology, Physics, Chemistry or Maths — each section gets correct/wrong counts, net marks and time analysis.',
  },
  {
    title: 'Mistake Heatmap',
    description: 'Chapter-wise accuracy grid surfaces the topics that quietly cost you the most marks — at a glance, not after an hour of analysis.',
  },
  {
    title: 'Pattern-Aware',
    description: 'Auto-detects NEET (180Q), JEE Main (90Q), JEE Advanced or sectional papers. No setup, no template uploads.',
  },
];

const accuracyColor = (acc: number) => {
  if (acc >= 85) return 'bg-emerald-500';
  if (acc >= 70) return 'bg-amber-500';
  if (acc >= 55) return 'bg-orange-500';
  return 'bg-red-500';
};

const accuracyTint = (acc: number) => {
  if (acc >= 85) return 'text-emerald-700';
  if (acc >= 70) return 'text-amber-700';
  if (acc >= 55) return 'text-orange-700';
  return 'text-red-700';
};

export default function OMRAutoGrader() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % results.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const r = results[active];
  const pct = Math.round((r.score / r.total) * 100);

  return (
    <section id="omr-grader" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Right Side: Content */}
        <div className="space-y-12 order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Take a Photo, <span className="font-script text-brand-gold italic font-normal block mt-2">Get Your Score</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Took an offline mock test? Photograph the OMR sheet with your phone — get the full scorecard, section breakdown and chapter heatmap before you've put the pen down. No uploads, no waiting, no spreadsheets.
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

          {/* Result selector pills */}
          <div className="flex items-center gap-2 flex-wrap pt-2">
            {results.map((res, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={res.exam}
                  onClick={() => setActive(idx)}
                  className={`relative shrink-0 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 overflow-hidden transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                  )}
                  <span className={`w-1.5 h-1.5 rounded-full ${res.pillTint}`} />
                  {res.examId}
                </button>
              );
            })}
          </div>
        </div>

        {/* Left Side: Phone Mockup */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          {/* Ambient halos */}
          <div className="absolute -top-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          <div className="relative w-full max-w-sm">
            {/* Premium gradient border frame */}
            <div className="absolute -inset-[2px] rounded-[2.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

            <div className={`relative aspect-[9/17] rounded-[2.5rem] p-[2px] shadow-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${r.themeRing}`}>
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
                  <div className="px-4 pt-2 pb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-brand-orange rounded-lg flex items-center justify-center text-[9px] text-white font-black">SK</div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[10px] font-black text-slate-800">OMR Auto-Grader</span>
                        <span key={`ago-${active}`} className="text-[8px] font-bold text-emerald-600 animate-fade-slide">{r.scannedAgo}</span>
                      </div>
                    </div>
                    {/* OMR thumbnail */}
                    <div className="relative w-9 h-11 rounded-md border border-slate-200 bg-slate-50 overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0.5 grid grid-cols-2 gap-px">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <span
                            key={i}
                            className={`block rounded-full ${i % 3 === 0 ? 'bg-slate-700' : 'bg-slate-200'}`}
                            style={{ width: '3px', height: '3px' }}
                          />
                        ))}
                      </div>
                      <span className="absolute bottom-0 inset-x-0 text-[5px] font-black text-slate-500 text-center bg-white/80">SCAN</span>
                    </div>
                  </div>

                  {/* Score Hero Card */}
                  <div key={`hero-${active}`} className={`relative mx-4 mb-3 p-4 rounded-2xl bg-gradient-to-br ${r.scoreAccent} text-white overflow-hidden animate-fade-slide`}>
                    {/* faint diagonal pattern */}
                    <div className="absolute inset-0 opacity-15" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 16px)',
                    }} />
                    <div className="relative flex items-start justify-between">
                      <div>
                        <p className="text-[8px] font-black text-white/70 uppercase tracking-widest">{r.student}</p>
                        <p className="text-[9px] font-bold text-white/80 mt-0.5">{r.exam}</p>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-white/20 text-white backdrop-blur">{pct}%</span>
                    </div>
                    <div className="relative flex items-baseline gap-1.5 mt-2">
                      <span className="text-4xl font-black leading-none">{r.score}</span>
                      <span className="text-sm font-bold text-white/70">/ {r.total}</span>
                    </div>
                    <div className="relative flex items-center justify-between mt-3 pt-2 border-t border-white/15">
                      <div>
                        <p className="text-[7px] font-black text-white/60 uppercase tracking-widest">Percentile</p>
                        <p className="text-[11px] font-black">{r.percentile}</p>
                      </div>
                      {r.rank && (
                        <div className="text-right">
                          <p className="text-[7px] font-black text-white/60 uppercase tracking-widest">Forecast</p>
                          <p className="text-[10px] font-black text-brand-gold">{r.rank}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Section Breakdown */}
                  <div className="px-4 mb-3">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2">Section Breakdown</p>
                    <div key={`sections-${active}`} className="space-y-1.5 animate-fade-slide">
                      {r.sections.map((s) => {
                        const sectPct = Math.round((s.correct / s.total) * 100);
                        return (
                          <div key={s.name} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-[9px] font-black text-slate-800">{s.name}</p>
                              <p className="text-[8px] font-bold text-slate-500 tabular-nums">
                                <span className="text-emerald-600 font-black">{s.correct}</span>
                                <span className="text-slate-300 mx-0.5">/</span>
                                <span className="text-red-500 font-black">{s.wrong}</span>
                                <span className="text-slate-300 mx-0.5">/</span>
                                <span>{s.total}</span>
                              </p>
                            </div>
                            <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${accuracyColor(sectPct)} transition-all`}
                                style={{ width: `${sectPct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Heatmap */}
                  <div className="px-4 flex-1 overflow-hidden">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Mistake Heatmap</p>
                      <p className="text-[7px] font-black text-slate-300 uppercase tracking-widest">By Chapter</p>
                    </div>
                    <div key={`heat-${active}`} className="grid grid-cols-4 gap-1 animate-fade-slide">
                      {r.heatmap.map((h, i) => (
                        <div
                          key={i}
                          className={`relative rounded-md aspect-square ${accuracyColor(h.accuracy)} bg-opacity-20 border border-slate-100 p-1 overflow-hidden`}
                        >
                          <p className={`text-[6px] font-black uppercase tracking-tight ${accuracyTint(h.accuracy)} truncate leading-none`}>
                            {h.chapter}
                          </p>
                          <p className={`absolute bottom-0.5 right-1 text-[9px] font-black ${accuracyTint(h.accuracy)} tabular-nums`}>
                            {h.accuracy}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Decorative gradient */}
                  <div className="h-2 bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange mt-3" />
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="hidden md:block absolute -right-4 top-1/3 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
            <div className="hidden md:block absolute -left-4 top-2/3 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '2s' }} />

            {/* Floating "Powered by" badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 px-4 py-2.5 bg-black border border-white/10 rounded-2xl shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">5-second grading</p>
                  <p className="text-xs text-white font-black">From Phone Camera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
