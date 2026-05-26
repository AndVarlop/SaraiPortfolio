import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Saraí Garcia</a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#education">Educación</a></li>
        <li><a href="#services">Habilidades</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/sarai.blue.5/" target='__blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/saraisrgv/" target='__blank'><FiInstagram /></a>
        <a href="https://twitter.com/Saraisrgv" target='__blank'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Saraí Portfolio. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default footer