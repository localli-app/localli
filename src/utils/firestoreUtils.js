import admin from 'firebase-admin';

// Initialize Firebase if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require('../config/FSServiceAccountKey.json')),
  });
}

const db = admin.firestore();

class FirestoreUtils {
  /**
   * Save a document to a collection
   * @param {string} collectionName - Firestore collection name
   * @param {string} docId - Document ID
   * @param {object} data - Data to save
   */
  static async saveDocument(collectionName, docId, data) {
    try {
      await db.collection(collectionName).doc(docId).set(data);
      console.log(`${collectionName} [${docId}] saved successfully.`);
    } catch (err) {
      console.error(`Error saving ${collectionName} [${docId}]:`, err);
      throw err;
    }
  }

  /**
   * Get a document by ID
   * @param {string} collectionName
   * @param {string} docId
   * @returns {object|null}
   */
  static async getDocument(collectionName, docId) {
    try {
      const doc = await db.collection(collectionName).doc(docId).get();
      return doc.exists ? doc.data() : null;
    } catch (err) {
      console.error(`Error fetching ${collectionName} [${docId}]:`, err);
      throw err;
    }
  }

  /**
   * Update a document by ID
   * @param {string} collectionName
   * @param {string} docId
   * @param {object} data - Fields to update
   */
  static async updateDocument(collectionName, docId, data) {
    try {
      await db.collection(collectionName).doc(docId).update(data);
      console.log(`${collectionName} [${docId}] updated successfully.`);
    } catch (err) {
      console.error(`Error updating ${collectionName} [${docId}]:`, err);
      throw err;
    }
  }

  /**
   * Delete a document by ID
   * @param {string} collectionName
   * @param {string} docId
   */
  static async deleteDocument(collectionName, docId) {
    try {
      await db.collection(collectionName).doc(docId).delete();
      console.log(`${collectionName} [${docId}] deleted successfully.`);
    } catch (err) {
      console.error(`Error deleting ${collectionName} [${docId}]:`, err);
      throw err;
    }
  }

  /**
   * Get all documents in a collection
   * @param {string} collectionName
   * @returns {Array<object>}
   */
  static async getAllDocuments(collectionName) {
    try {
      const snapshot = await db.collection(collectionName).get();
      return snapshot.docs.map(doc => doc.data());
    } catch (err) {
      console.error(`Error fetching all documents from ${collectionName}:`, err);
      throw err;
    }
  }
}

module.exports = FirestoreUtils;
