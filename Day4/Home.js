import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './home.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Component/Redux/UserSlice';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

function Home() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';

  return (
    <div className="home">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <nav className="sidebar-menu">
          <ul>
          <li>
              <Link to="/home" style={linkStyle}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/claims" style={linkStyle}>
                Claims
              </Link>
            </li>
            <li>
              <Link to="/report" style={linkStyle}>
                Reports
              </Link>
            </li>

            <li>
              <Link to="/renewal" style={linkStyle}>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="menu-bar">
          <ul className="menu">
            <li>
              <Link to="/contact" style={linkStyle}>
                Plans
              </Link>
            </li>
         
            <li>
              <Link to="/about" style={linkStyle}>
                About Us
              </Link>
            </li>
           
            <li>
              <Link to="/login" style={linkStyle}>
                Log In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
          <h1>Welcome!👋🏻 {email}</h1>
      </main>
    </div>
  );
}

export default Home;
