import React, { useRef as UseRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp, BsTiktok } from 'react-icons/bs';
import { FiDownload, FiEye } from 'react-icons/fi';
import CV from '../../assets/SaraiGarcia_CV.pdf';
import emailjs from 'emailjs-com';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Contact = () => {
  const form = UseRef();
  const sectionRef = useScrollReveal()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xvvllzi', 'template_xgc2pzq', form.current, 'xHMjLPCD6KlMqp82s')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h3 className='text-light'>¿Hablamos?</h3>
      <h2>Conmigo</h2>
      <p className='section__lead contact__intro'>
        Estoy buscando una oportunidad para crecer en Community Management y aportar
        creatividad, organización y una comunicación cercana a un equipo de marketing.
      </p>
      <div className="container contact__container" ref={sectionRef}>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>sarairgv29@gmail.com</h6>
            <a href="mailto:sarairgv29@gmail.com" target='_blank' rel='noreferrer'>Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h6>+57 3014030939</h6>
            <a href="https://api.whatsapp.com/send?phone=573014030939" target='_blank' rel='noreferrer'>Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsTiktok className='contact__option-icon' />
            <h4>TikTok</h4>
            <h6>@saraisrgv</h6>
            <a href="https://www.tiktok.com/@saraisrgv" target='_blank' rel='noreferrer'>Ver perfil</a>
          </article>
          <div className='contact__cv'>
            <a href={CV} download='Sarai_Garcia_CV.pdf' className='btn btn-cv'><FiDownload /> Descargar CV</a>
            <a href={CV} target='_blank' rel='noreferrer' className='btn btn-cv'><FiEye /> Ver CV</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor='contact-name' className='sr-only'>Tu nombre completo</label>
          <input id='contact-name' type="text" name='name' placeholder='Tu nombre completo' autoComplete='name' required />

          <label htmlFor='contact-email' className='sr-only'>Tu email</label>
          <input id='contact-email' type="email" name="email" placeholder='Tu email' autoComplete='email' required />

          <label htmlFor='contact-message' className='sr-only'>Tu mensaje</label>
          <textarea id='contact-message' name="message" cols="30" rows="8" placeholder='Tu mensaje' required></textarea>

          <button type='submit' className='btn btn-primary contact__submit'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
