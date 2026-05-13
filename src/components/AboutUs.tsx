export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] max-w-[80vw] max-h-[80vw] md:max-w-none md:max-h-none bg-brand-orange/5 blur-[120px] rounded-full hidden sm:block" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left Side: Visual */}
        <div className="relative order-2 lg:order-1 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto w-full">
          <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] rounded-full animate-pulse hidden sm:block" />

          <div className="relative glass-card aspect-square rounded-2xl md:rounded-3xl overflow-hidden border-white/10 shadow-2xl">
            <img
              src="/about.png"
              alt="Medical Preparation"
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Floating Quote */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-8 md:left-8 md:right-8 p-3 sm:p-4 md:p-6 glass-card bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl border-white/10">
              <p className="text-white font-serif italic text-sm sm:text-base md:text-lg leading-snug sm:leading-relaxed">
                "Our mission is to turn every medical aspirant's dream into a stethoscope reality."
              </p>
              <div className="mt-2 sm:mt-3 md:mt-4 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-orange flex items-center justify-center font-black text-white text-xs sm:text-sm shrink-0">SK</div>
                <div className="min-w-0">
                  <p className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest truncate">The SK Team</p>
                  <p className="text-white/40 text-[8px] sm:text-[10px] truncate">Academic Excellence Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 order-1 lg:order-2">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
            <p className="text-brand-orange text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">Our Legacy</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-black text-white leading-[0.95] tracking-tight">
              Empowering Future <span className="font-script text-brand-gold italic font-normal block mt-2">Doctors</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              **Transforming academic potential into professional excellence since 2017.**
            </p>
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Founded with a vision to democratize elite NEET coaching, **THE SK LEARNINGS** combines traditional academic rigor with state-of-the-art AI technology. We don't just teach subjects; we build the foundational logic required to excel in India's most competitive medical entrance exam.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6 md:gap-x-8 md:gap-y-8 max-w-md mx-auto lg:mx-0">
            {[
              { value: '10k+', label: 'Successful Aspirants' },
              { value: '98%', label: 'Success Rate' },
              { value: '50+', label: 'Expert Faculty' },
              { value: '24/7', label: 'AI Support' }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1 sm:gap-2 group">
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent group-hover:from-brand-gold group-hover:to-brand-orange transition-all duration-500">
                  {stat.value}
                </h4>
                <p className="text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-widest leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 sm:pt-6 flex justify-center lg:justify-start">
            <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/5 border border-white/10 text-white text-[10px] sm:text-xs font-black rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap">
              Learn More About <span className="hidden sm:inline">Our Methodology</span><span className="sm:hidden">SK Methodology</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
