import express from 'express';
import { login, registerUser, verify } from '../controllers/userController.js';
const router=express.Router();

router.post('/register',registerUser)
router.post('/verify',verify);
router.post('/login',login);
export default router;