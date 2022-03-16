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
          An website that allows an user to input their birth day and recieve their horoscope and see which celebrity they're compatible with.
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
                  Aztro API
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
                  GitHub
                </li>
              </ul>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
        <a href="https://github.com/StevenLof777/dope-horoscope" rel="noopener" target="_" className="btn btn-primary">GitHub Repository</a>
        </Modal.Footer>
      </Modal>
    );
  }

