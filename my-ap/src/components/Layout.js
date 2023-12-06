import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main className='main-container'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
