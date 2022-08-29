import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import Icon from "./Icon";
import axiosFetch from "../Api/axiosFetch";
import axiosPrivate from "../Api/axiosPrivate";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
const Question = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [count, setCount] = useState(60);
  const [lazy, setLazy] = useState(false);
  const [marks, setMarks] = useState(0);
  const [user] = useAuthState(auth);
  const countRef = useRef(null);
  countRef.current = count;

  // timer
  useEffect(() => {
    let timerId = setInterval(() => {
      if (countRef.current > 0) {
        setCount((prevCount) => prevCount - 1);
      } else {
        clearInterval(timerId);
        setSelected("");
        // if (current < data?.data?.length) {
        //   setCurrent(current + 1);
        // }
        setCount(60);
        setLazy(!lazy);
      }
    }, 1000);
  }, [lazy]);
  const { data: users, refetch } = useQuery(["userQuizResult"], () =>
    axiosFetch.get(`/user/${user?.email}`)
  );

  const { data, isLoading, error } = useQuery(["reviews"], () =>
    axiosFetch.get("quiz")
  );
  console.log("user", users);
  // some variable class name
  let crr = data?.data[current];
  let normal = `py-2 px-4 border-[1px] border-blue-200 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 mb-3 my-3`;
  let correct = `py-2 px-4 border-[1px] border-green-300 bg-green-200 rounded-md cursor-pointer flex justify-between items-center my-3`;
  let wrong = `py-2 px-4 border-[1px] border-red-200 bg-red-100 rounded-md cursor-pointer flex justify-between items-center my-3`;
  const navigate = useNavigate();

  // get text
  const getText = (e) => {
    setSelected(e.target.innerText);
  };

  // check user answer

  let totalQuestion = data?.data?.length;
  const checkAnswer = (select) => {
    setCount(60);
    console.log(select);
    if (select === crr?.answer) {
      setMarks(marks + 1);
      console.log("select enter");
    }
  };
  // set result data
  const handelQuizResult = () => {
    const email = user?.email;
    const name = user?.displayName;
    const img = users?.data?.img;
    const quizResult = { email, name, marks, totalQuestion, img };
    // post quiz result data
    axiosPrivate.put(`quiz/${email}`, quizResult).then((res) => {
      console.log(res);
    });
  };

  if ((!crr, isLoading)) {
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
              <span className="bg-slate-700 text-white py-[1px] px-2">
                {count}
              </span>
            </p>
          </div>
        </div>
        <div
          style={{ width: `${(100 / data?.data?.length) * current}%` }}
          className="h-[2px] bg-green-500 transition duration-700 ease-in-out"
        ></div>
        <div className="py-3 px-8">
          <h1 className="text-[22px] poppins-b font-semibold">
            {current + 1}. {crr?.question} ?
          </h1>
          <div className="py-5">
            <div
              onClick={getText}
              className={selected === crr?.option1 ? correct : normal}
            >
              <p>{crr?.option1}</p>
              {selected === crr?.option1 && <Icon />}
            </div>

            <div
              onClick={getText}
              className={selected === crr?.option2 ? correct : normal}
            >
              <p>{crr?.option2}</p>
              {selected === crr?.option2 && <Icon />}
            </div>

            <div
              onClick={getText}
              className={selected === crr?.option3 ? correct : normal}
            >
              <p>{crr?.option3}</p>
              {selected === crr?.option3 && <Icon />}
            </div>

            <div
              onClick={getText}
              className={selected === crr?.option4 ? correct : normal}
            >
              <p>{crr?.option4}</p>
              {selected === crr?.option4 && <Icon />}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-8 py-3 gap-3 border-t-[1px] border-gray-300">
          <p>
            {current + 1} of {data?.data?.length} Questions
          </p>
          {current + 1 < data?.data?.length ? (
            <button
              onClick={() => {
                const nm = current + 1;
                checkAnswer(selected);
                setSelected("");
                setCurrent(nm);
              }}
              className="py-2 px-4 rounded-md bg-green-500 text-white"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={() => {
                handelQuizResult();
                navigate(`/quizResult/${user?.email}`);
              }}
              className="py-2 px-4 rounded-md bg-green-500 text-white"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
