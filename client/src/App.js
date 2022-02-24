// Why can't I do an object destructure
// import {Nav, Hero, AboutMe, Skills, Projects, Footer}  from './components';

import React from 'react';
import Nav from './components/Nav';
import Hero  from './components/Hero';
// import AboutMe  from './components/AboutMe';
// import Projects  from './components/Projects';

// import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      {/* <Footer /> */}
    </div>
  );
}
