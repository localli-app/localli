import express from 'express';

import userController from '../controllers/UserController';

const router = express.Router();

router.post('/', userController.createUser);   // Create user
router.get('/:id', userController.getUser);    // Get user by ID
router.put('/:id', userController.updateUser); // Update user
router.delete('/:id', userController.deleteUser); // Delete user

export default router;
