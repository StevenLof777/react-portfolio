import React from 'react';

export default function Nav() {


  return (
    <div class="hero" id="hero">
    <div class="background-img">
    <h1>Steven Lofquist</h1>
    <h2 id="fullstack-dev">Fullstack Developer</h2>
    <div>
    <a id="resume" target="_" href="./pdf/steven_lofquist_resume.pdf">Resume</a>
    </div>
  </div>
</div>

<div class="about-me container">
  <h3 class="about-me-h">About Me</h3>
  <p>I am a fullstack developer currently attending the Georgia Tech Coding BootCamp. I'm passionate about learning new technologies and developing applications. In my free time I like to travel and hike.
  </p>
</div>

<div class="skills-section">
<div class="container">
  <h3 class="my-skills">My Skills</h3>
  <div class="row lang-icons">
    <div class="col"><i class="devicon-html5-plain-wordmark colored"></i></div>
    <div class="col"><i class="devicon-css3-plain-wordmark colored"></i></div>
    <div class="col"><i class="devicon-mysql-plain-wordmark colored"></i></div>
    <div class="col"><i class="devicon-mongodb-plain-wordmark colored"></i></div>
    <div class="col"><i class="devicon-react-original-wordmark colored"></i></div>
    <div class="col"><i class="devicon-javascript-plain colored"></i></div>
  </div>
</div>
</div>

<div id="project-section">
  <div class="container">
    <div class="row project-row">
        <!-- PROJECTS -->
          <h3 class="project-header">Projects</h3>
          <div class="row project-row">
            <!-- Mentor Monkey -->
              <div class="col box">
                <a href="https://secret-falls-29125.herokuapp.com/" target="_blank">
                  <div class="img-container">
                    <div class="live-demo">Live Demo</div>
                  <img class="img" src="assets/images/MentorMonkey.png" class="card-img-top" alt="Mentor Monkey Website">
                  </div>
                </a>
                  <div class="card-body">
                    <h5 class="card-title">MentorMonkey</h5>
                    <p class="card-text">MentorMonkey bridges skilled developers with mentees for on-the-spot mentorship. 
                      In this application a user can sign up to mentor a junior developer or sign up to be mentored. Mentoring will take place inside a real-time chat room.</p>
                    <a href="https://github.com/caitlinw29/mentor-monkey" target="_blank" class="btn btn-primary project-btn">GitHub Repository</a>
                  </div>
              </div>
              <!-- Dope Horoscope -->
              <div class="col box">
                <a href="https://stevenlof777.github.io/dope-horoscope/" target="_blank">
                <div class="img-container">                        
                  <div class="live-demo">Live Demo</div>
                  <img class="img" src="assets\images\dope_horoscope.png" class="card-img-top" alt="...">
                </div>  
              </a>  
                <div class="card-body">
                    <h5 class="card-title">Dope Horoscope</h5>
                    <p class="card-text">An website that allows a user to input their birth day and receive their horoscope and see which celebrity they're compatible with.</p>
                    <a href="https://github.com/StevenLof777/dope-horoscope" target="_blank" class="btn btn-primary project-btn">GitHub Repository</a>
                  </div>
                </div>
            </div>
            <!-- Weather Dashboard -->
              <div class="col box">
                <a href="https://stevenlof777.github.io/weather-dashboard/" target="_blank">
                <div class="img-container">
                  <div class="live-demo">Live Demo</div> 
                  <img class="img" src="assets/images/weatherdashboard.PNG" class="card-img-top" alt="...">
                </div> 
              </a> 
                <div class="card-body">
                    <h5 class="card-title">Weather Dashboard</h5>
                    <p class="card-text">A weather app that a user can use to find out the five-day forecast for any city. 
                    </p>
                    <a href="https://github.com/StevenLof777/weather-dashboard" target="_blank" class="btn btn-primary project-btn">GitHub Repository</a>
                  </div>
              </div>
              <!-- Daily Planner -->
              <div class="col box">
                <a href="https://stevenlof777.github.io/daily-planner/" target="_blank">
                <div class="img-container"> 
                  <div class="live-demo">Live Demo</div>
                  <img class="img" src="assets\images\daily-planner.PNG" class="card-img-top" alt="Image of a Daily Planner">
                </div>    
              </a>  
                <div class="card-body">
                    <h5 class="card-title">Daily Planner</h5>
                    <p class="card-text">A simple calendar app for scheduling your work day. If the time block is gray then it is the past, if the time block is green then it's the future, if the time block is red then it's the present.</p>
                    <a href="https://github.com/StevenLof777/daily-planner/" target="_blank" class="btn btn-primary project-btn">GitHub Repository</a>
                  </div>
                
              </div>
            </div>
          </div>    

  );
}