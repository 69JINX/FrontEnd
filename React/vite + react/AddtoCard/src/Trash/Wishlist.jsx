import React from 'react'
import Navbar from './Components/Navbar'

function Wishlist() {
    return (
        <>
            <Navbar />    
            <div className="container mt-5">
            <h4>My Wishlist</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <td scope="col">Product Name</td>
                            <td scope="col">Unit Price ($)</td>
                            <td scope="col">Stock Status</td>
                            <td scope="col">Action</td>
                            <td scope="col">Add to Cart</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="df"/>Essence Mascara Lash Princess</td>
                            <td>9.99</td>
                            <td className="p-3"><span className=" bg-success p-2 rounded-3 text-white fs-6"> In Stock</span></td>
                            <td><button className="btn btn-dark">Remove</button></td>
                            <td><button className="btn btn-dark">Add to Cart</button></td>      
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Wishlist