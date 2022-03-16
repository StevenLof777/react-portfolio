import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const styles = {
    p: {
        padding: '4rem',
        textAlign: 'center',
        fontSize: "1.5rem"
    }
  };

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjkzew");
  if (state.succeeded) {
      return <p style={styles.p}>Thank you for messaging me! I will reply as soon as possible</p>;
  }
  return (
    <div className="footer-section row">
        <h3 id="contact">Contact Me</h3>
        <div className='form-container'>

                <form onSubmit={handleSubmit} className='contact-form col'>
                    <label htmlFor="email">
                        Email Address
                    </label>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            className="form-control"
                            
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    <div/>
                    <label className='message-label' for="Message">Message</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                />
                
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <div className='submit-contact '>
                    <button type="submit"  className="btn btn-primary" disabled={state.submitting}>
                        Submit
                    </button>
                </div>

                </form>

                <div className="social-container">
                        <a className="social " href="https://github.com/StevenLof777" rel="noopener" target='_'><i className='fab fa-github'/></a>
                        <a className="social " href="https://www.linkedin.com/in/steven-lofquist-49312a19b/" rel="noopener" target='_'><i className='fab fa-linkedin-in'/></a>
                </div>
        </div>

    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;