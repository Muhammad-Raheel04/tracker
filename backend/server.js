import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import analyticsRouter from './routes/siteRoutes.js';

const app=express();
const PORT=process.env.PORT;

app.use(express.json())
app.use('/api/v1/analytics',analyticsRouter)

app.listen(PORT,()=>{
    console.log(`tracker listening at http://localhost:${PORT}`)
    connectDB();
})
