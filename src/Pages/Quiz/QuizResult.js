import React from "react";
import { Link, useParams } from "react-router-dom";
import resultImg from "../../assets/quiz_result.gif";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import axiosPrivate from "../Api/axiosPrivate";

const QuizResult = () => {
  const { email } = useParams();
  const { data, isLoading, refetch } = useQuery(["quiz_result"], () =>
    axiosPrivate.get(`/quizResult/${email}`)
  );
  if (isLoading) {
    <Loading />;
  }
  return (
    <div className="bg-green-50 min-h-screen flex items-center">
      <div className="max-w-md bg-white mx-auto px-10 pb-7 shadow-lg">
        <div className="w-fit mx-auto">
          <div>
            <img className="mx-auto" src={resultImg} alt="quiz result img" />
          </div>
          <div>
            <h1 className="text-3xl poppins text-rose-600 font-semibold">
              Congratulations 🎉🎉
            </h1>
            <p className="text-lg poppins-b my-4">
              Hi,{" "}
              <span className="text-primary font-semibold">
                {data?.data?.name ? data?.data?.name : data?.data?.email}
              </span>{" "}
              you got{" "}
              <span className="text-primary font-semibold">
                {data?.data?.marks}
              </span>{" "}
              out of{" "}
              <span className="text-primary font-semibold">
                {data?.data?.totalQuestion}
              </span>
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
