import express from 'express';
import {trackPageVisits,} from '../controllers/analyticsController.js';
import { getVersion } from '../controllers/siteController.js';
const router=express.Router();

router.post('/page-visit',trackPageVisits);
router.get('/version',getVersion);
export default router;