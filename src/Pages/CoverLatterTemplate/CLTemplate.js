import React from "react";
import clBg from "../../../src/assets/TemplateBg.png";
import demo from "../../../src/assets/demo1.png";
import demo1 from "../../../src/assets/demo2.png";

const CLTemplate = () => {
  return (
    <section className="relative">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25"
        src={clBg}
        alt="resume"
      />
      {/* <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-slate-800 sm:to-slate-600 opacity-75"></div> */}
      <div className="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8 relative">
        <h2 className="lg:text-center text-left my-4 lg:text-5xl text-4xl front-crimson font-semibold">
          Build your cover latter now.First choose a design
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto gap-10 py-10">
          <img className="w-[140%]" src={demo} alt="" />
          <img className="w-[140%]" src={demo1} alt="" />
          <img className="w-[140%]" src={demo} alt="" />
          <img className="w-[140%]" src={demo1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CLTemplate;
