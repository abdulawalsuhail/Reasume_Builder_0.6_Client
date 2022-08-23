import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// import { AiFillStar } from "react-icons/ai";
import { useState } from 'react';
import TemplateModal from './TemplateModal';

const Resume = () => {
    const [templateModal, setTemplateModal] = useState(null);
    const resume_Templates = [
        {
            _id: 1,
            name: 'Template_1',
            image: "https://i.ibb.co/HgPGmRN/resume-template100.png"
        },
        {
            _id: 2,
            name: 'Template_2',
            image: "https://i.ibb.co/6mRzZFJ/resume-template200-2.png"
        },
        {
            _id: 3,
            name: 'Template_3',
            image: "https://i.ibb.co/ngG1HD1/resume-template300.png"
        },
        {
            _id: 4,
            name: 'Template_4',
            image: "https://i.ibb.co/FXRsZWS/resume-template400.png"
        },
        {
            _id: 5,
            name: 'Template_5',
            image: "https://i.ibb.co/zQrZH5r/resume-template500.png"
        },
        {
            _id: 6,
            name: 'Template_6',
            image: "https://i.ibb.co/z4TCbN2/resume-template600.png"
        }
        ,
        {
            _id: 7,
            name: 'Template_7',
            image: "https://i.ibb.co/wRm0VVF/resume-template700.png"
        }
        ,
        {
            _id: 8,
            name: 'Template_8',
            image: "https://i.ibb.co/XZRy5w9/resume-template800.png"
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
                                className='mb-6 px-2 2xl:px-8 templateContainer'>
                                <img style={{ width: "100%" }} className="templateImage" src={temp.image} alt="" />
                                <div className='w-[95%] md:w-[95%] 2xl:w-[85%] templateButton p-4'>
                                    <div className='w-[90%] mx-auto flex flex-col justify-between'>
                                        <Link className='customButton text-center' to={`/resume-builder/${temp._id}`} style={{"--clr":"#b93ddb"}}><span>Edit Template</span><i></i></Link>
                                        
                                        <label
                                            onClick={()=>setTemplateModal(temp)}
                                            style={{ "--clr": "#ff1867" }} for="template_modal" class=" modal-button customButton text-center"><span>Preview</span><i></i></label>
                                    </div>
                                    {/* <div className='text-center'>
                                        <h1 className='text-2xl'>Our client satisfaction?</h1>
                                        <div className='flex mt-1 justify-center'>
                                            <AiFillStar className='text-green-800 text-xl'/>
                                            <AiFillStar className='text-green-800 text-xl'/>
                                            <AiFillStar className='text-green-800 text-xl'/>
                                            <AiFillStar className='text-green-800 text-xl'/>
                                            <AiFillStar className='text-green-800 text-xl'/>
                                        </div>
                                    </div> */}
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