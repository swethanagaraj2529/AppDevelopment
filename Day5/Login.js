import React, { useState } from 'react';
import './login.css'; // Your existing CSS
import LogoImage from './login_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './Component/Redux/UserSlice';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(''); // Use 'identifier' to represent either email or username
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // For showing the popup message
  const [popupMessage, setPopupMessage] = useState(''); // Message to be displayed in the popup

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
      alert('Login successful!');
      dispatch(login(identifier)); // Use 'identifier' as the payload for login
      navigate('/home');
    }
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
  };

  return (
    <div className="container">
      <div className="logo-container">
        <Link to="/home" className="logo-button">
          <img src={LogoImage} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="image-container"></div>
      <div className="form-container signup">
        <h1>Your health and financial safety are our top priorities!!</h1>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your username or email"
              value={identifier}
              onChange={handleIdentifierChange}
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
          <Link to="/sign" style={linkStyle}>
            Create New Account
          </Link>
        </div>
      </div>
      
      {/* Popup Message */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
