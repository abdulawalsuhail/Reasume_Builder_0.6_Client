import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { useState } from 'react';
import TemplateModal from './TemplateModal';

const Resume = () => {
    const [templateModal, setTemplateModal] = useState(null);
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
                    resume_Templates.map(temp => {
                        return (
                            <div
                                style={{ letterSpacing: "3px" }}
                                className='px-2 templateContainer'>
                                <img style={{ width: "100%" }} className="templateImage" src={temp.image} alt="" />
                                <div className='w-[95%] templateButton p-4'>
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

export default Resume;