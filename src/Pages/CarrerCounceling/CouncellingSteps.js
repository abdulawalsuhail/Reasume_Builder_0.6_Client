import React from 'react';

const CouncellingSteps = () => {
     return (
          <div className='mt-5'>
          {/* <h1 className="text-3xl font-extrabold text-center py-4">Steps</h1> */}
    
          <div className="grid    sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 m  gap-14 px-12 py-8    ">
          <div class="card lg:max-w-lg bg-base-100  ">
              <figure class="px-10 pt-10">
                <img
                  src="https://enhancv.com/static/2e9bd59e7d750b2147a7dc53250e724f/46ef0/next-steps-1.png"
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
              <div class="  card-body    ">
                <div className="flex items-center    ">
                  <div>
                    <p className=" text-2xl text-center        bg-indigo-300  h-20 w-20  rounded-full font-extrabold leading-[75px] ">
                      1
                    </p>
                  </div>
                  <div className=" ml-9  ">
                    <h4 className="text-black text-2xl font-semibold ">
                      Choose package
                    </h4>
                    <h4 className="text-black  mt-3  ">
                      Choose the package that suits you the best!
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100  ">
              <figure class="px-10 pt-10">
                <img
                  src="https://enhancv.com/static/c36e4ab54069e0f48cf19b874bdb0a0a/e0c5e/next-steps-3.png"
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
              <div class="  card-body    ">
                <div className="flex items-center    ">
                  <div>
                    <p className=" text-2xl text-center  mt-5      bg-indigo-300  h-20 w-20  rounded-full font-extrabold leading-[75px] ">
                      2
                    </p>
                  </div>
                  <div className=" ml-9  mt-4  ">
                    <h4 className="text-black text-2xl font-semibold ">
                      Choose package
                    </h4>
                    <h4 className="text-black  mt-4  ">
                      Choose the package that suits you the best!
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="card lg:max-w-lg bg-base-100  ">
              <figure class="px-10 pt-10">
                <img
                  src="https://enhancv.com/static/d90d9b1ef48354f3ea10d9294b29db06/46ef0/next-steps-2.png"
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
              <div class="  card-body    ">
                <div className="flex items-center    ">
                  <div>
                    <p className=" text-2xl text-center    mt-6      bg-indigo-300  h-20 w-20  rounded-full font-extrabold leading-[75px] ">
                      3
                    </p>
                  </div>
                  <div className=" ml-9  mt-4  ">
                    <h4 className="text-black text-2xl font-semibold ">
                      Choose package
                    </h4>
                    <h4 className="text-black  mt-4  ">
                      Choose the package that suits you the best!
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
};

export default CouncellingSteps;
