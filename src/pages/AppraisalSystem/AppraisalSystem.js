import React from 'react';
import './AppraisalSystem.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import DashAppraisal from '../../assets/svgs/DashAppraisal.svg';
import User1 from '../../assets/images/AppraisalSystem/User1.jpg';
import User2 from '../../assets/images/AppraisalSystem/User2.jpg';
import User3 from '../../assets/images/AppraisalSystem/User3.jpg';
import Appraisee from '../../assets/images/AppraisalSystem/AppraiseePersona.png';
import Appraiser from '../../assets/images/AppraisalSystem/AppraiserPersona.png';
import Reviewer from '../../assets/images/AppraisalSystem/ReviewerPersona.png';
import AppraisalCardSorting from '../../assets/images/AppraisalSystem/AppraisalCardSorting.jpg'

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
            <div className="cs__header-title">
                <h1>Appraisal System Revamping <img src={DashAppraisal} /></h1>
            </div>

            <div className="appraisal__header-photo"></div>

            <div className="cs__overview">
                <h3>Overview <img src={DashAppraisal} /></h3>
                <p>Employees and Managers have to fill data for appraisals, set goals and evaluate them. The appraisal tool should ease their work by providing an user intuitive navigation, highlight important tasks by providing notification badges and providing a mechanism to help users track their goals.</p>
            </div>

            <div className="appraisal__role">
                <div className="cs__duration">
                    <div>DURATION <img src={DashAppraisal} /></div>
                    <div>5 Months</div>
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

            <div className="cs__problemstatement">
                <h3>Problem Statement <img src={DashAppraisal} /></h3>
                <p>The users were facing a problem in filling data in the current application. The users were overwhelmed because of complex & unnecessary functionalities and missing out on the necessary ones. An ideal solution would be to have an application that would show important functionalities upfront thus easing the entire appraisal process.</p>
            </div>

            <div className="cs__userresearch">
                <h3>User Research <img src={DashAppraisal} /></h3>
                <p>After initial rounds of discussion with the stakeholders, target users were identified. User interviews were planned for which a few questions were created to understand the shortcomings of the current application. Furthermore, "how might we..." questions were also created to help us better understand the user's task and goal.</p>
                <div className="cs__usercomments">
                    <div className="cs__useravatar cs__useravatar1"><img src={User1} /></div>
                    <div className="cs__usercomment cs__usercomment1">"I would like to track progress of goals assigned to me!"</div>
                </div>
                <div className="cs__usercomments cs__usercomments2">
                    <div className="cs__useravatar cs__useravatar2"><img src={User2} /></div>
                    <div className="cs__usercomment cs__usercomment2">"I would like to keep myself abreast with my peer's goals and progress to keep myself motivated!"</div>
                </div>
                <div className="cs__usercomments">
                    <div className="cs__useravatar cs__useravatar3"><img src={User3} /></div>
                    <div className="cs__usercomment cs__usercomment3">"As a manager, I would like to have a dashboard view which would list my reportees' goals and progress!"</div>
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

            <div className="cs__redesignprocess">
                <h3>Redesign Process <img src={DashAppraisal} /></h3>
                <p>After getting inputs from the target users, a card sorting activity was done in order to determine which functionalities should be kept and which should removed.</p>
                <div className="cs__cardsorting">
                    <img src={AppraisalCardSorting} />
                </div>
                <p>After conducting card sorting activities with the users, few functionalities like My Progress overview, peer progress and team progress were included.</p>
            </div>

        </div>
        </div>
    )
}

export default AppraisalSystem;