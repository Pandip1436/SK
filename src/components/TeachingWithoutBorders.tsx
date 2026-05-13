import { useEffect, useState } from 'react';

const videoTopics = [
  {
    title: 'Human Physiology',
    subject: 'Biology • NEET',
    duration: '12:45',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    icon: '🧬',
    primaryChapter: 'Biology: Human Physiology',
    secondaryChapter: 'Botany: Plant Kingdom',
    goalTitle: 'Chapter Diagnostic Test',
    goalSubtitle: "Test your foundation before starting 'Circulatory System'",
    questions: '40 Qs',
    accuracy: '92%',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]'
  },
  {
    title: 'Wave Optics',
    subject: 'Physics • JEE',
    duration: '15:20',
    gradient: 'from-blue-500 via-indigo-500 to-purple-600',
    icon: '🔬',
    primaryChapter: 'Physics: Wave Optics',
    secondaryChapter: 'Physics: Modern Physics',
    goalTitle: 'Numerical Practice Set',
    goalSubtitle: "Solve 30 JEE-pattern problems on 'Interference & Diffraction'",
    questions: '30 Qs',
    accuracy: '88%',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]'
  },
  {
    title: 'Organic Reactions',
    subject: 'Chemistry • NEET',
    duration: '18:30',
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-600',
    icon: '⚗️',
    primaryChapter: 'Chemistry: Organic Reactions',
    secondaryChapter: 'Chemistry: Coordination',
    goalTitle: 'Reaction Mechanism Quiz',
    goalSubtitle: "Master named reactions in 'Aldehydes & Ketones' today",
    questions: '25 Qs',
    accuracy: '90%',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]'
  },
  {
    title: 'Calculus Mastery',
    subject: 'Mathematics • JEE',
    duration: '14:10',
    gradient: 'from-amber-500 via-orange-500 to-red-600',
    icon: '📐',
    primaryChapter: 'Maths: Definite Integrals',
    secondaryChapter: 'Maths: Differential Eqns',
    goalTitle: 'Speed Math Sprint',
    goalSubtitle: "Build calculation speed with 'Integration by Parts'",
    questions: '50 Qs',
    accuracy: '85%',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]'
  }
];

export default function NEETPrograms() {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videoTopics.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const currentVideo = videoTopics[activeVideo];

  const features = [
    {
      title: "Medical Track (NEET)",
      description: "Comprehensive coaching for aspiring doctors with focused biology and chemistry modules."
    },
    {
      title: "Engineering Track (JEE)",
      description: "Advanced mathematics and physics training to crack the toughest engineering entrances."
    },
    {
      title: "Board Excellence",
      description: "Dedicated support for CBSE, ICSE, ISC, and State Boards to ensure 95%+ results."
    },
    {
      title: "Foundation & Olympiads",
      description: "Building strong logic for Class 8-10 students for NTSE, KVPY, and Global Olympiads."
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white">
          Explore Our <span className="font-script text-brand-gold italic font-normal">Courses</span>
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          Choose your track to excellence. From medical and engineering to boards and beyond.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-start mt-12 md:mt-20">
        {/* Right Side: Content */}
        <div className="space-y-10 order-1 lg:order-2">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Smart Planning for Every Aspirant
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Every student is different. Our AI-driven platform helps you choose the right batch and creates a customized curriculum structure and generates detailed daily targets. Fully aligned to the latest NTA syllabus.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2 group">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                  {feature.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Left Side: Mockup */}
        <div className="relative sticky top-32 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto w-full order-2 lg:order-1">
          {/* Ambient halos */}
          <div className="absolute -top-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse hidden sm:block" style={{ animationDelay: '1.2s' }} />

          {/* Premium gradient border frame */}
          <div className="absolute -inset-[2px] rounded-[1.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

          <div className={`relative aspect-[4/3] rounded-3xl p-[2px] border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${currentVideo.themeRing}`}>
            <div className="absolute inset-[2px] bg-white rounded-[1.4rem] p-4 md:p-6 flex flex-col overflow-hidden">
              {/* Mockup Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Select Your Topic</span>
                  <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900">HD</span>
                </div>
                <div className="flex items-center gap-1 text-[8px] font-bold text-emerald-600 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  Tap any topic
                </div>
              </div>

              {/* Selectable Chapter Pills (all 4 visible) */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {videoTopics.map((topic, idx) => {
                  const isActive = idx === activeVideo;
                  return (
                    <button
                      key={`pill-${topic.title}`}
                      onClick={() => setActiveVideo(idx)}
                      className={`relative p-2.5 rounded-lg flex items-center gap-2 text-left overflow-hidden transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                          : 'bg-slate-50 border border-slate-200 hover:border-brand-orange/40 hover:scale-[1.01]'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                      )}
                      <span
                        className={`text-base shrink-0 transition-transform duration-500 ${
                          isActive ? 'scale-125 rotate-[-8deg]' : 'opacity-60'
                        }`}
                      >
                        {topic.icon}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span
                          className={`block text-[9px] font-black truncate uppercase tracking-wide ${
                            isActive ? 'text-slate-900' : 'text-slate-500'
                          }`}
                        >
                          {topic.primaryChapter.split(':')[0]}
                        </span>
                        <span
                          className={`block text-[8px] truncate ${
                            isActive ? 'text-slate-600 font-semibold' : 'text-slate-400'
                          }`}
                        >
                          {topic.primaryChapter.split(':')[1]?.trim()}
                        </span>
                      </span>
                      <span
                        className={`text-base shrink-0 transition-all duration-500 ${
                          isActive ? 'text-brand-orange translate-x-0.5' : 'text-slate-300'
                        }`}
                      >
                        ›
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Helper microcopy + animated cursor hint */}
              <div className="relative flex items-center justify-center gap-1.5 mb-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="inline-block animate-cursor-tap">👆</span>
                <span>Auto-previewing • Click to lock a topic</span>
              </div>

              {/* Progress Section */}
              <div className="bg-brand-orange text-white px-3 py-1 text-[10px] font-bold w-fit rounded-t-lg uppercase">Daily Goal</div>
              <div
                key={`goal-${activeVideo}`}
                className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-r-xl rounded-bl-xl p-6 flex items-center justify-between mb-6 animate-fade-slide"
              >
                <div className="space-y-1 min-w-0 pr-3">
                  <h4 className="text-sm font-bold truncate">{currentVideo.goalTitle}</h4>
                  <p className="text-[8px] opacity-80 leading-tight">{currentVideo.goalSubtitle}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-[8px] font-black bg-white/30 px-1.5 py-0.5 rounded">{currentVideo.questions}</span>
                    <span className="text-[8px] font-black bg-white/30 px-1.5 py-0.5 rounded">Avg {currentVideo.accuracy}</span>
                  </div>
                </div>
                <button className="px-4 py-1.5 bg-gradient-to-br from-brand-orange to-amber-400 text-slate-900 text-[10px] font-bold rounded-lg shadow-lg shadow-brand-orange/40 shrink-0 hover:scale-105 transition-transform">Start Now</button>
              </div>

              {/* Detail Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter">High-Yield Video Lectures</h5>
                  <div className="flex items-center gap-1">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                      <span className="relative w-2 h-2 rounded-full bg-red-500" />
                    </span>
                    <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">Now Playing</span>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  {videoTopics.map((video, idx) => (
                    <div
                      key={video.title}
                      className={`absolute inset-0 bg-gradient-to-br ${video.gradient} transition-all duration-700 ease-out ${
                        idx === activeVideo
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    >
                      <div className="absolute inset-0 bg-black/20" />

                      {/* Floating Topic Icon */}
                      <div className="absolute top-3 right-3 text-3xl animate-float drop-shadow-lg">
                        {video.icon}
                      </div>

                      {/* Floating ambient dots */}
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-brand-gold/60 animate-float" />
                      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float" style={{ animationDelay: '2s' }} />
                      <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-white/40 animate-float" style={{ animationDelay: '3.5s' }} />

                      {/* Animated Pulse Rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-14 h-14 rounded-full border-2 border-white/40 animate-ping" />
                        <button className="relative w-12 h-12 bg-white/95 rounded-full flex items-center justify-center text-slate-900 shadow-2xl hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>

                      {/* Bottom Info Bar */}
                      <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-[10px] font-black text-white leading-tight">{video.title}</p>
                        <div className="flex items-center justify-between mt-0.5">
                          <p className="text-[8px] text-white/70 font-medium">{video.subject}</p>
                          <p className="text-[8px] text-white/90 font-bold">{video.duration}</p>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
                        <div
                          key={`${video.title}-${activeVideo}`}
                          className={`h-full bg-white origin-left ${
                            idx === activeVideo ? 'animate-progress-bar' : 'w-0'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Topic Dots */}
                <div className="flex items-center justify-center gap-1.5 pt-1">
                  {videoTopics.map((video, idx) => (
                    <button
                      key={video.title}
                      onClick={() => setActiveVideo(idx)}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        idx === activeVideo ? 'w-6 bg-brand-orange' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Play ${video.title}`}
                    />
                  ))}
                </div>
                <p className="text-[8px] text-slate-400 text-center">
                  Now showing: <span className="font-bold text-slate-700">{currentVideo.title}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
          <div className="hidden md:block absolute -left-4 bottom-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '2s' }} />
          <div className="hidden md:block absolute -left-6 top-1/4 w-3 h-3 rounded-full bg-brand-gold/60 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
}
