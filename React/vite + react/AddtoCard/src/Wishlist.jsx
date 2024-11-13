import React, { useContext, useEffect } from 'react'
import './Css/wishlist.css'
import Navbar from './Components/Navbar.jsx'
import { FaTrashCan } from "react-icons/fa6";
import { wishlist } from './Context/Context';

function Wishlist() {
    const { Wishlist, setWishlist, Cart, setCart,Subtotal,setSubtotal } = useContext(wishlist);
    let remove_from_wishlist = (product) => {
        setWishlist(Wishlist.filter((item) => item.id !== product.id));
    }
    let add_to_cart = (product) => {
        let obj = {
            id: product.id,
            thumbnail: product.thumbnail,
            title: product.title,
            price: product.price,
            quantity: 1,
            stock:product.stock
        }
        setCart([...Cart, obj]);
        setSubtotal(Subtotal+product.price);
    }
    
    return (
        <>
            <Navbar />
            <div class="cart-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-heading mb-10">My wishlist</div>
                            <div class="table-wishlist">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th width="45%">Product Name</th>
                                            <th width="15%">Unit Price</th>
                                            <th width="15%">Stock Status</th>
                                            <th width="15%" class="ps-3">Add to Cart</th>
                                            <th width="10%"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Wishlist.map((v) => {
                                            return (
                                                <tr>
                                                    <td width="45%">
                                                        <div class="display-flex align-center">
                                                            <div class="img-product">
                                                                <img src={v.thumbnail} />
                                                            </div>
                                                            <div class="name-product">
                                                                {v.title}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td width="15%" class="price">${v.price}</td>
                                                    <td width="15%"><span class="in-stock-box">In Stock</span></td>
                                                    <td width="15%"><button class="round-black-btn small-btn" onClick={() => add_to_cart(v)}>Add to Cart</button></td>
                                                    <td width="10%" class="text-center"><a href="#" onClick={() => remove_from_wishlist(v)} class="trash-icon"><FaTrashCan /></a></td>
                                                </tr>
                                            )
                                        })}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist