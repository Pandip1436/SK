export default function LiveClassroom() {
  const features = [
    {
      title: "Live MCQ Combat",
      description: "Compete with peers in real-time polls for Biology and Chemistry MCQs to build the speed and accuracy required for NEET."
    },
    {
      title: "Visual Concept Mastery",
      description: "Experience complex Physics numericals and Biological structures through interactive 3D models and live annotations."
    },
    {
      title: "Instant Doubt Clearing",
      description: "Get your academic doubts resolved in real-time by expert faculty, ensuring no conceptual gaps are left behind."
    },
    {
      title: "AI Focus Optimization",
      description: "Our intelligence monitors your engagement levels, helping you stay disciplined and attentive during intensive study sessions."
    },
    {
      title: "Smart Session Analytics",
      description: "Receive a personalized post-lecture report detailing your participation, MCQ performance, and areas for improvement."
    }
  ];

  return (
    <section id="live-classroom" className="py-16 md:py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="font-script text-5xl md:text-6xl text-brand-gold mb-4">Interactive NEET Coaching</h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          Experience the most advanced live classroom environment designed specifically for NEET aspirants. Where expert teaching meets AI-powered engagement.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start mt-12 md:mt-20">
        {/* Right Side: Content */}
        <div className="space-y-10 order-1 lg:order-2">
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Master Every Concept. Crack Every MCQ.
          </h3>
          <p className="text-white/60 text-lg leading-relaxed">
            Our Live Classroom isn't just a video call. It's a high-energy learning ecosystem where SK Intelligence tracks your attention and participation, ensuring you're always on the path to a 700+ score.
          </p>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2 group">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Left Side: Mockup */}
        <div className="relative sticky top-32 order-1 lg:order-1">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] animate-pulse" />

          {/* Device Mockup */}
          <div className="relative glass-card aspect-[4/3] rounded-[2rem] p-4 border-white/20 shadow-2xl overflow-hidden bg-slate-950">
            <div className="absolute inset-2 bg-slate-900 rounded-[1.5rem] flex flex-col overflow-hidden border border-white/5">
              {/* Header Bar */}
              <div className="h-10 bg-slate-800 flex items-center justify-between px-4 text-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black tracking-widest uppercase">Live: Biology Section</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold">1.2k</span>
                    <span className="text-[8px] text-slate-400">Watching</span>
                  </div>
                </div>
              </div>

              {/* Main Video/Slide Area */}
              <div className="flex-1 relative bg-black flex items-center justify-center p-6">
                <div className="absolute top-4 left-4 z-10">
                   <div className="px-3 py-1.5 bg-brand-orange/20 backdrop-blur-md rounded-lg border border-brand-orange/30">
                      <p className="text-[10px] font-black text-brand-orange leading-tight uppercase tracking-widest">Mastering DNA</p>
                      <p className="text-[8px] text-white/60 font-medium italic">Molecular Basis</p>
                   </div>
                </div>

                {/* 3D-ish DNA Structure Placeholder */}
                <div className="relative w-full h-full flex items-center justify-center">
                   <svg viewBox="0 0 200 100" className="w-full h-auto text-brand-gold opacity-40">
                      <path d="M20 50 Q 60 10, 100 50 T 180 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                      <path d="M20 50 Q 60 90, 100 50 T 180 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                      {[...Array(10)].map((_, i) => (
                        <line key={i} x1={20 + i * 16} y1={50 - Math.sin(i) * 20} x2={20 + i * 16} y2={50 + Math.sin(i) * 20} stroke="currentColor" strokeWidth="1" />
                      ))}
                   </svg>
                   <div className="absolute inset-0 bg-gradient-radial from-brand-orange/10 to-transparent" />
                </div>

                {/* Focus Overlay */}
                <div className="absolute bottom-4 right-4">
                   <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-[8px] font-black text-white/40 uppercase">Engagement</p>
                        <p className="text-xs font-black text-brand-gold">84% Focused</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-brand-gold border-t-transparent animate-spin-slow flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-brand-gold/20" />
                      </div>
                   </div>
                </div>
              </div>

              {/* Chat/Controls Bar */}
              <div className="h-16 bg-slate-950 border-t border-white/5 flex items-center gap-4 px-4">
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs">👤</div>
                 <div className="flex-1 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center px-4">
                    <p className="text-[9px] text-white/30 italic">Ask a question about DNA Replication...</p>
                 </div>
                 <button className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/20">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                 </button>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float" />
          <div className="absolute -left-4 top-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
}
