
const express = require('express');
const Cart = require('./models/Cart');
const router = express.Router();


router.post('/add-to-cart', async (req, res) => {
  const { userId, productId, name, price, quantity, image } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    
    if (cart) {
      const productIndex = cart.items.findIndex(item => item.productId === productId);
      
      if (productIndex !== -1) {
        cart.items[productIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, name, price, quantity, image });
      }

      cart.totalAmount += price * quantity;
    } else {
      cart = new Cart({
        userId,
        items: [{ productId, name, price, quantity, image }],
        totalAmount: price * quantity,
      });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Error adding product to cart' });
  }
});


router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cart' });
  }
});

module.exports = router;
