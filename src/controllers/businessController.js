import Business from '../models/Business.js';
import FirestoreUtils from '../utils/firestoreUtils.js';

const businessController = {
  async createBusiness(req, res) {
    try {
      const { businessId, ownerId, name, description, category, location } = req.body;
      const business = new Business({ businessId, ownerId, name, description, category, location, verified: false });

      await FirestoreUtils.saveDocument('Businesses', business.businessId, business.toJSON());
      res.status(201).json({ success: true, data: business });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async getBusiness(req, res) {
    try {
      const { id } = req.params;
      const business = await FirestoreUtils.getDocument('Businesses', id);

      if (!business) return res.status(404).json({ success: false, message: 'Business not found' });
      res.status(200).json({ success: true, data: business });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async updateBusiness(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.updateDocument('Businesses', id, req.body);
      res.status(200).json({ success: true, message: 'Business updated' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async deleteBusiness(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.deleteDocument('Businesses', id);
      res.status(200).json({ success: true, message: 'Business deleted' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
};

export default businessController;
