const Order = require('../models/order');

const createOrder = async (req, res) => {
    try {
        const { productId, name, price, quantity } = req.body;
        const order = new Order({ productId, name, price, quantity });
        await order.save(); 
        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Failed to place order', error });
    }
};

module.exports = {
    createOrder,
};
