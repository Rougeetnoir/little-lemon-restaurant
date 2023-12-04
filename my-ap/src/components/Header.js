import React from 'react';


export default function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="header-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className="header-button">Reserve a Table</button>
                </div>
                <div className='header-image'>
                    <img src='images/restauranfood.jpg' alt='restauranfood'></img>
                </div>
            </div>
        </header>
    )
}