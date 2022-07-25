import React from "react";
import "./ResumeTemplate.css";
import template_1 from "../../../assets/demo1.png";
import template_2 from "../../../assets/demo2.png";
import { Link, Outlet } from "react-router-dom";

const ResumeTemplate = () => {

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
      <Outlet/>
    </div>
  );
};

export default ResumeTemplate;
