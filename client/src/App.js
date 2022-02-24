import React from 'react';
import Nav from './components/Nav';
import Body  from './components/Body ';
import Footer from './components/Footer';


// Import our list of users from users.js
import users from './users';

// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Nav />
      <Body />
      <Footer />
      
    </div>
  );
}
