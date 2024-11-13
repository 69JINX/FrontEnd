import {SaleImg25,SaleImg26,SaleImg27,SaleImg28,SaleImg29,SaleImg30,SaleImg31,SaleImg32,SaleImg33,SaleImg34,SaleImg35,SaleImg36} from './../images/images.jsx';
import './Css/SaleSlider.css';
import SaleSlider6imgs from './SaleSlider6imgs.jsx';

function SaleSlider2() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide my-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <SaleSlider6imgs active="active" img1={SaleImg25} img2={SaleImg26} img3={SaleImg27} img4={SaleImg28} img5={SaleImg29} img6={SaleImg30}/>
                <SaleSlider6imgs img1={SaleImg31} img2={SaleImg32} img3={SaleImg33} img4={SaleImg34} img5={SaleImg35} img6={SaleImg36}/>
            </div>
        </div>
    );
}

export default SaleSlider2;