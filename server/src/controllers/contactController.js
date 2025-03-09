const ContactFormSubmission = require('../models/contactFormSubmission');
const { sendContactFormSubmission } = require('../services/emailService'); 

exports.submitContactForm = async (req, res) => {
    const { userName, userPhone, userEmail, userMessage } = req.body;
	
	const createdAt = new Date().toISOString();
    
    if (!userName || !userPhone || !userEmail || !userMessage) {
        return res.status(400).json({ message: 'Please provide userName, userPhone, userEmail, userMessage' });
    }

    try {
		
		await ContactFormSubmission.create(userName, userPhone, userEmail, userMessage, createdAt);
        await sendContactFormSubmission(userName, userPhone, userEmail, userMessage, createdAt);

        res.status(200).json({ message: 'Contact Form saved and email sent successfully.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error submitting form.' });
    }
};

