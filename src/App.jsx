import Navbar from './components/Navbar'
import Content from './components/Content'
import ProfileSection from './components/ProfileSection'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import ResumeSection from './components/ResumeSection'
import ContactSection from './components/ContactSection'
import ProgressBar from "react-scroll-progress-bar";
import Footer from './components/Footer'
import './App.css'

function App() {

  return (<>
    <Navbar />
    <ProgressBar bgcolor='#ff014d' height='5px' />
    <div className='main'>
      <Content>
        <ProfileSection />
        <ResumeSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        <Footer/>
      </Content>
    </div>
  </>
  )
}

export default App
