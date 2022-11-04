import React, { useState } from 'react';

import { motion } from "framer-motion"

import { AppWrap } from '../../../../wrapper';
import { MotionWrap } from '../../../../wrapper';

import DH from './DH';
import TeamManager from './TeamManager';
import KB from './KB';

import "./Work.scss"


const Work = () => {;
  const [ animateCard ] = useState({y: 0, opacity: 1});
  return (
    <>
      <h2 className="head-text">
        Projects
      </h2>
        <motion.div
          animate={animateCard}
          tranistion={{duration: 0.5, delayChildren: 0.5}}
          className="app__work-portfolio"
          whileInView={{x: [0, 0], opacity: [0,1]}}
          >
            <DH/>
            <TeamManager/>
            <KB/>
        </motion.div>
    </>
  )
}


export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'work',
  'app__primarybg'
);