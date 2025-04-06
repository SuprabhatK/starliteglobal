import React, { useState } from 'react';
import './Header.scss';
import { logo } from '../../../assets';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const handleLinkClick = () => setMenuOpen(false);


    return (
        <header className="header">
            <div className="container">
                <div className="logo-text-wrapper">
                    <Link to="/"  className="logo-link">
                        <img className='logo' src={logo} alt="logistics Logo" />
                    </Link>
                    {/* <div className="vertical-line" />
                    <h1 className="company-name">
                        Starlite Global <br />
                        <span>International Trading Limited</span>
                    </h1> */}
                </div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>About</NavLink>
                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Services</NavLink>
                    <NavLink to="/core-business" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Core Business</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>Contact Us</NavLink>
                </nav>

                <button className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>
        </header>
    );
};

export default Header;
