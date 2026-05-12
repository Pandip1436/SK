export default function AskWhileLearning() {
  return (
    <section id="ask-while-learning" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background glow behind phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

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
        <div className="space-y-16 text-right order-2 lg:order-1">
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">In-Video Doubt Solving</h4>
             <p className="text-white/50 text-sm leading-relaxed ml-auto max-w-[280px]">
                Allows students to ask questions directly while watching a lesson and get answers in real time.
             </p>
          </div>
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Text or Voice Input</h4>
             <p className="text-white/50 text-sm leading-relaxed ml-auto max-w-[280px]">
                Accepts both typed and spoken questions for seamless interaction without pausing your flow.
             </p>
          </div>
        </div>

        {/* Center Side: Phone Mockup (Video + Chat) */}
        <div className="relative order-1 lg:order-2 flex justify-center">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] bg-gradient-to-b from-purple-600/20 to-transparent blur-3xl rounded-full" />
           
           <div className="relative w-72 h-[580px] bg-slate-950 rounded-[3rem] p-3 shadow-2xl border border-white/10 overflow-hidden group">
              <div className="absolute inset-1 bg-white rounded-[2.5rem] flex flex-col overflow-hidden">
                 {/* Video Area */}
                 <div className="h-44 bg-slate-900 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                       </div>
                    </div>
                    {/* Video Title Overlay */}
                    <div className="absolute bottom-2 left-4 text-white">
                       <p className="text-[10px] font-black uppercase tracking-widest">Introduction of magnetic force</p>
                       <p className="text-[7px] text-white/60">Chapter 4: Moving Charges</p>
                    </div>
                 </div>

                 {/* Chat Area */}
                 <div className="flex-1 p-4 flex flex-col space-y-4 overflow-y-auto bg-slate-50">
                    <div className="flex gap-2">
                       <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0" />
                       <div className="p-3 bg-white border border-slate-100 rounded-2xl rounded-tl-none shadow-sm">
                          <p className="text-[8px] font-bold text-slate-800">Why do opposite poles attract and like poles repel?</p>
                       </div>
                    </div>
                    <div className="flex gap-2 flex-row-reverse">
                       <div className="w-6 h-6 rounded-full bg-brand-orange flex-shrink-0 flex items-center justify-center text-[8px] text-white font-bold">SK</div>
                       <div className="p-3 bg-brand-orange/10 border border-brand-orange/10 rounded-2xl rounded-tr-none">
                          <p className="text-[8px] text-slate-700 leading-relaxed italic">
                             "This is due to the direction of magnetic field lines. Let's look at the field pattern at 2:14..."
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Input Bar */}
                 <div className="h-14 bg-white border-t border-slate-100 flex items-center px-4 gap-2">
                    <div className="flex-1 h-8 bg-slate-50 border border-slate-100 rounded-full flex items-center px-3">
                       <span className="text-[8px] text-slate-400">Ask something...</span>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center">
                       <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                       </svg>
                    </button>
                 </div>
              </div>
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
           </div>

           {/* Floating Triangles */}
           <div className="absolute top-1/3 right-0 w-3 h-3 text-brand-gold opacity-60 animate-float">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
           </div>
        </div>

        {/* Right Side Features */}
        <div className="space-y-16 text-left order-3 lg:order-3">
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Context-Aware Responses</h4>
             <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
                Answers are tailored to the exact video moment and topic being discussed in the lecture.
             </p>
          </div>
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">24/7 Availability</h4>
             <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
                AI support that's always on, no matter when students study—even at midnight.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
