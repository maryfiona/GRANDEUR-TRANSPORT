import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Formspree endpoint
    const formEndpoint = 'https://formspree.io/f/xqkorgvp';

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful form submission, e.g., show a success message
        console.log('Form submitted successfully!');

        // Clear the form data after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        // Handle errors during form submission
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  useEffect(() => {
    // You can include any additional initialization code here
  }, []);

  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-center mb-4">Contact Us</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          {/* Google Maps iframe */}
          <iframe
            title="Google Maps"
            width="100%"
            height="400"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.1858786102667!2d3.4296206838297777!3d6.452215948598423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e5ee1fb5147%3A0x99f512e97c7a8b1a!2sYour%20Location%20Here!5e0!3m2!1sen!2sus!4v1641102325367!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-md-6">
          {/* Form for user contact */}
          <form className="my-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Telephone
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Your Telephone"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
