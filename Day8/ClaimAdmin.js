import React from 'react';
import './claimadmin.css';
import { Link } from 'react-router-dom';
import logoImage from './login_logo.png';


function ClaimAdmin() {
  const handleDelete = (insuranceId) => {
    // Implement your delete logic here, e.g., send a request to delete the record with the specified insuranceId
    console.log(`Delete clicked for insurance ID: ${insuranceId}`);
  };
  const handleImageClick = () => {
    // Implement the logic for the image button click event
    console.log('Image button clicked');
  };
  const handleBack = () => {
    // Implement the logic to navigate back to the previous page
    console.log('Back button clicked');
  };
  const tableData = [
    {
      name: 'sathish',
      dob: '15-07-1998',
      insuranceId: '8754285xcac',
      amount: '60000',
    },
    {
      name: 'nithya',
      dob: '25-09-2004',
      insuranceId: '966358',
      amount: '12000',
    },
    {
      name: 'swetha',
      dob: '36-07-2003',
      insuranceId: '785412',
      amount: '10000',
    },
    {
      name: 'ram',
      dob: '31-08-2002',
      insuranceId: '741258',
      amount: '13500',
    },
    {
      name: 'hema',
      dob: '31-08-2006',
      insuranceId: '852147',
      amount: '15500',
    },
    {
      name: 'shiva',
      dob: '31-08-2004',
      insuranceId: '965874',
      amount: '19500',
    },
    {
      name: 'harshitha',
      dob: '31-05-2004',
      insuranceId: '852369',
      amount: '20500',
    },
    {
      name: 'snetha',
      dob: '18-07-2004',
      insuranceId: 'erf878455',
      amount: '20000',
    },
    {
      name: 'karthick',
      dob: '12-05-2009',
      insuranceId: '854796w',
      amount: '21547',
    },
    {
      name: 'vennila',
      dob: '12-09-2007',
      insuranceId: '965874wef',
      amount: '30000',
    },
  ];

  return (
    <>
       <div className='boy'>
      
      <div className="logo-container-users">
         {/* <Link to ='/dashboard'> <button className="image-buttons" onClick={handleImageClick}>
            <img src={logoImage} alt="Logo" className="logo-users" />
          </button>
          </Link> */}
        </div>

        {/* Add your table here */}
        <div className='table-container-claimadmin'>
         
          <table className='custom-table-claimadmin'>
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Insurance ID</th>
                <th>Amount</th>
                <th>Action</th> {/* Add a new column for the delete button */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((rowData, index) => (
                <tr key={index}>
                  <td>{rowData.name}</td>
                  <td>{rowData.dob}</td>
                  <td>{rowData.insuranceId}</td>
                  <td>{rowData.amount}</td>
                  <td>
                    <button className='delete-button-claimadmin' onClick={() => handleDelete(rowData.insuranceId)}>
                      Delete
                    </button>
                    <button className='delete-button-claimadmin' onClick={() => handleDelete(rowData.insuranceId)}>
                      Edit
                    </button>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
      </div>
    </>
  );
}

export default ClaimAdmin;