import express from 'express';
import { deleteSite, getAllSites, getScript, registerSite, verifySite } from '../controllers/siteController.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const router=express.Router();


router.post('/register',isAuthenticated,registerSite);
router.post('/verify/:siteId',isAuthenticated,verifySite);
router.get('/script/:siteId',isAuthenticated,getScript);
router.get('/all-sites',isAuthenticated,getAllSites);
router.delete('/:siteId',isAuthenticated,deleteSite);

export default router;