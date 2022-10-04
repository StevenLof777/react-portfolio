import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';

import {AppWrap} from '../../wrapper';
import { urlFor, client} from '../../client'

import "./Work.scss"

import mobile from '../../assets/mobile.png'

const Work = () => {
  const [works, setWorks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [filterWork, setFilterWork] = useState([]);
 
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);
  

  const handleWorkFilter=(item)=>{
    
  }

  return (
    <>
      <h2 className="head-text">
        My <span>Work</span>
      </h2>

      <div className='app__work-filter'>
        {['Angular', 'React', 'MySQL', 'MongoDB', 'Java 8', 'SpringBoot', 'Node JS', "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ""}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        tranistion={{duration: 0.5, dleayChildren: 0.5}}
      >
        {/* Uncomment once sanity errors are resolved */}
        {/* {filterWork.map((work, index) => (
        ))} */}
          <div classNmae="app___work-item app__flex">
            <div className = "app__work-img flex">
            <img src={mobile} alt="place holder img"/>
              {/* <img src={urlFor(work.imgUrl)} alt ={work.name}/> */}

            <motion.div
              whileHover={{opacity: [0,1]}}
              transition={{duration: .25, ease: 'easeInOut', staggerChildren: 0.5}} 
              className="app__work-hover app__flex"
            ></motion.div>
              {/* <a href={work.pojectLink} target="_blank" rel='noreferror'/> */}
              <a href='https://github.com/StevenLof777?tab=repositories' target="blank">
                <motion.div
                  whileInView={{scale:[0,1]}} 
                  whileHover={{scale: [1, 0.9]}}
                  transition={{duration: 0.25}} 
                  className="app__work-hover app__flex"
                >
                  <AiFillGithub/>
                </motion.div>
              </a>
            </div>

            <div className='app__workwork content app__flex'>
              {/* <h4 className='bold-text'>{work.title}</h4> */}
              <h4>Culpa eiusmod</h4>
              {/* <p className='p-text style={{marginTop: 10}}'>{work.description}</p> */}
              <p className='p-text' style={{marginTop: 10}}>Laborum proident sit elit do nisi aute enim enim deserunt ex dolore.</p>
            
              <div className="app__work-tag app__felx"></div>
            </div>

          </div>
      </motion.div>
    </>
  )
}

export default AppWrap(Work, "work")