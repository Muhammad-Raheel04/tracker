import Site from '../models/siteModel.js';
import crypto from 'crypto';

export const getVersion = (req, res) => {
    res.json({ version: '1.0.0' });
}

export const registerSite = async (req, res) => {
    try {
        const { name, domain } = req.body;

        if (!name || !domain) {
            return res.status(400).json({
                success: false,
                message: "name and domain are required"
            });
        }
        const existing = await Site.findOne({ domain });
        if (existing) {
            return res.status(409).json({
                success: false,
                message: "domain already registered",
                token: existing.token
            });
        }

        const token = crypto.randomUUID();

        const site = await Site.create({
            name,
            domain,
            token,
        });

        return res.status(201).json({
            success: true,
            message: "Site registered",
            token,
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};