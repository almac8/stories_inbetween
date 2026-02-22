import './Header.css'

import hamburger from '../../assets/hamburger.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [ nav_is_open, set_nav_is_open ] = useState(false)
  const [ current_page, set_current_page ] = useState(0)

  return (
    <header id='header'>
      <img src={ hamburger } alt="Menu" onClick={() => set_nav_is_open(!nav_is_open)} />

      <nav className={ nav_is_open ? 'open' : 'closed' }>
        {current_page !== 0 && (
          <Link
            to={ "/"}
            onClick={ () => {
              set_nav_is_open(false)
              set_current_page(0)
            }}
          >Home</Link>
        )}

        {current_page !== 1 && (
          <Link
            to={ "/who_we_are"}
            onClick={ () => {
              set_nav_is_open(false)
              set_current_page(1)
            }}
          >Who We Are</Link>
        )}

        {current_page !== 2 && (
          <Link
            to={ "/what_we_do"}
            onClick={ () => {
              set_nav_is_open(false)
              set_current_page(2)
            }}
          >What We Do</Link>
        )}

        {current_page !== 3 && (
          <Link
            to={ "/contact_us"}
            onClick={ () => {
              set_nav_is_open(false)
              set_current_page(3)
            }}
          >Contact Us</Link>
        )}

        {current_page !== 4 && (
          <Link
            to={ "/support_us"}
            onClick={ () => {
              set_nav_is_open(false)
              set_current_page(4)
            }}
          >Support Us</Link>
        )}
      </nav>
    </header>
  )
}

export default Header