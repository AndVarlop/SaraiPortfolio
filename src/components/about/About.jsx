import React from 'react'
import './about.css'
import ME from '../../assets/about-sarai.jpg'
import { FaAward, FaHeart } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const About = () => {
  const imageRef = useScrollReveal({ translateX: [-40, 0] })
  const contentRef = useScrollReveal({ translateX: [40, 0], delay: 200 })

  return (
    <section id='about'>
      <h3>Para saber</h3>
      <h1>Sobre mí</h1>
      <div className="container about__container">
        <div className="about__me" ref={imageRef}>
          <div className="about__me-image">
            <img src={ME} alt="Saraí García" loading='lazy' />
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
              <h3>+5 años</h3>
              <small>Conectando con clientes</small>
            </article>
            <article className="about__card">
              <FaHeart className='about__icon' />
              <h3>En transición</h3>
              <small>Hacia contenido y redes</small>
            </article>
          </div>

          <p>
            Durante años he trabajado del lado humano de las marcas: atendiendo clientes,
            resolviendo dudas, acompañando ventas y cuidando cada conversación como si fuera
            la única que importa. Empecé como asesora comercial, pasé por back office,
            atención multicanal y hasta por las prácticas clínicas de un centro de bienestar
            animal — espacios distintos, con algo en común: escuchar a las personas y
            ayudarlas a encontrar una solución.
          </p>
          <p>
            Hoy quiero llevar esa misma sensibilidad al mundo digital. Me apasiona crear
            contenido, entender qué hace que una audiencia se detenga a leer, comente o
            comparta, y construir — publicación a publicación — comunidades con las que las
            marcas quieran seguir hablando. Estoy en formación activa en redes sociales,
            copywriting y gestión de contenido, y busco mi primera oportunidad como
            <strong> Community Manager Junior</strong> para seguir creciendo dentro de un
            equipo de marketing.
          </p>

          <blockquote className='about__quote'>
            “Durante años escuché personas, entendí sus necesidades y las ayudé a encontrar
            soluciones. Hoy quiero llevar esa experiencia al mundo digital, donde una
            conversación puede convertirse en comunidad y una idea, en una conexión real.”
          </blockquote>

          <div className='about__cta'>
            <a href="#experience" className='btn'>Conocer mi experiencia</a>
            <a href="#contact" className='btn btn-primary'>Hablemos</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
