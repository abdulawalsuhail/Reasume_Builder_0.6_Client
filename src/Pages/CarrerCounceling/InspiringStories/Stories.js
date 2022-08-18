import React, { useState } from "react";
import axiosPrivate from "../../Api/axiosPrivate";
import StoriesCard from "./StoriesCard";
const Stories = () => {
  const [stories,setStories] = useState([])
  axiosPrivate.get('/all-blog?blogType=inspire-stories')
  .then(res => {
    setStories(res.data)
  })
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-black-300 text-center mt-8">
        Inspiring Stories
      </h1>
      <div className=" m-12">
        <hr className=" " style={{ height: "2px", background: "#c6c6c6" }} />
      </div>
    
      <div className="md:grid grid-cols-2 px-12">
      {
        stories.map(story => <StoriesCard key={story._id} story={story}/>)
      }
    </div>
      
      </div>
    
  );
};

export default Stories;
