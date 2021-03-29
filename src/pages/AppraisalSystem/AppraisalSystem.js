import React from 'react';
import {Link} from 'react-router-dom';
import './AppraisalSystem.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ScrollAnimation from 'react-animate-on-scroll';

import headerPhoto from '../../assets/images/casestudies-dashboard/AppraisalSystemTrans.png';

import DashAppraisal from '../../assets/svgs/DashAppraisal.svg';
import User1 from '../../assets/images/AppraisalSystem/User1.jpg';
import User2 from '../../assets/images/AppraisalSystem/User2.jpg';
import User3 from '../../assets/images/AppraisalSystem/User3.jpg';
import Appraisee from '../../assets/images/AppraisalSystem/AppraiseePersona.png';
import Appraiser from '../../assets/images/AppraisalSystem/AppraiserPersona.png';
import Reviewer from '../../assets/images/AppraisalSystem/ReviewerPersona.png';
import AppraisalCardSorting from '../../assets/images/AppraisalSystem/AppraisalCardSorting.jpg'
import PaperPrototype1 from '../../assets/images/AppraisalSystem/AppraisalPP1.jpg';
import PaperPrototype2 from '../../assets/images/AppraisalSystem/AppraisalPP2.jpg';
import PaperPrototype3 from '../../assets/images/AppraisalSystem/AppraisalPP3.jpg';
import PaperPrototype4 from '../../assets/images/AppraisalSystem/AppraisalPP4.jpg';
import WireFrame1 from '../../assets/images/AppraisalSystem/AppraisalWF1.png';
import WireFrame2 from '../../assets/images/AppraisalSystem/AppraisalWF2.png';
import WireFrame3 from '../../assets/images/AppraisalSystem/AppraisalWF3.png';
import WireFrame4 from '../../assets/images/AppraisalSystem/AppraisalWF4.png';
import WireFrame5 from '../../assets/images/AppraisalSystem/AppraisalWF5.png';
import WireFrame6 from '../../assets/images/AppraisalSystem/AppraisalWF6.png';
import VD1 from '../../assets/images/AppraisalSystem/VD1.png';
import VD2 from '../../assets/images/AppraisalSystem/VD3.png';
import VD3 from '../../assets/images/AppraisalSystem/VD2.png';
import VD4 from '../../assets/images/AppraisalSystem/VD4.png';
import VD5 from '../../assets/images/AppraisalSystem/VD5.png';
import VD6 from '../../assets/images/AppraisalSystem/VD6.png';

import waySideHeader from '../../assets/images/casestudies-dashboard/WaysideTrans.png';
import getReady from '../../assets/images/casestudies-dashboard/GetReady.png';
import autoHeader from '../../assets/images/casestudies-dashboard/AutonomousVehicleTrans.png';

const AppraisalSystem = () => {
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
                <h1>Appraisal System Revamping <img src={DashAppraisal} /></h1>
            </div>
            <div className="appraisal__header-photo">
                <img src={headerPhoto} style={{background:"#fee4bd"}} />
            </div>
            <div className="cs__overview">
                <h3>Overview <img src={DashAppraisal} /></h3>
                <p>Employees and Managers have to fill data for appraisals, set goals and evaluate them. The appraisal tool should ease their work by providing an user intuitive navigation, highlight important tasks by providing notification badges and providing a mechanism to help users track their goals.</p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="appraisal__role">
                <div className="cs__duration">
                    <div>DURATION <img src={DashAppraisal} /></div>
                    <div>9 Months</div>
                </div>
                <div className="cs__role">
                    <div>ROLE <img src={DashAppraisal} /></div>
                    <div>UX Designer & Team Lead</div>
                </div>
                <div className="cs__res">
                    <div>RESPONSIBILITIES <img src={DashAppraisal} /></div>
                    <div>
                        <ul>
                            <li>Conduct User Research</li>
                            <li>Ideate and Prototype</li>
                            <li>Manage / review UX & VD team deliverables</li>
                        </ul>
                    </div>
                </div>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__problemstatement">
                <h3>Problem Statement <img src={DashAppraisal} /></h3>
                <p>The users were facing a problem in filling data in the current application. The users were overwhelmed because of complex & unnecessary functionalities and missing out on the necessary ones. An ideal solution would be to have an application that would show important functionalities upfront thus easing the entire appraisal process.</p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__userresearch">
                <h3>User Research <img src={DashAppraisal} /></h3>
                <p>After initial rounds of discussion with the stakeholders, target users were identified. User interviews were planned for which a few questions were created to understand the shortcomings of the current application. Furthermore, "how might we..." questions were also created to help us better understand the user's task and goal.</p>
                <div className="cs__usercomments">
                    <div className="cs__useravatar cs__useravatar1"><img src={User1} /></div>
                    <div className="cs__usercomment appraisal cs__usercomment1">"I would like to track progress of goals assigned to me!"</div>
                </div>
                <div className="cs__usercomments cs__usercomments2">
                    <div className="cs__useravatar cs__useravatar2"><img src={User2} /></div>
                    <div className="cs__usercomment appraisal cs__usercomment2">"I would like to keep myself abreast with my peer's goals and progress to keep myself motivated!"</div>
                </div>
                <div className="cs__usercomments">
                    <div className="cs__useravatar cs__useravatar3"><img src={User3} /></div>
                    <div className="cs__usercomment appraisal cs__usercomment3">"As a manager, I would like to have a dashboard view which would list my reportees' goals and progress!"</div>
                </div>
                <p className="cs__personaText">Based on the above user research, 3 personas were finalized and created.</p>

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
                            <img src={Appraisee} />
                        </div>
                        <div>
                            <img src={Appraiser} />
                        </div>
                        <div>
                            <img src={Reviewer} />
                        </div>
                    </Carousel>
                </div>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__redesignprocess">
                <h3>Redesign Process <img src={DashAppraisal} /></h3>
                <p>After getting inputs from the target users, a card sorting activity was done in order to determine which functionalities should be kept and which should removed.</p>
                <div className="cs__cardsorting">
                    <img src={AppraisalCardSorting} />
                </div>
                <p>After conducting card sorting activities with the users, few functionalities like My Progress overview, peer progress and team progress were included.</p>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn ' animateOnce={true} duration={1}>
            <div className="cs__paperprototype">
                <h3>Creating Paper Prototypes <img src={DashAppraisal} /></h3>
                <div className="cs__prototypecontainer">
                    <div className="cs__pp1"><img src={PaperPrototype1} /></div>
                    <div className="cs__pp2"><img src={PaperPrototype2} /></div>
                    <div className="cs__pp3"><img src={PaperPrototype3} /></div>
                    <div className="cs__pp4"><img src={PaperPrototype4} /></div>
                </div>
            </div>
            </ScrollAnimation>

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
            <div className="cs__wireframes">
                <h3>Visual Design <img src={DashAppraisal} /></h3>
                <div className="cs__wireframecontainer">
                    <div className="cs__pp1"><img src={VD1} /></div>
                    <div className="cs__pp2"><img src={VD2} /></div>
                    <div className="cs__pp3"><img src={VD3} /></div>
                    <div className="cs__pp4"><img src={VD4} /></div>
                    <div className="cs__pp4"><img src={VD5} /></div>
                    <div className="cs__pp4"><img src={VD6} /></div>
                </div>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__usabilitytesting">
                <h3>Usability Testing <img src={DashAppraisal} /></h3>
                <p>As reaching the users was easy, we conducted usability testing in the usability lab. All the major use cases were considered. As part of the study, it was observed that users were able to identify and update their goals. Based on the user feedbacks, more details were added to the peer goals overview section. Also for appraiser view, more goal details were added to the landing screen.</p>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__conclusion">
                <h3>Conclusion <img src={DashAppraisal} /></h3>
                <p>The revamping of the appraisal system helped employees and managers in a much positive way. The employees now have clarity on their goals and evaluation throughout the year. Managers can keep tracking their employee’s progress without manually following up. The appraisals became such an easy and quick thing for all the employees and managers, that they started spending the same time on their work and productivity increased.</p>
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

export default AppraisalSystem;