import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import Loading from "../../Shared/Loading/Loading";
import Icon from "./Icon";
const Question = () => {
  const [questions, setQuestions] = useState({});
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  useEffect(() => {
    fetch("question.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  // some variable class name
  let crr = questions[current];
  let normal = `py-2 px-4 border-[1px] border-blue-200 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 mb-3`;
  let correct = `py-2 px-4 border-[1px] border-green-200 bg-green-100 rounded-md cursor-pointer flex justify-between items-center my-3`;
  let wrong = `py-2 px-4 border-[1px] border-red-200 bg-red-100 rounded-md cursor-pointer flex justify-between items-center my-3`;

  // get text
  const getText = (e) => {
    setSelected(e.target.innerText);
  };
  console.log(selected);
  if (!crr) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center">
      <div className=" md:w-[550px] bg-white shadow-lg rounded-lg mx-5">
        <div className="border-b-[1px] border-gray-300 px-8 py-4 poppins-b flex justify-between items-center">
          <p className="text-[18px] font-bold">Please pik a answer</p>
          <div className="bg-blue-100 py-2 px-3">
            <p>
              Time left{" "}
              <span className="bg-slate-700 text-white py-[1px] px-2">15</span>
            </p>
          </div>
        </div>
        <div
          style={{ width: `${(100 / questions?.length) * current}%` }}
          className="h-[2px] bg-green-500 transition duration-700 ease-in-out"
        ></div>
        <div className="py-3 px-8">
          <h1 className="text-[22px] poppins-b font-semibold">
            {crr?.numb}. {crr?.question} ?
          </h1>
          <div className="py-5">
            <div onClick={getText} className={normal}>
              <p>{crr?.options?.option1}</p>
              {/* {selected && <Icon crr={crr} selected={selected} />} */}
            </div>

            <div onClick={getText} className={normal}>
              <p>{crr?.options?.option2}</p>
            </div>

            <div onClick={getText} className={normal}>
              <p>{crr?.options?.option3}</p>{" "}
            </div>

            <div onClick={getText} className={normal}>
              <p>{crr?.options?.option4}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-8 py-3 gap-3 border-t-[1px] border-gray-300">
          <p>
            {crr?.numb} of {questions.length} Questions
          </p>
          {current + 1 < questions?.length ? (
            <button
              onClick={() => {
                const nm = current + 1;
                setCurrent(nm);
              }}
              className="py-2 px-4 rounded-md bg-green-500 text-white"
            >
              Continue
            </button>
          ) : (
            <button className="py-2 px-4 rounded-md bg-green-500 text-white">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
