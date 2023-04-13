import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {MdMessage} from 'react-icons/md'
/* import {BsWhatsapp} from 'react-icons/bs'  */
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zxmb3qo', 'template_tjqtq1e', form.current, 'p1mv73BHxYEHjDcOq')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>allenlopes23.work@gmail.com</h5>
            <a href="mailto:allenlopes23.work@gmail.com" target="_blank" rel="noreferrer"> Send a Message</a>
          </article>

          <article className='contact__option'>
            <MdMessage className='contact__option-icon'/>
            <h4>LinkedIn Message</h4>
            <h5>Allen Lopes</h5>
            <a href="https://www.linkedin.com/in/allenlopes23/" target="_blank" rel="noreferrer"> Send a Message</a>
          </article>

        {/*  <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(+91)9970773770</h5>
            <a href="https://wa.me/phone?text=Hey%20Allen,%20I%20want%20to%20talk%20regarding%20your%20Portfolio." target="_blank" rel="noreferrer"> Send a Message</a>
          </article>
        */}
        </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact