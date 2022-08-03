import React from "react";
import { AiFillStar } from "react-icons/ai";
import image_1 from "../../../assets/reviewer/lukas.jpg";
import image_2 from "../../../assets/reviewer/michael.jpg";

const Review = () => {
    return (
        <div className="pt-24 pb-2 bg-[#a2b2c736]">
            <div className="mx-6 md:mx-24">
                <h1
                    style={{ letterSpacing: "4px" }}
                    className="text-center text-2xl text-secondary mb-10"
                >
                    See what others say about Resume Builder
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mb-12">
                    <div className="shadow-lg p-12">
                        <div>
                            <p className="text-center">
                                I am very pleased to have found Resume Builder when I needed to
                                update my resume. A lot had happened since the last time I had
                                been looking for a job and I also wanted a nicer layout.
                                Everything was simple and straightforward and there were some
                                great templates to choose from. The final result with my resume
                                turned out well.
                            </p>
                        </div>
                        <div className="w-2/4 mx-auto flex justify-center items-center mt-4">
                            <img className="w-24 rounded-full" src={image_1} alt="" />
                            <div className="ml-6">
                                <h1 className="ml-1 mb-2">Lucas abc</h1>
                                <div className="flex">
                                    <AiFillStar className="text-primary text-xl" />
                                    <AiFillStar className="text-primary text-xl" />
                                    <AiFillStar className="text-primary text-xl" />
                                    <AiFillStar className="text-primary text-xl" />
                                    <AiFillStar className="text-primary text-xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-lg p-12">
                        <div>
                            <p>
                                I am very pleased to have found Resume Builder when I needed to
                                update my resume. A lot had happened since the last time I had
                                been looking for a job and I also wanted a nicer layout.
                                Everything was simple and straightforward and there were some
                                great templates to choose from. The final result with my resume
                                turned out well.
                            </p>
                        </div>
                        <div className="w-2/4 mx-auto flex justify-center items-center mt-4">
                            <img className="w-24 rounded-full" src={image_2} alt="" />
                            <div className="ml-6">
                                <h1 className="ml-1 mb-2">Michael abc</h1>
                                <div className="flex">
                                    <AiFillStar className="text-primary text-xl" />
                                    <AiFillStar className="text-primary text-xl" />
                                    <AiFillStar className="text-primary text-xl" />
                                    <AiFillStar className="text-primary text-xl" />
                                    <AiFillStar className="text-primary text-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
