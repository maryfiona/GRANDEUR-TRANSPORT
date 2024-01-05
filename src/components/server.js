const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

// Parse JSON and URL-encoded body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-gmail-account@gmail.com',  // Replace with your Gmail account
    pass: 'your-gmail-password',           // Replace with your Gmail password
  },
});

// Handle form submission
app.post('/api/submit-form', (req, res) => {
  const { fullName, email, phone, pickupLocation, deliveryLocation, preferredDate, goodsDescription } = req.body;

  // Construct the email message
  const message = `
    Full Name: ${fullName}
    Email: ${email}
    Phone: ${phone}
    Pickup Location: ${pickupLocation}
    Delivery Location: ${deliveryLocation}
    Preferred Date: ${preferredDate}
    Goods Description: ${goodsDescription}
  `;

  // Send the email
  const mailOptions = {
    from: 'your-gmail-account@gmail.com',   // Replace with your Gmail account
    to: 'aguchidimmamaryfiona@gmail.com',  // Replace with the target email
    subject: 'New Truck Booking',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});





