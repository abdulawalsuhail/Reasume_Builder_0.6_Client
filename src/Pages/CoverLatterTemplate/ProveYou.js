import React from "react";
import { Link } from "react-router-dom";
import proveYou from "../../../src/assets/prove-you.png";
import expert2 from "../../../src/assets/reviewer/michael.jpg";

const ProveYou = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 lg:mx-20 md:mx-16 mx-10 items-center gap-10 py-12">
        <div className="lg:col-span-5">
          <img className="w-[85%] mx-auto" src={proveYou} alt="show-off" />
        </div>
        <div className="col-span-7 py-5 mt-0 md:mt-5 lg-mt-0">
          <h3 className="text-5xl front-crimson mt-5 md:mt-0">
            Prove You’re the Perfect Candidate
          </h3>
          <p className="text-lg mt-9">
            Once you’re done completing your resume template, customize it to
            every job with Resume Customizer. It picks the exact keywords to add
            to your resume.
          </p>
          <div className="grid grid-cols-12 gap-7 mt-12">
            <img
              className="col-span-4 md:col-span-2  rounded-full"
              src={expert2}
              alt="this is expert"
            />
            <div className="col-span-8 md:col-span-10">
              <i className="text-2xl font-">
                "Easy to use and helped me find the job of my dreams."
              </i>
              <p className="text-lg mt-3">--- Marissa Yasin</p>
            </div>
          </div>
          <div className="my-10">
            <Link
              to="/how-write-cover-letter"
              class="relative rounded px-5 py-2.5 overflow-hidden group bg-sky-500  hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300 py-[14px]"
            >
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative">Build my cover latter</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProveYou;
