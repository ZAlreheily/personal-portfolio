import Navbar from './components/Navbar'
import Content from './components/Content'
import ProfileSection from './components/ProfileSection'
import './App.css'

function App() {

  return (<>
    <Navbar />
    <Content>
      <ProfileSection />
      <ProfileSection />

    </Content>
  </>
  )
}

export default App
