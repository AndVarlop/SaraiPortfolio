import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
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
        <a href="https://www.linkedin.com/in/saraí-garcía-72149724b/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://www.instagram.com/saraisrgv/" target='_blank' rel='noreferrer'><FiInstagram /></a>
        <a href="https://twitter.com/Saraisrgv" target='_blank' rel='noreferrer'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Saraí García — Community Manager Junior. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer
