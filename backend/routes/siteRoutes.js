import express from 'express';
import { getVersion, registerSite } from '../controllers/siteController.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const router=express.Router();

router.get('/version',getVersion);
router.post('/register',isAuthenticated,registerSite);

export default router;