import Review from '../models/Review.js';
import FirestoreUtils from '../utils/firestoreUtils.js';

const reviewController = {
  async createReview(req, res) {
    try {
      const { reviewId, bookingId, customerId, businessId, rating, comment } = req.body;
      const review = new Review({ reviewId, bookingId, customerId, businessId, rating, comment });

      await FirestoreUtils.saveDocument('Reviews', review.reviewId, review.toJSON());
      res.status(201).json({ success: true, data: review });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async getReview(req, res) {
    try {
      const { id } = req.params;
      const review = await FirestoreUtils.getDocument('Reviews', id);

      if (!review) return res.status(404).json({ success: false, message: 'Review not found' });
      res.status(200).json({ success: true, data: review });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async updateReview(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.updateDocument('Reviews', id, req.body);
      res.status(200).json({ success: true, message: 'Review updated' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async deleteReview(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.deleteDocument('Reviews', id);
      res.status(200).json({ success: true, message: 'Review deleted' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
};

export default reviewController;
