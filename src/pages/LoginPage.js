import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
// import { loginUser } from '../api'; // Uncomment if you have an API call
const MainComponent = () => {


    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = async (username, password) => {
        // Call your API here. For example:
        // const response = await loginUser(username, password);
        // if (response.isAuthenticated) {
        //     setIsAuthenticated(true);
        // }

        // For demonstration purposes, we'll assume the user is authenticated
        setIsAuthenticated(true);
    };

    if (isAuthenticated) {
        return <div>Welcome to Little Lemon Restaurant!</div>;
    }

    return <LoginForm onLogin={handleLogin} />;
};

export default MainComponent;
