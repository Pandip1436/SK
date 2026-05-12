import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import ExpertFaculty from './components/TeacherAssistant'
import NEETPrograms from './components/TeachingWithoutBorders'
import LiveClassroom from './components/LiveClassroom'
import SmarterAssessments from './components/SmarterAssessments'
import StudentCopilot from './components/StudentCopilot'
import Achievers from './components/Achievers'
import Stats from './components/Stats'
import CollaborativeLearning from './components/CollaborativeLearning'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark-bg min-h-screen selection:bg-brand-gold selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <VideoSection />
        <NEETPrograms />
        <LiveClassroom />
        <ExpertFaculty />
        <CollaborativeLearning />
        <SmarterAssessments />
        <StudentCopilot />
        <Achievers />
        <Stats />
      </main>

      <Footer />
    </div>
  )
}

export default App
