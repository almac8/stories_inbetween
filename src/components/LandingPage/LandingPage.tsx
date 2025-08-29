import './LandingPage.css'
import SpeechBubble from './SpeechBubble/SpeechBubble'

import SocialBar from './SocialBar/SocialBar'
const LandingPage = () => (
  <div id='landing-page'>
    <SocialBar />
    <h1>Stories in Between</h1>
    <h2>Do something</h2>
    
    <SpeechBubble text='Everybody wants to change the world..' />
    <p>Toilet roll image</p>
    <SpeechBubble text='..nobody wants to change the toilet roll.' />
  </div>
)

export default LandingPage