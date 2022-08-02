import React from 'react';
import imgone from "../../assets/guarantee.png";
import imgtwo from "../../assets/guarntee2.png";

const CarrerCouncelingGurrenty = () => {
     return (
          <div className="py-[50px] ">
          <div
            class="     rounded relative mt-[200px] h-[500px] bg-[#374246]  "
            
          >
            <div className="bg-white shadow-xl border border-cyan-500 rounded-3xl max-w-4xl p-10   absolute mt-[-180px] lg:left-[290px]    ">
              <div className="flex items-center justify-center gap-5">
                <div>
                  <img
                    className=" w-8 h-8   "
                    src="https://enhancv.com/static/72114f1672e300b3fe53a055a6345816/38f3c/guarantee-icon.png"
                    alt=""
                  />
                </div>
                <p className="text-3xl text-center  ">The Enhancv Guarantee</p>
              </div>
              <p className="text-center text-3xl py-4">
                Confident and secured with Enhancv Career Counseling
              </p>
    
              <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                <div className="mx-auto my-auto">
                  <img className="w-20  mx-auto   " src={imgone} alt="" />
                  <div className=" text-center">
                    <p className="text-2xl leading-3 py-2  ">
                      {" "}
                      Satisfaction guaranteed <br></br>
                      <span className="text-2xl ">or your money back</span>
                    </p>
                    <p className="  ">
                      If you’re not satisfied during the first 30 days
                      <br></br>
                      <span className="  ">
                        we will fully refund you. As simple as that.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mx-auto my-auto ">
                  <img className="w-20  mx-auto    " src={imgtwo} alt="" />
    
                  <div className="  ">
                    <div className="flex items-center gap-10 justify-center py-2">
                      <p className="text-3xl text-green-500 font-extrabold">78%</p>
                      <p className="   text-xl     ">
                        higher chances of <br></br>
                        <span className="text-1xl font-semibold ">getting an interview</span>
                      </p>
                    </div>
                    <div className="flex items-center    gap-10">
                      <p className="text-3xl text-green-500 font-extrabold ">64%</p>
                      <p className="   text-xl     ">
                        higher chances of <br></br>
                        <span className="text-1xl font-semibold">multiple offers</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
};

export default CarrerCouncelingGurrenty;