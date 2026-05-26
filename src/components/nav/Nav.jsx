import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiLibrary, BiSolidContact, BiSolidUser } from 'react-icons/bi'
import { MdMiscellaneousServices } from 'react-icons/md'
import { ImHome3 } from 'react-icons/im'
import { FaGraduationCap } from 'react-icons/fa'

const Nav = () => {
  return (
    <nav>
      <a href="#"><ImHome3 /></a>
      <a href="#about"><BiSolidUser /></a>
      <a href="#experience"><BiLibrary /></a>
      <a href="#education"><FaGraduationCap /></a>
      <a href="#services"><MdMiscellaneousServices /></a>
      <a href="#contact"><BiSolidContact /></a>
    </nav>
  )
}

export default Nav
