import './WhoWeAreSection.css'

import profile_image from '../../assets/profile.png'
import fire_image from '../../assets/fire.jpg'
import map_image from '../../assets/map.jpg'
import kitchen_image from '../../assets/kitchen.jpg'
import talk_1_image from '../../assets/talk_1.jpg'
import talk_2_image from '../../assets/talk_2.jpg'

const WhoWeAreSection = () => (
  <section id='who_we_are_section'>
    <img src={ profile_image } alt="Sasha and Aimée" id='profile_image'/>
    <h2>We are Sasha and Aimée</h2>

    <p>We met in 2022 and since then we have beent ravelling around South Africa together.</p>
    <p>We are passionate about learning, experiencing life, and meeting new people from different walks of life.</p>

    <img src={ fire_image } alt="Two people cooking together over a tiny fire" id='fire_image' />

    <p>In 2025 we completed our first 'Peace Walk'</p>

    <img src={ map_image } alt="A map of south africa showing the route of the Peace Walk" id='map_image' />

    <p>We walked 2500 km accross South Africa to raise awareness on Gender Based Violence.</p>

    <img src={ kitchen_image } alt="Sasha and Aimée working alongside other people in a kitchen" id='kitchen_image' />

    <img src={ talk_1_image } alt="A group of people listening to a talk" id='talk_1_image' />

    <p>We participated in public talks and outreach programs, and met so many people making small changes in their own communities.</p>

    <img src={ talk_2_image } alt="Aimée giving a talk on gender based violence" id='talk_2_image' />

    <p>It was all of these amazing people who inspired us to keeep going and push through to the end.</p>
    
    <a href="#">Read More</a>
  </section>
)

export default WhoWeAreSection