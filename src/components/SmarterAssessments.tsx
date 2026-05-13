import { useEffect, useState } from 'react';

const subjectQuestions = [
  {
    subject: 'Biology',
    icon: '🧬',
    chip: 'bg-emerald-500',
    chapter: 'Reproduction',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]',
    question: 'Which of the following is responsible for the formation of the corpus luteum?',
    options: ['LH (Luteinizing Hormone)', 'FSH', 'Estrogen', 'Progesterone'],
    correctIdx: 0
  },
  {
    subject: 'Physics',
    icon: '🔬',
    chip: 'bg-blue-500',
    chapter: 'Wave Optics',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]',
    question: 'In Young’s double-slit experiment, fringe width is directly proportional to:',
    options: ['Slit separation', 'Wavelength of light', 'Distance to screen', 'Both wavelength and distance'],
    correctIdx: 3
  },
  {
    subject: 'Chemistry',
    icon: '⚗️',
    chip: 'bg-fuchsia-500',
    chapter: 'Organic Reactions',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]',
    question: 'Which reagent is best for converting an alcohol to an alkyl halide?',
    options: ['SOCl₂', 'NaOH', 'HCl(aq)', 'KMnO₄'],
    correctIdx: 0
  },
  {
    subject: 'Botany',
    icon: '🌿',
    chip: 'bg-lime-500',
    chapter: 'Plant Kingdom',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]',
    question: 'Cycas is classified under which group of plants?',
    options: ['Bryophyta', 'Pteridophyta', 'Gymnosperms', 'Angiosperms'],
    correctIdx: 2
  }
];

export default function SmarterAssessments() {
  const [activeSubject, setActiveSubject] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSubject((prev) => (prev + 1) % subjectQuestions.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const current = subjectQuestions[activeSubject];

  const features = [
    {
      title: "NTA Pattern Simulation",
      description: "Experience the exact interface and question pattern of the actual NEET examination."
    },
    {
      title: "Real-time Rank Predictor",
      description: "Get an instant estimation of your All India Rank based on your mock test performance."
    },
    {
      title: "Conceptual Gap Analysis",
      description: "Our AI identifies specific sub-topics in Bio, Chem, or Physics where you need more focus."
    }
  ];

  return (
    <section id="assessments" className="py-16 md:py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white">
          Real Exam <span className="font-script text-brand-gold italic font-normal">Practice</span>
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          Master the NTA pattern with AI-driven assessments that pinpoint your weak areas in Bio, Chem, and Physics.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-start mt-12 md:mt-20">
        {/* Left Side: Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Speed Management & Accuracy Trends
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              SK Intelligence tracks your time spent per question, accuracy trends, and conceptual gaps. Get a detailed NEET-rank prediction after every test.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2 group">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                  {feature.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Mockup */}
        <div className="relative lg:sticky lg:top-32 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto w-full">
          {/* Ambient halos */}
          <div className="hidden sm:block absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="hidden sm:block absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.2s' }} />

          {/* Premium gradient border frame */}
          <div className="absolute -inset-[2px] rounded-[1.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

          <div className={`relative aspect-[16/10] rounded-3xl p-[2px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${current.themeRing}`}>
            <div className="relative w-full h-full bg-blue-900 rounded-[1.45rem] p-1 overflow-hidden">
              <div className="absolute inset-1 bg-white rounded-[1.4rem] p-4 md:p-6 flex flex-col overflow-hidden">
                {/* Question Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                      <span className="relative w-2 h-2 rounded-full bg-red-500" />
                    </span>
                    <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">
                      Live NEET Mock #42
                    </p>
                    <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">AI</span>
                  </div>
                  <div className="text-brand-orange text-sm font-black font-mono">02:45:12</div>
                </div>

                {/* Subject Pills */}
                <div className="flex items-center gap-1.5 mb-4 overflow-x-auto">
                  {subjectQuestions.map((s, idx) => {
                    const isActive = idx === activeSubject;
                    return (
                      <button
                        key={s.subject}
                        onClick={() => setActiveSubject(idx)}
                        className={`relative shrink-0 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                        )}
                        <span className={`text-xs ${isActive ? 'scale-110' : 'opacity-60'}`}>{s.icon}</span>
                        {s.subject}
                      </button>
                    );
                  })}
                </div>

                {/* Question */}
                <div key={`q-${activeSubject}`} className="mb-4 animate-fade-slide relative">
                  {/* Floating ambient particles */}
                  <div className="pointer-events-none absolute -top-2 right-4 w-1 h-1 rounded-full bg-brand-gold/60 animate-float" />
                  <div className="pointer-events-none absolute top-1 right-1/3 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float" style={{ animationDelay: '2s' }} />
                  <div className="pointer-events-none absolute -bottom-2 left-1/4 w-1 h-1 rounded-full bg-slate-400/60 animate-float" style={{ animationDelay: '3.5s' }} />
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 ${current.chip} text-white text-[8px] font-bold rounded`}>{current.subject}</span>
                    <span className="text-[8px] text-slate-400 font-bold">Marks: +4 | -1</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">
                    {current.question}
                  </p>
                </div>

                {/* Options */}
                <div key={`opts-${activeSubject}`} className="space-y-2 mb-6 animate-fade-slide">
                  {current.options.map((opt, i) => {
                    const isCorrect = i === current.correctIdx;
                    return (
                      <div
                        key={opt}
                        className={`p-2.5 border rounded-lg text-[9px] font-medium flex items-center gap-2 cursor-pointer transition-all ${
                          isCorrect
                            ? 'border-emerald-300 bg-emerald-50 text-slate-800'
                            : 'border-slate-100 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold ${
                            isCorrect ? 'bg-emerald-500 text-white border border-emerald-500' : 'border border-slate-200'
                          }`}
                        >
                          {isCorrect ? '✓' : String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                      </div>
                    );
                  })}
                </div>

                {/* Footer Meta */}
                <div className="mt-auto pt-3 border-t border-slate-50 flex justify-between items-center text-[7px] text-slate-400 font-bold uppercase tracking-wider">
                  <div className="flex gap-4">
                    <span>Subject: {current.subject}</span>
                    <span>Chapter: {current.chapter}</span>
                  </div>
                  <button className="px-4 py-1.5 bg-gradient-to-br from-brand-orange to-amber-400 text-slate-900 rounded font-black shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform">Next Question</button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="hidden md:block absolute -right-4 top-1/3 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
          <div className="hidden md:block absolute -left-4 bottom-1/3 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '3s' }} />
          <div className="hidden md:block absolute -right-6 bottom-1/4 w-3 h-3 rounded-full bg-brand-gold/60 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
}
