import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyEmail } from '../mailer/verifyEmail.js';
import { Session } from '../models/sessionModel.js';

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Account already exit, Login plz",
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })
        const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, { expiresIn: '10m' });
        try {
            await verifyEmail(token, email);
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
            })
        }

        newUser.token = token;
        await newUser.save();
        return res.status(201).json({
            success: true,
            message: "User registered successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Erorr",
        })
    }
}
export const verify = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            return res.status(400).json({
                success: false,
                message: "authorization missing",
            })
        }
        const token = authHeader.split(" ")[1];

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.SECRET_KEY);
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: "Expired or used token",
            })
        }
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user not found",
            })
        }
        user.token = null;
        user.isVerified = true;
        await user.save();
        return res.status(200).json({
            success: true,
            message: "Email Verified Successfully!",
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    };
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User doesn't exist",
            })
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            })
        }
        if (existingUser.isVerified === false) {
            return res.status(403).json({
                success: false,
                message: "Verify your account then login",
            })
        }

        const accessToken = jwt.sign({ id: existingUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: existingUser._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

        await Session.findOneAndUpdate(
            { userId: existingUser._id },
            {
                userId: existingUser._id,
                refreshToken
            },
            { upsert: true, new: true }
        )
        existingUser.isLoggedIn = true;
        await existingUser.save();

        return res.status(200).json({
            success: true,
            message: `Welcome back ${existingUser.name}`,
            user: {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email
            },
            accessToken: accessToken,
            refreshToken: refreshToken,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}