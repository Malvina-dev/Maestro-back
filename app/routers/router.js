import companyRoute from "./companyRoute.js";
import userRoute from "./userRoute.js";
import express from 'express';
import messageContactRoute from './messageContactRoute.js';
import previewRoute from './previewRoute.js';
import genreRoute from './genreRouter.js';
import portfolioRoute from './portfolioRoute.js';

const router = express.Router();


router.use("/api", userRoute);
router.use('/api', companyRoute);
router.use('/api', messageContactRoute);
router.use('/api', previewRoute);
router.use('/api', genreRoute );
router.use('/api', portfolioRoute );


export default router;
