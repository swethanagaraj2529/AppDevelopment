import React, { useState } from 'react';
import './login.css'; // Your existing CSS
import LogoImage from './login_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './Component/Redux/UserSlice';
import { useDispatch } from 'react-redux';
import Popup from './Popup'; // Import the Popup component

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(''); // Use 'identifier' to represent either email or username
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // For showing the popup message
  const [popupMessage, setPopupMessage] = useState(''); // Message to be displayed in the popup
  const [loginSuccess, setLoginSuccess] = useState(false); // For showing the login success message

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      setPopupMessage('Please enter both username or email and password.');
      setShowPopup(true);
    } else if (password.length < 8) {
      setPopupMessage('Password should have at least 8 characters.');
      setShowPopup(true);
    } else {
      // Simulate a successful login
      dispatch(login(identifier)); // Use 'identifier' as the payload for login
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false); // Hide the login success message after a delay
        navigate('/user');
      }, 2000); // Adjust the delay as needed
    }
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
  };

  return (
    <div className='sww'>
   
      <div className="logo-containers">
        <Link to="/home" className="logo-button">
          <img src={LogoImage} alt="Logo" className="logos" />
        </Link>
      </div>
      <div className="image-containers"></div>
        <h1 className='kee'>Your health and financial safety are our top priorities!!</h1>
      <div className="form-form">
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              id="username" // Add a unique id attribute
              name="username"
              placeholder="Enter your username or email"
              value={identifier}
              onChange={handleIdentifierChange}
              required
            />
          </div>
          <div className="form-groups">
            <input
              type="password"
              id="password" // Add a unique id attribute
              name="password"
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
          <Link to="/sign" style={linkStyle}>
            Create New Account
          </Link>
        </div>
    
      </div>
        <div className='frames'></div>
      
      {/* Popup Message */}
      {showPopup && (
        <Popup
          togglePopup={() => setShowPopup(false)}
          message={{ type: 'Popup Title', content: popupMessage, btn: 'Got It' }}
          handleGotItClick={() => setShowPopup(false)}
        />
      )}

      {/* Login Success Message */}
      {loginSuccess && (
        <Popup
          togglePopup={() => setLoginSuccess(false)}
          message={{ type: 'Login Successful', content: 'You have successfully logged in.', btn: 'Got It' }}
          handleGotItClick={() => setLoginSuccess(false)}
        />
      )}
   
    </div>
  );
};

export default LoginForm;
