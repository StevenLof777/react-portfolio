import React from 'react';
// import {Hr} from 'react-bootstrap'
import Pdf from '../assets/steven_lofquist_resume.pdf';
import {Col, Row, Container} from 'react-bootstrap';
import Profile from '../assets/profile.jpg';


export default function Hero() {
  return (
    <div className="hero" id="hero">
    <div className="background-img">
      <Container className='profile-container'>
      <Row>


      <Col className='name-holder'>
          <h1 className='steven'>Steven Lofquist</h1>
            <div className='line'></div>
            <h5 id="fullstack-dev">Fullstack Developer</h5>
            <div className='hero-icon-wrapper'>
                <a id="resume" target="_" href={Pdf} rel='noopener noreferrer'>Resume</a>


                        {/* <a className="hero-iconsfas fa-envelope" href="lof.steven@gmail.com" rel="noopener"></a> */}

              </div>
      </Col>
    <Col className='profile-wrapper'>
    <img src={Profile} className="profile"/> 
    </Col>
    </Row>

    </Container>
    </div>
  </div>

  );
}

