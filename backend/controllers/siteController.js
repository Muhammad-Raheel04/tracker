import Site from '../models/siteModel.js';
import { sanitizeDomain } from '../utils/santizeDomain.js';
import { isValidDomain } from '../utils/domainValidator.js';
import { generateToken } from '../utils/tokenGenerator.js';
import { isTrustedPlatformDomain } from '../utils/trustedPlatform.js';
import { VerifyDomain } from '../services/dnsService.js';

export const getVersion = (req, res) => {
    res.json({ version: '1.0.0' });
}

export const registerSite = async (req, res) => {
    try {
        const { name, domain: rawDomain } = req.body;

        if (!name || !rawDomain) {
            return res.status(400).json({
                success: false,
                message: "name and domain are required"
            });
        }
        const domain = sanitizeDomain(rawDomain);

        if (!isValidDomain(domain)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid domain format',
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
        const isTrusted = isTrustedPlatformDomain(domain);
        const site = await Site.create({
            name,
            domain,
            token,
            ownerId: req.user.id,
            ownerName: req.user.name,
            verificationStatus: isTrusted ? 'verified' : 'pending',
            verifiedAt: isTrusted ? new Date() : null,
            domainType: isTrusted ? "platform" : "custom"
        });

        return res.status(201).json({
            success: true,
            message: isTrusted ? "Site registered and Verified" : "Site registered Verification Pending",
            token: isTrusted ? undefined : token,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const verifySite = async (req, res) => {
    try {
        const { siteId } = req.params;
        if (!siteId) {
            return res.status(400).json({
                success: false,
                message: "siteId  missing",
            })
        }
        const site = await Site.findById(siteId);
        if (!site) {
            return res.status(404).json({
                success: false,
                message: "Site not found",
            })
        }
        if (site.ownerId.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized"
            })
        }
        if (site.verificationStatus === 'verified') {
            return res.status(200).json({
                success: true,
                message: "Already Verified",
            })
        }
        if (site.domainType === 'platform') {
            site.verificationStatus = 'verified';
            await site.save();

            return res.status(200).json({
                success: true,
                message: "Verified Successfully (Platform domain)",
            })
        }
        const isFound = await VerifyDomain(site.domain, site.token);
        if (isFound.ok) {
            site.verificationStatus = 'verified';
            await site.save();

            return res.status(200).json({
                success: true,
                message: "Domain verified successfully",
            })
        }
        return res.status(400).json({
            success: false,
            message: isFound.message,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    };
}
export const getScript = async (req, res) => {
    try {
        const { siteId } = req.params;

        const site = await Site.findById(siteId);
        if (!site) {
            return res.status(404).json({
                success: false,
                message: "Site not found",
            })
        }

        if (site.verificationStatus !=='verified'){
            return res.status(403).json({
                success:false,
                message:"Site not verified",
            })
        }

        const scriptTag=`<script src="${process.env.SCRIPT_BASE_URL}/analytics.js" data-token="${site.token}" defer></script>`;
        
        return res.status(200).json({
            success:true,
            scriptUrl:`${process.env.SCRIPT_BASE_URL}/analytics.js`,
            data_token:`${site.token}`,
            generatedAt:new Date(),
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}