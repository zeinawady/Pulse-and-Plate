const express = require('express');
const router = express.Router();
const User = require('../models/user')
const auth = require('../middleware/auth');

// user authentication

const jwt = require('jsonwebtoken');
const JWT_SECRET = "your_jwt_secret";

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ error: 'User already exists with this email or id.' })
    }
    const user = new User({ name, email, password })
    await user.save()
    res.status(201).json({ message: 'User registered successfully.' });
  }
  catch (err) {
    res.status(400).json({ error: 'Registration failed', details: err.message });
  }

})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role, id: user.id },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
});

// writing the code of delete user function 
//tjis function will be auth to ensure the authorization and the admin is the only person who can delete the user 
router.delete('/:userID', async (req, res) => {

  // if (!req.user || req.user.role !== "admin") { //that means it is a normal user want to make things to allowed to him
  //   return res.status(403).json({ message: "Forbidden: Only admins can delete users." });
  // }

  const userid = req.params.userID;
  let numberuserid;
  if (!userid) { return res.status(400).json({ message: "User ID parameter is required." }); }

  numberuserid = Number(userid);
  if (isNaN(numberuserid)) { return res.status(400).json({ message: "User ID must be a valid number." }); }
  const findinguser = await User.findOneAndDelete({ id: numberuserid });
  if (!findinguser) { return res.status(404).json({ message: `User with ID "${numberuserid}" not found.` }); }

  res.status(200).json({ message: `User with ID "${numberuserid}" deleted successfully.` });

});

module.exports = router;
