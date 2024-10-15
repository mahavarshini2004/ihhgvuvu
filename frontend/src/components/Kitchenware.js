import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Kitchenware = () => {
  const [products] = useState([
    { id: 1001, name: 'Pan', image: 'https://tse2.mm.bing.net/th?id=OIP.EHQEf2MWShXCSGkWIE4rFQHaHN&pid=Api&P=0&h=220', price: 3000 },
    { id: 2001, name: 'Spoon', image: 'https://tse4.mm.bing.net/th?id=OIP.v9BRHjXQcQUx2xUAb6jHvAHaFD&pid=Api&P=0&h=220', price: 1000 },
    { id: 3001, name: 'Knife', image: 'https://tse2.mm.bing.net/th?id=OIP.n5Xiygl0UuVJTp-BmPzc2AHaE7&pid=Api&P=0&h=220', price: 3000 },
    { id: 4001, name: 'Plates', image: 'https://tse4.mm.bing.net/th?id=OIP.7RnVMlqpBe1TP1OC8XpOwwHaGx&pid=Api&P=0&h=220', price: 6890 },
    { id: 5001, name: 'Apron', image: 'https://i.etsystatic.com/28402895/r/il/3be0b8/2963605050/il_1588xN.2963605050_mp7u.jpg', price: 3457 },
    { id: 6001, name: 'Vessels', image: 'https://tse4.mm.bing.net/th?id=OIP.Vl40r7juWosGB0_N34bghQHaD2&pid=Api&P=0&h=220', price: 4567 },
    { id: 7001, name: 'Stove', image: 'https://tse2.mm.bing.net/th?id=OIP.07BdmfFYFVxfrowuhZBoCwHaD5&pid=Api&P=0&h=220', price: 4597 },
    { id: 9001, name: 'Saptula', image: 'https://tse3.mm.bing.net/th?id=OIP.zAzvisGld2kAulUx8g0zpgHaHa&pid=Api&P=0&h=220', price: 567 },
    { id: 10001, name: 'Cups', image: 'https://tse4.mm.bing.net/th?id=OIP.jJMRwROoA_HLNTPnIdWy9AHaHa&pid=Api&P=0&h=220', price: 567 }
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
      <h1>Kitchenware</h1>
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

export default Kitchenware;
