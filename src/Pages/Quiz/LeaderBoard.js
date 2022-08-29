import React from "react";
import { MdLeaderboard } from "react-icons/md";
import UserRow from "./UserRow";
import Loading from "../../Shared/Loading/Loading";
import axiosPrivate from "../Api/axiosPrivate";
import { useQuery } from "@tanstack/react-query";

const LeaderBoard = () => {
  const { data, isLoading, error } = useQuery(["allQuizResult"], () =>
    axiosPrivate("quizResult")
  );

  if (isLoading) {
    return <Loading />;
  }
  let results = data?.data;
  console.log(results);
  return (
    <div className="bg-white min-h-screen shadow-md md:mt-5 rounded-lg md:p-10 p-2">
      <h3 className="md:text-4xl text-3xl text-primary font-medium flex items-center gap-2">
        leader Board <MdLeaderboard />
      </h3>
      <div className="mt-5 bg-gray-100 rounded-md p-5">
        {results.map((result, index) => (
          <UserRow result={result} position={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
