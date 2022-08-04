import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";

const Template1 = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-[50%] bg-gray-100 mx-auto mt-6 p-6">
          <div>
            <h1 contentEditable className="text-center  mx-auto text-4xl">
              [Your Name]
            </h1>
            <h4 contentEditable className="text-center text-2xl mt-4">Job Title</h4>
          </div>
          <div className="flex justify-between mt-6">
            <div>
            <p contentEditable><span className="font-bold">Address:</span>khulna,Bangladesh</p>
                <p contentEditable><span className="font-bold">Email:</span>  shariarhossain23@gmail.com</p>
                <p contentEditable><span className="font-bold">Phone:</span> 01998-625490</p>
            </div>
            <div>
            <p contentEditable><span className="font-bold">Linkedin:</span>http/linkendin.com</p>
            <p contentEditable><span className="font-bold">Github:</span>http/linkendin.com</p>
            <p contentEditable><span className="font-bold">Portfolio:</span>http/linkendin.com</p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-2xl font-bold border-b-[2px] border-gray-600">Summary</h4>
            <hr />
            <p contentEditable className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe dolorem rem. Tempore consectetur magnam incidunt voluptatem! Porro, debitis cum? Itaque aliquam magnam expedita doloribus. Beatae possimus pariatur corporis? Adipisci error labore nobis aut voluptate ad doloribus odio fugit unde fuga. Totam sit temporibus veritatis suscipit nisi cum ex perferendis!</p>
          </div>
          <div className="mt-6">
            <h4 className="text-2xl font-bold border-b-[2px] border-gray-600">Skills</h4>
            <hr />
            <div className="flex justify-around mt-6">
                <div>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Bootstrap</li>
                </div>
                <div>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node js</li>
                </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-2xl font-bold border-b-[2px] border-gray-600">Education</h4>
            <hr />
            <p contentEditable className="mt-4"><span className="font-bold">School/college Name</span></p>
            <span>khulna bl college</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template1;
