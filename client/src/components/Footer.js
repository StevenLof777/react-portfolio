import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const styles = {
    p: {
        padding: '4rem',
        textAlign: 'center',
        fontSize: "2rem"
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
                    <label for="Message">Message</label>
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
                <button type="submit"  className="btn submit-contact btn-primary" disabled={state.submitting}>
                    Submit
                </button>
                </form>

                <div className="social-container">
                        <a className="social fab fa-github" href="https://github.com/StevenLof777" target="_blank"></a>
                        <a className="social fab fa-linkedin-in" href="https://www.linkedin.com/in/steven-lofquist-49312a19b/" target="_blank"></a>
                        {/* <a className="social fas fa-envelope" href="lof.steven@gmail.com" target="_blank"></a> */}
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