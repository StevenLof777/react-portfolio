// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

// export default function Footer() {
//   const [state, handleSubmit] = useForm("xrgjkzew");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//     return (
//         <div className="footer-section row">
//             <h3 id="contact">Contact Me</h3>
//             <div className='form-container'>

//                 <form onSubmit={handleSubmit} className='contact-form col'>
//                     <div className="form-group">
//                         <label for="exampleFormControlInput1">Email address</label>
//                         <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
//                         <ValidationError 
//                             prefix="Email" 
//                             field="email"
//                             errors={state.errors}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label for="exampleFormControlTextarea1">Example textarea</label>
//                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                         <ValidationError 
//                             prefix="Message" 
//                             field="message"
//                             errors={state.errors}
//                         />
//                     </div>
//                     <button type="submit"  disabled={state.submitting} className="btn submit-contact btn-primary">Submit</button>
//                 </form>
            
//             </div>

//                 <div className="social-container">
//                 <a className="social fab fa-github" href="https://github.com/StevenLof777" target="_blank"></a>
//                 <a className="social fab fa-linkedin-in" href="https://www.linkedin.com/in/steven-lofquist-49312a19b/" target="_blank"></a>
//                 {/* <a className="social fas fa-envelope" href="lof.steven@gmail.com" target="_blank"></a> */}
//                 </div>
//         </div>  
//     );
// }



import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjkzew");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="footer-section row">

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
        <button type="submit" disabled={state.submitting}>
            Submit
        </button>
        </form>

    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;