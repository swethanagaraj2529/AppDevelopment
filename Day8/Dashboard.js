import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './dashboard.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Component/Redux/UserSlice';
import ReactApexChart from 'react-apexcharts'; 

function Dashboard() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  // Define the colors you want to use for "Renewal" and "Claims" series
  const renewalColor = '#008FFB'; // Change this color as desired
  const claimsColor = '#FF4560';  // Change this color as desired

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
  };
  const policyCount = 42;
  const  ClaimsCount=12;
  const  paymentCount=12;
  const chartData = [
    {
      name: 'Renewal',
      data: [56, 45, 67, 32, 55, 48, 61, 52, 70],
      color: renewalColor, // Set the color for "Renewal" series
    },
    {
      name: 'Claims',
      data: [60, 50, 72, 35, 58, 52, 65, 58, 75],
      color: claimsColor, // Set the color for "Claims" series
    },
  ];

  return (
    <div className="d-home">
      <div className="d-sidebar">
        <div className="d-logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <nav className="d-sidebar-menu">
          <ul>
            <li>
              <Link to="/dashboard" style={linkStyle}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/claimadmin" style={linkStyle}>
                Claims
              </Link>
            </li>
            <li>
              {/* <Link to="/report" style={linkStyle}>
                Report
              </Link> */}
            </li>
            <li>
              {/* <Link to="/feedback" style={linkStyle}>
                feedback
              </Link> */}
            </li>
          </ul>
        </nav>
        <nav className="d-menu-bar">
          <ul className="d-menu">
            {/* ... Other menu items ... */}
          </ul>
        </nav>
      </div>
      <div className='d-chart-container'>
        <ReactApexChart options={chartOptions} series={chartData} type='bar' />
      </div>
      <div className='main'>
        <h1>
          <span style={{ color: 'white', fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>
            {email}
          </span>
        </h1>
      </div>
      <div className="d-report-box">
          
          <div className="attributed-clients">
            <p>Total Policies:</p>
            <span className="client-count">{policyCount}</span>
          </div>
        </div>
        <div className="d-an-report-box">
          
        <p>Client Count </p>
            <span className="client-count">{ClaimsCount}</span>
            
            </div>
         
          <div className="d-in-report-box">  
          <div className="attributed-clients">
            <p>Total Payment</p>
            <span className="client-count">{paymentCount}</span>
          </div>
          </div>
    </div>
  );
}

export default Dashboard;
