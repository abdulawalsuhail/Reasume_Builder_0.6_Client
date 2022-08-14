import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";

const Resume = () => {
    const resume_Templates = [
        {
            id: 1,
            name: 'Template_1',
            image: "https://i.ibb.co/PwTRcD0/resume10.png"
        },
        {
            id: 2,
            name: 'Template_2',
            image: "https://i.ibb.co/nwYv0bq/resum1.png"
        },
        {
            id: 3,
            name: 'Template_3',
            image: "https://i.ibb.co/jHDXBJn/resume2.png"
        },
        {
            id: 4,
            name: 'Template_4',
            image: "https://i.ibb.co/z2X367M/resume3.png"
        },
        {
            id: 5,
            name: 'Template_5',
            image: "https://i.ibb.co/s9dktDQ/resume4.png"
        },
        {
            id: 6,
            name: 'Template_6',
            image: "https://i.ibb.co/JCfq3zm/resume5.png"
        }
        ,
        {
            id: 7,
            name: 'Template_7',
            image: "https://i.ibb.co/5TnSLFd/resume6.png"
        }
        ,
        {
            id: 8,
            name: 'Template_7',
            image: "https://i.ibb.co/56GGsQf/resume7.png"
        }
        ,
        {
            id: 9,
            name: 'Template_7',
            image: "https://i.ibb.co/kJZdskD/resume8.png"
        }
        ,
        {
            id: 10,
            name: 'Template_7',
            image: "https://i.ibb.co/ncpqY1L/resume9.png"
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
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
                resume_Templates.map(temp => {
                    return (
                        <div
                            style={{ letterSpacing: "3px" }}
                            className='mb-10 px-6 templateContainer'>
                            <img style={{ width: "100%" }} className="templateImage" src={temp.image} alt="" />
                            <div className='w-[86%] md:w-[89%] templateButton p-10'>
                                <div className='w-[80%] border-2 flex md:flex-row flex-col justify-between'>
                                    <Link className='customButton' to="/resume-builder/how-to-start">Edit Template</Link>
                                    <Link className='customButton' to="/resume-builder/how-to-start">Preview</Link>
                                </div>
                                <div className='mt-10'>
                                    <h1 className='text-xl'>What our client says?</h1>
                                    <div className='flex mt-1'>
                                        <AiFillStar className='text-green-800 md:text-xl'/>
                                        <AiFillStar className='text-green-800 md:text-xl'/>
                                        <AiFillStar className='text-green-800 md:text-xl'/>
                                        <AiFillStar className='text-green-800 md:text-xl'/>
                                        <AiFillStar className='text-green-800 md:text-xl'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {/* {
                resume_Templates.map(tem => {
                return <div
                    className="customDiv hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]">
                    <h1 className="mb-2 text-md text-accent mt-1">{tem.name}</h1>
                    <img className="w-full" src={tem.image} alt="" />
                    <Link to="/resume-builder/how-to-start"><a href='#' style={{position:"absolute", left:"20%", right:"20%", bottom:"50%"}} className='customButton  border p-2 border-0 hidden bg-accent text-white'>Edit Template</a></Link>
                </div>
                })
            } */}
        </Slider>
    );
};

export default Resume;