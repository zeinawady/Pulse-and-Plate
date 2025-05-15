const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');

const JWT_SECRET = "your_jwt_secret";

// Utility to generate JWT
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

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, date, role="user",ordersList } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email.' });
    }

    const user = new User({ name, email, password, date, role, orderList });
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

// Login a user
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

// Get all users (unprotected, could be protected if needed)
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
});

router.delete('/:userID', async (req, res) => {

  const userID = req.params.userID;
  if (!userID) {
    return res.status(400).json({ message: "User ID parameter is required." });
  }

  const deletedUser = await User.findByIdAndDelete(userID);
  // const deletedUser = await User.fi
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
    user.password = req.body.password || user.password;

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

module.exports = router;
