import React, {useEffect, useRef} from 'react';
import CaseStudy from '../../components/CaseStudy/CaseStudy';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import './Dashboard.css';

import {useLocation} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import Contact from '../../components/Contact/Contact';

const Dashboard = () => {
    const scroll = Scroll.animateScroll;
    let location = useLocation();
    let locationHash = location.hash;
    location = location.pathname;

    const refCaseStudies = useRef();
    const refContact = useRef();

    useEffect(()=> {
        if (locationHash) {
            let elem = locationHash.slice(1);
            let offsetFromTop;
            switch (elem) {
                case "casestudies":
                    offsetFromTop = refCaseStudies.current.offsetTop + 15;
                    break;
                case "contact":
                    offsetFromTop = refContact.current.offsetTop + 15;
                    break;
                default:
                    break;
            }
            if (elem) {
                scroll.scrollTo(offsetFromTop, {
                    duration: 1500,
                    spy: true,
                    smooth: true,
                })
            }
        } else {
            scroll.scrollToTop();
        }
    }, [location]);

    return (
        <div className="dashboard__container">
            <Hero />
            <div ref={refCaseStudies}><CaseStudy /></div>
            <div ref={refContact}><Contact /></div>
        </div>
    )
}

export default Dashboard

