import React, { useState } from 'react'
import './projects.css'
import projectsData from '../../data/projectsData'
import ProjectModal from './ProjectModal'
import ContentCalendar from '../calendar/ContentCalendar'
import { useStaggerReveal } from '../../hooks/useScrollReveal'
import { FiArrowUpRight } from 'react-icons/fi'

const Projects = () => {
  const [active, setActive] = useState(null)
  const gridRef = useStaggerReveal('.project__card')

  return (
    <section id='proyectos'>
      <h3>Así trabajo</h3>
      <h2>Proyectos de contenido</h2>
      <p className='section__lead'>
        Un caso real con un cliente, y varios proyectos conceptuales que creé para demostrar
        cómo pienso una estrategia de contenido. Cada uno está identificado claramente como
        "Cliente real" o "Proyecto conceptual".
      </p>

      <div className='container projects__grid' ref={gridRef}>
        {projectsData.map((p) => (
          <article className='project__card' key={p.id} onClick={() => setActive(p)}>
            {p.real ? (
              <div className='project__cover project__cover--real'>
                <img src={p.cover} alt={`Feed propuesto para ${p.title}`} />
              </div>
            ) : (
              <div
                className='project__cover'
                style={{ background: `linear-gradient(145deg, ${p.cover.from}, ${p.cover.to})` }}
              >
                <span className='project__emoji'>{p.cover.emoji}</span>

                <div className='project__phone'>
                  <div className='project__phone-notch' />
                  <div className='project__phone-grid'>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span key={i} style={{ background: `linear-gradient(145deg, ${p.cover.from}${i % 2 ? '55' : 'aa'}, ${p.cover.to}${i % 2 ? 'aa' : '55'})` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className='project__body'>
              <span className={`tag-pill ${p.real ? 'tag-pill--real' : ''}`}>{p.tag}</span>
              <h3>{p.title}</h3>
              <small className='text-light'>{p.category}</small>
              <p>{p.summary}</p>
              <div className='project__pillars'>
                {p.pillars.slice(0, 3).map((pl, i) => (
                  <span className='tag-pill tag-pill--outline' key={i}>{pl}</span>
                ))}
              </div>
              <span className='project__link'>Ver caso de estudio <FiArrowUpRight /></span>
            </div>
          </article>
        ))}
      </div>

      <ContentCalendar />

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}

export default Projects
