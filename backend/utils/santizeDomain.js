export const sanitizeDomain=(domain)=>{
    return domain
        .trim()
        .toLowerCase()
        .replace(/https?:\/\//,'')
        .replace(/^www\./,'')
        .replace(/\/+$/,'')
}