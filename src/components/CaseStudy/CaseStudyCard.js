import React from 'react';
import './CaseStudy.css'

import {Link} from 'react-router-dom';


const CaseStudyCard = ({src, title, desc, pathTo, alignmentClass, imgClass, customBtnClass, color}) => {
    return (
        <div className="grid-flex">
            <div className={imgClass}>
                <img src={src} style={{background:color}} />
            </div>
            <div className={alignmentClass}>
            <div className="Aligner-item">
                <h3>{title}</h3>
                <p>{desc}</p>
                <span><Link to={pathTo} className={customBtnClass}>View Case Study</Link></span>
            </div>
            </div>
        </div>
    )
}

export default CaseStudyCard
