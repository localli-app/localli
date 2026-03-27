import express from 'express';

import serviceController from '../controllers/serviceController.js';

const router = express.Router();

router.post('/', serviceController.createService);
router.get('/:id', serviceController.getService);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

export default router;
