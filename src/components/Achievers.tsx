import { useEffect, useRef, useState } from 'react';

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function CountUp({
  to,
  inView,
  duration = 1400,
  delay = 0,
}: {
  to: number;
  inView: boolean;
  duration?: number;
  delay?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    let start: number | null = null;
    const startTimer = window.setTimeout(() => {
      const step = (ts: number) => {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setValue(Math.round(eased * to));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, delay);
    return () => {
      window.clearTimeout(startTimer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [inView, to, duration, delay]);

  return <>{value}</>;
}

type YearRow = {
  year: string;
  track: 'NEET' | 'JEE';
  cohort: number | null;
  result: string;
  rate: number;
  color: string;
  highlight: string;
};

const yearAchievements: YearRow[] = [
  {
    year: '2019',
    track: 'NEET',
    cohort: 7,
    result: '4 Govt. MBBS',
    rate: 57,
    color: 'from-amber-600 to-amber-400',
    highlight: 'Our very first batch of microbatch graduates.',
  },
  {
    year: '2020',
    track: 'NEET',
    cohort: 14,
    result: '10 Govt. MBBS',
    rate: 71,
    color: 'from-brand-orange to-amber-400',
    highlight: 'Batch size doubled, success rate jumped 14 points.',
  },
  {
    year: '2021',
    track: 'NEET',
    cohort: 18,
    result: '15 Govt. MBBS',
    rate: 83,
    color: 'from-brand-orange to-brand-gold',
    highlight: 'Best NEET conversion to date — 83% Govt. MBBS rate.',
  },
  {
    year: '2025',
    track: 'NEET',
    cohort: 35,
    result: '24 Govt. MBBS',
    rate: 69,
    color: 'from-emerald-500 to-teal-400',
    highlight: '24 of 35 students placed in Govt. MBBS seats. NIITians & IIITians added in the same year.',
  },
  {
    year: '2026',
    track: 'JEE',
    cohort: 28,
    result: '23 to JEE Advanced',
    rate: 82,
    color: 'from-blue-500 to-indigo-400',
    highlight: '17 of 28 students cleared the 90th percentile in JEE Mains.',
  },
];

const jeeHighlights = [
  { label: 'Selected for JEE Advanced 2026', value: '23', total: '28' },
  { label: 'Scored above 90th Percentile', value: '17', total: '28' },
];

const topJeeScorers = [
  { name: 'Vignesh R K', percentile: '99.17' },
  { name: 'Vishnu',      percentile: '98.07' },
  { name: 'Malini',      percentile: '98.22' },
  { name: 'Soorya',      percentile: '98.02' },
  { name: 'Danisha J',   percentile: '97.76' },
  { name: 'Vijitha',     percentile: '97.27' },
  { name: 'Vasundara',   percentile: '97.17' },
  { name: 'Sadhanaa',    percentile: '96.77' },
  { name: 'Harshath',    percentile: '96.56' },
  { name: 'Ahalya Devi', percentile: '95.81' },
  { name: 'Sridharan',   percentile: '95.73' },
];

const niitIiitAchievers2025 = [
  { name: 'Gurubalan',     institute: 'NIT Rourkela' },
  { name: 'Arunaishenbal', institute: 'NIT Bangalore' },
  { name: 'Sangavi',       institute: 'NIT Durgapur' },
  { name: 'Rohith',        institute: 'NIT Andhra' },
];

const neetAchievers2025 = [
  { name: 'Priya Ranjan',             college: 'GMC Thoothukudi' },
  { name: 'Sailesh Sriram',           college: 'GMC Sivagangai' },
  { name: 'Dharun Jawahar',           college: 'GMC Virudhunagar' },
  { name: 'Donis',                    college: 'GMC Thoothukudi' },
  { name: 'Dharshana Kamali',         college: 'GMC Kanyakumari' },
  { name: 'Sanchay Bose',             college: 'ESI Chennai' },
  { name: 'Banu J F',                 college: 'GMC Nilgiris' },
  { name: 'Sandhiya',                 college: 'GMC Thiruvannamalai' },
  { name: 'Subhashree',               college: 'GMC Thiruvallur' },
  { name: 'Reshma Sri',               college: 'GMC Tirunelveli' },
  { name: 'Rithika',                  college: 'GMC Virudhunagar' },
  { name: 'Yazin Mohammed',           college: 'GMC Sivagangai' },
  { name: 'Divya',                    college: 'GMC Sivagangai' },
  { name: 'Prakash Ayyanar',          college: 'GMC Theni' },
  { name: 'Parkavi',                  college: 'GMC Pudukottai' },
  { name: 'Chella Vignesh',           college: 'GMC Sivagangai' },
  { name: 'Meenakshi Sundara Pandian',college: 'GMC Madurai' },
  { name: 'Keerthana',                college: 'GMC Virudhunagar' },
  { name: 'Gurudharshini',            college: 'GMC Ramnad' },
  { name: 'Dharun Prakash',           college: 'GMC Theni' },
];

const neetByCollege2025 = Object.entries(
  neetAchievers2025.reduce<Record<string, number>>((acc, a) => {
    acc[a.college] = (acc[a.college] ?? 0) + 1;
    return acc;
  }, {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([college, count]) => ({ college, count }));

export default function Achievers() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="achievers" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-dark-bg">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[90vw] max-h-[90vw] md:max-w-none md:max-h-none bg-brand-gold/5 blur-[200px] rounded-full pointer-events-none hidden sm:block" />

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black text-white leading-[0.95] tracking-tight">
          Our <span className="font-script text-brand-gold italic font-normal">Achievers</span>
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          Real students. Real results. Our structured microbatch system has consistently delivered Government MBBS seats and top JEE ranks year after year.
        </p>

        {/* Headline 2025/2026 highlights */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8">
          <div className="glass-card rounded-2xl p-5 text-center">
            <div className="text-4xl font-black text-brand-gold tabular-nums leading-none">24/35</div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-wider mt-2">
              Govt. MBBS Seats in 2025
            </p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <div className="text-4xl font-black text-brand-orange tabular-nums leading-none">23/28</div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-wider mt-2">
              Selected for JEE Advanced 2026
            </p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <div className="text-4xl font-black text-brand-gold tabular-nums leading-none">17/28</div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-wider mt-2">
              Above 90th Percentile in JEE 2026
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-start mt-10 md:mt-20">
        {/* Left Side: Content */}
        <div ref={ref} className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Year-wise Achiever Track Record
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              From a 7-student NEET batch in 2019 to 28 JEE aspirants in 2026 — every year, our microbatch system has turned enrolled students into Govt. MBBS seats and top engineering ranks.
            </p>
          </div>

          {/* Year-wise compact table */}
          <div className="glass-card rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-white/10 text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest">
                  <th className="p-2 md:p-4">Year</th>
                  <th className="p-2 md:p-4">Track</th>
                  <th className="p-2 md:p-4 text-center">Students</th>
                  <th className="p-2 md:p-4">Result</th>
                  <th className="p-2 md:p-4 text-right">Rate</th>
                </tr>
              </thead>
              <tbody>
                {yearAchievements.map((row, i) => (
                  <tr
                    key={row.year}
                    className={`border-b border-white/5 last:border-b-0 transition-all duration-700 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: `${200 + i * 120}ms` }}
                  >
                    <td className="p-2 md:p-4 font-black text-brand-gold tabular-nums">{row.year}</td>
                    <td className="p-2 md:p-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          row.track === 'NEET'
                            ? 'bg-brand-orange/15 text-brand-orange border border-brand-orange/30'
                            : 'bg-blue-500/15 text-blue-300 border border-blue-400/30'
                        }`}
                      >
                        {row.track}
                      </span>
                    </td>
                    <td className="p-2 md:p-4 text-center text-white font-bold tabular-nums">
                      {row.cohort === null ? (
                        <span className="text-white/40">—</span>
                      ) : (
                        <CountUp to={row.cohort} inView={inView} delay={300 + i * 120} />
                      )}
                    </td>
                    <td className="p-2 md:p-4 text-white font-bold">{row.result}</td>
                    <td className="p-2 md:p-4 text-right text-brand-orange font-black tabular-nums">
                      <CountUp to={row.rate} inView={inView} delay={400 + i * 120} />%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Success Rate Bars */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Student Success Rate by Year</h4>
            <div className="space-y-3">
              {yearAchievements.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                  }`}
                  style={{ transitionDelay: `${800 + i * 140}ms` }}
                >
                  <span className="text-sm font-bold text-white/60 w-10 tabular-nums">{item.year}</span>
                  <div className="flex-grow h-8 bg-white/5 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full flex items-center justify-end pr-3 transition-[width] ease-out`}
                      style={{
                        width: inView ? `${item.rate}%` : '0%',
                        transitionDuration: '1400ms',
                        transitionDelay: `${900 + i * 140}ms`,
                      }}
                    >
                      <span className="text-xs font-black text-white tabular-nums">
                        <CountUp to={item.rate} inView={inView} delay={900 + i * 140} />%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Year-wise highlights */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-white">Year-wise Highlights</h4>
            <ul className="space-y-2">
              {yearAchievements.map((row, i) => (
                <li
                  key={row.year}
                  className={`glass-card rounded-xl p-3 md:p-4 flex items-start gap-3 transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{ transitionDelay: `${1100 + i * 120}ms` }}
                >
                  <span className="text-xs font-black text-brand-gold tabular-nums shrink-0 w-12 mt-0.5">
                    {row.year}
                  </span>
                  <span className="text-white/80 text-sm leading-relaxed">{row.highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conversion Ratio */}
          <div
            className={`glass-card rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1500ms' }}
          >
            <div className="flex-grow">
              <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Our Conversion Ratio</p>
              <p className="text-white text-lg font-bold">Students Got Government MBBS Seats</p>
            </div>
            <div className="text-center flex-shrink-0">
              <div className="text-4xl font-black text-brand-gold leading-none tabular-nums">
                <CountUp to={84} inView={inView} delay={1600} duration={1600} />
              </div>
              <div className="w-12 h-0.5 bg-white/20 mx-auto my-1" />
              <div className="text-4xl font-black text-white/80 leading-none tabular-nums">
                <CountUp to={100} inView={inView} delay={1750} duration={1600} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Achiever Images */}
        <div className="relative lg:sticky lg:top-32 space-y-8">
          <div className="absolute inset-0 bg-amber-500/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

          {/* NEET Achievers Grid */}
          <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl border-white/10 group">
            <img
              src="/acheivers2.jpeg"
              alt="THE SK LEARNINGS NEET Achievers 2025 — Government Medical College Selections"
              className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl pointer-events-none" />
          </div>

          {/* Super 40 / JEE & NIIT-IIIT Achievers */}
          <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl border-white/10 group">
            <img
              src="/super40.jpeg"
              alt="THE SK LEARNINGS Super 40 — JEE Achievers 2026 and NIITians & IIITians 2025"
              className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl pointer-events-none" />
          </div>

          {/* Floating Accents */}
          <div className="absolute -left-4 top-1/4 w-6 h-6 bg-brand-gold rotate-45 animate-float hidden sm:block" />
          <div className="absolute -right-4 bottom-1/4 w-4 h-4 bg-brand-orange animate-float hidden sm:block" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* NEET 2025 — Named Achievers + College Distribution */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24 space-y-8 relative z-10">
        <div className="text-center space-y-3">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            NEET 2025 — Government Medical College Placements
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Meet the <span className="font-script text-brand-gold italic font-normal">Class of 2025</span>
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            20 students placed across {neetByCollege2025.length} Government Medical Colleges — every name below earned their seat through the microbatch system.
          </p>
        </div>

        {/* Summary stat strip */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="glass-card rounded-2xl p-5 text-center">
            <div className="text-3xl font-black text-brand-gold tabular-nums leading-none">
              {neetAchievers2025.length}
            </div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-wider mt-2">
              Named NEET Achievers
            </p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <div className="text-3xl font-black text-brand-orange tabular-nums leading-none">
              {neetByCollege2025.length}
            </div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-wider mt-2">
              Government Medical Colleges
            </p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <div className="text-3xl font-black text-brand-gold tabular-nums leading-none">
              {neetByCollege2025[0].count}
            </div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-wider mt-2">
              Top College: {neetByCollege2025[0].college}
            </p>
          </div>
        </div>

        {/* Named achievers grid */}
        <div className="glass-card rounded-2xl p-4 md:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {neetAchievers2025.map((a) => (
              <div
                key={a.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-brand-orange/40 transition-colors"
              >
                <p className="text-white font-bold text-sm leading-tight">{a.name}</p>
                <p className="text-brand-orange text-[11px] font-black uppercase tracking-wider mt-1">
                  {a.college}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* By-college breakdown */}
        <div className="glass-card rounded-2xl p-4 md:p-6">
          <div className="flex items-baseline justify-between gap-3 mb-4">
            <h4 className="text-lg font-bold text-white">Placements by Medical College</h4>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">2025</span>
          </div>
          <div className="space-y-2">
            {neetByCollege2025.map((row) => {
              const widthPct = Math.round((row.count / neetByCollege2025[0].count) * 100);
              return (
                <div key={row.college} className="flex items-center gap-3">
                  <span className="text-xs md:text-sm font-bold text-white/80 w-44 md:w-52 truncate shrink-0">
                    {row.college}
                  </span>
                  <div className="flex-grow h-6 bg-white/5 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-brand-orange to-brand-gold rounded-full flex items-center justify-end pr-2.5 transition-[width] ease-out"
                      style={{
                        width: `${Math.max(widthPct, 18)}%`,
                        transitionDuration: '1200ms',
                      }}
                    >
                      <span className="text-[11px] font-black text-white tabular-nums">
                        {row.count}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* JEE 2026 Highlights — full width below the two-column layout */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24 space-y-10 relative z-10">
        <div className="text-center space-y-3">
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            JEE <span className="font-script text-brand-gold italic font-normal">Achievers 2026</span>
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Microbatch discipline meets engineering ambition — our Super 40 cohort is rewriting what's possible from Madurai.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {jeeHighlights.map((h) => (
            <div key={h.label} className="glass-card rounded-2xl p-6 flex items-center gap-5">
              <div className="text-center flex-shrink-0">
                <div className="text-4xl font-black text-brand-gold leading-none tabular-nums">{h.value}</div>
                <div className="w-10 h-0.5 bg-white/20 mx-auto my-1" />
                <div className="text-4xl font-black text-white/70 leading-none tabular-nums">{h.total}</div>
              </div>
              <p className="text-white text-base md:text-lg font-bold leading-snug">{h.label}</p>
            </div>
          ))}
        </div>

        {/* Top JEE Percentiles */}
        <div className="glass-card rounded-2xl p-6">
          <h4 className="text-lg font-bold text-white mb-4">Top JEE 2026 Percentilers</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {topJeeScorers.map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-brand-gold/40 transition-colors"
              >
                <p className="text-white font-bold text-sm truncate">{s.name}</p>
                <p className="text-brand-gold text-xs font-black tabular-nums mt-0.5">{s.percentile} %ile</p>
              </div>
            ))}
          </div>
        </div>

        {/* NIITians & IIITians 2025 */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-baseline justify-between gap-3 mb-4">
            <h4 className="text-lg font-bold text-white">Our NIITians &amp; IIITians</h4>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">2025</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {niitIiitAchievers2025.map((a) => (
              <div
                key={a.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-brand-gold/40 transition-colors"
              >
                <p className="text-white font-bold text-sm truncate">{a.name}</p>
                <p className="text-brand-orange text-xs font-black tabular-nums mt-0.5">{a.institute}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Head of Competitive Exams */}
        <div className="glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-2xl font-black text-white flex-shrink-0">
            SK
          </div>
          <div className="flex-grow">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Head, Competitive Exams</p>
            <p className="text-white text-xl font-bold">Mr. Saravanakkumar</p>
            <p className="text-white/60 text-sm mt-1">
              Leading our NEET & JEE microbatches with personalised study plans, error tracking, and monthly NEET simulation exams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
