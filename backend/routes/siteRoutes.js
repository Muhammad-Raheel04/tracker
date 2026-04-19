import express from 'express';
import { getVersion, registerSite, verifySite } from '../controllers/siteController.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const router=express.Router();

router.get('/version',getVersion);
router.post('/register',isAuthenticated,registerSite);
router.post('/verify/:siteId',isAuthenticated,verifySite);
export default router;