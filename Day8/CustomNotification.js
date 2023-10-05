import React from 'react';
import './CustomNotification.css';

const CustomNotification = ({ message }) => {
  return (
    <div className="custom-notification">
      <div className="notification-content">
        {message}
      </div>
    </div>
  );
};

export default CustomNotification;
