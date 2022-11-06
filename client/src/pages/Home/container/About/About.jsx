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
        Full Stack Developer with background in CNC programming. Recognised as a proactive, positive, and
        persistent problem solver. Team player with a great attitude. Graduate of Full Stack Coding Boot Camp through
        Georgia Tech.
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__primarybg'
);