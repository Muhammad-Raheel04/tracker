const steps = [
    {
        number: "1",
        heading: "Register your site",
        text: "Create an account and add your website domain"
    },
    {
        number: "2",
        heading: "Verify your domain",
        text: "Add a DNS TXT record to verify ownership"
    },
    {
        number: "3",
        heading: "Embed the script",
        text: "Copy and integrate the tracking script into index.html"
    },
    {
        number: "4",
        heading: "View analytics",
        text: "Watch real-time data flow into your dashboard"
    },
]
const SystemFlow = () => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center bg-[#003F3A] py-40 px-4">
            <div className='flex flex-row items-center justify-center gap-2'>
                <div className='w-10 md:w-16 h-px bg-[#14ead8]'></div>
                <h2 className='text-sm md:text-xl text-[#14ead8] font-sans uppercase'>
                    System Flow
                </h2>
                <div className='w-10 md:w-16 h-px bg-[#14ead8]'></div>
            </div>
            <div className='flex flex-col justify-center items-center text-3xl md:text-6xl md:py-2'>
                <h2 className='text-white md:pb-2'>
                    How It <span><i className='text-[#14ead8]'>Works</i></span>
                </h2>
                <p className='p-4 text-xs text-center text-white'>Get started in minutes with a simple setup process designed for speed and clarity.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-2 mt-6">
                        <div className="flex justify-center font-bold items-center text-2xl text-[#08cdbd]  bg-[#042f2b] p-8 border-3 border-[#08cdbd] rounded-full w-12 h-12 hover:bg-[#08cdbd] hover:text-[#042f2b]">
                            {step.number}
                        </div>
                        <div className="text-white md:text-2xl text-sm">
                            {step.heading}
                        </div>
                        <div className="text-center text-gray-400">
                            {step.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SystemFlow
