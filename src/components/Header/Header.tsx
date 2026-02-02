import './Header.css'

import hamburger from '../../assets/hamburger.svg'
import { useState } from 'react'

const Header = () => {
  const [ nav_is_open, set_nav_is_open ] = useState(false)

  return (
    <header id='header'>
      <img src={ hamburger } alt="Menu" onClick={() => set_nav_is_open(!nav_is_open)} />

      <nav className={ nav_is_open ? 'open' : 'closed' }>
        <a href="#who_we_are_section">Who We Are</a>
        <a href="#what_we_do_section">What We Do</a>
        <a href="#follow_us_section">Follow Us</a>
        <a href="#contact_us_section">Contact Us</a>
      </nav>
    </header>
  )
}

export default Header