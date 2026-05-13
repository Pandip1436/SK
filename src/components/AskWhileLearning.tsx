import { useEffect, useState } from 'react';

const videoChats = [
  {
    label: 'Physics',
    icon: '🔬',
    title: 'Introduction of magnetic force',
    chapter: 'Chapter 4: Moving Charges',
    studentQ: 'Why do opposite poles attract and like poles repel?',
    aiA: '"This is due to the direction of magnetic field lines. Let\'s look at the field pattern at 2:14..."',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]'
  },
  {
    label: 'Biology',
    icon: '🧬',
    title: 'Light reactions in photosynthesis',
    chapter: 'Chapter 13: Photosynthesis',
    studentQ: 'How is NADPH generated during light reactions?',
    aiA: '"Electrons from PSI reduce NADP⁺ via ferredoxin. Replay 4:08 for the Z-scheme diagram..."',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]'
  },
  {
    label: 'Chemistry',
    icon: '⚗️',
    title: 'SN1 vs SN2 mechanism',
    chapter: 'Chapter 10: Haloalkanes',
    studentQ: 'When do reactions prefer SN1 over SN2?',
    aiA: '"Tertiary carbons and polar protic solvents favour SN1. See the energy diagram at 6:42..."',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]'
  },
  {
    label: 'Maths',
    icon: '📐',
    title: 'Integration by parts',
    chapter: 'Chapter 7: Integrals',
    studentQ: 'How do I choose u and dv correctly?',
    aiA: '"Use the ILATE rule — Inverse, Log, Algebraic, Trig, Exp. Watch the worked example at 3:10..."',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]'
  }
];

export default function AskWhileLearning() {
  const [activeChat, setActiveChat] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveChat((prev) => (prev + 1) % videoChats.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const chat = videoChats[activeChat];

  return (
    <section id="ask-while-learning" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background glow behind phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-[80vw] max-h-[80vw] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
          Ask While <span className="font-script text-brand-gold italic font-normal">Learning</span>
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          Every piece of content comes with a built-in doubt-solver. Students can ask questions as they watch and get instant, curriculum-aware explanations from SK Intelligence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-center mt-12 md:mt-20 relative z-10">
        
        {/* Left Side Features */}
        <div className="space-y-10 md:space-y-16 text-center lg:text-right order-2 lg:order-1">
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">In-Video Doubt Solving</h4>
             <p className="text-white/50 text-sm leading-relaxed mx-auto lg:ml-auto lg:mr-0 max-w-[280px]">
                Allows students to ask questions directly while watching a lesson and get answers in real time.
             </p>
          </div>
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Text or Voice Input</h4>
             <p className="text-white/50 text-sm leading-relaxed mx-auto lg:ml-auto lg:mr-0 max-w-[280px]">
                Accepts both typed and spoken questions for seamless interaction without pausing your flow.
             </p>
          </div>
        </div>

        {/* Center Side: Phone Mockup (Video + Chat) */}
        <div className="relative order-1 lg:order-2 flex justify-center">
           {/* Ambient halos */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] max-w-[80vw] max-h-[80vw] bg-gradient-to-b from-purple-600/20 to-transparent blur-3xl rounded-full" />
           <div className="hidden sm:block absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse pointer-events-none" />
           <div className="hidden sm:block absolute -bottom-10 -left-10 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1.2s' }} />

           <div className="relative">
             {/* Premium gradient border frame around phone */}
             <div className="absolute -inset-[2px] rounded-[3.1rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

             <div className={`relative rounded-[3rem] p-[2px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${chat.themeRing}`}>
               <div className="relative w-72 h-[580px] bg-slate-950 rounded-[2.95rem] p-3 shadow-2xl border border-white/10 overflow-hidden group">
                  <div className="absolute inset-1 bg-white rounded-[2.5rem] flex flex-col overflow-hidden">
                     {/* Video Area */}
                     <div className="h-44 bg-slate-900 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                           </div>
                        </div>
                        {/* Floating ambient particles inside video stage */}
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-brand-gold/60 animate-float pointer-events-none" />
                        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
                        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-white/40 animate-float pointer-events-none" style={{ animationDelay: '3.5s' }} />

                        {/* LIVE dot + AI badge top-right */}
                        <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 px-1.5 py-0.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                          <span className="relative flex w-2 h-2">
                            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                            <span className="relative w-2 h-2 rounded-full bg-red-500" />
                          </span>
                          <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">AI</span>
                        </div>

                        {/* Subject Pills */}
                        <div className="absolute top-2 left-2 right-16 flex items-center gap-1 overflow-x-auto z-10">
                          {videoChats.map((v, idx) => {
                            const isActive = idx === activeChat;
                            return (
                              <button
                                key={v.label}
                                onClick={() => setActiveChat(idx)}
                                className={`relative shrink-0 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                                  isActive
                                    ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                                    : 'bg-white/10 text-white/60 hover:bg-white/20 backdrop-blur-md border border-white/5'
                                }`}
                              >
                                {isActive && (
                                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                                )}
                                <span className={`text-[10px] ${isActive ? 'scale-110' : 'opacity-60'}`}>{v.icon}</span>
                                {v.label}
                              </button>
                            );
                          })}
                        </div>
                        {/* Video Title Overlay */}
                        <div key={`title-${activeChat}`} className="absolute bottom-2 left-4 right-4 text-white animate-fade-slide">
                           <p className="text-[10px] font-black uppercase tracking-widest truncate">{chat.title}</p>
                           <p className="text-[7px] text-white/60">{chat.chapter}</p>
                        </div>
                     </div>

                     {/* Chat Area */}
                     <div key={`chat-${activeChat}`} className="flex-1 p-4 flex flex-col space-y-4 overflow-y-auto bg-slate-50 animate-fade-slide">
                        <div className="flex gap-2">
                           <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0" />
                           <div className="p-3 bg-white border border-slate-100 rounded-2xl rounded-tl-none shadow-sm">
                              <p className="text-[8px] font-bold text-slate-800">{chat.studentQ}</p>
                           </div>
                        </div>
                        <div className="flex gap-2 flex-row-reverse">
                           <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-orange to-amber-400 flex-shrink-0 flex items-center justify-center text-[8px] text-slate-900 font-bold">SK</div>
                           <div className="p-3 bg-brand-orange/10 border border-brand-orange/10 rounded-2xl rounded-tr-none">
                              <p className="text-[8px] text-slate-700 leading-relaxed italic">
                                 {chat.aiA}
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Input Bar */}
                     <div className="h-14 bg-white border-t border-slate-100 flex items-center px-4 gap-2">
                        <div className="flex-1 h-8 bg-slate-50 border border-slate-100 rounded-full flex items-center px-3">
                           <span className="text-[8px] text-slate-400">Ask something...</span>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange to-amber-400 flex items-center justify-center shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform">
                           <svg className="w-4 h-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                           </svg>
                        </button>
                     </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
               </div>
             </div>
           </div>

           {/* Floating Triangles + accents */}
           <div className="hidden md:block absolute top-1/3 right-0 w-3 h-3 text-brand-gold opacity-60 animate-float">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
           </div>
           <div className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" style={{ animationDelay: '1.5s' }} />
           <div className="hidden md:block absolute -left-4 bottom-1/3 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Right Side Features */}
        <div className="space-y-10 md:space-y-16 text-center lg:text-left order-3 lg:order-3">
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Context-Aware Responses</h4>
             <p className="text-white/50 text-sm leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                Answers are tailored to the exact video moment and topic being discussed in the lecture.
             </p>
          </div>
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">24/7 Availability</h4>
             <p className="text-white/50 text-sm leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                AI support that's always on, no matter when students study—even at midnight.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
