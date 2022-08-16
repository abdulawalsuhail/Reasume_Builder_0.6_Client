import React from "react";

const AddReview = () => {
  return (
    <div>
      <div class="card max-w-sm flex mx-auto mt-20 shadow-lg text-primary-content">
        <div class="card-body">
          <h2 class=" text-center mb-2 text-2xl font-bold">Add Feedback</h2>
        <textarea className="outline-none border-[1px] p-2 rounded border-gray-400" name="" id="" cols="20" rows="6" placeholder="write your feedback"></textarea>
          <div class="card-actions justify-center">
            <button class="btn btn-primary text-white">Send Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
