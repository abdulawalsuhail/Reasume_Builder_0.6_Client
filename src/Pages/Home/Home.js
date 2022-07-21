import React from "react";
import Guideline from "./Guideline/Guideline";
import Hero from "./Hero/Hero";
import ResumeTemplate from "./ResumeTemplate/ResumeTemplate";
import Review from "./Review/Review";
import WhyResumeBuilder from "./WhyResumeBuilder/WhyResumeBuilder";
import WriteResume from "./WriteResume/WriteResume";

const Home = () => {
  return (
    <div>
      <Hero />
      <WriteResume />
      <WhyResumeBuilder />
      <ResumeTemplate />
      <Guideline/>
      <Review />
    </div>
  );
};

export default Home;
