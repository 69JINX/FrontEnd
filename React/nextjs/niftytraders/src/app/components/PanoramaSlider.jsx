import React, { useEffect } from "react";

const PanoramaSlider = () => {
  useEffect(() => {
    // Add the external CSS link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://panorama-slider.uiinitiative.com/assets/index.c1d53924.css";
    document.head.appendChild(link);

    // Add the module preload link
    const preloadLink = document.createElement("link");
    preloadLink.rel = "modulepreload";
    preloadLink.href =
      "https://panorama-slider.uiinitiative.com/assets/vendor.dba6b2d2.js";
    document.head.appendChild(preloadLink);

    // Add the external script
    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src =
      "https://panorama-slider.uiinitiative.com/assets/index.d2ce9dca.js";
    document.body.appendChild(script);

    // Cleanup script and links on unmount
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preloadLink);
      document.body.removeChild(script);
    };
  }, []);

  const viewImage = (e) => {
    window.open(`/scroll${e.target.dataset.value}.png`, '_blank');
  }
  return (
    <>
        <div className="panorama-slider bg-[#232324]">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div data-value="1" onClick={viewImage} className="swiper-slide ms-20  bg-[url('/scroll1.png')] bg-top bg-[length:400px_900px] bg-no-repeat" style={{ width: '300px' }}>
                {/* <img className="slide-image" src="/scroll.png" alt=""/> */}
              </div>
              <div data-value="2" onClick={viewImage} className="swiper-slide ms-20 bg-[url('/scroll2.png')] bg-top bg-[length:400px_900px] bg-no-repeat">
              </div>
              <div data-value="3" onClick={viewImage} className="swiper-slide ms-20 bg-[url('/scroll3.png')] bg-top bg-[length:400px_900px] bg-no-repeat">
              </div>
              <div data-value="4" onClick={viewImage} className="swiper-slide ms-20 bg-[url('/scroll4.png')] bg-top bg-[length:400px_900px] bg-no-repeat">
              </div>
              <div data-value="5" onClick={viewImage} className="swiper-slide ms-20 bg-[url('/scroll5.png')] bg-top bg-[length:400px_900px] bg-no-repeat">
              </div>
              <div data-value="6" onClick={viewImage} className="swiper-slide ms-20 bg-[url('/scroll6.png')] bg-top bg-[length:400px_900px] bg-no-repeat">
              </div>
              <div data-value="7" onClick={viewImage} className="swiper-slide ms-20 bg-[url('/scroll7.png')] bg-top bg-[length:400px_900px] bg-no-repeat">
              </div>
              <div data-value="8" onClick={viewImage} className="swiper-slide ms-20 bg-[url('/scroll8.png')] bg-top bg-[length:400px_900px] bg-no-repeat">
              </div>

            </div>
            <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default PanoramaSlider;