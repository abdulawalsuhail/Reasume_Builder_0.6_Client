import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';

const MyblogCard = ({ blog, setBlogId }) => {
  const { blogType, title, blog: text, _id } = blog;
  const navigate = useNavigate();
  return (
    <div>
      <div class="card max-w-lg h-[250px] overflow-x-hidden bg-base-100 shadow-xl mt-4">
        <div class="card-body">
          <h2 className="text-xl font-bold">{blogType}</h2>
          <h2 class="card-title">{title}</h2>
          <p>{text.length > 100 ? <span>{text.slice(0,100)} <Link className="text-[#3f66da] font-bold" to='dashboard/see details'>See more ...</Link></span> :text}</p>
          <div class="card-actions justify-end">
            <BiEdit onClick={() => navigate(`/dashboard/edit-blog-post/${_id}`)} className="text-2xl text-[#f7a000] mr-2" />
            <label onClick={() => setBlogId(_id)} for="blog-delete-modal">
              <AiFillDelete className="text-2xl text-red-600 mr-2" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyblogCard;
