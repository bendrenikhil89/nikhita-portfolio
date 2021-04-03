import React from 'react';
import {Link} from 'react-router-dom';
import './AutonomousVehicle.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AppraisalSystem from '../../assets/images/casestudies-dashboard/AutonomousVehicleTrans.png';
import DashAuto from '../../assets/svgs/DashAuto.svg';
import User1 from '../../assets/images/AppraisalSystem/User1.jpg';
import User2 from '../../assets/images/AppraisalSystem/User2.jpg';
import User3 from '../../assets/images/AppraisalSystem/User3.jpg';
import AutoPersona from '../../assets/images/AutonomousVehicle/AutonomousPersona.png';

import AutoCardSorting from '../../assets/images/AutonomousVehicle/AutoCardSorting.jpg'
import AutoWF1 from '../../assets/images/AutonomousVehicle/AutoWF1.png';
import AutoWF2 from '../../assets/images/AutonomousVehicle/AutoWF2.png';
import AutoWF3 from '../../assets/images/AutonomousVehicle/AutoWF3.png';
import AutoWF4 from '../../assets/images/AutonomousVehicle/AutoWF4.png';

import AutoVD1 from '../../assets/images/AutonomousVehicle/AutoVD1.png';
import AutoVD2 from '../../assets/images/AutonomousVehicle/AutoVD2.png';
import AutoVD3 from '../../assets/images/AutonomousVehicle/AutoVD3.png';
import AutoVD4 from '../../assets/images/AutonomousVehicle/AutoVD4.png';

import waySideHeader from '../../assets/images/casestudies-dashboard/WaysideTrans.png';
import appraisalHeader from '../../assets/images/casestudies-dashboard/AppraisalSystemTrans.png';
import getReady from '../../assets/images/casestudies-dashboard/GetReady.png';

import ScrollAnimation from 'react-animate-on-scroll';

const AutonomousVehicle = () => {
    const arrowStyles= {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
        textAlign: 'end',
        fontSize: '24px',
        color: '#2d3948'
    };

    return (
        <div className="cs__background">
        <div className="cs__container">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={2} offset={60}>
            <div className="cs__header-title">
                <h1>Autonomous Vehicle Operation Monitoring Web App <img src={DashAuto} /></h1>
            </div>
            <div className="auto__header-photo">
                <img src={AppraisalSystem} />
            </div>
            <div className="cs__overview">
                <h3>Overview <img src={DashAuto} /></h3>
                <p>The operators monitor the operation of autonomous vehicles, address obstacles if there are any, check for notifications and divert the vehicles if the roads are blocked. This web application will help the operators to complete their tasks more efficiently with a reduced scope of errors.</p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="auto__role">
                <div className="cs__duration">
                    <div>DURATION <img src={DashAuto} /></div>
                    <div>5 Months</div>
                </div>
                <div className="cs__role">
                    <div>ROLE <img src={DashAuto} /></div>
                    <div>UX Designer</div>
                </div>
                <div className="cs__res">
                    <div>RESPONSIBILITIES <img src={DashAuto} /></div>
                    <div>
                        <ul>
                            <li>Conduct User Research</li>
                            <li>Create Wireframes</li>
                            <li>Create Visual Design</li>
                        </ul>
                    </div>
                </div>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__problemstatement">
                <h3>Problem Statement <img src={DashAuto} /></h3>
                <p>The operators do not have a system wherein they can monitor and manage the notifications for autonomous vehicles remotely. The problems had to be conveyed manually by the driver to the operators. With the introduction of autonomous vehicles, the driver would no longer be a part of the process, thus leading to lack of infrastructure to monitor and manage the newer autonomous vehicles. An ideal solution would be a web application that operators can access remotely to monitor thus enabling them to handle notifications simultaneously.</p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__userresearch">
                <h3>User Research <img src={DashAuto} /></h3>
                <p>As there was a single target user group: "the operators", identifying end users was straightforward. We created a few lists of questions to understand the current protocol being followed when an operator would be notified of an issue, what the current bottlenecks were, what features were a must have for the users to do their job more efficiently etc.</p>
                <div className="cs__usercomments auto__usercomments">
                    <div className="cs__useravatar cs__useravatar1"><img src={User1} /></div>
                    <div className="cs__usercomment cs__usercomment1 auto__usercomment">"I would like to work on multiple displays at the same time to enhance my productivity to monitor complex data!"</div>
                </div>
                <div className="cs__usercomments cs__usercomments2">
                    <div className="cs__useravatar cs__useravatar2"><img src={User2} /></div>
                    <div className="cs__usercomment cs__usercomment2 auto__usercomment">"I don't want to have any changes made to the naming convention/patterns for vehicle, routes, etc as I am familiar with the current pattern!"</div>
                </div>
                <div className="cs__usercomments">
                    <div className="cs__useravatar cs__useravatar3"><img src={User3} /></div>
                    <div className="cs__usercomment cs__usercomment3 auto__usercomment">"It would be great if I can track live running status of vehicles!"</div>
                </div>
                <p className="cs__personaText">Based on the above user research, 1 persona was finalized and created.</p>

                <div className="cs__personaSlider">
                    <Carousel 
                        showArrows={true} 
                        showThumbs={false} 
                        showIndicators={false}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <span onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0, textAlign:'left' }}>
                                    <i className="fas fa-chevron-left"></i>
                                </span>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <span onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0, textAlign:'right' }}>
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            )
                        }
                    >
                        <div>
                            <img src={AutoPersona} />
                        </div>
                    </Carousel>
                </div>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__redesignprocess">
                <h3>Card Sorting Activity <img src={DashAuto} /></h3>
                <p>After conducting user interviews, a list of requirements were identified. Card sorting activity was performed to pick and choose which user requirements were to be included as a part of the web application.</p>
                <div className="cs__cardsorting">
                    <img src={AutoCardSorting} />
                </div>
                <p>Because there was a lot of vehicle metadata, it was decided that a vehicles will have a separate page displaying all minute details for a better overview.</p>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__wireframes">
                <h3>Wireframes <img src={DashAuto} /></h3>
                <p>This was a web application that would be operated from a control center with big monitors. To accommodate this workstation constraint, we created web apps screens for big monitor resolution instead of following mobile first approach.</p>
                <div className="auto__wireframecontainer">
                    <div className="auto__pp1"><img src={AutoWF1} /></div>
                    <div className="auto__pp2"><img src={AutoWF2} /></div>
                    <div className="auto__pp3"><img src={AutoWF3} /></div>
                    <div className="auto__pp4"><img src={AutoWF4} /></div>
                </div>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__wireframes">
                <h3>Visual Designs <img src={DashAuto} /></h3>
                <div className="auto__wireframecontainer">
                    <div className="auto__pp1"><img src={AutoVD1} /></div>
                    <div className="auto__pp2"><img src={AutoVD2} /></div>
                    <div className="auto__pp3"><img src={AutoVD3} /></div>
                    <div className="auto__pp4"><img src={AutoVD4} /></div>
                </div>
            </div>
            </ScrollAnimation>
                        
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__usabilitytesting">
                <h3>Usability Testing <img src={DashAuto} /></h3>
                <p>My fellow UX designer who was located at the client location conducted usability testing with the operators. The clickable prototype was used with real tasks & on real systems in Hamburg, Germany for the testing. The result was analyzed and it was inferred that user requirements varied little than the client's requirement. Changes were done to the wireframes and after 2-3 iterations, the design was finalized.</p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__conclusion">
                <h3>Conclusion <img src={DashAuto} /></h3>
                <p>The Autonomous vehicle monitoring web application ticked all the boxes which were deemed as a neccessity by the operators. The easy monitoring system lead to increased efficiency of the users. They were able to easily track any object of their choice, find the issue and connect with the right stakeholders to resolve it. Because of its great efficiency, this application gave great ROI and thus the application was rolled out in the market, leading to a high demand in different companies.</p>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="h-divider">
                <div className="shadow"></div>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__othercs">
                <ul className="cs__cards">
                    <li>
                        <div><img src={waySideHeader} style={{background:'#b7dcf4',height:'225px'}} /></div>
                        <div className="cs__card_content">
                            <h2 className="cs__card_title">Wayside Inspector</h2>
                            <button className="btn cs__btn-blue"><Link to="/casestudy/wayside">View Case Study</Link></button>
                        </div>
                    </li>
                    <li>
                        <div><img src={appraisalHeader} style={{background:'#fee4bd',height:'225px'}} /></div>
                        <div className="cs__card_content">
                            <h2 className="cs__card_title">Appraisal System Revamping</h2>
                            <button className="btn cs__btn-orange"><Link to="/casestudy/appraisalsystem">View Case Study</Link></button>
                        </div>
                    </li>
                    <li>
                        <div><img src={getReady} style={{background:'#e6dbeb',height:'225px'}} /></div>
                        <div className="cs__card_content">
                            <h2 className="cs__card_title">Get Ready</h2>
                            <button className="btn cs__btn-purple"><Link to="/casestudy/getready">View Case Study</Link></button>
                        </div>
                    </li>
                </ul>
            </div>
            </ScrollAnimation>
        </div>
        </div>
    )
}

export default AutonomousVehicle;