import { useState } from "react"
import toast from "react-hot-toast"
import API from "../../utils/API"

const AddSite = () => {
    const [formData,setFormData]=useState({
        name:"",
        domain:"",
    })
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
    })}
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await API.post('/sites/register',formData);
            toast.success(res.data?.message);
        }catch(error){
            toast.error(error?.response?.data?.message);
        }
    }
    return (
        <div className="flex flex-col items-center min-h-screen p-6 bg-[#003F3A]">
            <h1 className='text-5xl text-center text-[#08cdbd] font-light'>Add Site</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2 bg-[#042f2b] rounded-md px-8  py-12 mt-4 text-white w-full max-w-sm">
                <h2 className="text-2xl text-[#00cdbd]">Register Your Site</h2>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="name" >Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="MySite Co"
                        className="bg-[#003f3a] p-2 rounded-md"
                    ></input>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="domain" >Domain</label>
                    <input
                        type="text"
                        name="domain"
                        value={formData.domain}
                        onChange={handleChange}
                        placeholder="https://iamatracker.netlify.app"
                        className="bg-[#003f3a] p-2 rounded-md"
                    ></input>
                </div>
                <button type="submit" className="bg-[#00cdbd] w-full rounded-md p-2 mt-2" >
                    Register
                </button>
            </form>
        </div>
    )
}

export default AddSite
