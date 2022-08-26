import React from "react";
import { Link } from "react-router-dom";
import resume from "../../../assets/service_icon/cv.png";
import friendly from "../../../assets/service_icon/friends.png";
import hidden from "../../../assets/service_icon/hidden.png";
import liveContent from "../../../assets/service_icon/live-chat.png";
import premium from "../../../assets/service_icon/premium.png";
import edit from "../../../assets/service_icon/resume.png";
import { BsArrowRight } from "react-icons/bs";

const WhyResumeBuilder = () => {
  return (
    <section className="bg-gray-100">
      <div className="md:mx-16 lg:mx-24 mx-8 py-16 ">
        <div className="max-w-lg mr-auto text-left">
          <h2 className="text-3xl text-primary font-bold poppins-b sm:text-4xl">
            Why Use The Resume Builder?
          </h2>

          <p className="mt-4 text-gray-800 text-[17px] poppins-t">
            Resume Builder is lightning fast. There's no software to download.
            No multi-part sign-up form. No long-winded tutorials. Just a
            straightforward process.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer">
            <img className="w-16" src={premium} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Free AND Premium
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer">
            <img className="w-16" src={resume} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Professional Resume Templates
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              Whatever resume template you're looking for, we've got it! Whether
              it's a classic black-and-white template, or something a bit more
              outside the box, we have what you need!
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer">
            <img className="w-16" src={hidden} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              NO Hidden Fees
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              With Novorésumé, you won’t spend hours working on your resume,
              just to be hit with a hidden paywall. Our resume builder will
              notify you if you’re using any of our premium features in advance.
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer">
            <img className="w-16" src={friendly} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              ATS-Friendly
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              Our resume templates are ATS-friendly. It means your resume won’t
              automatically be rejected because an ATS can’t read it.
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer">
            <img className="w-16" src={liveContent} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Live Content Feedback
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              Our CV builder provides real-time feedback on your resume content,
              ensuring that your resume reaches its full potential!
            </p>
          </a>
          <a className="block p-8 transition bg-white  shadow-md rounded-xl hover:shadow-lg cursor-pointer">
            <img className="w-16" src={edit} alt="" />

            <h3 className="mt-3 mb-2 text-xl font-bold text-left ">
              Edit Your Resume in Real Time
            </h3>

            <p className="mt-1 text-sm text-left text-gray-800">
              As you edit your resume with our builder, you’ll immediately see
              the changes applied to your document.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link
            className="inline-flex items-center px-8 py-3 mt-8  bg-primary border border-primary rounded hover:bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150 text-white hover:text-black"
            to="/"
          >
            <span className="text-sm font-medium"> Get Started </span>
            <BsArrowRight className="text-lg ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyResumeBuilder;
