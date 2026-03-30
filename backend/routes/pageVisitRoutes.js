import express from 'express';
import {trackPageVisits,} from '../controllers/analyticsController.js';
const router=express.Router();

router.post('/page-visit',trackPageVisits);

export default router;