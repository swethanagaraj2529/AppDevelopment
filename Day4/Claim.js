import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './claim.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Component/Redux/UserSlice';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

function Claim() {
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

  return (
    <div className="home">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <nav className="sidebar-menu">
          {/* ... your sidebar menu */}
          <ul><li>
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
        <div className='claims'>
          <h2>Insurance Claims</h2>
        </div>
        <table className="footer-table">
          <thead>
            <tr>
              <th>Claim Date</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Status Details</th>
              
            </tr>
          </thead>
          <tbody>
            {claimData.map((claim) => (
              <tr key={claim.id}>
                <td>{claim.claimDate}</td>
                <td>{claim.clientName}</td>
                <td>{claim.status}</td>
                <td>{claim.statusDetails}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Claim;
