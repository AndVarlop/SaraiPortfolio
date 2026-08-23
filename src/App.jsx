import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Capabilities from './components/capabilities/Capabilities'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Capabilities />
      <Projects />
      <Services />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
