import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/Router.jsx'
import Authporviders from './Providers/Authporviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authporviders><RouterProvider router={routes}></RouterProvider></Authporviders>
  </React.StrictMode>,
)
