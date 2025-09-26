import Service from '../models/Service.js';
import FirestoreUtils from '../utils/firestoreUtils.js';

const serviceController = {
  async createService(req, res) {
    try {
      const { serviceId, businessId, title, description, price, duration } = req.body;
      const service = new Service({ serviceId, businessId, title, description, price, duration });

      await FirestoreUtils.saveDocument('Services', service.serviceId, service.toJSON());
      res.status(201).json({ success: true, data: service });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async getService(req, res) {
    try {
      const { id } = req.params;
      const service = await FirestoreUtils.getDocument('Services', id);

      if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
      res.status(200).json({ success: true, data: service });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async updateService(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.updateDocument('Services', id, req.body);
      res.status(200).json({ success: true, message: 'Service updated' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async deleteService(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.deleteDocument('Services', id);
      res.status(200).json({ success: true, message: 'Service deleted' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
};

export default serviceController;
