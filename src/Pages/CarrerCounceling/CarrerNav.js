import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import auth from "../../firebase.init";
import UserInformation from "../../Hook/UserInformation";
import CareerCustomNavbar from "./CarrerCustomNavar/CareerCustomNavbar";

const CarrerNav = () => {
    const [user] = useAuthState(auth)
    const [users] = UserInformation(user)
  const articleMenu = (
    <>
      <CareerCustomNavbar
        to="/career-counselling"
        className="text-gray-500 uppercase font-[500] ml-4"
      >
        Counselling
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/all-article"
        className="text-gray-500 uppercase font-[500] ml-4"
      >
        All Articles
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/resume-write"
        className="text-gray-500 uppercase font-[500] ml-4"
      >
        resume Writing
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/cv-write"
        className="text-gray-500 uppercase font-[500] ml-4"
      >
        cv Writing
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/inspiring-stories"
        className="text-gray-500 uppercase font-[500] ml-4"
      >
        inspiring stories
      </CareerCustomNavbar>
      <CareerCustomNavbar
        to="/career-counselling/interview-preparation"
        className="text-gray-500 uppercase font-[500] ml-4"
      >
        interview preparation
      </CareerCustomNavbar>
    </>
  );
  return (
    <>
     <div className="px-6 md:px-20 lg:px-24 sticky top-0 z-50 bg-[#f4f7f8]">
      {/* Navbar start source code from Daisy UI */}
      <div className="navbar py-4">
        {/* Navbar left portion */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {articleMenu}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img className="w-48" src={logo} alt="logo" />


            </div>
          </Link>
        </div>
        {/* End Navbar left Portion */}

        {/* Navbar center portion */}
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal ml-8 p-0">{articleMenu}</ul>
        </div>
        {/* End Navbar center portion */}

        {/* Navbar end portion */}
        <div className="navbar-end">

          {users ? (
            <div className="dropdown dropdown-end ml-2">
              <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabindex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to='/dashboard' className="justify-between">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <p
                    onClick={async () => {
                      await signOut(auth);
                    }}
                  >
                    Sign Out
                  </p>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-secondary btn-xs md:btn-md ml-2 modal-button"
            >
              Login
            </Link>
          )}
        </div>
        {/* End navbar end portion */}
      </div>
    </div>
    </>
  );
};

export default CarrerNav;
