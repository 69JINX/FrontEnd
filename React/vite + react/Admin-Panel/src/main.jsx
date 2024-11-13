import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './Components/Dashboard.jsx'
import Login from './Components/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyContext from './Context/MyContext.jsx'
import ProfilePanel from './Components/Panels/ProfilePanel.jsx'
import DashboardPanel from './Components/Panels/DashboardPanel.jsx'
import SizeDetails from './Components/Panels/Size/SizeDetails.jsx'
import ViewSizes from './Components/Panels/Size/ViewSizes.jsx'
import AddColor from './Components/Panels/Color/AddColor.jsx'
import ViewColor from './Components/Panels/Color/ViewColor.jsx'
import AddCategory from './Components/Panels/ParentCategory/AddCategory.jsx'
import ViewCategory from './Components/Panels/ParentCategory/ViewCategory.jsx'
import AddProductCategory from './Components/Panels/ProductCategory/AddProductCategory.jsx'
import ViewProductCategory from './Components/Panels/ProductCategory/ViewProductCategory.jsx'
import './global.css'
import AddProduct from './Components/Panels/Product/AddProduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/Dashboard',
    element: <Dashboard />,
    children: [{
      path: '/Dashboard',
      element: <DashboardPanel />
    },
    {
      path: '/Dashboard/Profile',
      element: <ProfilePanel />
    },
    {
      path: '/Dashboard/Size/Size_Details',
      element: <SizeDetails />
    },
    {
      path: '/Dashboard/Size/View_Sizes',
      element: <ViewSizes />
    },
    {
      path: '/Dashboard/Color/Add_Color',
      element: <AddColor />
    },
    {
      path: '/Dashboard/Color/View_Color',
      element: <ViewColor />
    },
    {
      path: '/Dashboard/Category/Add_Category',
      element: <AddCategory />
    },
    {
      path: '/Dashboard/Category/View_Category',
      element: <ViewCategory />
    },
    {
      path: '/Dashboard/Products/Add_Product_Category',
      element: <AddProductCategory />
    },
    {
      path: '/Dashboard/Products/View_Product_Category',
      element: <ViewProductCategory />
    },
    {
      path: '/Dashboard/Products/Add_Product',
      element: <AddProduct />
    }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
  </StrictMode>,
)
