import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {projects} from '../../../../data.js'

import { motion } from "framer-motion"

import DopeHoroscope from './images/DopeHoroscope.gif'
import DHCard from './images/DHCard.png'

import "./Work.scss"

const DH = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <div className="app__work-item app__flex" onClick={handleShow}>
            <div className="app__work-img app__flex">
                <img src={DHCard} alt="place holder img"/>
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
                <h4 className='bold-text'>{projects[0].title}</h4>
                <p className='p-text' style={{marginTop: 10}}>{projects[0].description}</p>

                <div className="app__work-tag app__flex">
                    <p className="p-text">{projects[0].tag}</p>
                </div>
            </div>
        </div>

        <Modal show={show} onHide={handleClose} centered={true}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{projects[0].title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
        
                <img alt="Dope Horoscope" src={DopeHoroscope}/> 

                

                <Modal.Header>
                    <p>
                        <a href="https://stevenlof777.github.io/dope-horoscope/" target="blank">Demo</a> / <a href="https://github.com/StevenLof777/dope-horoscope" target="blank">Repo</a>
                    </p>    
                </Modal.Header>

                <Modal.Header>
                    How it works
                </Modal.Header>
                    <p>The purpose of this application is to allow the user to put in their birthday then recieve their horoscope, information about their sign, and be matched with a celebrity for whom they are compatible with.</p>
                
                <Modal.Header>
                    Technologies Used
                </Modal.Header>
                <ul>
                    <li>Astro API</li>
                    <li>Ninjas API</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                </ul>
                
                <Modal.Header>
                    What I learned
                </Modal.Header>
                    <p>
                        This was my first group project at GA Tech. We were tasked with making a single page application while using two public API’s. I was in charge of making the API calls and helping out with other tasks when needed.
                    </p>
                    <br />
                    <p>
                        This strengthened my understanding for navigating the document object model. Since we only used one html file for the application, I relied heavily on query selectors to change the state of elements. This fostered my appreciation for single page application frameworks such as React.js and Angular.
                    </p>
                    <br />
                    <p>
                        This project also taught me a lot about public API’s. In order for this application to work I needed to get the Zodiac data from the Aztro API. In the JSON object that the API provided, I found an array of Zodiac signs that the user would be compatible with. From there I would gather celebrities that shared the same sign the user was compatible with. I would then pass the name of the celebrity through the Ninja API. This would return information about the celebrity that I would use to display on the right side of the application.
                    </p>
                    <br />
                    <p>
                        If I could redo this application again I would utilize Github’s Kanban board for projects. My classmates would then provide issues that would be tracked on the board. I would also apply the single responsibility principle to the application instead of keeping all the major functions in one JavaScript file.
                    </p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleClose}>
                    Close
                </button>

            </Modal.Footer>
        </Modal>


    </>
  )
}

export default DH