import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './claimprocess.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Component/Redux/UserSlice';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};
const linkStyle2 ={
  textDecoration : 'none',
  color:'black',
}

function ClaimUp() {
  return (
    <div className="homei">
      <div className="sidebar-claimpi">
        <div className="logo-container-claimpi">
          <img src={logoImage} alt="Logo" className="logo-claimpi" />
        </div>

        <nav className="menu-bar-claimpi">
          <ul className="menu-claimpi">
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
        <div className="horizontal-optionsi">
          <Link to="/claimpro" className="option" style={linkStyle2}>
            Claim Process
          </Link>
          <Link to="/claimin" className="optioni" style={linkStyle2}>
            Claim Intimation
          </Link>
          <Link to="/claimst" className="optioni" style={linkStyle2}>
            Claim Status
          </Link>
          {/* <Link to="/claimup" className="optioni" style={linkStyle2}>
            Claim Upload
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default ClaimUp;