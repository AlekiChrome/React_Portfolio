import React from 'react';

// images
import JS from '../assets/JavaScriptLogo.png';
import htmlcss from '../assets/HTMLandCSS.png';
import node from '../assets/NodeJS.png';
import Reactjs from '../assets/React.png';
import express from '../assets/express.png';
import postgresql from '../assets/PostgreSQL.png';
import firebase from '../assets/firebase.png';
import photoshop from '../assets/PhotoShop.png';
import indesign from '../assets/InDesign.png';
import xd from '../assets/XD.png';
import canva from '../assets/Canva.png';

export default function Skills() {
    return (
        <div>
            <h1 className="skills-header">Skills</h1>
            <div className="skill-container">
                <section className="skills" id="skillsheader">
                    <h5>Front-End</h5>
                    <li>
                        <img src={htmlcss}/>
                        <span className="bar">
                            <span className="htmlcss"></span>
                        </span>
                    </li>

                    <li>
                        <img style={{width: '3.5em', paddingBottom: '1em', paddingLeft: '1em'}} src={JS}/>
                        <span className="bar">
                            <span className="javascript"></span>
                        </span>
                    </li>

                    <li>
                        <img src={node}/>
                        <span className="bar">
                            <span className="nodejs"></span>
                        </span>
                    </li>

                    <li>
                        <img src={Reactjs}/>
                        <span className="bar">
                            <span className="reactjs"></span>
                        </span>
                    </li>

                </section>
            </div>

            <div className="skill-container2">
                    <section className="skills">
                        <h5>Back-End</h5>
                        <li>
                            <img style={{width: '8em'}} src={express}/>
                            <span className="bar">
                                <span className="express"></span>
                            </span>
                        </li>

                        <li>
                            <img style={{width: '15em'}} src={postgresql}/>
                            <span className="bar">
                                <span className="postgresql"></span>
                            </span>
                        </li>

                        <li>
                            <img style={{width: '4em', paddingBottom: '1em'}} src={firebase}/>
                            <span className="bar">
                                <span className="firebase"></span>
                            </span>
                        </li>
                    </section>
                </div>

                <div className="skill-container3">
                    <section className="skills">
                        <h5>Design</h5>
                        <li>
                            <img src={photoshop}/>
                            <span className="bar">
                                <span className="photoshop"></span>
                            </span>
                        </li>

                        <li>
                            <img src={indesign}/>
                            <span className="bar">
                                <span className="indesign"></span>
                            </span>
                        </li>

                        <li>
                            <img src={xd}/>
                            <span className="bar">
                                <span className="xd"></span>
                            </span>
                        </li>

                        <li>
                            <img style={{width: '5em', paddingBottom: '1em'}} src={canva}/>
                            <span className="bar">
                                <span className="canva"></span>
                            </span>
                        </li>
                    </section>
                </div>
        </div>
    )
}