import React, { useState } from 'react'
import { createContext } from 'react'
export const wishlist = createContext();

function Context({children}) {
    const [Wishlist, setWishlist] = useState([]);
    const [Cart, setCart] = useState([]);
    const [Subtotal, setSubtotal] = useState(0);
  return (
    <wishlist.Provider value={{Wishlist,setWishlist,Cart,setCart,Subtotal,setSubtotal}}>
        {children}
    </wishlist.Provider>
  )
}

export default Context