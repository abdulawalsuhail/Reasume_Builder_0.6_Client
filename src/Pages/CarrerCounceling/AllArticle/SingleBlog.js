import React from "react";
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import BlogQuery from "../../../Hook/BlogQuery";


const SingleBlog = () => {
  const { id } = useParams();
  
  const [blog] = BlogQuery(id);


  return (
    <div class="card md:w-[70%] mx-auto h-screen bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-[25px] font-bold">{blog.title}</h2>
        <div className="flex justify-between mt-10">
            <div>
                <h1 className="text-[18px] text-gray-500 font-bold capitalize">{blog.name}</h1>
                <h1 className="text-[15px] text-gray-500">{blog.date}</h1>
            </div>
            <div className="flex gap-2">
                <FaFacebook className="text-2xl text-gray-500"/>
                <FaLinkedinIn className="text-2xl text-gray-500"/>
            </div>
        </div>
        <p className="text-[22px] text-gray-500 mt-10">{blog.blog}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
