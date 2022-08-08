import React, { useEffect, useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { useParams } from "react-router-dom";
import img1 from '../../assets/payment-img/img1.png';
import Navbar from "../../Components/Navbar/Navbar";
import axiosPrivate from "../Api/axiosPrivate";
import CareerPaymentSystem from "./CareerPaymentSystem";

const CarrerPayment = () => {
  const { id } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    axiosPrivate.get(`/services/${id}`).then((res) => {
      setService(res.data);
    });
  }, [id]);
  return (
    <div>
        <Navbar/>
      <div className="grid grid-cols-2 gap-8 px-12  ">
        <div className="mt-6">
          <h1 className="text-4xl text-[#2d3639]">Invest in your career </h1>
          <h1 className="text-4xl text-[#2d3639]"> with Resume Builder</h1>
          <p className="text-2xl mt-5">One plan, Endless Possibilities</p>
          <div className="mt-4">
            <span className="flex items-center ">
              <MdOutlineDone className="text-xl text-primary mr-3 mt-2" />{" "}
              <p className="text-gray-500 mt-2">
                Payment through a trusted payment service
              </p>
            </span>
            <span className="flex items-center ">
              <MdOutlineDone className="text-xl text-primary mr-3 mt-2" />{" "}
              <p className="text-gray-500 mt-2">
                SSL Secure / 256-bit SSL secure checkout
              </p>
            </span>
            <span className="flex items-center ">
              <MdOutlineDone className="text-xl text-primary mr-3 mt-2" />{" "}
              <p className="text-gray-500 mt-2">
                Cancel anytime, for whatever reason
              </p>
            </span>
            <span className="flex items-center ">
              <MdOutlineDone className="text-xl text-primary mr-3 mt-2" />{" "}
              <p className="text-gray-500 mt-2">Unlimited entries</p>
            </span>
            <hr  className="mt-6 mb-4"/>
            <img width=""src={img1} alt="" />
          </div>
        </div>
        <div className="bg-[#fafafa] shadow-sm p-10 ">
            <CareerPaymentSystem service={service}/>
        </div>
      </div>
    </div>
  );
};

export default CarrerPayment;
