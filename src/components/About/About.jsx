import { React, useEffect, useRef } from 'react'
import headshot from './clear-bg-profile.png'
import Typed from 'typed.js'
import typedParams from './typedParams'

export default function About() {

    const elem = useRef(null), typed = useRef(null);
    useEffect(() => {

        // imported typeParams.js contains strings and parameters//
        typed.current = new Typed(elem.current, typedParams);
        return () => {
            typed.current.destroy();
        }
    }, []);


    return (
        <div id="about-me" className="section">
            <h1>Hi there!</h1>
            <div id="profile-color-layer">
                <div id="hue-rotate-layer">
                    <img src={headshot} alt="Headshot of George Brooks" />
                </div>
            </div>
                <div id="typed-strings">
                    <p>a developer</p>
                    <p>a web developer</p>
                    <p>a full stack<br />developer</p>
                    <p>a full stack<br />web developer</p>
                    <p>... ^500 a lot of things!</p>
                    <p>a pharmacist</p>
                    <p>left-handed</p>
                    <p>a Virgo </p>
                    <p>an immigrant</p>
                    <p>Family 🏳️‍🌈 ^500</p>
                    <p>friendly</p>
                    <p>passionate</p>
                    <p>kind</p>
                    <p>hard-working</p>
                    <p>ready!</p>
                    <p>George. ^1000<br/>Hi!</p>
                </div>
                <div id="typed" style={{height: '7rem'}}>
                <h1>I'm <span ref={elem} /></h1>
            </div>
        </div>


    )
}
