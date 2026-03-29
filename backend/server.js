import 'dotenv/config';
import express from 'express';

const app=express();
const PORT=process.env.PORT;
app.get('/',(req,res)=>{
    return res.status(200).json({
        success:true,
        message:'tracker api is running'
    })
})

app.listen(PORT,()=>{
    console.log(`tracker listening at http://localhost:${PORT}`)
})
