import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import FOTOS_1 from "../images/FOTOS_1.png";
import FOTOS_2 from "../images/FOTOS_2.png";

import FOTOS_4 from "../images/FOTOS_4.png";

import FOTOS_6 from "../images/FOTOS_6.png";
import FOTOS_7 from "../images/FOTOS_7.png";
import FOTOS_16 from "../images/FOTOS_16.png";
import FOTOS_17 from "../images/FOTOS_17.png";

const CarouselFuntion = ({condition}) => {
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
          <img src={FOTOS_4} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_6} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_7} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_17} className="imgCarousel" />
        </div>
        <div className="contenedorImg">
          <img src={FOTOS_16} className="imgCarousel" />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselFuntion;