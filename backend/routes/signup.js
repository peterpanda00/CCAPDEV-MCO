const express = require('express');
const router = express.Router();

// Import your signup controller functions
const { signupController } = require('../controllers/authController');

// Signup route
router.post('/', signupController);

module.exports = router;
