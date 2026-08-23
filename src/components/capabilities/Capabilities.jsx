import React from 'react'
import './capabilities.css'
import {
  MdOutlineTipsAndUpdates,
  MdOutlineDesignServices,
  MdOutlineCalendarMonth,
  MdOutlineAnalytics
} from 'react-icons/md'
import { FaRegPenToSquare, FaRegComments } from 'react-icons/fa6'
import { BiSupport } from 'react-icons/bi'
import { HiOutlineSparkles } from 'react-icons/hi2'
import { useStaggerReveal } from '../../hooks/useScrollReveal'

const capabilities = [
  {
    icon: <MdOutlineTipsAndUpdates />,
    title: 'Estrategia de contenido',
    desc: 'Planificación de contenidos según objetivos de marca y audiencia.',
    tag: 'En formación'
  },
  {
    icon: <MdOutlineDesignServices />,
    title: 'Creación de contenido',
    desc: 'Posts, carruseles, stories, reels y piezas visuales para redes.',
    tag: 'En formación'
  },
  {
    icon: <FaRegPenToSquare />,
    title: 'Copywriting',
    desc: 'Redacción de captions, llamados a la acción y textos por plataforma.',
    tag: 'En formación'
  },
  {
    icon: <FaRegComments />,
    title: 'Gestión de comunidad',
    desc: 'Respuesta a comentarios y mensajes con comunicación cercana y profesional.',
    tag: 'Con experiencia real'
  },
  {
    icon: <BiSupport />,
    title: 'Atención al cliente digital',
    desc: 'Experiencia real atendiendo clientes y resolviendo sus necesidades.',
    tag: 'Con experiencia real'
  },
  {
    icon: <MdOutlineCalendarMonth />,
    title: 'Calendario de contenidos',
    desc: 'Organización de publicaciones y planificación semanal o mensual.',
    tag: 'En formación'
  },
  {
    icon: <MdOutlineAnalytics />,
    title: 'Análisis de métricas',
    desc: 'Interpretación básica de alcance, engagement y rendimiento.',
    tag: 'En formación'
  },
  {
    icon: <HiOutlineSparkles />,
    title: 'Identidad visual',
    desc: 'Piezas coherentes con la personalidad y el tono de una marca.',
    tag: 'En formación'
  }
]

const Capabilities = () => {
  const gridRef = useStaggerReveal('.capability__card')

  return (
    <section id='capacidades'>
      <h3>Lo que puedo hacer</h3>
      <h2>Por tu marca</h2>
      <p className='section__lead'>
        Un perfil honesto: habilidades que ya he demostrado en el trato con clientes y
        habilidades digitales que estoy construyendo activamente, proyecto a proyecto.
      </p>
      <div className="container capabilities__grid" ref={gridRef}>
        {capabilities.map((c, i) => (
          <article className='capability__card' key={i}>
            <div className='capability__icon'>{c.icon}</div>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
            <span className={`tag-pill ${c.tag === 'Con experiencia real' ? '' : 'tag-pill--outline'}`}>{c.tag}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Capabilities
