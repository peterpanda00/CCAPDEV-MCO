// Create a new file, e.g., authRoutes.js, for the login and signup routes
const express = require('express');
const router = express.Router();

// Import your login and signup controller functions
const { loginController, signupController } = require('./controllers/authController');

// Login route
router.post('/login', loginController);

// Signup route
router.post('/signup', signupController);

module.exports = router;
