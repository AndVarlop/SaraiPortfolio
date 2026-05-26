import React from 'react'
import './about.css'
import ME from '../../assets/avatar2sarai.jpg'
import { FaAward, FaHeart } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const About = () => {
  const imageRef = useScrollReveal({ translateX: [-40, 0] })
  const contentRef = useScrollReveal({ translateX: [40, 0], delay: 200 })

  return (
    <section id='about'>
      <h3>Para saber</h3>
      <h1>Acerca de mí</h1>
      <div className="container about__container">
        <div className="about__me" ref={imageRef}>
          <div className="about__me-image">
            <img src={ME} alt="Saraí Garcia" />
          </div>
        </div>

        <div className="about__content" ref={contentRef}>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h3>Inglés B1+</h3>
              <small>Atención mercado español</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h3>7+ Empleos</h3>
              <small>Desde 2018</small>
            </article>
            <article className="about__card">
              <FaHeart className='about__icon' />
              <h3>Bienestar Animal</h3>
              <small>Pasión veterinaria</small>
            </article>
          </div>
          <p>
            Auxiliar veterinaria y agente de back office con experiencia en atención al cliente,
            gestión de información y apoyo en procesos administrativos y operativos.
            Me distingo por ser responsable, organizada y empática, con sólidas habilidades
            para el trabajo en equipo y una marcada orientación al cumplimiento de objetivos.
            Apasionada por el bienestar animal, cuento con experiencia en apoyo clínico
            y en la generación de soluciones eficientes tanto en entornos clínicos como corporativos.
          </p>
          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About
