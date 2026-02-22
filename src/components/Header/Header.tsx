import './Header.css'

import hamburger from '../../assets/hamburger.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [ nav_is_open, set_nav_is_open ] = useState(false)

  return (
    <header id='header'>
      <img src={ hamburger } alt="Menu" onClick={() => set_nav_is_open(!nav_is_open)} />

      <nav className={ nav_is_open ? 'open' : 'closed' }>
        <Link to={ "/"}>Home</Link>
        <Link to={ "who_we_are"}>Who We Are</Link>
        <Link to={ "what_we_do"}>What We Do</Link>
        <Link to={ "follow_us"}>Follow Us</Link>
        <Link to={ "support_us"}>Support Us</Link>
      </nav>
    </header>
  )
}

export default Header