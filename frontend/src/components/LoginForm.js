// LoginForm.js
import React, { useState, useEffect } from 'react';

const LoginForm = ({ onClose, onSignupClick }) => {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log({ emailAddress, password });
  };
  useEffect(() => {
    // Implement login logic using fetch 

    const loginUser = async (formData) => {
      const response = await fetch('/api/login', {
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
    };
    loginUser(formData)
      .then((response) => {
        console.log('Logged in:', response);
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
      });
  }, [emailAddress, password]);


  return (
    <form onSubmit={handleLogin}>
      <div className="field">
        <input type="text" placeholder="Email Address" required value={emailAddress} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="field">
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="field">
        <input type="submit" value="Login" />
      </div>
      <div className="signup-link">
        <p>Don't have an account yet?</p> <button onClick={onSignupClick}>Signup now</button>
      </div>
    </form>
  );
};

export default LoginForm;
