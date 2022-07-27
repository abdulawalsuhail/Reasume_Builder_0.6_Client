import Collapse from "@kunukn/react-collapse";
import React from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import resume from "../../assets/concellPage/resume-writing.png";
const CounsellingServices = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(isOpen);

  const onInit = ({ state, style, node }) => {
    setIsOpen(true);
  };
  return (
    <section className="px-12">
      <div className="grid md:grid-cols-4  mt-16 gap-10">
        <div className="">
          <h4 className="text-4xl text-[#384347] mt-16">
            Pick the plan that suits you best
          </h4>
          <p className="text-[#38434d] text-[18px] mt-5 hidden md:block">
            Our packages are the quickest, safest and most reliable way to get
            your dream job. That’s a guarantee.
          </p>

          {/* resume section */}
          <div className="mt-6">
            <div
              className="flex items-center"
              onClick={() => setIsOpen((state) => !state)}
            >
              <div>
                <img src={resume} alt="" />
              </div>
              <div>
                <div className="flex items-center ">
                  <div>
                    <h4 className="text-[16px] font-semibold text-gray-600">
                      Professional Resume
                    </h4>
                  </div>
                  <div className="ml-14">
                   {
                    isOpen ? <AiOutlineDown className="text-xl font-bold text-gray-600"/> :  <AiOutlineRight className="text-xl font-bold text-gray-600"/>
                   }
                  </div>
                </div>
                <p>Written by a resume expert</p>
              </div>
            </div>
            <Collapse onInit={onInit} isOpen={isOpen}>
              <p className="mt-4 ml-2">
                Together with you, we will write the perfect resume! Using your
                experiences and strengths, we collaborate to build an adaptable
                resume tailored to your specific career. We then show you how to
                independently use the resume for an efficient and effective job
                search.
              </p>
            </Collapse>
          </div>
        </div>

        {/*  */}
        <div className="shadow-lg text-center p-6 border-t-4 border-primary rounded">
          <h2 className="uppercase text-2xl text-primary  mt-2">essential</h2>
          <p className="text-[12px] text-[#384347] mt-5">
            Get a Resume Linkedin revamp and cover letter,while you do the job
            search,interview prep and negation
          </p>
          <h2 className="text-4xl text-[#2d3639] mt-4">$235</h2>
          <button className="btn btn-primary text-white mt-4 px-12">
            By Now
          </button>
          <p className="text-[14px] text-[#384347] mt-6">
            Draft ready within 3 business days of first call
          </p>
        </div>
        <div className="shadow-lg text-center p-6 border-t-4 border-[#8c7cdd] rounded">
          <h2 className="uppercase text-2xl text-[#8c7cdd]  mt-2">Executive</h2>
          <p className="text-[12px] text-[#384347] mt-4">
            Get the full package end to end,for a single job
          </p>
          <h2 className="text-4xl text-[#2d3639] mt-6">$415</h2>
          <button className="btn btn-primary text-white mt-4 px-12">
            By Now
          </button>
          <p className="text-[14px] text-[#384347] mt-6">
            Draft ready within 1 business days of first call
          </p>
        </div>
        <div className="shadow-lg text-center p-6 border-t-4 border-[#feb251] rounded">
          <h2 className="uppercase text-2xl text-[#feb251]  mt-2">
            Executive+
          </h2>
          <p className="text-[12px] text-[#384347] mt-4">
            Get the full package end to end,multiple role,until you get the
            offer you want
          </p>
          <h2 className="text-4xl text-[#2d3639] mt-4">$655</h2>
          <button className="btn btn-primary text-white mt-4 px-12">
            By Now
          </button>
          <p className="text-[14px] text-[#384347] mt-6">
            Draft ready within 1 business days of first call
          </p>
        </div>
      </div>
    </section>
  );
};

export default CounsellingServices;
