import {crslimg1, crslimg2, crslimg3, crslimg4, crslimg5} from './../images/images.jsx'

function Carousel() {
    return (
        
            <div id="carouselExampleSlidesOnly" className="carousel slide my-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={crslimg1} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={crslimg2} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={crslimg3} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={crslimg4} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src={crslimg5} className="d-block w-100" />
                    </div>
                </div>
            </div>  
    );
}

export default Carousel;