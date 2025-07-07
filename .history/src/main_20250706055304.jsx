import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './DarkMode/darkMode.css'

import {

  RouterProvider,
} from "react-router-dom";
import {router} from "./Providers/RouterProvider"
import ScrollToTop from './Pages/ScrollToTop/ScrollToTop';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
