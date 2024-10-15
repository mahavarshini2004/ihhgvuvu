// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DairyProducts from './components/DairyProduct';
import Kitchenware from './components/Kitchenware';
import Greens from './components/Greens';
import Vegetables from './components/Vegetables';
import Fruits from './components/Fruits';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';
import BuyConfirmation from './components/BuyConfirmation';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dairy-products" element={<DairyProducts onAddToCart={handleAddToCart} />} />
        <Route path="/kitchenware" element={<Kitchenware />} />
        <Route path="/greens" element={<Greens />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartCount={cartCount} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buy-confirmation" element={<BuyConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
