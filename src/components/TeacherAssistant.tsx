export default function ExpertFaculty() {
  const features = [
    {
      title: "Kota's Top Educators",
      description: "Learn from the best minds in the industry with decades of experience in producing NEET toppers."
    },
    {
      title: "Interactive Live Classes",
      description: "Ask doubts in real-time and engage in conceptual discussions that go beyond the textbook."
    },
    {
      title: "Personalized Study Plans",
      description: "Get a roadmap tailored to your current level, target score, and available preparation time."
    },
    {
      title: "NCERT Intensive Focus",
      description: "Deep-dive into every line of NCERT Biology, Chemistry, and Physics with expert insights."
    }
  ];

  return (
    <section id="faculty" className="py-16 md:py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white">
          Expert NEET <span className="font-script text-brand-gold italic font-normal">Faculty</span>
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          The best-in-class educators meet AI-powered personalization to ensure your medical dream becomes a reality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-start mt-12 md:mt-20">
        {/* Left Side: Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Personalized NEET Prep for Every Aspirant
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              We don't believe in one-size-fits-all. Our faculty uses SK Intelligence to track your progress and customize every lecture and assignment for your specific needs.
            </p>
          </div>

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

        {/* Right Side: Mockup */}
        <div className="relative sticky top-32">
          <div className="absolute inset-0 bg-purple-500/20 blur-[120px] rounded-full animate-pulse" />

          <div className="relative glass-card aspect-[16/10] rounded-3xl p-1 border-white/10 shadow-2xl overflow-hidden bg-[#1a1b2e]">
            <div className="absolute inset-1 bg-white rounded-[1.4rem] p-4 flex flex-col overflow-hidden">
              {/* Mockup UI */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-800 tracking-wider">TODAY'S SCHEDULE</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-[8px] font-bold text-red-500">LIVE NOW</span>
                </div>
              </div>

              <div className="space-y-3 flex-grow overflow-hidden">
                <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-200 flex-shrink-0 flex items-center justify-center font-bold text-orange-600">BP</div>
                  <div className="flex-grow">
                    <div className="text-[10px] font-bold text-slate-800">Organic Chemistry: Mechanisms</div>
                    <div className="text-[8px] text-slate-500">by Dr. B.P. Sharma • 10:00 AM</div>
                  </div>
                  <button className="px-3 py-1 bg-brand-orange text-white text-[8px] font-bold rounded-full">JOIN</button>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-200 flex-shrink-0 flex items-center justify-center font-bold text-blue-600">AK</div>
                  <div className="flex-grow">
                    <div className="text-[10px] font-bold text-slate-800">Physics: Electromagnetic Waves</div>
                    <div className="text-[8px] text-slate-500">by Prof. A.K. Verma • 12:30 PM</div>
                  </div>
                  <button className="px-3 py-1 border border-blue-200 text-blue-600 text-[8px] font-bold rounded-full">REMIND</button>
                </div>

                <div className="p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-200 flex-shrink-0 flex items-center justify-center font-bold text-green-600">SM</div>
                  <div className="flex-grow">
                    <div className="text-[10px] font-bold text-slate-800">Biology: Genetics & Evolution</div>
                    <div className="text-[8px] text-slate-500">by Dr. S. Mukherjee • 03:00 PM</div>
                  </div>
                  <button className="px-3 py-1 border border-green-200 text-green-600 text-[8px] font-bold rounded-full">REMIND</button>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[8px] font-bold text-slate-400">Total Classes Today: 03</div>
                <button className="px-4 py-2 bg-brand-orange text-white text-[8px] font-bold rounded-full">Full Syllabus Plan</button>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -left-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float" />
          <div className="absolute -right-4 bottom-1/4 w-4 h-4 bg-brand-orange animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
}
