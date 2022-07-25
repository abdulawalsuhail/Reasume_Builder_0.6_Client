import React from 'react';
import template_1 from "../../../assets/demo1.png";
import template_2 from "../../../assets/demo2.png";
const Cv = () => {
    const cv_Templates = [
        {
            id: 1,
            name: 'Template_1',
            image: template_2
        },
        {
            id: 2,
            name: 'Template_2',
            image: template_2
        },
        {
            id: 3,
            name: 'Template_1',
            image: template_2
        },
        {
            id: 4,
            name: 'Template_2',
            image: template_2
        },
    ]
    return (
        <div className="mx-12 my-12 ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {
                cv_Templates.map(tem => {
                return <div
                    style={{ letterSpacing: "3px" }}
                    className="hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]">
                    <h1 className="mb-4 text-md text-primary mt-1">{tem.name}</h1>
                    <img className="w-full" src={tem.image} alt="" />
                </div>
                })
            }
            </div>
      </div>
    );
};

export default Cv;