import { FaFacebookF, FaTwitter, FaYoutube, FaGoogle, FaMapMarkerAlt, FaEnvelope, FaClock, FaPhone, FaFax } from "react-icons/fa";
import { logo, logowhite, slogonwhite } from '../../../assets';
import './Footer.scss';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Sitemap Section */}
                <div className="footer-section">
                    <h3>Sitemap</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/core-business">Core Business</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Services Section */}
                <div className="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li>Sea Freight</li>
                        <li>Road Services</li>
                        <li>Air Freight</li>
                        <li>Warehouse</li>
                        <li>ODC</li>
                        <li>Delivery</li>
                    </ul>
                </div>

                {/* Core Business Section */}
                <div className="footer-section">
                    <h3>Core Business</h3>
                    <ul>
                        <li>Ocean Transport</li>
                        <li>Air Transport</li>
                        <li>Land Transport</li>
                        <li>Warehousing & Distribution</li>
                        <li>Project Logistics</li>
                        <li>Buy & Ship</li>
                    </ul>
                </div>

                {/* Address Section */}
                <div className="footer-section">
                    <h3>Address</h3>
                    <p>
                        <FaMapMarkerAlt className="icon" />
                        Starlite Global International Trading Limited,
                    </p>
                    <p>RM A29,24TH FL, REGENT'S PARK PRINCE INDUSTRIAL BD. NO. 706 PRINCE
                        EDWARD RD EAST, KOWLOON, HONGKONGL</p>
                    <p>
                        <FaPhone className="icon rotate" />
                        <a href="tel:21349717" className="phone-link">Tel: +85-21349717</a>
                    </p>
                    <p>
                        <FaFax className="icon" /> Fax: 30113232
                    </p>                    <p>
                        <FaEnvelope className="icon" />
                        <a href="mailto:info@starliteglobal.com">info@starliteglobal.com</a>
                    </p>
                    <p>
                        <FaClock className="icon" /> Timing 9:30 AM to 5:30 PM
                    </p>
                </div>

                <div className="footer-section">
                    <img src={logowhite} alt="Starlite Global International Trading Limited Logo" className="footer-logo" />
                    <img src={slogonwhite} alt="Starlite Global International Trading Limited Logo slogon" className="footer-logo-slogon" />
                    {/* <div className="footer-logo-text">
                        <div className="footer-vertical-line" />
                        <h2 className="footer-company-name">
                            Starlite Global <br />
                            <span>International Trading Limited</span>
                        </h2>
                    </div> */}
                    {/* <p className="companytitle">Where Trade Meets Trust, Globally.</p> */}
                    <div className="footer-icons">
                        <FaFacebookF className="social-icon" />
                        <FaTwitter className="social-icon" />
                        <FaYoutube className="social-icon" />
                        <FaGoogle className="social-icon" />
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                © 2020 Starlite Global International Trading Limited
            </div>
        </footer >
    );
}
