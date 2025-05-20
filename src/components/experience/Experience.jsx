import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h3>Que Habilidades Tengo</h3>
      <h2>Mi Experiencia</h2>
      <div className="container experience__container">
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h2>CENTRO DE BIENESTAR ANIMAL</h2><br />
                <h4>2024 - 2025</h4>
                <small className='text-light'>- Apoyo en tareas clínicas y de manejo animal durante 6 meses de 
                  prácticas en entorno veterinario. Destacado por la responsabilidad, compromiso y rápida 
                  adaptación al trabajo en equipo, recibiendo excelentes valoraciones por parte del personal a cargo.</small>
              </div>
            </article>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h2>MAJOREL COLOMBIA</h2><br />
                <h4>2023 - 2024</h4>
                <small className='text-light'>- Encargado de brindar soporte a clientes del mercado español 
                  mediante canales como chat, correo y llamadas. Gestión de consultas, resolución de incidencias 
                  y seguimiento de casos, garantizando una comunicación efectiva y adaptada al contexto cultural 
                  y lingüístico. Manejo de CRM para el registro y trazabilidad de interacciones.     </small>
              </div>
            </article>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h2>CLARO HOGAR ALIADO ALTYCOM</h2><br />
                <h4>2021 - 2023</h4>
                <small className='text-light'>- Encargado del seguimiento y recuperación de ventas realizadas
                   por el equipo comercial, utilizando herramientas internas y Excel para el análisis y control
                    de datos. Apoyo clave en la optimización de procesos y cumplimiento de objetivos comerciales.</small>
              </div>
            </article>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h2>UNIVERSIDAD AUTONOMA DEL CARIBE</h2><br />
                <h4>2021 - 2021</h4>
                <small className='text-light'>- Responsable de contactar estudiantes para gestionar procesos
                   de matrícula. Registro y actualización de datos en informes mediante Excel, asegurando precisión
                    y seguimiento adecuado de cada caso.</small>
              </div>
            </article>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h2>ARMILY SPORT</h2><br />
                <h4>2019 - 2020</h4>
                <small className='text-light'>- Asesora comercial en local comercial vendiendo
                  productos deportivos.</small>
              </div>
            </article>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <h2>COLEGIO JOSE CASTILLO BOLIVAR</h2><br />
                <h4>2018 - 2019</h4>
                <small className='text-light'>- Apoyo en actividades académicas y formativas en grados 1°, 2° y 3°. 
                  Colaboración en la preparación de materiales, acompañamiento en clase y refuerzo individual a 
                  estudiantes, fomentando un ambiente de aprendizaje positivo y participativo.</small>
              </div>
            </article>
          </div> 
      </div>
    </section>
  )
}

export default Experience