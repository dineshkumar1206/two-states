const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT || 465,
  secure: process.env.EMAIL_SECURE === 'true' || true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.submitContactForm = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // 1. Save to Database
    const newContact = await Contact.create({
      name,
      phone,
      email,
      message,
    });

    // 2. Send Email Notification
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // sending to yourself (support@2states.co.in)
        cc: 'sanka.kasi@gmail.com', // CC as requested
        subject: `New Contact Form Submission from ${name}`,
        text: `You have received a new contact submission:
        
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}
        `,
      };
      
      // If credentials are set, send the email
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
      } else {
        console.log("Email credentials not set. Skipping email notification.");
      }
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // We don't return an error here because the DB save was successful
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully.',
      data: newContact
    });

  } catch (error) {
    console.error('Error in submitContactForm:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting the form.',
      error: error.message
    });
  }
};
