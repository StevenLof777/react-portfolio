import React, { useState } from 'react'
import "./Footer.scss"

import { images } from '../../constants'
import { AppWrap, MotionWrap } from "../../wrapper"
import { client } from "../../client"

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', messag: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;

    setFormData({...formData, [name]:value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true)
    })
  }
  
  return (
    <>
      <h2 className='head-text'>
        Contact
      </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="Email"/>
          <a href="mail:stevenlofquist7@gmail.com" className="p-text">stevenlofquist7@gmail</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="Email"/>
          <a href="tel: +1 (731) 336-6912" className="p-text">+1 (731) 336-6912</a>
        </div>
      </div>

      {!isFormSubmitted ? 
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}></input>
          </div>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}></input>
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message} onChange={handleChangeInput}
              name="message"
            >

            </textarea>

          </div>
            <button type="button" className='p-text' onClick={handleSubmit}>{loading? "Sending" : "Send Message"}</button>
        </div>
      : 
        <div>
          <h3 className='head-text'>Submitted </h3>
        </div>
      }  
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)
