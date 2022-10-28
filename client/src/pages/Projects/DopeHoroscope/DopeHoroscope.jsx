import React from 'react'
import { Header } from "./container";
import { SlideShow } from '../../../components';

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
        <Header/>
        <SlideShow
          images = {assets}
        />
        {/* <Skills/>
        <Work/>
        <Footer/> */}
    </>
  )
}

export default DopeHoroscope;