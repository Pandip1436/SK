export default function NEETPrograms() {
  const features = [
    {
      title: "2-Year Foundation Batch",
      description: "Ideal for Class 11 students to build a rock-solid foundation for NEET from the ground up."
    },
    {
      title: "1-Year Intensive Program",
      description: "Focused preparation for Class 12 students to balance board exams and NEET excellence."
    },
    {
      title: "Dropper's Success Batch",
      description: "Specially designed for repeaters to bridge gaps and achieve their target medical seat."
    },
    {
      title: "Fast-Track Crash Course",
      description: "Intense 3-month revision program with high-yield topics and daily mock tests."
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white">
          Comprehensive <span className="font-script text-brand-gold italic font-normal">NEET Programs</span>
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          Choose a path that fits your goals. From foundation to finish line, we've got you covered.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-start mt-12 md:mt-20">
        {/* Left Side: Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Smart Planning for Every Aspirant
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Every student is different. Our AI-driven platform helps you choose the right batch and creates a customized curriculum structure and generates detailed daily targets. Fully aligned to the latest NTA syllabus.
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
          
          <div className="relative glass-card aspect-[4/3] rounded-3xl p-1 border-white/10 shadow-2xl overflow-hidden bg-indigo-600">
            <div className="absolute inset-1 bg-white rounded-[1.4rem] p-6 flex flex-col overflow-hidden">
              {/* Mockup Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Select Program Module</span>
              </div>

              {/* Chapter Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 border border-brand-orange rounded-lg flex items-center justify-between group cursor-pointer bg-orange-50">
                  <span className="text-[10px] font-bold text-slate-800 truncate">Biology: Human Physiology</span>
                  <span className="text-brand-orange">›</span>
                </div>
                <div className="p-3 border border-slate-100 rounded-lg flex items-center justify-between group cursor-pointer hover:border-brand-orange transition-all">
                  <span className="text-[10px] font-medium text-slate-600 truncate">Physics: Optics</span>
                  <span className="text-brand-orange">›</span>
                </div>
              </div>

              {/* Progress Section */}
              <div className="bg-brand-orange text-white px-3 py-1 text-[10px] font-bold w-fit rounded-t-lg uppercase">Daily Goal</div>
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-r-xl rounded-bl-xl p-6 flex items-center justify-between mb-6">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Chapter Diagnostic Test</h4>
                  <p className="text-[8px] opacity-80">Test your foundation before starting 'Circulatory System'</p>
                </div>
                <button className="px-4 py-1.5 bg-white text-brand-orange text-[10px] font-bold rounded-lg shadow-lg">Start Now</button>
              </div>

              {/* Detail Section */}
              <div className="space-y-3">
                <h5 className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter">High-Yield Video Lectures</h5>
                <p className="text-[8px] text-slate-400">Access the complete conceptual overview focusing on previous year NEET patterns.</p>
                <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-3xl">▶</span>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">▶</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -left-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float" />
          <div className="absolute -right-4 bottom-1/4 w-4 h-4 bg-brand-orange animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
}
