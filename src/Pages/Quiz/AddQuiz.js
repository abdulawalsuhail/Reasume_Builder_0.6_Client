import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdQuiz } from "react-icons/md";
import bg from "../../assets/quiz_bg.png";
import Loading from "../../Shared/Loading/Loading";
import axiosPrivate from "../Api/axiosPrivate";

const AddQuiz = () => {
  const [loading, setLoading] = useState(false);
  const addQuestion = (e) => {
    setLoading(true);
    e.preventDefault();
    const question = e.target.question.value;
    const answer = e.target.answer.value;
    const option1 = e.target.option1.value;
    const option2 = e.target.option2.value;
    const option3 = e.target.option3.value;
    const option4 = e.target.option4.value;
    const quiz = { question, answer, option1, option2, option3, option4 };
    axiosPrivate.post("addQuiz", quiz).then((res) => {
      setLoading(false);
      toast.success("New quiz added");
    });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <section className="relative">
        <img
          class="absolute inset-0 object-[100%] sm:object-[25%] object-cover w-full h-full lg:opacity-50 sm:opacity-100"
          src={bg}
          alt="resume"
        />

        <div className="lg:mx-16 mx-8 py-16 sm:px-6 lg:px-8 relative">
          <form onSubmit={addQuestion}>
            <h1 className="text-3xl poppins-b font-semibold text-primary flex items-center gap-2">
              Please add a quiz <MdQuiz />
            </h1>
            <div className="my-4">
              <p className="text-[15px] poppins-b">Question</p>
              <input
                type="text"
                required
                placeholder="Job title"
                name="question"
                class="input h-14 border-1 border-gray-300 focus:outline-none w-full mt-1"
              />
            </div>
            <div className="my-4">
              <div>
                <p className="text-[15px] poppins-b">correct answer</p>
                <input
                  type="text"
                  required
                  placeholder="Correct answer"
                  name="answer"
                  class="input h-14 border-1 border-gray-300 focus:outline-none w-full mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 my-4">
                <div>
                  <p className="text-[15px] poppins-b">Option 1</p>
                  <input
                    type="text"
                    required
                    placeholder="Option 1"
                    name="option1"
                    class="input h-14 border-1 border-gray-300 focus:outline-none w-full mt-1"
                  />
                </div>
                <div>
                  <p className="text-[15px] poppins-b">Option 2</p>
                  <input
                    type="text"
                    required
                    placeholder="Option 2"
                    name="option2"
                    class="input h-14 border-1 border-gray-300 focus:outline-none w-full mt-1"
                  />
                </div>
                <div>
                  <p className="text-[15px] poppins-b">Option 3</p>
                  <input
                    type="text"
                    required
                    placeholder="Option 3"
                    name="option3"
                    class="input h-14 border-1 border-gray-300 focus:outline-none w-full mt-1"
                  />
                </div>
                <div>
                  <p className="text-[15px] poppins-b">Option 4</p>
                  <input
                    type="text"
                    required
                    placeholder="Option 4"
                    name="option4"
                    class="input h-14 border-1 border-gray-300 focus:outline-none w-full mt-1"
                  />
                </div>
              </div>
            </div>
            {/* add button */}
            <input
              className="py-3 mt-3 px-7 bg-blue-700 rounded-md hover:bg-blue-800 text-white poppins-b cursor-pointer"
              type="submit"
              value="ADD QUIZ"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddQuiz;
