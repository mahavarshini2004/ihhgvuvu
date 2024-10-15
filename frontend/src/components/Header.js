import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <nav>
        <ul>
         <li><Link to="/Login">LOGIN-HERE</Link></li>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/dairy-products">DAIRY-PRODUCTS</Link></li>
          <li><Link to="/kitchenware">KITCHENWARE</Link></li>
          <li><Link to="/greens">GREENS</Link></li>
          <li><Link to="/vegetables">VEGETABLES</Link></li>
          <li><Link to="/fruits">FRUITS</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/cart">CART </Link></li>
          <li><Link to="/BuyConfirmation">BUY CONFIRMATION ({cartCount})</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
