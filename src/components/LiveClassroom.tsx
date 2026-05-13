import { useEffect, useState } from 'react';

type Visual = 'dna' | 'wave' | 'molecule' | 'calculus';

const liveSubjects: Array<{
  label: string;
  icon: string;
  badgeText: string;
  topicTitle: string;
  topicSub: string;
  chapter: string;
  watching: string;
  focus: string;
  instructor: string;
  instructorInitials: string;
  rating: string;
  visual: Visual;
  themeFrom: string;
  themeTo: string;
  themeRing: string;
  liveMsg: { name: string; text: string };
}> = [
  {
    label: 'Biology',
    icon: '🧬',
    badgeText: 'Live: Biology Section',
    topicTitle: 'Mastering DNA',
    topicSub: 'Molecular Basis',
    chapter: 'DNA Replication',
    watching: '1.2k',
    focus: '84% Focused',
    instructor: 'Dr. S. Mukherjee',
    instructorInitials: 'SM',
    rating: '4.9',
    visual: 'dna',
    themeFrom: 'from-emerald-500/25',
    themeTo: 'to-emerald-900/0',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]',
    liveMsg: { name: 'Ananya', text: 'Why semi-conservative?' }
  },
  {
    label: 'Physics',
    icon: '🔬',
    badgeText: 'Live: Physics Section',
    topicTitle: 'Wave Optics',
    topicSub: 'Interference Patterns',
    chapter: 'Young’s Double-Slit',
    watching: '980',
    focus: '91% Focused',
    instructor: 'Prof. A.K. Verma',
    instructorInitials: 'AK',
    rating: '4.8',
    visual: 'wave',
    themeFrom: 'from-blue-500/25',
    themeTo: 'to-indigo-900/0',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]',
    liveMsg: { name: 'Rohit', text: 'Path difference formula?' }
  },
  {
    label: 'Chemistry',
    icon: '⚗️',
    badgeText: 'Live: Chemistry Section',
    topicTitle: 'Organic Reactions',
    topicSub: 'Mechanism Deep-Dive',
    chapter: 'SN1 vs SN2',
    watching: '1.4k',
    focus: '88% Focused',
    instructor: 'Dr. B.P. Sharma',
    instructorInitials: 'BP',
    rating: '4.9',
    visual: 'molecule',
    themeFrom: 'from-fuchsia-500/25',
    themeTo: 'to-rose-900/0',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]',
    liveMsg: { name: 'Priya', text: 'Tertiary carbon = SN1?' }
  },
  {
    label: 'Maths',
    icon: '📐',
    badgeText: 'Live: Maths Section',
    topicTitle: 'Calculus',
    topicSub: 'Definite Integrals',
    chapter: 'Integration by Parts',
    watching: '750',
    focus: '79% Focused',
    instructor: 'Dr. R. Joshi',
    instructorInitials: 'RJ',
    rating: '4.7',
    visual: 'calculus',
    themeFrom: 'from-amber-500/25',
    themeTo: 'to-orange-900/0',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]',
    liveMsg: { name: 'Karan', text: 'ILATE for x·sin x?' }
  }
];

function SubjectVisual({ visual }: { visual: Visual }) {
  if (visual === 'wave') {
    return (
      <svg viewBox="0 0 200 100" className="w-full h-auto text-blue-300 opacity-50">
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[0, 8, 16].map((offset, i) => (
          <path
            key={i}
            d={`M0 ${50 + offset - 8} Q 25 ${20 + offset - 8} 50 ${50 + offset - 8} T 100 ${50 + offset - 8} T 150 ${50 + offset - 8} T 200 ${50 + offset - 8}`}
            fill="none"
            stroke="url(#waveGrad)"
            strokeWidth="1.5"
            opacity={1 - i * 0.3}
          />
        ))}
        {[20, 100, 180].map((x, i) => (
          <circle key={i} cx={x} cy="50" r="2.5" fill="#60A5FA" className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </svg>
    );
  }
  if (visual === 'molecule') {
    return (
      <svg viewBox="0 0 200 120" className="w-full h-auto text-fuchsia-300 opacity-60">
        <defs>
          <radialGradient id="atomGrad">
            <stop offset="0%" stopColor="#F0ABFC" />
            <stop offset="100%" stopColor="#A21CAF" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        {/* Bonds */}
        <line x1="60" y1="40" x2="100" y2="60" stroke="#E879F9" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="60" x2="140" y2="40" stroke="#E879F9" strokeWidth="1.5" opacity="0.6" />
        <line x1="100" y1="60" x2="100" y2="100" stroke="#E879F9" strokeWidth="1.5" opacity="0.6" />
        <line x1="60" y1="40" x2="30" y2="20" stroke="#E879F9" strokeWidth="1" opacity="0.4" strokeDasharray="2 2" />
        <line x1="140" y1="40" x2="170" y2="20" stroke="#E879F9" strokeWidth="1" opacity="0.4" strokeDasharray="2 2" />
        {/* Atoms */}
        {[
          { x: 60, y: 40, r: 9, label: 'C' },
          { x: 100, y: 60, r: 11, label: 'N' },
          { x: 140, y: 40, r: 9, label: 'C' },
          { x: 100, y: 100, r: 8, label: 'O' },
          { x: 30, y: 20, r: 6, label: 'H' },
          { x: 170, y: 20, r: 6, label: 'H' }
        ].map((atom, i) => (
          <g key={i}>
            <circle cx={atom.x} cy={atom.y} r={atom.r} fill="url(#atomGrad)" />
            <text x={atom.x} y={atom.y + 2} textAnchor="middle" fontSize="6" fill="#fff" fontWeight="900">{atom.label}</text>
          </g>
        ))}
      </svg>
    );
  }
  if (visual === 'calculus') {
    return (
      <svg viewBox="0 0 200 110" className="w-full h-auto opacity-70">
        <defs>
          <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Axes */}
        <line x1="20" y1="90" x2="190" y2="90" stroke="#FCD34D" strokeWidth="0.8" opacity="0.4" />
        <line x1="20" y1="10" x2="20" y2="90" stroke="#FCD34D" strokeWidth="0.8" opacity="0.4" />
        {/* Filled area */}
        <path d="M 20 90 Q 60 30 100 50 T 180 25 L 180 90 Z" fill="url(#curveFill)" />
        {/* Curve */}
        <path d="M 20 90 Q 60 30 100 50 T 180 25" fill="none" stroke="#FCD34D" strokeWidth="2" />
        {/* Integral marks */}
        {[40, 70, 100, 130, 160].map((x, i) => (
          <line key={i} x1={x} y1="90" x2={x} y2={x === 40 ? 60 : x === 70 ? 38 : x === 100 ? 50 : x === 130 ? 38 : 25} stroke="#FBBF24" strokeWidth="0.8" strokeDasharray="2 2" />
        ))}
        {/* dx label */}
        <text x="170" y="105" fontSize="8" fill="#FCD34D" fontWeight="900" opacity="0.7">∫ f(x) dx</text>
      </svg>
    );
  }
  // DNA (default — Biology)
  return (
    <svg viewBox="0 0 200 100" className="w-full h-auto text-emerald-300 opacity-60">
      <path d="M20 50 Q 60 10, 100 50 T 180 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M20 50 Q 60 90, 100 50 T 180 50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      {[...Array(10)].map((_, i) => (
        <line key={i} x1={20 + i * 16} y1={50 - Math.sin(i) * 20} x2={20 + i * 16} y2={50 + Math.sin(i) * 20} stroke="currentColor" strokeWidth="1" />
      ))}
    </svg>
  );
}

export default function LiveClassroom() {
  const [activeSubject, setActiveSubject] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSubject((prev) => (prev + 1) % liveSubjects.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const live = liveSubjects[activeSubject];

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
        <h2 className="font-script text-5xl md:text-6xl text-brand-gold mb-4">Live Classroom</h2>
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
        <div className="relative sticky top-32 order-1 lg:order-1 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto w-full">
          {/* Ambient halos */}
          <div className="absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          {/* Premium gradient border frame */}
          <div className="absolute -inset-[2px] rounded-[2.1rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

          {/* Device Mockup */}
          <div className={`relative aspect-[4/3] rounded-[2rem] p-[2px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${live.themeRing}`}>
            <div className="relative w-full h-full bg-slate-950 rounded-[1.95rem] p-3 overflow-hidden">
              <div className="absolute inset-3 bg-gradient-to-b from-slate-900 via-slate-950 to-black rounded-[1.5rem] flex flex-col overflow-hidden border border-white/10">
                {/* Premium Header Bar */}
                <div className="h-11 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/5 flex items-center justify-between px-4 text-white/90">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                      <span className="relative w-2 h-2 rounded-full bg-red-500" />
                    </span>
                    <span key={`badge-${activeSubject}`} className="text-[10px] font-black tracking-widest uppercase animate-fade-slide truncate">{live.badgeText}</span>
                    <span className="ml-1 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">HD</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Viewer stack */}
                    <div className="hidden sm:flex -space-x-1.5">
                      {['SK', 'AR', 'PM'].map((u, i) => (
                        <div key={u} className={`w-4 h-4 rounded-full border border-slate-900 text-[6px] font-black flex items-center justify-center ${
                          i === 0 ? 'bg-brand-orange text-white' : i === 1 ? 'bg-emerald-400 text-slate-900' : 'bg-blue-400 text-slate-900'
                        }`}>
                          {u}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      <span key={`watch-${activeSubject}`} className="text-[10px] font-bold animate-fade-slide">{live.watching}</span>
                      <span className="text-[8px] text-slate-400">Watching</span>
                    </div>
                  </div>
                </div>

                {/* Subject Pills — premium */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-black/40 backdrop-blur-sm border-b border-white/5 overflow-x-auto">
                  {liveSubjects.map((s, idx) => {
                    const isActive = idx === activeSubject;
                    return (
                      <button
                        key={s.label}
                        onClick={() => setActiveSubject(idx)}
                        className={`relative shrink-0 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                            : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/5'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                        )}
                        <span className={`text-[10px] ${isActive ? 'scale-110' : 'opacity-60'}`}>{s.icon}</span>
                        {s.label}
                      </button>
                    );
                  })}
                </div>

                {/* Main Video/Slide Area */}
                <div className="flex-1 relative bg-black flex items-center justify-center p-6 overflow-hidden">
                  {/* Theme gradient wash */}
                  <div key={`wash-${activeSubject}`} className={`absolute inset-0 bg-gradient-to-br ${live.themeFrom} ${live.themeTo} transition-opacity duration-700`} />
                  {/* Subtle grid */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* Topic chip */}
                  <div className="absolute top-4 left-4 z-10">
                    <div key={`topic-${activeSubject}`} className="px-3 py-1.5 bg-black/50 backdrop-blur-xl rounded-lg border border-brand-orange/30 shadow-lg animate-fade-slide">
                      <p className="text-[10px] font-black text-brand-orange leading-tight uppercase tracking-widest">{live.topicTitle}</p>
                      <p className="text-[8px] text-white/60 font-medium italic">{live.topicSub}</p>
                    </div>
                  </div>

                  {/* Instructor badge — top right */}
                  <div className="absolute top-4 right-4 z-10">
                    <div key={`inst-${activeSubject}`} className="flex items-center gap-2 px-2 py-1 bg-black/50 backdrop-blur-xl rounded-full border border-white/10 shadow-lg animate-fade-slide">
                      <div className="relative">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-orange to-amber-400 flex items-center justify-center text-[7px] font-black text-slate-900">
                          {live.instructorInitials}
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 border border-slate-900" />
                      </div>
                      <div className="flex flex-col leading-none">
                        <span className="text-[8px] font-black text-white">{live.instructor}</span>
                        <span className="text-[7px] text-brand-gold font-bold">★ {live.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated subject visual */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {liveSubjects.map((s, idx) => (
                      <div
                        key={s.label}
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                          idx === activeSubject ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                      >
                        <SubjectVisual visual={s.visual} />
                      </div>
                    ))}
                    {/* Floating ambient dots */}
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-brand-gold/60 animate-float" />
                    <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-white/40 animate-float" style={{ animationDelay: '3.5s' }} />
                  </div>

                  {/* Live message bubble — floating from left */}
                  <div key={`msg-${activeSubject}`} className="absolute bottom-20 left-4 flex items-center gap-2 px-2.5 py-1.5 bg-white/10 backdrop-blur-xl rounded-2xl rounded-bl-sm border border-white/10 shadow-lg max-w-[60%] animate-fade-slide">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 flex-shrink-0 flex items-center justify-center text-[7px] font-black text-white">
                      {live.liveMsg.name[0]}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[7px] font-black text-white/60 uppercase tracking-widest">{live.liveMsg.name}</span>
                      <span className="text-[9px] text-white font-medium">{live.liveMsg.text}</span>
                    </div>
                  </div>

                  {/* Focus Overlay — refined */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-black/60 backdrop-blur-xl px-3 py-2 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3">
                      <div className="text-right leading-tight">
                        <p className="text-[7px] font-black text-white/40 uppercase tracking-widest">Engagement</p>
                        <p key={`focus-${activeSubject}`} className="text-xs font-black bg-gradient-to-r from-brand-gold to-amber-300 bg-clip-text text-transparent animate-fade-slide">{live.focus}</p>
                      </div>
                      <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full border-2 border-brand-gold/20" />
                        <div className="absolute inset-0 rounded-full border-2 border-brand-gold border-t-transparent border-r-transparent animate-spin-slow" />
                        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-brand-gold/30 to-brand-orange/20 flex items-center justify-center">
                          <span className="text-[8px] font-black text-brand-gold">AI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat/Controls Bar — premium */}
                <div className="h-16 bg-gradient-to-r from-black via-slate-950 to-black border-t border-white/5 flex items-center gap-3 px-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-xs">👤</div>
                  <div className="flex-1 h-9 bg-white/[0.03] rounded-full border border-white/10 flex items-center gap-2 px-4 hover:border-white/20 transition-colors">
                    <p key={`chat-${activeSubject}`} className="flex-1 text-[9px] text-white/40 italic animate-fade-slide truncate">Ask a question about {live.chapter}...</p>
                    {/* typing indicator */}
                    <div className="flex gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-white/30 animate-pulse" />
                      <span className="w-1 h-1 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <span className="w-1 h-1 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-orange to-amber-400 flex items-center justify-center shadow-lg shadow-brand-orange/40 hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accents */}
          <div className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
          <div className="hidden md:block absolute -left-4 top-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '1s' }} />
          <div className="hidden md:block absolute -right-6 bottom-1/4 w-3 h-3 rounded-full bg-brand-gold/60 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
}
