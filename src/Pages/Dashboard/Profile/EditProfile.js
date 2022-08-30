import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import profileImg from "../../../assets/icon/profile.png";
import auth from "../../../firebase.init";
import UserInformation from "../../../Hook/UserInformation";
import Loading from "../../../Shared/Loading/Loading";
import axiosPrivate from "../../Api/axiosPrivate";

const EditProfile = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const [users, isLoading, refetch] = UserInformation(user);
  const [updated, setUpdated] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setUpdated(users);
  }, [users]);
  const img_key = "c694c4abb3bcf601b0b79494e815c533";

  const uploadImage = (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(`https://api.imgbb.com/1/upload?&key=${img_key}`, formData)
      .then((res) => {
        if (res.data.success) {
          const img = res.data.data.url;
          const updateImage = {
            img: img,
          };

          axiosPrivate
            .patch(`/user/image/${user?.email}`, updateImage)
            .then((res) => {
              console.log(res.data);
              if (res.data.matchedCount > 0) {
                refetch();
              }
            })
            .catch((err) => {
              if (err.response.status === 401 || err.response.status === 403) {
                signOut(auth);
                Navigate("/");
                localStorage.removeItem("userToken");
              }
            });
        }
      });
  };
  const onSubmit = (data) => {
    const updateProfile = {
      name: updated.name,
      number: updated.number,
    };
    axiosPrivate
      .patch(`/profile/update/${user?.email}`, updateProfile)
      .then((res) => {
        if (res.data.matchedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "information updated",
            showConfirmButton: false,
            timer: 1500,
          });

          refetch();
          navigate("/dashboard");
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className=" py-10 ">
        <div className="card bg-white shadow-2xl p-6   border-primary rounded-lg mx-10  ">
          <div className="flex   items-center mx-10 justify-between">
            <div>
              <p className="text-2xl font-bold ">My Profile</p>
            </div>
            <div>
              <span className="text-primary text-[15px] font-[600] p-4 rounded-full   w-50 mt-4 ml-8">
                Edit
              </span>
            </div>
          </div>
          <hr />
          <div className=" flex  flex-col md:flex-col lg:flex-row   py-10 mx-10 gap-10  ">
            <div class="mt-5">
              {users.img ? (
                <div class="avatar ml-3">
                  <div class="w-32 mx-auto text-center rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img className="" src={users?.img} />
                  </div>
                </div>
              ) : (
                <img
                  className="w-[200px]  rounded-full"
                  src={profileImg}
                  alt="profile"
                ></img>
              )}

              {/* <button className="btn btn-primary mx-auto  p-4">Edit Profile</button> */}
              <div className=" ">
                <label htmlFor="img" class="label">
                  <span class="label-text mx-auto  font-[500] text-xl">
                    <p className="text-white btn px-3 text-[14px] btn-primary rounded-full">
                      Upload Photo
                    </p>
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
                    {...register("name")}
                    type="text"
                    name="name"
                    class="input input-bordered   rounded-3xl  "
                    placeholder={users?.name ? users?.name:user?.displayName }
                    onChange={(e) =>
                      setUpdated({
                        ...updated,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="form-control  ">
                  <label class="label">
                    <span class="label-text">Email address</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={users?.email}
                    name="email"
                    class="input input-bordered rounded-3xl"
                    readOnly
                  />
                </div>
                <div class="form-control  ">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input
                    {...register("Phone")}
                    type="number"
                    name="phone"
                    value={updated.number}
                    class="input input-bordered rounded-3xl"
                    onChange={(e) =>
                      setUpdated({
                        ...updated,
                        number: e.target.value,
                      })
                    }
                  />
                </div>

                <div class="form-control sm:float-left md:float-right lg:float-right  py-6   ">
                  <input
                    className="btn btn-primary m-1 rounded-full text-white px-4     "
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
