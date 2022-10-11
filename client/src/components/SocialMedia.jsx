import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/StevenLof777" target="_blank" rel="noreferrer"><BsGithub /></a> 
    </div>
    <div>
       <a href="https://www.linkedin.com/in/steven-lofquist-49312a19b/" target="_blank" rel="noreferrer"><BsLinkedin /></a> 
    </div>
    <div>
      <a href="https://twitter.com/StevenLofquist1" target="_blank" rel="noreferrer"><BsTwitter /></a>
    </div>
  </div>
);
export default SocialMedia;