import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import * as Scroll from 'react-scroll';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import siteLogo from '../../assets/svgs/NJ.svg';

import './Navbar.css';

const Navbar = () => {
    const [scrollClass, setScrollClass] = useState('');
    const [click, setClick] = useState(false);
    const { width } = useWindowDimensions();

    let location = useLocation();
    location = location.pathname;
    
    const scroll = Scroll.animateScroll;
    const Element = Scroll.Element;
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 10 && width > 767) {
            setScrollClass('scrolled')
        }
        else if(width < 768){
            setScrollClass('mobileScrolled')
        }
        else {
            setScrollClass('')
        }
    });

    const navbarHandler = () => {
        setClick(click => !click);
    }

    useEffect(() => {
        if(click) {
            document.body.classList.add('hide-scrollbar');
        } else {
            document.body.classList.remove('hide-scrollbar');
            document.getElementById('menu-btn').checked = false;
        }
    },[click])

    return (
        <div className={scrollClass !== '' ? 'navbar__wrapper':'navbar__wrapped-hidden'}>
        <header className={`main-header ${scrollClass}`}>
            <div className="logo">
                {location === "/" ? <Element onClick={() => scroll.scrollToTop()} duration={1000}><img src={siteLogo} /></Element> : <Link to="/"><img src={siteLogo} /></Link>}
            </div>
        
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon" onClick={navbarHandler}>
            <span className="menu-icon__line"></span>
            </label>
        
            <ul className="nav-links">
                <li className="nav-link">
                    {location === "/" ? <Element onClick={() => scroll.scrollToTop()} duration={1000}><a href="#">Home</a></Element> : <Link to="/"><a href="#">Home</a></Link>}
                </li>
                <li className="nav-link nav-link-casestudies">
                    {location === "/" ? <LinkS to="casestudies" spy={true} smooth={true} duration={1000} offset={-45} onClick={() => setClick(false)}>Case Studies</LinkS> : <Link to="/#casestudies" onClick={() => setClick(false)}>Case Studies</Link>}
                </li>
                <li className="nav-link">
                    {location === "/" ? <LinkS to="contact" spy={true} smooth={true} duration={1000} offset={-45} onClick={() => setClick(false)}>Contact</LinkS> : <Link to="/#contact" onClick={() => setClick(false)}>Contact</Link>}
                </li>
            </ul>
      </header>
      </div>
    )
}

export default Navbar;
