import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>Habilidades</h2>
      <h3>...</h3>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Apoyo en Entornos Veterinarios</h3> 
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experiencia como asistente veterinario durante prácticas, colaborando en el manejo animal
                 y tareas clínicas básicas. Reconocido por la responsabilidad, empatía y trabajo en equipo.</p>
            </li>
          </ul>
        </article>
        {/* END OF Apoyo en Entornos Veterinarios*/ }
        <article className="service">
          <div className="service__head">
            <h3>Atención al Cliente y Soporte Administrativo</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experiencia en atención al cliente multicanal (teléfono, chat y correo), 
                con enfoque en el mercado español. Resolución de incidencias, seguimiento de casos 
                y manejo de CRM y herramientas ofimáticas como Excel.. </p>
            </li>
            
          </ul>
        </article>
        {/* END OF Atención al Cliente y Soporte Administrativo*/ }
        <article className="service">
          <div className="service__head">
            <h3>Gestión de Ventas y Back Office</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Seguimiento de ventas, recuperación de clientes y apoyo a equipos comerciales mediante 
                análisis y control de datos. Dominio de herramientas internas y hojas de cálculo para generar 
                reportes y asegurar trazabilidad.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF Gestión de Ventas y Back Office*/ }
        <article className="service">
          <div className="service__head">
            <h3>Asistencia en Procesos Educativos</h3> 
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Apoyo en aulas escolares como auxiliar docente, con habilidades para trabajar con niños 
                en etapa primaria. Preparación de materiales, acompañamiento en clases y refuerzo académico 
                individual.</p>
            </li>
          </ul>
        </article>
        {/* END OF Asistencia en Procesos Educativos*/ }
      </div>
    </section>
  )
}

export default Services