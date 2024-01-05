import React, { useState } from 'react';


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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBookingData((prevBookingData) => ({ ...prevBookingData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Implement your booking submission logic here
    // You can send the data to your server or a third-party service for processing
  
    console.log('Booking data submitted:', bookingData);
  
    // Clear the form data after submission
    setBookingData({
      fullName: '',
      email: '',
      phone: '',
      pickupLocation: '',
      deliveryLocation: '',
      preferredDate: '',
      goodsDescription: '',
    });
  
    // Redirect to the payment page
    window.location.href = 'http://localhost:3001/payment'; // Replace with your actual payment page URL
  };

  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-center mb-4">Book a Truck</h1>
      </div>
    
      <form className="booking-form" action="http://localhost:3001/api/submit-form" method="post" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default BookingForm;
