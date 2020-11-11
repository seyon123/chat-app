import React from 'react'
import './Header.css'
import { auth } from "../firebase";
import { useStateValue } from '../StateProvider';

function Header() {
    // eslint-disable-next-line
    const [{user}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};
    return (
        <div id="navbar" className="navbar">
            <div className="hamburger">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
            <h1 className="logo">
                <a href="/">Message Me</a>
            </h1>
            {user ? <div className="center-text">Hello {user.displayName.split(' ')[0]} <span onClick={handleAuthenticaton} className="logout">(Logout)</span></div>: ""}
            <div id="modeToggle" className="modeToggle"><i className="far fa-moon"></i></div>
        </div>
    )
}

export default Header
