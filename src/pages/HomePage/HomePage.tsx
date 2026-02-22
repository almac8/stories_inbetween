import "./HomePage.css"

import ContactUsSection from "../../sections/ContactUsSection/ContactUsSection"
import FollowUsSection from "../../sections/FollowUsSection/FollowUsSection"
import HeroSection from "../../sections/HeroSection/HeroSection"
import WhatWeDoSection from "../../sections/WhatWeDoSection/WhatWeDoSection"
import WhoWeAreSection from "../../sections/WhoWeAreSection/WhoWeAreSection"

const HomePage = () => (
  <div id="HomePage">
    <HeroSection />
    <WhoWeAreSection />
    <WhatWeDoSection />
    <FollowUsSection />
    <ContactUsSection />
  </div>
)

export default HomePage