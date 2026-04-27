import Site from '../models/siteModel.js'
import PageVisit from '../models/pageVisitModel.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sanitizeDomain } from '../utils/santizeDomain.js';

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const SCRIPT_DIR=path.join(__dirname,'../public');

export const trackPageVisits= async (req, res) => {
    try {
        const { token, sessionId, pageUrl, referrer ,domain:rawDomain} = req.body;
        if (!token || !pageUrl || !sessionId || !rawDomain) {
            return res.status(400).json({
                success: false,
                message: "token, sessionId, rawDomain and pageUrl are required"
            })
        }
        const domain=sanitizeDomain(rawDomain);
        const site = await Site.findOne({ token });

        if (site.domain!==domain) {
            return res.status(401).json({
                success: false,
                message: "Your domain is not authorized for this request"
            })
        }

        if(site.verificationStatus!=='verified'){
            return res.status(403).json({
                success:false,
                message:"Site not verified",
            })
        }
        await PageVisit.create({
            siteId: site._id,
            sessionId,
            pageUrl,
            referrer: referrer || null
        })

        return res.status(200).json({
            success: true,
            message: "Page visit tracked successfully",
            data: {
                pageUrl,
                sessionId
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
export const getVersion = (req, res) => {
    res.json({ version: '1.0.0' });
}
export const serveLoader = (req, res) => {
    try {
        const filePath = path.join(SCRIPT_DIR, 'analytics.js');

        if (!fs.existsSync(filePath)) {
            return res.status(404).send('// Script not found');
        }

        res.setHeader('Content-Type', 'application/javascript');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        res.sendFile(filePath);
    } catch (error) {
        res.status(500).send('// Internal server error');
    }
};
export const serveTrackerScript = async (req, res) => {
    try {
        const { version } = req.params;

        const filePath = path.join(SCRIPT_DIR, `analytics.v${version}.js`);

        if (!fs.existsSync(filePath)) {
            return res.status(404).send('// Version not found');
        }

        res.setHeader('Content-Type', 'application/javascript');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        res.sendFile(filePath);

    } catch (error) {
        res.status(500).send('Internal server error');
    }
};