export default function Navbar() {
  const links = [
    { name: 'NEET Programs', href: '#programs' },
    { name: 'Live Classroom', href: '#live-classroom' },
    { name: 'Expert Faculty', href: '#faculty' },
    { name: 'Mock Tests', href: '#assessments' },
    { name: 'AI Mentor', href: '#copilot' },
    { name: 'Achievers', href: '#achievers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-screen-2xl mx-auto px-10 h-24 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black text-brand-orange tracking-tighter">THE SK</span>
            <span className="text-2xl font-black text-brand-orange tracking-tighter">LEARNINGS</span>
          </div>
          <div className="w-8 h-8 flex items-center justify-center -rotate-12">
            <svg viewBox="0 0 24 24" className="w-full h-full text-brand-orange fill-current">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>

        {/* Navigation Links - Center Aligned */}
        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 z-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-white/80 hover:text-white transition-colors tracking-tight whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section (Empty in template screenshot) */}
        <div className="w-[180px] hidden lg:block" />

        {/* Mobile Menu Button (Placeholder) */}
        <div className="lg:hidden">
          <button className="text-white p-2">
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
