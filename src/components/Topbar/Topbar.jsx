import React, { useState } from 'react'

function Topbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="header" id="topbar">
        <div className="logo">george </div>
        <div className="contact-deets">
        <h4>@</h4> <h3 className="top-cont"> george@gdsbrooks.com </h3> | <h4>T: </h4><h3 className="top-cont">+1(206)-476-3991</h3> | G L
        </div>

        <nav>NAV</nav>
        
            
        </div>
    )
}

export default Topbar
