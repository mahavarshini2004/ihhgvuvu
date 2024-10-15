
const express = require('express');
const router = express.Router();
const Order = require('./order'); 

router.post('/', async (req, res) => {
  const { productId, name, price, quantity } = req.body;

  try {
    const newOrder = new Order({ productId, name, price, quantity });
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order' });
  }
});

module.exports = router;
