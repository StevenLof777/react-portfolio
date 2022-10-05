import React, {useState, useEffect} from 'react';
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip';
import {AppWrap} from '../../wrapper';
import { urlFor, client} from '../../client'
import "./Skills.scss";
import reactIcon from "../../assets/react.png"
import sass from "../../assets/sass.png"
import node from "../../assets/node.png"
import javascript from "../../assets/javascript.png"
import graphql from "../../assets/graphql.png"
import git from "../../assets/git.png"

const skill = [
  {
    name: "React",
    imageUrl: reactIcon
  },
  {
    name: "JavaScript",
    imageUrl: javascript
  },
  {
    name: "Node.js",
    imageUrl: node
  },
  {
    name: "GraphQL",
    imageUrl: graphql
  },
  {
    name: "Git",
    imageUrl: git
  },
  {
    name: "Sass",
    imageUrl: sass
  }
]

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
      <h2 classsName="head-text">Skills</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skill.map((skill)=>
            (
          <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            {/* <div className='app__flex' style={{background: skill.bgColor}}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className='p-text '>{skill.name}</p> */}
            
              <>
                <div className='app__flex' >
                <img src={skill.imageUrl} alt="Skill" />
                </div>
                <p className='p-text '>{skill.name}</p>
              </>

          </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default Skills