import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import UserInformation from "../../../Hook/UserInformation";
import axiosPrivate from "../../Api/axiosPrivate";

const WriteBlog = () => {
  const [user] = useAuthState(auth)
  const [users] = UserInformation(user)
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const today = new Date();
  const date =
  today.getDate()+ "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
   
  const onSubmit = (data) => {
    const blogs = {
      email:user?.email,
      blogType:data.blogType,
      title:data.title,
      blog:data.blog,
      name:user?.displayName,
      date:date,
      likes:[],
      img:users.img
    }

    axiosPrivate.post('/blogs',blogs)
    .then(res => {
      if(res.data.acknowledged === true){
        Swal.fire({
          icon: "success",
          title: "your post successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      reset()
    }).catch(err => {
      if (err.response.status === 403) {
        Swal.fire({
          icon: "error",
          title: "failed post try again",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  };
  return (
    <div className="px-6">
      <h1 className="text-center mb-6 text-4xl mt-4">Write Blog </h1>
      <div class="card p-10 bg-base-100 shadow-xl">
        <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mx-auto">
            <div>
              <label>Select Blog Type</label>
              <select
                {...register("blogType")}
                onChange={(e) =>
                  setValue("select", e.target.value, { shouldValidate: true })
                } 
                className="rounded-lg py-2 px-4 outline-none border-[1px] border-gray-400 w-[100%]"
              >
                <option value="Resume">Resume</option>
                <option value="CV">CV</option>
                <option value="inspire-stories">inspire stories</option>
                <option value="interview-prep">interview prep</option>
              </select>
              {errors.select && <p>{errors.select.message}</p>}
            </div>
            <label class="label">
              <span class="label-text">Title</span>
            </label>
            <label class="">
              <input
                {...register("title", { required: true })}
                className=" rounded-lg py-2 px-4 outline-none border-[1px] border-gray-400 w-[100%]"
                placeholder="Add Title"
              />
            </label>
            <p className="text-red-600">
              {" "}
              {errors.title?.type === "required" && "title is required"}
            </p>
          </div>
          <div className="form-control  mx-auto">
            <label class="label">
              <span class="label-text">Blog Text</span>
            </label>
            <label class="">
              <textarea
                {...register("blog", { required: true })}
                className=" rounded-lg py-2 px-4 outline-none border-[1px] border-gray-400 w-[100%]"
                placeholder="text here..."
                cols="20"
                rows="6"
              />
            </label>
            <p className="text-red-600">
              {" "}
              {errors.blog?.type === "required" && "blog is required"}
            </p>

            <input
              className="ml-auto mt-6 btn btn-primary  text-white "
              type="submit"
              value="post"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;
