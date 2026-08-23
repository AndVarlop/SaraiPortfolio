import React from 'react'
import './skills.css'
import { BiCheck } from 'react-icons/bi'
import { useStaggerReveal } from '../../hooks/useScrollReveal'

const skillGroups = [
  {
    title: 'Habilidades digitales',
    items: [
      'Creación de contenido',
      'Copywriting',
      'Redes sociales',
      'Planificación de contenido',
      'Community Management',
      'Análisis básico de métricas',
      'Diseño de contenido (Canva)'
    ]
  },
  {
    title: 'Habilidades profesionales',
    items: [
      'Atención al cliente',
      'Comunicación escrita y verbal',
      'Organización',
      'Trabajo en equipo',
      'Resolución de problemas',
      'Orientación a resultados',
      'Empatía',
      'Gestión del tiempo'
    ]
  }
]

const tools = [
  { name: 'Excel / Google Sheets', level: 'Intermedio' },
  { name: 'CRM', level: 'Intermedio' },
  { name: 'Canva', level: 'En formación' },
  { name: 'CapCut', level: 'En formación' },
  { name: 'Meta Business Suite', level: 'En formación' },
  { name: 'Instagram', level: 'Básico' },
  { name: 'Facebook', level: 'Básico' },
  { name: 'TikTok', level: 'Básico' },
  { name: 'ChatGPT / IA generativa', level: 'En formación' }
]

const levelClass = {
  'Intermedio': 'level--mid',
  'Básico': 'level--basic',
  'En formación': 'level--learning'
}

const Skills = () => {
  const gridRef = useStaggerReveal('.skill')
  const toolsRef = useStaggerReveal('.tool')

  return (
    <section id='habilidades'>
      <h3>Lo que sé hacer</h3>
      <h2>Habilidades</h2>

      <div className="container skills__container" ref={gridRef}>
        {skillGroups.map((group, i) => (
          <article className="skill" key={i}>
            <div className="skill__head">
              <h3>{group.title}</h3>
            </div>
            <ul className="skill__list">
              {group.items.map((item, j) => (
                <li key={j}>
                  <BiCheck className='skill__list-icon' />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className='container tools__wrap'>
        <h4>Herramientas</h4>
        <p className='section__lead tools__lead'>
          Con honestidad sobre el nivel real de cada una: solo marco como "intermedio" lo que
          he usado en el trabajo, y como "en formación" lo que estoy aprendiendo ahora.
        </p>
        <div className='tools__grid' ref={toolsRef}>
          {tools.map((t, i) => (
            <div className='tool' key={i}>
              <span>{t.name}</span>
              <span className={`tag-pill tool__level ${levelClass[t.level]}`}>{t.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
