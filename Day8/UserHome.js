import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './userhome.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Component/Redux/UserSlice';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

function FooterUser() {
  return (
    <footer className="footer-user">
      <div className="footer-links-user">
        <Link to="/privacy" style={linkStyle}>
          Privacy Policy
        </Link>
        <Link to="/terms" style={linkStyle}>
          Terms and Conditions
        </Link>
        <Link to="/login" style={linkStyle}>
          Log out
        </Link>
      </div>
    </footer>
  );
}

function UserHome() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';

  return (
    <div className="home-user">
      {/* Add the Admin button at the top right corner */}
      

      <div className="sidebar-user">
        <div className="logo-container-user">
          <img src={logoImage} alt="Logo-user" className="logo" />
        </div>
        <nav className="sidebar-menu-user">
          <ul>
            {/* <li>
              <Link to="/dashboard" style={linkStyle}>
                Dashboard
              </Link>
            </li> */}
            <li>
              <Link to="/policy" style={linkStyle}>
                Policy
              </Link>
            </li>
            <li>
              <Link to="/claims" style={linkStyle}>
                Claim
              </Link>
            </li>
            <li>
              <Link to="/pay" style={linkStyle}>
                Payment
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="menu-bar-user">
          <ul className="menu-user">
            <li>
              {/* <Link to="/contact" style={linkStyle}>
                Plans
              </Link> */}
            </li>
            <li>
              {/* <Link to="/about" style={linkStyle}>
                About Us
              </Link> */}
            </li>
            <li>
              <Link to="/login" style={linkStyle}>
                
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='main-user'>
        <h1>
          <span style={{ color: 'white', fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>
            {email}
          </span>
        </h1>
      </div>
      <FooterUser />
    </div>
  );
}

export default UserHome;
