import React, { useEffect, useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import CounsellingCard from "./CounsellingCard";

const CounsellingServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("counselling.json")
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, []);

  return (
    <section className="px-12 py-16">
      <div className="grid md:grid-cols-4  mt-16 gap-10">
        <div className="">
          <h4 className="text-4xl text-[#384347] mt-16">
            Pick the plan that suits you best
          </h4>
          <p className="text-[#38434d] text-[18px] mt-5 hidden md:block">
            Our packages are the quickest, safest and most reliable way to get
            your dream job. That’s a guarantee.
          </p>

          <div>
            {services.map((service) => (
              <CounsellingCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/*  */}
        <div className="shadow-lg text-center p-6 border-t-4 border-primary rounded ">
          <h2 className="uppercase text-2xl text-primary  mt-2">essential</h2>
          <p className="text-[12px] text-[#384347] mt-5">
            Get a Resume Linkedin revamp and cover letter,while you do the job
            search,interview prep and negation
          </p>
          <h2 className="text-4xl text-[#2d3639] mt-4">$235</h2>
          <button className="btn btn-primary text-white mt-4 px-12">
            By Now
          </button>
          <p className="text-[14px] text-[#384347] mt-[50px]">
            Draft ready within 3 business days of first call
          </p>
          <div className="text-center  ">
            <MdOutlineDone className="text-4xl text-primary mt-[69px] mx-auto hidden md:block" />
          </div>
          <div className="text-center ">
            <MdOutlineDone className="text-4xl text-primary mt-[57px] mx-auto hidden md:block" />
          </div>

          <div>
            <p className="relative top-[83px] hidden md:block text-gray-600 font-[500]">
              Resume Builder pro for 1 month
            </p>
          </div>
          <div>
            <p className="hidden md:block text-gray-600 font-[500] relative top-[162px]">As many review and iteration</p>
          </div>
        </div>
        <div className="shadow-lg text-center p-6 border-t-4 border-[#8c7cdd] rounded">
          <h2 className="uppercase text-2xl text-[#8c7cdd]  mt-2">Executive</h2>
          <p className="text-[12px] text-[#384347] mt-4">
            Get the full package end to end,for a single job
          </p>
          <h2 className="text-4xl text-[#2d3639] mt-6">$415</h2>
          <button className="btn btn-primary text-white mt-[30px] px-12">
            By Now
          </button>
          <p className="text-[14px] text-[#384347] mt-[50px]">
            Draft ready within 1 business days of first call
          </p>
          <div className="text-center ">
            <MdOutlineDone className="text-4xl text-primary mt-[69px] mx-auto hidden md:block" />
          </div>
          <div className="text-center ">
            <MdOutlineDone className="text-4xl text-primary mt-[57px] mx-auto hidden md:block" />
          </div>
          <div>
            <p className="relative top-[83px] hidden md:block text-gray-600 font-[500]">
              Resume Builder pro for 3 month
            </p>
          </div>
          <div>
            <p className="hidden md:block text-gray-600 font-[500] relative top-[162px]">Support every business day and documents prepared ASAP</p>
          </div>
          <MdOutlineDone className="text-4xl text-primary relative top-[232px] mx-auto hidden md:block" />
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
          <button className="btn btn-primary text-white mt-[35px] px-12">
            By Now
          </button>
          <p className="text-[14px] text-[#384347] mt-[50px]">
            Draft ready within 1 business days of first call
          </p>
          <div className="text-center hidden md:block">
            <MdOutlineDone className="text-4xl text-primary mt-[69px] mx-auto" />
          </div>
          <div className="text-center ">
            <MdOutlineDone className="text-4xl text-primary mt-[57px] mx-auto hidden md:block" />
          </div>
          <div>
            <p className="relative top-[83px] hidden md:block text-gray-600 font-[500]">
              Resume Builder pro for 6 month
            </p>
          </div>
          <div>
            <p className="hidden md:block text-gray-600 font-[500] relative top-[162px]">Support every business day and documents prepared ASAP</p>
          </div>
          <MdOutlineDone className="text-4xl text-primary relative top-[232px] mx-auto hidden md:block" />
          <MdOutlineDone className="text-4xl text-primary relative top-[300px] mx-auto hidden md:block" />
          <MdOutlineDone className="text-4xl text-primary relative top-[375px] mx-auto hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default CounsellingServices;
