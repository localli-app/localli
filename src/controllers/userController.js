import User from '../models/User.js';
import FirestoreUtils from '../utils/firestoreUtils.js';

const userController = {
  async createUser(req, res) {
    try {
      const { userId, name, email, role } = req.body;
      const user = new User({ userId, name, email, role });

      await FirestoreUtils.saveDocument('Users', user.userId, user.toJSON());
      res.status(201).json({ success: true, data: user });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await FirestoreUtils.getDocument('Users', id);

      if (!user) return res.status(404).json({ success: false, message: 'User not found' });
      res.status(200).json({ success: true, data: user });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.updateDocument('Users', id, req.body);
      res.status(200).json({ success: true, message: 'User updated' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await FirestoreUtils.deleteDocument('Users', id);
      res.status(200).json({ success: true, message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
};

export default userController;
