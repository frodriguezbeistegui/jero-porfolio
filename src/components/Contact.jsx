import React from 'react'
import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="section-contact">
    <div className="row">
      <div className="col-1-of-4">
        <a href='https://www.instagram.com/jerofbados' target="_blank" rel="noreferrer" className='contact-box__link'>
          <div className="contact-box">
            <BsInstagram />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Instagram
            </h3>
          </div>
        </a>
      </div>
      <div className="col-1-of-4">
        <a href='https://api.whatsapp.com/send?phone=5493541212206' target="_blank" rel="noreferrer" className='contact-box__link'>
         <div className="contact-box">
            <BsWhatsapp />
            <h3 className="heading-tertiary u-margin-bottom-small">
                WhatsApp
            </h3>
          </div>
        </a>
      </div>

      <div className="col-1-of-4">
      <a href='mailto:jerobados@gmail.com' target="_blank" rel="noreferrer" className='contact-box__link'>
          <div className="contact-box">
            <FiMail />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Email
            </h3>
          </div>
        </a>
      </div>

      <div className="col-1-of-4">
        <a href='https://www.linkedin.com/in/jero-bados/' target="_blank" rel="noreferrer" className='contact-box__link'>
          <div className="contact-box">
            <BsLinkedin />
            <h3 className="heading-tertiary u-margin-bottom-small">
              LinkedIn
            </h3>
          </div>
        </a>
      </div>
    </div>
  </section>
  )
}
