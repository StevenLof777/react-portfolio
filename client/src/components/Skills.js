import React from 'react';
import {Col, Row} from 'react-bootstrap';


export default function Skills() {
  return (
    <div className="skills-section">
      <div className="container">
        <h3 className="my-skills">My Skills</h3>
        {/* <Row>
          <Col></Col>
          <Col>
            <ul className='skill-ul'>
              <li className=' lang-icons'>
              <i className="devicon-html5-plain colored">HTML</i>
              </li>
              <li>
              <i className="devicon-css3-plain colored lang-icons">CSS</i>
              </li>
              <li>
              <i className="devicon-react-plain colored lang-icons">React</i> 
              </li>
            </ul>
          </Col>
          <Col>
            <ul className='skill-ul'>
              <li>
              <i className="devicon-html5-plain colored lang-icons"></i> HTML
              </li>
              <li>
              <i className="devicon-css3-plain colored lang-icons"></i> CSS
              </li>
              <li>
              <i className="devicon-react-plain colored lang-icons"></i> React
              </li>
            </ul>
          </Col>
          <Col></Col>
        </Row> */}

        <div className="row lang-icons">
          <div className="col"><i className="devicon-html5-plain bruh-i colored"></i> HTML</div>
          <div className="col"><i className="devicon-css3-plain bruh-i colored"></i> CSS</div>
          <div className="col"><i className="devicon-mysql-plain bruh-i colored"></i> MySQL</div>
          <div className="col"><i className="devicon-mongodb-plain bruh-i colored"></i> Mongodb</div>
          <div className="col"><i className="devicon-react-original bruh-i colored"></i> React</div>
          <div className="col"><i className="devicon-javascript-plain bruh-i colored"></i> JavaScript</div>
        </div>
      </div>
    </div>
  );
}