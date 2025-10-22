import express from 'express';
import portfolioController from '../controllers/portfolioController.js';

const portfolioRoute = express.Router();


// POST /api/admin/description
portfolioRoute.post('/admin/description', portfolioController.create)

// PATCH /api/admin/description/:id
portfolioRoute.patch('/admin/description/:id', portfolioController.update)

// DELETE /api/admin/description/:id
portfolioRoute.delete('/admin/description/:id', portfolioController.delete)

export default portfolioRoute;