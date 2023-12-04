// Order.js
import React, { useContext } from 'react';
import { ShoppingCartContext } from '../components/ShoppingCartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Order = () => {
    const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

    const handleCheckout = () => {
        alert("Thanks for your order, you can pick up your order 30 mins later");
        // Clear cart or navigate to another page
    };
    const handleRemoveItem = (index) => {
        removeFromCart(index);
    };

    const navigate = useNavigate();
    const handleContinueShopping = () => {
        navigate('/menu');
    };


    return (
        <div className="order-container">
            <h2 className="order-info">Your Order</h2>
            <div className='order-items'>
                {cartItems.map((item, index) => (
                    <div key={index} className="order-item">
                        <p>{item.dishName} - {item.price}</p>
                        <button onClick={() => handleRemoveItem(index)} className='order-remove-button'>-</button>
                    </div>
                ))}
            </div>
            <div className='order-buttons'>
                <button onClick={handleContinueShopping} className="order-item">Continue Shopping</button>
                <button onClick={handleCheckout} className="order-item" >Check Out</button>
            </div>
        </div>
    );
};

export default Order;
