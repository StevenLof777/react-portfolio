// Why can't I do an object destructure
// import {Nav, Hero, AboutMe, Skills, Projects, Footer}  from './components';

import React from 'react';
import Nav from './components/Navigation';
import Hero  from './components/Hero';
import AboutMe  from './components/AboutMe';
import Skills  from './components/Skills';
import Projects  from './components/Projects';
import Footer from './components/Footer';
import './assets/styles.css'

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
