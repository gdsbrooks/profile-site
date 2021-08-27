import {React, useEffect} from 'react'
import headshot from './clear-bg-profile.png'
import {init} from 'ityped'
import params from './ityped'

export default function About(props) {
    useEffect(() => {
        const whatami = document.querySelector('#ityped')
        init(whatami, params);
    }, [])
    

    return (
        <div id="about-me" className="section">
            <h1>Hi there!</h1>
            <div id="profile-color-layer">
                <div id="hue-rotate-layer">
                    <img src={headshot} alt="Headshot of George Brooks" />
                </div>
            </div>
            <h1>I am <span id="ityped"></span></h1>
        </div>
            
    )
}
