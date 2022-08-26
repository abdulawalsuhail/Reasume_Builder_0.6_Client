import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import profile from '../../../assets/icon/profile.png';
import logo from "../../../assets/logo.png";
import auth from "../../../firebase.init";
import UserInformation from "../../../Hook/UserInformation";

const DashBoardNav = () => {
    const [user] = useAuthState(auth)
    const [users] = UserInformation(user)
  return (
    <div>
      <div class="navbar bg-base-100 px-12 bg-[#f4f7f8] sticky top-0 z-50 ">
        <div class="navbar-start">
          <div class="dropdown">
            <label
            for="dashboard-nav"
            class="btn btn-primary mr-2 drawer-button lg:hidden"
          >
            <AiOutlineMenu/>
          </label>
          </div>
          <Link to='/' >
            <img className="w-32" src={logo} alt="" />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
        </div>
        <div class="navbar-end">
        <div className="dropdown dropdown-end ml-2">
              <label tabindex="0" className="btn btn-ghost ring ring-primary btn-circle avatar">
                {
                    users.img?<div className="w-10  ">
                    <img src={users?.img}  alt=""/>
                  </div>:<div className="w-10 rounded-full">
                    <img src={profile} alt="" />
                </div>
                }
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
        </div>
      </div>
    </div>
  );
};

export default DashBoardNav;
