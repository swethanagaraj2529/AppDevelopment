import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './claimprocess.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Component/Redux/UserSlice';





const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

const linkStyle2 = {
  textDecoration: 'none',
  color: 'black',
};

const trackerSteps = [
  "Submit Your Claim",
  "Submit Your Documents",
  "Insurer Approval",
  "Hospitalization",
  "Final Approval",
  "Settlement",
  "Rejected"
];

const documentChecklist = [
  "Claim form",
  "Doctor's prescription for treatment",
  "Hospital discharge certificate",
  "Final hospital bill in original",
  "Medical investigation reports",
  "Medicine bills with prescriptions",
  "Final payment receipt for reimbursement",
  "Cancelled Cheque of insured bank for reimbursement",
  "Medico Legal Certificate/FIR for road accidents",
  "KYC Documents",
];

function Claimpro() {
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

      {/* <div className="tracker">
        <h2>Claim Tracker</h2>
        <ol>
          {trackerSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div> */}

      <div className="document-checklist">
        <h2>Document Checklist</h2>
        <ul>
          {documentChecklist.map((document, index) => (
            <li key={index}>{document}</li>
          ))}
        </ul>
      </div>
      {/* <div class="container">
  <ol class="progress-meter">
    <li class="progress-point done">Claim Process</li><li class="progress-point done">Claim Intimation</li><li class="progress-point done">Claim Status</li><li class="progress-point todo">Claim Upload</li>
  </ol>
</div> */}
    </div>
  );
}

export default Claimpro;
