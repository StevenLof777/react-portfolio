import React from 'react';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip';

import {AppWrap} from '../../wrapper';
import {MotionWrap} from '../../wrapper'
import "./Skills.scss";

import { skills, experiences } from '../../data.js';

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      
      <div className='app__skills-container'>
        <motion.div className="app__skills-list">
            {skills.map((skills) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2 }}
                className="app__skills-item app__flex"
                key={skills.name}
              >
                <div
                  className="app__flex">
                  <img src={skills.imageUrl} alt={skills.name} />
                </div>
                <p className="p-text">{skills.name}</p>
              </motion.div>
            ))}
          </motion.div>

        <motion.div className="app__skills-exp-works">
            {experiences.map((work) => (
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                  key={work.name}
                >
                  <h4 className='bold-text'>{work.name}</h4>
                  <p className='p-text'>{work.company}</p>
                  
                  <p className='p-text'>{work.desc}</p>

                </motion.div>

                {/* <ReactToolTip
                  id={work.name}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  {work.desc}
                </ReactToolTip> */}
              </>
            ))}
          </motion.div>
        </div>
    </>
  )
}


export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
);