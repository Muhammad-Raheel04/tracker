import React from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MySites from './pages/dashboard/MySites';
import AddSite from './pages/dashboard/AddSite';
import Overview from './pages/dashboard/Overview';
import Analytics from './pages/dashboard/Analytics';
import ProtectRoute from './components/ProtectRoute';
import Verify from './pages/Verify';
import VerifyEmail from './pages/VerifyEmail';
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
    path:"/verify",
    element:<><Verify></Verify></>
  },
  {
    path:"/verify/:token",
    element:<><VerifyEmail></VerifyEmail></>
  },
  {
    path:"/dashboard",
    element:<><ProtectRoute><Dashboard></Dashboard></ProtectRoute></>,
    children:[
      {
        path:'overview',
        element:<><Overview></Overview></>
      },
      { path:'my-sites',
        element:<><MySites></MySites></>
      },
      {
        path:'add-site',
        element:<><AddSite></AddSite></>
      },
      {
        path:'analytics/:siteId',
        element:<><Analytics></Analytics></>
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
