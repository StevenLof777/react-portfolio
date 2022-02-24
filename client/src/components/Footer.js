import React from 'react';

export default function Footer() {
    return (
        <div className="footer-section">
            <h3 id="contact">Contact Me</h3>
                <div className="social-container">
                <a className="social fab fa-github" href="https://github.com/StevenLof777" target="_blank"></a>
                <a className="social fab fa-linkedin-in" href="https://www.linkedin.com/in/steven-lofquist-49312a19b/" target="_blank"></a>
                {/* <a className="social fas fa-envelope" href="lof.steven@gmail.com" target="_blank"></a> */}
                </div>
        </div>  
    );
}