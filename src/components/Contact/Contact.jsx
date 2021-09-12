import React from 'react'
import {IoCellular, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp, IoMail, IoPhonePortrait, IoPhonePortraitOutline} from 'react-icons/io5'
import { IconContext } from 'react-icons/lib'

function Contact() {
    return (
        <div id="contact" class="section">
            <h1>Contact</h1>
            <IconContext.Provider value={{className: "contact-list"}}>
            <ul>
            <li><a href="mailto:george@gdsbrooks.com"><IoMail/> george@gdsbrooks.com</a></li>
            <li><a href="tel:+12064763991"><IoLogoWhatsapp/> +1 (206) 476-3991</a></li>
            <li><a href="http://www.github.com/gdsbrooks"><IoLogoGithub/> github.com/gdsbrooks</a></li>
            <li><a href="http://www.linkedin.com/in/georgedsbrooks"><IoLogoLinkedin/> linkedin.com/in/georgedsbrooks</a></li>
            </ul>
            </IconContext.Provider>
            <footer>&copy; George Brooks 2021.</footer>
        </div>
    )
}

export default Contact
