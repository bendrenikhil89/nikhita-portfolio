import React from 'react';
import {Link} from 'react-router-dom';
import '../AppraisalSystem/AppraisalSystem.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ScrollAnimation from 'react-animate-on-scroll';

import headerPhoto from '../../assets/images/casestudies-dashboard/WaysideTrans.png';

import DashAppraisal from '../../assets/svgs/DashWayside.svg';
import User1 from '../../assets/images/AppraisalSystem/User1.jpg';
import User2 from '../../assets/images/AppraisalSystem/User2.jpg';
import User3 from '../../assets/images/AppraisalSystem/User3.jpg';

import admin from '../../assets/images/Wayside/Admin.png';
import backoffice from '../../assets/images/Wayside/Backoffice.png';
import supervisor from '../../assets/images/Wayside/Supervisor.png';
import maintainer from '../../assets/images/Wayside/Maintainer.png';


import PaperPrototype1 from '../../assets/images/Wayside/WaysidePaperPrototype.png';
import styleGuide1 from '../../assets/images/Wayside/Styleguide1.png';
import styleGuide2 from '../../assets/images/Wayside/Styleguide2.png';

import WireFrame1 from '../../assets/images/AppraisalSystem/AppraisalWF1.png';
import WireFrame2 from '../../assets/images/AppraisalSystem/AppraisalWF2.png';
import WireFrame3 from '../../assets/images/AppraisalSystem/AppraisalWF3.png';
import WireFrame4 from '../../assets/images/AppraisalSystem/AppraisalWF4.png';
import WireFrame5 from '../../assets/images/AppraisalSystem/AppraisalWF5.png';
import WireFrame6 from '../../assets/images/AppraisalSystem/AppraisalWF6.png';

import getReady from '../../assets/images/casestudies-dashboard/GetReady.png';
import appraisalHeader from '../../assets/images/casestudies-dashboard/AppraisalSystemTrans.png';
import autoHeader from '../../assets/images/casestudies-dashboard/AutonomousVehicleTrans.png';

import './Wayside.css';


const Wayside = () => {

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
                <h1>Wayside Inspector <img src={DashAppraisal} /></h1>
            </div>
            <div className="appraisal__header-photo">
                <img src={headerPhoto} style={{background:'#b7dcf4'}} />
            </div>
            <div className="cs__overview">
                <h3>Overview <img src={DashAppraisal} /></h3>
                <p>Railroad personnel spend large amounts of time performing FRA required inspections of grade crossings. Siemens’ Wayside Inspector has been designed to facilitate the labour of the railroad inspectors, improving test management while decreasing train delays driven in this process. Currently, the Wayside Inspector performs three FRA mandated tests including warning time, which is the most time-consuming test. Additionally, it also performs monthly standby power tests, as well as a ground fault detection system that monitors the battery buses. The use of the Wayside Inspector can help railroads to increase testing efficiency and facilitate the inspector’s work.</p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="appraisal__role wayside">
                <div className="cs__duration">
                    <div>DURATION <img src={DashAppraisal} /></div>
                    <div>4 Months</div>
                </div>
                <div className="cs__role">
                    <div>ROLE <img src={DashAppraisal} /></div>
                    <div>UX Designer</div>
                </div>
                <div className="cs__res">
                    <div>RESPONSIBILITIES <img src={DashAppraisal} /></div>
                    <div>
                        <ul>
                            <li>Requirement gathering</li>
                            <li>Conduct User Research</li>
                            <li>Ideate and Prototype</li>
                            <li>Manage / review UX & VD team deliverables</li>
                            <li>Usability testing</li>
                        </ul>
                    </div>
                </div>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__problemstatement">
                <h3>Problem Statement <img src={DashAppraisal} /></h3>
                <p>The wayside crossing field personnel/ engineer has a task to monitor and maintain the wayside crossing using the cloud application where he could view/schedule the tests for the Wayside Inspector Hardware remotely. An ideal solution would enable him to easily do this job efficiently thereby reducing the maintenance times which benefit the network operators and maintaining company.</p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__userresearch">
                <h3>User Research <img src={DashAppraisal} /></h3>
                <p>The users were easily approachable for user interviews. I created a list of questions to understand the problems users were facing with the existing remote maintenance system.</p>
                <div className="cs__usercomments">
                    <div className="cs__useravatar cs__useravatar1"><img src={User1} /></div>
                    <div className="cs__usercomment cs__usercomment1">"I would like to receive issue with wayside devices directly!"</div>
                </div>
                <div className="cs__usercomments cs__usercomments2">
                    <div className="cs__useravatar cs__useravatar2"><img src={User2} /></div>
                    <div className="cs__usercomment cs__usercomment2">"I would like to have help on the go if I am stuck with the issue!"</div>
                </div>
                <div className="cs__usercomments">
                    <div className="cs__useravatar cs__useravatar3"><img src={User3} /></div>
                    <div className="cs__usercomment cs__usercomment3">"I would like to monitor the system and input status!"</div>
                </div>
                <p className="cs__personaText">Based on the above user research, 4 personas were finalized and created.</p>

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
                            <img src={admin} />
                        </div>
                        <div>
                            <img src={backoffice} />
                        </div>
                        <div>
                            <img src={supervisor} />
                        </div>
                        <div>
                            <img src={maintainer} />
                        </div>
                    </Carousel>
                </div>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn ' animateOnce={true} duration={1}>
            <div className="cs__paperprototype">
                <h3>Creating Paper Prototype <img src={DashAppraisal} /></h3>
                <div>
                    <div className="cs__pp1 wayside"><img src={PaperPrototype1} /></div>
                </div>
            </div>
            </ScrollAnimation>
            
            <div className="cs__paperprototype cs__styleguide">
                <h3>Design Style Guide <img src={DashAppraisal} /></h3>
                <div className="cs__prototypecontainer">
                    <div className="cs__pp1"><img src={styleGuide1} /></div>
                </div>
                <div className="cs__prototypecontainer">
                    <div className="cs__pp1"><img src={styleGuide2} /></div>
                </div>
            </div>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__wireframes">
                <h3>Wireframes <img src={DashAppraisal} /></h3>
                <div className="cs__wireframecontainer">
                    <div className="cs__pp1"><img src={WireFrame1} /></div>
                    <div className="cs__pp2"><img src={WireFrame2} /></div>
                    <div className="cs__pp3"><img src={WireFrame3} /></div>
                    <div className="cs__pp4"><img src={WireFrame4} /></div>
                    <div className="cs__pp4"><img src={WireFrame5} /></div>
                    <div className="cs__pp4"><img src={WireFrame6} /></div>
                </div>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__usabilitytesting">
                <h3>Usability Testing <img src={DashAppraisal} /></h3>
                <p>Usability testing was conducted over screen sharing sessions because the users were located in Europe. Also, the users were new to the online experience, we were given a lot of feedback which resulted in multiple iterations until the users were satisfied.</p>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__conclusion">
                <h3>Conclusion <img src={DashAppraisal} /></h3>
                <p>This application increased the efficiency of resolving alarms which led to lesser wayside equipment failures. The maintainer group could easily identify the fault location because of the integrated GPS in the application while the admin, back-office & supervisor group could easily track wayside inspector alarms online.</p>
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
                        <div><img src={appraisalHeader} style={{background:'#fee4bd',height:'225px'}} /></div>
                        <div className="cs__card_content">
                            <h2 className="cs__card_title">Appraisal System Revamping</h2>
                            <button className="btn cs__btn-orange"><Link to="/casestudy/appraisalsystem">View Case Study</Link></button>
                        </div>
                    </li>
                    <li>
                        <div><img src={autoHeader} style={{background:'#b9dccb',height:'225px'}} /></div>
                        <div className="cs__card_content">
                            <h2 className="cs__card_title">Autonomous Vehicle System</h2>
                            <button className="btn cs__btn-green"><Link to="/casestudy/autonomousvehicle">View Case Study</Link></button>
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

export default Wayside
