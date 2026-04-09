import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyEmail } from '../mailer/verifyEmail.js';

export const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }

        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(409).json({
                success:false,
                message:"Account already exit, Login plz",
            })
        }
        const hashedPassword=await bcrypt.hash(password,10);
    
        const newUser=await User.create({
            name,
            email,
            password:hashedPassword
        })
        const token=jwt.sign({id:newUser._id},process.env.SECRET_KEY,{expiresIn:'10m'});
        try{
            await verifyEmail(token,email);
        }catch(err){
            return res.status(500).json({
                success:false,
                message:err.message,
            })
        }

        newUser.token=token;
        await newUser.save();
        return res.status(201).json({
            success:true,
            message:"User registered successfully"
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Erorr",
        })
    }
}