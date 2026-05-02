import { ChartArea, Globe, LayoutDashboard, Trash } from "lucide-react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return ( 
        <div className="flex flex-col w-64  h-screen pt-4 bg-[#003F3A] text-white">
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
        </div>
    )
}

export default Sidebar
