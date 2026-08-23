import React from 'react'
import CV from '../../assets/Sarai_CV.pdf'
import { FiDownload, FiEye } from 'react-icons/fi'

const CTA = () => {
  return (
    <div className='cta'>
      <div className='cta__row'>
        <a href="#proyectos" className='btn btn-primary'>Ver mi trabajo</a>
        <a href="#experience" className='btn'>Conocer mi experiencia</a>
        <a href="#contact" className='btn'>Contactarme</a>
      </div>
      <div className='cta__row cta__row-cv'>
        <a href={CV} download className='btn btn-cv'><FiDownload /> Descargar CV</a>
        <a href={CV} target='_blank' rel='noreferrer' className='btn btn-cv'><FiEye /> Ver CV</a>
      </div>
    </div>
  )
}

export default CTA
