export const healthCheck=async(req,res)=>{
    try{
        return res.status(200).json({
            success:true,
            status:"OK",
            upTime:process.uptime(),
            timeStamp:new Date(),
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Erorr",
            error:error.message,
        })
    }
}