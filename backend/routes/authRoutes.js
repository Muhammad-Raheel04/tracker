import express from 'express';
import { login, refreshToken, registerUser, verify } from '../controllers/authController.js';
const router=express.Router();

router.post('/register',registerUser)
router.post('/verify',verify);
router.post('/login',login);
router.post('/refresh',refreshToken);
export default router;