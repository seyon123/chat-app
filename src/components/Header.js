import React from 'react'
import './Header.css'

function Header() {
    return (
        <div id="navbar" className="navbar">
            <h1 className="logo">
                <a href="/">Message Me</a>
            </h1>
            <div id="modeToggle" className="modeToggle"><i className="far fa-moon"></i></div>
        </div>
    )
}

export default Header
