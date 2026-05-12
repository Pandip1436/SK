import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: 'NEET Programs', href: '#programs' },
    { name: 'Live Classroom', href: '#live-classroom' },
    { name: 'Expert Faculty', href: '#faculty' },
    { name: 'Mock Tests', href: '#assessments' },
    { name: 'AI Mentor', href: '#copilot' },
    { name: 'Achievers', href: '#achievers' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 h-16 md:h-24 flex items-center justify-between relative z-50">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-1.5 md:gap-2 flex-shrink-0 cursor-pointer group">
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-2xl font-black text-brand-orange tracking-tighter uppercase group-hover:text-brand-gold transition-colors">THE SK</span>
            <span className="text-lg md:text-2xl font-black text-brand-orange tracking-tighter uppercase group-hover:text-brand-gold transition-colors">LEARNINGS</span>
          </div>
          <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <svg viewBox="0 0 24 24" className="w-full h-full text-brand-orange fill-current group-hover:text-brand-gold transition-colors">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </a>

        {/* Navigation Links - Desktop Only */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2 z-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-semibold text-white hover:text-brand-gold transition-colors tracking-tight whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section - CTA Button Desktop */}
        <div className="hidden lg:flex items-center justify-end w-[180px]">
          <a
            href="https://wa.me/919095636001?text=Hi%20THE%20SK%20LEARNINGS,%20I'm%20ready%20to%20join%20the%20NEET%20success%20journey!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-brand-orange text-white text-xs font-black rounded-full uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-orange/20"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2 md:gap-4">
          <a
            href="https://wa.me/919095636001"
            className="px-3 md:px-4 py-1.5 md:py-2 bg-brand-orange text-white text-[9px] md:text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-brand-orange/10"
          >
            Join
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-1.5 focus:outline-none relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle Menu"
          >
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Solid background to prevent transparency issues */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Internal Header */}
        <div className="relative z-10 flex items-center justify-between px-6 h-20 border-b border-white/5 bg-black">
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-brand-orange tracking-tighter uppercase">THE SK</span>
              <span className="text-xl font-black text-brand-orange tracking-tighter uppercase">LEARNINGS</span>
            </div>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-white p-2 focus:outline-none w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Close Menu"
          >
            <div className="w-6 h-0.5 bg-white rotate-45 translate-y-1" />
            <div className="w-6 h-0.5 bg-white -rotate-45 -translate-y-1" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="relative z-10 h-[calc(100vh-80px)] flex flex-col justify-between p-10 pt-16 bg-black overflow-y-auto">
          <div className="flex flex-col gap-10">
            <div className="space-y-2">
               <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Navigation</p>
               <div className="w-8 h-px bg-brand-orange/30" />
            </div>

            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl md:text-3xl font-serif font-black text-white hover:text-brand-gold transition-all duration-300 flex items-baseline gap-4 group"
                >
                  <span className="text-[10px] font-mono text-brand-orange/40">0{i + 1}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-10 border-t border-white/5 space-y-6">
             <a
               href="https://wa.me/919095636001"
               onClick={() => setIsMenuOpen(false)}
               className="w-full py-5 bg-brand-orange text-white text-xs font-black rounded-2xl uppercase tracking-widest shadow-2xl flex items-center justify-center gap-2"
             >
               Start Success Journey
             </a>
             <p className="text-center text-[10px] text-white/20 font-medium tracking-wide">Official NEET Preparation Platform</p>
          </div>
        </div>

        {/* Subtle Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </nav>
  );
}

