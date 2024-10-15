import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Category.css';

const Vegetables = () => {
  const [products] = useState([
    { id: 51, name: 'Carrot', image: 'https://up.yimg.com/ib/th?id=OIP.XyWdR2Y-evtyArYy-Hz3xgHaHa&pid=Api&rs=1&c=1&qlt=95&w=101&h=101', price: 234 },
    { id: 62, name: 'Broccoli', image: 'https://wallpapers.com/images/hd/dark-green-broccoli-iocy8fiwjdb15xlh.jpg', price: 567 },
    { id: 73, name: 'Beans', image: 'https://tse2.mm.bing.net/th?id=OIP.OHQ0pdQj3SQe6cvBaaLOlAHaFj&pid=Api&P=0&h=220', price: 678 },
    { id: 84, name: 'Potato', image: 'https://tse1.mm.bing.net/th?id=OIP.NpF4-3oEpS3dG828WiWERQHaE8&pid=Api&P=0&h=220', price: 456 },
    { id: 95, name: 'Tomatoes', image: 'https://tse2.mm.bing.net/th?id=OIP.CrvJI-WBVQIYS1hOX2UkAAHaFj&pid=Api&P=0&h=220', price: 123 },
    { id: 36, name: 'Cauliflower', image: 'https://tse2.mm.bing.net/th?id=OIP.SuA-ezAgM0zCW6MUyK6_IgAAAA&pid=Api&P=0&h=220', price: 89 },
    { id: 47, name: 'Beetroot', image: 'https://cdn.shopify.com/s/files/1/2084/6123/products/SV340-dark_red_beet_wood_2048x2048.jpg?v=1559854373', price: 67 },
    { id: 28, name: 'Drumstick', image: 'https://tse3.mm.bing.net/th?id=OIP.5_LhxRSZLExPsnBkEr_LagAAAA&pid=Api&P=0&h=220', price: 456 },
    { id: 19, name: 'Onion', image: 'https://tse3.mm.bing.net/th?id=OIP.erTWCvYJ4JETmIt_YtfnQQHaFd&pid=Api&P=0&h=220', price: 456 },
    { id: 20, name: 'Pumpkin', image: 'https://tse3.mm.bing.net/th?id=OIP.L92jQH6SNsZiUtzcFkBmJQHaJ3&pid=Api&P=0&h=220', price: 556 },
  ]);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Added ${product.name} to cart`);
  };

  return (
    <div className="category-products">
      <h1>Vegetables</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button><hr></hr>
            <button onClick={() => handleAddToCart(product)}>BUY</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetables;
