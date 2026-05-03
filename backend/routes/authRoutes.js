import express from 'express';
import { login, logout, refreshToken, registerUser, verify } from '../controllers/authController.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';
const router=express.Router();

router.post('/register',registerUser)
router.post('/verify',verify);
router.post('/login',login);
router.post('/refresh',refreshToken);
router.post('/logout',isAuthenticated,logout);
export default router;