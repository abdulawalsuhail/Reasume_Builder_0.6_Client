import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo.png";
import auth from "../../firebase.init";
import demoUser from "../../assets/demo_user.png";
import { useQuery } from "@tanstack/react-query";
import axiosFetch from "../../Pages/Api/axiosFetch";
import "./Navbar.css";
import { useEffect } from "react";

const Navbar = () => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    refetch();
  }, [user]);
  const active = "text-primary mx-1 font-medium border-b-2 border-primary pb-1";
  const normal =
    "text-gray-700 mx-1 hover:text-primary font-medium focus:text-gray-700 p-0";

  const navItem = (
    <>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/home"
        >
          HOME
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/cvTemplate"
        >
          CV
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/resumeTemplate"
        >
          RESUME
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? `${active} flex gap-2` : `${normal} flex gap-2`
          }
          to="/coverLatter"
        >
          <div>COVER</div>
          <div>LETTER</div>
        </NavLink>
      </li>

      <li className="nav-item p-2">
        <NavLink
          className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
          to="/quiz"
        >
          QUIZ
        </NavLink>
      </li>
      <li class="dropdown inline-block relative">
        <button class="text-gray-700 font-medium hover:bg-text-primary px-4 py-2 inline-flex items-center">
          <Link to="/career-counselling" class="mr-1 flex gap-2">
            <div>CAREER</div>
            <div>COUNSELLING</div>
          </Link>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 p-2 bg-base-100 z-50 md:w-60">
          <li className="hover:bg-primary hover:text-white uppercase py-2 px-4 rounded-md">
            <Link to="/career-counselling/all-article">All-Articles</Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase py-2 px-4 rounded-md">
            <Link to="career-counselling/resume-write">Resume Writing</Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase py-2 px-4 rounded-md">
            <Link to="/career-counselling/cv-write">CV Writing</Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase py-2 px-4 rounded-md">
            <Link to="/career-counselling/examples">Examples</Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase py-2 px-4 rounded-md">
            <Link to="/career-counselling/personal-development">
              Personal Development{" "}
            </Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase py-2 px-4 rounded-md">
            <Link to="/career-counselling/inspiring-stories">
              Inspiring Stories{" "}
            </Link>
          </li>
          <li className="hover:bg-primary hover:text-white uppercase py-2 px-4 rounded-md">
            <Link to="/career-counselling/interview-preparation">
              Interview Prep{" "}
            </Link>
          </li>
        </ul>
      </li>
    </>
  );

  const { data, refetch } = useQuery(["singleUser"], () =>
    axiosFetch.get(`/user/${user?.email}`)
  );

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        overflow: "hidden",
      }}
      className="px-4 md:pl-10  lg:px-24 bg-[#f4f7f8]"
    >
      {/* Navbar start source code from Daisy UI */}
      <div className="navbar py-4">
        {/* Navbar left portion */}
        <div className="">
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
        <div className="navbar-start hidden ml-8 lg:flex">
          <ul className="menu-horizontal p-0 flex items-center">{navItem}</ul>
        </div>
        {/* End Navbar center portion */}

        {/* Navbar end portion */}
        <div className="navbar-end">
          {user ? (
            <Link
              to="/"
              className="py-2 px-5 text-white rounded-full bg-primary hover:bg-blue-800 font-medium hidden md:flex"
            >
              GET STARTED
            </Link>
          ) : (
            <Link
              to="/login"
              className="py-2 px-5 text-white rounded-full bg-primary hover:bg-blue-800 font-medium hidden md:flex"
            >
              Login
            </Link>
          )}

          <div className="dropdown dropdown-end ml-2">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={data?.data?.img ? data?.data?.img : demoUser}
                  alt="user img"
                />
              </div>
            </label>
            <ul
              tabindex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              {user ? (
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
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* End navbar end portion */}
      </div>
    </div>
  );
};

export default Navbar;
