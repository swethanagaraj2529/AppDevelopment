import React, { useState } from 'react';
import './sign.css';
import LogoImage from './login_logo.png';
import { Link } from 'react-router-dom';
import Popup from './Popup'; // Import the Popup component

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPopup, setShowPopup] = useState(false); // For showing the popup message
  const [popupMessage, setPopupMessage] = useState(''); // Message to be displayed in the popup

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

    if (!username || !email || !password || !confirmPassword) {
      setPopupMessage('Please fill in all the required fields.');
      setShowPopup(true);
    } else if (password !== confirmPassword) {
      setPopupMessage('Password and Confirm Password do not match.');
      setShowPopup(true);
    } else {
      // Account signup logic goes here

      // If signup is successful, show a success message
      setPopupMessage('Account created successfully!');
      setShowPopup(true);

      // You can reset the form fields here if needed
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="containerss">
      <div className="logo-containerss">
        <Link to="/home" className="logo-button">
          <img src={LogoImage} alt="Logo" className="logoss" />
        </Link>
      </div>
    
      <div className="form-container-signupss">
        <h1>Your health and financial safety is our higher priority!!</h1>
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-groupss">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-groupss">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-groupss">
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-groupss">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button type="submit" className="logbutton-sign">
            Signup
          </button>
        </form>
        <div className="newss">
          <p>
            Already have an account?{' '}
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <Popup
          togglePopup={() => setShowPopup(false)}
          message={{
            type: 'Popup Title',
            content: popupMessage,
            btn: 'Got It',
          }}
          handleGotItClick={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default SignupForm;
