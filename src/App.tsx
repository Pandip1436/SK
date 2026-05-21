import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import VideoSection from './components/VideoSection'
import ExpertFaculty from './components/TeacherAssistant'
import NEETPrograms from './components/TeachingWithoutBorders'
import LiveClassroom from './components/LiveClassroom'
import ClassRecordingVault from './components/ClassRecordingVault'
import ConceptReels from './components/ConceptReels'
import SmarterAssessments from './components/SmarterAssessments'
import SubjectiveEvaluation from './components/SubjectiveEvaluation'
import OfflineTests from './components/OfflineTests'
import OMRAutoGrader from './components/OMRAutoGrader'
import StudentCopilot from './components/StudentCopilot'
import StudyPlanner from './components/StudyPlanner'
import FormulaSheetGenerator from './components/FormulaSheetGenerator'
import CounsellingTracker from './components/CounsellingTracker'
import InstantDoubtSolving from './components/InstantDoubtSolving'
import AskWhileLearning from './components/AskWhileLearning'
import MultilingualSupport from './components/MultilingualSupport'
import FlashcardMastery from './components/FlashcardMastery'
import MicrobatchSystem from './components/MicrobatchSystem'
import Achievers from './components/Achievers'
import CollaborativeLearning from './components/CollaborativeLearning'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main > section')
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const alreadyVisible =
        rect.top < window.innerHeight && rect.bottom > 0;
      section.classList.add('reveal-init');
      if (alreadyVisible) {
        section.classList.add('reveal-visible');
      } else {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen selection:bg-brand-gold selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <VideoSection />
        <NEETPrograms />
        <StudyPlanner />
        <MultilingualSupport />
        <FlashcardMastery />
        <OMRAutoGrader />
        <LiveClassroom />
        <ClassRecordingVault />
        <ConceptReels />
        <ExpertFaculty />
        <CollaborativeLearning />
        <FormulaSheetGenerator />
        <SmarterAssessments />
        <SubjectiveEvaluation />
        <OfflineTests />
        <StudentCopilot />
        <CounsellingTracker />
        <InstantDoubtSolving />
        <AskWhileLearning />
        <MicrobatchSystem />
        <Achievers />
        <AboutUs />

      </main>

      <Footer />

      <ScrollToTop />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919095636001?text=Hi%20THE%20SK%20LEARNINGS,%20I'm%20interested%20in%20your%20coaching%20programs!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group animate-whatsapp-pulse"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-black text-[10px] font-black px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          CHAT WITH US
        </span>
      </a>
    </div>
  )
}

export default App
