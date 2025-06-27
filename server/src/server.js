const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const cors = require('cors')

const authenticateToken = require('./utils/authenticateToken');

const app = express();

dotenv.config();
app.use(cors({ origin: "*" , credentials: true }));
const ambulanceBookingRoutes = require('./routes/ambulanceBookingRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use(express.json()); 

const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many booking requests, please try again later.',
  keyGenerator: (req) => req.ip
});

const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10,
  message: 'Too many contact form submissions, please try again later.',
  keyGenerator: (req) => req.ip
});


app.use('/api/ambulance',bookingLimiter, authenticateToken, ambulanceBookingRoutes);   
app.use('/api/contact',contactFormLimiter, authenticateToken, contactRoutes);          

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});


app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});

