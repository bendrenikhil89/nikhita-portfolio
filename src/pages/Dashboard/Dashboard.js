import React from 'react';
import CaseStudy from '../../components/CaseStudy/CaseStudy';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard__container">
            <Hero />
            <Skills />
            <CaseStudy />    
        </div>
    )
}

export default Dashboard

