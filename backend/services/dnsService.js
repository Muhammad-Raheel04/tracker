import dns from 'dns/promises'

export const VerifyDomain = async (domain, token) => {
    try {
        const txtRecords = await dns.resolveTxt(domain);
        const flat = txtRecords.flat();

        const hasToken = flat.some(record => record.includes(token));

        if (!hasToken) {
            return {
                ok: false,
                code: 'TOKEN_MISSING',
                message: 'TXT record not found',
            }
        }
        return {
            ok: true,
        }
    } catch (err) {
        if(err.code==='ENOTFOUND'){
            return{
                ok:false,
                code:"DOMAIN_NOT_FOUND",
                message:"Domain does not exist",
            }
        }
        if(err.code==='ENOTDATA'){
            return{
                ok:false,
                code:"NO_TXT_RECORD",
                message:"No TXT records found for this domain",
            }
        }
        return {
            ok: false,
            code: 'DNS_ERROR',
            message: err.message,
        }
    }
}