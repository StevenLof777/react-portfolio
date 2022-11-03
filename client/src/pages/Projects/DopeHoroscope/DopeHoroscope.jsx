import React from 'react'
import { Header } from "./container";
import { SlideShow } from '../../../components';
import { Helmet } from 'react-helmet';
import About from './container/About/About';
import { images } from '../../../assets';

const image ={  
  url: images.placeholder,
  alt: "placeholder"
}

const assets = [
  image,
  image,
  image,
]


export const DopeHoroscope = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Steven Lofquist | Dope Horoscope</title>
      <link rel="canonical" href="http://stevenlofquist/dopehoroscope.com/" />
    </Helmet>
        <Header/>
        <SlideShow
          images = {assets}
        />
        <About/>
        {/* <Skills/>
        <Work/>
        <Footer/> */}
    </>
  )
}
