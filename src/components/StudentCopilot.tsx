export default function StudentCopilot() {
  const features = [
    {
      title: "Guided Doubt Solving",
      description: "Don't just get the answer. Our AI leads you through the conceptual steps to solve complex MCQ problems."
    },
    {
      title: "24/7 Academic Support",
      description: "Stuck on a Physics numerical at 2 AM? Your AI Mentor is always ready to guide you."
    },
    {
      title: "NCERT-Based Explanations",
      description: "All hints and explanations are strictly aligned with the latest NCERT and NTA guidelines."
    },
    {
      title: "Memory Hacks & Mnemonics",
      description: "Get instant mnemonics to remember complex Biological classifications or Periodic Table trends."
    }
  ];

  return (
    <section id="copilot" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white">
          AI Student <span className="font-script text-brand-gold italic font-normal">Mentor</span>
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          Not just answers. Actual support. SK Intelligence guides you through NEET concepts step by step, ensuring you master the logic.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-start mt-12 md:mt-20">
        {/* Left Side: Mockup */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-brand-orange/20 blur-[120px] rounded-full animate-pulse" />
          
          <div className="relative glass-card aspect-[16/10] rounded-3xl p-1 border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/40 to-transparent" />
            <div className="absolute inset-1 bg-white rounded-[1.4rem] p-6 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-orange rounded flex items-center justify-center text-[10px] text-white font-bold">SK</div>
                  <span className="text-[10px] font-bold text-slate-400">Physics: Ray Optics</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[8px] font-bold rounded">Level: Hard</span>
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                <p className="text-slate-800 font-bold text-sm">Q. Calculate the focal length of a concave mirror if the object is at 20cm and image is at 60cm.</p>
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] text-slate-500 italic">
                  "Let's start with the Mirror Formula: 1/f = 1/v + 1/u. Remember the sign conventions!"
                </div>
                <div className="space-y-2">
                  {['A. 15 cm', 'B. -15 cm', 'C. 30 cm', 'D. -30 cm'].map((opt, i) => (
                    <div key={opt} className={`p-3 border rounded-lg text-xs font-medium ${i === 1 ? 'border-brand-orange bg-orange-50' : 'border-slate-100 text-slate-600'}`}>
                      {opt}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center gap-3">
                <button className="w-full py-3 bg-brand-orange text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20">
                  <span>✨</span> Get Next Step Hint
                </button>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -right-6 top-1/2 w-8 h-8 bg-brand-gold rotate-45 animate-float" />
          <div className="absolute -left-4 bottom-1/4 w-4 h-4 bg-brand-orange animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-10 order-1 lg:order-2">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Stuck on a Problem? We'll Guide You.
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Our AI Mentor breaks down each NEET problem into guided, interactive steps that build conceptual clarity. Instead of just giving the answer, it nudges you with helpful hints, teaching you how to think through the problem like a topper.
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
      </div>
    </section>
  );
}
