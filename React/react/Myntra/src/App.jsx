import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel.jsx';
import SaleSlider from './Components/SaleSlider.jsx';
import SaleSlider2 from './Components/SaleSlider2.jsx'
import Gallery from './Components/Gallery.jsx';
import About from './Components/About.jsx';
import React, { useState } from 'react';

function App() {

    const [opacity, setopacity] = useState(false);

    function fun1(){
        setopacity(!opacity);
    }
    return (
        <>
            <Navbar change_opacity={fun1}/>
            <Carousel />
            <h3 className="m-5 py-5">MEDAL WORTHY BRANDS TO BAG</h3>
            <SaleSlider />
            <h3 className="m-5 py-5"> GRAND GLOBAL BRANDS</h3>
            <SaleSlider2 />
            <h3 className="m-5 py-5"> SHOP BY CATEGORY</h3>
            <Gallery />
            <About />
            <div className="overlay" style={{ opacity: (opacity?'1':'0'),display:(opacity?'block':'none') }}>
            </div>
        </>
    )
}

export default App