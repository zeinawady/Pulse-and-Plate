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

const Order = require("../models/order.js"); 
const Item = require("../models/item.js");   
const User = require("../models/user.js");   
const auth = require("../middleware/auth"); 



// makign the get order function and returning the item info
// now in this function the front team will send the name of the item that the user choosen it to added in the cart 
//and will use this api to get all the information related to this item
router.get("/item/name/:name", async (req, res) => {
  const itemName = req.params.name;
  try {
    const item = await Item.findOne({ name: itemName });
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.status(200).json({
      message: "Item info returned successfully",
      item: item
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching item", error: err.message });
  }
});

//now after the front taking the item information and showing it in the cart page they will need to send 
//the item name again but with the number of quantites the user is ordered for it and this will happened by this 
// we will use the aith here to ensure that the loggend users who is making this request 
router.post("/", auth, async (req, res) => {

  const { itemname, quantity } = req.body;
  const userId = req.user._id; // Use `.userId` from the decoded token

  if (!itemname) {
    return res.status(400).json({ message: "Item name is required." });
  }

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ message: "Valid quantity is required." });
  }

  try {
    const item = await Item.findOne({ name: itemname });
    if (!item) {
      return res.status(404).json({ message: "Item not found." });
    }

    if (item.avilableCounter < quantity) {
      return res.status(400).json({
        message: `Only ${item.avilableCounter} items are available in stock.`,
      });
    }

    const newOrder = new Order({
      user: userId,              // ✔ matches schema field
      item: item._id,
      quantity,
    });
    await newOrder.save();

    item.avilableCounter -= quantity;
    await item.save();

    const user = await User.findById(userId);
    if (!user) {
      await Order.findByIdAndDelete(newOrder._id);
      return res.status(500).json({
        message: "Order created but user not found. The order has been cancelled.",
      });
    }

    user.ordersList.push(newOrder._id);
    await user.save();

    res.status(201).json({
      message: "Order created successfully.",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({
      message: "Something went wrong while processing the order.",
      error: error.message,
    });
  }
});

router.get("/myorders", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("item");
    const cart = orders.map((order) => ({
      _id: order._id,
      name: order.item.name,
      price: order.item.price,
      photo: order.item.photo,
      quantity: order.quantity,
    }));
    res.json({ cart });
  } catch (err) {
    console.error("Failed to fetch orders:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

router.put("/cart/:id", auth, async (req, res) => {
  const { quantity } = req.body;

  if (quantity <= 0) {
    return res.status(400).json({ message: "Quantity must be greater than 0" });
  }

  try {
    const order = await Order.findOne({ _id: req.params.id, user: req.user._id });
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.quantity = quantity;
    await order.save();
    res.json({ message: "Quantity updated" });
  } catch (err) {
    console.error("Error updating quantity:", err);
    res.status(500).json({ message: "Failed to update quantity" });
  }
});   

router.delete("/cart/:id", auth, async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findOne({ _id: orderId, user: req.user._id }).populate("item");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Restore the item quantity
    const item = order.item;
    item.avilableCounter += order.quantity;
    await item.save();

    // Remove order ID from user's ordersList
    const user = await User.findById(req.user._id);
    if (user) {
      user.ordersList = user.ordersList.filter((id) => id.toString() !== orderId);
      await user.save();
    }

    // Delete the order
    await order.deleteOne();

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Failed to delete order", error: error.message });
  }
});

module.exports = router;
