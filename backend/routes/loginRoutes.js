const express = require('express');
const router = express.Router();

// Import your login controller functions
const { loginController } = require('../controllers/authController');

// Login route
router.post('/', loginController);


module.exports = router;