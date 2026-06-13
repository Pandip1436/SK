import { useState } from 'react';

const WHATSAPP_NUMBER = '919095636001';

const programs = [
  'NEET Repeater Program',
  '11th–12th NEET Integrated',
  'JEE Integrated Program',
  '9th–10th Foundation',
  'Not sure yet',
];

export default function CounsellingForm() {
  const [name, setName] = useState('');
  const [program, setProgram] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Hi THE SK LEARNINGS, I would like to book a parent counselling session.',
      '',
      name ? `Parent / Student name: ${name}` : '',
      program ? `Program of interest: ${program}` : '',
      phone ? `Contact number: ${phone}` : '',
      message ? `What I'd like to discuss: ${message}` : '',
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-white/[0.06] transition-colors';

  return (
    <section
      id="counselling"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-dark-bg"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] max-w-[90vw] bg-brand-orange/8 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left: copy */}
        <div className="space-y-6">
          <p className="text-brand-orange text-[11px] md:text-xs font-black uppercase tracking-[0.4em]">
            Take the first step
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-[1.05] tracking-tight text-balance">
            Book a Parent{' '}
            <span className="font-script text-brand-gold italic font-normal">Counselling Session</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            One short, no-obligation conversation about where your child stands and how our microbatch system can
            help. Share a few details and we'll continue on WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi THE SK LEARNINGS, I'd like to discuss my child's preparation."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-transform shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885" />
              </svg>
              Discuss Your Child's Preparation
            </a>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 md:p-8 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="cf-name" className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50">
              Parent / Student name
            </label>
            <input
              id="cf-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClass}
              required
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="cf-program" className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50">
              Program of interest
            </label>
            <select
              id="cf-program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className={`${inputClass} appearance-none`}
              required
            >
              <option value="" disabled className="bg-dark-bg text-white/40">
                Select a program
              </option>
              {programs.map((p) => (
                <option key={p} value={p} className="bg-dark-bg text-white">
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="cf-phone" className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50">
              Contact number
            </label>
            <input
              id="cf-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              className={inputClass}
              required
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="cf-message" className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50">
              What would you like to discuss? <span className="text-white/30 normal-case tracking-normal">(optional)</span>
            </label>
            <textarea
              id="cf-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your child's current class, goals, or any concern"
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="group relative w-full px-6 py-4 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full text-xs sm:text-sm font-black text-white uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,106,0,0.3)]"
          >
            <span className="relative z-10">Request a Counselling Call →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <p className="text-center text-[11px] text-white/35 leading-relaxed">
            Submitting opens WhatsApp with your details so we can continue the conversation.
          </p>
        </form>
      </div>
    </section>
  );
}
