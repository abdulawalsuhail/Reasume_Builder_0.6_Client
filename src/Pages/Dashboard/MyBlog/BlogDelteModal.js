import { signOut } from "firebase/auth";
import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import axiosPrivate from "../../Api/axiosPrivate";

const BlogDelteModal = ({ blogId, setBlogId, refetch }) => {
  const handleDelete = () => {
    axiosPrivate
      .delete(`/blogs/${blogId}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "your post deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch()
        setBlogId(null)
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth);
          Navigate("/");
          localStorage.removeItem("userToken");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="blog-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Do You Want to Delete?</h3>
          <div class="modal-action">
            <label onClick={handleDelete} for="blog-delete-modal" class="btn btn-primary text-white">
              Yes
            </label>
            <label
              for="blog-delete-modal"
              class="btn hover:border border-[#f70000] bg-[#f70000] hover:bg-[#f70000] text-white"
            >
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDelteModal;
