import React from "react";
import findRightWord from "../../../src/assets/find-write-word.png";
import expert3 from "../../../src/assets/reviewer/lukas.jpg";

const FindRightWord = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-12 lg:mx-20 md:mx-16 mx-10 items-center gap-10 py-12">
        <div className="col-span-7 py-5 mt-0 md:mt-5 lg-mt-0 order-2 lg:order-1">
          <h3 className="text-5xl front-crimson mt-5 md:mt-0">
            Find the Right Words
          </h3>
          <p className="text-lg mt-9">
            Our Resume Builder helps you pick which skills and experience to
            highlight on your resume. With hundreds of pre-written examples for
            thousands of job titles, you’ll show employers you’re the perfect
            fit.
          </p>
          <div className="grid grid-cols-12 gap-7 mt-12">
            <img
              className="col-span-4 md:col-span-2  rounded-full"
              src={expert3}
              alt="this is expert"
            />
            <div className="col-span-8 md:col-span-10">
              <i className="text-2xl font-">
                "Very easy to use to update your resume. Walks you through the
                entire process, suggesting different verbiage to enhance the
                resume."
              </i>
              <p className="text-lg mt-3">--- Alex Thompson</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-6 order-1 lg:order-2">
          <img className="" src={findRightWord} alt="show-off" />
        </div>
      </div>
    </div>
  );
};

export default FindRightWord;
