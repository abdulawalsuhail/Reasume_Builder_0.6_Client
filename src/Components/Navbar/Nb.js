import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoSignOut } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import auth from "../../firebase.init";

const Nb = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const handelSignOut = () => {
    signOut(auth);
    alert("Sign out successful");
  };
  return (
    <div>
      <nav
        className="
relative
w-full
flex flex-wrap
items-center
justify-between
py-4
bg-gray-100
text-gray-500
hover:text-gray-700
focus:text-gray-700
shadow-lg
navbar navbar-expand-lg navbar-light
"
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <a
              className="
      flex
      items-center
      text-gray-900
      hover:text-gray-900
      focus:text-gray-900
      mt-2
      lg:mt-0
      justify-center
      md:mr-8
    "
              href="/"
            >
              <img
                src={logo}
                style={{ height: "10px" }}
                alt=""
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 mx-2 border-b-2 border-rose-700 pb-1 "
                      : "text-gray-500 mx-2 hover:text-gray-700  focus:text-gray-700 p-0"
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 mx-2 border-b-2 border-rose-700 pb-1 "
                      : " text-gray-500 mx-2 hover:text-gray-700  focus:text-gray-700 p-0"
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-rose-600 border-b-2 mx-2 border-rose-700 pb-1 "
                      : "mx-2 text-gray-500 hover:text-gray-700  focus:text-gray-700 p-0"
                  }
                  to="/about"
                >
                  About me
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex max-w-fit mx-auto items-center relative">
            <Link
              className=" px-4 py-1 hover:border-2 rounded-full hover:border-rose-600"
              to="/signUp"
            >
              Sign Up
            </Link>
            {user ? (
              <button
                onClick={handelSignOut}
                className="flex items-center ml-4  bg-rose-600 mr-3 rounded-full hover:bg-rose-700 text-white px-4 py-2"
              >
                <GoSignOut className="mr-2"></GoSignOut> Sign Out
              </button>
            ) : (
              <Link
                className="flex items-center ml-4  bg-rose-600 mr-3 rounded-full hover:bg-rose-700 text-white px-4 py-2"
                to="/login"
              >
                Login
              </Link>
            )}
            <div className="dropdown relative">
              <Link
                className="dropdown-toggle flex items-center hidden-arrow"
                to="/profile"
              >
                <img
                  src={logo}
                  className="rounded-full"
                  style={{ height: "30px", width: "30px" }}
                  alt=""
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nb;
