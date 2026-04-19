import 'dotenv/config';
import express from 'express';
import { connectDB } from './config/db.js';
import pageVisitRoutes from './routes/pageVisitRoutes.js';
import siteRoutes from './routes/siteRoutes.js';
import authRoutes from './routes/authRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import cors from 'cors';
const app=express();
const PORT=process.env.PORT;

app.use(cors({
    origin:'*',
}));
app.use(express.json())
app.use('/api/v1/health',healthRoutes);
app.use('/api/v1/sites',siteRoutes);
app.use('/api/v1/visits',pageVisitRoutes)
app.use('/api/v1/auth',authRoutes)
app.listen(PORT,()=>{
    console.log(`tracker listening at http://localhost:${PORT}`)
    connectDB();
})
