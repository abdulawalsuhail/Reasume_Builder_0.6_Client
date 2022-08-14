import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";

const Cv = () => {
    const cv_Templates = [
        {
            id: 1,
            name: 'Template_1',
            image: "https://i.ibb.co/GkKRYHk/cv2.png"
        },
        {
            id: 2,
            name: 'Template_2',
            image: "https://i.ibb.co/PwTRcD0/resume10.png"
        },
        {
            id: 3,
            name: 'Template_3',
            image: "https://i.ibb.co/02tvsSY/cv4.png"
        },
        {
            id: 4,
            name: 'Template_4',
            image: "https://i.ibb.co/z2X367M/resume3.png"
        },
        {
            id: 5,
            name: 'Template_5',
            image: "https://i.ibb.co/HPfyqT2/cv5.png"
        },
        {
            id: 6,
            name: 'Template_6',
            image: "https://i.ibb.co/KXbwYk2/cv6.png"
        }
        ,
        {
            id: 7,
            name: 'Template_7',
            image: "https://i.ibb.co/BGkkCjD/cv7.png"
        }
        ,
        {
            id: 8,
            name: 'Template_7',
            image: "https://i.ibb.co/HD3K5h7/cv8.png"
        }
        ,
        {
            id: 9,
            name: 'Template_7',
            image: "https://i.ibb.co/wQQYjgy/cv1.png"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
        <Slider {...settings}>
            {
                cv_Templates.map(temp => {
                    return (
                        <div
                            style={{ letterSpacing: "3px" }}
                            className='mb-10 md:px-4 lg:px-6 templateContainer'>
                            <img style={{ width: "100%" }} className="templateImage" src={temp.image} alt="" />
                            <div className='w-[100%] md:w-[91%] lg:w-[89%] templateButton p-10'>
                                <div className='w-[90%] mx-auto flex flex-col justify-between'>
                                    <Link className='customButton text-center' to="/resume-builder/how-to-start" style={{"--clr":"#6eff3e"}}><span>Edit Template</span><i></i></Link>
                                    <Link className='customButton text-center' to="/resume-builder/how-to-start" style={{"--clr":"#ff1867"}}><span>Preview</span><i></i></Link>
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-2xl'>Our client satisfaction?</h1>
                                    <div className='flex mt-1 justify-center'>
                                        <AiFillStar className='text-green-800 text-xl'/>
                                        <AiFillStar className='text-green-800 text-xl'/>
                                        <AiFillStar className='text-green-800 text-xl'/>
                                        <AiFillStar className='text-green-800 text-xl'/>
                                        <AiFillStar className='text-green-800 text-xl'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    );
};

export default Cv;