import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetails from './ProductDetails.jsx';

  const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/ProductDetails/:id',
      element:<ProductDetails/>
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,

)
