import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/career-objective.png";

const ShouldAddReference = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f4f7f8] px-8 md:px-16 py-10">
      <div className="md:flex items-center justify-around ">
        <div>
          <h1 className="text-4xl font-[700] text-[#4a4a4a]">
            Would you like to include
          </h1>
          <h1 className="text-4xl font-[700] text-[#4a4a4a] mb-6 ">
            any references?
          </h1>
          <p className="text-[#989898] ">
            We recommend NOT including references, unless they were specifically
          </p>
          <p className="text-[#989898] mb-5"> requested in the job ad.</p>

          <div className="flex gap-12">
            <div
              onClick={() => navigate("/resume-builder/reference/")}
              className="border-2 p-12 text-gray-500 hover:border-primary hover:text-primary"
            >
              <span>
                <MdOutlineDone className="text-4xl " />
              </span>
            </div>
            <div
<<<<<<< HEAD
              onClick={() => navigate('/template1')}
              className="border-2 p-12 text-gray-500 hover:border-primary hover:text-primary ">
=======
              onClick={() => navigate('/resume-builder/template1')}
              className="border-2 p-12 text-gray-500 hover:border-[#0ed592] hover:text-[#0ed592] ">
>>>>>>> 0036ebdbb66cb842e8975035d7f648a9c9ecda1b
              <span>
                <AiOutlineClose className="text-4xl " />
              </span>
            </div>
          </div>
        </div>

        {/* card */}
        <div className=" ">
          <div class="card max-w-sm bg-base-100 mt-6 ">
            <div className="text-center mt-4">
              <span class="py-2 text-white rounded-full bg-primary badge-lg mt-2">
                Tips & Advice
              </span>
            </div>
            <div class="card-body">
              <h2 class="card-title text-[#333333]">
                Should I include references?
              </h2>
              <p className="text-gray-500">
                Resume writing experts recommend NOT adding references to your
                resume, unless they were specifically requested in the job ad.
                Writing "References available upon request" is also frowned
                upon. However, we've included it as an option, if you feel the
                company you're applying for will appreciate it.
              </p>
            </div>
            <figure>
              <img src={img} alt="Shoes" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShouldAddReference;
