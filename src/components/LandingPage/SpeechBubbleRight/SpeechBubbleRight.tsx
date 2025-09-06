import './SpeechBubbleRight.css'

const SpeechBubbleRight = ({ text }: { text: string }) => (
  <div id='speech_bubble_right_border'>
    <p id="speech_bubble_right">{ text }</p>
  </div>
)

export default SpeechBubbleRight