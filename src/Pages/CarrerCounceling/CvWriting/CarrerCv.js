import React, { useState } from "react";
import axiosPrivate from "../../Api/axiosPrivate";
import CarrerCvCard from "./CarrerCvCard";

const CarrerCv = () => {
  const [cvs,setCv] = useState([])
  axiosPrivate.get('/all-blog?blogType=CV')
  .then(res => {
    setCv(res.data)
  })
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-black-300 text-center mt-8">
        CV Writing
      </h1>
      <div className=" m-12">
        <hr className=" " style={{ height: "2px", background: "#c6c6c6" }} />
      </div>
      <div className="md:grid grid-cols-2 px-12">
      {
        cvs.map(cv => <CarrerCvCard key={cv._id} cv={cv}/>)
      }
    </div>
    </div>
  );
};

export default CarrerCv;
