import React from 'react';
import SpecialCard from './SpecialCard';

const Specials = ({ dishes }) => {
    return (
        <section className="specials-container">
            {dishes.map(dish => (
                <SpecialCard
                    key={dish.name}
                    image={dish.image}
                    name={dish.name}
                    price={dish.price}
                    description={dish.description}
                />
            ))}
        </section>
    );
};

export default Specials;