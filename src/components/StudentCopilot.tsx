export default function StudentCopilot() {
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
        <div className="relative">
          <div className="absolute inset-0 bg-brand-orange/10 blur-[120px] rounded-full animate-pulse" />

          <div className="relative glass-card aspect-[4/3] rounded-[2.5rem] p-3 border-white/10 shadow-2xl overflow-hidden bg-[#0F1115]">
            <div className="absolute inset-2 bg-white rounded-[1.8rem] flex flex-col overflow-hidden shadow-inner">

              {/* Question Area */}
              <div className="flex-1 p-8 space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-brand-orange rounded flex items-center justify-center text-[10px] text-white font-bold">SK</div>
                  <span className="text-[10px] font-bold text-slate-400">Physics: Ray Optics</span>
                </div>

                <p className="text-sm font-black text-slate-800 leading-relaxed">
                  Q. Multiplying 3√5 by 11√5 equals to:
                </p>

                <div className="space-y-3">
                  {[
                    '33√5',
                    '11√5',
                    '3√5',
                    '165'
                  ].map((opt, i) => (
                    <div key={i} className="p-3 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-500 hover:border-brand-orange transition-colors cursor-pointer">
                      {String.fromCharCode(65 + i)}. {opt}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-brand-orange text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-orange/20 mt-4">
                  ✨ Help Me Solve It
                </button>
              </div>

              {/* Bottom Decorative gradient */}
              <div className="h-2 bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange" />
            </div>
          </div>
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


