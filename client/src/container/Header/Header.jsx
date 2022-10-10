import React from 'react'
import {motion} from "framer-motion"
import { AppWrap } from '../../wrapper'
import "./Header.scss"


const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{y: [0, 100], opacity: [0,1]}}
        transition={{duration: 1.0}}
        className="app__header-infor"
      >
        {/* <iframe src="https://giphy.com/embed/3oKIPnAiaMCws8nOsE" width="457" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-kitten-computer-3oKIPnAiaMCws8nOsE">via GIPHY</a></p> */}
        <div className="app__header-badge">
          <div className='badge-cmp app__flex'>

            <div>
              <h1 className="header-text">Steven Lofquist</h1>
            </div>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='header-p-text'>Full Stack Developer</p>
          
        </div>
          <p className='header-p-text'><br />Resume</p>

      </motion.div>
      
      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
      >


        <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
    </motion.div>

      </motion.div>



    </div>
  )
}

export default AppWrap(Header, 'home')