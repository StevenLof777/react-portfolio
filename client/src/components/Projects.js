// Using hover add the blur effect with an class

import React from 'react';
import MentorMonkey from '../assets/MentorMonkey.png';
import dopeHoroscope from '../assets/dope_horoscope.png';
import weatherDashboard from '../assets/weatherdashboard.PNG';
import dailyPlanner from '../assets/daily-planner.png';

export default function Projects() {
  return (
    <div id="project-section">
        <div className="container">
          <div className="row project-row">
              {/* <!-- PROJECTS --> */}
                <h3 className="project-header">Projects</h3>
                <div className="row project-row">
                  {/* <!-- Mentor Monkey --> */}
                    <div className="col box">
                      <a href="https://secret-falls-29125.herokuapp.com/" rel='noopener'>
                        <div className="img-container">
                          <div className="live-demo">Live Demo</div>
                        <img class="img" src={MentorMonkey} className="card-img-top" alt="Mentor Monkey Website"/>
                        </div>
                      </a>
                        <div className="card-body">
                          <h5 className="card-title">MentorMonkey</h5>
                          <p className="card-text">MentorMonkey bridges skilled developers with mentees for on-the-spot mentorship. 
                            In this application a user can sign up to mentor a junior developer or sign up to be mentored. Mentoring will take place inside a real-time chat room.</p>
                          <a href="https://github.com/caitlinw29/mentor-monkey" target="_blank" className="btn btn-primary project-btn">GitHub Repository</a>
                        </div>
                    </div>
                    {/* <!-- Dope Horoscope --> */}
                    <div className="col box">
                      <a href="https://stevenlof777.github.io/dope-horoscope/" target="_blank">
                      <div className="img-container">                        
                        <div className="live-demo">Live Demo</div>
                        <img className="img" src={dopeHoroscope} className="card-img-top" alt="..."/>
                      </div>  
                    </a>  
                      <div className="card-body">
                          <h5 className="card-title">Dope Horoscope</h5>
                          <p className="card-text">An website that allows a user to input their birth day and receive their horoscope and see which celebrity they're compatible with.</p>
                          <a href="https://github.com/StevenLof777/dope-horoscope" target="_blank" className="btn btn-primary project-btn">GitHub Repository</a>
                        </div>
                      </div>
                  </div>
                  {/* <!-- Weather Dashboard --> */}
                    <div className="col box">
                      <a href="https://stevenlof777.github.io/weather-dashboard/" target="_blank">
                      <div className="img-container">
                        <div className="live-demo">Live Demo</div> 
                        <img className="img" src={weatherDashboard} className="card-img-top" alt="..."/>
                      </div> 
                    </a> 
                      <div className="card-body">
                          <h5 className="card-title">Weather Dashboard</h5>
                          <p className="card-text">A weather app that a user can use to find out the five-day forecast for any city. 
                          </p>
                          <a href="https://github.com/StevenLof777/weather-dashboard" target="_blank" className="btn btn-primary project-btn">GitHub Repository</a>
                        </div>
                    </div>
                    {/* <!-- Daily Planner --> */}
                    <div className="col box">
                      <a href="https://stevenlof777.github.io/daily-planner/" target="_blank">
                      <div className="img-container"> 
                        <div className="live-demo">Live Demo</div>
                        <img className="img" src={dailyPlanner} className="card-img-top" alt="Image of a Daily Planner"/>
                      </div>    
                    </a>  
                      <div className="card-body">
                          <h5 className="card-title">Daily Planner</h5>
                          <p className="card-text">A simple calendar app for scheduling your work day. If the time block is gray then it is the past, if the time block is green then it's the future, if the time block is red then it's the present.</p>
                          <a href="https://github.com/StevenLof777/daily-planner/" target="_blank" className="btn btn-primary project-btn">GitHub Repository</a>
                        </div>
                      
                    </div>
                  </div>
                </div>
            </div>        
  );
}
