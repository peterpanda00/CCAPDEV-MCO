// LoginForm.js
import React, { useState, useEffect } from 'react';

const LoginForm = ({ onClose, onSignupClick }) => {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [prompt, setMessage] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault();
    // Perform login logic here
    const formData = {emailAddress,password};
    const response = await fetch('/api/login',{
        method:'POST',
        body:JSON.stringify(formData),  
        headers:{
          'Content-Type':'application/json'
        }
    })
    const json = await response.json( )

    if(!response.ok){
        setMessage(json.error)
        console.log('Login failed',json)
    }
    if(response.ok){
        setEmail('')
        setPassword('')
        setMessage('Login Successful')
        console.log('Login Successful', json)
        alert('Log in Successful')
        window.location.reload();
    }

}

  

  return (
    <form onSubmit={handleLogin}>
      <div className="d-flex justify-content-center">
      {prompt && <div className="text-white">{prompt}</div>}
    </div>
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
