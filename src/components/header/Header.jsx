import React, { useEffect, useRef } from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/AvatarSaru.jpg'
import HeaderSocials from './HeaderSocials'
import useTypewriter from '../../hooks/useTypewriter'
import { animate, stagger } from 'animejs'

const ROLES = ['Community Manager Junior', 'Social Media Assistant', 'Content Assistant', 'Marketing Digital Junior']

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
          <span className='hero__eyebrow'>Hola, soy</span>
          <h1>Saraí García</h1>
          <div className='hero__typewriter'>
            <span className='hero__typed'>{typedRole}</span>
            <span className='hero__cursor'>|</span>
          </div>
          <p className='hero__tagline'>
            Creo contenido, conecto con las personas y ayudo a las marcas a construir
            comunidades que quieran quedarse.
          </p>
          <p className='hero__sub text-light'>
            Vengo del mundo de la atención al cliente y las ventas — hoy quiero aplicar esa
            experiencia escuchando personas a la creación de contenido y la gestión de redes.
          </p>
          <CTA />
          <HeaderSocials />
        </div>
        <div className="me" ref={imageRef}>
          <img src={ME} alt="Saraí García" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
