import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import * as Scroll from 'react-scroll';

import './Navbar.css';

const Navbar = () => {
    const [scrollClass, setScrollClass] = useState('');
    let location = useLocation();
    location = location.pathname;
    
    const scroll = Scroll.animateScroll;
    const Element = Scroll.Element;
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10 ) {
            setScrollClass('scrolled')
        }
        else {
            setScrollClass('')
        }
    });

    return (
        <div className={scrollClass !== '' ? 'navbar__wrapper':'navbar__wrapped-hidden'}>
        <header className={`main-header ${scrollClass}`}>
            <div className="logo">
                {location === "/" ? <Element onClick={() => scroll.scrollToTop()} duration={1000}>Nikhita Joshi</Element> : <Link to="/">Nikhita Joshi</Link>}
            </div>
        
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
            <span className="menu-icon__line"></span>
            </label>
        
            <ul className="nav-links">
            <li className="nav-link nav-link-casestudies">
                {location === "/" ? <LinkS to="casestudies" spy={true} smooth={true} duration={1000} offset={-45}>Case Studies</LinkS> : <Link to="/#casestudies">Case Studies</Link>}
            </li>
            <li className="nav-link">
                {location === "/" ? <LinkS to="whatido" spy={true} smooth={true} duration={1000}>What I Do</LinkS> : <Link to="/#whatido">What I Do</Link>}
                
            </li>
            <li className="nav-link">
                {location === "/" ? <LinkS to="contact" spy={true} smooth={true} duration={1000}>Contact</LinkS> : <Link to="/#contact">Contact</Link>}
            </li>
            </ul>
      </header>
      </div>
    )
}

export default Navbar;
