import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './login_logo.png';
import './indi.css';
import { useSelector } from 'react-redux';
import womenImage from './women_care.avif';
import { selectUser } from './Component/Redux/UserSlice';

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

function Indi() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';

  // Sample claim data, replace with actual data fetched from your API
  const [claimData, setClaimData] = useState([]);

  return (
    <div className="home-policy">
      <div className="logo-container-claim-policy">
        <img src={logoImage} alt="Logo-policy" className="logo-claim-policy" />
      </div>

      <nav className="menu-bar-claim-policy">
        <ul className="menu-claim-policy">
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
      <div className='pad'>
        <div className='head'>
          <h1>ALL HEALTH PLANS</h1>
          <h2>Best Health Insurance Plans to secure yourself</h2>
        </div>
        <div className="options-bar">
          <button className="menu-button">All</button>
          <button className="menu-button">Individual</button>
          <button className="menu-button">Seniors</button>
          <button className="menu-button">Family</button>
        </div>
      </div>

      <div className="policy-list">
        <div className="plan">
          <h3>Sky Women Care Insurance Policy</h3>
          <div className="plan-details">
            <p>Unique Cover: Specially designed policy that provides multi-fold benefits for women.</p>
            <p>Automatic Restoration: 100% of the Sum insured is restored once in a policy period</p>
            <p>Delivery Expenses: Normal & C-section delivery expenses are covered(including pre and post-natal)</p>
          </div>
        </div>
        </div>

        <div className="plan-s">
           <h3>Comprehensive Insurance Policy</h3> 
          <div className="plan-details">
          <p>Buy back pEd:Optional cover to reduce  waiting period in respect of Pre-Existing diseases.</p>
            <p>Automatic Restoration: 100% of the Sum insured is restored once in a policy period</p>
            <p>Mid Term Inclusion: Newly married/wedded spouse and new born baby are covered on payment of additional premium</p>
          </div>
        </div>
        <div className='plann-v'>
        <div className="plan-v">
           <h3>Senior Citizen Red Carpet Health Insurance</h3> 
          
          <p>Elderly Cover:  Designed for the age group of 60 – 75 years with lifelong renewals .</p>
            <p>Outpatient Cover: Get cover for medical consultations as an outpatient at Network Hospitals </p>
            <p> Get cover for medical consultations as an outpatient at Network Hospitals </p>
          </div>
        </div>
        </div>
      
    
  );
}

export default Indi;
