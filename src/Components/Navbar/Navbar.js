import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo.png";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navItem = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <Link to="/cvTemplate">CV</Link>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <Link to="/resumeTemplate">RESUME</Link>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <Link to="/coverLatter">COVER LETTER</Link>
      </li>

      {/* <li className="hover:bg-primary hover:text-white rounded-md">
        <a>CAREER COUNSELLING</a>
        
      </li> */}
      <li tabindex="0">
        <Link
          to="/career-counselling"
          className="hover:bg-primary hover:text-white"
        >
          CAREER COUNSELLING
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2 bg-base-100 z-50 md:w-60">
          <li className="hover:bg-primary hover:text-white uppercase">
            <Link to="/career-counselling/all-article">All-Articles</Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase">
            <Link to="career-counselling/resume-write">Resume Writing</Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase">
            <Link to="/career-counselling/cv-write">CV Writing</Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase">
            <Link to="/career-counselling/examples">Examples</Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase">
            <Link to="/career-counselling/personal-development">
              Personal Development{" "}
            </Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase">
            <Link to="/career-counselling/inspiring-stories">
              Inspiring Stories{" "}
            </Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase">
            <Link to="/career-counselling/interview-preparation">
              Interview Prep{" "}
            </Link>
          </li>
        </ul>
      </li>
      <li className="hover:bg-primary hover:text-white rounded-md">
        <Link to="/quiz">Quiz</Link>
      </li>

    </>
  );

  return (
    <div className="px-6 md:px-20 lg:px-24 bg-[#f4f7f8]">
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
              {navItem}
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItem}</ul>
        </div>
        {/* End Navbar center portion */}

        {/* Navbar end portion */}
        <div className="navbar-end">

          {user ? (
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
                      toast.success("Sign Out Successfully");
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
  );
};

export default Navbar;