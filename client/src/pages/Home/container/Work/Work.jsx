import React, {useState} from 'react';
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';

import { AppWrap } from '../../../../wrapper';
import { MotionWrap } from '../../../../wrapper';

import "./Work.scss"

import {projects} from '../../../../data.js'

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
          {projects.map((project)=>(

            <Link className='bruh' to="/dopehoroscope">
              <div className="app__work-item app__flex">
                  <div className="app__work-img app__flex">
                    <img src={project.imageUrl} alt="place holder img"/>
                    <motion.div
                      whileHover={{ opacity: [0, 1] }}
                      transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                      className=" app__flex"
                    >
                    </motion.div>
                  </div>
                
                <div className='app__work-content app__flex'>
                  <h4 className='bold-text'>{project.title}</h4>
                  <p className='p-text' style={{marginTop: 10}}>{project.description}</p>

                  <div className="app__work-tag app__flex">
                      <p className="p-text">{project.tag}</p>
                  </div>
                </div>

              </div>
            </Link>
      ))}
        </motion.div>



    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'work',
  'app__whitebg'
);