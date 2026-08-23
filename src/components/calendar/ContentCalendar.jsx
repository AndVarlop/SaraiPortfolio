import React, { useState } from 'react'
import './calendar.css'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const week = [
  {
    day: 'Lunes', pillar: 'Educativo', format: 'Carrusel',
    topic: 'Tip educativo relacionado con el sector de la marca',
    copy: 'Empezamos la semana con un dato que quizás no conocías 👀',
    cta: 'Guarda este post', objective: 'Educar y aportar valor', platform: 'Instagram / Facebook'
  },
  {
    day: 'Martes', pillar: 'Interacción', format: 'Story con encuesta',
    topic: 'Pregunta directa a la audiencia',
    copy: 'Cuéntanos en un clic 👇',
    cta: 'Responde la encuesta', objective: 'Generar interacción', platform: 'Instagram Stories'
  },
  {
    day: 'Miércoles', pillar: 'Entretenimiento', format: 'Post o Reel corto',
    topic: 'Contenido de tendencia adaptado a la marca',
    copy: 'Esto nos representa 😂',
    cta: 'Etiqueta a alguien que le pase esto', objective: 'Aumentar alcance y conexión emocional', platform: 'Instagram / TikTok'
  },
  {
    day: 'Jueves', pillar: 'Producto', format: 'Post de producto o servicio',
    topic: 'Beneficio o característica destacada',
    copy: 'La razón por la que tantos vuelven 🙌',
    cta: 'Escríbenos para más info', objective: 'Impulsar conversión', platform: 'Instagram / Facebook'
  },
  {
    day: 'Viernes', pillar: 'Comunidad', format: 'Post de comunidad',
    topic: 'Testimonios o momentos reales de la comunidad',
    copy: 'Así se ve nuestra comunidad esta semana 💜',
    cta: 'Comparte tu experiencia', objective: 'Fortalecer el sentido de pertenencia', platform: 'Instagram'
  },
  {
    day: 'Sábado', pillar: 'Entretenimiento', format: 'Reel',
    topic: 'Contenido dinámico o tutorial corto',
    copy: 'Dale play y no lo sueltes 🎬',
    cta: 'Sigue para más contenido así', objective: 'Aumentar alcance y seguidores', platform: 'Instagram / TikTok'
  },
  {
    day: 'Domingo', pillar: 'Comunidad', format: 'Story reflexiva',
    topic: 'Cierre de semana con mensaje cercano',
    copy: 'Gracias por acompañarnos esta semana ✨',
    cta: 'Cuéntanos tu momento favorito', objective: 'Cercanía y fidelización', platform: 'Instagram Stories'
  }
]

const ContentCalendar = () => {
  const [selected, setSelected] = useState(0)
  const ref = useScrollReveal()
  const active = week[selected]

  return (
    <div className='container calendar__wrap' ref={ref}>
      <div className='calendar__intro'>
        <h4>Calendario editorial de ejemplo</h4>
        <p className='text-light'>
          Así organizaría una semana de contenido tipo, combinando distintos pilares para
          mantener el equilibrio entre educar, entretener, vender y generar comunidad.
          Haz clic en un día para ver el detalle.
        </p>
      </div>

      <div className='calendar__days'>
        {week.map((d, i) => (
          <button
            key={d.day}
            className={`calendar__day ${i === selected ? 'is-active' : ''}`}
            onClick={() => setSelected(i)}
          >
            <span className='calendar__day-name'>{d.day}</span>
            <span className='calendar__day-pillar'>{d.pillar}</span>
          </button>
        ))}
      </div>

      <div className='calendar__detail'>
        <div className='calendar__detail-row'>
          <span className='tag-pill'>{active.day}</span>
          <span className='tag-pill tag-pill--outline'>{active.pillar}</span>
        </div>
        <dl className='calendar__detail-grid'>
          <div><dt>Formato</dt><dd>{active.format}</dd></div>
          <div><dt>Tema</dt><dd>{active.topic}</dd></div>
          <div><dt>Copy</dt><dd>“{active.copy}”</dd></div>
          <div><dt>CTA</dt><dd>{active.cta}</dd></div>
          <div><dt>Objetivo</dt><dd>{active.objective}</dd></div>
          <div><dt>Plataforma</dt><dd>{active.platform}</dd></div>
        </dl>
      </div>
    </div>
  )
}

export default ContentCalendar
