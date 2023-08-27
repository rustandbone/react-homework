import { RouterProvider } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes';
import './styles/tailwind.css'
import AuthProvider from './contexts/Auth';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />  
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
