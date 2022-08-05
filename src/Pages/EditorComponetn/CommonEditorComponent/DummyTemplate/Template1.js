import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";

const Template1 = () => {
  const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  console.log(usersTemplateInfo);
  return (
    <>
      <div>
        <div className="w-[50%] bg-gray-100 mx-auto mt-6 p-6">
          <div>
            <h1 contentEditable className="text-center  mx-auto text-4xl">
              [{
                usersTemplateInfo[0].value[0].firstName
              } {
                usersTemplateInfo[0].value[1].lastName
              }]
            </h1>
            <h4 contentEditable className="text-center text-2xl mt-4">{usersTemplateInfo[0].value[2].jobTitle}</h4>
          </div>
          <div className="flex justify-between mt-6">
            <div>
              <p contentEditable><span className="font-bold">{usersTemplateInfo[0].name}</span>{usersTemplateInfo[0].value[4].country},{usersTemplateInfo[0].value[5].city},{usersTemplateInfo[0].value[6].state},{usersTemplateInfo[0].value[7].zipCode}</p>
                <p contentEditable><span className="font-bold">{Object.keys(usersTemplateInfo[0].value[8])} </span>{usersTemplateInfo[0]?.value[8]?.email}</p>
              <p contentEditable><span className="font-bold">{Object.keys(usersTemplateInfo[0].value[3])}</span>{usersTemplateInfo[0].value[3].phoneNo}</p>
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
            <h4 className="text-2xl font-bold border-b-[2px] border-gray-600">{usersTemplateInfo[4].name}</h4>
            <hr />
            <div className="flex justify-around mt-6">
                <div className="grid grid-cols-3 gap-6">
                {usersTemplateInfo[4].value.map(skill => {
                  <li className="block">{skill}</li>
                  })}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-2xl font-bold border-b-[2px] border-gray-600">{usersTemplateInfo[2].name}</h4>
            <hr />
            <p contentEditable className="mt-4"><span className="font-bold">{usersTemplateInfo[2].name}</span></p>
            <span>{usersTemplateInfo[2].value[0].schoolName}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template1;
