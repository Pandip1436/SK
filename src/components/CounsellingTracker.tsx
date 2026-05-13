import { useEffect, useState } from 'react';

type Profile = {
  name: string;
  score: number;
  category: 'OC' | 'BC' | 'MBC' | 'SC';
  district: string;
  themeRing: string;
  badge: { dot: string; tint: string; label: string };
  matches: {
    college: string;
    location: string;
    cutoff: number;
    seats: number;
    status: 'safe' | 'reach' | 'stretch';
  }[];
};

const categoryStyle: Record<Profile['category'], { dot: string; tint: string; label: string }> = {
  OC:  { dot: 'bg-amber-500',   tint: 'bg-amber-50',   label: 'Open Category' },
  BC:  { dot: 'bg-blue-500',    tint: 'bg-blue-50',    label: 'Backward Class' },
  MBC: { dot: 'bg-emerald-500', tint: 'bg-emerald-50', label: 'Most Backward Class' },
  SC:  { dot: 'bg-fuchsia-500', tint: 'bg-fuchsia-50', label: 'Scheduled Caste' },
};

const profiles: Profile[] = [
  {
    name: 'Karthik V.',
    score: 670,
    category: 'OC',
    district: 'Madurai',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.55)]',
    badge: categoryStyle.OC,
    matches: [
      { college: 'Madras Medical College',     location: 'Chennai',     cutoff: 668, seats: 12, status: 'safe'    },
      { college: 'Madurai Medical College',    location: 'Madurai',     cutoff: 661, seats: 9,  status: 'safe'    },
      { college: 'Stanley Medical College',    location: 'Chennai',     cutoff: 665, seats: 7,  status: 'safe'    },
      { college: 'Coimbatore Medical College', location: 'Coimbatore',  cutoff: 658, seats: 14, status: 'safe'    },
      { college: 'Tirunelveli Medical College', location: 'Tirunelveli', cutoff: 654, seats: 11, status: 'safe'   },
    ],
  },
  {
    name: 'Priya R.',
    score: 612,
    category: 'BC',
    district: 'Coimbatore',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.55)]',
    badge: categoryStyle.BC,
    matches: [
      { college: 'Coimbatore Medical College',     location: 'Coimbatore',  cutoff: 610, seats: 18, status: 'safe'    },
      { college: 'Salem Medical College',          location: 'Salem',       cutoff: 605, seats: 15, status: 'safe'    },
      { college: 'Thanjavur Medical College',      location: 'Thanjavur',   cutoff: 608, seats: 12, status: 'safe'    },
      { college: 'Tiruchirappalli Medical College', location: 'Trichy',      cutoff: 614, seats: 9,  status: 'reach'   },
      { college: 'Madurai Medical College',        location: 'Madurai',     cutoff: 622, seats: 6,  status: 'stretch' },
    ],
  },
  {
    name: 'Senthil K.',
    score: 548,
    category: 'MBC',
    district: 'Trichy',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.55)]',
    badge: categoryStyle.MBC,
    matches: [
      { college: 'Theni Medical College',          location: 'Theni',       cutoff: 540, seats: 14, status: 'safe'    },
      { college: 'Dharmapuri Medical College',     location: 'Dharmapuri',  cutoff: 538, seats: 11, status: 'safe'    },
      { college: 'Tiruchirappalli Medical College', location: 'Trichy',      cutoff: 552, seats: 8,  status: 'reach'   },
      { college: 'Villupuram Medical College',     location: 'Villupuram',  cutoff: 542, seats: 16, status: 'safe'    },
      { college: 'Erode Medical College',          location: 'Erode',       cutoff: 555, seats: 7,  status: 'stretch' },
    ],
  },
  {
    name: 'Lakshmi S.',
    score: 482,
    category: 'SC',
    district: 'Salem',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.55)]',
    badge: categoryStyle.SC,
    matches: [
      { college: 'Salem Medical College',          location: 'Salem',       cutoff: 475, seats: 13, status: 'safe'    },
      { college: 'Erode Medical College',          location: 'Erode',       cutoff: 472, seats: 10, status: 'safe'    },
      { college: 'Dharmapuri Medical College',     location: 'Dharmapuri',  cutoff: 478, seats: 12, status: 'safe'    },
      { college: 'Krishnagiri Medical College',    location: 'Krishnagiri', cutoff: 485, seats: 8,  status: 'reach'   },
      { college: 'Karur Medical College',          location: 'Karur',       cutoff: 488, seats: 5,  status: 'stretch' },
    ],
  },
];

const statusStyle: Record<Profile['matches'][number]['status'], { tag: string; chip: string }> = {
  safe:    { tag: 'Safe Pick',  chip: 'bg-emerald-100 text-emerald-700' },
  reach:   { tag: 'Reach',      chip: 'bg-amber-100 text-amber-700'     },
  stretch: { tag: 'Stretch',    chip: 'bg-red-100 text-red-700'         },
};

const features = [
  {
    title: 'Live Round Updates',
    description: 'Cutoffs refreshed after every TN MCC round — Round 1, Round 2, mop-up and stray vacancy.',
  },
  {
    title: 'Category-Aware',
    description: 'Filters by OC / BC / BCM / MBC / SC / ST so you only see seats you are actually eligible for.',
  },
  {
    title: 'District Preference',
    description: 'Surfaces colleges in your home district first — Madurai students see Madurai picks at the top.',
  },
  {
    title: 'Safe / Reach / Stretch',
    description: 'Every match tagged by how comfortably your NEET score clears last year\'s cutoff.',
  },
];

export default function CounsellingTracker() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % profiles.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const profile = profiles[active];
  const totalSeats = profile.matches.reduce((sum, m) => sum + m.seats, 0);

  return (
    <section id="counselling-tracker" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Side: Desktop Mockup */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Ambient halos */}
          <div className="absolute -top-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          <div className="relative w-full max-w-lg">
            {/* Premium gradient border frame */}
            <div className="absolute -inset-[2px] rounded-[0.85rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

            <div className={`relative aspect-[16/11] rounded-xl p-[2px] shadow-2xl bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${profile.themeRing}`}>
              <div className="relative w-full h-full bg-[#1A1A1A] rounded-[0.65rem] border border-white/10 overflow-hidden">

                {/* Window Header */}
                <div className="h-10 bg-[#252525] border-b border-white/5 flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">SK-TN-COUNSELLING-TRACKER</div>
                    <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">LIVE</span>
                  </div>
                  <div className="w-10" />
                </div>

                <div className="absolute inset-x-0 bottom-0 top-10 bg-white flex flex-col">

                  {/* Dashboard Header — Profile card */}
                  <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg ${profile.badge.dot} flex items-center justify-center text-[9px] font-black text-white`}>
                        {profile.category}
                      </div>
                      <div key={`profile-${active}`} className="flex flex-col leading-tight animate-fade-slide">
                        <span className="text-[10px] font-black text-slate-800">{profile.name}</span>
                        <span className="text-[8px] font-bold text-slate-400">
                          NEET <span className="text-slate-700">{profile.score}</span> &middot; {profile.badge.label} &middot; {profile.district}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Round 2 &middot; Live</p>
                      <p key={`seats-${active}`} className="text-sm font-black text-brand-orange animate-fade-slide">{totalSeats} seats matched</p>
                    </div>
                  </div>

                  {/* Profile selector pills */}
                  <div className="flex items-center gap-1.5 px-4 py-2 bg-white border-b border-slate-100 overflow-x-auto">
                    {profiles.map((p, idx) => {
                      const isActive = idx === active;
                      return (
                        <button
                          key={p.name}
                          onClick={() => setActive(idx)}
                          className={`relative shrink-0 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                            isActive
                              ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                              : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                          )}
                          <span className={`w-1.5 h-1.5 rounded-full ${p.badge.dot}`} />
                          {p.category} &middot; {p.score}
                        </button>
                      );
                    })}
                  </div>

                  {/* Match list */}
                  <div className="relative flex-1 overflow-hidden">
                    {/* Floating ambient dots */}
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-brand-gold/60 animate-float pointer-events-none z-10" />
                    <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float pointer-events-none z-10" style={{ animationDelay: '2s' }} />

                    <div key={`matches-${active}`} className="absolute inset-0 px-4 py-3 space-y-1.5 overflow-y-auto animate-fade-slide">
                      <div className="grid grid-cols-12 gap-2 px-2 pb-1 text-[7px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="col-span-6">College</span>
                        <span className="col-span-2 text-right">Cutoff</span>
                        <span className="col-span-2 text-right">Seats</span>
                        <span className="col-span-2 text-right">Status</span>
                      </div>
                      {profile.matches.map((m, i) => {
                        const s = statusStyle[m.status];
                        const isLocal = m.location === profile.district;
                        return (
                          <div
                            key={i}
                            className={`grid grid-cols-12 gap-2 items-center px-2 py-1.5 rounded-lg border ${
                              isLocal ? `${profile.badge.tint} border-slate-200` : 'bg-white border-slate-100'
                            }`}
                          >
                            <div className="col-span-6 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <p className="text-[9px] font-black text-slate-800 truncate">{m.college}</p>
                                {isLocal && (
                                  <span className="px-1 py-px rounded text-[6px] font-black uppercase tracking-wider bg-brand-orange/10 text-brand-orange shrink-0">Local</span>
                                )}
                              </div>
                              <p className="text-[7px] font-bold text-slate-400">{m.location}</p>
                            </div>
                            <p className="col-span-2 text-[9px] font-black text-slate-700 text-right tabular-nums">{m.cutoff}</p>
                            <p className="col-span-2 text-[9px] font-black text-slate-700 text-right tabular-nums">{m.seats}</p>
                            <div className="col-span-2 flex justify-end">
                              <span className={`px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest ${s.chip}`}>{s.tag}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Desktop Footer */}
                  <div className="px-4 py-2.5 bg-slate-900 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                      </span>
                      <span className="text-white/50 text-[8px] font-bold uppercase tracking-widest">Synced &middot; TN MCC Portal</span>
                    </div>
                    <button className="px-4 py-1.5 bg-gradient-to-br from-brand-orange to-amber-400 text-slate-900 text-[8px] font-black rounded-md uppercase tracking-widest shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform">
                      Lock My Choice List
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
            <div className="hidden md:block absolute -left-4 top-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '2s' }} />

            {/* Floating "TN MCC" badge */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 px-4 py-2.5 bg-black border border-white/10 rounded-2xl shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">Built for</p>
                  <p className="text-xs text-white font-black">TN MBBS Aspirants</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Find Your College, <span className="font-script text-brand-gold italic font-normal block mt-2">In Tamil Nadu</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Most counselling trackers show all-India data. Ours is built around TN MCC. Enter your NEET score and category — see the exact government and self-finance colleges you can realistically clear, sorted by your home district.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="space-y-2 group">
                <h4 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                  {f.title}
                </h4>
                <p className="text-white/40 text-xs leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
