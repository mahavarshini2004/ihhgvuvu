import React, { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import axios from 'axios';

const ProductList = ({ category, addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => {
        const filteredProducts = response.data.filter((product) => product.category === category);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <div className="product-list-container">
      <h2>{category} Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
