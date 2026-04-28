import React from 'react'

const siteFeatures = [
    {

    }
]
const Features = () => {
    return (
        <div className='flex flex-col justify-center p-4 gap-4 bg-[#003F3A]'>
            <div className='flex flex-row items-center justify-center gap-2'>
                <div className='w-10 md:w-16 h-px bg-[#14ead8]'></div>
                <h2 className='text-sm md:text-xl text-[#14ead8] font-sans uppercase'>
                    Platform Features
                </h2>
                <div className='w-10 md:w-16 h-px bg-[#14ead8]'></div>
            </div>

            <div className='flex flex-col justify-center items-center text-3xl md:text-6xl py-2'>
                <h2 className='text-white pb-2'>
                    Everything You <span><i className='text-[#14ead8]'>Need</i></span>
                </h2>
                <p className='p-4 text-xs text-center text-white'>A complete analytics suite built for modern teams that is actually simple to integrate</p>
            </div>

        </div>
    )
}

export default Features
