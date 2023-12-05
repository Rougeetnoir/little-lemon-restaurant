import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from '../components/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

const Order = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(ShoppingCartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleCheckout = () => {
        const orderNumber = generateOrderNumber();
        setModalMessage(`Thanks for your order! Your order number is #${orderNumber}. You can pick up your order 30 mins later.`);
        setIsModalOpen(true);
        clearCart(); // Clear the cart after setting the modal message
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleRemoveItem = (index) => {
        removeFromCart(index);
    };

    const navigate = useNavigate();
    const handleContinueShopping = () => {
        navigate('/menu');
    };
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            // Assuming the price is a string like "$12.99" and needs to be converted to a number
            const price = parseFloat(item.price.replace('$', ''));
            return total + price;
        }, 0);
    };

    const total = calculateTotal();
    const generateOrderNumber = () => {
        const min = 10000; // Minimum number for a 5-digit order number
        const max = 99999; // Maximum number for a 5-digit order number
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <div className="order-container">
            <h2 className="order-info">Your Order</h2>
            <div className='order-items'>
                {cartItems.map((item, index) => (
                    <div key={index} className="order-item">
                        <p>{item.dishName} - {item.price}</p>
                        <button onClick={() => handleRemoveItem(index)} className='order-remove-button'>
                            <img src="/images/trash.svg" alt="delete"></img>
                        </button>
                    </div>
                ))}
            </div>
            <p>Total: ${total.toFixed(2)}</p>
            <div className='order-buttons'>
                <button onClick={handleContinueShopping} className="order-item">Continue Shopping</button>
                <button onClick={handleCheckout} className="order-item" >Check Out</button>
                <Modal isOpen={isModalOpen} message={modalMessage} onClose={handleCloseModal} />
            </div>
        </div>
    );
};

export default Order;
