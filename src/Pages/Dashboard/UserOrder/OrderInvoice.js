import jsPDF from "jspdf";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import logo from "../../.././assets/logo.png";



var ReactDOMServer = require('react-dom/server');


const OrderInvoice = ({ order, index }) => {
    console.log(order);
    const {country,email,name,paymentId,price,serviceName,time} = order
  const generatePDF = () => {
    let element = (
        <div className="w-[600px] mt-[50px]">
        <div className="flex items-center justify-between px-8">
          <div className="flex items-center">
            <img className="w-14 mt-2" src={logo} alt="logo" />
  
            <div className="">
              <p>Resume</p>
              <p>Builder</p>
            </div>
          </div>
          <div>
          <div>
          <p className="bg-green-500 px-2 py-1 text-center border-2 border-green-700 text-white font-[500] text-[15px]">
              <span className=" relative bottom-[8px]">Paid</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-[12px] " >Date Of enroll: <span>{time}</span></p>
          </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-8 mt-20">
          <div>
              <p className="text-[12px] text-gray-500">Resume Builder</p>
              <p className="text-[12px] text-gray-500">New York 12883, USA</p>
              <p className="text-[12px] text-gray-500">resumeBuilder@gmail.com</p>
              <p className="text-[12px] text-gray-500">01836-355666</p>
          </div>
          <div>
              <p className="text-[12px] text-gray-500">{name}</p>
              <p className="text-[12px] text-gray-500">{email}</p>
              <p className="text-[12px] text-gray-500">{country}</p>
          </div>
        </div>
        <div className=" px-8 mt-16">
        <div className="flex justify-between items-center border border-1 border-gray-500  bg-gray-100 ">
            <p className="text-[15px] text-gray-500 mb-[14px] px-1">Payment Method</p>
            <p className="text-[15px] text-gray-500 mb-[14px] px-1">TransactionId#</p>
        </div>
        <div className="flex justify-between">
            <p className="text-[12px] text-gray-500">Card</p>
            <p className="text-[12px] text-gray-500">{paymentId}</p>
        </div>
      </div>
      <div className=" px-8 mt-16">
        <div className="flex justify-between border border-1 border-gray-500 px-1 bg-gray-100">
          <p className="text-[15px] text-gray-500 mb-[14px]">Item</p>
          <p className="text-[15px] text-gray-500  mb-[14px]">Price</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] text-gray-500">{serviceName}</p>
          <div className="">
          <p className="text-[12px] text-gray-500 ml-[40px]">${price}</p>
            <p className="text-[12px] text-gray-500 mt-2">
              Subtotal: <span >${price}</span>
            </p>
            <p className="text-[12px] text-gray-500">
              Discount: <span>$0</span>
            </p>
            <p className="text-[12px] text-gray-500">
              Total :<span>${price}</span>
            </p>
          </div>
        </div>
      </div>
      </div>
      );
      const doc = new jsPDF("p", "pt", "letter");
      doc.html(ReactDOMServer.renderToString(element), {
        callback: function (doc) {
          doc.save('invoice.pdf');
        }
      });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{order.name}</td>
        <td>{order.serviceName}</td>
        <td>
          <button
            onClick={generatePDF}
            className="flex items-center btn btn-sm btn-primary text-white"
          >
            {" "}
            <span>
              <AiOutlineDownload className="text-xl" />
            </span>
            Download Invoice
          </button>
        </td>
      </tr>
    </>
  );
};

export default OrderInvoice;
