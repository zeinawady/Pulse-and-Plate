const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');

const JWT_SECRET = "your_jwt_secret";

const generateToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      role: user.role,
      id: user.id,
    },
    JWT_SECRET,
    { expiresIn: '30d' }
  );
};

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role = "user" } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email.' });
    }

    const user = new User({ name, email, password, role });
    await user.save();

    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.__v;
    delete userObj._id;
    delete userObj.role;

    res.status(201).json({
      message: 'User registered successfully.',
      user: userObj,
    });
  } catch (err) {
    res.status(400).json({ error: 'Registration failed', details: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(user);

    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.__v;

    res.json({ token, user: userObj });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
});

router.delete('/:userID', auth, async (req, res) => {

  const userID = req.params.userID;
  if (!userID) {
    return res.status(400).json({ message: "User ID parameter is required." });
  }

  if (req.user.userId !== userID) {
    return res.status(403).json({ message: "You are not authorized to delete this user." });
  }

  const deletedUser = await User.findByIdAndDelete(userID);
  if (!deletedUser) {
    return res.status(404).json({ message: `User with ID "${userID}" not found.` });
  }

  res.status(200).json({ message: `User with ID "${userID}" deleted successfully.` });
});

// Update user profile (authenticated user)
router.put('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.oldPassword && req.body.password) {
      const matched = await user.password.comparePassword(req.body.password);
      if (!matched) {
        return res.status(400).json({ message: 'Old password is incorrect' });
      }
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser),
    });
  } catch (err) {
    res.status(500).json({ error: 'Profile update failed', details: err.message });
  }
});

router.get("/orders", auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("items") // or "item", depending on your schema
      .exec();

    res.status(200).json({ orders });
  } catch (err) {
    console.error("Failed to get user orders:", err);
    res.status(500).json({ message: "Could not fetch orders" });
  }
});



module.exports = router;
