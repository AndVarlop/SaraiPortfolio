import React, { useEffect, useRef } from 'react'
import { IoClose } from 'react-icons/io5'

const ProjectModal = ({ project, onClose }) => {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className='modal__overlay' onClick={onClose}>
      <div
        className='modal__panel case__panel'
        role='dialog'
        aria-modal='true'
        aria-label={`Caso de estudio: ${project.title}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className='modal__close' onClick={onClose} aria-label='Cerrar'><IoClose /></button>

        <span className={`tag-pill ${project.real ? 'tag-pill--real' : ''}`}>{project.tag}</span>
        <h2 className='case__title'>{project.title}</h2>
        <p className='case__category text-light'>{project.category}</p>

        {project.real && project.instagram && (
          <p className='case__instagram'>
            <a href={project.instagramUrl} target='_blank' rel='noreferrer'>{project.instagram}</a> — cuenta real de la marca (cliente potencial)
          </p>
        )}

        {project.coverImages && (
          <div className='case__real-gallery'>
            {project.coverImages.map((img, i) => (
              <img src={img} alt={`Foto real del negocio de ${project.title}`} key={i} loading='lazy' />
            ))}
          </div>
        )}

        <div className='case__grid'>
          <div className='case__block'>
            <h4>Problema</h4>
            <p>{project.problem}</p>
          </div>
          <div className='case__block'>
            <h4>Objetivo</h4>
            <p>{project.objective}</p>
          </div>
          <div className='case__block'>
            <h4>Audiencia</h4>
            <p>{project.audience}</p>
          </div>
          <div className='case__block'>
            <h4>Estrategia</h4>
            <p>{project.strategy}</p>
          </div>
        </div>

        <div className='case__section'>
          <h4>Pilares de contenido</h4>
          <div className='case__pillars'>
            {project.pillars.map((p, i) => <span className='tag-pill tag-pill--outline' key={i}>{p}</span>)}
          </div>
        </div>

        <div className='case__section'>
          <h4>{project.real ? 'Contenido propuesto' : 'Contenido creado'}</h4>
          <div className='case__pieces'>
            {project.posts.map((post, i) => (
              <div className='case__piece' key={`post-${i}`}>
                <span className='tag-pill tag-pill--muted'>{post.format}</span>
                <strong>{post.title}</strong>
                <p className='case__copy'>“{post.copy}”</p>
                <p className='case__cta'>CTA: {post.cta}</p>
              </div>
            ))}
            {project.stories?.map((s, i) => (
              <div className='case__piece' key={`story-${i}`}>
                <span className='tag-pill tag-pill--muted'>{s.format}</span>
                <strong>{s.title}</strong>
                <p className='case__copy'>“{s.copy}”</p>
              </div>
            ))}
            {project.carousel && (
              <div className='case__piece'>
                <span className='tag-pill tag-pill--muted'>Carrusel</span>
                <strong>{project.carousel.title}</strong>
                <ol className='case__slides'>
                  {project.carousel.slides.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
              </div>
            )}
            {project.reel && (
              <div className='case__piece'>
                <span className='tag-pill tag-pill--muted'>Reel</span>
                <strong>{project.reel.title}</strong>
                <p className='case__copy'>{project.reel.desc}</p>
              </div>
            )}
          </div>
        </div>

        {project.hashtags && (
          <div className='case__section'>
            <h4>Hashtags</h4>
            <div className='case__pillars'>
              {project.hashtags.map((h, i) => <span className='tag-pill tag-pill--outline' key={i}>{h}</span>)}
            </div>
          </div>
        )}

        <div className='case__section'>
          <h4>KPIs que mediría</h4>
          <p className='case__kpi-note text-light'>
            {project.real
              ? (project.note || 'No se hizo una medición formal de resultados en este proyecto. Estos son los indicadores con los que evaluaría su desempeño:')
              : 'Al ser un proyecto conceptual, no hay resultados reales que mostrar. Estos son los indicadores con los que evaluaría el desempeño de esta estrategia:'}
          </p>
          <div className='case__pillars'>
            {project.kpis.map((k, i) => <span className='tag-pill' key={i}>{k}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
