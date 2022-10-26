import React from 'react';
import { Link } from 'react-router-dom';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'skills', 'work', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: 'white' } : {}}
      >
      </a>  
    ))}
  </div>
);

export default NavigationDots;