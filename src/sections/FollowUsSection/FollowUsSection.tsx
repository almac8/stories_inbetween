import './FollowUsSection.css'

import facebook_logo from '../../assets/facebook-logo.webp'
import instagram_logo from '../../assets/instagram-logo.webp'
import tiktok_logo from '../../assets/tiktok-logo.webp'
import youtube_logo from '../../assets/youtube-logo.webp'
import whatsapp_qr from '../../assets/facebook-logo.webp'

const FollowUsSection = () => (
  <ul id='follow_us_section'>
    <li>
      <a href="#">
        <img src={ facebook_logo } alt="Facebook logo" />
        <p>Facebook</p>
      </a>
    </li>

    <li>
      <a href="#">
        <img src={ instagram_logo } alt="Instagram logo" />
        <p>Instagram</p>
      </a>
    </li>

    <li>
      <a href="#">
        <img src={ tiktok_logo } alt="TikTok logo" />
        <p>TikTok</p>
      </a>
    </li>

    <li>
      <a href="#">
        <img src={ youtube_logo } alt="YouTube logo" />
        <p>TikTok</p>
      </a>
    </li>

    <li>
      <a href="#">
        <img src={ whatsapp_qr } alt="WhatsApp QR code" />
        <p>WhatsApp</p>
      </a>
    </li>
  </ul>
)

export default FollowUsSection