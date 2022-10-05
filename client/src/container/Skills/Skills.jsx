import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip';
import {AppWrap} from '../../wrapper';
// import { urlFor, client} from '../../client'
import "./Skills.scss";

import { skills, experiences } from '../../data.js';

import reactIcon from "../../assets/react.png"

const Skills = () => {
  // const [skill, setSkill] = useState([])
  // const [expExperience, setExperience] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';
  //   client.fetch(query).then((data) => {
  //     setExperience(data);
  //   });
  //   client.fetch(query).then((data) => {
  //     setSkill(data);
  //   });
  // }, []);
  return (
    <>
      <h2 className="head-text">My Skills</h2>
      
      <div className='app__skills-container'>
        <motion.div className="app__skills-list">
            {skills.map((skills) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
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

        <motion.div className="app__skills-exp">
            {experiences.map((work) => (
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  data-tip
                  data-for={work.name}
                  key={work.name}
                >
                  <h4 className='bold-text'>{work.name}</h4>
                  <p className='p-text'>{work.company}</p>
                </motion.div>

                <ReactToolTip
                  id={work.name}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  {work.desc}
                </ReactToolTip>
              </>
            ))}
          </motion.div>
        </div>
    </>
  )
}

export default AppWrap(Skills, "skills")