import React from 'react';
import template_1 from "../../../assets/demo1.png";
import template_2 from "../../../assets/demo2.png";

const CoverLetter = () => {
    const coverLetter_Templates = [
        {
            id: 1,
            name: 'Template_1',
            image:template_2
        },
        {
            id: 2,
            name: 'Template_2',
            image:template_1
        },
        {
            id: 3,
            name: 'Template_1',
            image:template_2
        },
        {
            id: 4,
            name: 'Template_2',
            image:template_1
        },
    ]
    return (
        <>
            {
                coverLetter_Templates.map(tem => {
                return <div
                    style={{ letterSpacing: "3px", position:"relative"  }}
                    className="customDiv hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]">
                    <h1 className="mb-2 text-md text-accent mt-1">{tem.name}</h1>
                    <img className="w-full" src={tem.image} alt="" />
                    <a href='#' style={{position:"absolute", left:"20%", right:"20%", bottom:"50%"}} className='customButton  border p-2 border-0 hidden bg-accent text-white hover:translate-x-2'>Edit Template</a>
                </div>
                })
            }
         </>
    );
};

export default CoverLetter;