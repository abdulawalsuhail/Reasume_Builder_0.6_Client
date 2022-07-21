import React from "react";
import Hero from "./Hero/Hero";
import ResumeTemplate from "./ResumeTemplate/ResumeTemplate";
import WhyResumeBuilder from "./WhyResumeBuilder/WhyResumeBuilder";
import WriteResume from "./WriteResume/WriteResume";

const Home = () => {
  return (
    <div>
      <Hero />
      <WriteResume />
      <WhyResumeBuilder />
      <ResumeTemplate/>
    </div>
  );
};

export default Home;
