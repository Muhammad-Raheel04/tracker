import Site from '../models/siteModel.js'
import PageVisit from '../models/pageVisitModel.js';

export const trackPageVisits= async (req, res) => {
    try {
        const { token, sessionId, pageUrl, referrer } = req.body;
        if (!token || !pageUrl || !sessionId) {
            return res.status(400).json({
                success: false,
                message: "token, sessionId and pageUrl are required"
            })
        }

        const site = await Site.findOne({ token });

        if (!site) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
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