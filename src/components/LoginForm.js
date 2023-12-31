import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(username, password);
        navigate('/logged-in');
    };



    return (
        <main className='login-main'>
            <h1 className='form-title'>Welcome Back!</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <div className="loginform-field">
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                </div>
                <div className="loginform-field">
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <button type="submit">Log Me In!</button>
            </form>
        </main>
    );
};

export default LoginForm;
