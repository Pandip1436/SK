export default function SubjectiveEvaluation() {
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
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-brand-orange/10 blur-[120px] rounded-full animate-pulse" />
          
          <div className="relative glass-card aspect-[4/3] rounded-[2.5rem] p-3 border-white/10 shadow-2xl overflow-hidden bg-[#0F1115]">
            <div className="absolute inset-2 bg-white rounded-[1.8rem] flex flex-col overflow-hidden shadow-inner">
              
              {/* UI Header */}
              <div className="h-12 bg-slate-900 flex items-center justify-between px-6 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">AI Evaluator</span>
                  <div className="w-1 h-4 bg-white/20 rounded-full" />
                  <span className="text-[10px] font-bold text-white/60">Biology: Botany (Ch-2)</span>
                </div>
                <div className="w-20 h-2 bg-white/10 rounded-full" />
              </div>

              {/* Evaluation Content */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                {/* Handwritten Image Mockup */}
                <div className="w-full h-40 bg-slate-50 border border-slate-100 rounded-xl p-4 relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />
                  <div className="relative space-y-2 font-handwriting text-slate-700 text-sm leading-relaxed">
                    <p className="underline decoration-slate-300">Advantages of A.C. over D.C. :- 1) The generation of A.C.</p>
                    <p className="underline decoration-slate-300">is more economical than D.C. 2) A.C. can be transmitted</p>
                    <p className="underline decoration-slate-300">over long distances with minimum power loss...</p>
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
                         <div className="px-2 py-0.5 bg-orange-50 rounded text-[7px] font-bold text-brand-orange border border-brand-orange/20">55% Accuracy</div>
                         <div className="px-2 py-0.5 bg-purple-50 rounded text-[7px] font-bold text-purple-600">22% Depth</div>
                         <div className="px-2 py-0.5 bg-green-50 rounded text-[7px] font-bold text-green-600">35% Clarity</div>
                      </div>
                   </div>

                   {/* Question 1 Evaluation Box */}
                   <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm space-y-4 relative overflow-hidden">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <p className="text-[8px] font-black text-slate-400 uppercase">Teacher's Feedback:</p>
                            <div className="px-2 py-1 bg-orange-50/50 rounded text-[7px] font-bold text-brand-orange w-fit">Pre-filled by SK Intelligence AI</div>
                         </div>
                         <div className="text-right">
                            <div className="inline-flex flex-col items-center p-2 bg-slate-50 border border-slate-100 rounded-xl">
                               <p className="text-[7px] font-bold text-slate-400 uppercase">Marks Obtained</p>
                               <p className="text-lg font-black text-slate-800">04 <span className="text-[10px] text-slate-300">/ 05</span></p>
                            </div>
                         </div>
                      </div>
                      
                      <p className="text-[9px] text-slate-600 leading-relaxed italic">
                        "Your solution reflects a deep understanding of the concept. Logical transitions and a neat layout made the proof both accurate and impressive."
                      </p>
                      
                      <div className="flex justify-end pt-2">
                         <button className="px-5 py-2 bg-slate-900 text-white text-[9px] font-bold rounded-lg shadow-lg">Save Changes</button>
                      </div>
                   </div>
                </div>

                {/* Next Questions Preview */}
                <div className="space-y-2 opacity-40">
                   <div className="p-3 border border-slate-100 rounded-xl flex justify-between items-center">
                      <span className="text-[9px] font-bold text-slate-500">Question 2: Define the term reactance...</span>
                      <span className="text-[8px] font-black text-slate-400">Attempted</span>
                   </div>
                   <div className="p-3 border border-slate-100 rounded-xl flex justify-between items-center">
                      <span className="text-[9px] font-bold text-slate-500">Question 3: Explain the working of a transformer...</span>
                      <span className="text-[8px] font-black text-slate-400">Attempted</span>
                   </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="h-14 bg-slate-50 border-t border-slate-100 px-6 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="text-[10px] font-bold text-slate-400">Question 2 / 10</div>
                 </div>
                 <div className="flex gap-2">
                    <button className="px-4 py-1.5 border border-slate-200 text-slate-400 text-[10px] font-bold rounded-lg">Draft</button>
                    <button className="px-6 py-1.5 bg-brand-orange text-white text-[10px] font-black rounded-lg shadow-lg">Save & Next</button>
                 </div>
              </div>
            </div>
          </div>
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
