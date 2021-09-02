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
                    <IoAtCircle /> <h3>george@gdsbrooks.com </h3>
                    <IoLogoWhatsapp /> <h3>+1(206)-476-3991</h3>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Topbar
