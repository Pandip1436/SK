export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Visual */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] rounded-full animate-pulse" />
          
          <div className="relative glass-card aspect-square rounded-3xl overflow-hidden border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
              alt="Medical Preparation" 
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            {/* Floating Quote */}
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-card bg-black/40 backdrop-blur-md rounded-2xl border-white/10">
               <p className="text-white font-serif italic text-lg leading-relaxed">
                 "Our mission is to turn every medical aspirant's dream into a stethoscope reality."
               </p>
               <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center font-black text-white">SK</div>
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-widest">The SK Team</p>
                    <p className="text-white/40 text-[10px]">Academic Excellence Lead</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-10 order-1 lg:order-2">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-brand-orange text-xs font-black uppercase tracking-[0.4em]">Our Legacy</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Empowering Future <span className="font-script text-brand-gold italic font-normal block mt-2">Doctors</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              **Transforming academic potential into professional excellence since 2017.**
            </p>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Founded with a vision to democratize elite NEET coaching, **THE SK LEARNINGS** combines traditional academic rigor with state-of-the-art AI technology. We don't just teach subjects; we build the foundational logic required to excel in India's most competitive medical entrance exam.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
             <div className="space-y-2">
                <h4 className="text-3xl font-black text-white font-serif">10k+</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Successful Aspirants</p>
             </div>
             <div className="space-y-2">
                <h4 className="text-3xl font-black text-white font-serif">98%</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Success Rate</p>
             </div>
             <div className="space-y-2">
                <h4 className="text-3xl font-black text-white font-serif">50+</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Expert Faculty</p>
             </div>
             <div className="space-y-2">
                <h4 className="text-3xl font-black text-white font-serif">24/7</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">AI Support</p>
             </div>
          </div>

          <div className="pt-6">
             <button className="px-10 py-4 bg-white/5 border border-white/10 text-white text-xs font-black rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Learn More About Our Methodology
             </button>
          </div>
        </div>

      </div>
    </section>
  );
}
