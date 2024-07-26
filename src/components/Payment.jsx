// Payment.js

import  { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation checks
    if (
      (paymentMethod === 'credit_card' || paymentMethod === 'debit_card') &&
      (!/^[0-9]+$/.test(cardNumber) || cardNumber.length !== 16)
    ) {
      setError('Invalid credit card number. It should be a 16-digit number.');
      return;
    }

    if (
      (paymentMethod === 'credit_card' || paymentMethod === 'debit_card') &&
      (!/^[0-9]+$/.test(cvc) || cvc.length !== 3)
    ) {
      setError('Invalid CVC. It should be a 3-digit number.');
      return;
    }

    // Additional validation checks can be added for other fields

    // If no errors, proceed with the form submission logic
    console.log('Form submitted:', {
      paymentMethod,
      firstName,
      lastName,
      cardNumber,
      cvc,
      cardExpiration,
      paypalEmail,
    });

    // Reset error state
    setError('');
  };

  const renderPaymentFields = () => {
    if (paymentMethod === 'paypal') {
      return (
        <div className="paypal-form">
          <div className="input-group">
            <label htmlFor="paypalEmail">PayPal Email:</label>
            <input
              type="email"
              id="paypalEmail"
              name="paypalEmail"
              value={paypalEmail}
              onChange={(e) => setPaypalEmail(e.target.value)}
              required
            />
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="name-inputs">
            <div className="input-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="cardNumber">Credit Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="cvc-expiration">
            <div className="input-group">
              <label htmlFor="cvc">CVC:</label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="cardExpiration">Card Expiration:</label>
              <input
                type="text"
                id="cardExpiration"
                name="cardExpiration"
                placeholder="MM/YYYY"
                value={cardExpiration}
                onChange={(e) => setCardExpiration(e.target.value)}
                required
              />
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h2 className="payment-method-heading">Payment Method</h2>

      <label htmlFor="paymentMethod">Select Payment Method:</label>
      <select
        id="paymentMethod"
        name="paymentMethod"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="paypal">PayPal</option>
        <option value="credit_card">Credit Card</option>
        <option value="debit_card">Debit Card</option>
      </select>

      {renderPaymentFields()}

      {error && <div className="error-message">{error}</div>}

      <button type="submit">Submit Order</button>
    </form>
  );
};

export default Payment;

