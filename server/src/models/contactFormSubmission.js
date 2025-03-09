const { db } = require('../config/firebaseConfig'); 


class ContactFormSubmission {
 static async create(userName, userPhone, userEmail, userMessage, createdAt) {
    try {

      const bookingRef = db.collection('contact_form_submission'); 
      await bookingRef.add({
        "user_name": userName,
        "user_phone": userPhone,
		    "user_email": userEmail,
		    "user_message": userMessage,
        "created_at": createdAt
      });

      console.log('Contact Form submitted successfully:', bookingRef.id);
      return { success: true, message: 'Contact Form submitted successfully', bookingId: bookingRef.id };
    } catch (error) {
      console.error('Error submitting Contact Form:', error);
      return { success: false, message: 'Error creating Contact Form submission', error: error.message };
    }
  }
}

module.exports = ContactFormSubmission;
