export default function SmarterAssessments() {
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
        <h2 className="text-5xl md:text-6xl font-serif font-black text-white">
          NEET Pattern <span className="font-script text-brand-gold italic font-normal">Mock Tests</span>
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
        <div className="relative sticky top-32">
          <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
          
          <div className="relative glass-card aspect-[16/10] rounded-3xl p-1 border-white/10 shadow-2xl overflow-hidden bg-blue-900">
            <div className="absolute inset-1 bg-white rounded-[1.4rem] p-6 flex flex-col overflow-hidden">
              {/* Question Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">
                    Live NEET Mock #42
                  </p>
                </div>
                <div className="text-brand-orange text-sm font-black font-mono">02:45:12</div>
              </div>

              {/* Question */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-brand-orange text-white text-[8px] font-bold rounded">Biology</span>
                  <span className="text-[8px] text-slate-400 font-bold">Marks: +4 | -1</span>
                </div>
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  Which of the following is responsible for the formation of the corpus luteum?
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2 mb-6">
                {['LH (Luteinizing Hormone)', 'FSH', 'Estrogen', 'Progesterone'].map((opt, i) => (
                  <div key={opt} className="p-3 border border-slate-100 rounded-lg text-[9px] font-medium text-slate-600 flex items-center gap-2 hover:bg-slate-50 cursor-pointer">
                    <span className="w-4 h-4 rounded-full border border-slate-200 flex items-center justify-center text-[8px]">{String.fromCharCode(65 + i)}</span>
                    {opt}
                  </div>
                ))}
              </div>

              {/* Footer Meta */}
              <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center text-[7px] text-slate-400 font-bold uppercase tracking-wider">
                <div className="flex gap-4">
                  <span>Subject: Zoology</span>
                  <span>Chapter: Reproduction</span>
                </div>
                <button className="px-4 py-1.5 bg-brand-orange text-white rounded font-black">Next Question</button>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -right-4 top-1/3 w-6 h-6 bg-brand-gold rotate-45 animate-float" />
          <div className="absolute -left-4 bottom-1/3 w-4 h-4 bg-brand-orange animate-float" style={{ animationDelay: '3s' }} />
        </div>
      </div>
    </section>
  );
}
