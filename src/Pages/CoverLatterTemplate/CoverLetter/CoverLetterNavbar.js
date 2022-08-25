import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";
import logo from "../../../assets/logo.png";

const CoverLetterNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-8 pb-2 flex justify-between lg:px-20 md:px-10 px-6">
      <button
        className=" text-white text-2xl rounded-full p-2 bg-blue-700 hover:bg-blue-800 "
        onClick={() => navigate(-1)}
      >
        <AiFillBackward />
      </button>

      <div>
        <Link to="/">
          <img src={logo} className="w-40" alt="this is logo" />
        </Link>
      </div>
    </div>
  );
};

export default CoverLetterNavbar;
