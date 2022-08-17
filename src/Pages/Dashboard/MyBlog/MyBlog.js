import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import axiosPrivate from "../../Api/axiosPrivate";
import BlogDelteModal from "./BlogDelteModal";
import MyblogCard from "./MyblogCard";

const MyBlog = () => {
  const [user] = useAuthState(auth);
  const [blogs, setBlogs] = useState([]);
  const [blogId, setBlogId] = useState(null);
  const { data, isLoading, refetch } = useQuery(["blogs"], () => {
    axiosPrivate
      .get(`/blogs/${user?.email}`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          Navigate("/");
          localStorage.removeItem("userToken");
        }
      });
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-4xl mt-6 text-center">My Blog Post</h1>

      <div className="md:grid grid-cols-2 gap-10 mt-6 px-6">
        {blogs.map((blog) => (
          <MyblogCard key={blog._id} blog={blog} setBlogId={setBlogId}></MyblogCard>
        ))}
      </div>
      <BlogDelteModal blogId={blogId} setBlogId={setBlogId}  refetch={refetch}  />
    </div>
  );
};

export default MyBlog;
