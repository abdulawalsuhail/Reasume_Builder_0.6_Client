import React from "react";
import { Outlet } from "react-router-dom";
import "../../Css/CarrerCounceling.css";
import Footer from "../../Shared/Footer/Footer";
import CarrerNav from "./CarrerNav";


const CarrerHeader = () => {

 
  return (
    <>
    <CarrerNav></CarrerNav>
      <div class="">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content no-scroll">
          <Outlet></Outlet>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default CarrerHeader;