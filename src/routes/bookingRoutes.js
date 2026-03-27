import express from 'express';

import bookingController from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', bookingController.createBooking);
router.get('/:id', bookingController.getBooking);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

export default router;
