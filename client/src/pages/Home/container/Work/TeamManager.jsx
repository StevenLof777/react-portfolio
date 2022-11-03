import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {projects} from '../../../../data.js'

import { motion } from "framer-motion"

import TeamManagerImg from './images/TeamManager.gif'
import teammangercard from './images/teammangercard.png'

import "./Work.scss"

const TeamManager = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <div className="app__work-item app__flex" onClick={handleShow}>
            <div className="app__work-img app__flex">
                <img src={teammangercard} alt="place holder img"/>
                <motion.div
                    onClick={()=>{console.log("bruh")}}
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className=" app__flex"
                    key={projects[0].title}
                >
                </motion.div>
            </div>
        
            <div className='app__work-content app__flex'>
                <h4 className='bold-text'>Team Manager</h4>
                <p className='p-text' style={{marginTop: 10}}>Team manager that allows users to add, edit, delete, and search team members.</p>

                <div className="app__work-tag app__flex">
                    <p className="p-text">Full Stack</p>
                </div>
            </div>
        </div>

        <Modal show={show} onHide={handleClose} centered={true}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Team Manager</Modal.Title>
            </Modal.Header>

            <Modal.Body>
        
                <img alt="Team Manager" src={TeamManagerImg}/> 

                

                <Modal.Header>
                    <p>
                        <a href="https://github.com/StevenLof777/Team-Manager" target="blank">Repo</a>
                    </p>    
                </Modal.Header>

                <Modal.Header>
                    How it works
                </Modal.Header>
                    <p>Users can add, edit, delete, and search for team members.</p>
                <Modal.Header>
                    Technologies Used
                </Modal.Header>
                <ul>
                    <li>Java</li>
                    <li>JavaScipt</li>
                    <li>MySQL</li>
                    <li>Spring Boot</li>
                    <li>JPA</li>
                    <li>Angular</li>
                    <li>BootStrap</li>
                </ul>
                
                <Modal.Header>
                    What I learned
                </Modal.Header>
                    <p>
                        I learned how to initialize a web project on spring.io using Maven. I would then configure MySQL to run on my local port. Once I made my models and services I would test the API in Postman to make sure my CRUD commands worked.
                    </p>
                    <br />
                    <p>
                    Once I got my server running properly I would initialize my Angular project in the client. I never used TypeScript before but after learning the basics of Java I was comfortable with static types in programming. 
                    </p>
                    <br />
                    <p>
                    I was impressed with all of the built-in features for Angular; i.e. routing, HTTP client, and component generating (although I didn’t implement all of this in my code). This made it easier for me to get my client up and running quickly since I didn’t have to install a bunch of external dependencies. 
                    </p>
                    <br />
                    <p>
                    Overall this project taught me that even though SpringBoot and Angular may be considered “bloated”, it comes with the benefit of better error handling and less external dependencies.
                    </p>
                    <Modal.Header>
                    Updates
                </Modal.Header>
                <p>
                My goal now is to add user authentication to the project and to deploy the application using AWS or other cloud services.  
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button className='button' variant="secondary" onClick={handleClose}>
                    Close
                </button >

            </Modal.Footer>
        </Modal>


    </>
  )
}

export default TeamManager