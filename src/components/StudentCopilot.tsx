import { useEffect, useState } from 'react';

const copilotQuestions = [
  {
    label: 'Physics',
    icon: '🔬',
    chapter: 'Physics: Ray Optics',
    question: 'Q. Multiplying 3√5 by 11√5 equals to:',
    options: ['33√5', '11√5', '3√5', '165'],
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]'
  },
  {
    label: 'Chemistry',
    icon: '⚗️',
    chapter: 'Chemistry: Mole Concept',
    question: 'Q. How many atoms are present in 1 mole of carbon?',
    options: ['6.022 × 10²³', '3.011 × 10²³', '1.20 × 10²²', '12 × 10²³'],
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]'
  },
  {
    label: 'Biology',
    icon: '🧬',
    chapter: 'Biology: Cell Division',
    question: 'Q. The phase between two successive cell divisions is called:',
    options: ['Anaphase', 'Telophase', 'Interphase', 'Prophase'],
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]'
  },
  {
    label: 'Maths',
    icon: '📐',
    chapter: 'Maths: Calculus',
    question: 'Q. The derivative of sin x with respect to x is:',
    options: ['cos x', '-cos x', 'tan x', '-sin x'],
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]'
  }
];

export default function StudentCopilot() {
  const [activeQ, setActiveQ] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveQ((prev) => (prev + 1) % copilotQuestions.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const q = copilotQuestions[activeQ];

  const features = [
    {
      title: "Step-by-Step Hints",
      description: "Provides guided help at every stage of the NEET problem, without revealing the full answer."
    },
    {
      title: "Encourages Self-Learning",
      description: "Designed to build problem-solving skills and conceptual confidence, not dependency on AI."
    },
    {
      title: "Interactive Choices",
      description: "Students answer through guided options that help apply logic and reasoning to complex numericals."
    },
    {
      title: "Concept-Based Support",
      description: "Hints are tied to the core NCERT concept behind the question, ensuring long-term mastery."
    }
  ];

  return (
    <section id="copilot" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white">
          AI Student <span className="font-script text-brand-gold italic font-normal">Mentor</span>
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          Not just answers. Actual support. SK Intelligence guides you through NEET concepts step by step, ensuring you master the logic.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Side: Mockup (Guided Solving) */}
        <div className="relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto w-full">
          {/* Ambient halos */}
          <div className="hidden sm:block absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="hidden sm:block absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.2s' }} />

          {/* Premium gradient border frame */}
          <div className="absolute -inset-[2px] rounded-[2.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

          <div className={`relative aspect-[4/3] rounded-[2.5rem] p-[2px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${q.themeRing}`}>
            <div className="relative w-full h-full rounded-[2.45rem] p-3 overflow-hidden bg-[#0F1115]">
              <div className="absolute inset-2 bg-white rounded-[1.8rem] flex flex-col overflow-hidden shadow-inner">

                {/* Question Area */}
                <div className="flex-1 p-4 md:p-6 space-y-4 relative">
                  {/* Floating ambient particles */}
                  <div className="absolute top-1/4 right-6 w-1 h-1 rounded-full bg-brand-gold/60 animate-float pointer-events-none" />
                  <div className="absolute bottom-1/3 left-4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
                  <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-slate-400/60 animate-float pointer-events-none" style={{ animationDelay: '3.5s' }} />

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-brand-orange rounded flex items-center justify-center text-[10px] text-white font-bold">SK</div>
                    <span key={`ch-${activeQ}`} className="text-[10px] font-bold text-slate-400 animate-fade-slide">{q.chapter}</span>
                    <span className="ml-auto px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">AI</span>
                  </div>

                  {/* Subject Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {copilotQuestions.map((c, idx) => {
                      const isActive = idx === activeQ;
                      return (
                        <button
                          key={c.label}
                          onClick={() => setActiveQ(idx)}
                          className={`relative shrink-0 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                            isActive
                              ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                              : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                          )}
                          <span className={`text-xs ${isActive ? 'scale-110' : 'opacity-60'}`}>{c.icon}</span>
                          {c.label}
                        </button>
                      );
                    })}
                  </div>

                  <p key={`q-${activeQ}`} className="text-sm font-black text-slate-800 leading-relaxed animate-fade-slide relative z-10">
                    {q.question}
                  </p>

                  <div key={`opts-${activeQ}`} className="space-y-2 animate-fade-slide relative z-10">
                    {q.options.map((opt, i) => (
                      <div key={i} className="p-2.5 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-500 hover:border-brand-orange transition-colors cursor-pointer">
                        {String.fromCharCode(65 + i)}. {opt}
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-gradient-to-br from-brand-orange to-amber-400 text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-orange/40 mt-3 hover:scale-105 transition-transform relative z-10">
                    ✨ Help Me Solve It
                  </button>
                </div>

                {/* Bottom Decorative gradient */}
                <div className="h-2 bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange" />
              </div>
            </div>
          </div>

          {/* Floating accents */}
          <div className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
          <div className="hidden md:block absolute -left-4 top-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '1s' }} />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Need Some Help <span className="font-script text-brand-gold italic font-normal block mt-2">Solving It?</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Breaks down each question into guided, interactive steps that build conceptual clarity and confidence. Instead of giving away the answer, it nudges students with helpful hints.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2 group">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


