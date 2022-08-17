import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const MyblogCard = ({ blog, setBlogId }) => {
  const { blogType, title, blog: text, _id } = blog;

  return (
    <div>
      <div class="card max-w-lg h-[250px] overflow-x-hidden bg-base-100 shadow-xl mt-4">
        <div class="card-body">
          <h2 className="text-xl font-bold">{blogType}</h2>
          <h2 class="card-title">{title}</h2>
          <p>{text.slice(0, 100)} see more</p>
          <div class="card-actions justify-end">
            <BiEdit className="text-2xl text-[#f7a000] mr-2" />
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
