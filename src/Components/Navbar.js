import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Navbar() {

    return (
        <div className="main">
            <div className="navbar">
                <ul className="page">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Work</a></li>
                </ul>
                <ul className="logos">
                    <li><a href="https://github.com/sahilgholap007"><FontAwesomeIcon className="FontAwesomeIcon" icon={faGithub}/></a></li>
                    <li><a href="/"><FontAwesomeIcon className="FontAwesomeIcon" icon={faFacebook}/></a></li>
                    <li><a href="https://www.instagram.com/sahil_gholap007/"><FontAwesomeIcon className="FontAwesomeIcon" icon={faInstagram}/></a></li>
                </ul>
            </div>
            <div className="text-box">
                <h1 className="text">Hi. I am Sahil.<br />
                    A <span>Front-End Developer.</span>
                </h1>
                <p>I'm a front-end developer and general doodler with a keen eye for creating engaging UI, bringing products to life.</p>
            </div>
            <div className="external-container">
                <div className="main-container">
                    <div className="eyeball-container">
                        <svg width="275" height="269" viewBox="0 0 275 269" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ "opacity": 1, "transform": "translateY(0px)" }}>
                            <rect class="c-eyelash c-eyelash--3" x="0.301636" y="40.4437" width="20" height="64" rx="8" transform="rotate(-45 0.301636 40.4437)" fill="white" style={{ "opacity": 1 }}></rect>
                            <rect class="c-eyelash c-eyelash--2" x="126" width="20" height="64" rx="8" fill="white" style={{ "opacity": 1 }}></rect>
                            <rect class="c-eyelash c-eyelash--1" x="257.556" y="26.3015" width="20" height="64" rx="8" transform="rotate(45 257.556 26.3015)" fill="white" style={{ "opacity": 1 }}></rect>
                            <ellipse class="c-eyeball" cx="137.5" cy="181.5" rx="137.5" ry="87.5" fill="white"></ellipse>
                            <path class="c-cornea" d="M138 233C166.719 233 190 209.943 190 181.5C190 153.057 166.719 130 138 130C109.281 130 86 153.057 86 181.5C86 209.943 109.281 233 138 233Z" fill="black" style={{ "transform": "translateX(-1.9638px) translateY(0.49095px)" }}></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="filler-box" id="first"></div>
            <div className="filler-box" id="second"></div>
            <div className="filler-box" id="third"></div>
            <div className="filler-box" id="fourth"></div>
        </div>
    )
}