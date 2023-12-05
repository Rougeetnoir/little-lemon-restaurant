import React from "react";
import { Link } from 'react-router-dom';
import CartIcon from "./CartIcon";
export default function Nav() {
    return (
        <nav className="nav-container">
            <img className="nav-logo" src="../images/logo.svg" alt="Logo" />
            <div className="nav-links">
                <Link to="/" className="nav-items">Home</Link>
                <Link to="/menu" className="nav-items">Menu</Link>
                <Link to="/about" className="nav-items">About</Link>
                <Link to="/booking" className="nav-items">Booking</Link>
                <Link to="/login" className="nav-items">Login</Link>
                <Link to="/order" className="nav-items"><CartIcon /></Link>
            </div>
        </nav>
    )
}