import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './claim.css';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

const linkStyle2 = {
  textDecoration: 'none',
  color: 'black',
};

function Claim() {
  return (
    <div className="home">
      <div className="sidebar-user">
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
        <div className="logo-container-user">
          <img src={logoImage} alt="Logo" className="logo-user" />
        </div>

        <nav className="menu-bar-user">
          <ul className="menu-user">
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

        {/* Horizontal options */}
        <div className="horizontal-options">
          <Link to="/claimpro" className="option" style={linkStyle2}>
            Claim Process
          </Link>
          <Link to="/claimin" className="option" style={linkStyle2}>
            Claim Intimation
          </Link>
          <Link to="/claimst" className="option" style={linkStyle2}>
            Claim Status
          </Link>
          {/* <Link to="/claimup" className="option" style={linkStyle2}>
            Claim Upload
          </Link> */}
        </div>

        {/* Add the paragraph here */}
        <div className="planp">
          {/* <h3>Sky Women Care Insurance Policy</h3> */}
          <div className="plan-detailsp">
            <p>At Sky Health and Allied Insurance, we understand that health emergencies can be a stressful time for you and your loved ones. That’s why
               we are dedicated to making the insurance claim process worry-free for you. Our in-house claim settlement team works efficiently to process and settle claims promptly, 
              with a track record of settling over Rs. Four crores every hour. </p>
               <p1>We also offer cashless treatment facilities across extensive network of over 14,000 hospitals, so you
                 can focus on your health without worrying about financial 
              hardships..We do not cover the expenses for treatment in hospitals or by medical practitioners 
            or providers that are excluded and listed on the company website or notified to the policyholders. It is important 
            to note that only expenses up to the stabilization stage are payable in case of life-threatening situations or after an accident,
             but the complete claim will not be covered. Click here to check the list of excluded service provider
             Star Health Claims Services is a hassle-free and a customer-friendly process which ensures that all settlements are processed in a timely manner.
              As your health insurance specialist, we make cashless claim available across all our network hospitals in the country. Courtesy, attention, speed and efficiency 
              are the high standards we strive to upkeep. We value our customer’s 
            
           </p1>
            <p></p>
            <p></p>
          </div>
        </div>
        </div>

        
           {/* <h3>Comprehensive Insurance Policy</h3>  */}
          {/* <div className="plan-detailsp">
          <p>We do not cover the expenses for treatment in hospitals or by medical practitioners 
            or providers that are excluded and listed on the company website or notified to the policyholders. It is important to note that only expenses up to the stabilization stage are payable in case of life-threatening situations or after an accident,
             but the complete claim will not be covered. Click here to check the list of excluded service provider
             Star Health Claims Services is a hassle-free and a customer-friendly process which ensures that all settlements are processed in a timely manner. As your health insurance specialist, we make cashless claim available across all our network hospitals in the country. Courtesy, attention, speed and efficiency are the high standards we strive to upkeep. We value our customer’s 
             feedback and work hard to meet and exceed your expectations..</p>
            <p></p>
            <p></p>
          </div> */}
        
        <div className='plann-vp'>
        <div className="plan-vp">
           {/* <h3>Senior Citizen Red Carpet Health Insurance</h3>  */}
          
          {/* <p>In the event that you are admitted to a Non-network Hospital (which are not listed here), kindly settle the charges directly at the hospital. Afterwards, please submit the complete set of original documents to us. We offer you several options for submitting the claim documents: you can hand them over to our nearest office or advisor, utilize our Customer Portal or Customer
             App to upload the documents, or alternatively, send the full set via postal mail to our address.</p>
            <p> </p> */}
            <p>  </p>
          </div>
        
          {/* Add the rest of the paragraph here */}
        </div>
      </div>
   
  );
}

export default Claim;
