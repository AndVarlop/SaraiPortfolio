import React, { useEffect, useRef } from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/AvatarSaru.jpg'
import HeaderSocials from './HeaderSocials'
import useTypewriter from '../../hooks/useTypewriter'
import { animate, stagger } from 'animejs'

const ROLES = ['Back Office', 'Auxiliar Veterinaria', 'Atención al Cliente', 'Gestión de Datos']

const Header = () => {
  const typedRole = useTypewriter(ROLES)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      const children = Array.from(contentRef.current.children)
      children.forEach(el => { el.style.opacity = '0' })
      animate(children, {
        opacity: [0, 1],
        translateY: [30, 0],
        delay: stagger(150),
        duration: 900,
        ease: 'outExpo'
      })
    }
    if (imageRef.current) {
      imageRef.current.style.opacity = '0'
      animate(imageRef.current, {
        opacity: [0, 1],
        scale: [0.82, 1],
        duration: 1100,
        ease: 'outElastic(1, .6)',
        delay: 400
      })
    }
  }, [])

  return (
    <header>
      <div className="container header_container">
        <div className='hero__content' ref={contentRef}>
          <h2>Hola, soy</h2>
          <h1>Saraí Garcia</h1>
          <div className='hero__typewriter'>
            <span className='hero__typed'>{typedRole}</span>
            <span className='hero__cursor'>|</span>
          </div>
          <CTA />
          <HeaderSocials />
        </div>
        <div className="me" ref={imageRef}>
          <img src={ME} alt="Saraí" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
