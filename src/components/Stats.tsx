export default function Stats() {
  const stats = [
    { label: '700+ Scorers', value: '150+', color: 'from-orange-500 to-amber-500' },
    { label: 'Medical Admissions', value: '5000+', color: 'from-blue-500 to-cyan-500' },
    { label: 'Avg. Score Increase', value: '120+', color: 'from-emerald-500 to-teal-500' },
    { label: 'Expert Mentors', value: '200+', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="stats" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="group relative glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col items-center justify-center text-center space-y-4 overflow-hidden"
            >
              {/* Card Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <div className={`text-4xl md:text-5xl lg:text-6xl font-serif font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                {stat.value}
              </div>
              <div className="text-white/40 uppercase tracking-[0.2em] text-[10px] md:text-xs font-black group-hover:text-white/60 transition-colors duration-500">
                {stat.label}
              </div>
              
              {/* Bottom Line Accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
