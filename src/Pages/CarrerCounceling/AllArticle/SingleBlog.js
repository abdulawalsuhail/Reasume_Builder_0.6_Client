import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { useParams } from "react-router-dom";
import logo from '../../../assets/icon/profile.png';
import BlogQuery from "../../../Hook/BlogQuery";

const SingleBlog = () => {
  const { id } = useParams();

  const [blog] = BlogQuery(id);

  return (
    <div class="card md:w-[70%] mx-auto h-screen bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="avatar">
          <div class="w-24 mx-auto rounded-full ring ring-offset-base-100 ring-offset-2">
            {
              blog?.img?<img src={blog?.img} />:<img src={logo} />
            }
          </div>
        </div>
        <div>
          <h1 className="text-[18px] mt-4 text-center text-gray-500 font-bold capitalize">
            {blog.name}
          </h1>
          <h1 className="text-[15px] text-gray-500 text-center">{blog.date}</h1>
        </div>
        <h2 class="text-[25px] font-bold mt-4">{blog.title}</h2>

        <p className="text-[22px] text-gray-500 mt-10">{blog.blog}</p>
          <div className="flex gap-2 justify-end">
            <FaFacebook className="text-2xl text-gray-500" />
            <FaLinkedinIn className="text-2xl text-gray-500" />
          </div>
      </div>
    </div>
  );
};

export default SingleBlog;
