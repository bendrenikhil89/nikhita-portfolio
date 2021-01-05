import React from 'react';
import './Jumbotron.css';

const Jumbotron = ({src,title}) => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-content">
                <div className="jumbotron-image">
                    <img src={src} />
                </div>
                <div className="jumbotron-text">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
