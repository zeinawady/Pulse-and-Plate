const express = require('express');
const router = express.Router();

const order = require('../models/order');
router.get('/', async (req, res) => {
  try {
    const orders = await order.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error: error.message });
  }
});
