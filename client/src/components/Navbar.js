import React from 'react';
import logo from '../images/logo.png';
import download from '../images/download.png';
import jutLogo from '../images/JUT_Logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fill common-background">
            <div className="png">
                <img src={logo} alt="Logo" width="70px" height="58px" />
                <div className="dll">
                    <p>EduAhead.in</p>
                    <p>EduAhead.in</p>
                </div>
            </div>
            <ul>
                <li>
                    <i className="fa-solid fa-house-user"></i>
                    <a href="#" className="active">Home</a>
                </li>
                <li>
                    <img src={download} alt="Download" width="20px" />
                    <a href="#category-2">Class-10 to 12</a>
                </li>
                <li>
                    <img src={jutLogo} alt="BTech Notes" width="21px" />
                    <a href="#category-2">BTech Notes</a>
                </li>
                <li>
                    <i className="fa-solid fa-address-card"></i>
                    <a href="#about-us">About Us</a>
                </li>
                <li>
                    <i className="fa-solid fa-comments"></i>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
