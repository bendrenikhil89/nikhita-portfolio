import React from "react";
import CaseStudyCard from './CaseStudyCard';
import AppraisalSystem from '../../assets/images/casestudies-dashboard/AppraisalSystem.png';
import AutonomousVehicle from '../../assets/images/casestudies-dashboard/AutonomousVehicle.png';
import GetReady from '../../assets/images/casestudies-dashboard/GetReady.png';
import MySociety from '../../assets/images/casestudies-dashboard/Society.png';

import ScrollAnimation from 'react-animate-on-scroll';

const CaseStudy = () => {
  return (
    <div className="casestudy__container casestudies">
      <h2>Case Studies</h2>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1.5}>
      <CaseStudyCard
        src={AppraisalSystem}
        title="Appraisal System Revamping"
        desc="Revamping of an existing appraisal system following all UX processes. This app helps the employees and managers to complete the appraisal process easily and quickly."
        pathTo="/casestudy/appraisalsystem"
        alignmentClass="col col-text"
        imgClass="col col-image col-image-left"
      />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1.5}>
      <CaseStudyCard
        src={AutonomousVehicle}
        title="Autonomous Vehicle Operation Monitoring Web App"
        desc="An application was designed to monitor the movement of autonomous vehicles running on the streets along with sending commands. The operator monitors and maintains the autonomous vehicles running on streets from a remote location using this app."
        pathTo="/casestudy/autonomousvehicle"
        alignmentClass="col col-text col-left"
        imgClass="col col-image col-image-right"
      />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1.5}>
      <CaseStudyCard
        src={GetReady}
        title="Get Ready!"
        desc="An online shoppintg app which gives an additional feature of giving you options to pair up your clothes and accesories with your recent buy."
        pathTo="/casestudy/getready"
        alignmentClass="col col-text"
        imgClass="col col-image col-image-left"
      />
      </ScrollAnimation>

      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1.5}>
      <CaseStudyCard
        src={MySociety}
        title="My Society"
        desc="An app designed for a society used for monitoring activities like vistors to your place, society updates, pre booking society maintenance, etc."
        pathTo="/casestudy/mysociety"
        alignmentClass="col col-text col-left"
        imgClass="col col-image col-image-right"
      />
      </ScrollAnimation>
    </div>
  );
};

export default CaseStudy;
