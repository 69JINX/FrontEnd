import { useState } from 'react'
import './App.css'
import Home from './Pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About.jsx';
import Gallery from './Pages/Gallery.jsx';

function App() {
  const router = new createBrowserRouter([
    {
      path: '/',                 // path: '' will also work
      element: <Home />
    },
    {
      path: '/about',            // path: 'about' will also work
      element: <About />
    },
    {
      path: '/gallery',          // path: 'gallery' will also work
      element: <Gallery />       // element can be anything that you want to show on that page, eg. any object, string, function, arr etc (element : "this is a gallery"), (element : arr), (element : fun1()). In this case we have shown an jsx component
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
