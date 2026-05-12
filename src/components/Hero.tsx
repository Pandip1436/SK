import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle system on canvas for premium 3D star field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    const particles: { x: number; y: number; z: number; px: number; py: number }[] = [];
    const PARTICLE_COUNT = 600;
    const SPEED = 0.3;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(1, 1);
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * 2000 - 1000,
          y: Math.random() * 2000 - 1000,
          z: Math.random() * 2000,
          px: 0,
          py: 0,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      for (const p of particles) {
        p.z -= SPEED;
        if (p.z <= 0) {
          p.x = Math.random() * 2000 - 1000;
          p.y = Math.random() * 2000 - 1000;
          p.z = 2000;
          p.px = 0;
          p.py = 0;
        }

        const scale = 800 / p.z;
        const x = p.x * scale + cx;
        const y = p.y * scale + cy;

        if (p.px !== 0 && p.py !== 0) {
          const alpha = Math.min(1, (2000 - p.z) / 1500);
          const r = Math.min(2, 800 / p.z);

          // Gold/orange tinted stars
          const hue = 30 + Math.random() * 15;
          ctx.strokeStyle = `hsla(${hue}, 90%, 65%, ${alpha * 0.6})`;
          ctx.lineWidth = r * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.px, p.py);
          ctx.lineTo(x, y);
          ctx.stroke();

          ctx.fillStyle = `hsla(${hue}, 90%, 75%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, r * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }

        p.px = x;
        p.py = y;
      }

      animId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', () => { resize(); init(); });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24">
      {/* Warp Speed Star Field Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Animated Concentric Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div className="relative w-[900px] h-[900px]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-brand-gold/[0.06]"
              style={{
                margin: `${i * 70}px`,
                animation: `pulse-ring ${4 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Central Glowing Orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
        <div className="relative">
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-radial from-brand-orange/15 via-brand-gold/5 to-transparent blur-[100px] animate-pulse" />
          <div className="absolute inset-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-brand-orange/10 to-transparent blur-[60px]"
            style={{ animation: 'glow 4s ease-in-out infinite alternate' }}
          />
        </div>
      </div>

      {/* 3D Rotating Wireframe Torus */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[3]">
        <div className="w-[700px] h-[700px] hero-torus">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            {/* Horizontal ellipses forming torus */}
            {[...Array(18)].map((_, i) => {
              const angle = (i * 20 * Math.PI) / 180;
              const ry = 12 + Math.abs(Math.sin(angle)) * 60;
              const offset = Math.cos(angle) * 150;
              return (
                <ellipse
                  key={`te-${i}`}
                  cx={250}
                  cy={250 + offset * 0.15}
                  rx={180 + Math.sin(angle) * 30}
                  ry={ry}
                  stroke="url(#torus-gradient)"
                  strokeWidth="0.4"
                  opacity={0.3 + Math.abs(Math.sin(angle)) * 0.3}
                  transform={`rotate(${i * 10} 250 250)`}
                />
              );
            })}
            {/* Vertical arcs */}
            {[...Array(24)].map((_, i) => {
              const a = (i * 15 * Math.PI) / 180;
              return (
                <ellipse
                  key={`ta-${i}`}
                  cx={250}
                  cy={250}
                  rx={30}
                  ry={180}
                  stroke="url(#torus-gradient)"
                  strokeWidth="0.3"
                  opacity={0.15}
                  transform={`rotate(${i * 7.5} 250 250)`}
                />
              );
            })}
            <defs>
              <linearGradient id="torus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6A00" />
                <stop offset="50%" stopColor="#FDB813" />
                <stop offset="100%" stopColor="#FF6A00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        {/* Octahedron */}
        <div className="absolute top-[20%] left-[15%] hero-float" style={{ animationDelay: '0s' }}>
          <div className="hero-3d-shape" style={{ transform: 'perspective(800px) rotateX(25deg) rotateY(-20deg)' }}>
            <svg width="60" height="60" viewBox="0 0 60 60" className="drop-shadow-[0_0_20px_rgba(253,184,19,0.4)]">
              <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke="#FDB813" strokeWidth="1" opacity="0.5" />
              <polygon points="30,5 55,30 30,30" fill="#FDB813" fillOpacity="0.08" stroke="#FDB813" strokeWidth="0.5" />
              <polygon points="30,5 5,30 30,30" fill="#FF6A00" fillOpacity="0.05" stroke="#FF6A00" strokeWidth="0.5" />
              <line x1="30" y1="5" x2="30" y2="55" stroke="#FDB813" strokeWidth="0.5" opacity="0.3" />
              <line x1="5" y1="30" x2="55" y2="30" stroke="#FDB813" strokeWidth="0.5" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Cube */}
        <div className="absolute top-[25%] right-[18%] hero-float" style={{ animationDelay: '2s' }}>
          <div className="hero-3d-shape" style={{ transform: 'perspective(800px) rotateX(20deg) rotateY(25deg)' }}>
            <svg width="55" height="55" viewBox="0 0 55 55" className="drop-shadow-[0_0_15px_rgba(255,106,0,0.3)]">
              <polygon points="15,10 45,10 45,40 15,40" fill="#FF6A00" fillOpacity="0.06" stroke="#FF6A00" strokeWidth="0.8" />
              <polygon points="15,10 25,3 55,3 45,10" fill="#FDB813" fillOpacity="0.04" stroke="#FDB813" strokeWidth="0.5" />
              <polygon points="45,10 55,3 55,33 45,40" fill="#FF6A00" fillOpacity="0.04" stroke="#FF6A00" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        {/* Triangle */}
        <div className="absolute bottom-[30%] left-[12%] hero-float" style={{ animationDelay: '4s' }}>
          <div className="hero-3d-shape" style={{ transform: 'perspective(800px) rotateX(-15deg) rotateY(-25deg)' }}>
            <svg width="50" height="50" viewBox="0 0 50 50" className="drop-shadow-[0_0_15px_rgba(253,184,19,0.3)]">
              <polygon points="25,5 48,45 2,45" fill="#FDB813" fillOpacity="0.06" stroke="#FDB813" strokeWidth="0.8" />
              <line x1="25" y1="5" x2="25" y2="45" stroke="#FDB813" strokeWidth="0.3" opacity="0.4" />
              <line x1="13" y1="25" x2="37" y2="25" stroke="#FDB813" strokeWidth="0.3" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Pentagon */}
        <div className="absolute bottom-[25%] right-[15%] hero-float" style={{ animationDelay: '1s' }}>
          <div className="hero-3d-shape" style={{ transform: 'perspective(800px) rotateX(-20deg) rotateY(15deg)' }}>
            <svg width="55" height="55" viewBox="0 0 55 55" className="drop-shadow-[0_0_15px_rgba(255,106,0,0.4)]">
              <polygon points="27.5,5 50,20 42,48 13,48 5,20" fill="#FF6A00" fillOpacity="0.06" stroke="#FF6A00" strokeWidth="0.8" />
              {[0,1,2,3,4].map(i => {
                const a1 = ((i * 72 - 90) * Math.PI) / 180;
                const a2 = (((i+2) * 72 - 90) * Math.PI) / 180;
                return <line key={i} x1={27.5 + 22*Math.cos(a1)} y1={27.5 + 22*Math.sin(a1)} x2={27.5 + 22*Math.cos(a2)} y2={27.5 + 22*Math.sin(a2)} stroke="#FF6A00" strokeWidth="0.3" opacity="0.3" />;
              })}
            </svg>
          </div>
        </div>

        {/* Hexagon */}
        <div className="absolute top-[55%] left-[8%] hero-float" style={{ animationDelay: '3s' }}>
          <div className="hero-3d-shape" style={{ transform: 'perspective(800px) rotateX(10deg) rotateY(-30deg)' }}>
            <svg width="45" height="45" viewBox="0 0 45 45" className="drop-shadow-[0_0_12px_rgba(253,184,19,0.3)]">
              <polygon points="22.5,3 40,12 40,30 22.5,39 5,30 5,12" fill="#FDB813" fillOpacity="0.05" stroke="#FDB813" strokeWidth="0.7" />
            </svg>
          </div>
        </div>

        {/* Small circle */}
        <div className="absolute top-[15%] right-[35%] hero-float" style={{ animationDelay: '5s' }}>
          <div className="w-3 h-3 rounded-full bg-brand-gold/30 shadow-[0_0_15px_rgba(253,184,19,0.4)]" />
        </div>

        {/* Small diamond */}
        <div className="absolute bottom-[40%] right-[8%] hero-float" style={{ animationDelay: '3.5s' }}>
          <div className="w-4 h-4 bg-brand-orange/20 border border-brand-orange/40 rotate-45 shadow-[0_0_10px_rgba(255,106,0,0.3)]" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-[11px] font-bold text-white/60 uppercase tracking-[0.2em]">Tamil Nadu's #1 NEET Coaching</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-black text-white leading-[0.95] tracking-tight">
          <span className="block">Where NEET</span>
          <span className="block mt-2">
            <span className="font-script text-brand-gold italic font-normal relative">
              Dreams
              <svg className="absolute -bottom-3 left-0 w-full h-4 text-brand-gold/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0 8 Q 40 0, 100 6 Q 160 12, 200 4" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>{' '}
            Become
          </span>
          <span className="block mt-2 text-gradient-gold">Reality</span>
        </h1>

        {/* Sub text */}
        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          84 out of 100 students coached by us secure Government MBBS seats. 
          Join THE SK LEARNINGS — where expert mentorship meets proven results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#programs"
            className="group relative px-10 py-4 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full text-sm font-black text-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,106,0,0.3)]"
          >
            <span className="relative z-10">Explore Programs →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="https://wa.me/919095636001"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-white/10 text-sm font-bold text-white/70 uppercase tracking-wider hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-300"
          >
            Book Free Demo
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/25">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-black text-brand-gold/60">500+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Top Rankers</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-black text-brand-gold/60">98%</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">Success Rate</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-black text-brand-gold/60">15+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider">AIIMS Selections</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent z-20 pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-5 h-8 border border-white/15 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-brand-gold/50 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
