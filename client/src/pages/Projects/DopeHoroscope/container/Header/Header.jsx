import React from 'react'
import {motion} from "framer-motion"
import {AppWrap} from '../../../../../wrapper';
import "./Header.scss";

import {projects} from '../../../../../data';

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{y: [0, 0], opacity: [0,1]}}
        transition={{duration: 0.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className='badge-cmp app__flex'>
              <h1 className="header-text">{projects[0].title}</h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{y: [0, 0], opacity: [0,1]}}
        transition={{duration: 0.5}}
        >
        <div className='tag-cmp '>
          <p className='header-p-text'>{projects[0].description}</p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{y: [0, 0], opacity: [0,1]}}
        transition={{duration: 0.5}}
        className=""
        >
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')