import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import pageVisitRoutes from './routes/pageVisitRoutes.js';
import siteRoutes from './routes/siteRoutes.js';
import authRoutes from './routes/authRoutes.js';
const app=express();
const PORT=process.env.PORT;

app.use(express.json())
app.use('/api/v1/sites',siteRoutes);
app.use('/api/v1/analytics',pageVisitRoutes)
app.use('/api/v1/auth',authRoutes)
app.listen(PORT,()=>{
    console.log(`tracker listening at http://localhost:${PORT}`)
    connectDB();
})
