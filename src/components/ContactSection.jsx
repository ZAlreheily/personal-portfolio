import React from 'react'
import GradientCard from './GradientCard'
import Socials from './Socials'
const ContactSection = () => {
  return (
    <div id='contact-section' data-aos='fade-down' >
      <h2 className='red'>Contact Me</h2>
      <GradientCard classes='contact-me flex'>
        <GradientCard classes='hover-effect flex contact-img-container'>
          <img src="/head.jpg" alt="Ziad Alreheily" className='contact-img' />
        </GradientCard>
        <h2 className='contact-title red'>Ziad Alreheily</h2>
        <p><span className='red'>Email:&emsp;</span><a href='mailto:Ziyad1913@gmail.com'>Ziyad1913@gmail.com</a></p>
        <p><span className='red'>Phone:&emsp;</span><a href="tel:+966507020357">+966 507020357</a></p>
        <Socials />
      </GradientCard>
    </div>
  )
}

export default ContactSection