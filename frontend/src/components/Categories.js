import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul>
        <li><Link to="/dairy-products">Dairy Products</Link></li>
        <li><Link to="/kitchenware">Kitchenware</Link></li>
        <li><Link to="/greens">Greens</Link></li>
        <li><Link to="/vegetables">Vegetables</Link></li>
        <li><Link to="/fruits">Fruits</Link></li>
      </ul>
    </div>
  );
};

export default Categories;
