import React, { useEffect, useState } from 'react'
import API from '../../utils/API';
import toast from 'react-hot-toast';

const MySites = () => {
    const [sites, setSites] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [scriptData, setScript] = useState(null);
    const fetchSites = async () => {
        try {
            const res = await API.get('/sites/all-sites');

            setSites(res.data?.sites);
            toast.success(res.data?.message);

        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to fetch sites");
        }
    }

    const getScriptHandler = async (id) => {
        try {
            const res = await API.get(`/sites/script/${id}`);
            setScript({
                scriptUrl: res.data?.scriptUrl,
                dataToken: res.data?.data_token,
            });
            setOpen(true);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
    useEffect(() => {
        fetchSites();
    }, []);

    return (
        <div className="min-h-screen p-6 bg-[#003F3A]">

            <h2 className="text-5xl text-[#08cdbd] font-light mb-6 text-center">
                My Sites
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sites.map((site) => (
                    <div
                        key={site._id}
                        className="bg-[#042f2b] border border-[#08cdbd] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5"
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-light text-[#08cdbd] truncate">
                                {site.name}
                            </h3>

                            <span className={`text-xs px-3 py-1 rounded-md font-medium
                                ${site.verificationStatus === "verified"
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                    : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                }`}
                            >
                                {site?.verificationStatus}
                            </span>
                        </div>

                        <p className="text-sm text-gray-400 mt-2">
                            {site?.domain}
                        </p>
                        <div className=' h-px bg-[#0b3f3a] my-5'></div>
                        <div className="mt-4 grid grid-cols-2 gap-2 items-center text-xs text-gray-400">

                            <button className="font-bold text-black cursor-pointer p-2 bg-[#08cdbd] rounded-md" onClick={() => getScriptHandler(site._id)} >
                                Get Script
                            </button>
                            <button className="text-[#08cdbd] cursor-pointer p-2 bg-[#042f2b] rounded-md border border-[#08cdbd]">
                                Analytics
                            </button>
                        </div>

                    </div>
                ))}
                {isOpen && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

                        <div className="bg-[#042f2b] text-white p-6 rounded-2xl w-[90%] max-w-xl relative shadow-2xl border border-[#08cdbd]/20">

                            {/* Close */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-[#08cdbd] hover:text-white text-lg"
                            >
                                ✕
                            </button>


                            <h3 className="text-xl font-medium text-[#08cdbd] mb-2">
                                Install Tracking Script
                            </h3>

                            <p className="text-sm text-gray-400 mb-4">
                                Paste this script inside the <code className="text-[#08cdbd]">&lt;head&gt;</code> of your website
                            </p>

                            <div className="bg-black rounded-lg p-4 text-sm text-gray-400 font-mono overflow-x-auto border border-[#08cdbd]/10">
                                <code><span className='text-[#08cdbd]'>&lt;script</span> src="<span className='text-[#08cdbd]'>{scriptData?.scriptUrl}</span>" data-token="<span className='text-[#08cdbd]'>{scriptData?.dataToken}</span>" defer<span className='text-[#08cdbd]'>&gt;&lt;/script&gt;</span></code>
                            </div>

   

                            <div className="flex gap-3 mt-5">

                                <button
                                    onClick={() => {
                                        const script = `<script src="${scriptData?.scriptUrl}" data-token="${scriptData?.dataToken}" defer></script>`;
                                        navigator.clipboard.writeText(script);
                                        toast.success("Copied to clipboard!");
                                    }}
                                    className="flex-1 bg-[#08cdbd] text-black py-2 rounded-md font-semibold hover:opacity-90 transition"
                                >
                                    Copy Script
                                </button>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="flex-1 border border-[#08cdbd] text-[#08cdbd] py-2 rounded-md hover:bg-[#08cdbd]/10 transition"
                                >
                                    Close
                                </button>

                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MySites