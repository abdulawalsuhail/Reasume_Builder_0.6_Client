import React from "react";
import img_3 from "../../../assets/Business_deals/template-step-01.svg";
import img_4 from "../../../assets/Business_deals/template-step-02.svg";
import img_5 from "../../../assets/Business_deals/template-step-03.svg";

const Guideline = () => {
  return (
    // <div className="bg-gray-100 py-20">
    //   <div className="grid grid-cols-12 gap-12 mx-20 items-center">
    //     <div className="col-span-6">
    //       <div className="grid grid-cols-12 p-4 bg-white rounded-md items-center my-4 shadow-md gap-3">
    //         <img className="col-span-2" src={img_3} alt="img one" />
    //         <div className="col-span-10">
    //           <h1 className="mb-1 text-lg font-semibold">Easy to read</h1>
    //           <p className="text-[15px] font-medium">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //             Maiores nisi Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-12 p-2 bg-white rounded-md items-center my-4 shadow-md gap-3">
    //         <img className="col-span-2 p-2" src={img_4} alt="img one" />
    //         <div className="col-span-10">
    //           <h1 className="mb-1 text-lg font-semibold">Easy to read</h1>
    //           <p className="text-[15px] font-medium">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //             Maiores nisi Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-12 p-2 bg-white rounded-md items-center my-4 shadow-md gap-3">
    //         <img className="col-span-2 p-2" src={img_5} alt="img one" />
    //         <div className="col-span-10">
    //           <h1 className="mb-1 text-lg font-semibold">Easy to read</h1>
    //           <p className="text-[15px] font-medium">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //             Maiores nisi Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-span-6">
    //       <h1 className="text-2xl font-semibold text-primary">Why Chose Us?</h1>
    //       <p className="my-5 text-[16px] font-medium">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Consequuntur, non labore. Doloribus dolorum blanditiis veritatis!
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
    //         eum.
    //       </p>
    //       <p className="text-[16px] font-medium">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         Consequuntur, non labore. Doloribus dolorum blanditiis veritatis!
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
    //         asperiores.
    //       </p>
    //       <button className="btn btn-primary mt-5">Create My Resume</button>
    //     </div>
    //   </div>
    // </div>
    <section className="py-12 h-[80vh] flex justify-center items-center guidelineBackground">
      <div className=" md:w-[70%] mx-auto  pt-6 px-6">
        <div className="text-center pb-20">
          <h1 className="text-4xl md:text-4xl font-bold pb-6 poppins-b">
            Three Simple steps to Follow
          </h1>
          <p className="md:text-lg text-md poppins-t">
            Read the instruction and make your resume or CV
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  pb-20">
          <div className="mb-12 md:mb-0">
            <img className="mx-auto w-[160px]" src={img_3} alt="" srcset="" />
            <h1 className="text-center pt-4 pb-2 text-4xl text-accent poppins-b">
              Step 1
            </h1>
            <p className="px-12 md:px-4 2xl:px-24 mx-auto text-md text-center poppins-t">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              cumque?
            </p>
          </div>
          <div className="mb-16 md:mb-0">
            <img className="mx-auto w-[112px]" src={img_4} alt="" srcset="" />
            <h1 className="text-center pt-4 pb-2 text-4xl text-accent poppins-b">
              Step 2
            </h1>
            <p className="px-12 md:px-4 2xl:px-24 mx-auto text-md text-center poppins-t">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              cumque?
            </p>
          </div>
          <div>
            <img className="mx-auto w-[98px]" src={img_5} alt="" srcset="" />
            <h1 className="text-center pt-4 pb-2 text-4xl text-accent poppins-b">
              Step 3
            </h1>
            <p className="px-12 md:px-4 2xl:px-24 mx-auto text-md text-center poppins-t">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              cumque?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guideline;
