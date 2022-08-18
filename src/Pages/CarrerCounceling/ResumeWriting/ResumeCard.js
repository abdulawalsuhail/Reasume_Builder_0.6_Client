import React from "react";
import { useNavigate } from "react-router-dom";

const ResumeCard = ({ resume }) => {
  const { title, blog, name, date, _id } = resume;
  const navigate = useNavigate();
  return (
    <div>
      <div class="card max-w-sm h-[200px] mt-6 mx-auto  bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p className="text-[18px] text-gray-600">
            {blog.slice(0, 50)}

            <span
              onClick={() => navigate(`/career-counselling/blog/${_id}`)}
              className="text-[15px] font-bold text-[#3f66da]"
            >
              see more...
            </span>
          </p>
          <hr className="border-1 border-gray-300" />
          <div className="flex justify-between">
            <div>
              <p className="text-[18px] text-gray-500">{name}</p>
            </div>
            <div>
              <p className="text-[15px] text-gray-500">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
