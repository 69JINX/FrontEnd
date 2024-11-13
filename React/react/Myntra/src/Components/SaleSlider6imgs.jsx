function SaleSlider6imgs({active,img1,img2,img3,img4,img5,img6}) {
    return (
        <div className={`carousel-item ${active} Sale-Imgs text-center`}>
            <a href="#"><img src={img1}/></a>
            <a href="#"><img src={img2}/></a>
            <a href="#"><img src={img3}/></a>
            <a href="#"><img src={img4}/></a>
            <a href="#"><img src={img5}/></a>
            <a href="#"><img src={img6}/></a>
        </div>
    );
}

export default SaleSlider6imgs;