
const { db } = require('../config/firebaseConfig');
class AmbulanceBookingRequest {
 static async create(userName, userPhone, createdAt) {
    try {

      const bookingRef = db.collection('ambulance_booking'); 
      await bookingRef.add({
        "user_name": userName,
        "user_phone": userPhone,
        "created_at": createdAt
      });

      console.log('Booking created successfully:', bookingRef.id);
      return { success: true, message: 'Booking created successfully', bookingId: bookingRef.id };
    } catch (error) {
      console.error('Error creating booking:', error);
      return { success: false, message: 'Error creating booking', error: error.message };
    }
  }
}

module.exports = AmbulanceBookingRequest;

