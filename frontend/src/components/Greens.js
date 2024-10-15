import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Greens = () => {
  const [products] = useState([
    { id: 101, name: 'Spinach', image: 'https://tse2.mm.bing.net/th?id=OIP.B78McfypSwcNIi6gX4cQxQHaFy&pid=Api&P=0&h=220', price: 34 },
    { id: 102, name: 'Kale', image: 'https://tse4.mm.bing.net/th?id=OIP.dnTt93oqJCb7hI3WltdekgHaFT&pid=Api&P=0&h=220', price: 45 },
    { id: 103, name: 'Lettuce', image: 'https://tse3.mm.bing.net/th?id=OIP.jW7lJnV5dxLp7kUv6yO13AHaFj&pid=Api&P=0&h=220', price: 90 },
    { id: 104, name: 'Mustard green', image: 'https://tse3.mm.bing.net/th?id=OIP.otaUZU_aBlYOUzkikitFGgHaE7&pid=Api&P=0&h=220', price: 100 },
    { id: 105, name: 'Beet Greens', image: 'https://tse1.mm.bing.net/th?id=OIP.7PyVaM9aI2fcuZwkjc8cEwHaFj&pid=Api&P=0&h=220', price: 78 },
    { id: 106, name: 'Arugula', image: 'https://tse1.mm.bing.net/th?id=OIP.amtQITtNStOZX0MMYniH-AHaE8&pid=Api&P=0&h=220', price: 90 },
    { id: 107, name: 'Swiss Chard', image: 'https://tse3.mm.bing.net/th?id=OIP.lQHtXEjiZggSlQf673iHywHaJU&pid=Api&P=0&h=220', price: 129 },
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
      <h1>Greens</h1>
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

export default Greens;
