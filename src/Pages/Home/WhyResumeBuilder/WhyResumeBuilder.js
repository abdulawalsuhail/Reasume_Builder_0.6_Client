import React from "react";
import { Link } from "react-router-dom";
import whyWe from "../../../assets/why-we.jpg";

const WhyResumeBuilder = () => {
  return (
    <section className="text-white bg-gray-900 relative">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src={whyWe}
        alt="Couple on a bed with a dog"
      />
      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-slate-800 sm:to-slate-600 opacity-75"></div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 relative">
        <div className="max-w-lg mr-auto text-left">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Use The Resume Builder?
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            Resume Builder is lightning fast. There's no software to download.
            No multi-part sign-up form. No long-winded tutorials. Just a
            straightforward process.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a className="block p-8 transition bg-slate-800  shadow-xl rounded-xl hover:shadow-sky-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-left text-white">
              Free AND Premium
            </h3>

            <p className="mt-1 text-sm text-left text-gray-300">
              We offer both free and premium features. Want your resume to have
              that extra punch? Upgrade to Premium. On a budget? That's OK too -
              you can use our resume buider completely free of charge.
            </p>
          </a>
          <a className="block p-8 transition bg-slate-800  shadow-xl rounded-xl hover:shadow-sky-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-left text-white">
              Professional Resume Templates
            </h3>

            <p className="mt-1 text-sm text-left text-gray-300">
              Whatever resume template you're looking for, we've got it! Whether
              it's a classic black-and-white template, or something a bit more
              outside the box, we have what you need!
            </p>
          </a>
          <a className="block p-8 transition bg-slate-800  shadow-xl rounded-xl hover:shadow-sky-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-left text-white">
              NO Hidden Fees
            </h3>

            <p className="mt-1 text-sm text-left text-gray-300">
              With Novorésumé, you won’t spend hours working on your resume,
              just to be hit with a hidden paywall. Our resume builder will
              notify you if you’re using any of our premium features in advance.
            </p>
          </a>
          <a className="block p-8 transition bg-slate-800  shadow-xl rounded-xl hover:shadow-sky-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-left text-white">
              ATS-Friendly
            </h3>

            <p className="mt-1 text-sm text-left text-gray-300">
              Our resume templates are ATS-friendly. It means your resume won’t
              automatically be rejected because an ATS can’t read it.
            </p>
          </a>
          <a className="block p-8 transition bg-slate-800  shadow-xl rounded-xl hover:shadow-sky-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-left text-white">
              Live Content Feedback
            </h3>

            <p className="mt-1 text-sm text-left text-gray-300">
              Our CV builder provides real-time feedback on your resume content,
              ensuring that your resume reaches its full potential!
            </p>
          </a>
          <a className="block p-8 transition bg-slate-800  shadow-xl rounded-xl hover:shadow-sky-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-left text-white">
              Edit Your Resume in Real Time
            </h3>

            <p className="mt-1 text-sm text-left text-gray-300">
              As you edit your resume with our builder, you’ll immediately see
              the changes applied to your document.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link
            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-primary border border-primary rounded hover:bg-transparent active:text-primary focus:outline-none focus:ring"
            to="/"
          >
            <span className="text-sm font-medium"> Get Started </span>

            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyResumeBuilder;
