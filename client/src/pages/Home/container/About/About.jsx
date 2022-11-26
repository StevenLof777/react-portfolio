import React from 'react'
import { motion } from "framer-motion";

import "./About.scss";
import {AppWrap, MotionWrap} from '../../../../wrapper';

// import { abouts } from '../../../../assets';

const About = () => {

  return (
    <>
      <h2 className="head-text">
          About Me
      </h2>

      <motion.div 
        className='app__about-me'
        whileInView={{x: [0, 0], opacity: [0,1]}}
        transition={{duration: 0.5}}
      >
        Full stack developer and former CNC programmer with experience in coding and making ideas come to life. 
        Fascinated by this ever-evolving sector and creating projects that people anywhere may use.
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__primarybg'
);