import React, { useState } from 'react';
import 'css/newstyle.css';


function LoginSignUpForm() {
  const [formType, setFormType] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    // Login API
    const loginUser = async (formData) => {
    const response = await fetch('backend/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response.json();
  };
  
   // Signup API
    const signupUser = async (formData) => {
    const response = await fetch('backend/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return response.json();
  };


    if (formType === 'login') {
        try {
            // Handle login form submission
            const formData = { email, password };
            const response = await loginUser(formData);
            // Do something with the login response, e.g., redirect to a new page
            console.log('Logged in:', response);
          } catch (error) {
            console.error('Login failed:', error.message);
          }
    } else if (formType === 'signup') {
        // Perform validation for the password match
        if (password !== confirmPassword) {
          alert('Passwords do not match. Please try again.');
          return;
        }
    
        try {
          // Handle signup form submission
          const formData = {
            email,
            password,
            firstName,
            lastName,
            contactNumber,
          };
          const response = await signupUser(formData);
          // Do something with the signup response, e.g., show a success message or redirect to a new page
          console.log('Signed up:', response);
        } catch (error) {
          console.error('Signup failed:', error.message);
        }
      } else {
        console.error('Invalid form type.');
      }
    };

  const toggleForm = (formType) => {
    setFormType(formType);
  };

  return (
    <div className="App">
      <div className="title-text">
        <div className={`title ${formType}`}>{formType === 'login' ? 'Login Form' : 'Signup Form'}</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={formType === 'login'} onChange={() => toggleForm('login')} />
          <input type="radio" name="slide" id="signup" checked={formType === 'signup'} onChange={() => toggleForm('signup')} />
          <label htmlFor="login" className="slide login">
            Login
          </label>
          <label htmlFor="signup" className="slide signup">
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form onSubmit={handleFormSubmit} style={{ display: formType === 'login' ? 'block' : 'none' }}>
            <div className="field">
              <input type="text" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
            </div>
          </form>
          <form onSubmit={handleFormSubmit} style={{ display: formType === 'signup' ? 'block' : 'none' }}>
            <div className="field">
              <input type="text" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
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
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUpForm;
