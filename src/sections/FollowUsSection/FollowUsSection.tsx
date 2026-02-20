import './FollowUsSection.css'

import facebook_logo from '../../assets/facebook-logo.webp'
import instagram_logo from '../../assets/instagram-logo.webp'
import tiktok_logo from '../../assets/tiktok-logo.webp'
//  import youtube_logo from '../../assets/youtube-logo.webp'
import whatsapp_qr from '../../assets/whatsapp_qr.png'

const FollowUsSection = () => (
  <ul id='follow_us_section'>
    <li>
      <a href="https://www.facebook.com/share/1BYYGZEymS/">
        <img src={ facebook_logo } alt="Facebook logo" />
        <p>Facebook</p>
      </a>
    </li>

    <li>
      <a href="https://www.instagram.com/stories.inbetween/">
        <img src={ instagram_logo } alt="Instagram logo" />
        <p>Instagram</p>
      </a>
    </li>

    <li>
      <a href="https://www.tiktok.com/@stories.inbetween/">
        <img src={ tiktok_logo } alt="TikTok logo" />
        <p>TikTok</p>
      </a>
    </li>
{/* 
    <li>
      <a href="#">
        <img src={ youtube_logo } alt="YouTube logo" />
        <p>TikTok</p>
      </a>
    </li>
 */}
    <li>
      <a href="https://chat.whatsapp.com/BbJM5ekaXdJJ1uyf8HhlE4/">
        <img src={ whatsapp_qr } alt="WhatsApp QR code" />
        <p>WhatsApp</p>
      </a>
    </li>
  </ul>
)

export default FollowUsSection