import React from "react";
import "./Hero.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Hero = () => {
  return (
    <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={2}>
    <div className="home__about home">
      <div className="home__about-text">
        <h1>Nikhita Joshi</h1>
        <p>
          Hi, I am an Engineer turned UX designer. My engineer logic helps me to
          have an analytical approach to problem-solving. I seek to understand
          the data, research user behaviour to fully understand the user's
          needs, and learn the best UX practices.
        </p>
        <div className="social-buttons">
          <a
            href="https://www.linkedin.com/in/nikhita-joshi-13302719/"
            className="social-margin"
            target="blank"
          >
            <div className="social-icon linkedin">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </div>
          </a>
          <a
            href="mailto:nikhita.joshi610@gmail.com"
            target="blank"
            className="social-margin"
          >
            <div className="social-icon email">
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="home__about-image">
        <div className="home__about-image-container">
          <div className="home__about-image-profile"></div>
        </div>
      </div>
    </div>
    </ScrollAnimation>
  );
};

export default Hero;
