import React, { useRef as UseRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const contact = () => {
  const form = UseRef();
  const sectionRef = useScrollReveal()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xvvllzi', 'template_xgc2pzq', form.current, 'xHMjLPCD6KlMqp82s')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h3 className='text-light'>Ponte en contacto</h3>
      <h2>Conmigo</h2>
      <div className="container contact__container" ref={sectionRef}>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>sarairgv29@gmail.com</h6>
            <a href="mailto:sarairgv29@gmail.com" target='_blank'>Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h6>Saraí Garcia</h6>
            <a href="https://m.me/saraisrgv" target='_blank'>Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h6>+57 3014030939</h6>
            <a href="https://api.whatsapp.com/send?phone=573014030939" target='_blank'>Enviar mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tu nombre completo' required />
          <input type="text" name="email" placeholder='Tu email' required />
          <textarea name="message" cols="30" rows="8" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default contact
