var express = require('express');
var router = express.Router();

const User = require('../models/users')
const uid2 = require('uid2')
const bcrypt = require('bcrypt')

//User Sign Up
router.post('/signup', async (req, res) => {
  try {
    const { username, email } = req.body

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hash = bcrypt.hashSync(password, 10)
    const newUser = new User({
      username,
      email,
      password: hash,
      token: uid2(32)
    })
    const savedUser = await newUser.save();

    res.status(201).json(savedUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//User Sign In
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

//Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.json(500).json({ message: error.message })
  }
});

//Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne(req.params.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

//Update user by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

//Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.body.params);
    res.json(deletedUser)
  } catch (error) {
    res.json(500).json({ message: error.message })
  }
});

module.exports = router;
