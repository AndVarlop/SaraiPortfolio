import React, { useEffect, useState } from 'react'
import './nav.css'
import { BiSolidUser, BiLibrary, BiSolidContact, BiListCheck } from 'react-icons/bi'
import { MdMiscellaneousServices } from 'react-icons/md'
import { ImHome3 } from 'react-icons/im'
import { FaRegImages } from 'react-icons/fa6'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const links = [
  { href: '#', label: 'Inicio', icon: <ImHome3 /> },
  { href: '#about', label: 'Sobre mí', icon: <BiSolidUser /> },
  { href: '#experience', label: 'Experiencia', icon: <BiLibrary /> },
  { href: '#proyectos', label: 'Proyectos', icon: <FaRegImages /> },
  { href: '#servicios', label: 'Servicios', icon: <MdMiscellaneousServices /> },
  { href: '#habilidades', label: 'Habilidades', icon: <BiListCheck /> },
  { href: '#contact', label: 'Contacto', icon: <BiSolidContact /> }
]

const Nav = () => {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile menu is open, and allow closing with Escape.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
      document.addEventListener('keydown', onKey)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', onKey)
      }
    }
  }, [open])

  // Close the mobile menu automatically if the viewport grows back into desktop size.
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      {/* Desktop / tablet floating dock */}
      <nav className='nav__dock' aria-label='Navegación principal'>
        {links.map((l) => (
          <a href={l.href} key={l.label} aria-label={l.label}>{l.icon}</a>
        ))}
      </nav>

      {/* Mobile hamburger trigger */}
      <button
        className='nav__burger'
        onClick={() => setOpen(true)}
        aria-label='Abrir menú de navegación'
        aria-expanded={open}
        aria-controls='mobile-menu'
      >
        <HiOutlineMenu />
      </button>

      {/* Mobile off-canvas menu */}
      <div
        id='mobile-menu'
        className={`nav__mobile ${open ? 'is-open' : ''}`}
        role='dialog'
        aria-modal='true'
        aria-label='Menú de navegación'
      >
        <div className='nav__mobile-backdrop' onClick={() => setOpen(false)} />
        <div className='nav__mobile-panel'>
          <button
            className='nav__mobile-close'
            onClick={() => setOpen(false)}
            aria-label='Cerrar menú'
          >
            <HiOutlineX />
          </button>

          <span className='nav__mobile-title'>Saraí García</span>

          <ul className='nav__mobile-links'>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  <span className='nav__mobile-icon'>{l.icon}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
