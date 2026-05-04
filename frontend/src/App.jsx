import React from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MySites from './pages/dashboard/MySites';
import AddSite from './pages/dashboard/AddSite';
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
  },
  {
    path:"/dashboard",
    element:<><Dashboard></Dashboard></>,
    children:[
      { path:'my-sites',
        element:<><MySites></MySites></>
      },
      {
        path:'add-site',
        element:<><AddSite></AddSite></>
      }
    ]
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
