import React from 'react'
import './services.css'
import {
  MdOutlineCalendarMonth,
  MdOutlineDesignServices,
  MdOutlineAnalytics
} from 'react-icons/md'
import { FaRegPenToSquare, FaRegComments } from 'react-icons/fa6'
import { useStaggerReveal } from '../../hooks/useScrollReveal'

const offerings = [
  {
    icon: <MdOutlineCalendarMonth />,
    title: 'Gestión de redes sociales',
    desc: 'Planificación, programación y publicación de contenido en las cuentas de la marca.'
  },
  {
    icon: <MdOutlineDesignServices />,
    title: 'Creación de contenido',
    desc: 'Posts, carruseles, stories y Reels alineados a la identidad visual de la marca.'
  },
  {
    icon: <FaRegPenToSquare />,
    title: 'Copywriting',
    desc: 'Captions y textos adaptados al tono y al formato de cada plataforma.'
  },
  {
    icon: <FaRegComments />,
    title: 'Community Management',
    desc: 'Gestión de comentarios y mensajes con una comunicación cercana y profesional.'
  },
  {
    icon: <MdOutlineCalendarMonth />,
    title: 'Calendario editorial',
    desc: 'Organización y planificación de publicaciones a nivel semanal y mensual.'
  },
  {
    icon: <MdOutlineAnalytics />,
    title: 'Reportes básicos',
    desc: 'Seguimiento de métricas para entender qué contenido funciona y por qué.'
  }
]

const Services = () => {
  const gridRef = useStaggerReveal('.offering__card')

  return (
    <section id='servicios'>
      <h3>Cómo puedo sumar</h3>
      <h2>Lo que aporto a un equipo de marketing</h2>
      <p className='section__lead'>
        No busco proyectos freelance: busco un equipo del que aprender y al que aportar.
        Esto es lo que puedo poner sobre la mesa desde el primer día.
      </p>
      <div className="container offerings__grid" ref={gridRef}>
        {offerings.map((o, i) => (
          <article className='offering__card' key={i}>
            <div className='offering__icon'>{o.icon}</div>
            <div>
              <h4>{o.title}</h4>
              <p>{o.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
