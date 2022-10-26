import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';

import {AppWrap} from '../../../../wrapper';
import {MotionWrap} from '../../../../wrapper';

import { urlFor, client} from '../../../../client'

import "./Work.scss"

import {projects} from '../../../../data.js'

const Work = () => {
  const [works, setWorks] = useState([]);
  // const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [filterWork, setFilterWork] = useState([]);
 
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);
  

  // const handleWorkFilter=(item)=>{
  //   setActiveFilter(item);
  //   setAnimateCard([{y:100, opacity: 0}])

  //   setTimeout(() => {
  //     setAnimateCard([{y:0, opacity: 1}])

  //     if(item==="All"){
  //       setFilterWork(works);
  //     } else {
  //       setFilterWork(works.filter((work) => work.tags))
  //     }

  //   }, 500)
  // }

  return (
    <>
      <h2 className="head-text">
        Projects
      </h2>

      {/* <div className='app__work-filter'>
        {['Angular', 'React', 'MySQL', 'MongoDB', 'Java 8', 'SpringBoot', 'Node JS', "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ""}`}
          >
            {item}
          </div>
        ))}
      </div> */}

        <motion.div
          animate={animateCard}
          tranistion={{duration: 0.5, delayChildren: 0.5}}
          className="app__work-portfolio"
          whileInView={{x: [0, 0], opacity: [0,1]}}
          >
          {projects.map((project)=>(

            <div className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={project.imageUrl} alt="place holder img"/>
                  {/* <img src={urlFor(work.imgUrl)} alt ={work.name}/> */}

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  {/* <a href={work.pojectLink} target="_blank" rel='noreferrer'/> */}
                  <a href={project.gitHub} target="blank" rel="noreferrer">
                    <motion.div
                      whileInView={{scale:[0,1]}} 
                      whileHover={{scale: [1, 0.9]}}
                      transition={{duration: 0.25}} 
                      className="app__flex"
                    >
                      <AiFillGithub/>
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                {/* <h4 className='bold-text'>{work.title}</h4> */}
                <h4 className='bold-text'>{project.title}</h4>
                {/* <p className='p-text style={{marginTop: 10}}'>{work.description}</p> */}
                <p className='p-text' style={{marginTop: 10}}>{project.description}</p>


                <div className="app__work-tag app__flex">
                    <p className="p-text">{project.tag}</p>
                </div>
              </div>

            </div>
      ))}
        </motion.div>



    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'work',
  'app__primarybg'
);