import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {Validations} from './Validations';
import './Contact.css';

import ScrollAnimation from 'react-animate-on-scroll';
import {toast} from 'react-toastify';

const Contact = () => {
    const [msgDetails, setMsgDetails] = useState({name:'', email:'', subject:'', message: ''});
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState({});

    const msgDetailsChangeHandler = (e) => {
        if(e.target.name === "name"){
            setMsgDetails({
                ...msgDetails,
                name: e.target.value
            })
        }
        if(e.target.name === "email"){
            setMsgDetails({
                ...msgDetails,
                email: e.target.value
            })
        }
        if(e.target.name === "subject"){
            setMsgDetails({
                ...msgDetails,
                subject: e.target.value
            })
        }
        if(e.target.name === "message"){
            setMsgDetails({
                ...msgDetails,
                message: e.target.value
            })
        }
    }

    
    function sendEmail(e) {
        e.preventDefault();
        let error = Validations(msgDetails);
        setError(error);
        if(Object.keys(error).length === 0 && error.constructor === Object){
            setSubmitting(true);
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_ID, 'template_rduldan', e.target, process.env.REACT_APP_EMAILJS_KEY)
            .then((result) => {
                setSubmitting(false);
                document.querySelectorAll("#name, #email, #subject, #message").forEach(x => x.value="");
                toast.success("Your email has been received!");
            }, (error) => {
                toast.success(`Something went wrong! ${error.text}`);
            });
        }
      }

    return (
        <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={2}>
        <form className="contact-form contact" onSubmit={sendEmail}>
        <div className="contact-wrapper">
            <h2>Contact</h2>
        
            <div className="contact__container">
                <div className="contact__msg-details">
                    <h3>Send Message</h3>
                    <div className="contact__name">
                        <input type="text" name="name" className="contact__form-control" id="name" placeholder="Your Name" value={msgDetails.name} onChange={msgDetailsChangeHandler} />
                        {error && error.name ? <span className="contact__validation-error">* Name required</span> : null}
                    </div>
                    <div className="contact__email">
                        <input type="text" name="email" className="contact__form-control" id="email" placeholder="Your Email" value={msgDetails.email} onChange={msgDetailsChangeHandler} />
                        {error && error.email ? <span className="contact__validation-error">* Email required</span> : null}
                        {error && error.emailPattern ? <span className="contact__validation-error">* Email invalid</span> : null}
                    </div>
                    <div className="contact__subject">
                        <input type="text" name="subject" className="contact__form-control" id="subject" placeholder="Subject" value={msgDetails.subject} onChange={msgDetailsChangeHandler} />
                        {error && error.subject ? <span className="contact__validation-error">* Subject required</span> : null}
                    </div>
                    <div className="contact__message">
                        <textarea className="contact__form-control" name="message" id="message" rows="6" placeholder="Message" value={msgDetails.message} onChange={msgDetailsChangeHandler}></textarea>
                        {error && error.message ? <span className="contact__validation-error">* Message required</span> : null}
                    </div>
                    <div className="contact__submit">
                        <input type="submit" className="contact__send-message" value="Send Message" />
                    </div>
                </div>
                <div className="contact__contact-details">
                    <h3>Get in Touch</h3>
                    <p>Do you have any questions?</p>
                    <p>Please feel free to drop me an email by filling out the send message form and I will respond to your email as soon as possible.</p>
                    <div className="contact__metadata">
                        <p><i className="fas fa-map-marker-alt"></i>E-302, Poorva Residency, Pimple Saudagar, Pune</p>
                        <p><i className="fas fa-phone"></i>+91 98907 46428</p>
                    </div>
                    <div className="social-buttons">
                        <a href="https://www.linkedin.com/in/nikhita-joshi-13302719/" className="social-margin" target="blank">
                        <div className="social-icon linkedin">
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                        </div> 
                        </a>
                        <a href="mailto:nikhita.joshi610@gmail.com"
                            target="blank"
                            className="social-margin"
                        >
                            <div className="social-icon email">
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </form>
        </ScrollAnimation>
    )
}

export default Contact
