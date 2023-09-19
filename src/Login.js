import React, { useState } from 'react';
import './login.css';
import logoImage from './Logo.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
 
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container">
      <div className="logo-container">
      
        <img src={logoImage} alt="Logo" className="logo" />
        <h3>SKY HEALTH INSURANCE</h3> {/* Add your heading here */}
      </div>
      <div className="image-container"></div>
      <div className="form-container signup">
      <h1>Your health and financial safety is our higher priority!! </h1>{/* Add your heading here */}
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="logbutton">
            Login
          </button>
        </form>
        <div className="new">
          <Link to="/sign">Create New Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
