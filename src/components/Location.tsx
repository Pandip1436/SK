const ADDRESS =
  '5, Thomas St, Near Kunguma Kaali Amman Temple, Anna Main Street, Nagu Nagar, Pethaniapuram, Madurai, Tamil Nadu 625016';

const MAP_QUERY = encodeURIComponent('THE SK LEARNINGS, ' + ADDRESS);

export default function Location() {
  return (
    <section
      id="location"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-black"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] max-w-[70vw] bg-brand-orange/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-5 relative z-10">
        <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
          Visit us
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
          Find Us in <span className="font-script text-brand-gold italic font-normal">Madurai</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-6 md:gap-8 items-stretch relative z-10">
        {/* Map */}
        <div className="lg:col-span-3 relative glass-card rounded-3xl overflow-hidden border-white/10 min-h-[300px] md:min-h-[420px]">
          <iframe
            title="THE SK LEARNINGS location map"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            className="w-full h-full min-h-[300px] md:min-h-[420px] grayscale-[0.3] contrast-110"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Address card */}
        <div className="lg:col-span-2 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-orange mb-1">Address</p>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-orange mb-1">Call us</p>
                <a href="tel:+919095636001" className="text-white/80 hover:text-brand-gold transition-colors block text-sm md:text-base tabular-nums">+91 90956 36001</a>
                <a href="tel:+919566606555" className="text-white/80 hover:text-brand-gold transition-colors block text-sm md:text-base tabular-nums">+91 95666 06555</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-orange mb-1">Email</p>
                <a href="mailto:thesklearnings@gmail.com" className="text-white/80 hover:text-brand-gold transition-colors text-sm md:text-base break-all">thesklearnings@gmail.com</a>
              </div>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-brand-orange to-brand-gold text-white text-xs font-black rounded-full uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-transform shadow-lg shadow-brand-orange/20"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
}
