import Booking from '../models/Booking.js';
import FirestoreUtils from '../utils/firestoreUtils.js';

const bookingController = {
  async createBooking(req, res) {
    try {
      const { bookingId, customerId, businessId, serviceId, status, bookingDate, confirmationCode } = req.body;
      const booking = new Booking({ bookingId, customerId, businessId, serviceId, status, bookingDate, confirmationCode });

      await FirestoreUtils.saveDocument('Bookings', booking.bookingId, booking.toJSON());
      res.status(201).json({ success: true, data: booking });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async getBooking(req, res) {
    try {
      const { id } = req.params;
      const booking = await FirestoreUtils.getDocument('Bookings', id);

      if (!booking) return res.status(404).json({ success: false, message: 'Booking not found' });
      res.status(200).json({ success: true, data: booking });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async updateBooking(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.updateDocument('Bookings', id, req.body);
      res.status(200).json({ success: true, message: 'Booking updated' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async deleteBooking(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.deleteDocument('Bookings', id);
      res.status(200).json({ success: true, message: 'Booking deleted' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
};

export default bookingController;
