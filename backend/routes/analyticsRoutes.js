import express from 'express';
import { getVersion, serveLoader, serveTrackerScript, trackPageVisits } from '../controllers/analyticsController.js';
const router=express.Router();

router.get('/version',getVersion);
router.get('/analytics.js',serveLoader);
router.get('/analytics.v:version.js',serveTrackerScript);
router.post('/track',trackPageVisits);

export default router;