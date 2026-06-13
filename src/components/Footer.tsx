export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#' || href === '') {
      e.currentTarget.blur();
      return;
    }
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    e.currentTarget.blur();
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Top CTA Band */}
      <div className="relative border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-brand-gold/5 to-brand-orange/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 md:gap-8 relative z-10">
          <div className="text-center md:text-left space-y-1.5 sm:space-y-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-black text-white leading-tight">
              See if a microbatch seat fits <span className="font-script text-brand-gold italic font-normal">your child.</span>
            </h3>
            <p className="text-white/50 text-xs sm:text-sm md:text-base font-medium max-w-md mx-auto md:mx-0">
              One short, no-obligation counselling call with our team — about where your child stands and what comes next.
            </p>
          </div>
          <a
            href="#counselling"
            onClick={(e) => handleNavClick(e, '#counselling')}
            className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full text-[11px] sm:text-xs md:text-sm font-black text-white uppercase tracking-wider overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 whitespace-nowrap shrink-0"
          >
            <span className="relative z-10">Book Parent Counselling →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-4 sm:space-y-5 md:space-y-6 text-left">
            <div className="flex items-center gap-2.5 sm:gap-3 justify-start">
              <img
                src="/SKL Logo-03.png"
                alt="THE SK LEARNINGS"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0"
              />
              <div className="flex flex-col leading-tight gap-1">
                <span className="font-sans font-extrabold text-lg sm:text-2xl text-brand-gold tracking-tight uppercase whitespace-nowrap">
                  THE SK LEARNINGS
                </span>
                <span className="font-sans font-normal text-[9px] sm:text-[11px] text-white uppercase tracking-[0.22em] whitespace-nowrap">
                  Private Educational Services
                </span>
                <span className="font-sans font-bold text-[7px] sm:text-[9px] text-brand-gold uppercase tracking-[0.14em]">
                  Medical <span className="text-brand-gold/50 font-light">/</span> Engineering <span className="text-brand-gold/50 font-light">/</span> Foundations <span className="text-brand-gold/50 font-light">/</span> Junior IAS
                </span>
              </div>
            </div>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-sm">
              An individual-focused microbatch coaching centre in Madurai for NEET, JEE, and Foundation students — where every student is noticed, guided, corrected, and improved.
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 pt-1 sm:pt-2">
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCo358by77FS2t7mJZRN4MWA" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-all duration-300 group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/the_sk_learnings/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-pink-500/20 hover:border-pink-500/30 hover:text-pink-400 transition-all duration-300 group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/theSKlearnings/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300 group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              {/* Twitter/X */}
              <a href="https://x.com/_saravanakkumar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919095636001" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-green-500/20 hover:border-green-500/30 hover:text-green-400 transition-all duration-300 group">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>

          {/* Programs Column */}
          <div className="text-center sm:text-left">
            <h5 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4 sm:mb-6 flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-5 h-px bg-brand-gold" />
              Programs
            </h5>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li><a href="#programs" onClick={(e) => handleNavClick(e, '#programs')} className="text-white/40 hover:text-brand-gold transition-colors duration-300 hover:translate-x-1 inline-block">NEET Repeater Program</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, '#programs')} className="text-white/40 hover:text-brand-gold transition-colors duration-300 hover:translate-x-1 inline-block">11th–12th NEET Integrated</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, '#programs')} className="text-white/40 hover:text-brand-gold transition-colors duration-300 hover:translate-x-1 inline-block">JEE Integrated Program</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, '#programs')} className="text-white/40 hover:text-brand-gold transition-colors duration-300 hover:translate-x-1 inline-block">9th–10th Foundation</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-center sm:text-left">
            <h5 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4 sm:mb-6 flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-5 h-px bg-brand-gold" />
              Company
            </h5>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-white/40 hover:text-brand-gold transition-colors duration-300 hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#why-microbatch" onClick={(e) => handleNavClick(e, '#why-microbatch')} className="text-white/40 hover:text-brand-gold transition-colors duration-300 hover:translate-x-1 inline-block">Why Microbatch</a></li>
              <li><a href="#improvement" onClick={(e) => handleNavClick(e, '#improvement')} className="text-white/40 hover:text-brand-gold transition-colors duration-300 hover:translate-x-1 inline-block">Our System</a></li>
              <li><a href="#achievers" onClick={(e) => handleNavClick(e, '#achievers')} className="text-white/40 hover:text-brand-gold transition-colors duration-300 hover:translate-x-1 inline-block">Achievers</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 md:col-span-1 text-left">
            <h5 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4 sm:mb-6 flex items-center gap-2 justify-start">
              <span className="w-5 h-px bg-brand-gold" />
              Contact
            </h5>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li className="flex items-start gap-2 sm:gap-3 justify-start">
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:thesklearnings@gmail.com" className="text-white/40 hover:text-brand-gold transition-colors text-xs sm:text-sm break-all">thesklearnings@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 justify-start">
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div className="space-y-1">
                  <a href="tel:+919095636001" className="text-white/40 hover:text-brand-gold transition-colors block text-xs sm:text-sm">+91 90956 36001</a>
                  <a href="tel:+919566606555" className="text-white/40 hover:text-brand-gold transition-colors block text-xs sm:text-sm">+91 95666 06555</a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 justify-start">
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-white/40 text-xs sm:text-sm leading-relaxed">5, Thomas St, Near Kunguma Kaali Amman Temple, Anna Main Street, Nagu Nagar, Pethaniapuram, Tamil Nadu 625016</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-[9px] sm:text-[10px] text-white/20 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold leading-relaxed">
            © 2026 THE SK LEARNINGS Private Limited. <span className="block sm:inline">All Rights Reserved.</span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 sm:gap-3 md:gap-6">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-[9px] sm:text-[10px] text-white/20 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold hover:text-white/60 transition-colors duration-300">Privacy Policy</a>
            <span className="hidden sm:block w-1 h-1 bg-white/10 rounded-full" />
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-[9px] sm:text-[10px] text-white/20 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold hover:text-white/60 transition-colors duration-300">Terms of Use</a>
            <span className="hidden sm:block w-1 h-1 bg-white/10 rounded-full" />
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-[9px] sm:text-[10px] text-white/20 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold hover:text-white/60 transition-colors duration-300">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* Powered by */}
      <div className="border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center gap-2">
          <span className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
            Powered by
          </span>
          <a
            href="https://unitednexa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-black bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            <span className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
            United Nexa Tech
          </a>
        </div>
      </div>

      {/* Decorative gradient line at very bottom */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
    </footer>
  );
}
