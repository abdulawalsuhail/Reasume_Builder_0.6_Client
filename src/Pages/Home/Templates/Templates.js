import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Templates.css';

const Templates = () => {

  return (
    <div className="py-12 template lg:relative mt-16">
      {/* menu section */}
      < div className = "md:w-[410px] h-[100px] mx-auto flex justify-center items-center shadow-xl lg:absolute lg:top-[-50px] lg:left-[33%]  2xl:left-[39%] lg:bg-[#687162] rounded-full" >
        <div style={{width:"350px"}} class=" border-accent rounded-full mx-auto bg-white ">
          <ul class="flex flex-row justify-between md:px-1 md:py-1">
            <Link className=" text-lg hover:bg-[#687162] hover:text-white px-6 py-1 rounded-full" to="/">Resume</Link>
            <Link className=" text-lg hover:bg-[#687162] hover:text-white px-6 py-1 rounded-full" to="/cv">CV</Link>
            <Link className=" text-lg hover:bg-[#687162] hover:text-white px-6 py-1 rounded-full" to="/coverLetter">Cover Letter</Link>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center my-12 md:my-20">
        <div className="w-[600px] text-center text-slate-50">
          <h1 className="text-4xl mb-4">Our Creative Templates</h1>
          <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, culpa? Suscipit ea delectus hic distinctio praesentium! Aliquam magni dolore cumque? Earum, omnis aut quam odit deleniti voluptas veritatis nemo sdolore cumque? Earum, omnis aut quam odit deleniti voluptas veritatis?</p>
        </div>
      </div>
      {/* template section */}
      <div className="px-16 pt-8 pb-6 mt-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Templates;
