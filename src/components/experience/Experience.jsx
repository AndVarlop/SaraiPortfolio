import React from 'react'
import './experience.css'
import { useStaggerReveal } from '../../hooks/useScrollReveal'

const jobs = [
  {
    company: 'COVISIAN',
    period: '2025 - Actualidad',
    desc: 'Atención al cliente para el mercado español, brindando soporte, gestionando consultas y resolviendo incidencias. Análisis de requerimientos de clientes y generación de especificaciones claras conforme a estándares de calidad.'
  },
  {
    company: 'CENTRO DE BIENESTAR ANIMAL',
    period: '2024 - 2025',
    desc: 'Apoyo en tareas clínicas y de manejo animal durante 6 meses de prácticas. Asistencia en consultas, preparación de quirófano, manejo seguro de animales y organización de la información clínica. Reconocida por responsabilidad y trabajo en equipo.'
  },
  {
    company: 'MAJOREL COLOMBIA',
    period: '2023 - 2024',
    desc: 'Soporte multicanal (chat, correo y llamadas) para clientes del mercado español. Gestión de consultas, resolución de incidencias, seguimiento de casos y registro en CRM con trazabilidad de interacciones.'
  },
  {
    company: 'CLARO HOGAR ALIADO ALTYCOM',
    period: '2021 - 2023',
    desc: 'Back Office para seguimiento y recuperación de ventas del equipo comercial. Elaboración y mantenimiento de reportes en Excel, control de datos y trazabilidad de operaciones comerciales.'
  },
  {
    company: 'UNIVERSIDAD AUTONOMA DEL CARIBE',
    period: '2021',
    desc: 'Agente de call center encargado de contactar estudiantes para procesos de matrícula y elaborar informes en Excel con la información recopilada.'
  },
  {
    company: 'ARMILY SPORT',
    period: '2019 - 2020',
    desc: 'Asesora comercial en punto de venta ofreciendo asesoramiento personalizado sobre productos deportivos y acompañando al cliente durante todo el proceso de compra.'
  },
  {
    company: 'COLEGIO JOSE CASTILLO BOLIVAR',
    period: '2018 - 2019',
    desc: 'Auxiliar docente en grados 1°, 2° y 3°, apoyando actividades pedagógicas, preparación de materiales y refuerzo individual a estudiantes.'
  }
]

const Experience = () => {
  const gridRef = useStaggerReveal('.experience__content')

  return (
    <section id='experience'>
      <h3>Trayectoria</h3>
      <h2>Experiencia Laboral</h2>
      <div className="container experience__container" ref={gridRef}>
        {jobs.map((job, i) => (
          <div className="experience__content" key={i}>
            <article className="experience__details">
              <div>
                <h2>{job.company}</h2>
                <h4>{job.period}</h4>
                <small className='text-light'>{job.desc}</small>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
