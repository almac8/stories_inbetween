import './SpeechBubbleLeft.css'

const SpeechBubbleLeft = ({ text }: { text: string }) => (
  <div id='speech_bubble_left_border'>
    <p id="speech_bubble_left">{ text }</p>
  </div>
)

export default SpeechBubbleLeft