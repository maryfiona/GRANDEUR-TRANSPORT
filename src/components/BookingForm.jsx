import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css'
import Payment from '../components/Payment'

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupLocation: '',
    deliveryLocation: '',
    preferredDate: '',
    goodsDescription: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBookingData((prevBookingData) => ({ ...prevBookingData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup(true);
   };

   

  return (
    <div className="container mt-5 ">
      <div>
        <h1 className="text-center mb-4">Book a Truck</h1>
      </div>
    
      <form   onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Your Full Name"
            value={bookingData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email Address"
            value={bookingData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Your Phone Number"
            value={bookingData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pickupLocation" className="form-label">
            Pickup Location
          </label>
          <input
            type="text"
            className="form-control"
            id="pickupLocation"
            placeholder="Pickup Location"
            value={bookingData.pickupLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deliveryLocation" className="form-label">
            Delivery Location
          </label>
          <input
            type="text"
            className="form-control"
            id="deliveryLocation"
            placeholder="Delivery Location"
            value={bookingData.deliveryLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="preferredDate" className="form-label">
            Preferred Date
          </label>
          <input
            type="date"
            className="form-control"
            id="preferredDate"
            value={bookingData.preferredDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="goodsDescription" className="form-label">
            Goods Description
          </label>
          <textarea
            className="form-control"
            id="goodsDescription"
            placeholder="Description of Goods"
            value={bookingData.goodsDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
  
  <button className="btn btn-primary" type="submit">
    Book Now
  </button>

      </form>
      {showPopup && (
         <div className="popupOverlay">
         <div className="popup-content">
           <h2>Booking Information</h2>
           <p>
             <strong>Full Name:</strong> {bookingData.fullName}
           </p>
           <p>
             <strong>Email:</strong> {bookingData.email}
           </p>
           <p>
             <strong>Phone:</strong> {bookingData.phone}
           </p>
           <p>
             <strong>Pickup Location:</strong> {bookingData.pickupLocation}
           </p>
           <p>
             <strong>Delivery Location:</strong> {bookingData.deliveryLocation}
           </p>
           <p>
             <strong>Preferred Date:</strong> {bookingData.preferredDate}
           </p>
           <p>
             <strong>Goods Description:</strong> {bookingData.goodsDescription}
           </p>
         
         
           <button className="CloseButton" onClick={() => navigate('/Payment')}>
            Pay Now
          </button>

         </div>
       </div>

     )}



         
    </div>
  );
};

export default BookingForm;
