import React from 'react'
import './footer.css'
import { BsTiktok } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Saraí García</a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#education">Formación</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.tiktok.com/@saraisrgv" target='_blank' rel='noreferrer' aria-label='TikTok'><BsTiktok /></a>
        <a href="https://www.instagram.com/saraisrgv/" target='_blank' rel='noreferrer' aria-label='Instagram'><FiInstagram /></a>
        <a href="https://twitter.com/Saraisrgv" target='_blank' rel='noreferrer' aria-label='Twitter'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Saraí García — Community Manager Junior. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer
