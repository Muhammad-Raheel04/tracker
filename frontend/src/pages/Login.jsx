import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import API from '../utils/API';
import toast from 'react-hot-toast';

const Login = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData)
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return (
    <div className='flex justify-center items-center h-screen bg-[#003F3A]'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center bg-[#042f2b] text-white px-8 py-12 rounded-lg gap-3 max-w-md w-full'>
        <h1 className='text-2xl text-center'>Tracker</h1>
        <p className='text-gray-400 text-center mb-4'>Login to your account</p>

        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="email">Email</label>
          <input
            className="bg-[#003F3A] rounded-md p-3 border-2 border-transparent focus:border-[#05fce8] focus:outline-none text-gray-200"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder='example@gmail.com'
          ></input>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="password">Password</label>
          <div className='relative'>
            <input
              className="bg-[#003F3A] rounded-md p-3 pr-10 w-full border-2 border-transparent focus:border-[#05fce8] focus:outline-none text-gray-200"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={show ? "text" : "password"}
              placeholder='******'

            >
            </input>
            <button
              type="button"
              onClick={() => setShow(!show)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white'
            >
              {show ? <EyeOff /> : <Eye />}
            </button>
          </div>


        </div>

        <button
          type="submit"
          className='bg-[#08cdbd] w-full p-3 rounded-md mt-2 text-black font-semibold'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
