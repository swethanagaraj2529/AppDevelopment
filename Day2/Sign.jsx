import React, { useState } from 'react';
import './sign.css';
import logoImage from './Logo.png';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [username, setUsername] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const linkStyle = {
    textDecoration: 'none', 
    color: 'blue', 
  };


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
   
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
   
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
        <h3>SKY HEALTH INSURANCE</h3>
      </div>
      <div className="image-container"></div>
      <div className="form-container signup">
        <h1>Your health and financial safety is our higher priority!!</h1>
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
         
          <button type="submit" className="logbutton">
            Signup
          </button>
        </form>
        <div className="new">
          <p>Already have an account? <Link to="/login" style={linkStyle}>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
