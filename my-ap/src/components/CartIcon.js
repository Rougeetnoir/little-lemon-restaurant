// CartIcon.js
import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const CartIcon = () => {
    const { itemCount } = useContext(ShoppingCartContext);

    return (
        <div className="cart-icon">
            <img src="/images/basket.svg" alt="Cart" />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </div>
    );
};

export default CartIcon;
