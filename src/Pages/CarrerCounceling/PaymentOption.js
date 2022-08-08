import React from "react";

const PaymentOption = () => {
  return (
    <div className="mt-12">
      <div className="text-center">
        <button className="btn btn-primary text-white w-[70%] mx-auto">
          Pay By Card
        </button>
      </div>
      <div className="text-center">
        <button className="border btn bg-[#FFF] hover:bg-[#FFF] border-[#003087] mt-6 text-black w-[70%]">
          Pay By Mobile Banking
        </button>
      </div>
      <div className="shadow-lg p-6 mt-10">
        <p>
          This order process is conducted by our online reseller & Merchant of
          Record, Paddle.com, who also handle order related inquiries and
          returns. Your data will be shared with Enhancv R&D for product
          fulfilment. Paddle.com Market Ltd, Judd House, 18-29 Mora Street,
          London EC1V 8BT
        </p>
      </div>
    </div>
  );
};

export default PaymentOption;
