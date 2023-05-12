import Navbar from './components/Navbar'
import Content from './components/Content'
import ProfileSection from './components/ProfileSection'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import './App.css'

// slow slide links click
// sticky navbar
// progress bar

function App() {

  return (<>
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
