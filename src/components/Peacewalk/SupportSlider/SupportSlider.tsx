import { useEffect, useState } from 'react'
import './SupportSlider.css'

const SupportSlider = ({ supporterData }: { supporterData: Array<Object> }) => {
  let [ supporterIndex, setSupporterIndex ] = useState(0)

  useEffect(() => {
    if(supporterIndex < 0) { setSupporterIndex(supporterData.length - 1) }
    if(supporterIndex >= supporterData.length) { setSupporterIndex(0) }
  }, [ supporterIndex ])

  return (
    <div id="support_slider">
      <button onClick={ () => setSupporterIndex(supporterIndex - 1) } id='left_arrow_border'>
        <div id='left_arrow'></div>
      </button>

      <div id='image_border'>
        <div id='image'>
          <div className='supporter_title'>
            <p>Name</p>
            <p>Area</p>
            <p>Website</p>
          </div>
        </div>
      </div>

      <button onClick={ () => setSupporterIndex(supporterIndex + 1) } id='right_arrow_border'>
        <div id='right_arrow'></div>
      </button>
    </div>
  )
}

export default SupportSlider