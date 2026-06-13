// NOTE: Swap the `src` values below with real centre / classroom photographs
// when available. The current images are the best available assets in /public.
const photos = [
  { src: '/about.png', alt: 'Students in a focused microbatch learning session at THE SK LEARNINGS' },
  { src: '/WhatsApp Image 2026-05-21 at 12.02.01 PM.jpeg', alt: 'Inside THE SK LEARNINGS centre, Madurai' },
  { src: '/performance-banner.jpg', alt: 'Daily testing and academic correction at THE SK LEARNINGS' },
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
          daily rhythm of teaching, testing, and correction.
        </p>
      </div>

      {/* Featured video */}
      <div className="max-w-4xl mx-auto relative z-10 mb-8 md:mb-10">
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

      {/* Photo gallery */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4 md:gap-5 relative z-10">
        {photos.map((p) => (
          <div
            key={p.src}
            className="relative glass-card rounded-2xl overflow-hidden border-white/10 group aspect-[4/3]"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
