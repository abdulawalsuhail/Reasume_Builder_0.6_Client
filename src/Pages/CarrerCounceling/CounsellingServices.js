import React, { useEffect, useState } from "react";

import axiosPrivate from "../Api/axiosPrivate";
import CarrerServicesCard from "./CarrerServicesCard";
import CounsellingCard from "./CounsellingCard";

const CounsellingServices = () => {
  const [services, setServices] = useState([]);
  const [priceService, setPriceService] = useState([]);

  useEffect(() => {
    fetch("counselling.json")
      .then((res) => res.json())
      .then((res) => setServices(res));
  }, []);

  useEffect(() => {
    axiosPrivate.get("/services").then((res) => {
      setPriceService(res.data);
    });
  }, []);

  return (
    <section className="px-12 py-16">
      <div className="grid grid-cols-1  lg:grid-cols-4 mt-16 gap-10">
        <div className="">
          <h4 className="text-4xl text-[#384347] mt-16">
            Pick the plan that suits you best
          </h4>

          <p className="text-[#38434d] text-[18px] mt-5 hidden md:block">
            Our packages are the quickest, safest and most reliable way to get
            your dream job. That’s a guarantee.
          </p>

          <div className="hidden lg:block">
            {services.map((service) => (
              <CounsellingCard key={service.id} service={service} />
            ))}
          </div>
          
        </div>

        {priceService.map((service) => (
          <CarrerServicesCard
            key={service._id}
            service={service}
          ></CarrerServicesCard>
        ))}
      </div>
    </section>
  );
};

export default CounsellingServices;
