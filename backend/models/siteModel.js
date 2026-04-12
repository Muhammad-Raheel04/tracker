import mongoose from 'mongoose';

const siteSchema=new mongoose.Schema({
    ownerName:{
        type:String,
        required:true,
    },
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        index:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    domain:{
        type:String,
        required:true,
        unique:true,
        index:true,
        trim:true,
        lowercase:true,
    },
    domainType:{
        type:String,
        enum:['platform','custom'],
        required:true,
    },
    verificationStatus:{
        type:String,
        enum:['pending','verified','failed'],
        default:'pending',
    },
    verifiedAt:{
        type:Date,
        default:null,
    },
    token:{
        type:String,
        required:true,
        unique:true,
    },
},{timestamps:true})

export default mongoose.model('Site',siteSchema)