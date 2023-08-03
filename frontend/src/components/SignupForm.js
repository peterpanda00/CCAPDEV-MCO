// SignupForm.js
import React, { useState, useEffect } from 'react';

const SignupForm = ({ onClose, onLoginClick }) => {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    // Perform signup logic here
    console.log({
      emailAddress,
      password,
      firstName,
      lastName,
      contactNumber,
      confirmPassword,
    });
  };


useEffect(() => {
  // Implement signup logic using fetch 
  
  const signupUser = async (formData) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response.json();
  };

  const formData = {
    emailAddress,
    password,
    firstName,
    lastName,
    contactNumber,
  };
  signupUser(formData)
    .then((response) => {
      console.log('Signed up:', response);
    })
    .catch((error) => {
      console.error('Signup failed:', error.message);
    });
}, [emailAddress, password, firstName, lastName, contactNumber, confirmPassword]);

  return (
    <form onSubmit={handleSignup}>
      <div className="field">
        <input type="text" placeholder="Email Address" required value={emailAddress} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="field">
        <input type="text" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="field">
        <input type="text" placeholder="Last Name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="field">
        <input type="text" placeholder="Contact Number" required value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
      </div>
      <div className="field">
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="field">
        <input type="password" placeholder="Confirm password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <div className="field">
        <input type="submit" value="Signup" />
      </div>
      <div className="login-link">
        Already have an account? <button onClick={onLoginClick}>Login</button>
      </div>
    </form>
  );
};

export default SignupForm;
