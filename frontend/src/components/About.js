import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Our Grocery Store</h2>
      <p>
        Welcome to our Grocery Store! We pride ourselves on offering the best
        and freshest products at affordable prices. Our categories include Dairy
        Products, Kitchenware, Greens, Vegetables, and Fruits. Whether you're
        looking for organic produce or everyday kitchen essentials, we've got
        you covered.
      </p>
      <p>
        Our mission is to provide high-quality, sustainable products to our
        community. We carefully select our suppliers and strive to maintain the
        highest standards of freshness and quality. Thank you for shopping with
        us!
      </p>
      <h3>Why Shop With Us?</h3>
      <ul>
        <li>Fresh, local, and organic produce</li>
        <li>Affordable prices</li>
        <li>Eco-friendly packaging</li>
        <li>Fast delivery services</li>
      </ul>
    </div>
  );
};

export default About;
