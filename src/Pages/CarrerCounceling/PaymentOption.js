import React from "react";
import logo2 from '../../assets/payment-img/card2-removebg-preview.png';
import logo from '../../assets/payment-img/mobile-banking-removebg-preview.png';

const PaymentOption = () => {
  return (
    <div className="mt-12">
      <div className="text-center">
        <button className="btn btn-primary text-white w-[70%] mx-auto">
        <span className="hidden md:block"><img className="w-[50px]" src={logo2} alt="" /></span>
          Pay By Card
        </button>
      </div>
      <div className="text-center">
        <button className="border btn bg-[#FFF] flex items-center mx-auto hover:bg-[#FFF] border-[#003087] mt-6 text-black w-[70%]">
        <span className="hidden md:block"><img className="w-[70px]" src={logo} alt="" /></span>
          Pay By Mobile Banking
        </button>
      </div>
      <div className="shadow-lg p-6 mt-10">
        <p>
          This order process is conducted by our online reseller & Merchant of
          Record, Paddle.com, who also handle order related inquiries and
          returns. Your data will be shared with Resume Builder R&B for product
          fulfilment. Paddle.com Market Ltd, Dhaka,Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default PaymentOption;
