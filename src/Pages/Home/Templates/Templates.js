import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Templates.css';

const Templates = () => {

  return (
    <div className="pt-32 pb-8 bg-[#f4f7f8]">
      {/* menu section */}
      <div style={{width:"350px"}} class="border border-accent rounded-full mx-auto">
        <div class="">
          <ul class="flex flex-row justify-between md:px-1 md:py-1">
            <Link className=" text-lg hover:bg-accent hover:text-white px-6 py-1 rounded-full" to="/">Resume</Link>
            <Link className=" text-lg hover:bg-accent hover:text-white px-6 py-1 rounded-full" to="/cv">CV</Link>
            <Link className=" text-lg hover:bg-accent hover:text-white px-6 py-1 rounded-full" to="/coverLetter">Cover Letter</Link>
          </ul>
        </div>
      </div>
      {/* template section */}
      <div className="mx-12 my-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Templates;
