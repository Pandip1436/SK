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

const yearStats = [
  { year: '2019', enrolled: 7,  seats: 4,  rate: 57, color: 'from-amber-600 to-amber-400' },
  { year: '2020', enrolled: 14, seats: 10, rate: 71, color: 'from-brand-orange to-amber-400' },
  { year: '2021', enrolled: 18, seats: 15, rate: 83, color: 'from-brand-orange to-brand-gold' },
];

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
          Real students. Real results. Our individual coaching has consistently delivered Government MBBS seats year after year.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-start mt-10 md:mt-20">
        {/* Left Side: Content */}
        <div ref={ref} className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Individual Coaching Performance in NEET
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              From 7 students to 18+ — our growth is driven by results, not marketing. 84 out of every 100 students coached by THE SK LEARNINGS have secured Government MBBS seats.
            </p>
          </div>

          {/* Stats Table */}
          <div className="glass-card rounded-2xl overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-2 md:p-4 text-xs font-bold text-white/40 uppercase tracking-widest"></th>
                  {yearStats.map((y, i) => (
                    <th
                      key={y.year}
                      className={`p-2 md:p-4 text-center text-sm font-black text-brand-gold transition-all duration-700 ${
                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                      style={{ transitionDelay: `${i * 120}ms` }}
                    >
                      {y.year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-2 md:p-4 text-sm font-bold text-white">Students Enrolled</td>
                  {yearStats.map((y, i) => (
                    <td
                      key={y.year}
                      className={`p-2 md:p-4 text-center text-xl md:text-2xl font-black tabular-nums ${
                        i === yearStats.length - 1 ? 'text-brand-orange' : 'text-white'
                      }`}
                    >
                      <CountUp to={y.enrolled} inView={inView} delay={300 + i * 150} />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-2 md:p-4 text-sm font-bold text-white">Govt. MBBS Seats</td>
                  {yearStats.map((y, i) => (
                    <td
                      key={y.year}
                      className={`p-2 md:p-4 text-center text-xl md:text-2xl font-black tabular-nums ${
                        i === yearStats.length - 1 ? 'text-brand-orange' : 'text-white'
                      }`}
                    >
                      <CountUp to={y.seats} inView={inView} delay={500 + i * 150} />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Success Rate Bars */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Student Success Rate</h4>
            <div className="space-y-3">
              {yearStats.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                  }`}
                  style={{ transitionDelay: `${800 + i * 180}ms` }}
                >
                  <span className="text-sm font-bold text-white/60 w-10">{item.year}</span>
                  <div className="flex-grow h-8 bg-white/5 rounded-full overflow-hidden relative">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full flex items-center justify-end pr-3 transition-[width] ease-out`}
                      style={{
                        width: inView ? `${item.rate}%` : '0%',
                        transitionDuration: '1400ms',
                        transitionDelay: `${900 + i * 180}ms`,
                      }}
                    >
                      <span className="text-xs font-black text-white tabular-nums">
                        <CountUp to={item.rate} inView={inView} delay={900 + i * 180} />%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

          {/* Performance Banner */}
          <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl border-white/10 group">
            <img
              src="/performance-banner.jpg"
              alt="THE SK LEARNINGS NEET Individual Coaching Performance"
              className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl pointer-events-none" />
          </div>

          {/* NEET Achievers Grid */}
          <div className="relative glass-card rounded-3xl overflow-hidden shadow-2xl border-white/10 group">
            <img
              src="/neet-achievers.jpg"
              alt="THE SK LEARNINGS NEET Achievers - Government Medical College Selections"
              className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl pointer-events-none" />
          </div>

          {/* Floating Accents */}
          <div className="absolute -left-4 top-1/4 w-6 h-6 bg-brand-gold rotate-45 animate-float hidden sm:block" />
          <div className="absolute -right-4 bottom-1/4 w-4 h-4 bg-brand-orange animate-float hidden sm:block" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
}
