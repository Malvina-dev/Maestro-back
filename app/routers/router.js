import express from 'express';
import companyRoute from './companyRoute.js';
import previewRoute from './previewRoute.js';

const router = express.Router();


router.use('/api', companyRoute);
router.use('/api', previewRoute);

export default router;