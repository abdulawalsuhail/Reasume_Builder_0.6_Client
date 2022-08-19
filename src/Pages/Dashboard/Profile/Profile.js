import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from "../../../firebase.init";

const Profile = () => {

  const [user] = useAuthState(auth)

  return (
    <div className=" py-10">
      <div className="card  shadow-2xl p-6   border-primary rounded-lg mx-10  ">
        <div className="flex   items-center mx-10 justify-between">
          <div>
            <p className="text-2xl font-bold ">My Profile</p>
          </div>
          <div>
          <Link to="/dashboard/edit-profile"><button className="btn btn-link p-4 rounded-full   w-50 mt-4 ml-8">Edit</button></Link>
          </div>
        </div>
        <hr  />
        <div className=" flex  flex-col md:flex-row    py-10 mx-10 gap-10  ">
          <div class="">
            <img
              alt=""
              src="https://placeimg.com/192/192/people"
              className="w-54 rounded-full"
            />
            {/* <button className="btn btn-primary mx-auto  p-4">Edit Profile</button> */}
            <div className=" ">
              <Link to="/dashboard/edit-profile"><button className="btn btn-primary p-4 rounded-full   w-50 mt-4 ml-8 text-white">Edit Profile</button></Link>
            </div>
          </div>

          <div className=" mt-4  ">
            <p  className=" font-semibold mb-2">Student ID:</p>
            <p className="text-xl mb-2"></p>
            <p className="font-semibold mb-2">Full Name:</p>
            <p className="text-xl mb-2">{user?.displayName}</p>
            <p className="font-semibold">Email:</p>
            <p className="text-xl mb-2">{user?.email}</p>
            <p className="font-semibold mb-2">Phone:</p>
            <p className="text-xl mb-2"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
