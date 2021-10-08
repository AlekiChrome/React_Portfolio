import React from 'react';
import candyAboutSvg from '../assets/CandyL.svg';

export default function About() {
    return (
        <>
            <section className="about" id="about">
                <div className="box1">
                <div className="circle"></div>
                <img className="prof-pic" src={candyAboutSvg} alt=""></img>

                </div>
            </section>
        </>
    )
}