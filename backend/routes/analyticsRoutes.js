import express from 'express';
import { getAnalytics, getVersion, serveLoader, serveTrackerScript, trackPageVisits } from '../controllers/analyticsController.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';
const router=express.Router();

router.get('/version',getVersion);
router.get('/analytics.js',serveLoader);
router.get('/analytics.v:version.js',serveTrackerScript);
router.get('/:siteId',isAuthenticated,getAnalytics)
router.post('/track',trackPageVisits);

export default router;