import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";
import logo from "../../../assets/logo.png";

const CoverLetterNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-8 pb-2 flex justify-between lg:px-20 md:px-10 px-6">
      <button
        className=" text-white text-2xl rounded-full px-3 bg-rose-400 hover:bg-rose-500 "
        onClick={() => navigate(-1)}
      >
        <AiFillBackward />
      </button>

      <div>
        <Link className="flex items-center" to="/">
          <img src={logo} className="w-14" alt="this is logo" />
          <p className="text-2xl front-crimson">Resume Builder</p>
        </Link>
      </div>
    </div>
  );
};

export default CoverLetterNavbar;
