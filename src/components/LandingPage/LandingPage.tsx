import './LandingPage.css'
import SpeechBubbleLeft from './SpeechBubbleLeft/SpeechBubbleLeft'
import SpeechBubbleRight from './SpeechBubbleRight/SpeechBubbleRight'
import SocialBar from './SocialBar/SocialBar'
const LandingPage = () => (
  <div id='landing-page'>
    <SocialBar />
    <h1>Stories in Between</h1>
    <h2>Do something</h2>
    
    <SpeechBubbleLeft text='Everybody wants to change the world..' />
    <p>Toilet roll image</p>
    <SpeechBubbleRight text='..nobody wants to change the toilet roll.' />
  </div>
)

export default LandingPage