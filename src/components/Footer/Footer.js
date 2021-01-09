import React from 'react';
import './Footer.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () => {
    return (
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1} offset={0} delay={250}>
        <div className="footer__wrapper">
            <div className="footer__container">
                © Copyright <strong>Nikhita Joshi</strong>. All Rights Reserved
            </div>
        </div>
        </ScrollAnimation>
    )
}

export default Footer;