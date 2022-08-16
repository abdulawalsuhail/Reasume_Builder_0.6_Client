import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import TemplateModal from './TemplateModal';

const CoverLetter = () => {
    const [templateModal, setTemplateModal] = useState(null);
    const cover_Letter_Templates = [
        {
            id: 1,
            name: 'Template_1',
            image: "https://i.ibb.co/7YL4sSM/cl1.png"
        },
        {
            id: 2,
            name: 'Template_2',
            image: "https://i.ibb.co/BgxpcSp/cl9.png"
        },
        {
            id: 3,
            name: 'Template_3',
            image: "https://i.ibb.co/znT2rPr/cl8.png"
        },
        {
            id: 4,
            name: 'Template_4',
            image: "https://i.ibb.co/ph53hc7/cl7.png"
        },
        {
            id: 5,
            name: 'Template_5',
            image: "https://i.ibb.co/rdS7G57/cl5.png"
        },
        {
            id: 6,
            name: 'Template_6',
            image: "https://i.ibb.co/7JpW2TC/cl4.png"
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
        <>
            <Slider {...settings}>
                {
                    cover_Letter_Templates.map(temp => {
                        return (
                            <div
                                style={{ letterSpacing: "3px" }}
                                className='px-2 2xl:px-8 templateContainer'>
                                <img style={{ width: "100%" }} className="templateImage" src={temp.image} alt="" />
                                <div className='w-[95%] 2xl:w-[89%] templateButton p-4'>
                                    <div className='w-[90%] mx-auto flex flex-col justify-between'>
                                        <Link className='customButton text-center' to="/resume-builder/how-to-start" style={{"--clr":"#6eff3e"}}><span>Edit Template</span><i></i></Link>
                                        
                                        <label
                                            onClick={()=>setTemplateModal(temp)}
                                            style={{ "--clr": "#ff1867" }} for="template_modal" class=" modal-button customButton text-center"><span>Preview</span><i></i></label>
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
            {templateModal ? <TemplateModal templateModal={templateModal} /> : ""}
        </>
    );
};

export default CoverLetter;