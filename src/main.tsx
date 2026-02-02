import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import HeroSection from './sections/HeroSection/HeroSection'
import WhoWeAreSection from './sections/WhoWeAreSection/WhoWeAreSection'
import WhatWeDoSection from './sections/WhatWeDoSection/WhatWeDoSection'
import FollowUsSection from './sections/FollowUsSection/FollowUsSection'
import ContactUsSection from './sections/ContactUsSection/ContactUsSection'

createRoot(document.getElementById('main_layout')!).render(
  <StrictMode>
    <HeroSection />
    <WhoWeAreSection />
    <WhatWeDoSection />
    <FollowUsSection />
    <ContactUsSection />
  </StrictMode>
)