import React from 'react';
import axios from 'axios';

const Product = ({ product }) => {

  
  const addToCart = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart/add-to-cart', {
        userId: '12345', 
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: 1, 
        image: product.image,
      });
      console.log('Cart updated:', response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button> 
    </div>
  );
};

export default Product;
