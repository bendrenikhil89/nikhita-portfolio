import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    const [scrollClass, setScrollClass] = useState('');
    
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
        <header className={`main-header ${scrollClass}`}>
            <div className="logo">
                <Link to="/">Nikhita Joshi</Link>
            </div>
        
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
            <span className="menu-icon__line"></span>
            </label>
        
            <ul className="nav-links">
            <li className="nav-link">
                <Link to="/casestudies">Case Studies</Link>
            </li>
            <li className="nav-link">
                <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
      </header>
    )
}

export default Navbar;
