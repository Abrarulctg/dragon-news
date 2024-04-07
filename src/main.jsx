import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/routes.jsx';
import { AuthContext } from './provider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext.Provider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext.Provider>
  </React.StrictMode>,
)
