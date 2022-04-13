import React from 'react'
import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="section-contact">
    <div className="row">
      <div className="col-1-of-4">
        <div className="contact-box">
          <BsInstagram />
          <h3 className="heading-tertiary u-margin-bottom-small">
            Instagram
          </h3>
        </div>
      </div>
      <div className="col-1-of-4">
        <div className="contact-box">
        <BsWhatsapp />
            <h3 className="heading-tertiary u-margin-bottom-small">
                WhatsApp
            </h3>
        </div>
      </div>

      <div className="col-1-of-4">
        <div className="contact-box">
          <FiMail />
          <h3 className="heading-tertiary u-margin-bottom-small">
            Email
          </h3>
        </div>
      </div>

      <div className="col-1-of-4">
        <div className="contact-box">
         <BsLinkedin />
          <h3 className="heading-tertiary u-margin-bottom-small">
            LinkedIn
          </h3>
        </div>
      </div>
    </div>
  </section>
  )
}
