import React from 'react';
import './AutonomousVehicle.css';

import BannerImage from '../../assets/images/AutonomousVehicle/AutonomousVehicle.jpg';

import Personas1 from '../../assets/images/AutonomousVehicle/PersonaAuto.svg';

import CardSorting from '../../assets/images/AppraisalSystem/4.jpg';
import Appraisee from '../../assets/images/AppraisalSystem/Appraisee.svg';

import WF1 from '../../assets/images/AppraisalSystem/WF1.png';
import WF2 from '../../assets/images/AppraisalSystem/WF2.png';
import WF3 from '../../assets/images/AppraisalSystem/WF3.png';
import WF4 from '../../assets/images/AppraisalSystem/WF4.png';
import CaseStudyBanner from '../../components/CaseStudyBanner/CaseStudyBanner';



const AutonomousVehicle = () => {
    return (
        <div className="av__container">
            <CaseStudyBanner title="Autonomous Vehicle Monitoring Web Application" src={BannerImage} />
            <div className="casestudy-para">
                <div className="casestudy-para-title">
                    <h3>Purpose</h3>
                </div>
                <div className="casestudy-para-desc">
                    <p>The operators need to monitor the operation of autonomus vehicles, address if there are any obstracles, check for notifications and divert the vehicles if the roads are blocked. This web application will help the operators to complete their tasks easily and without any issues.</p>
                </div>

                <div className="casestudy-para-title">
                    <h3>Impact</h3>
                </div>
                <div className="casestudy-para-desc">
                    <p>In Autonomous vehicle monitoring web application, the operators found what they were looking for. The easy monitoring sytem lead to increased efficiency of the users. They were able to easily track any object of their choice, find the issue in it and connect with the stake holders to resolve it. Because of the great effeciency, this application gave great ROI. Soon the application was rolled out in the market leading to the high demand in different companies.</p>
                </div>

                <div className="casestudy-para-title">
                    <h3>My Role and Responsibilities</h3>
                </div>
                <div className="casestudy-para-desc">
                    <p>I joined this project from the scratch. I was part of initial meetings with the stakeholders held for understanding the requirements. I worked with a fellow designer who was at the client location. I was responsible for:</p>
                    <ul>
                        <li>Requirement gathering and analysis</li>
                        <li>User research</li>
                        <li>Designing low-fi wirframes</li>
                        <li>Visual designs</li>
                    </ul>
                </div>

                <div className="casestudy-para-title">
                    <h3>Project Duration</h3>
                </div>
                <div className="casestudy-para-desc">
                    <p>4 months</p>
                </div>

                <div className="casestudy-para-title">
                    <h3>Problem Statement</h3>
                </div>
                <div className="casestudy-para-desc">
                    <p>The operators have a problem in monitorning and managing the notifications for automonus vehicle remotely. An ideal solution would be a web application which operators can access remotely, montior and handle notifications simultaneously. </p>
                </div>

                <div className="casestudy-para-title">
                    <h3>Process Followed</h3>
                </div>

                            
                <div className="timeline-item" process-title='User Interviews'>

                <p>As there was only one target user: The operator, identifying users was not a hard task. We created few list of questions to understand the what are user’s needs, what users want to do in the application, which all things are important for monitoring purpose, etc. During user interviews we came to know that: </p>
                    <ul>
                        <li>The operators prefers to work on multiple displays at the same time because of too much data to be considered for the monitoring purpose. </li>
                        <li>There is a fixed pattern based on which the vehicle, routes, Infra objects, etc. are named and the operators find it easy to remember those names. </li>
                    </ul>
               </div>
                
                <div className="timeline-item" process-title='Creating Personas'>
                    <p>1 persona was finalized and created</p>
                    <ul>
                        <li>Operator</li>
                    </ul>
                    <div className="tl__images">
                        <div><img src={Personas1}/></div>                     
                    </div>
                </div>

                <div className="timeline-item" process-title='Card Sorting Activity'>
                    <p>There was long list of user requirements. Card Sorting activity was performed to finalized the functionalities</p>
                    <div className="tl__images">
                        <div><img src={CardSorting}/></div>
                    </div>
                    <p>There was alot of information involved with Vehicle. So it was decided to make a separate page have list of vehicle and all the details associated with it.</p>
                </div>

                <div className="timeline-item" process-title='Finalizing Information Architecture'>
                    <p style={{marginTop:'20px'}}>Appraisee</p>
                    <div className="tl__images wf__images">
                        <div><img src={Appraisee}/></div>
                    </div>               
                </div>

                <div className="timeline-item" process-title='Creating Wireframes'>
                    <div className="tl__images wf__images">
                        <div><img src={WF1}/></div>
                        <div><img src={WF2}/></div>
                        <div><img src={WF3}/></div>
                        <div><img src={WF4}/></div>
                    </div>
                </div>

                <div className="timeline-item" process-title='Creating Visual Designs'>
                    <div className="tl__images wf__images">
                        <div><img src={WF1}/></div>
                        <div><img src={WF2}/></div>
                        <div><img src={WF3}/></div>
                        <div><img src={WF4}/></div>
                    </div>
                </div>

                <div className="timeline-item" process-title='Conducting Usability Testing at the client location'>
                    <p>My fellow designer who was located at the client location conducted usability testing with the operators. As there were continous feedback session with the operators involved in the design process and colored reprsentation mattered alot so visual designs were considered for the usability testing. Few minor color coding representation of notifications and states of the vehicle and infra objects were revisited based on the user feedback.</p>
                </div>

            </div>
        </div>
    )
}

export default AutonomousVehicle;
