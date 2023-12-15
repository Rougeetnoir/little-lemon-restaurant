import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const handleReservation = () => {
        navigate('/booking');
    };
    return (
        <header className="header-background">
            <div className="header-container">
                <div className="header-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button onClick={handleReservation} className="header-button">Reserve a Table</button>
                </div>
                <div className='header-image'>
                    <img src='images/restauranfood.jpg' alt='restauranfood'></img>
                </div>
            </div>
        </header>
    )
}