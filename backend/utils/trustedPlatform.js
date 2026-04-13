const TRUSTED_PLATFORM_PATTERSN = [
    /\.vercel\.app$/i,
    /\.netlify\.app$/i,
    /\.netlify\.com$/i,
    /\.github\.io$/i,
    /\.pages\.dev$/i,
    /\.web\.app$/i,
    /\.firebaseapp\.com$/i,
    /\.onrender\.com$/i,
    /\.railway\.app$/i,
    /\.up\.railway\.app$/i,
    /\.fly\.dev$/i,
    /\.adaptable\.app$/i,
    /\.cyclic\.app$/i,
    /\.glitch\.me$/i,
    /\.replit\.dev$/i,
    /\.repl\.co$/i,
    /\.surge\.sh$/i,
    /\.w3spaces\.com$/i,
    /\.vercel-build\.app$/i,
]
export const isTrustedPlatformDomain=(domain)=>{
    return TRUSTED_PLATFORM_PATTERSN.some(pattern=>pattern.test(domain));
}