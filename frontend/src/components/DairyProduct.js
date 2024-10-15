import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const DairyProducts = () => {
  const [products] = useState([
    { id: 10, name: 'Milk', image: 'https://milkandhoneyranch.com/wp-content/uploads/2023/06/jiggi21_a_beautiful_cow_close_up_with_a_glass_of_milk_on_a_tabl_38f92050-d3d4-488d-a9d0-ed861899b379-e1687377584795.png', price: 50 },
    { id: 20, name: 'Cheese', image: 'https://tse4.mm.bing.net/th?id=OIP.jpCmKfnMMt7ks8Ejm-SmMwHaHa&pid=Api&P=0&h=220', price: 100 },
    { id: 30, name: 'Butter', image: 'https://tse1.mm.bing.net/th?id=OIP.9Q-rXQvUUL7OXM22xubQ5QHaE7&pid=Api&P=0&h=220', price: 150 },
    { id: 40, name: 'Curd', image: 'https://tse4.mm.bing.net/th?id=OIP.bJJBcl5Av60XwwuZXj-j3AHaHa&pid=Api&P=0&h=220', price: 100 },
    { id: 50, name: 'Eggs', image: 'https://tse4.mm.bing.net/th?id=OIP.yYkHFdeMI2_AmK-eI0e9NQHaE7&pid=Api&P=0&h=220', price: 200 },
    { id: 60, name: 'Ghee', image: 'https://tse1.mm.bing.net/th?id=OIP.MwqUOQW-XgEEbeHH1r9MnQHaHa&pid=Api&P=0&h=220', price: 250 },
    { id: 70, name: 'ButterMilk', image: 'https://tse2.mm.bing.net/th?id=OIP.FPulnYTkSEmTvLdXDn1Z-QHaGn&pid=Api&P=0&h=220', price: 45 },
    { id: 80, name: 'Yogurt', image: 'https://tse2.mm.bing.net/th?id=OIP.1fLgtgSH4-AOKpiHqUzm8QAAAA&pid=Api&P=0&h=220', price: 55 },
    { id: 90, name: 'Ice Cream', image: 'https://tse2.mm.bing.net/th?id=OIP.qWEc89dzq5Vc2K_HcwrfZgHaEJ&pid=Api&P=0&h=220', price: 143 },
    { id: 100, name: 'Bread', image: 'https://tse4.mm.bing.net/th?id=OIP.uihjRKIqa57EHkCDLEreBwHaE7&pid=Api&P=0&h=220', price: 98 },
    { id: 110, name: 'Whipping Cream', image: 'https://tse4.mm.bing.net/th?id=OIP.tXq4Vg9iq6IepLgX_HbQXwAAAA&pid=Api&P=0&h=220', price: 128 },
    { id: 120, name: 'Jam', image: 'https://tse4.mm.bing.net/th?id=OIP.etJQxEyvFcSl_fetn1bj_AHaHa&pid=Api&P=0&h=220', price: 78 }
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
      <h1>Dairy Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button><hr></hr>
            <br />
            <button onClick={() => handleBuyNow(product)}>BUY</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DairyProducts;
