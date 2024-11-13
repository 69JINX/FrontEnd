import { SaleImg1, SaleImg2, SaleImg3, SaleImg4, SaleImg5, SaleImg6, SaleImg7, SaleImg8, SaleImg9, SaleImg10, SaleImg11, SaleImg12, SaleImg13, SaleImg14, SaleImg15, SaleImg16, SaleImg17, SaleImg18, SaleImg19, SaleImg20, SaleImg21, SaleImg22, SaleImg23, SaleImg24} from './../images/images.jsx';
import './Css/SaleSlider.css';
import SaleSlider6imgs from './SaleSlider6imgs.jsx';

function SaleSlider() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide my-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <SaleSlider6imgs active="active" img1={SaleImg1} img2={SaleImg2} img3={SaleImg3} img4={SaleImg4} img5={SaleImg5} img6={SaleImg6}/>
                <SaleSlider6imgs img1={SaleImg7} img2={SaleImg8} img3={SaleImg9} img4={SaleImg10} img5={SaleImg11} img6={SaleImg12}/>
                <SaleSlider6imgs img1={SaleImg13} img2={SaleImg14} img3={SaleImg15} img4={SaleImg16} img5={SaleImg17} img6={SaleImg18}/>
                <SaleSlider6imgs img1={SaleImg19} img2={SaleImg20} img3={SaleImg21} img4={SaleImg22} img5={SaleImg23} img6={SaleImg24}/>
            </div>
        </div>
    );
}

export default SaleSlider;