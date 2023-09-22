import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './report.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Component/Redux/UserSlice';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

function Report() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';

  // Sample claim data, replace with actual data fetched from your API
  const [claimData, setClaimData] = useState([]);

  useEffect(() => {
    // Fetch or set your claim data here
    const sampleClaimData = [
      {
        id: 1,
        claimDate: '2023-09-15',
        clientName: 'John Doe',
        status: 'Pending',
        statusDetails: 'Waiting for approval',
      },
      {
        id: 2,
        claimDate: '2023-09-10',
        clientName: 'Jane Smith',
        status: 'Approved',
        statusDetails: 'Payment processed',
      },
      // Add more claim objects as needed
    ];

    setClaimData(sampleClaimData);
  }, []);

  // Sample attributed clients count
  const policyCount = 42;
  const  ClaimsCount=12;
  const  paymentCount=12;

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
                Report
              </Link>
            </li>
            <li>
              <Link to="/claims" style={linkStyle}>
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
        
        <div className="report-box">
          
          <div className="attributed-clients">
            <p>Total Policies:</p>
            <span className="client-count">{policyCount}</span>
          </div>
        </div>
        <div className="an-report-box">
          
        <p>Client Count </p>
            <span className="client-count">{ClaimsCount}</span>
            
            </div>
         
          <div className="in-report-box">  
          <div className="attributed-clients">
            <p>Total Payment</p>
            <span className="client-count">{paymentCount}</span>
          </div>
          </div>

        
        
       
      </main>
    </div>
  );
}

export default Report;
