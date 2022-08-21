import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { Navigate, useParams } from "react-router-dom";
import logo from "../../../assets/icon/profile.png";
import auth from "../../../firebase.init";
import axiosPrivate from "../../Api/axiosPrivate";
const SingleBlog = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [users,setUsers] = useState({});
  const [blog,setBlog] = useState({});
  const [reload, setReload] = useState(false);

  console.log(blog.likes);
  const { data, isLoading, refetch } = useQuery(["user"], () => {
    axiosPrivate
      .get(`/single/user/${user?.email}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          Navigate("/");
          localStorage.removeItem("userToken");
        }
      });
  });
  
  useEffect(() => {
    axiosPrivate.get(`/blog/${id}`)
    .then(res => {
        setBlog(res.data)
    })
},[id])

  const handleLikes = (BlogId) => {
    if(users?._id){
      axiosPrivate.put(`/like/${users?._id}`, { id: BlogId }).then((res) => {
        if(res.data.matchedCount > 0){
          axiosPrivate.get(`/blog/${id}`)
          .then(res => {
              setBlog(res.data)
          })
          axiosPrivate
          .get(`/single/user/${user?.email}`)
          .then((res) => {
            setUsers(res.data);
          })
         
        }
      });
    }
  
  };
  const handleUnLikes = (blogId) => {
    if(users?._id){
      axiosPrivate.put(`/unlike/${users?._id}`, { id: blogId }).then((res) => {
        console.log(res.data);
        if(res.data.matchedCount > 0){
          axiosPrivate.get(`/blog/${id}`)
          .then(res => {
              setBlog(res.data)
          })
  
          axiosPrivate
          .get(`/single/user/${user?.email}`)
          .then((res) => {
            setUsers(res.data);
          })
         
        }
      });
    }
    
  };
  return (
    <div class="card md:w-[70%] mx-auto h-screen bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="avatar">
          <div class="w-24 mx-auto rounded-full ring ring-offset-base-100 ring-offset-2">
            {blog?.img ? <img src={blog?.img} /> : <img src={logo} />}
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
        <div className="flex">
       <div className="flex items-center">
       {
          blog?.likes?.includes(users?._id) === true? <AiFillHeart className="text-4xl text-red-600" onClick={()=>handleUnLikes(blog?._id)}/>  : <AiOutlineHeart className="text-4xl" onClick={() =>handleLikes(blog?._id)} />
        }<span className="text-[15px] font-bold">{blog?.likes?.length} likes</span>
       </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
