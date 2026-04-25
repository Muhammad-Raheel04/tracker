import React from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AnalyticsPage from './pages/AnalyticsPage';

const router=createBrowserRouter([
  {
    path:"/",
    element:<><LandingPage></LandingPage></>
  },
  {
    path:"/analytics",
    element:<><AnalyticsPage></AnalyticsPage></>
  },
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
