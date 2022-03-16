import React from 'react';
import {Modal, Row, Col} from 'react-bootstrap'

 export const DopeHoroscopeModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Dope Horoscope
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

