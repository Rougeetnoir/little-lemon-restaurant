import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CartIcon from "./CartIcon";
export default function Nav() {
    // State for managing the visibility of the menu on mobile screens
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Toggle the visibility of the menu
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };


    return (
        <nav className="nav-container">
            <img className="nav-logo" src="../images/logo.svg" alt="Logo" />
            <div className={`nav-links ${isMenuVisible ? "active" : ""}`}>
                <Link to="/" className="nav-items" onClick={toggleMenu}>Home</Link>
                <Link to="/menu" className="nav-items" onClick={toggleMenu}>Menu</Link>
                <Link to="/about" className="nav-items" onClick={toggleMenu}>About</Link>
                <Link to="/booking" className="nav-items" onClick={toggleMenu}>Booking</Link>
                <Link to="/login" className="nav-items" onClick={toggleMenu}>Login</Link>
                <Link to="/order" className="nav-items" onClick={toggleMenu}><CartIcon /></Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}