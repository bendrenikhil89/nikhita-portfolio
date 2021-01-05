import React from 'react';
import './Skills.css';
import UXResearch from '../../assets/images/skills/card-img2.png';
import WireFrame from '../../assets/images/skills/card-img4.png';
import UserTesting from '../../assets/images/skills/card-img5.png';
import UXMethodology from '../../assets/images/skills/card-img1.png';

const Skills = () => {
    return (
        <div className="skills__wrapper">
        <div className="skills__container">
            <h2>Key Skills</h2>
            <div className="skills__cards__wrapper">
            <ul className="cards">
                <li className="cards_item">
                <div className="card">
                    <div className="card_image"><img src={UXResearch} /></div>
                    <div className="card_content">
                        <p>User Research</p>
                        <p>Card Sorting</p>
                        <p>Information Architecture</p>
                        <p>Heuristic Evaluation</p>
                    </div>
                </div>
                </li>

                <li className="cards_item">
                <div className="card">
                    <div className="card_image"><img src={WireFrame} /></div>
                    <div className="card_content">
                        <p>Personas Creation</p>
                        <p>Wireframes / Prototyping</p>
                        <p>Mobile Wireframing</p>
                        <p>Visual Designing</p>
                    </div>
                </div>
                </li>

                <li className="cards_item">
                <div className="card">
                    <div className="card_image"><img src={UserTesting} /></div>
                    <div className="card_content">
                        <p>User Acceptance Testing</p>
                        <p>Usability Testing</p>
                        <p>A/B Testing</p>
                    </div>
                </div>
                </li>

                <li className="cards_item">
                <div className="card">
                    <div className="card_image"><img src={UXMethodology} /></div>
                    <div className="card_content">
                        <p>UX in Lean Methodolgy</p>
                        <p>UX in Agile Methodology</p>
                    </div>
                </div>
                </li>

                
                
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Skills
