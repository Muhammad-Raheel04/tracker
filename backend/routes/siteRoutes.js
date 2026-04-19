import express from 'express';
import { getScript, registerSite, verifySite } from '../controllers/siteController.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const router=express.Router();


router.post('/register',isAuthenticated,registerSite);
router.post('/verify/:siteId',isAuthenticated,verifySite);
router.get('/script/:siteId',isAuthenticated,getScript);
export default router;