import './WhatWeDoSection.css'

import bicycles_image from '../../assets/bicycles.jpg'
import pyramid_image from '../../assets/gbv_pyramid.jpg'

const WhatWeDoSection = () => (
  <section id='what_we_do_section'>
    <p>Now we've decided to swing the pendulum again.</p>

    <img src={ bicycles_image } alt="Sasha and Aimée with their bicycles" id='bicycles_image'/>

    <p>This time with bicycles!</p>

    <img src={ pyramid_image } alt="The GBV Pyramid" id='pyramid_image' />

    <p>We have registered a non profit company with the aim of ending Gender Based Violence, Femicide, and trafficking, and focuses on a bottom-up approach.</p>

    <p>By focusing on the underlying pillars upholding the state of GBV, we can make the societal changes neccessary for it to end.</p>

    <a href="#">Read More</a>

    <p>Our new project, launching 4 February 2026 consists of another cross country tour, where we will document and support local change makers in the communities we pass through.</p>
  </section>
)

export default WhatWeDoSection