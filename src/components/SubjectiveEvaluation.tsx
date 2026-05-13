import { useEffect, useState } from 'react';

const evaluations = [
  {
    label: 'Physics',
    icon: '🔬',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)]',
    chapter: 'Physics: Current Electricity (Ch-3)',
    handwriting: [
      'Advantages of A.C. over D.C. :- 1) The generation of A.C.',
      'is more economical than D.C. 2) A.C. can be transmitted',
      'over long distances with minimum power loss...'
    ],
    marks: '04',
    total: '05',
    accentChip: '55% Accuracy',
    feedback:
      '"Your solution reflects a deep understanding of the concept. Logical transitions and a neat layout made the proof both accurate and impressive."',
    nextQuestions: [
      'Question 2: Define the term reactance...',
      'Question 3: Explain the working of a transformer...'
    ],
    progress: 'Question 2 / 10'
  },
  {
    label: 'Biology',
    icon: '🧬',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(16,185,129,0.6)]',
    chapter: 'Biology: Photosynthesis (Ch-13)',
    handwriting: [
      'Light reactions occur in the thylakoid membrane where',
      'water is split into oxygen, protons and electrons.',
      'The Calvin cycle then fixes CO₂ in the stroma...'
    ],
    marks: '05',
    total: '05',
    accentChip: '60% Accuracy',
    feedback:
      '"Excellent breakdown of light vs dark reactions. Diagrams and stage-wise reasoning were textbook-perfect."',
    nextQuestions: [
      'Question 5: Compare C3 and C4 plants...',
      'Question 6: Explain photorespiration...'
    ],
    progress: 'Question 4 / 10'
  },
  {
    label: 'Chemistry',
    icon: '⚗️',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(217,70,239,0.6)]',
    chapter: 'Chemistry: Equilibrium (Ch-7)',
    handwriting: [
      'According to Le Chatelier, a system at equilibrium',
      'responds to disturbance by shifting in the direction that',
      'partially counteracts the imposed change...'
    ],
    marks: '03',
    total: '05',
    accentChip: '45% Accuracy',
    feedback:
      '"Concept is correct, but the explanation lacks a worked example. Add Kc/Kp expressions for the cited reaction next time."',
    nextQuestions: [
      'Question 8: State Ostwald’s dilution law...',
      'Question 9: Buffer capacity derivation...'
    ],
    progress: 'Question 7 / 10'
  },
  {
    label: 'Maths',
    icon: '📐',
    themeRing: 'shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]',
    chapter: 'Maths: Differentiation (Ch-5)',
    handwriting: [
      'By first principle, lim(h→0) [f(x+h) − f(x)] / h gives the',
      'derivative. Applying to f(x) = sin x we obtain',
      'cos x using the trigonometric limit identities...'
    ],
    marks: '04',
    total: '05',
    accentChip: '50% Accuracy',
    feedback:
      '"Steps are accurate and well-justified. Minor mark deducted for skipping the limit identity proof."',
    nextQuestions: [
      'Question 11: d/dx of inverse trig functions...',
      'Question 12: L’Hospital rule application...'
    ],
    progress: 'Question 10 / 10'
  }
];

export default function SubjectiveEvaluation() {
  const [activeEval, setActiveEval] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveEval((prev) => (prev + 1) % evaluations.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const current = evaluations[activeEval];

  const features = [
    {
      title: "Rubric-Based Scoring",
      description: "Follows board-specific marking schemes and NCERT model answers with extreme precision."
    },
    {
      title: "Bias-Free & Consistent",
      description: "AI that removes human subjectivity for fairer grading across board-level mock tests."
    },
    {
      title: "Instant Evaluation Reports",
      description: "Generates detailed scores, conceptual feedback, and improvement tips in seconds."
    },
    {
      title: "Supports Handwritten Analysis",
      description: "Advanced OCR technology reads and evaluates handwritten answer sheets effortlessly."
    },
    {
      title: "Teacher Review Mode",
      description: "Option for faculty to override or edit AI scores before final results are published."
    }
  ];

  return (
    <section id="subjective-eval" className="py-16 md:py-24 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Side: Mockup (Handwritten Evaluation) */}
        <div className="relative order-2 lg:order-1 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto w-full">
          {/* Ambient halos */}
          <div className="hidden sm:block absolute -top-16 -right-16 w-48 h-48 md:w-72 md:h-72 bg-brand-orange/25 rounded-full blur-[120px] animate-pulse" />
          <div className="hidden sm:block absolute -bottom-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-brand-gold/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.2s' }} />

          {/* Premium gradient border frame */}
          <div className="absolute -inset-[2px] rounded-[2.6rem] bg-gradient-to-br from-brand-gold/60 via-brand-orange/40 to-brand-gold/60 opacity-80 blur-[3px]" />

          <div className={`relative aspect-[4/3] rounded-[2.5rem] p-[2px] overflow-hidden bg-gradient-to-br from-white/15 via-white/5 to-white/15 transition-shadow duration-700 ${current.themeRing}`}>
            <div className="relative w-full h-full bg-[#0F1115] rounded-[2.45rem] p-3 overflow-hidden">
              <div className="absolute inset-2 bg-white rounded-[1.8rem] flex flex-col overflow-hidden shadow-inner">

                {/* UI Header */}
                <div className="h-12 bg-slate-900 flex items-center justify-between px-6 text-white">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange shrink-0">AI Evaluator</span>
                    <span className="px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest bg-gradient-to-r from-brand-gold to-amber-300 text-slate-900 shrink-0">PRO</span>
                    <div className="w-1 h-4 bg-white/20 rounded-full shrink-0" />
                    <span key={`chapter-${activeEval}`} className="text-[10px] font-bold text-white/60 truncate animate-fade-slide">{current.chapter}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-70" />
                      <span className="relative w-2 h-2 rounded-full bg-red-500" />
                    </span>
                    <div className="w-20 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>

                {/* Subject Pills */}
                <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 border-b border-slate-100 overflow-x-auto">
                  {evaluations.map((e, idx) => {
                    const isActive = idx === activeEval;
                    return (
                      <button
                        key={e.label}
                        onClick={() => setActiveEval(idx)}
                        className={`relative shrink-0 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 overflow-hidden transition-all duration-500 ${
                          isActive
                            ? 'bg-gradient-to-r from-brand-orange to-amber-400 text-slate-900 shadow-lg shadow-brand-orange/30 scale-105'
                            : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                        )}
                        <span className={`text-xs ${isActive ? 'scale-110' : 'opacity-60'}`}>{e.icon}</span>
                        {e.label}
                      </button>
                    );
                  })}
                </div>

                {/* Evaluation Content */}
                <div className="flex-1 p-4 md:p-6 space-y-4 overflow-y-auto relative">
                  {/* Floating ambient particles */}
                  <div className="pointer-events-none absolute top-3 left-1/4 w-1 h-1 rounded-full bg-brand-gold/60 animate-float" />
                  <div className="pointer-events-none absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-float" style={{ animationDelay: '2s' }} />
                  <div className="pointer-events-none absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-slate-400/60 animate-float" style={{ animationDelay: '3.5s' }} />
                  {/* Handwritten Image Mockup */}
                  <div key={`hw-${activeEval}`} className="w-full h-40 bg-slate-50 border border-slate-100 rounded-xl p-4 relative overflow-hidden group animate-fade-slide">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />
                    <div className="relative space-y-2 font-handwriting text-slate-700 text-sm leading-relaxed">
                      {current.handwriting.map((line, i) => (
                        <p key={i} className="underline decoration-slate-300">{line}</p>
                      ))}
                    </div>
                    {/* AI Scanning Overlay */}
                    <div className="absolute inset-0 bg-brand-orange/5 animate-[scan_4s_ease-in-out_infinite]" />
                  </div>

                {/* Evaluation Criteria Grid */}
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Evaluation Criteria</p>
                      <div className="flex gap-2">
                         <div className="px-2 py-0.5 bg-blue-50 rounded text-[7px] font-bold text-blue-600">10% Relevancy</div>
                         <div className="px-2 py-0.5 bg-orange-50 rounded text-[7px] font-bold text-brand-orange border border-brand-orange/20">{current.accentChip}</div>
                         <div className="px-2 py-0.5 bg-purple-50 rounded text-[7px] font-bold text-purple-600">22% Depth</div>
                         <div className="px-2 py-0.5 bg-green-50 rounded text-[7px] font-bold text-green-600">35% Clarity</div>
                      </div>
                   </div>

                   {/* Question Evaluation Box */}
                   <div key={`eval-${activeEval}`} className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm space-y-4 relative overflow-hidden animate-fade-slide">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <p className="text-[8px] font-black text-slate-400 uppercase">Teacher's Feedback:</p>
                            <div className="px-2 py-1 bg-orange-50/50 rounded text-[7px] font-bold text-brand-orange w-fit">Pre-filled by SK Intelligence AI</div>
                         </div>
                         <div className="text-right">
                            <div className="inline-flex flex-col items-center p-2 bg-slate-50 border border-slate-100 rounded-xl">
                               <p className="text-[7px] font-bold text-slate-400 uppercase">Marks Obtained</p>
                               <p className="text-lg font-black text-slate-800">{current.marks} <span className="text-[10px] text-slate-300">/ {current.total}</span></p>
                            </div>
                         </div>
                      </div>

                      <p className="text-[9px] text-slate-600 leading-relaxed italic">
                        {current.feedback}
                      </p>

                      <div className="flex justify-end pt-2">
                         <button className="px-5 py-2 bg-gradient-to-br from-brand-orange to-amber-400 text-slate-900 text-[9px] font-bold rounded-lg shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform">Save Changes</button>
                      </div>
                   </div>
                </div>

                {/* Next Questions Preview */}
                <div key={`next-${activeEval}`} className="space-y-2 opacity-50 animate-fade-slide">
                   {current.nextQuestions.map((q) => (
                     <div key={q} className="p-3 border border-slate-100 rounded-xl flex justify-between items-center">
                        <span className="text-[9px] font-bold text-slate-500 truncate pr-2">{q}</span>
                        <span className="text-[8px] font-black text-slate-400 shrink-0">Attempted</span>
                     </div>
                   ))}
                </div>
                </div>

                {/* Footer Actions */}
                <div className="h-14 bg-slate-50 border-t border-slate-100 px-6 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div key={`prog-${activeEval}`} className="text-[10px] font-bold text-slate-400 animate-fade-slide">{current.progress}</div>
                   </div>
                   <div className="flex gap-2">
                      <button className="px-4 py-1.5 border border-slate-200 text-slate-400 text-[10px] font-bold rounded-lg">Draft</button>
                      <button className="px-6 py-1.5 bg-gradient-to-br from-brand-orange to-amber-400 text-slate-900 text-[10px] font-black rounded-lg shadow-lg shadow-brand-orange/40 hover:scale-105 transition-transform">Save & Next</button>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="hidden md:block absolute -right-4 top-1/3 w-6 h-6 bg-brand-gold rotate-45 animate-float shadow-lg shadow-brand-gold/30" />
          <div className="hidden md:block absolute -left-4 bottom-1/4 w-4 h-4 bg-brand-orange rotate-12 animate-float shadow-lg shadow-brand-orange/30" style={{ animationDelay: '1s' }} />
          <div className="hidden md:block absolute -right-6 bottom-1/3 w-3 h-3 rounded-full bg-brand-gold/60 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-10 order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
              Subjective Answer <span className="font-script text-brand-gold italic font-normal block mt-2">Evaluation</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              SK Intelligence reviews handwritten answers with precision, adapts to your marking style, and offers smart, bias-free scores for subjective board preparation.
            </p>
          </div>

          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2 group">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
