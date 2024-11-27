// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user.models');
// const authMiddleware = require('../middlewares/authMiddleware');  // Import the authMiddleware

// const router = express.Router();

// // Registration route (no auth required for registration)
// router.post('/register',
//     body('email').trim().isEmail().withMessage('Invalid email').isLength({ min: 13 }).withMessage('Email too short'),
//     body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
//     body('username').trim().isLength({ min: 5 }).withMessage('Username must be at least 5 characters'),
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 errors: errors.array(),
//                 message: 'Invalid data'
//             });
//         }

//         const { username, email, password } = req.body;
//         try {
//             const existingUser = await User.findOne({ email });
//             if (existingUser) {
//                 return res.status(400).json({ message: 'Email already in use' });
//             }

//             const hashPassword = await bcrypt.hash(password, 10);
//             const newUser = await User.create({
//                 username,
//                 email,
//                 password: hashPassword
//             });
//             res.status(201).json(newUser);
//         } catch (err) {
//             res.status(500).json({ message: 'Server error' });
//         }
//     }
// );

// // Login route (no auth required for login)
// router.post('/login',
//     body('username').trim().isLength({ min: 5 }).withMessage('Username must be at least 5 characters'),
//     body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
//     async (req, res) => {
//         const { username, password } = req.body;

//         try {
//             const user = await User.findOne({ username });
//             if (!user) return res.status(400).json({ message: 'Invalid username or password' });

//             const isMatch = await bcrypt.compare(password.trim(), user.password.trim());
//             if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

//             const token = jwt.sign(
//                 { userId: user._id, email: user.email, username: user.username },
//                 process.env.JWT_SECRET, 
//                 { expiresIn: '1h' }
//             );

//             // Send the token in both cookie and response body
//             res.cookie('token', token, { 
//                 httpOnly: true, 
//                 secure: process.env.NODE_ENV === 'production', // Enable secure cookies in production
//                 maxAge: 3600 * 1000 // 1 hour expiration
//             });

//             res.status(200).json({
//                 message: 'Logged in successfully',
//                 token: token, // Include token in response body (optional, for storage in localStorage)
//             });
//         } catch (error) {
//             res.status(500).json({ message: 'Server error' });
//         }
//     }
// );

// // Protected route - example of a protected route that needs authentication

// module.exports = router;


const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware to protect routes

const router = express.Router();

// Registration Route
router.post(
  '/register',
  [
    body('email')
      .trim()
      .isEmail().withMessage('Invalid email')
      .isLength({ min: 13 }).withMessage('Email too short'),
    body('password')
      .trim()
      .isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
    body('username')
      .trim()
      .isLength({ min: 5 }).withMessage('Username must be at least 5 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), message: 'Invalid data' });
    }

    const { username, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }

      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        password: hashPassword,
      });

      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Login Route
router.post(
  '/login',
  [
    body('username')
      .trim()
      .isLength({ min: 5 }).withMessage('Username must be at least 5 characters'),
    body('password')
      .trim()
      .isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
  ],
  async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ message: 'Invalid username or password' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });

      const token = jwt.sign(
        { userId: user._id, email: user.email, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      console.log('Token generated:', token);
      // Send the token in a secure cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        maxAge: 3600 * 1000,
      });
      

      res.status(200).json({
        message: 'Logged in successfully',
        user: { id: user._id, username: user.username, email: user.email },
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Example Protected Route
router.get('/dashboard', authMiddleware, (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user.username}!`, user: req.user });
});



router.get('/verifyToken', authMiddleware, (req, res) => {
    // If the middleware allows the request to proceed, it means the token is valid
    res.status(200).json({ message: 'Token is valid' });
  });

module.exports = router;
