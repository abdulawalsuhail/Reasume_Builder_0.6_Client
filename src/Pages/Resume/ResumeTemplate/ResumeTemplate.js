import React from "react";
import resumeBackground from "../../../assets/resume-background.png";
import RTemplate from "./RTemplate";
const ResumeTemplate = () => {
  return (
    <section className="relative">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src={resumeBackground}
        alt="resume"
      />
      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-black sm:to-transparent opacity-75"></div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 relative">
        <h3 className="text-5xl text-white front-crimson ">
          Build your resume online now. First select a template:
        </h3>
        <RTemplate />
      </div>
    </section>
  );
};

export default ResumeTemplate;
