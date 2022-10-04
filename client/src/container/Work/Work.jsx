import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';

import {AppWrap} from '../../wrapper';
import { urlFor, client} from '../../client'

import "./Work.scss"

import placeholder from '../../assets/placeholder.jpg'

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
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([{y:0, opacity: 1}])

      if(item=="All"){
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags))
      }

    }, 500)
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
        className="app__work-portfolio"
      >
        {/* Uncomment once sanity errors are resolved */}
        {/* {filterWork.map((work, index) => (
        ))} */}
          <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={placeholder} alt="place holder img"/>
                {/* <img src={urlFor(work.imgUrl)} alt ={work.name}/> */}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {/* <a href={work.pojectLink} target="_blank" rel='noreferrer'/> */}
                <a href='https://github.com/StevenLof777?tab=repositories' target="blank" rel="noreferrer">
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
              <h4 className='bold-text'>Culpa eiusmod</h4>
              {/* <p className='p-text style={{marginTop: 10}}'>{work.description}</p> */}
              <p className='p-text' style={{marginTop: 10}}>Laborum proident sit elit do nisi aute enim enim deserunt ex dolore.</p>


              <div className="app__work-tag app__flex">
                  <p className="p-text">UI/UX</p>
              </div>
            </div>

          </div>
      </motion.div>

      <motion.div
        animate={animateCard}
        tranistion={{duration: 0.5, dleayChildren: 0.5}}
        className="app__work-portfolio"
      >
        {/* Uncomment once sanity errors are resolved */}
        {/* {filterWork.map((work, index) => (
        ))} */}
          <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={placeholder} alt="place holder img"/>
                {/* <img src={urlFor(work.imgUrl)} alt ={work.name}/> */}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {/* <a href={work.pojectLink} target="_blank" rel='noreferrer'/> */}
                <a href='https://github.com/StevenLof777?tab=repositories' target="blank" rel="noreferrer">
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
              <h4 className='bold-text'>Culpa eiusmod</h4>
              {/* <p className='p-text style={{marginTop: 10}}'>{work.description}</p> */}
              <p className='p-text' style={{marginTop: 10}}>Laborum proident sit elit do nisi aute enim enim deserunt ex dolore.</p>


              <div className="app__work-tag app__flex">
                  <p className="p-text">Full Stack</p>
              </div>
            </div>

          </div>
      </motion.div>
    </>
  )
}

export default AppWrap(Work, "work")