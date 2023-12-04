// ShoppingCartContext.js
import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };
    const removeFromCart = (index) => {
        const newCartItems = cartItems.filter((_, itemIndex) => itemIndex !== index);
        setCartItems(newCartItems);
    };
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShoppingCartContext.Provider value={contextValue}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
