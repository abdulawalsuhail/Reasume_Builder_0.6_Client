import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const QuizStart = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-green-50">
        <Link to="/quizRules" className="btn btn-success">
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default QuizStart;
