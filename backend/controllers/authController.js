// authController.js

// Import any necessary modules, such as User model or JWT library
// For example, if you are using Mongoose for MongoDB and bcrypt for password hashing:
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controller function for handling login
const loginController = async (req, res) => {
  try {
    // Perform login logic here using req.body
    const { emailAddress, password } = req.body;

    // Find the user by email address in the database
    const user = await User.findOne({ emailAddress });

    // If the user does not exist, return an error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password is invalid, return an error
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // If login is successful, create a JWT token and send it back in the response
    res.cookie('_id', user._id)
    const token = jwt.sign({ userId: user._id }, 'ccapdev'); 
    res.json({ message: 'Login successful', token, user: { emailAddress } });
    

  } catch (error) {
    console.error('Login failed:', error.message);
    res.status(500).json({ error: 'Login failed' });
  }
};

// Controller function for handling signup
const signupController = async (req, res) => {
  try {
    // Perform signup logic here using req.body
    const { userName,emailAddress, password, firstName, lastName, contactNumber } = req.body;

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ emailAddress });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database with the provided information
    const newUser = await User.create({
      userName,
      emailAddress,
      password: hashedPassword,
      firstName,
      lastName,
      contactNumber
    });

    // If signup is successful, create a JWT token and send it back in the response
    res.cookie('_id', newUser._id);
    const token = jwt.sign({ userId: newUser._id }, 'ccapdev');
    res.json({ message: 'Signup successful', token, user: { userName,emailAddress, firstName, lastName, contactNumber} });

  } catch (error) {
    console.error('Signup failed:', error.message);
    res.status(500).json({ error: 'Signup failed' });
  }
};

module.exports = {
  loginController,
  signupController,
};
