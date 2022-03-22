import React from 'react';
import {Modal, Row, Col} from 'react-bootstrap'

 export const WeatherDashBoardModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Weather Dashboard
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          A weather dashboard that user that takes an users input and outputs the current weather details along with a 5-day forecast.
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
                  Bootstrap
                </li>
                <li>
                  OpenWeather API
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
                  GitHub
                </li>
              </ul>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
        <a href="https://github.com/StevenLof777/dope-horoscope" rel="noopener" target='_' className="btn btn-primary">GitHub Repository</a>
        </Modal.Footer>
      </Modal>
    );
  }

