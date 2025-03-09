const AmbulanceBookingRequest = require('../models/ambulanceBookingRequest');
const { sendAmbulanceBookingRequest } = require('../services/emailService'); 

exports.requestAmbulanceBooking = async (req, res) => {
    const { userName, userPhone } = req.body;
	const createdAt = new Date().toISOString();
    if (!userName || !userPhone) {
        return res.status(400).json({ message: 'Please provide username, userPhone' });
    }

    try {
		
		await AmbulanceBookingRequest.create(userName, userPhone, createdAt);
        await sendAmbulanceBookingRequest(userName, userPhone, createdAt);

        res.status(200).json({ message: 'Booking saved and email sent successfully.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error processing booking.' });
    }
};
