const regex=/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;
export const isValidDomainFormat=(domain)=>{
    return regex.test(domain) && domain.length<=253;
}