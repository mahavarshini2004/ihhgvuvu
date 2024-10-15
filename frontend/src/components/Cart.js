// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate('/buy-confirmation', { state: { product } });
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p className="price">Price: ₹{item.price}</p>
              <button className="buy-button" onClick={() => handleBuyNow(item)}>Buy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
