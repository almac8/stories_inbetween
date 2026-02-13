import "./HeroSection.css"

import Header from "../../components/Header/Header"
import Donation from "../../components/Donation/Donation"

const HeroSection = () => (
  <section id="hero_section">
    <Header />

    <p id="do_something">DO SOMETHING</p>
    <Donation />
    <h1 id="title">Stories in Between</h1>
  </section>
)

export default HeroSection