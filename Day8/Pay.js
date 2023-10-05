import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './pay.css';
import { useSelector } from 'react-redux';
import { selectUser } from './Component/Redux/UserSlice';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};
function showLoading(event, button) {
  event.preventDefault(); // Prevent form submission

  button.innerHTML = "Processing Payment...";

  setTimeout(function() {
    button.innerHTML = "Payment completed.";
  }, 3000); // Change to the desired duration in milliseconds
}
function Payment() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
// JavaScript code

// Function to show loading when the form is submitted
function showLoading(event, button) {
  event.preventDefault(); // Prevent the form from submitting
  button.innerHTML = 'Loading...'; // Change the button text
  setTimeout(function () {
    // Simulate a loading delay (you can replace this with your actual payment processing logic)
    alert('Payment successful!'); // Show an alert (you can replace this with your desired action)
    button.innerHTML = 'PAY NOW - $(TOTAL)'; // Restore the button text
  }, 2000); // Change 2000 to the desired delay in milliseconds
}

// Attach the showLoading function to the form submission
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
    showLoading(event, document.querySelector('.click-button'));
  });
});

  // State for form fields
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
    billingAddress: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    console.log(formData);
    // You can make an API call or perform other actions for payment processing
  };

  return (
    <div className="home-pay">
      <div className="payment-form">
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder Name</label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="billingAddress">Billing Address</label>
            <textarea
              id="billingAddress"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
