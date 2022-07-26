import React from "react";

const CounsellingServices = () => {
  return (
    <div className="grid md:grid-cols-4 px-12 mt-16 gap-10">
      <div className="">
        <h4 className="text-4xl text-[#384347] mt-16">
        Pick the plan that suits you best
        </h4>
        <p className="text-[#38434d] text-[18px] mt-5 hidden md:block">Our packages are the quickest, safest and most reliable way to get your dream job. That’s a guarantee.</p>
      </div>
      <div className="shadow-lg text-center p-6 border-t-4 border-primary rounded">
        <h2 className="uppercase text-2xl text-primary  mt-2">essential</h2>
        <p className="text-[12px] text-[#384347] mt-5">Get a Resume Linkedin revamp and cover letter,while you do the job search,interview prep and negation</p>
        <h2 className="text-4xl text-[#2d3639] mt-4">$235</h2>
        <button className="btn btn-primary text-white mt-4 px-12">By Now</button>
        <p className="text-[16px] text-[#384347] mt-6">Draft ready within 3 business days of first call</p>
      </div>
      <div className="shadow-lg text-center p-6 border-t-4 border-[#8c7cdd] rounded">
        <h2 className="uppercase text-2xl text-[#8c7cdd]  mt-2">Executive</h2>
        <p className="text-[12px] text-[#384347] mt-4">Get the full package end to end,for a single job</p>
        <h2 className="text-4xl text-[#2d3639] mt-6">$415</h2>
        <button className="btn btn-primary text-white mt-4 px-12">By Now</button>
        <p className="text-[16px] text-[#384347] mt-6">Draft ready within 1 business days of first call</p>
      </div>
      <div className="shadow-lg text-center p-6 border-t-4 border-[#feb251] rounded">
        <h2 className="uppercase text-2xl text-[#feb251]  mt-2">Executive+</h2>
        <p className="text-[12px] text-[#384347] mt-4">Get the full package end to end,multiple role,until you get the offer you want</p>
        <h2 className="text-4xl text-[#2d3639] mt-4">$655</h2>
        <button className="btn btn-primary text-white mt-4 px-12">By Now</button>
        <p className="text-[16px] text-[#384347] mt-6">Draft ready within 1 business days of first call</p>
      </div>
    </div>
  );
};

export default CounsellingServices;
