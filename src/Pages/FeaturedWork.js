import React from 'react';
import styled from 'styled-components';

// Images and Gifs
import github from '../assets/Github.svg';
import weblogo from '../assets/weblogo.png';
import star from '../assets/star-images-9441.png';
import AKIN from '../assets/AKIN Demo Deck.svg';
import AnimeIndex from '../assets/AnimeIndex.svg';
import JSCoffee from '../assets/JavaScript Coffee.svg';

const CardImage = styled.img`
   width: 27.9vw;
`;

const SmallCardImage = styled.img`
    height: 12vh;
`;


export default function FeaturedWork() {
    return (
        <main className="feat" id="featuredwork">
            <h3>Featured Work</h3>
            <section className="featured-container">

                    <div className="grid">
                        <div className="grid-item">
                            <div className="card">
                                <img className="card-image" src={AKIN} />
                                <div className="card-content">
                                    <img style={{width: '1em'}} src={star} />
                                    <p className="details">Pursuit Hackathon: Design Winner</p>
                                    <p className="details">For: Civic Engagement: Wellness</p>
                                    <h4 className="card-header">AKIN</h4>
                                    <p className="card-text">
                                        Therapists of color for people of color.
                                    </p>
                                    <button className="card-btn">
                                        <a href="https://github.com/AlekiChrome/AKIN" target="_blank">More</a>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="card">
                                <img className="card-image" src={JSCoffee} />
                                <div className="card-content">
                                    <h4 className="card-header">JavaScript Coffee</h4>
                                    <p className="card-text">
                                        JavaScript Coffee Brand For Developers, By Developers
                                    </p>
                                    <button className="card-btn">
                                        <a href="https://quizzical-yonath-00eaa3.netlify.app/" target="_blank">More</a>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="card">
                                <img className="card-image" src={AnimeIndex} />
                                <div className="card-content">
                                    <h4 className="card-header">Anime Index</h4>
                                    <p className="card-text">
                                        An anime search tool that takes you to the details on the choosen show.
                                    </p>
                                    <button className="card-btn">
                                        <a href="https://github.com/AlekiChrome/AnimeIndex" target="_blank">More</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                

                </section>
            </main>
    )
}