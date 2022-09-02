import { useQuery } from "@tanstack/react-query";
import React from "react";
import Slider from "react-slick";
import bg from "../../../assets/service_bg.png";
import Loading from "../../../Shared/Loading/Loading";
import axiosFetch from "../../Api/axiosFetch";
import ReviewsCard from "./ReviewCard";

const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // get review data
  const { data, isLoading, error } = useQuery(["reviews"], () =>
    axiosFetch.get("reviews")
  );
  if (isLoading) {
    return <Loading />;
  }
  const reviews = data?.data;
  return (
    <div>
      <section className="relative">
        <img
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src={bg}
          alt="resume"
        />

        <div className="lg:mx-16 mx-8 py-16  sm:px-6 lg:px-8 relative">
          <div className="max-w-sm mx-auto text-center mb-20">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Check Out Resent Reviews!
            </h2>
          </div>
          {/* this is card */}

          <div>
            <Slider {...settings}>
              {reviews?.map((review) => (
                <ReviewsCard review={review} key={review?._id} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
