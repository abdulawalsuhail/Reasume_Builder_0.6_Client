import React from 'react';

const CarrerCouncelingPrice = () => {
     return (
          <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url("https://leverageedu.com/blog/wp-content/uploads/2019/10/Declaration-in-Resume-for-Freshers.jpg")`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center  ">
           <div className="grid    sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-14 px-12 py-8">
           <div class="card lg:max-w-lg  bg-base-100 shadow-xl border-t-4 border-primary rounded">
              <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl text-primary">Essential</h2>
                <p>Get a resume, Linkedin revamp and cover letter, while you do the job search, interview prep, and negotiation.</p>
                <p className="text-3xl font-extrabold text-primary  ">$244</p>
                <div class="card-actions">
                   
                  <button class="btn btn-success">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl border-t-4 border-[#8c7cdd] rounded"  >
              <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl text-[#8c7cdd]">Executive</h2>
                <p>Get a resume, Linkedin revamp and cover letter, while you do the job search, interview prep, and negotiation.</p>
                <p className="text-3xl font-extrabold text-[#8c7cdd]">$244</p>
                <div class="card-actions">
                   
                  <button class="btn btn-success">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card lg:max-w-lg  bg-base-100 shadow-xl border-t-4 border-[#feb251] rounded">
              <div class="card-body items-center text-center">
                <h2 class="card-title text-2xl text-[#feb251]">Executive+</h2>
                <p>Get a resume, Linkedin revamp and cover letter, while you do the job search, interview prep, and negotiation.</p>
                <p className="text-3xl font-extrabold text-[#feb251]">$244</p>
                <div class="card-actions">
                   
                  <button class="btn btn-success">Buy Now</button>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
     );
};

export default CarrerCouncelingPrice;