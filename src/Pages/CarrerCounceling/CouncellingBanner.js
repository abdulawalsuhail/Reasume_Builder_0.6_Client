import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CouncellingBanner = () => {

    const [data,setData] = useState("")
    console.log(data);
    const banners = [
        {
            reviewSay:"Resume builder Executive has changed my life: One week & four interviews later, I will be making 150% more doing the job I chose.",
            name:"jencia from,usa",
            img:"https://i.ibb.co/phRdS9w/jenica-layered.png"
        },
        {
            reviewSay:"I needed a complete service, on the highest level, that would fit within the tight hiring schedule. The Resume Builder Executive was exactly that and much more",
            name:"Felix from, Canada",
            img:"https://i.ibb.co/2YNZ0CY/felix-layered.png"
        },
        {
            reviewSay:"I booked really fast and received great support for a price that is hard to get anywhere else.",
            name:"Nuno Belo from,sweden",
            img:"https://i.ibb.co/vcjzfZn/nuno-layered.png"
        },
        {
            reviewSay:"The Resume Builder team, with their expertise in resume writing, wrote exactly the resume I wanted!",
            name:"Giovanni from Milan, Italy",
            img:"https://i.ibb.co/z200Bv7/giovanni-layered.png"

        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    autoplaySpeed:1500,
    }
  return (
    <div  className="bg-[#e1f3f8] px-12 py-10">
    <h2  className="text-5xl text-center text-[#384347]"> Get Your Dream Job</h2>
    <p className="text-center text-[#384347] mt-5 text-[18px]">Nail the recruitment process with Enhancv Career Counseling - your secret weapon</p>
    <Slider {...settings}>
      {
        banners.map(b => <>
        
            <div className="md:flex justify-center items-center gap-24">
                <div className="md:mt-28">
                    <img className="w-64" src={b.img} alt="" />
                </div>
                <div className="md:w-[40%]">
                <h3 className="text-2xl">{`“${b.reviewSay}”`}</h3>
                <div className="flex items-center gap-8 mt-12 ">
                    <div className="w-12 h-[1px] bg-gray-600"></div>
                    <div className="font-bold text-[#384347]">{b.name}</div>
                </div>
                </div>
            </div>
        </>)
      }
      
    </Slider>
  </div>
  );
};

export default CouncellingBanner;
 