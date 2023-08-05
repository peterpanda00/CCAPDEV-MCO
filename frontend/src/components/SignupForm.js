// SignupForm.js
import React, { useState, useEffect } from 'react';

const SignupForm = ({ onClose, onLoginClick }) => {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [prompt, setMessage] = useState(null)
  

  const [error, setError] = useState(null )
  const handleSignup = async (event) => {
    event.preventDefault();
    // Perform signup logic here
    const formData = { userName, emailAddress, password, firstName, lastName, contactNumber};
    const response = await fetch('/api/signup',{
      method:'POST',
      body:JSON.stringify(formData),  
      headers:{
        'Content-Type':'application/json'
      }
    })
  const json = await response.json( )

  if(!response.ok){
      setMessage(json.error)
      console.log('Signup failed',json)
    }
  if(response.ok){
      setUserName('')
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setContactNumber('')
      setMessage('Signup success')
      console.log('Signup success', json)
      alert('Signup Successful')
      window.location.reload();
      
    }
  }



  return (
    <form onSubmit={handleSignup}>
        <div className="d-flex justify-content-center">
        {prompt && <div className="text-white">{prompt}</div>}
      </div>
       <div className="field">
        <input type="userName" placeholder="User Name" required value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
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
        <input type="submit" value="Signup" />
      </div>
      <div className="login-link">
        <p>Already have an account?</p> <button onClick={onLoginClick}>Login</button>
      </div>
    </form>
  );
};

export default SignupForm;
