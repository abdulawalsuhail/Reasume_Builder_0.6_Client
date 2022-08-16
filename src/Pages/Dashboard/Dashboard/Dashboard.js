import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { RiAdminLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import "../../../Css/CarrerCounceling.css";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hook/useAdmin";

const Dashboard = () => {

  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <>
      <Navbar />
      <div class="drawer drawer-mobile lg:px-12 ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content no-scroll ">
          {/* <!-- Page content here --> */}

          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side lg:shadow-2xl mr-6">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
          {
            admin && <>
            
            <li className=" hover:text-white rounded-md">
              <NavLink
                className="hover:bg-primary text-black poppins-r uppercase pr-2 mx-2"
                to="/dashboard/all-user"
              >
                <HiUserGroup className="-mr-1 text-[20px]" />
                All-USER
              </NavLink>
            </li>
            <li className=" hover:text-white rounded-md mt-2">
              <NavLink
                className="hover:bg-primary text-black poppins-r uppercase pr-2 mx-2"
                to="/dashboard/all-admin"
              >
                <RiAdminLine className="-mr-1 text-[20px]" />
                ADMIN
              </NavLink>
            </li>
            <li className=" hover:text-white rounded-md mt-2">
              <NavLink
                className="hover:bg-primary text-black poppins-r uppercase pr-2 mx-2"
                to="/dashboard/booking-service"
              >
                <FcSelfServiceKiosk className="-mr-1 text-[20px]" />
                BOOKING SERVICE
              </NavLink>
            </li>
            
            </>
          }
          {
            !admin && <>
            <li className=" hover:text-white rounded-md mt-2">
              <NavLink
                className="hover:bg-primary text-black poppins-r uppercase pr-2 mx-2"
                to="/dashboard/order"
              >
                <FcSelfServiceKiosk className="-mr-1 text-[20px]" />
                Order History
              </NavLink>
            </li>
            <li className=" hover:text-white rounded-md mt-2">
              <NavLink
                className="hover:bg-primary text-black poppins-r uppercase pr-2 mx-2"
                to="/dashboard/add-review"
              >
                <FcSelfServiceKiosk className="-mr-1 text-[20px]" />
                Add-Review
              </NavLink>
            </li>
            
            
            </>
          }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
