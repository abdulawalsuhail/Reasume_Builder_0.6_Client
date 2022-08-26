import React from "react";

const QuizResult = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1 className="text-3xl poppins text-rose-600 font-semibold">
          Congratulations 🎉🎉
        </h1>
        <p>Hi, [Ashikul islam] you got [3] out of [5]</p>
        <div className="my-4">
          <button className="btn btn-primary">Back to home</button>{" "}
          <button className="btn btn-success">See leaderBoard</button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
