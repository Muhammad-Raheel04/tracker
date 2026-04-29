import { Copy } from 'lucide-react'
import React, { useState } from 'react'

const TrackingScript = () => {
    const [copied, setCopied] = useState(false)
    const handleClick = () => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }
    return (
        <>
        <div className='flex flex-col justify-center items-center md:gap-8 gap-4 bg-black px-4 py-40 '>
            <h2 className='text-xl md:text-5xl text-[#05fce8]'>Get Script Get Started!</h2>
            <div className='border border-[#05fce8] rounded-md px-4 w-full max-w-lg'>
                <div className='flex justify-between items-center border-b border-gray-400 mb-2 py-2  '>
                    <h2 className=' text-gray-400'>Paste this into your &lt;head&gt; and you're done.</h2>
                    <div className=' text-[#05fce8] cursor-pointer bg-[#003F3A] p-2 rounded-md'>
                        <button className='flex justify-center items-center gap-2 cursor-pointer ' onClick={() => handleClick(!copied)}>{copied ? "" : <Copy className='h-4 w-4' />} {copied ? "Copied!" : "Copy"}</button>
                    </div>
                </div>
                <div className='text-left pb-2'>
                    <code className='text-sm text-[#05fce8]'>&lt;script src="https://iamatracker/analytics.js"
                        data-token="YOUR_TOKEN" defer&gt;&lt;/script&gt;</code>
                </div>
            </div>
        </div>
        </>
    )
}

export default TrackingScript
