import { useEffect, useState } from 'react';

type Reel = {
  subject: string;
  hook: string;
  punchline: string;
  teacher: string;
  handle: string;
  duration: string;
  views: string;
  likes: string;
  comments: string;
  saves: string;
  accent: string;
  themeRing: string;
  pillTint: string;
  visual: 'physics' | 'chemistry' | 'biology' | 'maths';
};

const reels: Reel[] = [
  {
    subject: 'Physics',
    hook: 'Why does a fast bowler step BACK after bowling?',
    punchline: "It's not bravado. It's Newton's 3rd law in action.",
    teacher: 'Mr. Saravanan K.',
    handle: '@sklearnings',
    duration: '0:58',
    views: '12.4K',
    likes: '2.1K',
    comments: '184',
    saves: '892',
    accent: 'from-blue-600 via-blue-500 to-indigo-600',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.55)]',
    pillTint: 'bg-blue-500',
    visual: 'physics',
  },
  {
    subject: 'Chemistry',
    hook: "Why does soap kill germs in 20 seconds?",
    punchline: 'The micelle. One molecule, two personalities.',
    teacher: 'Dr. Priya Ramesh',
    handle: '@sklearnings',
    duration: '0:47',
    views: '18.9K',
    likes: '3.4K',
    comments: '241',
    saves: '1.5K',
    accent: 'from-fuchsia-600 via-pink-500 to-rose-600',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.55)]',
    pillTint: 'bg-fuchsia-500',
    visual: 'chemistry',
  },
  {
    subject: 'Biology',
    hook: 'Mitosis vs Meiosis in 60 seconds.',
    punchline: 'One makes copies. The other makes possibilities.',
    teacher: 'Ms. Lakshmi B.',
    handle: '@sklearnings',
    duration: '0:51',
    views: '15.2K',
    likes: '2.8K',
    comments: '167',
    saves: '1.1K',
    accent: 'from-emerald-600 via-teal-500 to-cyan-600',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.55)]',
    pillTint: 'bg-emerald-500',
    visual: 'biology',
  },
  {
    subject: 'Maths',
    hook: "The 'u-substitution' trick they don't teach in class.",
    punchline: 'Spot the inside function. Replace. Watch it collapse.',
    teacher: 'Mr. Vignesh A.',
    handle: '@sklearnings',
    duration: '0:49',
    views: '9.7K',
    likes: '1.6K',
    comments: '94',
    saves: '714',
    accent: 'from-indigo-600 via-violet-500 to-purple-600',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(99,102,241,0.55)]',
    pillTint: 'bg-indigo-500',
    visual: 'maths',
  },
];

const features = [
  {
    title: 'One Concept Per Clip',
    description: 'Every reel hammers a single NEET- or JEE-relevant idea — no fluff, no padding, no "subscribe and like".',
  },
  {
    title: 'On Instagram & YouTube',
    description: 'Vertical, captioned, hook-first. Watch on @sklearnings — Instagram Reels and YouTube Shorts, every weekday.',
  },
  {
    title: 'Tap to Save',
    description: 'Save any reel to your personal study library — surfaces back into your Study Planner on revision days.',
  },
  {
    title: 'Daily Drop',
    description: 'A new reel every weekday at 7 PM IST. Three subjects in rotation so nothing gets stale.',
  },
];

export default function ConceptReels() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % reels.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const reel = reels[active];

  return (
    <section id="concept-reels" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Side: Phone Mockup */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          {/* Ambient halos */}
          <div className="absolute -top-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          <div className="relative w-full max-w-xs">
            {/* Premium gradient border frame */}
            <div className="absolute -inset-[2px] rounded-[2.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

            <div className={`relative aspect-[9/19] rounded-[2.5rem] p-[2px] shadow-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${reel.themeRing}`}>
              <div className="relative w-full h-full bg-black rounded-[2.45rem] overflow-hidden">

                {/* Phone notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-end pr-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>

                {/* Status Bar */}
                <div className="absolute top-2 left-0 right-0 px-6 flex items-center justify-between text-[9px] font-black text-white z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-1.5 rounded-sm bg-white" />
                    <span className="w-1 h-1 rounded-full bg-white" />
                    <span className="w-3 h-2 rounded-sm border border-white" />
                  </div>
                </div>

                {/* Video gradient background */}
                <div key={`bg-${active}`} className={`absolute inset-0 bg-gradient-to-br ${reel.accent} animate-fade-slide`}>
                  {/* Diagonal texture */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 22px)',
                  }} />

                  {/* Subject-specific concept visualization */}
                  <ConceptVisual variant={reel.visual} />

                  {/* Dark gradient overlay at top + bottom for legibility */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Top Bar — Reels label */}
                <div className="absolute top-8 left-0 right-0 px-4 flex items-center justify-between z-10">
                  <p className="text-[11px] font-black text-white">Reels</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <p className="text-[9px] font-black text-white uppercase tracking-widest">SK Live</p>
                  </div>
                </div>

                {/* Hook text — large overlay */}
                <div key={`hook-${active}`} className="absolute inset-x-0 top-1/3 px-5 z-10 animate-fade-slide">
                  <p className="text-[10px] font-black text-white/80 uppercase tracking-widest mb-2">{reel.subject} &middot; {reel.duration}</p>
                  <p className="text-xl font-black text-white leading-tight drop-shadow-lg">
                    {reel.hook}
                  </p>
                </div>

                {/* Right side action stack */}
                <div className="absolute right-2 bottom-32 flex flex-col items-center gap-4 z-10">
                  <ActionButton
                    iconPath="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    label={reel.likes}
                  />
                  <ActionButton
                    iconPath="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    label={reel.comments}
                  />
                  <ActionButton
                    iconPath="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    label={reel.saves}
                  />
                  <ActionButton
                    iconPath="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    label="Share"
                  />
                </div>

                {/* Bottom — Handle + caption + audio */}
                <div key={`caption-${active}`} className="absolute inset-x-0 bottom-0 px-4 pb-5 z-10 space-y-2 animate-fade-slide">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full ${reel.pillTint} flex items-center justify-center text-[9px] font-black text-white ring-2 ring-white`}>
                      SK
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-black text-white truncate">{reel.handle}</p>
                      <p className="text-[8px] font-bold text-white/60 truncate">{reel.teacher}</p>
                    </div>
                    <button className="px-2.5 py-1 rounded-md text-[8px] font-black uppercase tracking-widest bg-white text-slate-900">Follow</button>
                  </div>
                  <p className="text-[9px] text-white/90 leading-snug font-medium">
                    {reel.punchline} <span className="text-brand-gold font-black">#NEET2026</span> <span className="text-brand-gold font-black">#JEE</span>
                  </p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-2a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p className="text-[8px] font-bold text-white/60 truncate">Original sound &middot; SK Learnings</p>
                  </div>
                </div>

                {/* Tap-to-pause indicator (center) */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center z-0"
                  aria-label="play/pause"
                >
                  {!isPlaying && (
                    <div className="w-16 h-16 rounded-full bg-black/30 backdrop-blur flex items-center justify-center">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </button>

                {/* View counter bottom-left */}
                <div className="absolute bottom-2 left-4 z-10 flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p className="text-[8px] font-bold text-white/60">{reel.views} views</p>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="hidden md:block absolute -right-4 top-1/3 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
            <div className="hidden md:block absolute -left-4 top-2/3 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '2s' }} />

            {/* Floating "Daily Drop" badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 px-4 py-2.5 bg-black border border-white/10 rounded-2xl shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">Drops Daily</p>
                  <p className="text-xs text-white font-black">7 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-12 order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Learn in <span className="font-script text-brand-gold italic font-normal block mt-2">60 Seconds</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              A new 60-second concept reel from SK faculty every weekday — on <span className="text-white font-bold">Instagram</span> and <span className="text-white font-bold">YouTube Shorts</span>. Vertical, fast, and built for the scroll, so students hit Physics, Chemistry or Biology while they wait for the bus.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="space-y-2 group">
                <h4 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                  {f.title}
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          {/* Reel selector pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {reels.map((r, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={r.subject}
                  onClick={() => setActive(idx)}
                  className={`relative shrink-0 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 overflow-hidden transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                  )}
                  <span className={`w-1.5 h-1.5 rounded-full ${r.pillTint}`} />
                  {r.subject}
                </button>
              );
            })}
          </div>

          {/* Social follow row */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Follow</span>
            <a
              href="https://www.instagram.com/sklearnings"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-[#feda75] via-[#fa7e1e] via-30% to-[#d62976] text-white font-black text-xs shadow-lg shadow-pink-500/20 hover:scale-105 active:scale-95 transition-transform"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@sklearnings"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF0000] text-white font-black text-xs shadow-lg shadow-red-500/20 hover:scale-105 active:scale-95 transition-transform"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function ActionButton({ iconPath, label }: { iconPath: string; label: string }) {
  return (
    <button className="flex flex-col items-center gap-1">
      <div className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border border-white/10">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>
      <span className="text-[8px] font-black text-white">{label}</span>
    </button>
  );
}

function ConceptVisual({ variant }: { variant: Reel['visual'] }) {
  // Simple animated SVG-ish elements that hint at the subject without using emojis
  if (variant === 'physics') {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border-2 border-white/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 rounded-full bg-white shadow-lg" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    );
  }
  if (variant === 'chemistry') {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-32 h-32">
          {[0, 60, 120, 180, 240, 300].map((rot, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-12 h-0.5 bg-white/30 origin-left"
              style={{ transform: `rotate(${rot}deg)` }}
            />
          ))}
          <div className="absolute inset-1/3 rounded-full bg-white/30 backdrop-blur" />
          {[0, 60, 120, 180, 240, 300].map((rot, i) => {
            const r = 48;
            const x = Math.cos((rot * Math.PI) / 180) * r;
            const y = Math.sin((rot * Math.PI) / 180) * r;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-white/70 shadow-lg"
                style={{ transform: `translate(${x - 6}px, ${y - 6}px)` }}
              />
            );
          })}
        </div>
      </div>
    );
  }
  if (variant === 'biology') {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-24 h-40">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-2 rounded-full bg-white/40"
              style={{
                top: `${i * 18}%`,
                transform: `rotate(${i % 2 ? -25 : 25}deg)`,
                transformOrigin: 'center',
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  // maths
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <p className="text-white/30 text-7xl font-serif italic font-black">∫</p>
    </div>
  );
}
