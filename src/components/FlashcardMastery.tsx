import { useEffect, useState } from 'react';

const omrSections = [
  { label: 'Biology', icon: '🧬', section: 'Biology (Botany)', time: '02:14:55', answered: 45, marked: 12, correctOption: 'C', themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]' },
  { label: 'Physics', icon: '🔬', section: 'Physics (Mechanics)', time: '01:48:30', answered: 38, marked: 9, correctOption: 'B', themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]' },
  { label: 'Chemistry', icon: '⚗️', section: 'Chemistry (Organic)', time: '01:20:12', answered: 52, marked: 6, correctOption: 'D', themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]' },
  { label: 'Zoology', icon: '🦋', section: 'Zoology (Genetics)', time: '00:55:42', answered: 30, marked: 15, correctOption: 'A', themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]' }
];

export default function FlashcardMastery() {
  const [activeOMR, setActiveOMR] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveOMR((prev) => (prev + 1) % omrSections.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const omr = omrSections[activeOMR];

  return (
    <section id="omr-software" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20">
               <span className="w-2 h-2 rounded-full bg-brand-orange" />
               <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest">Desktop Software</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              NEET <span className="font-script text-brand-gold italic font-normal block mt-2">OMR Software</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Experience the final exam environment on your PC. Our professional OMR desktop software is designed to simulate exact exam conditions for maximum speed and precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-2 group">
              <h4 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                PC-Optimized Interface
              </h4>
              <p className="text-white/40 text-xs leading-relaxed">
                Full-screen desktop environment that mimics the NTA's digital portal or paper-based bubbling logic.
              </p>
            </div>
            <div className="space-y-2 group">
              <h4 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                Instant Processing
              </h4>
              <p className="text-white/40 text-xs leading-relaxed">
                High-speed engine that processes thousands of bubbles per second with zero margin for error.
              </p>
            </div>
            <div className="space-y-2 group">
              <h4 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                Exam Mode Timer
              </h4>
              <p className="text-white/40 text-xs leading-relaxed">
                Built-in countdown timer that enforces strict time limits for every section of the mock test.
              </p>
            </div>
            <div className="space-y-2 group">
              <h4 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                Advanced Analytics
              </h4>
              <p className="text-white/40 text-xs leading-relaxed">
                Detailed reporting on bubbling speed, accuracy, and section-wise performance.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Mockup (Desktop Window) */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Ambient halos */}
          <div className="absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          <div className="relative w-full max-w-lg">
            {/* Premium gradient border frame */}
            <div className="absolute -inset-[2px] rounded-[0.85rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

            <div className={`relative aspect-[16/10] rounded-xl p-[2px] shadow-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${omr.themeRing}`}>
              <div className="relative w-full h-full bg-[#1A1A1A] rounded-[0.65rem] border border-white/10 overflow-hidden group">
             {/* Window Header */}
             <div className="h-10 bg-[#252525] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                   <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                   <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2">
                   <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">SK-OMR-SYSTEM-V2.0</div>
                   <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">HD</span>
                </div>
                <div className="w-10" />
             </div>

             <div className="absolute inset-x-0 bottom-0 top-10 bg-white flex flex-col">
                {/* Desktop UI Header */}
                <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center text-[10px] text-white font-black">SK</div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black text-slate-800">OMR Digital Suite</span>
                         <span key={`section-${activeOMR}`} className="text-[8px] font-bold text-slate-400 animate-fade-slide">Section: {omr.section}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                        <span className="relative w-2 h-2 rounded-full bg-red-500" />
                      </span>
                      <div className="flex flex-col items-end">
                         <span className="text-[8px] text-slate-400 uppercase font-black">Time Left</span>
                         <span key={`time-${activeOMR}`} className="text-xs font-mono font-black text-red-500 animate-fade-slide">{omr.time}</span>
                      </div>
                   </div>
                </div>

                {/* Section Pills */}
                <div className="flex items-center gap-1.5 px-4 py-2 bg-white border-b border-slate-100 overflow-x-auto">
                  {omrSections.map((s, idx) => {
                    const isActive = idx === activeOMR;
                    return (
                      <button
                        key={s.label}
                        onClick={() => setActiveOMR(idx)}
                        className={`relative shrink-0 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                        )}
                        <span className={`text-xs ${isActive ? 'scale-110' : 'opacity-60'}`}>{s.icon}</span>
                        {s.label}
                      </button>
                    );
                  })}
                </div>

                {/* Desktop OMR Grid */}
                <div className="relative flex-1 overflow-hidden">
                  {/* Floating ambient dots */}
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-brand-gold/60 animate-float pointer-events-none z-10" />
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float pointer-events-none z-10" style={{ animationDelay: '2s' }} />
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-white/40 animate-float pointer-events-none z-10" style={{ animationDelay: '3.5s' }} />
                  <div key={`grid-${activeOMR}`} className="absolute inset-0 p-6 grid grid-cols-2 gap-x-8 gap-y-3 overflow-y-auto animate-fade-slide">
                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <div key={num} className="flex items-center justify-between border-b border-slate-50 pb-2">
                           <span className="text-[9px] font-bold text-slate-300">{num.toString().padStart(2, '0')}</span>
                           <div className="flex gap-1.5">
                              {['A', 'B', 'C', 'D'].map((opt) => (
                                 <div key={opt} className={`w-6 h-6 rounded-full border flex items-center justify-center text-[8px] font-bold ${num % 3 === 0 && opt === omr.correctOption ? 'bg-black border-black text-white' : 'border-slate-200 text-slate-300'}`}>
                                    {opt}
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
                </div>

                {/* Desktop Footer */}
                <div className="p-4 bg-slate-900 flex items-center justify-between">
                   <div key={`footer-${activeOMR}`} className="flex gap-4 animate-fade-slide">
                      <div className="text-white/40 text-[8px] font-bold uppercase">Answered: {omr.answered}</div>
                      <div className="text-white/40 text-[8px] font-bold uppercase">Marked for Review: {omr.marked}</div>
                   </div>
                   <button className="px-6 py-2 bg-gradient-to-br from-brand-orange to-amber-400 text-slate-900 text-[9px] font-black rounded-lg uppercase tracking-widest shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform">Complete Exam</button>
                </div>
             </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
            <div className="hidden md:block absolute -left-4 top-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '2s' }} />
            <div className="hidden md:block absolute -left-6 bottom-1/3 w-3 h-3 rounded-full bg-brand-gold/60 animate-float" style={{ animationDelay: '1s' }} />

            {/* Floating Desktop Label */}
            <div className="absolute -bottom-6 -right-4 px-6 py-3 bg-black border border-white/10 rounded-2xl shadow-2xl animate-float">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                     <div className="w-5 h-5 text-brand-gold">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                     </div>
                  </div>
                  <div>
                     <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">Compatible with</p>
                     <p className="text-sm text-white font-black uppercase">Windows & MacOS</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
