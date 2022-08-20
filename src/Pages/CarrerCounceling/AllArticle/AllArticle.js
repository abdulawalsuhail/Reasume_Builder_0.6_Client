import React, { useState } from "react";
import axiosPrivate from "../../Api/axiosPrivate";
import AllArticleCard from "./AllArticleCard";

// import "../../Css/CarrerCounceling.css";

const AllArticle = () => {

  const [articles,setArticles] = useState([])
  axiosPrivate.get('/all-blog')
  .then(res => {
    setArticles(res.data)
  })
  return (
    <div className="">
      <h1 className="text-3xl font-extrabold text-black-300 text-center p-8">
        All Articles
      </h1>
      <div className=" m-12">
        <hr className=" " style={{ height: "2px", background: "#c6c6c6" }} />
      </div>
    <div className="md:grid grid-cols-2 gap-20 px-12">
      {
        articles.map(article => <AllArticleCard key={article._id}article={article}/>)
      }
    </div>
    </div>
  );
};

export default AllArticle;
