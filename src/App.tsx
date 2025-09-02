import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import Introduction from './components/Introduction/Introduction'
import Peacewalk from './components/Peacewalk/Peacewalk'
import BlogAndVlog from './components/BlogAndVlog/BlogAndVlog'
import Socials from './components/Socials/Socials'
import Network from './components/Network/Network'
import Donations from './components/Donations/Donations'

function App() {
  return (
    <div>
      <LandingPage />
      <Introduction />
      <Peacewalk />
      {/* <BlogAndVlog /> */}
      <Socials />
      <Network />
      <Donations />
    </div>
  )
}

export default App
