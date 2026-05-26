import React from 'react'
import './education.css'
import { FaGraduationCap, FaStar } from 'react-icons/fa'
import { useStaggerReveal } from '../../hooks/useScrollReveal'

const studies = [
  {
    title: 'Técnico Auxiliar Veterinario',
    institution: 'Centro INCA',
    location: 'Barranquilla',
    year: '2025',
    highlights: [
      'Sólida base teórico-práctica en anatomía y farmacología',
      'Prácticas clínicas en consulta, hospitalización y laboratorio',
      'Cuidados postoperatorios y protocolos veterinarios',
      'Reconocimiento por desempeño y compromiso con el bienestar animal'
    ]
  },
  {
    title: 'Técnico en Operaciones Comerciales en Retail',
    institution: 'SENA',
    location: 'Barranquilla',
    year: '2021',
    highlights: [
      'Promedio académico dentro del 15% superior del curso',
      'Proyecto final enfocado en optimización de procesos de venta',
      'Reconocimiento por desempeño en prácticas profesionales en tienda',
      'Formación en gestión comercial y atención al cliente'
    ]
  }
]

const Education = () => {
  const cardsRef = useStaggerReveal('.edu__card')

  return (
    <section id='education'>
      <h3>Formación académica</h3>
      <h2>Educación</h2>
      <div className="container edu__container" ref={cardsRef}>
        {studies.map((study, i) => (
          <div className="edu__card" key={i}>
            <div className="edu__card-header">
              <FaGraduationCap className='edu__icon' />
              <div>
                <h3>{study.title}</h3>
                <h4>{study.institution} — {study.location}</h4>
                <span className="edu__year">{study.year}</span>
              </div>
            </div>
            <ul className="edu__list">
              {study.highlights.map((h, j) => (
                <li key={j}>
                  <FaStar className='edu__star' />
                  <p>{h}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
