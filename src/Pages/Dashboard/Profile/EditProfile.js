import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import axiosPrivate from "../../Api/axiosPrivate";

const EditProfile = () => {

  const [user] = useAuthState(auth)
  const { register, handleSubmit } = useForm();
  const img_key = "c694c4abb3bcf601b0b79494e815c533";

  const uploadImage = (e) => {
    const image = e.target.files[0]
    const formData = new FormData();
    formData.append("image", image);
    axios
    .post(`https://api.imgbb.com/1/upload?&key=${img_key}`, formData)
    .then(res => {
      if(res.data.success){
        const img = res.data.data.url;
        const updateImage = {
          img:img
        }

        axiosPrivate.patch(`/user/image/${user?.email}`,updateImage)
        .then(res => {
          console.log(res.data);
        })
      }
    })
  }
  const onSubmit = (data) =>{
    const image = data.img[0];
    
  } ;
  return (
    <div>
      <div className=" py-10 ">
        <div className="card  shadow-2xl p-6   border-primary rounded-lg mx-10  ">
          <div className="flex   items-center mx-10 justify-between">
            <div>
              <p className="text-2xl font-bold ">My Profile</p>
            </div>
            <div>
              <Link to="/edit-profile">
                <button className="btn btn-link p-4 rounded-full   w-50 mt-4 ml-8">
                  Edit
                </button>
              </Link>
            </div>
          </div>
          <hr />
          <div className=" flex  flex-col md:flex-col lg:flex-row   py-10 mx-10 gap-10  ">
            <div class="  ">
              <img
                alt=""
                src="https://placeimg.com/192/192/people"
                className="w-54 rounded-full"
              />

              
              {/* <button className="btn btn-primary mx-auto  p-4">Edit Profile</button> */}
              <div className=" ">
                <label htmlFor="img"  class="label">
                  <span  class="label-text mx-auto  font-[500] text-xl">
                    <p className="text-white btn btn-primary rounded-full">Upload Photo</p>
                  </span>
                </label>
                <input
                  id="img"
                  type="file"
                  placeholder="Name"
                  hidden
                  class="input input-bordered"
                  onChange={(e) => uploadImage(e)}
                />
              </div>
            </div>

            <div className=" sm:w-full  md:max-w-3xl 	 ">
              <form onSubmit={handleSubmit(onSubmit)} className="    ">
                <div class="form-control ">
                  <label class="label">
                    <span class="label-text">Full Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    class="input input-bordered   rounded-3xl    "
                  />
                </div>
                <div class="form-control  ">
                  <label class="label">
                    <span class="label-text">Email address</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    name="email"
                    class="input input-bordered rounded-3xl    "
                  />
                </div>
                <div class="form-control  ">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input
                    {...register("Phone",)}
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    class="input input-bordered rounded-3xl    "
                  />
                </div>

                <div class="form-control sm:float-left md:float-right lg:float-right  py-6   ">
                  <input
                    className="btn btn-primary m-1 md:w-32 rounded-3xl     "
                    type="submit"
                    value="Save changes"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
