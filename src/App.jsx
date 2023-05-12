import Navbar from './components/Navbar'
import Content from './components/Content'
import ProfileSection from './components/ProfileSection'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import ProgressBar from "react-scroll-progress-bar";
import './App.css'

// progress bar
// mobile version

function App() {

  return (<>
              <ProgressBar bgcolor= '#ff014d'/>
    <Navbar />
    <Content>
      <ProfileSection />
      <SkillsSection />
      <ProjectSection/>
    </Content>
  </>
  )
}

export default App
