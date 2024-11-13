import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Wishlist from './Wishlist.jsx'
import Cart from './Cart.jsx'
import Navbar from './Components/Navbar.jsx'
import Context from './Context/Context.jsx'



function App() {


  const router = createBrowserRouter([
    {
      path: '',
      element: <Home />
    },
    {
      path: '/wishlist',
      element: <Wishlist />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ])

  return (
    <Context>
      <RouterProvider router={router}/>
    </Context>
  )
}

export default App
