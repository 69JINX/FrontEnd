import React, { useContext } from 'react'
import axios from 'axios';
import Navbar from './Components/Navbar.jsx'
import { useState, useEffect } from 'react';
import { wishlist } from './Context/Context.jsx';



function Home() {
    const [products, setproducts] = useState([]);
    const { Wishlist, setWishlist } = useContext(wishlist);


    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=0')
            .then((response) => {
                setproducts(response.data.products);
            })
    }, [])

    useEffect(() => {
        console.log(Wishlist);
    }, [Wishlist])

    return (
        <>
            <Navbar />
            <div className="products d-flex flex-wrap gap-5 container my-5">
                {
                    products.map((v) => {
                        return (
                            <Card v={v} state={{ Wishlist, setWishlist }} />
                        )
                    })
                }
            </div>
        </>
    )
}



function Card({ v, state }) {

    const { Wishlist, setWishlist } = state;

    let add_to_wishlist = (product) => {
        let obj = {
            id: product.id,
            thumbnail: product.thumbnail,
            title: product.title,
            price: product.price,
            quantity: 1,
            stock: product.stock
        }
        setWishlist([...Wishlist, obj]);
    }

    let remove_from_wishlist = (product) => {
        setWishlist(Wishlist.filter((item) => item.id !== product.id));
    }

    let btn = Wishlist.filter((product) => product.id == v.id);

    return (
        <div className="card product" style={{ width: '18rem' }}>
            <img className="card-img-top" src={v.thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{v.title}</h5>
                <p className="card-text">{v.price}</p>
                <div>
                    {(btn == '') ?
                        <button className="btn btn-success my-2" onClick={() => add_to_wishlist(v)}>Add to Wishlist</button>
                        :
                        <button className="btn btn-danger my-2" onClick={() => remove_from_wishlist(v)}>Remove from Wishlist</button>
                    }
                </div>

            </div>
        </div>

    )

}

export default Home