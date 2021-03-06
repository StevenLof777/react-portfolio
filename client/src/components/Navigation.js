import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';


export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className='nav-bar-wrapper container'>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#hero">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project-section">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

