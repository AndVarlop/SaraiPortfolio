import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/AvatarSaru.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hola, soy</h2>
        <h1>Saraí Garcia</h1>
        <h3 className='wrap text-light'>Auxiliar Veterinario</h3>
        <br />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    )
}
export default Header