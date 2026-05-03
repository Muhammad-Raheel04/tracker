import { ChartArea, Globe, LayoutDashboard, LogOut, Trash } from "lucide-react"
import toast from "react-hot-toast"
import { NavLink, useNavigate } from "react-router-dom"
import API from "../utils/API"

const Sidebar = () => {
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const res = await API.post('/auth/logout', {},{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            if (res.data.success) {
                toast.success(res.data?.message);
                localStorage.removeItem('accessToken');
                navigate('/')
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    }
    return (
        <div className="flex flex-col justify-between w-64  h-screen pt-4 bg-[#003F3A] text-white">
            <div className="flex flex-col gap-2">

                <NavLink
                    to='/dashboard/overview'
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg transition 
                        ${isActive ? "bg-teal-800" : "hover:bg-teal-800/60"}`
                    }
                >
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink
                    to='/dashboard/add-site'
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg transition 
                        ${isActive ? "bg-teal-800" : "hover:bg-teal-800/60"}`
                    }
                >
                    <ChartArea size={18} />
                    <span>Add Site</span>
                </NavLink>

                <NavLink
                    to='/dashboard/my-sites'
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg transition 
                        ${isActive ? "bg-teal-800" : "hover:bg-teal-800/60"}`
                    }
                >
                    <Globe size={18} />
                    <span>My Sites</span>
                </NavLink>
            </div>
            <div className="flex gap-2 p-4 cursor-pointer border-t border-[#08cdbd]" onClick={logoutHandler}>
                <LogOut /><span>Logout</span>
            </div>
        </div>
    )
}

export default Sidebar
