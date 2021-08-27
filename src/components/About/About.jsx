import React from 'react'
import headshot from './clear-bg-profile.png'

function About() {
    return (
        <div id="about-me" className="section">
            <h1>Hi there!</h1>
            <div id="profile-color-layer">
                <div id="hue-rotate-layer">
                    <img src={headshot} alt="Headshot of George Brooks" />

                </div>
            </div>
            <h1>I'm ... G E O R G E</h1>
        </div>
    )
}

export default About
