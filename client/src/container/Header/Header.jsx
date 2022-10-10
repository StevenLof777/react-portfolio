import React from 'react'
import {motion} from "framer-motion"
import { AppWrap } from '../../wrapper'
import "./Header.scss"
import cat from "../../assets/cat-coding.gif"
import pdf from "../../assets/FullStack_Resume_Current.pdf"

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x: [0, 0], opacity: [0,1]}}
        transition={{duration: 1.0}}
        className="app__header-img"
        >
          <img src={cat} alt="cat" className='cat'/>
      </motion.div>

      <motion.div
        whileInView={{y: [0, 0], opacity: [0,1]}}
        transition={{duration: 1.0}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className='badge-cmp app__flex'>
              <h1 className="header-text">Steven Lofquist</h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{y: [0, 0], opacity: [0,1]}}
        transition={{duration: 2.0}}
        >
        <div className='tag-cmp '>
          <p className='header-p-text'>Full Stack Developer</p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{y: [0, 0], opacity: [0,1]}}
        transition={{duration: 3.0}}
        className=""
        >
        <p className='header-p-text'><br />
            <a href={pdf} className='resume' target="_blank" rel="noreferrer">Resume</a>
        </p>
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')