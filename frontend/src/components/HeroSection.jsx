import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { Play } from 'lucide-react'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const HeroSection = () => {
    const { user } = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleClick = () => {
        if (user) {
            navigate('/dashboard/overview');
            return;
        }
        toast.error("Plz Login to get started")
        navigate('/login', {
            state: {
                from: {
                    pathname: '/dashboard/overview'
                }
            }
        });
    }
    return (
        <div className='flex flex-col justify-center gap-6 items-center  bg-[#003F3A] px-4 py-24 sm:py-34'>
            <h1 className='text-6xl sm:text-8xl font-extrabold text-center  text-[#14ead8]'>Track Visitors with One Script</h1>
            <h2 className='text-white text-center text-lg px-10'>Simple, fast, and developer-friendly analytics. No complex setup. No repeated integration.</h2>
            <div className='flex flex-row gap-4 justify-center items-center'>
                <div>
                    <button className="bg-white  text-black p-3 rounded-full font-semibold" onClick={handleClick}>
                        Get Started
                    </button>
                </div>
                <div className='flex flex-row justify-center items-center gap-2 text-white p-3 rounded-full border border-white'>
                    <Play className='h-6 w-6'></Play>
                    <Link to="/">
                        <button >
                            How it works?
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
