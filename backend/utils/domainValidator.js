const regex=/^[a-z0-9.-]+\.[a-z]{2,}$/;

export const isValidDomain=(domain)=>{
    return regex.test(domain);
}