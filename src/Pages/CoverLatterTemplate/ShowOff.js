import React from "react";
import showOff from "../../../src/assets/show-off.png";
import expert1 from "../../../src/assets/reviewer/lukas.jpg";

const ShowOff = () => {
  return (
    <div>
      <h4 className="md:text-6xl text-5xl md:text-center front-crimson max-w-2xl mx-auto md:py-10 md:px-0 px-6">
        See How We Can Get You Hired 33% Faster
      </h4>
      <div className="lg:grid lg:grid-cols-12 lg:mx-20 md:mx-16 mx-10 items-center gap-10 py-12">
        <div className="lg:col-span-5">
          <img className="" src={showOff} alt="show-off" />
        </div>
        <div className="col-span-7 py-5 mt-0 md:mt-5 lg-mt-0">
          <h3 className="text-5xl front-crimson mt-5 md:mt-0">
            Show Off Your Best Side
          </h3>
          <p className="text-lg mt-9">
            Our Resume Builder has dozens of beautifully-designed templates.
            Each Template in the Resume Builder automatically formats so it
            stays polished no matter what you write.
          </p>
          <div className="grid grid-cols-12 gap-7 mt-12">
            <img
              className="col-span-4 md:col-span-2  rounded-full"
              src={expert1}
              alt="this is expert"
            />
            <div className="col-span-8 md:col-span-10">
              <i className="text-2xl font-">
                "This website has truly helped me make the best possible
                resume!"
              </i>
              <p className="text-lg mt-3">--- Katie Roni</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOff;
