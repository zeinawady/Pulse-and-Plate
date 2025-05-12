const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/profile', auth, (req, res) => {
  res.json({ message: 'Welcome, authenticated user!', user: req.user });
});

module.exports = router;
