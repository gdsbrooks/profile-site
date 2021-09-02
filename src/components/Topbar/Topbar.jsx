import React, { useState } from 'react'
import { IoAtCircle, IoCodeSlash, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'
import { IconContext } from 'react-icons'

function Topbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="header" id="topbar">
            <div className="logo">George Brooks</div>
            <div className="contact">
                <IconContext.Provider value={{ className: "header-icon" }}>
                    <a href="mailto:george@gdsbrooks.com">
                        <IoAtCircle />
                        <h3>george@gdsbrooks.com</h3>
                    </a>
                    <a href="tel:+12064763991">
                        <IoLogoWhatsapp />
                        <h3>+1(206)-476-3991</h3>
                    </a>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Topbar
