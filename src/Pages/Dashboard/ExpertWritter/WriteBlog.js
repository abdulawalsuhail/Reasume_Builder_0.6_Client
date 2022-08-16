import React from "react";
import { useForm } from "react-hook-form";

const WriteBlog = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="px-6">
      <h1 className="text-center mb-6 text-4xl mt-4">Write Blog </h1>
      <div class="card p-10 bg-base-100 shadow-xl">
        <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mx-auto">
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
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;
