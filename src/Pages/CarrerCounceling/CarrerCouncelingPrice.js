import React from "react";

const CarrerCouncelingPrice = () => {
  return (
    <div className="py-12">
      <div
        class="  min-h-screen bg-no-repeat bg-cover		 "
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1621998951482-d096a4c7dee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        }}
      >
        <div class="hero-overlay  "></div>
        <div class="hero-content text-center   ">
          <div className="grid    sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-14 px-12 py-8">
            <div class="card   lg:max-w-lg  bg-base-100 shadow-xl border-t-4 border-primary  rounded">
              <div class="card-body     items-center text-center ">
                <h2 class="card-title text-2xl text-primary">Essential</h2>
                <p>
                  Get a resume, Linkedin revamp and cover letter, while you do
                  the job search, interview prep, and negotiation.
                </p>
                <p className="text-3xl font-bold text-black  ">$235</p>
                <div class="card-actions">
                  <button class="btn btn-primary text-white">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl border-t-4 border-[#8c7cdd] rounded">
              <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl text-[#8c7cdd]">Executive</h2>
                <p>Get the full package end to end,for a single job</p>
                <p className="text-3xl font-bold text-black ">$415</p>
                <div class="card-actions">
                  <button class="btn btn-primary text-white">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card lg:max-w-lg  bg-base-100 shadow-xl border-t-4 border-[#feb251] rounded">
              <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl text-[#feb251]">Executive+</h2>
                <p>
                Get the full package end to end,multiple role,until you get the offer you want
                </p>
                <p className="text-3xl font-bold text-black">$655</p>
                <div class="card-actions">
                  <button class="btn btn-primary text-white">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerCouncelingPrice;
