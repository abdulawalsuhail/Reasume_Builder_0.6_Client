import React from "react";
import Guideline from "./Guideline/Guideline";
import Hero from "./Hero/Hero";
import ResumeTemplate from "./ResumeTemplate/ResumeTemplate";
import Review from "./Review/Review";
import WhyResumeBuilder from "./WhyResumeBuilder/WhyResumeBuilder";
import WriteResume from "./WriteResume/WriteResume";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = () => {
  return (
    <div>
      <Hero />
      <WriteResume />
      <WhyResumeBuilder />
      <ResumeTemplate />
      <Guideline />
      <Review />
      <MessengerCustomerChat
        pageId="105555438910537"
        appId="1225310258009219"
      />
      ,
    </div>
  );
};

export default Home;
