import { React, useEffect, useRef } from 'react'
import headshot from './clear-bg-profile.png'
import Typed from 'typed.js'
import typedParams from './typedParams'
import {IoChevronDown} from 'react-icons/io5'

export default function Intro() {

    const elem = useRef(null), typed = useRef(null);
    useEffect(() => {
        // imported typeParams.js contains strings and parameters//
        typed.current = new Typed(elem.current, typedParams);
        return () => {
            typed.current.destroy();
        }
    }, []);


    return (
        <div id="intro" className="section">
            <h1>Hi there!</h1>
            <div id="profile-color-layer">
                <div id="hue-rotate-layer">
                    <img src={headshot} alt="Headshot of George Brooks" />
                </div>
            </div>
            <div id="typed-strings">
                <p>I'm a developer</p>
                <p>I'm a web developer</p>
                <p>I'm a full stack<br />developer</p>
                <p>I'm a full stack<br />web developer</p>
                <p>I'm ... ^500 a lot of things!</p>
                <p>I'm a pharmacist</p>
                <p>I'm left-handed</p>
                <p>I'm an immigrant</p>
                <p>I'm Family 🏳️‍🌈 ^500</p>
                <p>I'm friendly</p>
                <p>I'm passionate</p>
                <p>I'm kind</p>
                <p>I'm hard-working</p>
                <p>I'm ready!</p>
                <p>I'm George.<br /> ^1000  Hi!</p>
            </div>
            <div id="typed" style={{ height: '7rem' }}>
                <h1><span ref={elem} /></h1>
            </div>
            <a href="#about"><IoChevronDown className="chevron"/></a>
        </div>


    )
}
