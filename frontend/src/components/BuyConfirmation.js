import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './BuyConfirmation.css';

const BuyConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state; 

  const [quantity, setQuantity] = useState(1); 

  const handleConfirmPurchase = async () => {
    try {
      const response = await axios.post('http://localhost:5005/api/orders', {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity, // Use the quantity from state
      });

      alert('Your order has been placed!');
      navigate('/'); 
    } catch (error) {
      console.error('Error placing order:', error.response ? error.response.data : error.message);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="buy-confirmation-container">
      <div className="buy-confirmation-box">
        <h2>Buy Confirmation</h2>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>Are you sure you want to buy <strong>{product.name}</strong> for ₹{product.price}?</p>

        <div className="quantity-container">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <p>Total Price: ₹{product.price * quantity}</p>

        <button className="btn-buy" onClick={handleConfirmPurchase}>BUY</button><br />
        <button className="btn-cancel" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  );
};

export default BuyConfirmation;
