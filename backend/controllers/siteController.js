import Site from '../models/siteModel.js';
import { sanitizeDomain } from '../utils/santizeDomain.js';
import { isValidDomain } from '../utils/domainValidator.js';
import { generateToken } from '../utils/tokenGenerator.js';
import { isTrustedPlatformDomain } from '../utils/trustedPlatform.js';

export const getVersion = (req, res) => {
    res.json({ version: '1.0.0' });
}

export const registerSite = async (req, res) => {
    try {
        const { name, domain:rawDomain } = req.body;

        if (!name || !rawDomain) {
            return res.status(400).json({
                success: false,
                message: "name and domain are required"
            });
        }
        const domain=sanitizeDomain(rawDomain);

        if(!isValidDomain(domain)){
            return res.status(400).json({
                success:false,
                message:'Invalid domain format',
            })
        }

        const existing = await Site.findOne({ domain });
        if (existing) {
            return res.status(409).json({
                success: false,
                message: "domain already registered",
                token: existing.token
            });
        }

        const token = generateToken();
        const isTrsusted=isTrustedPlatformDomain(domain);
        const site = await Site.create({
            name,
            domain,
            token,
            ownerId:req.user.id,
            ownerName:req.user.name,
            verificationStatus:'pending',
            domainType:isTrsusted?"platform":"custom"
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