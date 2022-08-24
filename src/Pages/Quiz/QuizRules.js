import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const QuizRules = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-green-50 flex justify-center items-center">
        <div className=" max-w-lg bg-green-100 shadow-lg rounded-lg mx-5">
          <div className="border-b-[1px] border-green-500 px-8 py-4 text-[20px] font-bold poppins-b">
            <span>Some Rules of this Quiz</span>
          </div>
          <div style={{ lineHeight: "180%" }} className="py-5 px-8 text-[16px]">
            <div className="info">
              1. You will have only <span>15 seconds</span> per each question.
            </div>
            <div className="info">
              2. Once you select your answer, it can't be undone.
            </div>
            <div className="info">
              3. You can't select any option once time goes off.
            </div>
            <div className="info">
              4. You can't exit from the Quiz while you're playing.
            </div>
            <div className="info">
              5. You'll get points on the basis of your correct answers.
            </div>
          </div>
          <div className="flex justify-end px-8 py-3 gap-3 border-t-[1px] border-green-500">
            <button className="py-2 px-4 rounded-md bg-red-500 text-white">
              Exit Quiz
            </button>
            <Link
              to="/quiz"
              className="py-2 px-4 rounded-md bg-green-500 text-white"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizRules;
