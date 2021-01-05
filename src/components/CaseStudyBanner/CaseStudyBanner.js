import React from "react";
import "./CaseStudyBanner.css";

const CaseStudyBanner = ({title,src}) => {
  return (
    <div className="casestudy__banner-container" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${src})`}}>
      <h1 className="page-heading">
        <p className="page-heading-primary">{title}</p>
      </h1>
    </div>
  );
};

export default CaseStudyBanner;