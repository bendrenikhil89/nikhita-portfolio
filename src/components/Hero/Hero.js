import React from "react";
import "./Hero.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {Link as LinkS} from 'react-scroll';
import useWindowDimensions from '../../Hooks/useWindowDimensions';

const Hero = () => {
  const { width } = useWindowDimensions();
  
  return (
    <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={3} offset={0}>
    <div className="home__about home">
      <div className="home__about-text">
        <div>
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
        {width > 1024 && <div className="landing__arrow landing__bounce">
          <LinkS to="casestudies" spy={true} smooth={true} duration={1000} offset={-45}><i className="fas fa-angle-double-down fa-2x"></i></LinkS>
        </div>}
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
