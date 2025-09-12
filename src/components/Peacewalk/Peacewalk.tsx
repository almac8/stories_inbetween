import './Peacewalk.css'

import StarText from '../StarText/StarText'
import SupportSlider from './SupportSlider/SupportSlider'
import { useState } from 'react'

const Peacewalk = () => {
  let [ peacewalkSupporters, setPeacewalkSupporters ] = useState([])

  onload = async () => {
    const response = await fetch('/.netlify/functions/supporters')
    const data = await response.json()
    console.log(data)
    setPeacewalkSupporters(data)
  }

  return (
    <div id="peacewalk">
      <StarText text='Our Peacewalk Supporters' />
      <SupportSlider supporterData={ peacewalkSupporters } />
    </div>
  )
}

export default Peacewalk