import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home__container">
            <div className="home__about">
                <div className="home__about-text">
                    <h1>Nikhita Joshi</h1>
                    <p>Hi, I am an Engineer turned UX designer. My engineer logic helps me to have an analytical approach to problem-solving. I seek to understand the data, research user behaviour to fully understand the user's needs, and learn the best UX practices.</p>
                    <div className="social-buttons">
                        <a href="https://www.linkedin.com/in/nikhil-bendre-529939104/" className="social-margin" target="blank">
                        <div className="social-icon linkedin">
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                        </div> 
                        </a>
                        <a href="mailto:nikhita.joshi610@gmail.com"  target="blank"  className="social-margin">
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
        </div>
    )
}

export default Home;
