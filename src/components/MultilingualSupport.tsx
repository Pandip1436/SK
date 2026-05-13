import { useEffect, useState } from 'react';

const languages = [
  {
    label: 'Hindi',
    icon: '🇮🇳',
    chip: 'Hindi (हिन्दी)',
    chipColor: 'bg-brand-gold text-slate-900',
    subject: 'रसायन शास्त्र',
    title: 'रासायनिक अभिक्रियाओं',
    subtitle: 'के लक्षण',
    cc: 'HI',
    time: '02:45 / 12:30',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]'
  },
  {
    label: 'Tamil',
    icon: '🇮🇳',
    chip: 'Tamil (தமிழ்)',
    chipColor: 'bg-white text-slate-900',
    subject: 'வேதியியல்',
    title: 'வேதிவினைகளின்',
    subtitle: 'பண்புகள்',
    cc: 'TA',
    time: '03:12 / 12:30',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(251,191,36,0.6)]'
  },
  {
    label: 'Telugu',
    icon: '🇮🇳',
    chip: 'Telugu (తెలుగు)',
    chipColor: 'bg-emerald-400 text-slate-900',
    subject: 'రసాయన శాస్త్రం',
    title: 'రసాయన చర్యల',
    subtitle: 'లక్షణాలు',
    cc: 'TE',
    time: '04:01 / 12:30',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]'
  },
  {
    label: 'Bengali',
    icon: '🇮🇳',
    chip: 'Bengali (বাংলা)',
    chipColor: 'bg-fuchsia-400 text-slate-900',
    subject: 'রসায়ন',
    title: 'রাসায়নিক বিক্রিয়ার',
    subtitle: 'বৈশিষ্ট্য',
    cc: 'BN',
    time: '05:20 / 12:30',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]'
  }
];

export default function MultilingualSupport() {
  const [activeLang, setActiveLang] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveLang((prev) => (prev + 1) % languages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const lang = languages[activeLang];

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
        <div className="relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto w-full">
          {/* Ambient halos */}
          <div className="absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          {/* Premium gradient border frame */}
          <div className="absolute -inset-[2px] rounded-[1.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

          <div className={`relative aspect-video rounded-3xl p-[2px] border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${lang.themeRing}`}>
            <div className="relative w-full h-full bg-slate-900 rounded-[1.4rem] p-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-transparent" />

              {/* Video Player Mockup */}
              <div className="relative w-full h-full bg-black rounded-xl overflow-hidden flex flex-col">
               <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                  {/* Stage background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
                  {/* Subtle classroom-style gradient backdrop (replaces external image to avoid CORB) */}
                  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_30%_20%,rgba(253,184,19,0.5),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,106,0,0.4),transparent_50%)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50" />

                  {/* Animated Chemistry Reaction — the "playing video" content */}
                  <div className={`absolute inset-0 flex items-center justify-center ${isPlaying ? '' : 'opacity-60'}`}>
                    <svg viewBox="0 0 220 130" className="w-3/4 h-auto max-h-[70%]">
                      <defs>
                        <radialGradient id="reactantA">
                          <stop offset="0%" stopColor="#FCD34D" />
                          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
                        </radialGradient>
                        <radialGradient id="reactantB">
                          <stop offset="0%" stopColor="#60A5FA" />
                          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.3" />
                        </radialGradient>
                        <radialGradient id="product">
                          <stop offset="0%" stopColor="#A7F3D0" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                        </radialGradient>
                      </defs>

                      {/* Reactant A — left */}
                      <g className={isPlaying ? 'animate-reactant-a' : ''}>
                        <circle cx="40" cy="65" r="14" fill="url(#reactantA)" />
                        <text x="40" y="69" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="900">A</text>
                      </g>

                      {/* Plus */}
                      <text x="75" y="70" textAnchor="middle" fontSize="14" fill="#FCD34D" fontWeight="900" opacity="0.6">+</text>

                      {/* Reactant B */}
                      <g className={isPlaying ? 'animate-reactant-b' : ''}>
                        <circle cx="100" cy="65" r="11" fill="url(#reactantB)" />
                        <text x="100" y="69" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="900">B</text>
                      </g>

                      {/* Arrow */}
                      <g>
                        <line x1="125" y1="65" x2="155" y2="65" stroke="#FCD34D" strokeWidth="1.5" />
                        <polygon points="155,60 165,65 155,70" fill="#FCD34D" />
                        <text x="140" y="58" textAnchor="middle" fontSize="6" fill="#FCD34D" fontWeight="700" opacity="0.7">Δ</text>
                      </g>

                      {/* Product AB */}
                      <g className={isPlaying ? 'animate-product' : ''}>
                        <ellipse cx="190" cy="65" rx="22" ry="14" fill="url(#product)" />
                        <text x="190" y="69" textAnchor="middle" fontSize="10" fill="#0f172a" fontWeight="900">AB</text>
                      </g>

                      {/* Energy bars below */}
                      <g opacity="0.4">
                        <line x1="20" y1="105" x2="200" y2="105" stroke="#FCD34D" strokeWidth="0.5" />
                        {[30, 60, 90, 120, 150, 180].map((x, i) => (
                          <line
                            key={i}
                            x1={x} y1="105" x2={x} y2={105 - (8 + i * 2)}
                            stroke="#FCD34D"
                            strokeWidth="2"
                            className={isPlaying ? 'animate-pulse' : ''}
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                        <text x="110" y="120" textAnchor="middle" fontSize="6" fill="#FCD34D" fontWeight="700">ENERGY PROFILE</text>
                      </g>

                      {/* Reaction sparks */}
                      {isPlaying && (
                        <g>
                          <circle cx="140" cy="65" r="1.5" fill="#FCD34D" className="animate-spark-1" />
                          <circle cx="150" cy="60" r="1" fill="#FBBF24" className="animate-spark-2" />
                          <circle cx="145" cy="70" r="1" fill="#FDE68A" className="animate-spark-3" />
                        </g>
                      )}
                    </svg>
                  </div>

                  {/* Subtle grid */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:18px_18px]" />

                  {/* Language Pills — top row */}
                  <div className="absolute top-3 left-3 right-3 flex items-center gap-1.5 overflow-x-auto z-20">
                    {languages.map((l, idx) => {
                      const isActive = idx === activeLang;
                      return (
                        <button
                          key={l.label}
                          onClick={() => setActiveLang(idx)}
                          className={`relative shrink-0 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                            isActive
                              ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                              : 'bg-white/10 text-white/60 hover:bg-white/20 backdrop-blur-md border border-white/5'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                          )}
                          {l.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Floating ambient dots */}
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-brand-gold/60 animate-float pointer-events-none" />
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-white/40 animate-float pointer-events-none" style={{ animationDelay: '3.5s' }} />

                  {/* Play/Pause Toggle (corner — non-blocking) */}
                  <button
                    onClick={() => setIsPlaying((p) => !p)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl hover:scale-110 hover:bg-white/25 transition-all opacity-0 hover:opacity-100 group-hover:opacity-100"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <div className="flex gap-1">
                        <span className="w-1 h-4 bg-white rounded-sm" />
                        <span className="w-1 h-4 bg-white rounded-sm" />
                      </div>
                    ) : (
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                    )}
                  </button>

                  {/* Title bar — bottom of player */}
                  <div key={`title-${activeLang}`} className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-1 animate-fade-slide">
                     <div className="inline-flex w-fit items-center gap-1.5 px-2 py-0.5 bg-brand-orange/90 text-white text-[8px] font-black rounded-full uppercase tracking-widest backdrop-blur-md">
                       <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                       {lang.subject}
                     </div>
                     <h3 className="text-sm md:text-base font-serif font-black text-white leading-tight drop-shadow-lg">
                       {lang.title} <span className="text-brand-gold italic">{lang.subtitle}</span>
                     </h3>
                  </div>
               </div>

               {/* Video Controls */}
               <div className="h-14 bg-white/5 backdrop-blur-xl border-t border-white/10 flex items-center px-6 gap-6">
                  <div className="flex-1 h-1.5 bg-white/20 rounded-full relative overflow-hidden">
                     <div className="absolute top-0 left-0 h-full w-1/3 bg-brand-orange" />
                     <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                  </div>
                  <div className="flex items-center gap-4">
                     <span key={`time-${activeLang}`} className="text-[10px] font-mono text-white/60 animate-fade-slide">{lang.time}</span>
                     <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">HD</span>
                     <div className="w-6 h-6 rounded bg-brand-orange/20 flex items-center justify-center text-[10px] text-brand-orange font-bold">{lang.cc}</div>
                  </div>
               </div>
            </div>

              {/* Floating Language Tag (active) */}
              <div key={`chip-${activeLang}`} className={`absolute -top-4 -right-4 px-4 py-2 ${lang.chipColor} text-[10px] font-black rounded-lg shadow-xl animate-fade-slide`}>{lang.chip}</div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
          <div className="hidden md:block absolute -left-4 bottom-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '2s' }} />
          <div className="hidden md:block absolute -right-6 top-1/4 w-3 h-3 rounded-full bg-brand-gold/60 animate-float" style={{ animationDelay: '1s' }} />
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
