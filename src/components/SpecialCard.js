import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';


// destructuring the props in the SpecialCard component as shown:
// To avoid the name conflict, we rename the name prop to dishName as it's destructured.
export default function SpecialCard({ image, name: dishName, price, description }) {
    const { addToCart } = useContext(ShoppingCartContext);

    const handleAddToCart = () => {
        addToCart({ dishName, price, description });
    };
    return (
        <article className="special-card">
            <img src={image} alt="Special Menu" className="card-item-image" />
            <div className="card-item-info">
                <div className="card-item-title">
                    <h2>{dishName}</h2>
                    <h3>{price}</h3>
                </div>
                <p>{description}</p>
                <button className="card-item-button" to="/order" onClick={handleAddToCart}>Add to bag</button>
            </div>
        </article>
    )
}