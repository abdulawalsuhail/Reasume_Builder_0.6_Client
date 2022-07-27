import React from "react";
import Slider from "react-slick";
import resume from "../../../assets/demo1.png";

const RTemplate = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div className="mx-auto w-fit">
          <img src={resume} alt="" />
        </div>
        <div>
          <img src={resume} alt="" />
        </div>
        <div>
          <img src={resume} alt="" />
        </div>
        <div>
          <img src={resume} alt="" />
        </div>
        <div>
          <img src={resume} alt="" />
        </div>
        <div>
          <img src={resume} alt="" />
        </div>
        <div>
          <img src={resume} alt="" />
        </div>
        <div>
          <img src={resume} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default RTemplate;
