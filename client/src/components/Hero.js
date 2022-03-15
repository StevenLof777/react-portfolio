import React from 'react';
import Pdf from '../assets/steven_lofquist_resume.pdf'


export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="background-img">
        <h1>Steven Lofquist</h1>
          <h2 id="fullstack-dev">Fullstack Developer</h2>
            <div>
              <a id="resume" target="_" href={Pdf} rel='noopener noreferrer'>Resume</a>
            </div>
      </div>
    </div>
  );
}