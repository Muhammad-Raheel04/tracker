import { Activity, Calendar, ChartArea, Code, Globe, Ligature, Lightbulb, Shield, Zap } from 'lucide-react'
import React from 'react'

const siteFeatures = [
    {
        number: "01",
        icon: <Code />,
        heading: "One-line Script integration",
        text: "Add one script tag to your HTML and start tracking immediately. No complex configuration required."
    },
    {
        number: "02",
        icon: <ChartArea />,
        heading: "Real-time Page Visit Tracking",
        text: "Monitor your website traffic in real-time with instant updates and accurate visitor counts."
    },
    {
        number: "03",
        icon: <Shield/>,
        heading: "Domain Verification via DNS",
        text: "Secure your analytics with DNS-based domain verification. Only you can track your sites"
    },
    {
        number: "04",
        icon: <Calendar />,
        heading: "Session-based Analytics",
        text: "Track unique sessions and user behavior patterns to understand your audience better."
    },
    {
        number: "05",
        icon: <Globe/>,
        heading: "Multi-site Management",
        text: "Manage analytics for multiple websites from a single dashboard. Perfect for agencies."
    },
    {
        number: "06",
        icon: <Zap/>,
        heading: "Lightweight & Fast",
        text: "Our script is under 5KB and loads asynchronously. Zero impact on your site performance."
    },

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

            <div className='flex flex-col justify-center items-center text-3xl md:text-6xl md:py-2'>
                <h2 className='text-white md:pb-2'>
                    Everything You <span><i className='text-[#14ead8]'>Need</i></span>
                </h2>
                <p className='p-4 text-xs text-center text-white'>A complete analytics suite built for modern teams that is actually simple to integrate</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-10 mt-10'>
                {siteFeatures.map((feature,index) => (
                    <div key={index} className='bg-[#042f2b] py-8 px-5 rounded-lg hover:border-l-2 border-[#14ead8] shadow-md'>
                        <div className='flex justify-between'>
                            <p className='text-[#14ead8]'>{feature.number}</p>
                            <p className='text-[#14ead8]'>{feature.icon}</p>
                        </div>
                        <div className='flex flex-col gap-4 mt-2'>
                            <h2 className='text-2xl text-[#14ead8] font-bold '>{feature.heading}</h2>
                            <p className='text-gray-400 text-sm'>{feature.text}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Features
