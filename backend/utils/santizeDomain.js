export const sanitizeDomain=(domain)=>{
    return domain
        .toLowerCase()
        .replace(/https?:\/\//,'')
        .replace(/^www\./,'')
        .replace(/\/$/,'')
}