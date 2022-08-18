import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
                <Link to="/edit-profile">
                  <button className="btn btn-primary p-4 rounded-full   w-50 mt-4 ml-5">
                    Upload photo
                  </button>
                </Link>
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
                    {...register("password", { required: true })}
                    type="password"
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
