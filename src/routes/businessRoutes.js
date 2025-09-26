import express from 'express';

import businessController from '../controllers/BusinessController.js';

const router = express.Router();

router.post('/', businessController.createBusiness);
router.get('/:id', businessController.getBusiness);
router.put('/:id', businessController.updateBusiness);
router.delete('/:id', businessController.deleteBusiness);

export default router;
