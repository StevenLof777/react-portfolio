import React, { useState } from 'react';
import{ Modal, Button, Row, Col }from 'react-bootstrap'
import MentorMonkey from '../assets/MentorMonkey.png';
import dopeHoroscope from '../assets/dope_horoscope.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import dailyPlanner from '../assets/daily-planner.png';

const styles = {
  ul: {
    ulstStyle: 'none'
  }
};

const MentorMonkeyModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Mentor Monkey Chat App
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          A chat app where users can sign up to either be a mentor or a mentee. Users can make profiles and describe what skills they have and discuss code in a chat room.
        </p>
        <Row>
          <Col>
          <h5>
              Technology Used
            </h5>
            <ul >
              <li>
                HTML/CSS
              </li>
              <li>
                Javascript
              </li>
              <li>
                Handlebars
              </li>
              <li>
                Bootstrap
              </li>
              <li>
                Express API
              </li>
              <li>
                Socket.io
              </li>
              <li>
                MySQL
              </li>
            </ul>
          </Col>
          <Col>
          <h5>
              Deployment
              </h5>
            <ul>
              <li>
                git
              </li>
              <li>
                Heroku
              </li>
              <li>
                Github
              </li>
            </ul>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
      <a href="https://github.com/StevenLof777/dope-horoscope" rel="noopener" className="btn btn-primary">GitHub Repository</a>
      </Modal.Footer>
    </Modal>
  );
}
 
export default function Projects() {
  const [modalShow, setModalShow] = React.useState(false)

  return (

    

    <div id="project-section">



        <div className="container">
          <div className="row project-row">
              {/* <!-- PROJECTS --> */}
                <h3 className="project-header">Projects</h3>
                <div className="row project-row">

                  {/* <!-- Mentor Monkey --> */}
                    <div className="col box">                      
                      <a href="https://secret-falls-29125.herokuapp.com/" rel="noopener">
                        <div className="img-container">
                          <div className="live-demo">Live Demo</div>
                        <img src={MentorMonkey} className="img card-img-top" alt="Mentor Monkey Website"/>
                        </div>
                      </a>
                        <div className="card-body row">
                          <h5 className="col card-title-bruh">MentorMonkey</h5>

                          <Col></Col>
                          
                          <Button className='col' variant="primary" onClick={() => setModalShow(true)}>
                            Learn More
                          </Button>

                          <MentorMonkeyModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          
                        </div>
                    </div>

                    {/* <!-- Dope Horoscope --> */}
                    <div className="col box">
                      <a href="https://stevenlof777.github.io/dope-horoscope/" rel="noopener">
                      <div className="img-container">                        
                        <div className="live-demo">Live Demo</div>
                        <img src={dopeHoroscope} className="img card-img-top" alt="Dope horoscope png"/>
                      </div>  
                    </a>  
                      <div className="card-body">
                          <h5 className="card-title">Dope Horoscope</h5>
                          <p className="card-text">An website that allows a user to input their birth day and receive their horoscope and see which celebrity they're compatible with.</p>
                          <a href="https://github.com/StevenLof777/dope-horoscope" rel="noopener" className="btn btn-primary project-btn">GitHub Repository</a>
                        </div>
                      </div>
                  </div>
                  {/* <!-- Weather Dashboard --> */}-
                  <div className="col box">
                      <a href="https://stevenlof777.github.io/daily-planner/" rel="noopener">
                      <div className="img-container"> 
                        <div className="live-demo">Live Demo</div>
                        <img src={weatherDashboard} className="img card-img-top" alt="Image of a Daily Planner"/>
                      </div>    
                    </a>  
                      <div className="card-body">
                          <h5 className="card-title">Weather Dashboard</h5>
                          <p className="card-text">A wetaher app that allows the user to </p>
                          <a href="https://github.com/StevenLof777/daily-planner/" rel="noopener" className="btn btn-primary project-btn">GitHub Repository</a>
                        </div>
                      
                    </div>
                    {/* <!-- Daily Planner --> */}
                    <div className="col box">
                      <a href="https://stevenlof777.github.io/daily-planner/" rel="noopener">
                      <div className="img-container"> 
                        <div className="live-demo">Live Demo</div>
                        <img src={dailyPlanner} className="img card-img-top" alt="Image of a Daily Planner"/>
                      </div>    
                    </a>  
                      <div className="card-body">
                          <h5 className="card-title">Daily Planner</h5>
                          <p className="card-text">A simple calendar app for scheduling your work day. If the time block is gray then it is the past, if the time block is green then it's the future, if the time block is red then it's the present.</p>
                          <a href="https://github.com/StevenLof777/daily-planner/" rel="noopener" className="btn btn-primary project-btn">GitHub Repository</a>
                        </div>
                      
                    </div>
                  </div>
                </div>
            </div>        
  );
}
