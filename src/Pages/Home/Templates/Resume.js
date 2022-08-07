import React from "react";
import { Link } from "react-router-dom";
import template_1 from "../../../assets/demo1.png";
import template_2 from "../../../assets/demo2.png";
const Resume = () => {
  const resume_Templates = [
    {
      id: 1,
      name: "Template_1",
      image: template_1,
    },
    {
      id: 2,
      name: "Template_2",
      image: template_1,
    },
    {
      id: 3,
      name: "Template_1",
      image: template_1,
    },
    {
      id: 4,
      name: "Template_2",
      image: template_1,
    },
  ];

  return (
    <>
      {resume_Templates.map((tem) => {
        return (
          <div
            style={{ position: "relative" }}
            className="customDiv hover:drop-shadow-[0_20px_15px_rgba(65,105,144,.6)]"
          >
            <h1 className="mb-2 text-md text-accent mt-1">{tem.name}</h1>
            <img className="w-full" src={tem.image} alt="" />
            {/* <Link to="/resume-builder/how-to-start"><a href='#' className='customButton  border p-2 border-0 hidden bg-accent text-white'>Edit Template</a></Link> */}
            <div
              style={{
                position: "absolute",
                left: "20%",
                right: "20%",
                bottom: "10%",
              }}
            >
              <Link
                to="/"
                class="relative px-5 py-4 font-medium text-white group text-lg"
              >
                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:skew-x-12"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-500 group-hover:bg-green-700 group-hover:-skew-x-12"></span>
                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-green-600 -rotate-12"></span>
                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-green-400 -rotate-12"></span>
                <span class="relative poppins-r">Edit Resume</span>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Resume;
