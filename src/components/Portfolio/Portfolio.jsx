import React from 'react'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoChevronDown} from 'react-icons/io5'
import {SiMaterialUi, SiMongodb, SiPostman, SiReact, SiSocketDotIo} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'


function Portfolio() {
    return (
        <div className="section" id="portfolio">
            <h1>Portfolio</h1>
            <p>My first three projects were completed during an intensive 3-month web development bootcamp through <a href="http://www.ironhack.com" target="_blank">Ironhack</a></p>
            <div id="projects">
                <IconContext.Provider value={{ className: "tech-logo" }} >

                    <div id="cbd" className="project">
                        <h3>Cat Butt Disco</h3>
                       
                                <img src="./assets/cbd.gif" alt="screenshot of cat butt disco game" />
                            
                        <p>Baby's first project! </p> 
                        <p>A retro web game built using HTML, CSS, Javascript and DOM manipulation. </p> 
                        <p>Guide the kitty past the obstacles, collect the records and save the day! </p>
                        <p>Inspired by a friend's ode to his cat</p>
                       
                        <ul>
                            <li><IoLogoHtml5 color="#E34F26" /><br />HTML</li>
                            <li><IoLogoCss3 color="#1572B6"/><br />CSS</li>
                            <li><IoLogoJavascript color="#F7DF1E"/><br />Javascript</li>
                        </ul>

                    </div>

                    <div id="mojito" className="project">
                        <h3>Mojito</h3>
                        <img src="./assets/moj.gif" alt="screenshot of mojito web app" />
                    
                        <p>A server-rendered cocktail recipe app.</p>
                        <p>Built with Node.js, Express.js & MongoDB. Styled using Bootstrap.</p>
                        <p>RESTful API endpoints to search , CRUD comments / ratings, and authenticate users using sessions. </p>
                        <ul>
                         
                            <li><IoLogoNodejs color="#339933"/><br />Node.js</li>
                            <li><FaBootstrap color="#7952B3"/><br />Bootstrap</li>
                            <li><SiMongodb color="#47A248"/><br />mongoDB</li>
                            <li><SiPostman color="#FF6C37"/><br />Postman</li>

                        </ul>

                    </div>

                    <div id="propagate" className="project">
                        <h3>Propagate</h3>
                        <img src="./assets/prop.gif" alt="screenshot of Propagate web app"/>
                        <p>A web app for sharing plant cuttings and connecting plant enthusiasts.</p> 
                        <p>Fully responsive design built with React and Material UI. </p>
                        <p>Multiple external APIs including cloud hosting, AI-driven plant recognition, and socket.io messaging.</p>
                        <ul>
                        <li><IoLogoNodejs color="#339933"/><br />Node.js</li>
                        <li><SiReact color="#61DAFB"/><br />React</li>
                        <li><SiMaterialUi color="#0081CB"/><br />Material UI</li>
                        <li><SiSocketDotIo color="#010101"/><br />Socket.io</li>
                        </ul>
                    </div>

                </IconContext.Provider>
            </div>
            <a href="#contact"><IoChevronDown className="chevron"/></a>

        </div>
    )
}

export default Portfolio
