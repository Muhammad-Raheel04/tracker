import API from '../utils/API';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const VerifyEmail = () => {
    const { token } = useParams();
    const [status, setStatus] = useState('Verifying...');
    const navigate = useNavigate();
    const verifyEmail = async () => {
        try {
            const res = await API.post('/auth/verify', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res.data.success) {
                toast.success(`✅ Email Verified Successfully`)
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            }
        } catch (error) {
            toast.error("❌ Verification failed. Please try again")
        }
    }
    useEffect(() => {
        verifyEmail()
    }, [token])
    return (
        <div className='relative w-full h-[760px] bg-[#003F3A] overflow-hidden'>
            <div className='min-h-screen flex items-center justify-center'>
                <div className='bg-[#042f2b] p-6 rounded-2xl shadow-md text-center w-[90%] max-w-md'>
                    <h2 className='text-xl text-[#08cdbd]'>{status}</h2>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail
