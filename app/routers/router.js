import express from 'express';
import companyRoute from './companyRoute.js';
import messageContactRoute from './messageContactRoute.js';

const router = express.Router();


router.use('/api', companyRoute);
router.use('/api', messageContactRoute);

export default router;