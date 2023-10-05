import React, { useState } from 'react';
import './loginadmin.css'; // Your existing CSS
import LogoImage from './login_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './Component/Redux/UserSlice';
import { useDispatch } from 'react-redux';
import Popup from './Popup'; // Import the Popup component

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('admin'); // Set default username to 'admin'
  const [password, setPassword] = useState('12345'); // Set default password to '12345'
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

    if (identifier === 'admin' && password === '12345') {
      // Simulate a successful login
      dispatch(login(identifier)); // Use 'identifier' as the payload for login
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false); // Hide the login success message after a delay
        navigate('/user');
      }, 2000); // Adjust the delay as needed
    } else {
      setPopupMessage('Invalid username or password. Please try again.');
      setShowPopup(true);
    }
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
  };

  return (
    <div className='swwee'>
   
      <div className="logo-container-admin">
        <Link to="/home" className="logo-button-admin">
          <img src={LogoImage} alt="Logo" className="logo-admin" />
        </Link>
      </div>
      <div className="image-container-admin"></div>
        <h1 className='kee-admin'>Your health and financial safety are our top priorities!!</h1>
      <div className="form-form-admin">
        
        <form onSubmit={handleLogin}>
          <div className="form-group-admin">
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
          <div className="form-groups-admin">
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
        <div className="new-admin">
          <Link to="/sign" style={linkStyle}>
            Create New Account
          </Link>
        </div>
      
      </div>
      
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

export default Login;
