import { useEffect, useState } from 'react';

const teacherTabs = [
  {
    label: 'Today',
    icon: '📅',
    headline: "Today's Schedule",
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]',
    classes: [
      { initials: 'BP', name: 'Organic Chemistry: Mechanisms', meta: 'Dr. B.P. Sharma • 10:00 AM', cta: 'JOIN', tone: 'orange' },
      { initials: 'AK', name: 'Physics: Electromagnetic Waves', meta: 'Prof. A.K. Verma • 12:30 PM', cta: 'REMIND', tone: 'blue' },
      { initials: 'SM', name: 'Biology: Genetics & Evolution', meta: 'Dr. S. Mukherjee • 03:00 PM', cta: 'REMIND', tone: 'green' }
    ]
  },
  {
    label: 'Tomorrow',
    icon: '🗓️',
    headline: "Tomorrow's Schedule",
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]',
    classes: [
      { initials: 'RJ', name: 'Maths: Definite Integrals', meta: 'Dr. R. Joshi • 09:30 AM', cta: 'REMIND', tone: 'purple' },
      { initials: 'NK', name: 'Chemistry: Coordination', meta: 'Prof. N. Kapoor • 11:00 AM', cta: 'REMIND', tone: 'orange' },
      { initials: 'VS', name: 'Botany: Plant Physiology', meta: 'Dr. V. Singh • 02:00 PM', cta: 'REMIND', tone: 'green' }
    ]
  },
  {
    label: 'This Week',
    icon: '📈',
    headline: 'Weekly Highlights',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]',
    classes: [
      { initials: 'BP', name: 'Doubt Marathon: Organic', meta: 'Dr. B.P. Sharma • Wed 7 PM', cta: 'RSVP', tone: 'orange' },
      { initials: 'SM', name: 'Genetics Crash Course', meta: 'Dr. S. Mukherjee • Thu 6 PM', cta: 'RSVP', tone: 'green' },
      { initials: 'AK', name: 'Mock Test Review', meta: 'Prof. A.K. Verma • Sat 5 PM', cta: 'RSVP', tone: 'blue' }
    ]
  },
  {
    label: 'Mentors',
    icon: '👩‍🏫',
    headline: 'Your Mentor Pod',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]',
    classes: [
      { initials: 'BP', name: 'Dr. B.P. Sharma — Organic Lead', meta: '14 yrs • 1.2k mentees', cta: 'CHAT', tone: 'orange' },
      { initials: 'AK', name: 'Prof. A.K. Verma — Physics Lead', meta: '11 yrs • 980 mentees', cta: 'CHAT', tone: 'blue' },
      { initials: 'SM', name: 'Dr. S. Mukherjee — Bio Lead', meta: '16 yrs • 1.5k mentees', cta: 'CHAT', tone: 'green' }
    ]
  }
];

const toneStyles: Record<string, { bg: string; border: string; avatarBg: string; avatarText: string; btn: string }> = {
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    avatarBg: 'bg-orange-200',
    avatarText: 'text-orange-600',
    btn: 'bg-brand-orange text-white'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    avatarBg: 'bg-blue-200',
    avatarText: 'text-blue-600',
    btn: 'border border-blue-200 text-blue-600'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-100',
    avatarBg: 'bg-green-200',
    avatarText: 'text-green-600',
    btn: 'border border-green-200 text-green-600'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    avatarBg: 'bg-purple-200',
    avatarText: 'text-purple-600',
    btn: 'border border-purple-200 text-purple-600'
  }
};

export default function ExpertFaculty() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % teacherTabs.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const tab = teacherTabs[activeTab];

  const features = [
    {
      title: "Kota's Top Educators",
      description: "Learn from the best minds in the industry with decades of experience in producing NEET toppers."
    },
    {
      title: "Interactive Live Classes",
      description: "Ask doubts in real-time and engage in conceptual discussions that go beyond the textbook."
    },
    {
      title: "Personalized Study Plans",
      description: "Get a roadmap tailored to your current level, target score, and available preparation time."
    },
    {
      title: "NCERT Intensive Focus",
      description: "Deep-dive into every line of NCERT Biology, Chemistry, and Physics with expert insights."
    }
  ];

  return (
    <section id="faculty" className="py-16 md:py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white">
          Teacher <span className="font-script text-brand-gold italic font-normal">Assistant</span>
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          The best-in-class educators meet AI-powered personalization to ensure your medical dream becomes a reality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-start mt-12 md:mt-20">
        {/* Left Side: Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Personalized NEET Prep for Every Aspirant
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              We don't believe in one-size-fits-all. Our faculty uses SK Intelligence to track your progress and customize every lecture and assignment for your specific needs.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2 group">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Mockup */}
        <div className="relative sticky top-32 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto w-full">
          {/* Ambient halos */}
          <div className="absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          {/* Premium gradient border frame */}
          <div className="absolute -inset-[2px] rounded-[1.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

          <div className={`relative aspect-[16/10] rounded-3xl p-[2px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${tab.themeRing}`}>
            <div className="relative w-full h-full bg-[#1a1b2e] rounded-[1.45rem] p-1 overflow-hidden">
              <div className="absolute inset-1 bg-white rounded-[1.4rem] p-4 flex flex-col overflow-hidden">
                {/* Mockup UI */}
                <div className="flex items-center justify-between mb-3 px-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span key={`hdr-${activeTab}`} className="text-[10px] font-bold text-slate-800 tracking-wider uppercase truncate animate-fade-slide">{tab.headline}</span>
                    <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">PRO</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                      <span className="relative w-2 h-2 rounded-full bg-red-500" />
                    </span>
                    <span className="text-[8px] font-bold text-red-500">LIVE NOW</span>
                  </div>
                </div>

                {/* Tab Pills */}
                <div className="flex items-center gap-1.5 mb-3 px-1 overflow-x-auto">
                  {teacherTabs.map((t, idx) => {
                    const isActive = idx === activeTab;
                    return (
                      <button
                        key={t.label}
                        onClick={() => setActiveTab(idx)}
                        className={`relative shrink-0 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                        )}
                        <span className={`text-xs ${isActive ? 'scale-110' : 'opacity-60'}`}>{t.icon}</span>
                        {t.label}
                      </button>
                    );
                  })}
                </div>

                <div key={`schedule-${activeTab}`} className="relative space-y-2.5 flex-grow overflow-hidden animate-fade-slide">
                  {/* Floating ambient particles */}
                  <div className="pointer-events-none absolute top-2 left-1/3 w-1 h-1 rounded-full bg-brand-gold/60 animate-float" />
                  <div className="pointer-events-none absolute bottom-4 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float" style={{ animationDelay: '2s' }} />
                  <div className="pointer-events-none absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-slate-400/60 animate-float" style={{ animationDelay: '3.5s' }} />

                  {tab.classes.map((cls) => {
                    const s = toneStyles[cls.tone];
                    return (
                      <div
                        key={cls.name}
                        className={`p-3 ${s.bg} border ${s.border} rounded-2xl flex items-center gap-3 hover:scale-[1.02] transition-transform cursor-pointer`}
                      >
                        <div className={`w-10 h-10 rounded-full ${s.avatarBg} flex-shrink-0 flex items-center justify-center font-bold ${s.avatarText} text-xs`}>
                          {cls.initials}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="text-[10px] font-bold text-slate-800 truncate">{cls.name}</div>
                          <div className="text-[8px] text-slate-500 truncate">{cls.meta}</div>
                        </div>
                        <button className={`px-3 py-1 ${s.btn} text-[8px] font-bold rounded-full shrink-0 hover:scale-105 transition-transform`}>
                          {cls.cta}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Action */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[8px] font-bold text-slate-400">Total: {tab.classes.length} sessions</div>
                  <button className="px-4 py-2 bg-gradient-to-br from-brand-orange to-amber-400 text-slate-900 text-[8px] font-bold rounded-full shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform">Full Syllabus Plan</button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="hidden md:block absolute -left-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
          <div className="hidden md:block absolute -right-4 bottom-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '1s' }} />
          <div className="hidden md:block absolute -right-6 top-1/4 w-3 h-3 rounded-full bg-brand-gold/60 animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
}
