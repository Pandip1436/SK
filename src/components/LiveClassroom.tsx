export default function LiveClassroom() {
  const features = [
    {
      title: "Auto Attendance, No Disruptions",
      description: "Students simply glance at the camera, attendance is marked instantly and accurately."
    },
    {
      title: "Live Focus Insights",
      description: "Tracks participation, screen behaviour, and attention dips in real time without interrupting the class."
    },
    {
      title: "Engagement Alerts That Matter",
      description: "Notifies teachers when students lose focus or tune out, so intervention can happen before learning drops off."
    },
    {
      title: "Emotion-Aware, Privacy-First",
      description: "Reads visual and behavioural cues to detect mood and engagement while keeping student data secure."
    },
    {
      title: "Smart Sync with Dashboards",
      description: "Attendance and engagement data is auto-updated for teachers  in real time."
    }
  ];

  return (
    <section id="live-classroom" className="py-16 md:py-24 px-6 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="font-script text-5xl md:text-6xl text-brand-gold mb-4">Live Classroom</h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg md:text-xl font-medium">
          Catch what's missed and help students in a timely manner. SK Intelligence tracks attention and automates presence without disrupting live class flow.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start mt-12 md:mt-20">
        {/* Right Side: Content */}
        <div className="space-y-10 order-1 lg:order-2">
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Monitor Attention. Capture Attendance. Effortlessly.
          </h3>
          <p className="text-white/60 text-lg leading-relaxed">
            SK Intelligence tracks real-time attention and marks attendance. Teachers know not just who's in class, but who's truly tuned in. From facial recognition to focus detection, everything works silently in the background. No disruption. Just real insights.
          </p>

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

        {/* Left Side: Mockup */}
        <div className="relative sticky top-32 order-1 lg:order-1">
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] animate-pulse" />

          {/* Device Mockup */}
          <div className="relative glass-card aspect-[4/3] rounded-[2rem] p-4 border-white/20 shadow-2xl overflow-hidden bg-gradient-to-br from-brand-orange to-brand-gold">
            <div className="absolute inset-2 bg-white rounded-[1.5rem] flex flex-col items-center justify-center p-8 space-y-6">
              <div className="text-brand-orange font-black text-xl tracking-tighter">THE SK LEARNINGS</div>
              
              <div className="text-center space-y-2">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Click Below to Mark Your Attendance</p>
              </div>

              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-slate-100 shadow-inner group">
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-5xl">👤</div>
                {/* Scanning Animation */}
                <div className="absolute inset-0 bg-brand-orange/20 animate-[scan_3s_ease-in-out_infinite]" />
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange shadow-[0_0_15px_rgba(255,106,0,0.8)] animate-[scan-line_3s_ease-in-out_infinite]" />
              </div>

              <div className="text-center space-y-1">
                <p className="text-brand-orange font-bold text-sm animate-pulse">Scanning...</p>
                <p className="text-slate-400 text-[10px]">Please look at the camera</p>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -right-4 top-1/2 w-6 h-6 bg-brand-gold rotate-45 animate-float" />
          <div className="absolute -left-4 top-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
}
