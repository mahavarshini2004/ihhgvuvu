import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Fruits = () => {
  const [products] = useState([
    { id: 1, name: 'Apple', image: 'https://tse4.mm.bing.net/th?id=OIP.CXtrIMQqt9mUCPGMwV_n7QHaE8&pid=Api&P=0&h=220', price: 120},
    { id: 2, name: 'Banana', image: 'https://tse2.mm.bing.net/th?id=OIP.OURg9KhhFO6jon7nj6X_owHaE8&pid=Api&P=0&h=220', price: 130 },
    { id: 3, name: 'StrawBerry', image: 'https://tse2.mm.bing.net/th?id=OIP.vvlT8LRJbg5VHcy4TgqKWAHaDw&pid=Api&P=0&h=220', price: 150 },
    { id: 4, name: 'Grapes', image: 'https://tse1.mm.bing.net/th?id=OIP.r4gzGgFQwO6Pzo1mFJ2AyQHaE8&pid=Api&P=0&h=220', price: 149},
    { id: 5, name: 'Papaya', image: 'https://tse2.mm.bing.net/th?id=OIP.ywLLepjn2JnTBiXu7Id0igHaF7&pid=Api&P=0&h=220', price: 156 },
    { id: 6, name: 'Kiwi', image: 'https://tse1.mm.bing.net/th?id=OIP.Sq672O7CrJr4mi4zNTYi0AHaFj&pid=Api&P=0&h=220', price: 145 },
    { id: 7, name: 'Avocado', image: 'https://tse3.mm.bing.net/th?id=OIP.xy1-3-QZSVk33FwCu82F5wHaGg&pid=Api&P=0&h=220', price: 144 },
    { id: 8, name: 'Orange', image: 'https://tse3.mm.bing.net/th?id=OIP.hHS7HSAJt2B2ZZ-UDS7WNwHaFQ&pid=Api&P=0&h=220', price: 144 },
    { id: 9, name: 'Pomegranate', image: 'https://tse2.mm.bing.net/th?id=OIP.__TuibNUiTdVzu-wE1IqRAHaEo&pid=Api&P=0&h=220', price: 144 },
  ]);

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Added ${product.name} to cart`);
  };

  const handleBuyNow = (product) => {
    navigate('/buy-confirmation', { state: { product } });
  };

  return (
    <div className="category-products">
      <h1>Fruits</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button><hr></hr>
            <button onClick={() => handleBuyNow(product)}>BUY</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
