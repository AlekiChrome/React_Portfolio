import { useState } from 'react';

import candyAboutSvg from '../assets/CandyL.svg';
import instagram from '../assets/Instagram.svg';
import twitch from '../assets/Twitch.svg';
import github from '../assets/Github.svg';
import linkedIn from '../assets/LinkedIn.svg';

export default function About() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <h1 className="about-header" id="aboutTop">About Myself</h1>

            <div className="socials">
                    <div>
                        <a href="https://www.instagram.com/thasoundtrack/"><img src={instagram} id="insta" className="social-icons" /></a>
                    </div>

                    <div>
                        <a href="https://www.twitch.tv/alekichrome"><img src={twitch} id="twitch" className="social-icons" /></a>
                    </div>

                    <div>
                        <a href="https://github.com/AlekiChrome"><img src={github} id="github" className="social-icons" /></a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/in/candiceagard/"><img src={linkedIn} id="linkedin" className="social-icons" /></a>
                    </div>
            </div>

                <section className="about" id="about">
                    <div className="box1">
                        <div className="circle"></div>
                        <img className="prof-pic" src={candyAboutSvg} alt=""></img>
                    </div>

                    <div className="about-description">
                        <button className="about-btn">Learn More About Me</button>
                    </div>
                </section>
        </>
    )
}