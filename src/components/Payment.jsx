// Payment.js

import React, { useState } from 'react';
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


// // src/PaymentForm.js
// import React from 'react';


// class Payment extends React.Component {
//   handleButtonClick = () => {
//     // Use navigate to navigate to the "/Payment" route
//     navigate('/Payment');
//   };
//   formatInputCardNo = (event) => {
//     const input = event.target;
//     const value = input.value.replace(/\s/g, '');

//     if (value.length <= 16) {
//       input.value = value.replace(/(\d{4})/g, '$1   ').trim();
//     } else {
//       input.value = value.substring(0, 16).replace(/(\d{4})/g, '$1 ').trim();
//     }
//   };

//   formatInputValidity = (event) => {
//     const input = event.target;
//     let value = input.value.replace(/\D/g, '');

//     if (value.length > 2) {
//       value = value.substr(0, 2) + '/' + value.substr(2);
//     }

//     if (value.length <= 5) {
//       input.value = value;
//     } else {
//       input.value = value.substring(0, 5);
//     }
//   };

//   formatInputCVV = (event) => {
//     // Implement your CVV formatting logic here
//     const input = event.target;
//     console.log(input);
//   };

//   validation = () => {
//     // Implement your validation logic here
//     // This function will be triggered when the "ADD" button is clicked
//     // You can access the form data using the state or refs, and perform validation
//   };

//   render() {
//     return (
    
//       <div className='container'>
//         <div className="heading">
//           Card
//           <hr />
//         </div>

//         <div className="card">
//           <div className="card-no card-item">
//             <label htmlFor="card-no">Card Number :</label>
//             <input
//               type="text"
//               id="card-no"
//               pattern="\d{16}"
//               maxLength="25"
//               minLength="25"
//               placeholder="0000    -    0000    -    0000    -    0000"
//               onInput={this.formatInputCardNo}
//               required
//             />
//           </div>

//           <div className="date d-flex card-item">
//             <div className="start-date d-flex">
//               <label htmlFor="start-date" className="d-flex" id="start-date-label">
//                 <div className="p10 d-flex f-direction-c"> <span>Valid</span><span>From </span> </div> :
//               </label>
//               <input
//                 type="text"
//                 placeholder="MM/YY"
//                 id="start-date"
//                 maxLength="5"
//                 onInput={this.formatInputValidity}
//                 required
//               />
//             </div>
//             <div className="exp-date d-flex">
//               <label htmlFor="exp-date" className="d-flex">
//                 <div className="p10 d-flex f-direction-c"> <span>Valid</span><span>Till </span> </div> :
//               </label>
//               <input
//                 type="text"
//                 placeholder="MM/YY"
//                 id="exp-date"
//                 maxLength="5"
//                 onInput={this.formatInputValidity}
//                 required
//               />
//             </div>
//           </div>

//           <div className="vss-no card-item">
//             <label htmlFor="cvv-no">VSS / CVV Number :</label>
//             <input
//               type="password"
//               id="cvv-no"
//               pattern="\d"
//               maxLength="3"
//               placeholder="000"
//               onInput={this.formatInputCVV}
//               required
//             />
//           </div>

//           <div className="card-name card-item">
//             <label htmlFor="name">Your Name :</label>
//             <input type="text" name="name" id="name" placeholder="VIKRAM DILIP DHOLE" required />
//           </div>

//           <div className="submit-btn d-flex jc-center">
//             <button type="submit" role="button" onClick={this.validation} id="sbm-btn">
//               ADD
//             </button>
//           </div>
//         </div>
   
//       </div>
//     );
//   }
// }


// export default Payment;
