import React from 'react'
import './experience.css'
import { useStaggerReveal } from '../../hooks/useScrollReveal'

const jobs = [
  {
    company: 'COVISIAN',
    period: '2025 – 2026',
    desc: 'Atención al cliente para el mercado español, brindando soporte, gestionando consultas y resolviendo incidencias. Análisis de requerimientos de clientes y generación de especificaciones claras conforme a estándares de calidad.',
    skills: ['Comunicación con clientes', 'Resolución de incidencias', 'Comunicación escrita', 'Seguimiento de casos']
  },
  {
    company: 'CENTRO DE BIENESTAR ANIMAL',
    period: '2024 - 2025',
    desc: 'Apoyo en tareas clínicas y de manejo animal durante 6 meses de prácticas. Asistencia en consultas, preparación de quirófano, manejo seguro de animales y organización de la información clínica. Reconocida por responsabilidad y trabajo en equipo.',
    skills: ['Organización de información', 'Trabajo en equipo', 'Atención al detalle', 'Manejo de casos']
  },
  {
    company: 'MAJOREL COLOMBIA · CLARO HOGAR',
    period: '2023 - 2024',
    desc: 'Soporte multicanal (chat, correo y llamadas) para clientes del mercado español. Gestión de consultas, resolución de incidencias, seguimiento de casos y registro en CRM con trazabilidad de interacciones.',
    skills: ['Comunicación multicanal', 'CRM', 'Seguimiento de casos', 'Resolución de incidencias']
  },
  {
    company: 'ALIADO ALTYCOM',
    period: '2021 - 2023',
    desc: 'Back Office para seguimiento y recuperación de ventas del equipo comercial. Elaboración y mantenimiento de reportes en Excel, control de datos y trazabilidad de operaciones comerciales.',
    skills: ['Seguimiento comercial', 'Excel', 'Organización', 'Reportes']
  },
  {
    company: 'UNIVERSIDAD AUTÓNOMA DEL CARIBE',
    period: '2021',
    desc: 'Agente de call center encargada de contactar estudiantes para procesos de matrícula y elaborar informes en Excel con la información recopilada.',
    skills: ['Comunicación telefónica', 'Organización', 'Excel']
  },
  {
    company: 'ARMILY SPORT',
    period: '2019 - 2020',
    desc: 'Asesora comercial en punto de venta ofreciendo asesoramiento personalizado sobre productos deportivos y acompañando al cliente durante todo el proceso de compra.',
    skills: ['Ventas', 'Comunicación', 'Asesoramiento al cliente', 'Conversión']
  },
  {
    company: 'COLEGIO JOSÉ CASTILLO BOLÍVAR',
    period: '2018 - 2019',
    desc: 'Auxiliar docente en grados 1°, 2° y 3°, apoyando actividades pedagógicas, preparación de materiales y refuerzo individual a estudiantes.',
    skills: ['Comunicación', 'Organización', 'Paciencia y empatía']
  }
]

const Experience = () => {
  const gridRef = useStaggerReveal('.experience__content')

  return (
    <section id='experience'>
      <h3>Trayectoria</h3>
      <h2>Experiencia laboral</h2>
      <p className='section__lead'>
        No he trabajado antes como Community Manager, pero sí llevo años del lado humano de
        las marcas: hablando con clientes, resolviendo problemas y organizando información.
        Estas son las habilidades que me llevo de cada etapa.
      </p>
      <div className="container experience__container" ref={gridRef}>
        {jobs.map((job, i) => (
          <div className="experience__content" key={i}>
            <article className="experience__details">
              <div>
                <h2>{job.company}</h2>
                <h4>{job.period}</h4>
                <small className='text-light'>{job.desc}</small>
                <div className='experience__tags'>
                  {job.skills.map((s, j) => (
                    <span className='tag-pill tag-pill--muted' key={j}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
