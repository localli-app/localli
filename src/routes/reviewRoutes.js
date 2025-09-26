import express from 'express';

import reviewController from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', reviewController.createReview);
router.get('/:id', reviewController.getReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

export default router;
