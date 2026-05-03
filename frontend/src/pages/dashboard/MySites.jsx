import React, { useEffect, useState } from 'react'
import API from '../../utils/API';
import toast from 'react-hot-toast';

const MySites = () => {
    const [sites, setSites] = useState([]);

    const fetchSites = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            const res = await API.get('/sites/all-sites', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            setSites(res.data?.sites);
            toast.success(res.data?.message);

        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to fetch sites");
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

                            <button className="font-bold text-black cursor-pointer p-2 bg-[#08cdbd] rounded-md">
                                Get Script
                            </button>
                            <button className="text-[#08cdbd] cursor-pointer p-2 bg-[#042f2b] rounded-md border border-[#08cdbd]">
                                Analytics
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default MySites