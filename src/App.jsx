import Navbar from './components/Navbar'
import Content from './components/Content'
import ProfileSection from './components/ProfileSection'
import SkillsSection from './SkillsSection'
import './App.css'

function App() {

  return (<>
    <Navbar />
    <Content>
      <ProfileSection />
      <SkillsSection />
    </Content>
  </>
  )
}

export default App
