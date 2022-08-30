import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import BlogQuery from "../../../Hook/BlogQuery";
import axiosPrivate from "../../Api/axiosPrivate";
const EditBlog = () => {
  const { id } = useParams();
  const [blog] = BlogQuery(id)
  const [newPost,setPost] = useState({})
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()


  useEffect(() => {
    setPost(blog)
  },[blog])

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    const updateBlog = {
      title:newPost.title,
      blog:newPost.blog
    }

    axiosPrivate.patch(`/blog/${id}`,updateBlog)
    .then(res => {
      if(res.data.matchedCount > 0){
        Swal.fire({
          icon: "success",
          title: "your post successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setLoading(!false)
      navigate('/dashboard/my-blog-post')
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
        <div>
              <label>Select Blog Type</label>
              <select
                {...register("blogType")}
                onChange={(e) =>
                  setValue("select", e.target.value, { shouldValidate: true })
                } 
                className="rounded-lg py-2 px-4 outline-none border-[1px] border-gray-400 w-[100%]"
                aria-readonly
              >
                <option  value={blog.blogType}>{blog.blogType}</option>
              </select>
            
            </div>
          <div className="form-control mx-auto">
            <label class="label">
              <span class="label-text">Edit Title</span>
            </label>
            <label class="">
              <input
              type='text'
                {...register("title",)}
                className=" rounded-lg py-2 px-4 outline-none border-[1px] border-gray-400 w-[100%]"
                value={newPost.title}
                onChange={(e) =>
                  setPost({
                      ...newPost,
                      title: e.target.value,
                  })}
              />
            </label>

          </div>
          <div className="form-control  mx-auto">
            <label class="label">
              <span class="label-text">Edit Blog Text</span>
            </label>
            <label class="">
              <textarea
                {...register("blog")}
                className=" rounded-lg py-2 px-4 outline-none border-[1px] border-gray-400 w-[100%]"
                value={newPost.blog}
                rows="10"
                col="6"
                onChange={(e) =>
                  setPost({
                      ...newPost,
                      blog: e.target.value,
                  })}
              />
            </label>
            <input
              className="ml-auto mt-6 btn btn-primary rounded-full text-white "
              type="submit"
              value="save changes"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
