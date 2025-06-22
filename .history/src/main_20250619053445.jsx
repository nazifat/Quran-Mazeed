import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>

import {

  RouterProvider,
} from "react-router-dom";
import {router} from "./Providers/RouterProvider"


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
