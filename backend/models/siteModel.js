import mongoose from 'mongoose';

const siteSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    domain:{
        type:String,
        required:true,
        unique:true,
    },
    token:{
        type:String,
        required:true,
        unique:true,
    },
},{timestamps:true})

export default mongoose.model('Site',siteSchema)