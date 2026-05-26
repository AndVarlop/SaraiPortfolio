import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { useStaggerReveal } from '../../hooks/useScrollReveal'

const skills = [
  {
    title: 'Apoyo Veterinario',
    items: [
      'Asistencia en consultas y procedimientos menores',
      'Manejo seguro y amable de animales',
      'Preparación de quirófano y material estéril',
      'Limpieza y desinfección de salas clínicas',
      'Apoyo administrativo en clínica veterinaria'
    ]
  },
  {
    title: 'Atención al Cliente',
    items: [
      'Soporte multicanal: teléfono, chat y correo',
      'Mercado español — Inglés B1+',
      'Resolución de incidencias y seguimiento de casos',
      'Registro y gestión en CRM',
      'Comunicación empática y orientada al usuario'
    ]
  },
  {
    title: 'Back Office & Datos',
    items: [
      'Seguimiento y recuperación de ventas',
      'Elaboración de reportes en Excel',
      'Gestión de bases de datos y aplicativos internos',
      'Trazabilidad de operaciones comerciales',
      'Control y análisis de información'
    ]
  },
  {
    title: 'Habilidades Transversales',
    items: [
      'Trabajo en equipo y comunicación efectiva',
      'Organización y gestión del tiempo',
      'Adaptación rápida a nuevos entornos',
      'Orientación al cumplimiento de objetivos',
      'Empatía y servicio al cliente'
    ]
  }
]

const Services = () => {
  const gridRef = useStaggerReveal('.service')

  return (
    <section id='services'>
      <h2>Habilidades</h2>
      <h3>Lo que puedo aportar</h3>

      <div className="container services__container" ref={gridRef}>
        {skills.map((skill, i) => (
          <article className="service" key={i}>
            <div className="service__head">
              <h3>{skill.title}</h3>
            </div>
            <ul className="service__list">
              {skill.items.map((item, j) => (
                <li key={j}>
                  <BiCheck className='service__list-icon' />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
