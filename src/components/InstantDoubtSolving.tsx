export default function InstantDoubtSolving() {
  return (
    <section id="instant-doubt" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background glow behind phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

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
        <div className="space-y-16 text-right order-2 lg:order-1">
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Multimodal Input</h4>
             <p className="text-white/50 text-sm leading-relaxed ml-auto max-w-[280px]">
                Students ask doubts using voice, text, or a picture of the question.
             </p>
          </div>
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Instant, Accurate Solutions</h4>
             <p className="text-white/50 text-sm leading-relaxed ml-auto max-w-[280px]">
                Provides clear, step-by-step answers in seconds for complex NEET problems.
             </p>
          </div>
        </div>

        {/* Center Side: Phone Mockup (Scanning Textbook) */}
        <div className="relative order-1 lg:order-2 flex justify-center">
           {/* Outer Glow Ring */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px] bg-gradient-to-b from-red-600/20 to-transparent blur-3xl rounded-full" />
           
           <div className="relative w-72 h-[580px] bg-slate-950 rounded-[3rem] p-3 shadow-2xl border border-white/10 overflow-hidden group">
              <div className="absolute inset-1 bg-white rounded-[2.5rem] overflow-hidden">
                 {/* Textbook Scan Image Mockup */}
                 <div className="absolute inset-4 bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=400" 
                      alt="Textbook Scan" 
                      className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    {/* Scanning Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-[scan_3s_ease-in-out_infinite]" />
                    
                    {/* Focus Corners */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-red-500" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-red-500" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-red-500" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-red-500" />
                    
                    {/* Fake Textbook Text Lines */}
                    <div className="p-8 space-y-3 pt-20">
                       <div className="w-full h-1.5 bg-slate-200 rounded" />
                       <div className="w-4/5 h-1.5 bg-slate-200 rounded" />
                       <div className="w-full h-1.5 bg-slate-200 rounded" />
                       <div className="w-3/4 h-1.5 bg-slate-200 rounded" />
                       <div className="w-full h-4 bg-slate-300 rounded mt-8" />
                    </div>
                 </div>

                 {/* Camera UI Button Overlay */}
                 <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white border-[6px] border-slate-100 flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform">
                       <div className="w-8 h-8 rounded-full bg-slate-200" />
                    </div>
                 </div>
              </div>
              
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
           </div>

           {/* Floating Triangles */}
           <div className="absolute top-1/4 right-0 w-3 h-3 text-brand-gold opacity-60 animate-float">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
           </div>
           <div className="absolute bottom-1/4 left-0 w-4 h-4 text-brand-gold opacity-60 animate-float" style={{ animationDelay: '1s' }}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
           </div>
        </div>

        {/* Right Side Features */}
        <div className="space-y-16 text-left order-3 lg:order-3">
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Concept Linking</h4>
             <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
                Surfaces related questions, videos, and topics for stronger conceptual understanding.
             </p>
          </div>
          <div className="space-y-4 group">
             <h4 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">Content Recommendations</h4>
             <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
                Encourages deeper learning by recommending related NCERT content based on your doubts.
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
