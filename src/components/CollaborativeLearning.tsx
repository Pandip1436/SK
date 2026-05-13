import { useEffect, useState } from 'react';

const gameLevels = [
  {
    label: 'Physics',
    icon: '🔬',
    title: 'Level 1 — Physics',
    points: 240,
    timer: 66,
    leftHeading: 'Drop the Insulator',
    rightHeading: 'Drag the Conductor',
    attempting: 'Sumitra Bhatt',
    upNext: 'Dinesh Singh Rawat',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]',
    items: [
      { name: 'Silver (Ag)', icon: '🥈' },
      { name: 'Copper (Cu)', icon: '🥉' },
      { name: 'Distilled H₂O', icon: '💧' },
      { name: 'Aluminium', icon: '📎' },
      { name: 'Rubber', icon: '🩹' },
      { name: 'PVC Plastic', icon: '🔌' },
      { name: 'Mercury', icon: '🌡️' },
      { name: 'Graphite', icon: '✏️' }
    ]
  },
  {
    label: 'Chemistry',
    icon: '⚗️',
    title: 'Level 2 — Chemistry',
    points: 320,
    timer: 48,
    leftHeading: 'Drop the Acid',
    rightHeading: 'Drag the Base',
    attempting: 'Aarav Mehta',
    upNext: 'Priya Reddy',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]',
    items: [
      { name: 'HCl', icon: '🧪' },
      { name: 'H₂SO₄', icon: '⚗️' },
      { name: 'NaOH', icon: '🧫' },
      { name: 'NH₃', icon: '💨' },
      { name: 'CH₃COOH', icon: '🍋' },
      { name: 'KOH', icon: '🧴' },
      { name: 'Ca(OH)₂', icon: '🥛' },
      { name: 'HNO₃', icon: '☣️' }
    ]
  },
  {
    label: 'Biology',
    icon: '🧬',
    title: 'Level 3 — Biology',
    points: 410,
    timer: 72,
    leftHeading: 'Drop the Plant Cell Part',
    rightHeading: 'Drag the Animal Cell Part',
    attempting: 'Rohit Iyer',
    upNext: 'Sneha Kapoor',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]',
    items: [
      { name: 'Chloroplast', icon: '🌿' },
      { name: 'Cell Wall', icon: '🧱' },
      { name: 'Vacuole', icon: '💧' },
      { name: 'Mitochondria', icon: '⚡' },
      { name: 'Lysosome', icon: '🛡️' },
      { name: 'Centrosome', icon: '⭐' },
      { name: 'Ribosome', icon: '🔵' },
      { name: 'Nucleus', icon: '🟣' }
    ]
  },
  {
    label: 'Maths',
    icon: '📐',
    title: 'Level 4 — Maths',
    points: 180,
    timer: 90,
    leftHeading: 'Drop the Prime Number',
    rightHeading: 'Drag the Composite Number',
    attempting: 'Karan Joshi',
    upNext: 'Meera Nair',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]',
    items: [
      { name: '2', icon: '2️⃣' },
      { name: '3', icon: '3️⃣' },
      { name: '4', icon: '4️⃣' },
      { name: '5', icon: '5️⃣' },
      { name: '6', icon: '6️⃣' },
      { name: '7', icon: '7️⃣' },
      { name: '8', icon: '8️⃣' },
      { name: '9', icon: '9️⃣' }
    ]
  }
];

export default function CollaborativeLearning() {
  const [activeLevel, setActiveLevel] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveLevel((prev) => (prev + 1) % gameLevels.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const level = gameLevels[activeLevel];

  const features = [
    {
      title: "Group MCQ Tournaments",
      description: "Join team-based battles for Chemistry Organic reactions or Physics mechanics to build competitive speed."
    },
    {
      title: "Real-time Leaderboards",
      description: "See your All-India ranking update instantly as you solve high-yield NEET problems together."
    },
    {
      title: "Collaborative NCERT Decoding",
      description: "Work in groups to master complex Biological diagrams and case studies through shared digital canvases."
    },
    {
      title: "Healthy Peer Competition",
      description: "Stay motivated by seeing how your peers approach tough questions, encouraging collective excellence."
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
              Turn NEET preparation into a team sport! SK Intelligence enables competitive MCQ battles, group problem-solving, and live ranking, making every coaching session high-energy and collaborative.
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
        <div className="relative order-2 lg:order-1 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto w-full">
          {/* Ambient halos */}
          <div className="hidden sm:block absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="hidden sm:block absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.2s' }} />

          {/* Premium gradient border frame */}
          <div className="absolute -inset-[2px] rounded-[2.1rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

          <div className={`relative aspect-[4/3] rounded-[2rem] p-[2px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${level.themeRing}`}>
            <div className="relative w-full h-full bg-[#0A0A0A] rounded-[1.95rem] p-3 overflow-hidden">
              {/* Tablet Inner Bezel */}
              <div className="absolute inset-2 bg-gradient-to-b from-[#e0eaf5] to-[#c8dcf0] rounded-[1.5rem] flex flex-col overflow-hidden shadow-inner">

                {/* Header Bar */}
                <div className="h-12 bg-[#4A72B2] flex items-center justify-between px-4 text-white">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 bg-brand-orange rounded flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span key={`title-${activeLevel}`} className="font-bold text-lg animate-fade-slide truncate">{level.title}</span>
                    <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900 shrink-0">LIVE</span>
                    <span className="relative flex w-2 h-2 shrink-0">
                      <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                      <span className="relative w-2 h-2 rounded-full bg-red-500" />
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white/80 rounded-sm" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subject Pills */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#3D5F94] overflow-x-auto">
                  {gameLevels.map((g, idx) => {
                    const isActive = idx === activeLevel;
                    return (
                      <button
                        key={g.label}
                        onClick={() => setActiveLevel(idx)}
                        className={`relative shrink-0 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                        )}
                        <span className={`text-xs ${isActive ? 'scale-110' : 'opacity-60'}`}>{g.icon}</span>
                        {g.label}
                      </button>
                    );
                  })}
                </div>

              {/* Status Bar */}
              <div className="h-8 bg-[#5B85C7] flex items-center justify-between px-6 text-sm font-bold text-white/90">
                <span key={`pts-${activeLevel}`} className="animate-fade-slide">Points - {level.points}</span>
                <div className="w-px h-4 bg-white/20" />
                <span key={`tmr-${activeLevel}`} className="animate-fade-slide">Timer - {level.timer}s</span>
              </div>

              {/* Main Content Area */}
              <div key={`game-${activeLevel}`} className="flex-1 p-4 grid grid-cols-5 gap-4 relative animate-fade-slide">
                {/* Floating ambient particles */}
                <div className="pointer-events-none absolute top-3 left-1/3 w-1 h-1 rounded-full bg-brand-gold/60 animate-float" />
                <div className="pointer-events-none absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float" style={{ animationDelay: '2s' }} />
                <div className="pointer-events-none absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-slate-400/60 animate-float" style={{ animationDelay: '3.5s' }} />

                {/* Left side items to drag */}
                <div className="col-span-2 grid grid-cols-3 gap-2 place-content-start">
                  {level.items.map((item) => (
                    <div key={item.name} className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 bg-white rounded shadow-sm border border-slate-200 flex items-center justify-center text-xl hover:scale-105 transition-transform cursor-grab">
                        {item.icon}
                      </div>
                      <span className="text-[8px] font-bold text-[#2A4365] text-center leading-tight">{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* Right side drop zones */}
                <div className="col-span-3 flex flex-col gap-3">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#2A4365]">{level.leftHeading}</p>
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={`ins-${i}`} className="w-10 h-10 rounded bg-[#4A72B2] opacity-80 border-2 border-dashed border-white/40 flex items-center justify-center">
                          <span className="text-white/30 text-[10px]">↓</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#2A4365]">{level.rightHeading}</p>
                    <div className="grid grid-cols-4 gap-2 items-center">
                      <div className="w-10 h-10 bg-white rounded shadow-sm border border-slate-200 flex items-center justify-center text-xl">
                        {level.items[6]?.icon || '💍'}
                      </div>
                      <div className="col-span-3 text-[10px] font-bold text-[#2A4365]">{level.items[6]?.name || 'Mercury'}</div>
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
                    <button className="w-full py-1.5 bg-gradient-to-br from-brand-orange to-amber-400 text-slate-900 text-xs font-bold rounded shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform border border-white/10">
                      Submit
                    </button>
                  </div>
                </div>

                {/* Popover Student Info */}
                <div key={`pop-${activeLevel}`} className="absolute bottom-8 right-6 w-40 bg-white rounded-lg shadow-xl border border-slate-100 p-3 flex flex-col gap-2 z-10 animate-fade-slide">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[9px] font-bold text-brand-orange uppercase">Attempting</p>
                      <p className="text-xs font-black text-slate-800">{level.attempting}</p>
                    </div>
                    <span className="text-[10px] text-slate-400">❖</span>
                  </div>
                  <div className="h-px w-full bg-slate-100" />
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] font-bold text-brand-orange uppercase">Up Next</p>
                      <p className="text-[10px] font-bold text-slate-600">{level.upNext}</p>
                    </div>
                    <span className="w-3 h-3 rounded-full border-2 border-green-500 border-t-transparent animate-spin" />
                  </div>
                </div>

              </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="hidden md:block absolute -right-4 top-1/3 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
          <div className="hidden md:block absolute -left-4 bottom-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '1s' }} />
          <div className="hidden md:block absolute -right-6 bottom-1/3 w-3 h-3 rounded-full bg-brand-gold/60 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
}
