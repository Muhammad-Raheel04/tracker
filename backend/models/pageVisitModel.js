import mongoose from "mongoose";

const pageVisitSchema=new mongoose.Schema({
    siteId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Site',
        required:true,
        index:true
    },
    sessionId:{
        type:String,
        required:true,
    },
    pageUrl:{
        type:String,
        required:true,
    },
    referrer:{
        type:String,
        default:null,
    },
},{timestamps:true})

export default mongoose.model('PageVisit',pageVisitSchema)