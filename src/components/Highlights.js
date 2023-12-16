import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Highlights() {
    const navigate = useNavigate();
    const handleMenu = () => {
        navigate('/menu');
    };
    return (
        <div className='highlights-container'>
            <h1>This week's specials!</h1>
            <button onClick={handleMenu}>Online Menu</button>
        </div>
    )
}