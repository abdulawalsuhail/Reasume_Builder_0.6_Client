import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import axiosPrivate from "../../Api/axiosPrivate";
import MyblogCard from "./MyblogCard";

const MyBlog = () => {
  const [user] = useAuthState(auth);
  const [blogs, setBlogs] = useState([]);
  const { data, isLoading, refetch } = useQuery(["blogs"], () => {
    axiosPrivate
      .get(`/blogs/${user?.email}`)
      .then((res) => {
        setBlogs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status) {
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

      <div>
        {blogs.map((blog) => (
          <MyblogCard key={blog._id} blog={blog} refetch={refetch}></MyblogCard>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
