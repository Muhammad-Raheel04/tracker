import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Toaster} from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
      <Toaster 
      position='bottom-right' 
      reverseOrder={false}
      toastOptions={{
        style:{
          background:"#042f2b",
          color:"#05fce8",
          padding:"12px 16px",
          borderRadius:"10px",
        },
        success:{
          style:{
            background:"#042f2b",
          }
        },
        error:{
          style:{
            background:"#042f2b",
          }
        },
        duration:3000,
      }}
      ></Toaster>
  </StrictMode>,
)
