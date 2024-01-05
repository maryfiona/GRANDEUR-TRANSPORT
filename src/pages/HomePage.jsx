import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Service from '../components/Service'
import Vehicle from '../components/Vehicle'
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer'
// import PaymentForm from './PaymentForm';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';




function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  // const stripePromise = loadStripe('your-publishable-key');


  return (
    <div>
    
    <Router>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/vehicle" element={<Vehicle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/BookingForm" element={<BookingForm />} />
            </Routes>
            
            <Footer />
          </>
        )}
      </div>
    </Router>
   
   
   </div>
  )
}

export default HomePage;