import hamburger from '../../assets/hamburger.svg'

const Header = () => (
  <header>
    <img src={ hamburger } alt="Menu" />

    <nav>
      <a href="#who-we-are">Who We Are</a>
      <a href="#what-we-do">What We Do</a>
      <a href="#follow-us">Follow Us</a>
      <a href="#contact-us">Contact Us</a>
    </nav>
  </header>
)

export default Header