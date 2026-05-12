export default function Stats() {
  const stats = [
    { label: '700+ Scorers', value: '150+' },
    { label: 'Medical Admissions', value: '5000+' },
    { label: 'Avg. Score Increase', value: '120+' },
    { label: 'Expert Mentors', value: '200+' },
  ];

  return (
    <section id="stats" className="py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-2">
            <div className="text-5xl md:text-6xl font-serif font-black text-brand-gold">{stat.value}</div>
            <div className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
