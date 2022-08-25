import Collapse from "@kunukn/react-collapse";
import React from "react";

import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

const CounsellingCard = ({ service }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onInit = ({ state, style, node }) => {
    setIsOpen(false);
  };
  return (
  <>
    <div className="mt-10">
      <div
        className="flex items-center gap-2"
        onClick={() => setIsOpen((state) => !state)}
      >
        <div>
          <img src={service.picture} alt="" />
        </div>
        <div>
          <h4 className="text-[16px] font-semibold text-gray-600">
            {service.name}
          </h4>
          <p>{service.title}</p>
        </div>
      </div>
      <div className="relative left-[290px] bottom-[40px]">
        {isOpen ? (
          <AiOutlineDown className="text-[15px] font-[900] text-gray-600" />
        ) : (
          <AiOutlineRight className="text-[15px] font-bold text-gray-600" />
        )}
      </div>
      <Collapse onInit={onInit} isOpen={isOpen}>
        <p className="mt-4 ml-2 text-gray-500">{service.desc}</p>
      </Collapse>
    </div>
    <div>

    </div>
  </>
  );
};

export default CounsellingCard;
