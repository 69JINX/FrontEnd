import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import './Css/cart.css'
import { wishlist } from './Context/Context';

function Cart() {

    const { Wishlist, setWishlist, Cart, setCart, Subtotal, setSubtotal } = useContext(wishlist);

    console.log(Subtotal);
    let remove_from_cart = (product) => {
        setCart(Cart.filter((item) => item.id !== product.id));
        setSubtotal(Subtotal - (product.price*product.quantity));
    }

    useEffect(()=>{
        if(Cart.length==0){
            setSubtotal(0);
        }
    },[Cart])

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h4>Shopping Cart</h4>
                <ul>
                    {
                        Cart.map((v) => {
                            return (
                                <li>
                                    <div className="cart-product my-3">
                                        <div><img src={v.thumbnail} /></div>
                                        <div className="product-details">
                                            <div className="fs-4"><b>{v.title}</b></div>
                                            <div><b>${v.price}</b></div>
                                            <div><span className="bg-success p-1 rounded-3 text-white"> In Stock : {v.stock} </span></div>
                                        </div>
                                        <div className="product-quantity">
                                            <button className="btn shadow-sm border border-3 fs-4" onClick={() => {
                                                if (v.quantity < v.stock) {
                                                    console.log(v.stock);
                                                    setSubtotal(Subtotal + v.price);
                                                    v.quantity+=1;
                                                }
                                            }}>+</button>
                                            <button className="btn">{v.quantity}</button>
                                            <button className="btn shadow-sm border border-3 fs-4" onClick={() => {
                                                if (v.quantity > 1) {
                                                    setSubtotal(Subtotal - v.price);
                                                    v.quantity-=1;
                                                }
                                            }}>–</button>
                                        </div>
                                        <div>
                                            <button className="remove-product" onClick={() => remove_from_cart(v)}>X</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }


                </ul>
                <div className="order-summary">
                    <div>
                        <div>Order Summary</div>
                        <div>
                            <div>Subtotal</div>
                            <div><b>$ { Subtotal.toFixed(2)}</b></div>
                        </div>
                        <div>
                            <div>Delivery Charge</div>
                            <div><b>$ 10</b></div>
                        </div>
                        <div>
                            <div>Total</div>
                            <div><b>$ {(Subtotal + 10).toFixed(2)}</b></div>
                        </div>
                        <button className="checkout">Checkout</button>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Cart