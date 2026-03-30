import express from 'express';
import { getVersion, registerSite } from '../controllers/siteController.js';

const router=express.Router();

router.get('/version',getVersion);
router.post('/register',registerSite);

export default router;