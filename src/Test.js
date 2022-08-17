import React, { Component } from "react";
import Slider from "react-slick";
import Resume from "./Pages/Home/Templates/Resume";

const Test = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="h-screen bg-slate-400">
        <Slider {...settings}>
          {
            [1,2,3,4,5,6].map(item =>{
                return (
                    <Resume></Resume>
                )
            })
          }
        </Slider>
      </div>
    );
}
  
export default Test;