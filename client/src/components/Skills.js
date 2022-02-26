import React from 'react';

export default function Skills() {
  return (
    <div className="skills-section">
      <div className="container">
        <h3 className="my-skills">My Skills</h3>
        <div className="row lang-icons">
          <div className="col"><i className="devicon-html5-plain-wordmark colored"></i></div>
          <div className="col"><i className="devicon-css3-plain-wordmark colored"></i></div>
          <div className="col"><i className="devicon-mysql-plain-wordmark colored"></i></div>
          <div className="col"><i className="devicon-mongodb-plain-wordmark colored"></i></div>
          <div className="col"><i className="devicon-react-original-wordmark colored"></i></div>
          <div className="col"><i className="devicon-javascript-plain colored"></i></div>
        </div>
      </div>
    </div>
  );
}