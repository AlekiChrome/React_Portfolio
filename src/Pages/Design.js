import React from 'react';

// Images
import devaddicters from '../assets/DEVADDICTERS1.png';
import eyes from '../assets/IMG_0094.PNG';
import JavascriptCoffee from '../assets/JavaScript Coffee (1).png';
import coffeedesign from '../assets/T-medium-roast.png';

export default function design() {
    return (
        <div className="design">
        <h4>Design</h4>
        <div className="design-container" id="design">

        <ul id="autoWidth" className="cs-hidden">
            <li className="item-a">
                <div className="box">
                    <div className="slide-img">
                        <img src={devaddicters} />
                        <div className="overlay">
                            <a href="#" className="DevAdd">Devaddicters</a>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="type">
                            <a href="https://github.com/Dev-Addicters/Augmented-Reality/blob/main/README.md" target="_blank">github</a>
                            <span></span>
                        </div>
                        <a href="https://www.flipsnack.com/devaddicters/devaddicters.html" className="more" target="_blank">More</a>
                    </div>
                </div>
            </li>

            <li className="item-a">
                <div className="box">
                    <div className="slide-img">
                        <img src={JavascriptCoffee} />
                        <div className="overlay">
                            <a href="#" className="DevAdd">Javascript</a>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="type">
                            <a href="https://docs.google.com/presentation/d/1r8QfOQIGGLwI2zb-lZqEKoAOd1EuyPU5C1NNGPIcELs/edit?usp=present" target="_blank">Deck</a>
                            <span></span>
                        </div>
                        <a href="#" className="more" target="_blank">More</a>
                    </div>
                </div>
            </li>

            <li className="item-a">
                <div className="box">
                    <div className="slide-img">
                        <img src={eyes} />
                        <div className="overlay">
                            <a href="#" className="DevAdd">Vision</a>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="type">
                            <a href="#">Deck</a>
                            <span></span>
                        </div>
                        <a href="https://www.flipsnack.com/devaddicters/devaddicters.html" className="more">More</a>
                    </div>
                </div>
            </li>
            </ul>

        </div>
        </div>
    )
}