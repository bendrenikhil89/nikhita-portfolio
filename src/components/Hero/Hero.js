import React from 'react';
import './Hero.css';
import Nikhita from '../../assets/images/Nikhita.jpg';

const Hero = () => {
    return (
        <div className="hero__container">
            <div className="hero__text">
                <p>User Experience Specialist with a demonstrated history of working in both, Service and Product Industry. I believe that stepping in the user’s shoe is the key for a good design. I feel when we think like a user, we understand the actual problems and contribute to the design process more efficiently.</p>
            </div>
            <div className="hero__image">
                <img src={Nikhita}/>
            </div>
        </div>
    )
}

export default Hero;
