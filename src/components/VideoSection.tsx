export default function VideoSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Vortex (continuation) */}
      <div className="absolute inset-0 hero-vortex opacity-50 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-16 leading-tight">
          The Intelligent <span className="font-script text-brand-gold relative">
            classroom
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-gold/60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span> Era Begins
        </h2>

        <div className="relative group max-w-5xl mx-auto">
          {/* Golden Border Frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-orange to-brand-gold rounded-3xl blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* YouTube Embed */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Mhbc2qL_fQY?autoplay=0&rel=0" 
              title="Unveiling SK Intelligence" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Large Floating "A" on the side */}
      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-48 h-48 glass-card rounded-[2rem] flex items-center justify-center text-8xl font-black text-white/5 rotate-12 pointer-events-none hidden lg:flex">
        A
      </div>
    </section>
  );
}
