import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const PaymentInformation = () => {
  const [userInfo, setUserinfo] = useOutletContext();
  const [countries,setCountry] = useState([])
  const [country,getCountry] = useState("Afghanistan")
  const id = useParams();
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("hello");
    const userInfo = {
      name: user?.displayName,
      email: user?.email,
      country: country,
    };
    setUserinfo(userInfo);
    navigate(`/resume-builder/career-counselling/${id.id}/method`);
  };

  useEffect(()=> {
    axios('https://countriesnow.space/api/v0.1/countries')
    .then(res => {
      setCountry(res.data.data)
    })
  },[])
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Your Name</span>
          </label>
          <input
            readOnly
            placeholder={user?.displayName}
            className="input input-bordered w-full "
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            readOnly
            placeholder={user?.email}
            className="input input-bordered w-full "
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Country</span>
          </label>
          <select
                  onChange={(e)=>getCountry(e.target.value)}
          className="px-4 py-4 outline-none border border-gray-300 rounded">
           {
            countries.map(c => <>
            
            <option value={c.country}
    
            >{c.country}</option>
            </>)
           }
          </select>
        </div>
        <div  class="form-control mt-6">
          <button class="text-white text-[15px] font-[500] uppercase rounded btn-md bg-primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentInformation;
