import React from 'react';
import Header from '../components/Header';
import Highlights from '../components/Highlights';
import Specials from '../components/Specials';
import dishesData from '../components/DishesData';
function HomePage() {
    return (
        <>
            <Header />
            <Highlights />
            <Specials dishes={dishesData.slice(0, 3)} />
        </>
    );
}

export default HomePage;
