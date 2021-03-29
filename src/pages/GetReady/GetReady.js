import React from 'react';
import {Link} from 'react-router-dom';
import './GetReady.css';
import '../AppraisalSystem/AppraisalSystem.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ScrollAnimation from 'react-animate-on-scroll';

import headerPhoto from '../../assets/images/casestudies-dashboard/GetReady.png';

import DashAppraisal from '../../assets/svgs/DashGetReady.svg';
import User1 from '../../assets/images/AppraisalSystem/User1.jpg';
import User2 from '../../assets/images/AppraisalSystem/User2.jpg';
import User3 from '../../assets/images/AppraisalSystem/User3.jpg';

import userPersona from '../../assets/images/GetReady/GetReadyPersona.png';

import WireFrame1 from '../../assets/images/GetReady/WF1.png';
import WireFrame2 from '../../assets/images/GetReady/WF2.png';
import WireFrame3 from '../../assets/images/GetReady/WF3.png';
import WireFrame4 from '../../assets/images/GetReady/WF4.png';

import VD1 from '../../assets/images/GetReady/VD1.png';
import VD2 from '../../assets/images/GetReady/VD2.png';
import VD3 from '../../assets/images/GetReady/VD3.png';
import VD4 from '../../assets/images/GetReady/VD4.png';

import waySideHeader from '../../assets/images/casestudies-dashboard/WaysideTrans.png';
import appraisalHeader from '../../assets/images/casestudies-dashboard/AppraisalSystemTrans.png';
import autoHeader from '../../assets/images/casestudies-dashboard/AutonomousVehicleTrans.png';


const GetReady = () => {
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
                <h1>Get Ready! <img src={DashAppraisal} /></h1>
            </div>
            <div className="appraisal__header-photo">
                <img src={headerPhoto} style={{background:'#e6dbeb'}} />
            </div>
            <div className="cs__overview">
                <h3>Overview <img src={DashAppraisal} /></h3>
                <p>The users want an intelligent shopping application that helps them by suggesting different buying options best suited to their product of choice. For example, when a user is buying a white shirt, this app will provide users with the different options to pair up with the selected white shirt. In other shopping apps, usually suggestion of similar clothing is shown, but Get Ready! will suggest what can be paired up to complete a perfect look.</p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="appraisal__role getready">
                <div className="cs__duration">
                    <div>DURATION <img src={DashAppraisal} /></div>
                    <div>2 Months</div>
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
                            <li>Create visual designs</li>
                            <li>Explore prototyping tool Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__problemstatement">
                <h3>Problem Statement <img src={DashAppraisal} /></h3>
                <p>The users have a problem that they have to spend a lot of time searching for matching clothing/accessories for their current buying option on the shopping app. An ideal solution would be to having a shopping app, intelligent enough which suggests the users matching clothing, accessories, footwear, etc. that can be bought with the current option which user is considering to buy give the user a perfect look.</p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__userresearch">
                <h3>User Research <img src={DashAppraisal} /></h3>
                <p>End users were easily available for the user interviews. A set of questions was asked to the users regarding their experience of using other shopping apps and to understand the problem they were facing using them. It was observed that the users would spend most of the time finding matching options for their current buying option.</p>
                <div className="cs__usercomments">
                    <div className="cs__useravatar cs__useravatar1"><img src={User1} /></div>
                    <div className="cs__usercomment getready cs__usercomment1">"I would like to buy the same set of outfits worn by the model!"</div>
                </div>
                <div className="cs__usercomments cs__usercomments2">
                    <div className="cs__useravatar cs__useravatar2"><img src={User2} /></div>
                    <div className="cs__usercomment getready cs__usercomment2">"I want to see the best suitable match for what I am planning to buy. Too many options confuse me!"</div>
                </div>
                <div className="cs__usercomments">
                    <div className="cs__useravatar cs__useravatar3"><img src={User3} /></div>
                    <div className="cs__usercomment getready cs__usercomment3">"I am not good with color combination, I want someone to help me!"</div>
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
                            <img src={userPersona} />
                        </div>
                    </Carousel>
                </div>
            </div>
            </ScrollAnimation>
            
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__wireframes">
                <h3>Wireframes <img src={DashAppraisal} /></h3>
                <div className="cs__wireframecontainer getready">
                    <div className="cs__pp1"><img src={WireFrame1} /></div>
                    <div className="cs__pp2"><img src={WireFrame2} /></div>
                    <div className="cs__pp3"><img src={WireFrame3} /></div>
                    <div className="cs__pp4"><img src={WireFrame4} /></div>
                </div>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__wireframes">
                <h3>Visual Design <img src={DashAppraisal} /></h3>
                <div className="cs__wireframecontainer getready">
                    <div className="cs__pp1"><img src={VD1} style={{background:'#efebe9'}} /></div>
                    <div className="cs__pp2"><img src={VD3} style={{background:'#efebe9'}} /></div>
                    <div className="cs__pp3"><img src={VD2} style={{background:'#efebe9'}} /></div>
                    <div className="cs__pp4"><img src={VD4} style={{background:'#efebe9'}} /></div>
                </div>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__usabilitytesting">
                <h3>Usability Testing <img src={DashAppraisal} /></h3>
                <p>Usability testing was conducted with a set of target users. It was observed that users were happy to get suggestions from the app which made the shopping a pleasurable experience. Not only that, because the users were provided with matching options, the overall sale for the sellers was more than on other normal e-commerce fashion stores.</p>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={1}>
            <div className="cs__conclusion">
                <h3>Conclusion <img src={DashAppraisal} /></h3>
                <p>In Get Ready! shopping app, users find it very easy to buy a perfect look. They don’t have to browse through various sections to find a matching outfit or accessory for their current purchase. This helped the user to save their efforts and time and make a good buy. Because of its good efficiency, the app was preferred by a large number of users resulting in a large number of downloads from the app store.</p>
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
                        <div><img src={autoHeader} style={{background:'#b9dccb',height:'225px'}} /></div>
                        <div className="cs__card_content">
                            <h2 className="cs__card_title">Autonomous Vehicle System</h2>
                            <button className="btn cs__btn-green"><Link to="/casestudy/autonomousvehicle">View Case Study</Link></button>
                        </div>
                    </li>
                </ul>
            </div>
            </ScrollAnimation>

        </div>
        </div>
    )
}

export default GetReady;