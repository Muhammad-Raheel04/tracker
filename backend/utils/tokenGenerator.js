import crypto from 'crypto';

export const generateToken=()=>{
    return `myapp-verify=${crypto.randomBytes(16).toString('hex')}`;
}