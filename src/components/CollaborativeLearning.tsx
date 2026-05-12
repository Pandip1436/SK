export default function CollaborativeLearning() {
  const features = [
    {
      title: "Live Student Selection",
      description: "Randomly picks students to answer on-screen, keeping everyone alert and engaged."
    },
    {
      title: "Smart Board Integration",
      description: "Runs seamlessly on the classroom screen for a shared experience."
    },
    {
      title: "Instant Practice Mode",
      description: "Turn any question or test into a live activity with just one click."
    },
    {
      title: "Encourages Accountability",
      description: "Keeps students motivated to stay prepared and participate."
    }
  ];

  return (
    <section id="play-together" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Right Side: Content */}
        <div className="space-y-10 order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Play Together - <span className="font-script text-brand-gold italic font-normal block mt-2">Learn Together!</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Make any quiz or activity a team sport! SK Intelligence takes care of student grouping, live scoring, and more, turning everyday lessons into high-energy, collaborative classroom experiences!
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

        {/* Left Side: Mockup */}
        <div className="relative order-2 lg:order-1">
          {/* Background glow */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />

          <div className="relative glass-card aspect-[4/3] rounded-[2rem] p-3 border-white/10 shadow-2xl overflow-hidden bg-[#0A0A0A]">
            {/* Tablet Inner Bezel */}
            <div className="absolute inset-2 bg-gradient-to-b from-[#e0eaf5] to-[#c8dcf0] rounded-[1.5rem] flex flex-col overflow-hidden shadow-inner">

              {/* Header Bar */}
              <div className="h-12 bg-[#4A72B2] flex items-center justify-between px-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-brand-orange rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg">Level 1-Physics</span>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/80 rounded-sm" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Bar */}
              <div className="h-8 bg-[#5B85C7] flex items-center justify-between px-6 text-sm font-bold text-white/90">
                <span>Points - 0</span>
                <div className="w-px h-4 bg-white/20" />
                <span>Timer - 66s</span>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-4 grid grid-cols-5 gap-4 relative">

                {/* Left side items to drag */}
                <div className="col-span-2 grid grid-cols-3 gap-2 place-content-start">
                  {[
                    { name: 'Bronze', icon: '🥉' },
                    { name: 'Sea Water', icon: '💧' },
                    { name: 'Dry cotton', icon: '☁️' },
                    { name: 'Fibreglass', icon: '🧊' },
                    { name: 'Glass', icon: '🪟' },
                    { name: 'Oil', icon: '🛢️' },
                    { name: 'Mercury', icon: '🌡️' },
                    { name: 'Platinum', icon: '💍' },
                  ].map((item) => (
                    <div key={item.name} className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 bg-white rounded shadow-sm border border-slate-200 flex items-center justify-center text-xl hover:scale-105 transition-transform cursor-grab">
                        {item.icon}
                      </div>
                      <span className="text-[9px] font-bold text-[#2A4365] text-center leading-tight">{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* Right side drop zones */}
                <div className="col-span-3 flex flex-col gap-3">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#2A4365]">Drop the Insulator</p>
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={`ins-${i}`} className="w-10 h-10 rounded bg-[#4A72B2] opacity-80 border-2 border-dashed border-white/40 flex items-center justify-center">
                          <span className="text-white/30 text-[10px]">↓</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#2A4365]">Drag the Conductor</p>
                    <div className="grid grid-cols-4 gap-2 items-center">
                      <div className="w-10 h-10 bg-white rounded shadow-sm border border-slate-200 flex items-center justify-center text-xl">
                        💍
                      </div>
                      <div className="col-span-3 text-[10px] font-bold text-[#2A4365]">Mercury</div>
                      <div className="w-10 h-10 rounded bg-[#4A72B2] opacity-80 border-2 border-dashed border-white/40 flex items-center justify-center">
                        <span className="text-white/30 text-[10px]">↓</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Circuit Diagram */}
                <div className="absolute bottom-4 left-4 right-4 h-24 bg-[#8B3A3A] rounded-xl overflow-hidden shadow-inner border border-red-900/50 flex flex-col justify-end p-2 relative">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20 pointer-events-none" />

                  {/* SVG Circuit Path */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <path d="M 50 60 L 50 30 L 150 30 L 150 60" fill="none" stroke="#FF4444" strokeWidth="3" />
                    <path d="M 150 60 L 250 60" fill="none" stroke="#FF4444" strokeWidth="3" />
                  </svg>

                  {/* Components */}
                  <div className="absolute left-8 bottom-8 flex items-end">
                    <div className="w-8 h-8 rounded-full bg-yellow-200 shadow-[0_0_15px_#fde047] flex items-center justify-center border border-yellow-400">
                      <div className="w-4 h-4 rounded-full bg-yellow-400" />
                    </div>
                  </div>

                  <div className="absolute left-[130px] bottom-6 flex items-center gap-1">
                    <div className="w-8 h-4 bg-slate-800 rounded-sm flex items-center justify-between px-1 border border-slate-600">
                      <div className="w-1.5 h-full bg-amber-600" />
                      <div className="w-2 h-full bg-slate-400" />
                    </div>
                  </div>

                  <div className="absolute left-[200px] bottom-6">
                    <div className="w-8 h-6 flex items-center justify-center border-2 border-slate-300 bg-slate-100 rounded-sm">
                      <div className="w-4 h-1 bg-slate-400 rotate-12" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48">
                    <button className="w-full py-1.5 bg-[#2D3748] hover:bg-[#1A202C] text-white/90 text-xs font-bold rounded shadow-lg transition-colors border border-white/10">
                      Submit
                    </button>
                  </div>
                </div>

                {/* Popover Student Info */}
                <div className="absolute bottom-8 right-6 w-40 bg-white rounded-lg shadow-xl border border-slate-100 p-3 flex flex-col gap-2 z-10 animate-bounce-slow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[9px] font-bold text-brand-orange uppercase">Attempting</p>
                      <p className="text-xs font-black text-slate-800">Sumitra Bhatt</p>
                    </div>
                    <span className="text-[10px] text-slate-400">❖</span>
                  </div>
                  <div className="h-px w-full bg-slate-100" />
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] font-bold text-brand-orange uppercase">Up Next</p>
                      <p className="text-[10px] font-bold text-slate-600">Dinesh Singh Rawat</p>
                    </div>
                    <span className="w-3 h-3 rounded-full border-2 border-green-500 border-t-transparent animate-spin" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
