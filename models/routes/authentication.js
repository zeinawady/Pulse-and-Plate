const express = require("express")
const router = express.Router()
const jwt = require('jsonwebtoken');

const User = require("../user")

const JWT_SECRET = "your_jwt_secret";

router.post('/register' ,async (req , res) =>{
    try
    {
        const { id , Name, email, password } = req.body
        
        const existingUser = await User.findOne({ $or: [{ email }, { id }] })

        if(existingUser)
        {
            res.status(400).json({ error: 'User already exists with this email or id.' })
        }
        const user = new User( { id , Name, email, password })
        await user.save()
        res.status(201).json({ message: 'User registered successfully.' });
    }
    catch (err) 
    {
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
module.exports = router