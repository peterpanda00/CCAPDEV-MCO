// LoginSignUpForm.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './newstyle.css';
function LoginSignUpForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [formType, setFormType] = useState('login');

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setFormType('login'); // Reset the form to login when closing the popup
  };

  const handleSignupClick = () => {
    setFormType('signup');
  };

  const handleLoginClick = () => {
    setFormType('login');
  };

  return (
    <div className="App">
      <button onClick={togglePopup} className='custom-button'>Login</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-background">
            <div className="popup-inner">
              {formType === 'login' ? (
                <LoginForm onClose={togglePopup} onSignupClick={handleSignupClick} />
              ) : (
                <SignupForm onClose={togglePopup} onLoginClick={handleLoginClick} />
              )}
              <div className="field">
              <button onClick={togglePopup} className='close-button'>&times;</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginSignUpForm;
