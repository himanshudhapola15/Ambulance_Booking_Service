const transporter = require('../config/nodemailerConfig');
const { toIST } = require('../utils/helper.js')

const sendAmbulanceBookingRequest = async (userName, userPhone, createdAt) => {
	console.log("sendAmbulanceBookingRequest");
	console.log(userName);
	
    const mailOptions = {
        from: process.env.GMAIL_NOREPLY,
        to: process.env.GMAIL_ADMIN,
        subject: 'Urgent: New Ambulance Booking Request',
        html: `
        	<div style="color:black"> <p><b>Booking Details:</b></p>
            <ul>
                <li><b>Name:</b> ${userName}</li>
                <li><b>Phone Number:</b> ${userPhone}</li>
                <li><b>Booking Time:</b> ${toIST(createdAt)}</li>
            </ul>
            <p>Please ensure the ambulance is dispatched promptly. Thank you!</p>
            <p>Best regards,<br/>Sandhu Travels Ambulance Service</p>
            </div>
		`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const sendContactFormSubmission = async (userName, userPhone, userEmail, userMessage, createdAt) => {
    const mailOptions = {
        from: process.env.GMAIL_NOREPLY,
        to: process.env.GMAIL_ADMIN,
        subject: 'New Contact Form Submission',
        html: `
        	<div style="color:black"> <p><b>Contact Form Submission Details:</b></p>
            <ul>
                <li><b>Name:</b> ${userName}</li>
                <li><b>Phone Number:</b> ${userPhone}</li>
                <li><b>Email:</b> ${userEmail}</li>
                <li><b>Message:</b> ${userMessage}</li>
                <li><b>Submission Time:</b> ${toIST(createdAt)}</li>
            </ul>
            <p>Best regards,<br/>Sandhu Travels Ambulance Service</p>
            </div>
		`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};



module.exports = { sendAmbulanceBookingRequest, sendContactFormSubmission };

