// import React from 'react';
// import './AppraisalSystem.css';

// import CaseStudyBanner from '../../components/CaseStudyBanner/CaseStudyBanner';

// import Personas1 from '../../assets/images/AppraisalSystem/Group 47.jpg';
// import Personas2 from '../../assets/images/AppraisalSystem/Group 83.jpg';
// import Personas3 from '../../assets/images/AppraisalSystem/Group 85.jpg';
// import CardSorting from '../../assets/images/AppraisalSystem/4.jpg';
// import Appraisee from '../../assets/images/AppraisalSystem/Appraisee.svg';
// import Appraiser from '../../assets/images/AppraisalSystem/Appraiser.svg';
// import Reviewer from '../../assets/images/AppraisalSystem/Reviewer.svg';
// import PP1 from '../../assets/images/AppraisalSystem/PP1.jpg';
// import PP2 from '../../assets/images/AppraisalSystem/PP2.jpg';
// import PP3 from '../../assets/images/AppraisalSystem/PP3.jpg';
// import PP4 from '../../assets/images/AppraisalSystem/PP4.jpg';
// import WF1 from '../../assets/images/AppraisalSystem/WF1.png';
// import WF2 from '../../assets/images/AppraisalSystem/WF2.png';
// import WF3 from '../../assets/images/AppraisalSystem/WF3.png';
// import WF4 from '../../assets/images/AppraisalSystem/WF4.png';

// const AppraisalSystem = () => {
//     return (
//         <div className="appraisal__container">
//             <CaseStudyBanner title="Appraisal System Revamping" src="" />
//             <div className="casestudy-para">
//                 <div className="casestudy-para-title">
//                     <h3>Purpose</h3>
//                 </div>
//                 <div className="casestudy-para-desc">
//                     <p>Employees and Managers need to prepare data for appraisals, set goals and evaluate them The appraisal tool should ease their work by providing easy user interface, highlighting important tasks and guiding the users about the task allocated to them.</p>
//                 </div>

//                 <div className="casestudy-para-title">
//                     <h3>Impact</h3>
//                 </div>
//                 <div className="casestudy-para-desc">
//                     <p>The revamping of the appraisal system helped employee and managers in much positive way. Employee now have a clarity on their goals and evaluation throughout the year. Manager can keep tracking of their employee’s progress without manually following up. The appraisals became such an easy and quick things for all the employee and managers, that they started spending the save time on their work and productivity increased.</p>
//                 </div>

//                 <div className="casestudy-para-title">
//                     <h3>My Role and Responsibilities</h3>
//                 </div>
//                 <div className="casestudy-para-desc">
//                     <p>I joined this revamping project from the scratch as a UX designer. I was involved in:</p>
//                     <ul>
//                         <li>Designing the entire application contributing from user research to conception, visualization and testing</li>
//                         <li>Leading and managing the project design team. I worked with one fellow UX designer, one Visual Designer and one HTML developer.</li>
//                         <li>Monitoring the delivery of UX artifacts and Review of Visual Designs and HTMLs</li>
//                     </ul>
//                 </div>

//                 <div className="casestudy-para-title">
//                     <h3>Project Duration</h3>
//                 </div>
//                 <div className="casestudy-para-desc">
//                     <p>8 months</p>
//                 </div>

//                 <div className="casestudy-para-title">
//                     <h3>Problem Statement</h3>
//                 </div>
//                 <div className="casestudy-para-desc">
//                     <p>The Company’s employees and managers face a problem while filling details in the appraisal form in the current application. The users are lost in the application because of unnecessary functionalities and necessary ones are missed because of too much data. An ideal solution would be having an application that guides the user to the important functionalities and helps the user to complete the appraisal process easily.</p>
//                 </div>

//                 <div className="casestudy-para-title">
//                     <h3>Process Followed</h3>
//                 </div>

//                 <div className="timeline-item" process-title='Identifying the target users'>
//                     <p>After initial rounds of discussions with the stakehoder, target users were identified.</p>
//                 </div>
                
//                 <div className="timeline-item" process-title='User Interviews'>
//                     <ul>
//                         <li>Created few list of questions to understand the problem with the current applications. Pain points were Identified.</li>
//                         <li>Created few list of “how might we...” questions to help us better understand users task and goal.</li>
//                     </ul>
//                     <p style={{marginTop:'10px'}}>Few Insights which we got from the user Interviews are:</p>
//                     <ul>
//                         <li>The users were interested in tracking their goal process.</li>
//                         <li>They wanted to see an overview of their peer's goals to keep them motivated.</li>
//                         <li>Managers/Appraisers were interested to have a dashboard where they can track the progress of their reporting appraisee.</li>
//                     </ul>
//                 </div>
                
//                 <div className="timeline-item" process-title='Creating Personas'>
//                     <p>3 personas were finalized and created</p>
//                     <ul>
//                         <li>Appraisee</li>
//                         <li>Appraisers</li>
//                         <li>Reviewers</li>
//                     </ul>
//                     <div className="tl__images">
//                         <div><img src={Personas1}/></div>
//                         <div><img src={Personas2}/></div>
//                         <div><img src={Personas3}/></div>
                        
//                     </div>
//                 </div>

//                 <div className="timeline-item" process-title='Redesign Process'>
//                     <p>After getting inputs from the target users, card sorting activity was done in order to determine which functionalities should stay and which should go.</p>
//                     <div className="tl__images">
//                         <div><img src={CardSorting}/></div>
//                     </div>
//                     <p>After conducting card sorting activities with the users, few functionalities like My Progress overview, peer progress and team progess were included.</p>
//                 </div>

//                 <div className="timeline-item" process-title='Finalizing Information Architecture'>
//                     <p style={{marginTop:'20px'}}>Appraisee</p>
//                     <div className="tl__images wf__images">
//                     <div><img src={Appraisee}/></div>
//                     </div>

//                     <p style={{marginTop:'20px'}}>Appraiser</p>
//                     <div className="tl__images wf__images">
//                         <div><img src={Appraiser}/></div>
//                     </div>

//                     <p style={{marginTop:'20px'}}>Reviewer</p>
//                     <div className="tl__images wf__images">
//                         <div><img src={Reviewer}/></div>
//                     </div>
//                 </div>

//                 <div className="timeline-item" process-title='Creating Paper Prototypes'>
//                     <div className="tl__images">
//                         <div><img src={PP1}/></div>
//                         <div><img src={PP2}/></div>
//                         <div><img src={PP3}/></div>
//                         <div><img src={PP4}/></div>
//                     </div>
//                 </div>

//                 <div className="timeline-item" process-title='Creating Wireframes'>
//                     <div className="tl__images wf__images">
//                         <div><img src={WF1}/></div>
//                         <div><img src={WF2}/></div>
//                         <div><img src={WF3}/></div>
//                         <div><img src={WF4}/></div>
//                     </div>
//                 </div>

//                 <div className="timeline-item" process-title='Conducting Usability Testing in the usability lab with all proper softwares and equipments'>
//                     <p>As reaching to the users was easy, we conducted usability testing the usability lab. All the major use cases were considered. As part of the study, it was observed that users were able to identify and update their goals.</p>
//                     <p>Based on the user feedbacks, more details were added to peer goals overview section. Also for appraiser view, more goal details were added to the landing screen.</p>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default AppraisalSystem;
