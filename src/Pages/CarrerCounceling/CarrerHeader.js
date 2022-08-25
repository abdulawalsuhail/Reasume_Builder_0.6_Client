import React from "react";
import { Outlet } from "react-router-dom";
import "../../Css/CarrerCounceling.css";
import CarrerNav from "./CarrerNav";


const CarrerHeader = () => {

 
  return (
    <>
    <CarrerNav></CarrerNav>
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content no-scroll">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default CarrerHeader;
