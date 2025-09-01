import { useState } from 'react'
import './SupportSlider.css'

const SupportSlider = () => {
  let [getCurrentlyDisplayedSupporter, setCurrentlyDisplayedSupporter] = useState(0)

  const supporters = [{
    name: 'Supporter 1',
    location: 'South Africa',
    image_source: 'https://images2.imgbox.com/85/f3/SKZmawOp_o.jpg',
    link: "Website url"
  }, {
    name: 'Supporter 2',
    location: 'Also South Africa',
    image_source: 'https://images2.imgbox.com/85/f3/SKZmawOp_o.jpg',
    link: "Website url"
  }]
  
  return (
    <div id="support-slider">
      <button onClick={() => setCurrentlyDisplayedSupporter(getCurrentlyDisplayedSupporter > 0 ? getCurrentlyDisplayedSupporter - 1 : supporters.length - 1) }>
        { '<' }
      </button>

      {supporters.map((supporter, index) => (
        <div
        key={'supporter_' + index}
        className={ index == getCurrentlyDisplayedSupporter ? 'open' : 'closed' }
        style={ { backgroundImage: `url(${supporter.image_source})` } }
        >
          <p>{ supporter.name }</p>
          <p>{ supporter.location }</p>
          <a href={ supporter.link }>Website</a>
        </div>
      ))}

      <button onClick={() => setCurrentlyDisplayedSupporter(getCurrentlyDisplayedSupporter < supporters.length - 1 ? getCurrentlyDisplayedSupporter + 1 : 0) }>
        { '>' }
      </button>
    </div>
  )
}

export default SupportSlider