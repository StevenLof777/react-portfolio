import {Modal, Row, Col} from 'react-bootstrap'

 export const DailyPlannerModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Daily Planner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          A simple calendar app for scheduling your work day. If the time block is gray then it is the past, if the time block is green then it's the future, if the time block is red then it's the present
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
                  Moment.js
                </li>
                <li>
                  Bootstrap
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
        <a href="https://github.com/StevenLof777/daily-planner" rel="noopener" target='_' className="btn btn-primary">GitHub Repository</a>
        </Modal.Footer>
      </Modal>
    );
  }

