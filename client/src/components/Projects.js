import React, { useState } from 'react';
import { MentorMonkeyModal } from './modals/MentorMonkey';
import { DopeHoroscopeModal } from './modals/DopeHoroscope';
import { DailyPlannerModal } from './modals/DailyPlanner';
import { WeatherDashBoardModal } from './modals/WeatherDashboard';
import{ Button, Col }from 'react-bootstrap'
import MentorMonkey from '../assets/MentorMonkey.png';
import dopeHoroscope from '../assets/dope_horoscope.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import dailyPlanner from '../assets/daily-planner.png';

 
export default function Projects() {
  const [mentorShow, setMentorShow] = React.useState(false)
  const [dopeShow, setDopeShow] = React.useState(false)
  const [weatherShow, setWeatherShow] = React.useState(false)
  const [dailyShow, setDailyShow] = React.useState(false)
  // const [modalShow, setModalShow] = React.useState(false)

  return (
    <div id="project-section">
        <div className="container project-container">
          <div className="row project-row">
              {/* <!-- PROJECTS --> */}
                <h3 className="project-header">Projects</h3>
                {/* <!-- Mentor Monkey --> */}
                  <div className="col box box-row-1">                      
                    <a href="https://secret-falls-29125.herokuapp.com/" target="_" rel='noopener noreferrer'>

                      <div className="img-container">
                      <img src={MentorMonkey} className="img blur" alt="Mentor Monkey Website"/>
                      <div className="live-demo fade">Live Demo</div>
                      </div>
                    </a>
                      <div className="card-body row">
                        <h5 className="col card-title-bruh">MentorMonkey Chat App</h5>
                        <Col className='col-btn'>
                        <Button className='card-btn' variant="primary" onClick={() => setMentorShow(true)}>
                          Learn More
                        </Button>
                        <MentorMonkeyModal
                          show={mentorShow}
                          onHide={() => setMentorShow(false)}
                        />
                        </Col>
                      </div>
                  </div>

                {/* <!-- Dope Horoscope --> */}
                  <div className="col box">                      
                    <a href="https://stevenlof777.github.io/dope-horoscope/" target="_" rel='noopener noreferrer'>

                      <div className="img-container">
                      <img src={dopeHoroscope} className="img blur" alt="Dope Horoscope "/>
                      <div className="live-demo fade">Live Demo</div>
                      </div>
                    </a>
                      <div className="card-body row">
                        <h5 className="col card-title-bruh">Dope Horoscope</h5>
                        <Col className='col-btn'>
                        <Button className='card-btn' variant="primary" onClick={() => setDopeShow(true)}>
                          Learn More
                        </Button>
                        </Col>
                        <DopeHoroscopeModal
                          show={dopeShow}
                          onHide={() => setDopeShow(false)}
                        />
                      </div>
                  </div>
                  </div>


              <div className="row project-row">


              {/* Weather Dasboard */}
              <div className="col box">                      
                    <a href="https://stevenlof777.github.io/weather-dashboard/" target="_" rel='noopener noreferrer'>

                      <div className="img-container">
                      <img src={weatherDashboard} className="img blur" alt="Mentor Monkey Website"/>
                      <div className="live-demo fade">Live Demo</div>
                      </div>
                    </a>
                    <div className="card-body row">
                        <h5 className="col card-title-bruh">Weather Dasboard</h5>
                        <Col className='col-btn'>
                        <Button className='card-btn' variant="primary" onClick={() => setWeatherShow(true)}>
                          Learn More
                        </Button>
                        </Col>
                        
                        <WeatherDashBoardModal
                          show={weatherShow}
                          onHide={() => setWeatherShow(false)}
                        />
                      </div>
                  </div>

                {/* <!-- Daily Planner --> */}
                  <div className="col box">                      
                    <a href="https://stevenlof777.github.io/daily-planner/" target="_" rel='noopener noreferrer'>

                      <div className="img-container">
                      <img src={dailyPlanner} className="img blur" alt="Daily Planner"/>
                      <div className="live-demo fade">Live Demo</div>
                      </div>
                    </a>
                    <div className="card-body row">
                        <h5 className="col card-title-bruh">Daily Planner</h5>
                        <Col className='col-btn'>
                        <Button className='card-btn' variant="primary" onClick={() => setDailyShow(true)}>
                          Learn More
                        </Button>
                        </Col>
                        <DailyPlannerModal
                          show={dailyShow}
                          onHide={() => setDailyShow(false)}
                        />
                      </div>
                  </div>
                    </div>
                </div>
            </div>        
  );
}
