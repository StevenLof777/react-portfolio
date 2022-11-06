import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {projects} from '../../../../data.js'

import { motion } from "framer-motion"

import kbcard from './images/kbcard.png'
import kbsearch from './images/kbsearch.gif'
import kblogin from './images/kblogin.gif'
import kbaddtocart from './images/kbaddtocart.gif'

import "./Work.scss"

const KB = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <div className="app__work-item app__flex" onClick={handleShow}>
            <div className="app__work-img app__flex">
                <img src={kbcard} alt="place holder img"/>
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
                <h4 className='bold-text'>KickBacks</h4>
                <p className='p-text' style={{marginTop: 10}}>Ecommerce site that allows users to make an account and purchase shoes using PayPal.</p>

                <div className="app__work-tag app__flex">
                    <p className="p-text">Full Stack</p>
                </div>
            </div>
        </div>

        <Modal show={show} onHide={handleClose} centered={true}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>KickBacks</Modal.Title>
            </Modal.Header>

            <Modal.Body>
        
                <img alt="KickBacks search gif" src={kbsearch}/> 
                <img alt="KicBacks add to cart gif" src={kbaddtocart}/> 
                <img alt="KicBacks login gif" src={kblogin}/> 

                

                <Modal.Header>
                    <p>
                        <a href="https://github.com/StevenLof777/KickBacks" target="blank">Repo</a>
                    </p>    
                </Modal.Header>

                
                <Modal.Header>
                    Technologies Used
                </Modal.Header>
                <ul>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>HTML</li>
                    <li>Express</li>
                    <li>JWT</li>
                </ul>
                
                <Modal.Header>
                    What I learned
                </Modal.Header>
                    <p>
                    KickBacks has been my most ambitious full stack project. I wanted to put my MERN stack abilities to the test by building an ecommerce site that utilized the PayPal API.
                    </p>
                    <br />
                    <p>
                    For the backend I started with models, then moved onto creating the routes. The product route was the most challenging thing to implement. I wanted the user to be able to search for items then sort based on price, rating, and category. I used bcrypt to hash the password for the user and JSON web token for authorization.
                    </p>
                    <br />
                    <p>
                    On the frontend I have a lot of pages and components. React’s Context API was essential for managing state that way I didn’t have to pass props through a complicated component tree. I had to become very comfortable with using the useReducer, useContext, useEffect, and useState hooks in order to manipulate the client and make HTTP requests.
                    </p>
                    <Modal.Header>
                        Updates
                    </Modal.Header>
                    <p>
                    For the future of this app I want to add Stripe and other payment methods for purchases. I also plan to make an admin page for adding and updating products.
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

export default KB