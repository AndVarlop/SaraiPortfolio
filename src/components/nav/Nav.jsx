import React from 'react'
import './nav.css'
import { BiSolidUser, BiLibrary, BiSolidContact, BiListCheck } from 'react-icons/bi'
import { MdMiscellaneousServices } from 'react-icons/md'
import { ImHome3 } from 'react-icons/im'
import { FaRegImages } from 'react-icons/fa6'

const Nav = () => {
  return (
    <nav>
      <a href="#" aria-label='Inicio'><ImHome3 /></a>
      <a href="#about" aria-label='Sobre mí'><BiSolidUser /></a>
      <a href="#experience" aria-label='Experiencia'><BiLibrary /></a>
      <a href="#proyectos" aria-label='Proyectos'><FaRegImages /></a>
      <a href="#servicios" aria-label='Servicios'><MdMiscellaneousServices /></a>
      <a href="#habilidades" aria-label='Habilidades'><BiListCheck /></a>
      <a href="#contact" aria-label='Contacto'><BiSolidContact /></a>
    </nav>
  )
}

export default Nav
