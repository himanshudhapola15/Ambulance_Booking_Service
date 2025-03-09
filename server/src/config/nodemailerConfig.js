const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_NOREPLY,
        pass: process.env.GMAIL_NOREPLY_APP_PASSWORD
    }
});

module.exports = transporter;

