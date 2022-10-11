import React from 'react'
import "./Footer.scss"

import { images } from '../../constants/images'
import { AppWrap, MotionWrap } from "../../wrapper"
import { useForm, ValidationError } from '@formspree/react';

import './Footer.scss'

const Footer = () => {
  const [state, handleSubmit] = useForm("xrgjkzew");
  return (
    <>
      <h2 className='head-text '>
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

    {state.succeeded ?
    <h2 className='head-text contact-succeed'>Thanks for getting in touch!</h2>
    :  
    <form onSubmit={handleSubmit} className='app__footer-form app__flex'>
      <div className='app__flex'>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
        className='p-text'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div>
        <textarea
          className='p-text'
          id="message"
          name="message"
          placeholder='Message'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting}>
        {state.submitting ?
        "Submitting"
        :
        "Submit"}
      </button>
    </form>
  }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)
