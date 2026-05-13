import { useEffect, useState } from 'react';

const scanSubjects = [
  {
    label: 'Biology',
    icon: '🧬',
    bgGradient: 'from-emerald-100 via-emerald-50 to-white',
    accent: 'from-emerald-500/30',
    headline: 'Scanning Biology chapter…',
    detected: 'Detected: Photosynthesis',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]'
  },
  {
    label: 'Physics',
    icon: '🔬',
    bgGradient: 'from-blue-100 via-blue-50 to-white',
    accent: 'from-blue-500/30',
    headline: 'Scanning Physics problem…',
    detected: 'Detected: Wave Optics',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]'
  },
  {
    label: 'Chemistry',
    icon: '⚗️',
    bgGradient: 'from-fuchsia-100 via-fuchsia-50 to-white',
    accent: 'from-fuchsia-500/30',
    headline: 'Scanning Chemistry reaction…',
    detected: 'Detected: Organic Mechanism',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]'
  },
  {
    label: 'Maths',
    icon: '📐',
    bgGradient: 'from-amber-100 via-amber-50 to-white',
    accent: 'from-amber-500/30',
    headline: 'Scanning Maths derivation…',
    detected: 'Detected: Calculus',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]'
  }
];

export default function InstantDoubtSolving() {
  const [activeScan, setActiveScan] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveScan((prev) => (prev + 1) % scanSubjects.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const scan = scanSubjects[activeScan];

  return (
    <section id="instant-doubt" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background glow behind phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-[80vw] max-h-[80vw] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
          Instant <span className="font-script text-brand-gold italic font-normal">Doubt Solving</span>
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          Students receive instant solutions along with connected content to deepen understanding and keep learning momentum going. They can speak, type, or upload an image of a doubt and get a reliable, curriculum-aligned answer instantly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center mt-12 md:mt-20 relative z-10">
        
        {/* Left Side Features */}
        <div className="space-y-10 md:space-y-16 text-center lg:text-right order-2 lg:order-1">
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Multimodal Input</h4>
             <p className="text-white/50 text-sm leading-relaxed mx-auto lg:ml-auto lg:mr-0 max-w-[280px]">
                Students ask doubts using voice, text, or a picture of the question.
             </p>
          </div>
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Instant, Accurate Solutions</h4>
             <p className="text-white/50 text-sm leading-relaxed mx-auto lg:ml-auto lg:mr-0 max-w-[280px]">
                Provides clear, step-by-step answers in seconds for complex NEET problems.
             </p>
          </div>
        </div>

        {/* Center Side: Phone Mockup (Scanning Textbook) */}
        <div className="relative order-1 lg:order-2 flex justify-center">
           {/* Ambient halos */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] max-w-[80vw] max-h-[80vw] bg-gradient-to-b from-red-600/20 to-transparent blur-3xl rounded-full" />
           <div className="hidden sm:block absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse pointer-events-none" />
           <div className="hidden sm:block absolute -bottom-10 -left-10 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1.2s' }} />

           <div className="relative">
             {/* Premium gradient border frame around phone */}
             <div className="absolute -inset-[2px] rounded-[3.1rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

             <div className={`relative rounded-[3rem] p-[2px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${scan.themeRing}`}>
               <div className="relative w-72 h-[580px] bg-slate-950 rounded-[2.95rem] p-3 shadow-2xl border border-white/10 overflow-hidden group">
                  <div className="absolute inset-1 bg-white rounded-[2.5rem] overflow-hidden">
                     {/* Subject Pills */}
                     <div className="absolute top-10 left-3 right-3 z-20 flex items-center gap-1 overflow-x-auto">
                       {scanSubjects.map((s, idx) => {
                         const isActive = idx === activeScan;
                         return (
                           <button
                             key={s.label}
                             onClick={() => setActiveScan(idx)}
                             className={`relative shrink-0 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                               isActive
                                 ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                                 : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
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

                     {/* Textbook Scan Mockup */}
                     <div className="absolute inset-4 top-20 bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                        {scanSubjects.map((s, idx) => (
                          <div
                            key={s.label}
                            className={`absolute inset-0 bg-gradient-to-br ${s.bgGradient} transition-opacity duration-700 ${
                              idx === activeScan ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_18px,rgba(100,116,139,0.25)_18px,rgba(100,116,139,0.25)_19px)]" />
                          </div>
                        ))}
                        <div className={`absolute inset-0 bg-gradient-to-b ${scan.accent} to-transparent transition-opacity duration-700`} />

                        {/* Scanning Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-[scan_3s_ease-in-out_infinite]" />

                        {/* Focus Corners */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-red-500" />
                        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-red-500" />
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-red-500" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-red-500" />

                        {/* Detected label with animated status dot + SCAN badge */}
                        <div key={`det-${activeScan}`} className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 bg-red-500/90 text-white text-[8px] font-black uppercase tracking-widest rounded animate-fade-slide">
                          <span className="relative flex w-2 h-2">
                            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                            <span className="relative w-2 h-2 rounded-full bg-red-500" />
                          </span>
                          {scan.detected}
                          <span className="ml-1 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">SCAN</span>
                        </div>

                        {/* Floating ambient particles */}
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-brand-gold/60 animate-float pointer-events-none" />
                        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
                        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-slate-400/60 animate-float pointer-events-none" style={{ animationDelay: '3.5s' }} />

                        {/* Fake Textbook Text Lines */}
                        <div className="relative p-6 space-y-3 pt-20">
                           <div className="w-full h-1.5 bg-slate-200 rounded" />
                           <div className="w-4/5 h-1.5 bg-slate-200 rounded" />
                           <div className="w-full h-1.5 bg-slate-200 rounded" />
                           <div className="w-3/4 h-1.5 bg-slate-200 rounded" />
                           <div className="w-full h-4 bg-slate-300 rounded mt-8" />
                        </div>
                     </div>

                     {/* Camera UI Button Overlay */}
                     <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2">
                        <p key={`hd-${activeScan}`} className="text-[9px] font-bold text-slate-600 animate-fade-slide">{scan.headline}</p>
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-orange to-amber-400 border-[6px] border-slate-100 flex items-center justify-center shadow-lg shadow-brand-orange/40 cursor-pointer hover:scale-105 transition-transform">
                           <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm" />
                        </div>
                     </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
               </div>
             </div>
           </div>

           {/* Floating Triangles + accents */}
           <div className="hidden md:block absolute top-1/4 right-0 w-3 h-3 text-brand-gold opacity-60 animate-float">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
           </div>
           <div className="hidden md:block absolute bottom-1/4 left-0 w-4 h-4 text-brand-gold opacity-60 animate-float" style={{ animationDelay: '1s' }}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
           </div>
           <div className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" style={{ animationDelay: '1.5s' }} />
           <div className="hidden md:block absolute -left-4 bottom-1/3 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Right Side Features */}
        <div className="space-y-10 md:space-y-16 text-center lg:text-left order-3 lg:order-3">
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Concept Linking</h4>
             <p className="text-white/50 text-sm leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                Surfaces related questions, videos, and topics for stronger conceptual understanding.
             </p>
          </div>
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Content Recommendations</h4>
             <p className="text-white/50 text-sm leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                Encourages deeper learning by recommending related NCERT content based on your doubts.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
