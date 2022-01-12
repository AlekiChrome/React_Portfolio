import React from 'react';
import '../App.scss';
import Female from '../assets/Untitled design.svg';
import Skills from '../assets/Skills.svg';
import Featured from '../assets/Featured.svg';
import Design from '../assets/Design.svg';
import Resume from '../assets/Resume.svg';
import Contact from '../assets/Contact.svg';
import Logo from '../assets/C.png';


export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#about" className="nav-link">
                        <img className="nav-icon" src={Female} />
                            <span className="link-text">About</span></a></li>

                <li className="nav-item">
                    <a href="#skillsheader" className="nav-link">
                        <img className="nav-icon" src={Skills} />
                            <span className="link-text">Skills</span></a></li>


                <li className="nav-item">
                    <a href="#featuredwork" className="nav-link">
                        <img className="nav-icon" src={Featured} />
                            <span className="link-text">Featured Work</span></a></li>

                <li className="nav-item">
                    <a href="#design" className="nav-link">
                        <img className="nav-icon" src={Design} />
                            <span className="link-text">Design</span></a></li>

                <li className="nav-item">
                    <a href="https://docs.google.com/document/d/1U3yUMCnNSn8gK2LK5Lcpqf6yg-UA8GUApWksuD4jlMY/edit?usp=sharing" target="_blank" className="nav-link">
                        <img className="nav-icon" src={Resume} />
                            <span className="link-text">Resume</span></a></li>

                <li className="nav-item">
                    <a href="#contactSec" className="nav-link">
                        <img className="nav-icon" src={Contact} />
                            <span className="link-text">Contact</span></a></li>  

                <li className="nav-item">
                    <a href="https://www.blackartistfund.org/" target="_blank" className="nav-link">
                        <img className="nav-icon" id="ca" src={Logo} />
                            <span className="link-text">BAF</span></a></li>
            </ul>         
        </nav>  
    )
}