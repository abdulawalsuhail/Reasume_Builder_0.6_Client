import React from "react";
import { Link } from "react-router-dom";
import resultImg from "../../assets/quiz_result.gif";

const QuizResult = () => {
  return (
    <div className="bg-green-50 min-h-screen flex items-center">
      <div className="max-w-md bg-white mx-auto px-10 pb-7 shadow-lg">
        <div className="w-fit mx-auto">
          <div>
            <img className="mx-auto" src={resultImg} alt="" />
          </div>
          <div>
            <h1 className="text-3xl poppins text-rose-600 font-semibold">
              Congratulations 🎉🎉
            </h1>
            <p className="text-lg poppins-b my-4">
              Hi,{" "}
              <span className="text-primary font-semibold">Ashikul islam</span>{" "}
              you got <span className="text-primary font-semibold">3</span> out
              of <span className="text-primary font-semibold">5</span>
            </p>
            <div className="mt-5 mb-2 flex justify-between">
              <Link to="/" className="btn btn-primary">
                Back to home
              </Link>{" "}
              <button className="btn btn-success">See leaderBoard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
