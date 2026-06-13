const banners = [
  {
    src: '/inside_classroom.png',
    alt: 'Inside THE SK LEARNINGS — premium infrastructure, focused microbatch sessions, personalized attention, regular testing, and mentor support in Madurai',
  },
  {
    src: '/Focused_microbatch.png',
    alt: 'A focused microbatch class in session at THE SK LEARNINGS — individual attention, concept clarity, and better performance',
  },
  {
    src: '/dailytest.png',
    alt: 'Daily testing and academic correction process at THE SK LEARNINGS — test, analyse, identify errors, correct, and improve',
  },
];

export default function Environment() {
  return (
    <section
      id="environment"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 hero-vortex opacity-40 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-5 relative z-10">
        <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
          Inside the centre
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
          Our Learning <span className="font-script text-brand-gold italic font-normal">Environment</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          A calm, structured space in Madurai built for focus — small batches, close attention, and a steady
          daily rhythm of teaching, testing, and correction. The environment a student studies in shapes the
          discipline they build, so we keep ours quiet, organised, and closely supervised.
        </p>
      </div>

      {/* Featured video */}
      <div className="max-w-4xl mx-auto relative z-10 mb-8 md:mb-12">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-orange to-brand-gold rounded-3xl blur-[2px] opacity-60 group-hover:opacity-90 transition-opacity" />
          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Mhbc2qL_fQY?rel=0"
              title="THE SK LEARNINGS — A look inside"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Infographic banners */}
      <div className="max-w-5xl mx-auto space-y-5 md:space-y-6 relative z-10">
        {banners.map((b) => (
          <div
            key={b.src}
            className="relative glass-card rounded-2xl md:rounded-3xl overflow-hidden border-white/10 shadow-2xl group"
          >
            <img
              src={b.src}
              alt={b.alt}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
