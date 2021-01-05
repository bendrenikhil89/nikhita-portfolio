import React from "react";
import AppraisalSystem from "../../assets/images/casestudies/Group 80.jpg";
import VehicleTracking from "../../assets/images/casestudies/Group 7.jpg";
import GetReady from "../../assets/images/casestudies/Group 81.jpg";
import MySociety from "../../assets/images/casestudies/3.jpg";
import CaseStudyCard from "./CaseStudyCard";


const CaseStudy = () => {
  return (
    <div className="casestudy__container">
      <h2>Case Studies</h2>
      <CaseStudyCard
        src={AppraisalSystem}
        title="Appraisal System Revamping"
        desc="Revamping of existing appraisal system following all UX processes."
        pathTo="/casestudy/appraisalsystem"
        alignmentClass="col col-text"
      />

      <CaseStudyCard
        src={VehicleTracking}
        title="Autonomous Vehicle Operation Monitoring Web App"
        desc="An Application was design to monitor movement of autonomus vehicle running on the streets along with sending commands."
        pathTo="/casestudy/autonomousvehicle"
        alignmentClass="col col-text col-left"
      />

      <CaseStudyCard
        src={GetReady}
        title="Get Ready!"
        desc="An online shopping app which gives an additional feature of giving you options to pair up your clothes and accesories with your recent buy."
        pathTo="/casestudy/getready"
        alignmentClass="col col-text"
      />

      <CaseStudyCard
        src={MySociety}
        title="My Society"
        desc="An app designed for a society used for monitoring activities."
        pathTo="/casestudy/mysociety"
        alignmentClass="col col-text col-left"
      />
    </div>
  );
};

export default CaseStudy;
