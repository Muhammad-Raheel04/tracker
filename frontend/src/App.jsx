import React from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
const router=createBrowserRouter([
  {
    path:"/",
    element:<><LandingPage></LandingPage></>
  },
  {
    path:"/register",
    element:<><Signup></Signup></>
  },
  {
    path:"/login",
    element:<><Login></Login></>
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
