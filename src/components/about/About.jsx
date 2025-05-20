import React from 'react'
import './about.css'
import ME from '../../assets/Avatar2sarai.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about' >
      <h3>Para saber</h3>
      <h1>Acerca de mi</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h3>B1 English</h3>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h3>Referencias</h3>
              <small>5+ personas</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h3>Empleos</h3>
              <small>6+ Empleos</small>
            </article>
          </div>
          <p>Auxiliar veterinaria. Me apasiona
              ayudar a nuestros amigos
              peludos y tengo habilidades en
              atención al cliente, administración de medicamentos
              y asistencia en procedimientos. Soy empática, organizada y
              siempre busco aprender más
              para contribuir al bienestar
              animal.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default about