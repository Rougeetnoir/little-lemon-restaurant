import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Specials from '../components/Specials';
import dishesData from '../components/DishesData';
function HomePage() {
    return (
        <>
            <Header />
            <Main />
            <Specials dishes={dishesData.slice(0, 3)} />
        </>
    );
}

export default HomePage;
