export default function MultilingualSupport() {
  const features = [
    {
      title: "One-Click Translation",
      description: "Instantly converts all content into regional languages like Hindi, Tamil, Bengali, and many more."
    },
    {
      title: "Syllabus-Wide Language Switch",
      description: "Changes the language for all chapters and subjects at once, no manual edits required."
    },
    {
      title: "Voiceover Translation",
      description: "Enables teaching with AI-generated voiceovers in the selected language, perfectly synced with visuals."
    },
    {
      title: "Multilingual Question Bank",
      description: "Questions, options, and solutions are fully translated without losing accuracy or NEET-level depth."
    },
    {
      title: "Consistent Terminology",
      description: "Ensures technical medical and scientific terms are accurately retained across all translations."
    }
  ];

  return (
    <section id="multilingual" className="py-16 md:py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Side: Mockup (Video Player) */}
        <div className="relative">
          <div className="absolute inset-0 bg-brand-gold/10 blur-[120px] rounded-full animate-pulse" />
          
          <div className="relative glass-card aspect-video rounded-3xl p-4 border-white/10 shadow-2xl overflow-hidden bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-transparent" />
            
            {/* Video Player Mockup */}
            <div className="relative w-full h-full bg-black rounded-xl overflow-hidden flex flex-col">
               <div className="flex-1 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9d39d6627?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40" />
                  <div className="relative z-10 text-center space-y-4 px-6">
                     <div className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] font-bold rounded-full uppercase tracking-widest mb-2">Chemistry</div>
                     <h3 className="text-2xl md:text-3xl font-serif font-black text-white">Characteristics of <span className="text-brand-gold italic">Chemical Reactions</span></h3>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                     </div>
                  </div>
               </div>

               {/* Video Controls */}
               <div className="h-14 bg-white/5 backdrop-blur-xl border-t border-white/10 flex items-center px-6 gap-6">
                  <div className="flex-1 h-1.5 bg-white/20 rounded-full relative overflow-hidden">
                     <div className="absolute top-0 left-0 h-full w-1/3 bg-brand-orange" />
                     <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="text-[10px] font-mono text-white/60">02:45 / 12:30</span>
                     <div className="w-6 h-6 rounded bg-brand-orange/20 flex items-center justify-center text-[10px] text-brand-orange font-bold">CC</div>
                  </div>
               </div>
            </div>

            {/* Floating Language Tags */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-brand-gold text-slate-900 text-[10px] font-black rounded-lg shadow-xl animate-float">Hindi (हिन्दी)</div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white text-slate-900 text-[10px] font-black rounded-lg shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>Tamil (தமிழ்)</div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Our Content, <span className="font-script text-brand-gold italic font-normal block mt-2">Your Language</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              From Hindi to Tamil, SK Intelligence adapts entire lessons, slides, transcripts, and narrations into your preferred teaching language. Every student understands, engages, and excels in the language they know best.
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

      </div>
    </section>
  );
}
