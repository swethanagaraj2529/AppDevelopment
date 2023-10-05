import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './claimS.css';
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

function ClaimS() {
  // State to manage the pop-up
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle the "Get Claim Status" button click
  const handleGetClaimStatus = () => {
    // Check if the intimation number is "123456"
    const intimationNumber = document.getElementById('claimId').value;
    if (intimationNumber === '123456') {
      // Show the pop-up
      setShowPopup(true);
    } else {
      alert('Invalid Intimation Number'); // Show an alert for invalid intimation number
    }
  };

  // Function to close the pop-up
  const handleClosePopup = () => {
    // Close the pop-up
    setShowPopup(false);
  };

  return (
    <div className="homes">
      
      <div className="content">
        <h1>Check your claim status</h1>
        <form className="custom-form">
          <div className="form-group">
            <select id="claimOption" name="claimOption">
              <option value="intimationNumber">Intimation number</option>
              <option value="healthId">Health ID</option>
              <option value="policyNumber">Policy number</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="claimId">Intimation number</label>
            <input type="text" id="claimId" name="claimId" />
          </div>
          <button type="button" onClick={handleGetClaimStatus}>
            Get Claim Status
          </button>
        </form>
      </div>
      <div className="horizontal-optionss">
        <Link to="/claimpro" className="option" style={linkStyle2}>
          Claim Process
        </Link>
        <Link to="/claimin" className="option" style={linkStyle2}>
          Claim Intimation
        </Link>
        <Link to="/claimst" className="option" style={linkStyle2}>
          Claim Status
        </Link>
      </div>

      {/* Pop-up for downloading the PDF */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <p>Click the link below to download the PDF:</p>
            <a href="/path/to/your/pdf/file.pdf" download>
              Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClaimS;
