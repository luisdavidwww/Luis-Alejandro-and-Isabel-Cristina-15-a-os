import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import FOTOS_1 from "../images/FOTOS_8.png";
import FOTOS_2 from "../images/FOTOS_9.png";
import FOTOS_3 from "../images/FOTOS_10.png";
import FOTOS_4 from "../images/FOTOS_11.png";
import FOTOS_5 from "../images/FOTOS_12.png";
import FOTOS_6 from "../images/FOTOS_13.png";
import FOTOS_7 from "../images/FOTOS_14.png";
import FOTOS_18 from "../images/FOTOS_18.png"
import FOTOS_19 from "../images/FOTOS_19.png"
import FOTOS_20 from "../images/FOTOS_20.png"


const CarouselFuntionTwo = ({condition}) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          
    autoplaySpeed: 3000  
  };
  return (
    <div className={`${condition === "algo" ? "slider-container-two" : "slider-container"}`} >
      <Slider {...settings}>
        <div className="contenedorImg">
          <img src={FOTOS_1} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_2} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_3} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_4} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_5} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_6} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_7} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_18} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_19} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_20} className="imgCarousel" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselFuntionTwo;